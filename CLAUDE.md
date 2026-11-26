# Synapse — standing instructions for every agent working in this repository

This is a final-year university project: an AI-powered cross-device (Windows PC + Android) system
that learns a user's routines from consented device activity, passive device events, location and
documents the user provides, drafts a detailed daily plan, and automates tasks across all of the
user's connected devices, as executive function support for university students (planning,
timekeeping, remembering intentions), whatever weakens it, from everyday factors to conditions
such as ADHD. It supports; it never diagnoses or treats. Submitted
documents never use the working name "Synapse"; they say "the system" or "the proposed system". It is a **separate project from Hope**.

**Start here:** read `docs/PROJECT_CONTEXT.md` first — it holds the full project context,
decisions, architecture, milestones, and a "current status / resume here" section that is kept
up to date. Then continue from its Next steps.

## Boundaries that always hold
1. **Self-contained location, with reference-only borrowing from Hope.** All work lives under
   this folder (`C:\Users\mofej\Synapse`) with its own git repo. Never create, move or write
   files into `C:\Users\mofej\Hope`. You **may** study Hope's own code as a reference and
   re-implement its patterns here (see `docs/HOPE_REFERENCE.md`), but Synapse must not depend on,
   import from, or build against Hope at runtime, and must **never** bring Hope's private user
   data, its keys, or the cloned Imogen voice into this project. The Imogen clone is personal-use
   only and never enters anything submitted; if a voice is needed, use a licensed one.
2. **Consent-based collection only.** Every category of data a client records is gated by the
   user's onboarding choices. Nothing is captured outside what the user enabled.
3. **Never recorded, on any account including the admin's:** PINs, passwords, card/CVV
   numbers. On Android, skip password fields (`isPassword`) and the lock screen.
4. **No covert capture.** There is no hidden, "jailbreak", or admin-only mode that records
   more than the consent settings allow. The admin account runs the same build and the same
   code path as every other user; it only records the admin's *own* devices at the breadth
   the admin enabled.
5. **Automation.** The system detects tasks the user does or is likely to do and automates them
   on any connected device. For each task the user chooses how much it acts alone: suggest, ask
   first, or always automate. An action fires only when its conditions are actually met (time is
   the expectation; the condition is the trigger). Before any action that interrupts what the
   user is doing, the user is told by voice and notification and can cancel it, unless they set
   that task to always automate. Every automated action is logged. It never makes payments or
   handles passwords. (Rewritten 2026-11-24 at the owner's request; the earlier "confirmed per
   suggestion" wording was written by an earlier session, not by the owner.)
6. **Privacy by design.** Row-level security isolates each user's data. Users can export and
   delete all of their data. Align with NDPA 2023 and GDPR. Keep API keys server-side only.

## Interface copy
- Do not over-announce. Screens never explain what a feature is for or why it exists — no
  captions, subtitles or empty states that describe the feature's own purpose. Show the thing
  with at most a short, plain label, the way ordinary human-made apps do. Purpose belongs in
  code comments and docs, not on screen.

## Keys and secrets
- Secrets live only in environment files that are git-ignored (`.env`, `android/local.properties`,
  Supabase project settings). Never commit a key, and never print one in docs or logs.

## Documentation discipline
- Keep the living docs current every build: `docs/ARCHITECTURE.md`, `docs/FEATURES.md`,
  `docs/FILES.md`, `docs/DATA_MODEL.md`, `docs/PRIVACY.md`.
- Keep the dissertation chapters in `docs/dissertation/` moving alongside the code.
