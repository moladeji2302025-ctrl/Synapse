# Synapse — Project Context (read this first)

This file is the single source of truth for the whole project, so any new session can pick up
exactly where we left off. Last updated: 2026-10-26.

> How to resume in a new session: open the session with the working directory set to
> `C:\Users\mofej\Synapse`. `CLAUDE.md` loads automatically and points here. Read this file,
> then `docs/ARCHITECTURE.md` and the newest files under `docs/dissertation/`, and continue
> from **Current status** below.

---

## 1. What this is
A final-year university project: a cross-device AI that signs users in, records what they do
across **Android, PC and web** (with consent), syncs it into one per-user store, and learns a
close-to-precise model of their routine and structure. It is **not** a fixed daily timetable
or a set of preset commands — every stored fact references others (a graph), so plans adapt to
day-of-week, time-of-day, month and context, and it reasons across its own data so it "appears
to think." It also acts as a friendly guide during the user's workflow.

Assessed: the **working app**, the **written dissertation**, and a **live demo**.

## 2. Fixed decisions
- **Stack:** Kotlin + Jetpack Compose (Android), React + Vite (web), Electron + Node (PC agent,
  phase 2), **Supabase** (Postgres + Auth + Realtime + RLS + Edge Functions) for the backend.
  Claude API for the guide, `pgvector` for retrieval.
- **First milestone:** proposal defense in ~4 weeks (target ≈ **2026-11-23**). Needed there:
  the **proposal document + a small working prototype**.
- **Name:** working title "Synapse" — not final, confirm with the owner.

## 3. Hard scope boundary (never crossed, every account including admin)
- Consent-based collection only; an onboarding phase sets per-category toggles.
- **PINs, passwords and card/CVV are never recorded** anywhere. On Android, skip password
  fields (`isPassword`) and the lock screen.
- **No hidden / "jailbreak" / covert capture mode exists.** The admin account runs the same
  build and same code path as everyone; it only records the admin's *own* devices at the
  breadth the admin enabled, for the live showcase of depth on the admin's own data.
- **Location rule:** everything lives under `C:\Users\mofej\Synapse` with its own git repo.
  Never write into, read from, or import `C:\Users\mofej\Hope`. Hope's data, keys and the
  cloned Imogen voice are never used here.

## 4. The concept — a "mind" in four layers
1. **Episodic memory — events:** every consented action as `{user, device, ts, type, app,
   title, payload, context}`.
2. **Semantic memory — the referential graph:** nodes (apps, people, places, files, topics,
   tasks, time-buckets) linked by weighted edges (co-occurs / follows / in-context). Weights
   update Hebbian-style with time decay. This is what makes operations reference one another.
3. **Procedural memory — rhythms:** mined periodic + sequential patterns, conditioned on
   context, each with confidence + support.
4. **Executive — planner + guide:** the planner rebuilds each day's schedule from the rhythms
   whose context matches *that* day; the guide (LLM) answers and nudges from the retrieved
   subgraph + events.

## 5. Architecture (summary)
Clients post consented events to Supabase; **RLS isolates each user's rows**; an offline queue
on each client flushes when online. Scheduled jobs (`pg_cron` + a small worker) update the
graph, mine rhythms and generate plans. The guide is a server-side Edge Function calling Claude
(key stays server-side). Full detail in `docs/ARCHITECTURE.md`; schema in
`docs/DATA_MODEL.md` and `backend/migrations/0001_init.sql`.

## 6. Learning (summary)
- **Graph update:** strengthen co-occurrence edges among entities active in a short window
  (EMA weight), decay periodically.
- **Rhythm mining:** periodic (bucket by weekday/hour/month, support + consistency →
  confidence), sequential (n-gram / PrefixSpan → "A then B within T"), contextual (condition on
  weekday / time-of-day / month / place).
- **Planner:** pick rhythms matching the target date's context, resolve conflicts by confidence
  and fixed calendar events, emit an ordered time-blocked schedule (recomputed daily).
- **Suggest → accept/dismiss → settle** loop; a repeatedly-kept rhythm settles and auto-applies.

## 7. Repo layout
`android/` · `web/` · `pc/` (phase 2) · `backend/` (migrations + edge functions) · `docs/`
(living docs + `dissertation/` + `diagrams/`). Root: `README.md`, `CLAUDE.md`, `.gitignore`.

## 8. Milestones to defense (~4 weeks)
- **Week 1:** repo + Supabase schema/auth/RLS; proposal chapters 1–3 drafts; architecture + ER
  + use-case diagrams.
- **Week 2:** Android collector (UsageStats + consented accessibility) posting events; consent
  onboarding screen; web sign-in + dashboard skeleton; design chapter + sequence/graph diagrams.
- **Week 3:** rhythm miner (periodic + simple sequence) with one visible detected rhythm on the
  dashboard; guide-chat PoC; methodology + partial implementation chapter.
- **Week 4:** polish demo, evaluation plan, finalize the proposal document, bring living docs
  current, rehearse.

## 9. Current status (update this section every working session)
**2026-10-26 — scaffolding started (Week 1).** Created in `C:\Users\mofej\Synapse`:
- `README.md`, `CLAUDE.md` (standing rules), `.gitignore`
- `backend/migrations/0001_init.sql` — full initial schema with RLS and pgvector
- `docs/PROJECT_CONTEXT.md` (this file)
- `docs/HOPE_REFERENCE.md` — Hope patterns to borrow and re-implement (consent-gated recording,
  routine suggest/keep/settle, offline queue, encrypted storage, living-docs style), with the
  rule that Hope's private data, keys and the Imogen voice never come across.

**Next steps (resume here):**
1. Write the rest of the living docs: `docs/ARCHITECTURE.md`, `docs/DATA_MODEL.md`,
   `docs/PRIVACY.md`, `docs/FEATURES.md`, `docs/FILES.md`.
2. Add diagram sources under `docs/diagrams/` (architecture, ER, use-case, sequence, graph, DFD)
   as Mermaid/PlantUML.
3. Start `docs/dissertation/` chapters 1–3.
4. `git init` in `C:\Users\mofej\Synapse` (own repo) and first commit.
5. Scaffold `web/` (Vite + React + Supabase auth) and `android/` (Compose + Supabase client).
6. Create a Supabase project; apply `0001_init.sql`; verify RLS blocks cross-user reads.

## 10. Open items to confirm with the owner (not blockers)
- Final project name (placeholder "Synapse").
- PC agent demoed at defense, or named as phase 2.
- Supabase free vs paid tier if the study has several participants.
- Whether the dissertation follows a specific department template/format.
