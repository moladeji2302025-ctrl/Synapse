# Synapse — Project Context (read this first)

This file is the single source of truth for the whole project, so any new session can pick up
exactly where we left off. Last updated: 2026-11-24.

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

**Title (owner, 2026-11-25):** "Design and Implementation of an AI-Powered Cross-Device Routine
Learning, Daily Planning and Task Automation System for Executive Function Support in University
Students". Concept: automated cognitive offloading. Executive function (planning, timekeeping,
remembering intentions) is weakened by everyday factors and by health conditions from mild to
severe (anxiety, depression, ADHD, autism, illness); participants are ordinary students, no
diagnosis; it supports and never diagnoses or treats. An ADHD-only framing was tried and dropped
as too clinical to defend. Evidence: `docs/dissertation/Literature_Review.md`.
Requirements survey: `docs/dissertation/requirements/`. Submitted documents never say "Synapse". The owner's full design is in §8d: Synapse
is a **Windows PC + Android** system that learns routines, drafts a detailed daily plan, and
**automates tasks on all connected devices** — it is never Android-only and never suggest-only.

Assessed: the **working app**, the **written dissertation**, and a **live demo**.

## 2. Fixed decisions
- **Stack:** Kotlin + Jetpack Compose (Android), React + Vite (web), a Windows PC agent (core,
  no longer phase 2; recorded as Electron + Node on 2026-10-26, C# on .NET suggested on
  2026-11-24 for direct Windows API access — owner to confirm, see §10), **Supabase** (Postgres + Auth + Realtime + RLS + Edge Functions) for the backend.
  An online LLM for the guide, called server-side — the owner prefers a **free** model, so the
  provider is still open (see §10); `pgvector` for retrieval.
- **First milestone:** proposal defense on **2026-11-30** (panel: Mrs Teressa, Mr Dami). Needed there:
  the **proposal document + a small working prototype**. The owner has the proposal document
  covered (2026-11-04); sessions build the system.
- **The face:** the system has an animated face — a glowing orb with eyes — with a mood for
  each thing it is doing and random "keep-alive" flourishes so it is never still. Source in
  `web/src/face/`; preview `web/face-demo.html` (`?all` shows every mood, `?strip=hop` a pose
  sheet). Owner's standing rules for it: **always animated**, even at idle; **every movement
  follows the principles of animation** (squash and stretch, anticipation, slow in/out, arcs,
  follow-through, secondary action, timing, exaggeration, staging, pose to pose); colour kept
  restrained — one palette per mood, not a rainbow everywhere.
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

## 8a. Daily briefs — morning brief and end-of-day report (requested 2026-11-13)
Synapse gives each user two daily pages, built only from their own consented data:
- **Morning brief** — a calm 30-second view of the day ahead: the day drawn as terrain (busy
  routine stretches as rises, open time as flat water), a one-line headline, the day split into
  three parts with a sentence each, then "worth knowing" (suggestions waiting, a routine that
  usually happens today) and "already sorted" (routines that settled, suggestions kept). Built
  from the day's plan (rhythms matching today's weekday, month and context) and pending
  suggestions. Modelled on the owner's own morning-brief style.
- **End-of-day report** — how the day actually went against the plan: routines kept and
  missed, time by app category, new patterns noticed, suggestions accepted or dismissed, and a
  first look at tomorrow. Observes and hands over — never scolds, never pads.
- Both are consent-gated (they only use categories the user enabled), shown on the web
  dashboard and as an Android notification that opens the page, and the face greets in the
  morning and settles at night. Neither sends anything outside the app.

## 8c. Connectors — connect to anything, on the user's consent (requested 2026-11-13)
Owner's decision: **Synapse can connect to anything at all, as long as the user consents to that
connection.** Like Claude's connectors, but open-ended, so routines are learned from every part
of the day the user chooses to share — calendar, email, chat, notes and tasks, music, health and
movement, files, smart-home devices, and any other service.
- **Open-ended by design, through four routes** so no service is out of reach:
  1. **Model Context Protocol (MCP):** Synapse is an MCP client, so any service with an MCP
     server connects without custom code.
  2. **Generic OAuth/API adapter:** any service with a sign-in and an API (Google, Microsoft,
     Slack, Notion, Spotify...) is added by a small adapter that pulls on a schedule.
  3. **Webhooks and feeds:** services that push events (webhooks, calendar ICS feeds, RSS) post
     into a per-user Synapse endpoint.
  4. **Data-export import:** services with no API are covered by importing the user's own data
     export (e.g. Google Takeout, platform "download your data" archives).
  Every route turns what it reads into ordinary Synapse events and graph entities.
- **Same rules as everything else (`CLAUDE.md`):** each connector is its own consent category,
  off until the user links it; read-only scopes; take the least data that shows a routine —
  times and categories (an event at 9:00 titled "Lecture"), not email bodies or message text;
  passwords and payment details never read; disconnecting stops collection and offers to delete
  that connector's data; access tokens stored server-side only.
- **Feasibility notes:** Google's sensitive scopes (Gmail, some Calendar) need app verification
  for public release, but an app in testing mode works for up to 100 named test users — enough
  for the student study. In the report, the framework itself is the deliverable: scope names the
  four connection routes and the connectors actually demonstrated (Google Calendar first, as it
  carries the most routine signal), so the claim stays defensible.

## 8d. The full design — owner's vision (stated 2026-11-24)
Synapse learns the tasks a user does and is likely to do, plans their day, and automates those
tasks across every connected device.
- **Devices:** Windows PC agent + Android app, joined through Supabase (Realtime carries triggers
  between devices: phone arrives at the library → PC opens study apps). Web dashboard for routines,
  automation settings, logs, export and delete. Browser extension optional (the PC agent already
  sees window titles). macOS, Linux and iOS are out.
- **Logs everything, passively too**, into one timeline per user, each category behind its own
  consent toggle and with visible logging (Android persistent notification, PC tray icon).
  Android: app use and recents, screen on/off and unlocks, start-up and shut-down, charging and
  battery, notifications (metadata by default; text a separate opt-in; one-time codes never
  stored), location, Wi-Fi/Bluetooth/headphones, movement (still/walking/vehicle), media, alarms,
  installed apps, call/SMS metadata. Windows: active app and window title, start-up/shut-down/
  sleep/wake/lock, idle vs active (presence only, never keys), battery, networks and devices,
  running/installed programs, files opened and folder structure (names only), media, mic/camera
  in use. Never: typing, clipboard, passwords. Raw events stay on the device; sessions and
  summaries upload (Supabase free tier is 500 MB).
- **Location:** phone location, sampled on movement, clustered into labelled places (DBSCAN); web
  and PC events take their place from the phone at the same timestamp. **IP-based location is
  not used** — too coarse to tell one building from another.
- **Routines** are day-specific (weekday × hour × place; also weekday/weekend, daily, monthly), with
  recency weighting, and can also be **extracted from documents the user provides** (a timetable,
  by an online AI model, then reviewed by the user).
- **Existing systems first:** calendars (Android calendar store reads every synced calendar),
  holidays, timetable imports, task lists, the next alarm. Explicit entries override learned
  routines for that day (certain beats probable).
- **Daily plan:** activities → sub-activities → tasks with times, built from routines (times come
  from data, never invented by the language model), fixed events placed first, replanned during
  the day when the user runs late or skips something.
- **Conditions are the trigger, time is the expectation.** Event–condition–action rules; dependent
  tasks wait for their preconditions (dependency graph, ordered by topological sort; dependencies
  learned by sequence mining). If a precondition never happens, dependants expire or move and the
  user is told. Late for the library → Library mode waits until arrival.
- **Automation levels per task:** suggest / ask first / always automate. Voice (on-device
  text-to-speech) and notification before anything that interrupts, unless set to always. Every
  action logged. Never payments or passwords.
- **Actions — core layer (official APIs):** scheduled SMS and email, calls the app dials, Google
  Calendar meetings with Meet links, modes (Do Not Disturb, ringer, brightness, notification
  hiding, app launch; on Windows also Wi-Fi/Bluetooth/volume), geofence triggers, detailed
  **alarm labels** from the plan (Synapse's own adaptive alarms; optional copy to the Clock app).
  **Extended layer (UI automation, more fragile):** WhatsApp/Telegram scheduled messages and
  multi-step tasks in other apps through Android's accessibility service and Windows UI
  Automation; Android quick-settings toggles. Core guarantees every objective; extended is extra.
- **Learn online, act offline:** mining, document extraction, plan wording and sync run online;
  triggers, modes, alarms, voice, SMS/calls and replanning run on each device from cached rules
  and tomorrow's plan. Cross-device triggers need the network.
- **Evaluation adds:** prediction and plan accuracy (start-time and duration error, coverage,
  week-by-week improvement), automation acceptance/cancel/undo by level, false triggers and trigger
  delay, cross-device delay, document-extraction accuracy, offline firing, with-vs-without passive
  signals and calendar data.
- Chapter plan, sources and the defense notes: `docs/dissertation/ROADMAP.md` (+ PDF).

## 8b. Later phase — the screen companion (after the core system works)
Requested by the owner on 2026-11-04. Synapse becomes an assistant that works alongside the
user, literally on their screen with them:
1. **Watches the screen** while the user has it switched on, and works out what they are doing
   (which app, which task, how far along).
2. **Suggests how to do it** — next steps, shortcuts, a better way.
3. **Pulls resources** on that task from the internet (docs, tutorials, answers) and shows them
   beside the work.
4. **Automates the task when asked** — it performs the steps itself on request.
5. Runs on an **online AI model, most probably a free one** (with vision, to read the screen).

How it stays inside the standing rules (`CLAUDE.md`):
- Screen watching is its own consent category, off until the user turns it on, and visible
  while running — the face shows it is looking; the **Private** mood means nothing is captured.
- Password, PIN and card fields, the lock screen and banking/money apps are never captured or
  sent (mirror Hope's `ActionRules.skip`). Frames are read and dropped, not stored, unless the
  user chooses otherwise.
- Automation follows the per-task levels in §8d (suggest, ask first, always automate), announces
  itself before interrupting unless set to always, never pays or types credentials, and the user
  can stop it at once.
- Free model tiers often let the provider keep or train on inputs — check each provider's terms,
  prefer sending extracted text (OCR / accessibility tree) over raw screenshots, and tell the
  user plainly where their screen data goes.

Likely shape: the PC agent (Electron) captures and reads the screen on the device, a server-side
function calls the model, and the face is the companion's presence on screen.

## 9. Current status (update this section every working session)
**2026-10-26 — scaffolding started (Week 1).** Created in `C:\Users\mofej\Synapse`:
- `README.md`, `CLAUDE.md` (standing rules), `.gitignore`
- `backend/migrations/0001_init.sql` — full initial schema with RLS and pgvector
- `docs/PROJECT_CONTEXT.md` (this file)
- `docs/HOPE_REFERENCE.md` — Hope patterns to borrow and re-implement (consent-gated recording,
  routine suggest/keep/settle, offline queue, encrypted storage, living-docs style), with the
  rule that Hope's private data, keys and the Imogen voice never come across.

**2026-11-04 — the face.** Built `web/src/face/` (`face.js` engine: WebGL orb + 2D-canvas eyes;
`moods.js`: 11 moods — idle, greeting, listening, thinking, speaking, happy, suggesting,
concerned, syncing, sleeping, private — and 11 keep-alive flourishes) and `web/face-demo.html`.
Inspired by the owner's reference clips; drawn from scratch in code, nothing copied from them.
Owner feedback applied: Happy toned down (warm gold, not rainbow); always animated, with
several keep-alives; motion rebuilt on the principles of animation — values ride damped
springs, the orb squashes and stretches about its base, the eyes trail the body, keep-alives
are keyframed poses on a Catmull-Rom curve, and each mood opens with an entrance action.
Screen-companion phase recorded in §8b.

**2026-11-06 — sources.** `docs/dissertation/sources.md`: 29 peer-reviewed sources (the owner
requires peer-reviewed references only — no preprints, no student-edited law reviews), each
DOI checked against Crossref/OpenAlex. Google Scholar blocks automated search, so each entry
carries a Scholar link instead.

**2026-11-13 — report requirements.** The lecturer requires at least 70 citations (Ch. 1 ≥ 15,
Ch. 2–4 ≥ 45–50, Ch. 5 ≥ 10); `sources.md` now holds 85, tagged by chapter (Ch. 1: 19,
Ch. 2–4: 73, Ch. 5: 14). The department's structure and formatting rules are in
`docs/dissertation/README.md` — follow them for every chapter. Working title chosen by the
owner: "Design and Implementation of an Adaptive Routine Learning System Using Smartphone and
Web Activity Data" (Nigerian format, case study of students to confirm).

**2026-11-13 — FYP meeting rules and recent sources.** All meeting rules are merged into
`docs/dissertation/README.md` (8–9-line paragraphs, ≤25-word sentences, sources from the last
5–10 years, no definitions in Chapter 1, panel focus areas). `sources.md` now holds 133 sources;
the 78 from 2016 on meet every chapter minimum by themselves. Open with the lecturer: "APA 8"
in the notes (APA 7 is the latest edition known here), and whether foundational older works
are allowed.

**2026-11-24 — retitle and full design.** The owner retitled the project "Design and
Implementation of an AI-Powered Cross-Device Routine Learning, Daily Planning and Task Automation
System" and set out the full design (§8d). `CLAUDE.md` rule 5 rewritten to the owner's automation
model (the old "confirmed per suggestion" rule was an earlier session's, not the owner's).
Studied two real Covenant University FYP reports (2024 CIS, 2026 EEE) for layout and pitfalls.
`docs/dissertation/ROADMAP.md` + `Synapse_Chapter_Roadmap.pdf`: a section-by-section plan for
Chapters 1–3 that the owner writes themselves; new task-automation, location, planning and
extraction sources added to `sources.md` and `build/refs.cjs`, each DOI checked on Crossref.
The existing chapter drafts still carry the old title until the owner rewrites them.

**2026-11-25 — executive function focus** (after a brief ADHD-only framing). Retitled for university students with ADHD. Literature review
(`Literature_Review.md` + PDF) covering ADHD (25 new Crossref-verified, CRAAP-tested sources) and
every part of the system's functionality (91 sources), with synthesis and CRAAP tables and strays
removed (LayoutLMv3 dropped). Requirements-elicitation survey drafted (never names ADHD; pairs
with the official ASRS-5). Roadmap and PDFs updated; the name "Synapse" removed from dissertation
documents and file names. Ethics approval needed (health-related data under the NDPA).

**Next steps (resume here):**
1. `0002` migration fixing the schema review findings: owner-scoped foreign keys, consent
   enforced on event inserts, a trigger-written append-only `consent_audit`, `(select auth.uid())`
   in policies, `user_id` indexes.
2. Create a Supabase project; apply the migrations; verify RLS blocks cross-user reads.
3. Scaffold `web/` as Vite + React + Supabase auth around the existing `web/src/face/`, with the
   face in the guide chat.
4. Scaffold `android/` (Compose + Supabase client): consent onboarding, UsageStats collector,
   offline queue.
5. Rhythm miner (periodic first) and the guide chat Edge Function (model provider per §10).
6. Remaining living docs: `docs/ARCHITECTURE.md`, `docs/DATA_MODEL.md`, `docs/PRIVACY.md`;
   diagram sources under `docs/diagrams/`.

## 10. Open items to confirm with the owner (not blockers)
- Final project name (placeholder "Synapse").
- PC agent language: C# on .NET (suggested — reaches Windows APIs directly) or Electron/Tauri
  (reuses React). The PC agent is core now, not phase 2.
- Supabase free vs paid tier: logging everything for 20–30 participants over weeks outgrows the
  500 MB free database unless only sessions/summaries upload (Pro is about $25/month, 8 GB).
- Whether the university requires ethics approval for the participant study.
- Whether the dissertation follows a specific department template/format.
- Which online model powers the guide and the screen companion (owner prefers a free one; it
  needs vision for the companion, and its data terms must suit screen content).
