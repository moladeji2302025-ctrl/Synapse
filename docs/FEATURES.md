# Features

Feature-by-feature living doc. Update it every build.

## Connectors (planned, not built yet)
- Connects to anything at all the user consents to, so routines are learned from more of the
  day. Four routes: MCP servers, a generic sign-in/API adapter, webhooks and feeds, and
  importing the user's own data exports. Each connection is its own consent category,
  read-only, taking only times and categories, never message bodies or credentials. First
  demonstrated connector: Google Calendar.
  Design notes in `docs/PROJECT_CONTEXT.md` §8c.

## Daily briefs (planned, not built yet)
- **Morning brief:** the day ahead from the user's own routines — the day drawn as terrain,
  a one-line headline, three parts of the day, then what is worth knowing and what is already
  sorted. Opens from a morning notification on Android or the web dashboard.
- **End-of-day report:** how the day went against the plan — routines kept and missed, time by
  app category, new patterns, suggestions accepted or dismissed, and a first look at tomorrow.
- Both use only consented data, observe rather than scold, and never send anything outside
  the app. Design notes in `docs/PROJECT_CONTEXT.md` §8a.

## The face (web, built 2026-11-04)
Synapse's presence on screen: a glowing orb with two eyes. It is always animated: the core
swirls, the ring rotates, the edge breathes, the eyes blink and look around.

**Moods** — the face shows what the system is doing:

| Mood | When | Look and behaviour |
| --- | --- | --- |
| Idle | Nothing is happening | Full rainbow ring, eyes wander and follow the pointer, random keep-alives |
| Greeting | User signs in or opens the app | Bouncing, ^ ^ eyes, bright ring; returns to Idle |
| Listening | User types or talks to the guide | Teal ring that pulses with the voice/typing level, wide eyes |
| Thinking | Guide is working out an answer | Violet ring spinning fast, small dot eyes drifting up and around |
| Speaking | Guide is answering | Ring and eyes move with the voice level |
| Happy | A suggestion is kept, or a routine settles | Warm gold glow, ^ ^ eyes, hops, a few sparkles; returns to Idle |
| Suggesting | A routine has been spotted and is offered | Amber ring, head tilted, glances at the suggestion and back |
| Concerned | Offline, sync failed, or an error | Dim red-amber, short droopy eyes looking down, shivers |
| Syncing | Events are uploading | Blue ring with a glint racing round; the eyes follow it |
| Sleeping | Night, or the user is away | Dim blue, closed eyes, slow breathing, floating z's |
| Private | Recording is paused | Grey ring, closed eyes: visibly not watching |

**Keep-alives** — short keyframed flourishes played at random in calm moods, never the same one
twice in a row: stretch, spin, hop, wiggle, shimmer, doze, glow, hum, peek, jelly (Idle); hop,
glow, wiggle (Suggesting); stir (Sleeping); glow (Private). The app can also trigger one with
`face.play(name)`, e.g. a hop when an upload succeeds.

**Entrances** — every mood change opens with an action: a small dip (`beat`) by default, a jump
and sway (`greet`) for Greeting, two hops (`cheer`) for Happy, a perk-up for Listening and
Suggesting, a sag (`droop`) for Concerned, a slow settle for Sleeping and Private.

**How it moves** — the principles of animation:

| Principle | In the face |
| --- | --- |
| Squash and stretch | The orb deforms with its area kept, anchored at its base; the eyes deform with it |
| Anticipation | A crouch before every jump, a wind-back before a spin, a dip before each mood change |
| Slow in, slow out | Every value rides a damped spring; keep-alives ease out of and into rest |
| Arcs | The gaze moves faster across than up and down, so it travels on a curve |
| Follow-through | Eyes trail the body and wobble back; size and eye shapes overshoot and settle |
| Secondary action | Breathing, blinks on big glances, the swirling core and turning ring |
| Timing | Each mood has a tempo: Sleeping 0.5, Concerned 0.8, Happy 1.4 |
| Exaggeration | Deep landing squash; the doze snaps open past its rest pose |
| Staging | Random flourishes wait until a new mood has settled; one at a time |
| Pose to pose | Keep-alives are keyed poses joined by a Catmull-Rom curve |

**Accessibility** — with "reduce motion" set, motion runs at 30% and springs stop overshooting.
The loop pauses while the tab is hidden.

Preview: double-click `web/preview-face.cmd` (or run `node web/scripts/serve.mjs`) and open
`http://127.0.0.1:5179/face-demo.html` — opening the file directly from disk shows only a
message, because browsers will not load its modules over `file://` (keys 1–0 switch moods; `?all` shows every
mood; `?mood=thinking` starts in one; `?play=hop` plays a keep-alive; `?strip=hop` freezes a
keep-alive at even moments as a pose sheet).
