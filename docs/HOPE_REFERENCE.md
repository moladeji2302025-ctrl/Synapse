# Borrowing from Hope — reference patterns

The owner also built **Hope** (`C:\Users\mofej\Hope`), a personal Android assistant, and will
reuse many of its ideas here. This file records the Hope patterns worth borrowing and where
they live, so a Synapse session knows what to adapt. It is a **reference only**:

- We **re-implement** these patterns cleanly in Synapse; we do not add a build/runtime
  dependency on Hope or copy its private data.
- We **never** bring Hope's user data, its API keys, or the **cloned Imogen voice** into
  Synapse. The Imogen clone is personal-use only and must never enter anything submitted.
- We never write into the Hope folder.

Hope is Kotlin/Compose; its file paths below are under `C:\Users\mofej\Hope\app\src\main\java\com\hope\app\`.

## 1. Consent-gated activity recording  ← the closest analogue to Synapse's collector
- `data/actions/Actions.kt` — the heart of it:
  - `ActionEntity` / `ActionDao` / `ActionDatabase` — every action (tap, screen, scroll, typed
    text) stored with app + timestamp in an **encrypted** DB (SQLCipher).
  - `ActionRules.skip(...)` — the exclusion rules: **password fields, the lock screen, banking/
    money apps (`SensitiveApps`), the app itself, and the keyboard** are never recorded. Mirror
    this exactly in Synapse (plus "consent category disabled" as an extra gate).
  - `ActionSieve` — collapses raw accessibility events into meaningful actions: a box's keystrokes
    become **one** "type" when typing stops; a screen is written **once**, not per redraw; a run of
    scrolling becomes one "scroll". Synapse's Android collector should do the same shaping before
    upload, to keep the event stream clean and small.
  - `ActionLog` — a lock-free queue on the accessibility thread, drained and batch-written every
    few seconds. Good model for Synapse's on-device buffer before the sync upload.
- Settings toggle "Learn from everything I do" (in `ui/settings/SettingsScreen.kt`) — the UX model
  for Synapse's consent toggles.

## 2. Routine learning (suggest → keep/discard → settle)  ← Synapse's rhythm/suggestion loop
- `data/routine/Routine.kt` — `RoutineEvent`, `Habit`, `RoutineLog.note(...)`, `RoutineFinder`,
  `AutoItem`, and the keep/discard/settle state machine (`KEEPS_TO_SETTLE`).
- `notify/RoutineRunner.kt` — proposes an item, sets it (alarm/task), and on repeated keeps makes
  it repeat by itself. This is exactly Synapse's `suggestions` lifecycle
  (`proposed → accepted/dismissed → settled`).
- `assistant/AlarmLabel.kt` — labelling an automated action with *why* it was set; a nice touch to
  carry into Synapse's suggestions/plan items so the UI can explain itself.

## 3. Offline-first + an upgrade-when-online queue
- `audio/Connectivity.kt` — "online" means a **validated** connection, not just any network.
- `data/study/ClassRescriber.kt` — a durable pending queue (`study/rescribe.json`), a
  `NetworkCallback` that fires when a validated connection returns, and a job that upgrades the
  result when online. This is the template for Synapse's offline event queue → sync, and for any
  "do it better once online" work (e.g. server-side embedding/mining).

## 4. Encrypted local storage
- `data/privatedb/PrivateDatabase.kt` + `PrivateKeyStore.kt` — SQLCipher with a key held in the
  Android Keystore. Use the same approach for any sensitive data cached on a Synapse device.

## 5. Android collection surface
- `blocker/GuardAccessibilityService.kt` — how Hope receives accessibility events
  (`typeWindowStateChanged`, `viewClicked`, `viewScrolled`, `typeViewTextChanged`) and reads the
  foreground app. Synapse's Android collector uses the same event types, plus `UsageStatsManager`.
- Note: an accessibility-heavy app is restricted on Google Play, so Synapse (like Hope) is
  **sideloaded** for the study, not published.

## 6. Documentation style (the "living docs" the owner likes)
- `app/src/main/assets/appdocs/features.md` and `files.md` — feature-by-feature and file-by-file
  living docs kept current every build. Synapse mirrors this with `docs/FEATURES.md` and
  `docs/FILES.md`.

## 7. On-device vs cloud reasoning
- Hope prefers on-device models offline and escalates to Claude online (`data/look/LocalMind`,
  the assistant fallback chain). Synapse's guide is cloud-first (Claude via an Edge Function), but
  the same "degrade gracefully offline" instinct applies to the clients.

## What NOT to borrow
- Hope's locks (the Windows screen watch and the Android "seal") and anything enforcing them —
  out of scope and unrelated to this project.
- The cloned Imogen voice and any of Hope's recorded voice assets — personal-use only, never
  submitted. If Synapse needs a voice, use a properly licensed one.
- Hope's keys and any real user data.
