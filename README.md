# Synapse (working name)

A cross-device AI that learns a user's routines and structure and acts as a friendly guide
during their workflow. Final-year project. Clients on **Android, PC and web**; a **Supabase**
(Postgres) backend holds one consented, synced store per user. It models a user's activity as
an interlinked graph ("a mind"), mines rhythms from it, and rebuilds a context-aware daily
plan rather than repeating a fixed timetable.

See `docs/ARCHITECTURE.md` for the design and `docs/dissertation/` for the written report.

## Repositories / folders
- `android/` — Kotlin (Jetpack Compose) client and consented collectors
- `web/` — React (Vite) dashboard, onboarding, and the guide chat
- `pc/` — Electron agent (phase 2 for the defense demo)
- `backend/` — Supabase migrations and edge functions
- `docs/` — living technical docs, the dissertation, and diagrams

## Hard rules (see `CLAUDE.md`)
- Consent-based collection only; **PINs, passwords and card details are never recorded**, on
  any account including the admin's.
- No hidden or covert capture mode exists.
- This project is self-contained and never reads from or writes into `C:\Users\mofej\Hope`.
