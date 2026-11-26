// The face's moods: one per thing the system can be doing.
//
// Each mood sets targets for the orb (colour, ring, motion) and the eyes (shape,
// position), plus a behaviour that gives it personality between frames. The face
// springs from one mood to the next, so any mood can follow any other, and every
// change opens with a small entrance action (anticipation) before it settles.
//
// `when` documents which system state each mood belongs to; it is for developers and is
// never shown on screen.
//
// Units: hue is in turns (0..1: 0 red, 0.1 gold, 0.33 green, 0.5 teal, 0.62 blue,
// 0.72 violet, 0.9 pink); spread is how much of the rainbow runs around the ring
// (1 = all of it, 0 = only the mood's hue); eye sizes are fractions of the orb
// radius; speed is ring rotations per second.
//
// Behaviour fields:
//   look       where the eyes go: wander | center | ponder | aside | comet | down
//   blink      [min, max] seconds between blinks, or null for none
//   tempo      timing: how quickly the face moves into this mood (1 = normal)
//   enter      the keep-alive played on arrival (default: 'beat')
//   keepAlive  [min, max] seconds between random flourishes, drawn from keepAlives
//   breathe    how much the orb swells and settles at rest

export const MOODS = {
  idle: {
    label: 'Idle',
    when: 'Nothing is happening; Synapse is just there.',
    orb: { hue: 0.02, spread: 1, sat: 0.9, ring: 0.6, glow: 0.5, core: 0.85, wobble: 0.3, speed: 0.1, fill: 0, comet: 0, dim: 1, scale: 1 },
    eyes: { w: 0.085, h: 0.22, gap: 0.19, y: 0.04, smile: 0, tiltL: 0, tiltR: 0, sizeL: 1, sizeR: 1 },
    behaviour: {
      look: 'wander', blink: [2.2, 5.5], breathe: 0.018, keepAlive: [2.5, 6],
      keepAlives: ['stretch', 'spin', 'hop', 'wiggle', 'shimmer', 'doze', 'glow', 'hum', 'peek', 'jelly'],
    },
  },
  greeting: {
    label: 'Greeting',
    when: 'The user signs in or opens the app.',
    orb: { hue: 0.0, spread: 1, sat: 0.9, ring: 1, glow: 0.9, core: 0.9, wobble: 0.35, speed: 0.3, fill: 0.3, comet: 0, dim: 1, scale: 1.04 },
    eyes: { w: 0.11, h: 0.11, gap: 0.2, y: 0.06, smile: 1, tiltL: 0, tiltR: 0, sizeL: 1, sizeR: 1 },
    behaviour: { look: 'center', blink: null, tempo: 1.3, enter: 'greet' },
    hold: 2600, // then back to idle
  },
  listening: {
    label: 'Listening',
    when: 'The user is typing or talking to the guide.',
    orb: { hue: 0.5, spread: 0.3, sat: 0.95, ring: 0.95, glow: 0.8, core: 0.9, wobble: 0.15, speed: 0.12, fill: 0, comet: 0, dim: 1, scale: 1.06 },
    eyes: { w: 0.1, h: 0.27, gap: 0.19, y: 0.05, smile: 0, tiltL: 0, tiltR: 0, sizeL: 1, sizeR: 1 },
    behaviour: { look: 'center', blink: [4, 8], levelRing: 1, tempo: 1.2, enter: 'perk' },
  },
  thinking: {
    label: 'Thinking',
    when: 'The guide is working out an answer or a plan.',
    orb: { hue: 0.72, spread: 0.35, sat: 0.9, ring: 0.75, glow: 0.55, core: 0.7, wobble: 0.6, speed: 0.55, fill: 0, comet: 0, dim: 1, scale: 0.98 },
    eyes: { w: 0.06, h: 0.06, gap: 0.16, y: 0.08, smile: 0, tiltL: 0, tiltR: 0, sizeL: 1, sizeR: 1 },
    behaviour: { look: 'ponder', blink: [3, 6], breathe: 0.01 },
  },
  speaking: {
    label: 'Speaking',
    when: 'The guide is answering.',
    orb: { hue: 0.08, spread: 0.9, sat: 0.95, ring: 0.8, glow: 0.7, core: 0.85, wobble: 0.35, speed: 0.15, fill: 0.1, comet: 0, dim: 1, scale: 1.02 },
    eyes: { w: 0.09, h: 0.2, gap: 0.19, y: 0.04, smile: 0.15, tiltL: 0, tiltR: 0, sizeL: 1, sizeR: 1 },
    behaviour: { look: 'center', blink: [2.5, 5], levelRing: 1, levelEyes: 1, levelBody: 1 },
  },
  happy: {
    label: 'Happy',
    when: 'The user keeps a suggestion, or a routine settles.',
    orb: { hue: 0.1, spread: 0.2, sat: 0.85, ring: 0.95, glow: 0.85, core: 0.9, wobble: 0.35, speed: 0.25, fill: 0.2, comet: 0, dim: 1, scale: 1.05 },
    eyes: { w: 0.11, h: 0.11, gap: 0.2, y: 0.06, smile: 1, tiltL: 0, tiltR: 0, sizeL: 1, sizeR: 1 },
    behaviour: { look: 'center', blink: null, sparkle: 0.4, tempo: 1.4, enter: 'cheer' },
    hold: 2800,
  },
  suggesting: {
    label: 'Suggesting',
    when: 'Synapse has spotted a routine and offers it.',
    orb: { hue: 0.11, spread: 0.3, sat: 0.95, ring: 0.85, glow: 0.7, core: 0.85, wobble: 0.3, speed: 0.1, fill: 0.1, comet: 0, dim: 1, scale: 1.02 },
    eyes: { w: 0.09, h: 0.22, gap: 0.19, y: 0.05, smile: 0, tiltL: 0, tiltR: 0, sizeL: 0.9, sizeR: 1.25 },
    behaviour: { look: 'aside', blink: [2, 4], tilt: 0.16, enter: 'perk', keepAlive: [3, 6], keepAlives: ['hop', 'glow', 'wiggle'] },
  },
  concerned: {
    label: 'Concerned',
    when: 'Something went wrong: offline, sync failed, or an error.',
    orb: { hue: 0.02, spread: 0.1, sat: 0.55, ring: 0.45, glow: 0.3, core: 0.6, wobble: 0.75, speed: 0.05, fill: 0, comet: 0, dim: 0.85, scale: 0.96 },
    eyes: { w: 0.085, h: 0.13, gap: 0.17, y: -0.02, smile: 0, tiltL: 0.22, tiltR: -0.22, sizeL: 1, sizeR: 1 },
    behaviour: { look: 'down', blink: [1.5, 3.5], shiver: 1, tempo: 0.8, enter: 'droop' },
  },
  syncing: {
    label: 'Syncing',
    when: 'Events are uploading from this device.',
    orb: { hue: 0.56, spread: 0.25, sat: 0.9, ring: 0.7, glow: 0.6, core: 0.8, wobble: 0.25, speed: 0.25, fill: 0, comet: 1, dim: 1, scale: 1 },
    eyes: { w: 0.08, h: 0.18, gap: 0.18, y: 0.04, smile: 0, tiltL: 0, tiltR: 0, sizeL: 1, sizeR: 1 },
    behaviour: { look: 'comet', blink: [3, 6] },
  },
  sleeping: {
    label: 'Sleeping',
    when: 'Night, or the user has been away for a while.',
    orb: { hue: 0.62, spread: 0.15, sat: 0.5, ring: 0.35, glow: 0.25, core: 0.55, wobble: 0.15, speed: 0.03, fill: 0, comet: 0, dim: 0.5, scale: 0.97 },
    eyes: { w: 0.11, h: 0.022, gap: 0.19, y: -0.01, smile: 0, tiltL: 0, tiltR: 0, sizeL: 1, sizeR: 1 },
    behaviour: {
      look: 'center', blink: null, breathe: 0.04, breatheRate: 0.9, zzz: 1, tempo: 0.5, enter: 'settle',
      keepAlive: [6, 12], keepAlives: ['stir'],
    },
  },
  private: {
    label: 'Private',
    when: 'Recording is paused; nothing is being collected.',
    orb: { hue: 0.6, spread: 0, sat: 0.08, ring: 0.45, glow: 0.3, core: 0.6, wobble: 0.1, speed: 0.04, fill: 0, comet: 0, dim: 0.9, scale: 0.98 },
    eyes: { w: 0.1, h: 0.022, gap: 0.19, y: 0.03, smile: 0, tiltL: 0, tiltR: 0, sizeL: 1, sizeR: 1 },
    behaviour: { look: 'center', blink: null, tempo: 0.7, enter: 'settle', keepAlive: [5, 9], keepAlives: ['glow'] },
  },
};

// Keep-alives are keyframed, pose to pose. Each key is [t, pose] with t running
// 0..1 over `dur` seconds; the face moves through the poses on a smooth curve, so
// motion keeps its momentum between keys and only comes to rest at the turning
// points. Every keep-alive starts and ends at rest (spin ends on a whole turn).
//
// Pose fields (all default to 0):
//   dy, dx        body offset, in orb-space units (the orb's radius is 0.58)
//   sq            squash and stretch: + taller and thinner, - shorter and wider; area is kept
//   rot           head tilt, radians
//   spin          extra ring turns
//   lookX, lookY  added to where the eyes are looking (-1..1)
//   any orb or eye field (glow, ring, comet, h, w, smile, sizeR, ...) as an offset
//
// The principles of animation are built into the keys: anticipation (a crouch before
// a jump, a wind-back before a spin), squash and stretch (stretched in flight,
// squashed on landing), follow-through (rebounds and decaying swings after the main
// action), and exaggeration (the doze snaps back awake past its rest pose).
export const KEEP_ALIVES = {
  // Entrances: one plays whenever the mood changes.
  beat: { dur: 0.5, keys: [[0, {}], [0.35, { sq: -0.05, dy: -0.006 }], [0.7, { sq: 0.025 }], [1, {}]] },
  perk: { dur: 0.7, keys: [[0, {}], [0.25, { sq: -0.05 }], [0.55, { sq: 0.07, dy: 0.015, h: 0.04 }], [0.8, { sq: -0.015 }], [1, {}]] },
  droop: { dur: 1.1, keys: [[0, {}], [0.3, { sq: 0.04, dy: 0.01 }], [0.65, { sq: -0.08, dy: -0.025 }], [0.85, { sq: -0.03, dy: -0.01 }], [1, {}]] },
  settle: { dur: 1.6, keys: [[0, {}], [0.4, { sq: 0.03, dy: 0.008 }], [0.8, { sq: -0.04, dy: -0.01 }], [1, {}]] },
  greet: {
    dur: 1.7,
    keys: [
      [0, {}],
      [0.12, { sq: -0.13, dy: -0.02 }],              // crouch
      [0.27, { sq: 0.12, dy: 0.08, rot: -0.08 }],    // launch, stretched
      [0.41, { dy: 0.13, rot: -0.1 }],               // top of the jump, round
      [0.55, { sq: 0.07, dy: 0.04, rot: 0.06 }],     // falling, stretched
      [0.63, { sq: -0.15, dy: -0.01, rot: 0.08 }],   // land, squashed
      [0.75, { sq: 0.04, rot: -0.07 }],              // rebound and sway
      [0.88, { rot: 0.035 }],
      [1, {}],
    ],
  },
  cheer: { // two hops, the second smaller
    dur: 1.8,
    keys: [
      [0, {}],
      [0.1, { sq: -0.14, dy: -0.02 }],
      [0.2, { sq: 0.12, dy: 0.07 }],
      [0.3, { dy: 0.12 }],
      [0.4, { sq: 0.08, dy: 0.04 }],
      [0.46, { sq: -0.15, dy: -0.01 }],
      [0.56, { sq: 0.1, dy: 0.05 }],
      [0.64, { dy: 0.07 }],
      [0.72, { sq: 0.05, dy: 0.02 }],
      [0.78, { sq: -0.09 }],
      [0.88, { sq: 0.03 }],
      [1, {}],
    ],
  },

  // Random flourishes for calm moods.
  hop: {
    dur: 1.0,
    keys: [
      [0, {}],
      [0.16, { sq: -0.14, dy: -0.02 }],             // anticipation: crouch
      [0.3, { sq: 0.12, dy: 0.07 }],                // launch: stretch upward
      [0.44, { dy: 0.12, smile: 0.5 }],             // apex: round again
      [0.58, { sq: 0.08, dy: 0.05 }],               // fall: stretch
      [0.66, { sq: -0.16, dy: -0.01 }],             // land: squash
      [0.8, { sq: 0.05 }],                          // rebound
      [1, {}],
    ],
  },
  stretch: {
    dur: 2.0,
    keys: [
      [0, {}],
      [0.18, { sq: -0.07, dy: -0.01 }],             // gathers itself
      [0.5, { sq: 0.11, dy: 0.02, scale: 0.04, glow: 0.3, h: -0.13, w: 0.025, smile: 0.5 }], // big stretch, eyes squeezed
      [0.68, { sq: 0.09, dy: 0.015, scale: 0.04, glow: 0.3, h: -0.13, w: 0.025, smile: 0.5 }],
      [0.84, { sq: -0.04 }],                        // lets go
      [1, {}],
    ],
  },
  spin: {
    dur: 1.5,
    keys: [
      [0, {}],
      [0.2, { spin: -0.06, rot: -0.05, sq: -0.03 }], // winds back
      [0.7, { spin: 1.05, rot: 0.05, sq: 0.03 }],    // whips round, a touch too far
      [0.85, { spin: 0.98 }],
      [1, { spin: 1 }],
    ],
  },
  wiggle: {
    dur: 1.2,
    keys: [
      [0, {}],
      [0.12, { dx: 0.022, rot: 0.07 }],
      [0.3, { dx: -0.022, rot: -0.07 }],
      [0.48, { dx: 0.016, rot: 0.05 }],
      [0.66, { dx: -0.009, rot: -0.03 }],
      [0.82, { dx: 0.004, rot: 0.012 }],
      [1, {}],
    ],
  },
  shimmer: { dur: 1.4, keys: [[0, {}], [0.5, { comet: 0.9, sq: 0.02 }], [1, {}]] },
  doze: {
    dur: 2.6,
    keys: [
      [0, {}],
      [0.4, { h: -0.15, dim: -0.2, dy: -0.012, sq: -0.025 }],   // eyes droop, body sinks
      [0.6, { h: -0.17, dim: -0.22, dy: -0.016, sq: -0.03 }],
      [0.67, { h: 0.06, dy: 0.012, sq: 0.06 }],                 // snaps awake, past rest
      [0.78, { h: -0.01, sq: -0.015 }],
      [1, {}],
    ],
  },
  glow: { dur: 2.0, keys: [[0, {}], [0.5, { ring: 0.35, glow: 0.4, sq: 0.015 }], [1, {}]] },
  hum: {
    dur: 1.8,
    keys: [
      [0, {}],
      [0.25, { smile: 1, sq: 0.03 }],
      [0.45, { smile: 1, rot: 0.06 }],              // contented sway
      [0.65, { smile: 1, rot: -0.06 }],
      [0.82, { smile: 1, rot: 0.02 }],
      [1, {}],
    ],
  },
  peek: {
    dur: 2.0,
    keys: [
      [0, {}],
      [0.15, { sq: -0.03, rot: -0.03 }],            // anticipation
      [0.35, { lookX: -0.7, lookY: -0.25, rot: 0.14, sizeR: 0.3, sizeL: -0.15, dx: -0.01 }],
      [0.75, { lookX: -0.7, lookY: -0.25, rot: 0.14, sizeR: 0.3, sizeL: -0.15, dx: -0.01 }],
      [1, {}],
    ],
  },
  jelly: {
    dur: 1.5,
    keys: [
      [0, {}],
      [0.15, { wobble: 0.9, sq: 0.07 }],
      [0.35, { wobble: 0.9, sq: -0.06 }],
      [0.55, { wobble: 0.7, sq: 0.035 }],
      [0.75, { wobble: 0.4, sq: -0.015 }],
      [1, {}],
    ],
  },
  stir: { dur: 2.4, keys: [[0, {}], [0.45, { sq: 0.025, scale: 0.02, glow: 0.12, h: 0.02 }], [1, {}]] },
};

export const DEFAULT_MOOD = 'idle';
