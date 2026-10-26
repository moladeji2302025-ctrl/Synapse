-- Synapse initial schema
-- Postgres (Supabase). Every user-scoped table is isolated by row-level security:
-- a row is visible only to the authenticated user who owns it (user_id = auth.uid()).
-- No table, column, or policy grants an "admin" account a wider view of other users' data;
-- the admin is an ordinary user who records their own devices.

create extension if not exists "pgcrypto";
create extension if not exists "vector";       -- pgvector, for retrieval by the guide

-- ---------------------------------------------------------------------------
-- Devices a user has signed in from.
-- ---------------------------------------------------------------------------
create table devices (
    id          uuid primary key default gen_random_uuid(),
    user_id     uuid not null references auth.users (id) on delete cascade,
    platform    text not null check (platform in ('android', 'pc', 'web')),
    name        text not null default '',
    created_at  timestamptz not null default now(),
    last_seen   timestamptz
);

-- ---------------------------------------------------------------------------
-- Consent: one row per (user, category). An action is recorded only when its
-- category is enabled here. Every change is also appended to consent_audit.
-- ---------------------------------------------------------------------------
create table consent_settings (
    user_id     uuid not null references auth.users (id) on delete cascade,
    category    text not null,   -- apps | screen_content | typing | location | calendar | files | notifications | browsing | media
    enabled     boolean not null default false,
    updated_at  timestamptz not null default now(),
    primary key (user_id, category)
);

create table consent_audit (
    id          bigint generated always as identity primary key,
    user_id     uuid not null references auth.users (id) on delete cascade,
    category    text not null,
    enabled     boolean not null,
    at          timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Episodic memory: the raw stream of consented actions.
-- ---------------------------------------------------------------------------
create table events (
    id          bigint generated always as identity primary key,
    user_id     uuid not null references auth.users (id) on delete cascade,
    device_id   uuid references devices (id) on delete set null,
    ts          timestamptz not null,
    type        text not null,             -- app_open | app_use | screen | input | place | calendar | notification | file | web | media
    app         text,
    title       text,
    payload     jsonb not null default '{}'::jsonb,
    context     jsonb not null default '{}'::jsonb,   -- weekday, hour, month, place, charging, ...
    created_at  timestamptz not null default now()
);
create index on events (user_id, ts);
create index on events (user_id, type, ts);

-- ---------------------------------------------------------------------------
-- Semantic memory: the referential graph.
-- ---------------------------------------------------------------------------
create table entities (
    id          bigint generated always as identity primary key,
    user_id     uuid not null references auth.users (id) on delete cascade,
    kind        text not null,             -- app | person | place | file | topic | task | time_bucket
    label       text not null,
    meta        jsonb not null default '{}'::jsonb,
    unique (user_id, kind, label)
);

create table edges (
    id          bigint generated always as identity primary key,
    user_id     uuid not null references auth.users (id) on delete cascade,
    src         bigint not null references entities (id) on delete cascade,
    dst         bigint not null references entities (id) on delete cascade,
    relation    text not null,             -- co_occurs | follows | in_context
    weight      double precision not null default 0,   -- Hebbian EMA, decays over time
    count       integer not null default 0,
    last_seen   timestamptz,
    unique (user_id, src, dst, relation)
);
create index on edges (user_id, src, weight desc);

-- ---------------------------------------------------------------------------
-- Procedural memory: mined rhythms, and suggestions drawn from them.
-- ---------------------------------------------------------------------------
create table rhythms (
    id           bigint generated always as identity primary key,
    user_id      uuid not null references auth.users (id) on delete cascade,
    pattern_type text not null,            -- periodic | sequential | contextual
    descriptor   jsonb not null,           -- e.g. {app, weekday, hour} or {a, b, within_s}
    confidence   double precision not null default 0,
    support      integer not null default 0,
    updated_at   timestamptz not null default now()
);
create index on rhythms (user_id, confidence desc);

create table suggestions (
    id          bigint generated always as identity primary key,
    user_id     uuid not null references auth.users (id) on delete cascade,
    rhythm_id   bigint references rhythms (id) on delete cascade,
    status      text not null default 'proposed' check (status in ('proposed','accepted','dismissed','settled')),
    kept_count  integer not null default 0,
    at          timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Executive: a plan rebuilt for a given date from matching rhythms + context.
-- ---------------------------------------------------------------------------
create table plans (
    id            bigint generated always as identity primary key,
    user_id       uuid not null references auth.users (id) on delete cascade,
    plan_date     date not null,
    items         jsonb not null default '[]'::jsonb,   -- ordered time-blocks
    generated_at  timestamptz not null default now(),
    unique (user_id, plan_date)
);

-- ---------------------------------------------------------------------------
-- Retrieval memory for the guide (pgvector).
-- ---------------------------------------------------------------------------
create table embeddings (
    id          bigint generated always as identity primary key,
    user_id     uuid not null references auth.users (id) on delete cascade,
    source      text not null,            -- event | note
    source_id   bigint,
    content     text not null,
    embedding   vector(1536),
    created_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Row-level security: each user sees only their own rows. Applied uniformly;
-- there is no admin bypass policy.
-- ---------------------------------------------------------------------------
do $$
declare t text;
begin
  foreach t in array array['devices','consent_settings','consent_audit','events',
                           'entities','edges','rhythms','suggestions','plans','embeddings']
  loop
    execute format('alter table %I enable row level security;', t);
    execute format($p$create policy %1$s_owner on %1$I
                       using (user_id = auth.uid())
                       with check (user_id = auth.uid());$p$, t);
  end loop;
end $$;
