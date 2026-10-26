# Synapse — standing instructions for every agent working in this repository

This is a final-year university project: a cross-device AI that learns a user's routines from
consented device activity and guides them through their day. It is a **separate project from
Hope**.

**Start here:** read `docs/PROJECT_CONTEXT.md` first — it holds the full project context,
decisions, architecture, milestones, and a "current status / resume here" section that is kept
up to date. Then continue from its Next steps.

## Boundaries that always hold
1. **Self-contained location.** All work lives under this folder (`C:\Users\mofej\Synapse`).
   Never create, move or write files into `C:\Users\mofej\Hope`, and never read from or import
   Hope's code, data, keys or assets into this project. This project has its own git repo.
2. **Consent-based collection only.** Every category of data a client records is gated by the
   user's onboarding choices. Nothing is captured outside what the user enabled.
3. **Never recorded, on any account including the admin's:** PINs, passwords, card/CVV
   numbers. On Android, skip password fields (`isPassword`) and the lock screen.
4. **No covert capture.** There is no hidden, "jailbreak", or admin-only mode that records
   more than the consent settings allow. The admin account runs the same build and the same
   code path as every other user; it only records the admin's *own* devices at the breadth
   the admin enabled.
5. **Safe automation (phase 2).** Any action the system takes on the user's behalf is
   confirmed per suggestion. It never sends messages, places calls, or makes payments without
   explicit confirmation, and never handles credentials.
6. **Privacy by design.** Row-level security isolates each user's data. Users can export and
   delete all of their data. Align with NDPA 2023 and GDPR. Keep API keys server-side only.

## Keys and secrets
- Secrets live only in environment files that are git-ignored (`.env`, `android/local.properties`,
  Supabase project settings). Never commit a key, and never print one in docs or logs.

## Documentation discipline
- Keep the living docs current every build: `docs/ARCHITECTURE.md`, `docs/FEATURES.md`,
  `docs/FILES.md`, `docs/DATA_MODEL.md`, `docs/PRIVACY.md`.
- Keep the dissertation chapters in `docs/dissertation/` moving alongside the code.
