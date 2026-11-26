// Synapse face: a glowing orb with eyes whose mood follows what the system is doing.
//
// The orb is drawn by a WebGL fragment shader; the eyes are drawn on a 2D canvas
// layered on top. No framework dependency: the web app wraps this, and the Android
// client re-implements the same moods.
//
//   const face = createFace(element, { mood: 'idle' });  // keepAlives: false stops random flourishes
//   face.setMood('thinking');
//   face.setLevel(0.6);        // voice/typing intensity, 0..1 (listening, speaking)
//   face.play('hop');          // a one-off keep-alive flourish
//   face.destroy();
//
// Motion follows the principles of animation:
//   slow in and slow out   values move on springs: they start gently, settle gently
//   follow-through         shapes and size overshoot a little before they settle,
//                          and the eyes trail the body like a looser part of it
//   arcs                   the gaze moves faster across than up and down, so it curves
//   squash and stretch     the orb deforms with its area kept, anchored at its base
//   anticipation           every mood change opens with a small gathering move, and
//                          keep-alives crouch before jumping or wind back before spinning
//   pose to pose           keep-alives are keyed poses joined by a smooth curve
//   secondary action       breathing, blinks on big glances, the swirl and ring
//   timing                 each mood has its own tempo (sleepy is slow, happy is snappy)
//   staging                one action at a time: flourishes wait for a mood to settle

import { MOODS, KEEP_ALIVES, DEFAULT_MOOD } from './moods.js';

const TAU = Math.PI * 2;
const ORB_RADIUS = 0.58; // in shader units: 1 = half the shorter side of the canvas

const VERT = `
attribute vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time, u_phase, u_scale, u_hue, u_sat, u_ring, u_glow, u_core;
uniform float u_wobble, u_fill, u_comet, u_cometAngle, u_level, u_dim, u_sparkle, u_spread;
uniform vec2 u_center, u_stretch;

const float TAU = 6.2831853;

vec3 hsv(float h, float s, float v) {
  vec3 p = abs(fract(vec3(h) + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0);
  return v * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), s);
}
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
  return v;
}

void main() {
  // Orb space: centred on the body, with squash and stretch undone.
  vec2 uv = ((gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y) * 2.0 - u_center) / u_stretch;
  float R = ${ORB_RADIUS.toFixed(2)} * u_scale;
  float r = length(uv);
  float a = atan(uv.y, uv.x);
  vec2 dir = vec2(cos(a), sin(a));

  // A soft, living silhouette: the edge breathes with noise sampled around the circle.
  float edge = R * (1.0 + (noise(dir * 1.6 + u_time * 0.6) - 0.5) * u_wobble * 0.14);
  float dn = (r - edge) / R;                       // < 0 inside, > 0 outside
  float inside = smoothstep(0.012, -0.012, dn);

  // Ring colours rotate with the phase. Spread 1 runs the whole rainbow around the
  // circle; spread 0 keeps to the mood's own hue, varying only in brightness.
  float h = u_hue + a / TAU + u_phase;
  float wave = sin(a + u_phase * TAU);
  vec3 rimA = mix(hsv(fract(u_hue + 0.05 * wave), u_sat, 0.8 + 0.2 * wave),
                  hsv(fract(h), u_sat, 1.0), u_spread);
  vec3 rimB = mix(hsv(fract(u_hue + 0.08 - 0.05 * wave + 0.03 * sin(u_time * 0.7)), u_sat * 0.85, 0.9),
                  hsv(fract(h + 0.3 + 0.08 * sin(u_time * 0.7)), u_sat, 1.0), u_spread);
  vec3 rim = mix(rimA, rimB, 0.4);

  // Glassy core with a slow swirl.
  vec2 q = uv / R;
  float sa = a + (1.0 - r / R) * 1.8 + u_phase * 1.3;
  float swirl = fbm(vec2(cos(sa), sin(sa)) * (r / R) * 2.2 + vec2(u_time * 0.07, -u_time * 0.05));
  vec3 core = mix(vec3(0.01, 0.06, 0.07), vec3(0.04, 0.30, 0.27), smoothstep(0.25, 0.85, swirl));
  core *= 0.7 + 0.4 * (0.5 - 0.5 * q.y);
  core += rim * smoothstep(-0.5, 0.0, dn) * 0.22;
  // Fill: the core glows with the mood's own hue (happy, greeting) — a glow, not a rainbow.
  float blob = fbm(q * 0.9 + vec2(u_phase * 0.6, -u_time * 0.04));
  vec3 fillCol = hsv(fract(u_hue + 0.12 * (blob - 0.5) + 0.05 * q.x), 0.5 * u_sat, 1.0);
  core = mix(core, fillCol * (0.6 + 0.4 * smoothstep(1.0, 0.2, r / R)), u_fill);
  core *= u_core;

  // Bright band just inside the edge, and a halo outside it.
  float band = exp(-pow((dn + 0.08) / (0.09 + 0.05 * u_ring), 2.0));
  float halo = exp(-max(dn, 0.0) / (0.08 + 0.14 * u_glow)) * smoothstep(-0.02, 0.02, dn)
             * smoothstep(0.98, 0.72, r);              // fade out before the canvas edge

  // Comet (syncing): a bright head travelling around the ring with a tail.
  float behind = mod(u_cometAngle - a, TAU);
  float comet = exp(-behind * 2.5) * u_comet;

  // Specular highlight, top left.
  vec2 hp = (q - vec2(-0.36, 0.44)) * vec2(1.0, 1.8);
  float spec = exp(-dot(hp, hp) * 40.0) * 0.18;

  // Sparkles in the halo (happy).
  float spark = step(0.985, hash(floor(uv * 90.0) + floor(u_time * 6.0))) * halo * u_sparkle;

  vec3 col = core * inside + spec * inside;
  col += (rimA * 0.75 + rimB * 0.45) * band * (0.35 + 0.9 * u_ring) * (1.0 + 0.9 * u_level);
  col += vec3(1.0, 0.95, 0.9) * band * comet * 1.6;
  col += rim * halo * (0.25 + 0.6 * u_glow + 0.5 * u_level);
  col += mix(rim, vec3(1.0), 0.5) * spark * 0.9;
  col *= u_dim;
  col = 1.0 - exp(-col * 1.25);

  float alpha = clamp(max(inside, max(col.r, max(col.g, col.b))), 0.0, 1.0);
  gl_FragColor = vec4(col, alpha);
}
`;

const COLOUR_KEYS = ['hue', 'spread', 'sat', 'ring', 'glow', 'core', 'wobble', 'speed', 'fill', 'comet', 'dim'];
const EYE_KEYS = ['w', 'h', 'gap', 'y', 'smile', 'tiltL', 'tiltR', 'sizeL', 'sizeR'];

// Spring tuning: k is stiffness (how fast), z is damping (1 = no overshoot, lower
// overshoots more before settling).
const SPRING = {
  colour: { k: 22, z: 1 },      // colour and light: slow in, slow out, no overshoot
  size:   { k: 140, z: 0.45 },  // the orb's size pops a little past its target
  eyes:   { k: 170, z: 0.55 },  // eye shapes overshoot and settle
  tilt:   { k: 90, z: 0.5 },
  lookX:  { k: 130, z: 0.7 },   // across faster than up/down, so the gaze travels on an arc
  lookY:  { k: 70, z: 0.7 },
  lag:    { k: 110, z: 0.3 },   // eyes trail the body and wobble back into place
};

export function createFace(container, options = {}) {
  const reduceMotion = options.reduceMotion ??
    (typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches);
  const motion = reduceMotion ? 0.3 : 1;

  container.style.position ||= 'relative';
  const orbCanvas = layer(container);
  const eyeCanvas = layer(container);
  const ctx = eyeCanvas.getContext('2d');
  const orb = createOrbRenderer(orbCanvas);

  let mood = MOODS[options.mood] ? options.mood : DEFAULT_MOOD;
  let holdTimer = null;

  // Every animated value lives on a spring.
  const springs = {};
  const start = { ...MOODS[mood].orb, ...MOODS[mood].eyes, tilt: 0, sparkle: 0 };
  for (const [k, x] of Object.entries(start)) springs[k] = { x, v: 0 };
  const look = { x: { x: 0, v: 0 }, y: { x: 0, v: 0 } };
  const lag = { x: { x: 0, v: 0 }, y: { x: 0, v: 0 } };
  let level = 0, levelTarget = 0;

  // Behaviour state.
  let time = 0, phase = 0, cometAngle = 0;
  let lookTarget = { x: 0, y: 0 }, nextGlance = 0;
  let blinkAt = 1.5, blinkStart = -1, doubleBlink = false;
  let pointer = null, pointerAt = -10;
  let flourish = null, nextFlourish = 2, lastFlourish = null, spun = 0;
  let prevBody = null;

  function setMood(name, { hold = true } = {}) {
    if (!MOODS[name]) throw new Error(`Unknown mood: ${name}`);
    clearTimeout(holdTimer);
    const changed = name !== mood;
    mood = name;
    const b = MOODS[name].behaviour;
    nextGlance = time;
    if (b.blink) blinkAt = time + rand(...b.blink);
    // Staging: a random flourish waits until the mood has settled.
    if (b.keepAlive) nextFlourish = time + Math.max(1.5, rand(...b.keepAlive));
    if (changed || b.enter) play(b.enter ?? 'beat');
    if (hold && MOODS[name].hold) holdTimer = setTimeout(() => setMood(DEFAULT_MOOD), MOODS[name].hold);
  }

  function setLevel(v) { levelTarget = Math.max(0, Math.min(1, v)); }

  // Play a keep-alive now, e.g. a hop when something small goes right.
  function play(name) {
    if (!KEEP_ALIVES[name]) throw new Error(`Unknown keep-alive: ${name}`);
    finishSpin();
    lastFlourish = name;
    flourish = { def: KEEP_ALIVES[name], start: time };
    spun = 0;
  }

  // A spin ends on a whole turn, so cutting one short still lands the ring cleanly.
  function finishSpin() {
    if (flourish) phase += (samplePose(flourish.def, 1).spin ?? 0) - spun;
    spun = 0;
  }

  function onPointer(e) {
    const r = container.getBoundingClientRect();
    const unit = Math.min(r.width, r.height) / 2;
    pointer = { x: (e.clientX - r.left - r.width / 2) / unit, y: (e.clientY - r.top - r.height / 2) / unit };
    pointerAt = time;
  }
  addEventListener('pointermove', onPointer);

  // ---- where the eyes look ----
  function gaze(b) {
    const before = lookTarget;
    switch (b.look) {
      case 'wander':
        if (pointer && time - pointerAt < 3) {
          const len = Math.hypot(pointer.x, pointer.y) || 1;
          const k = Math.min(1, len) / len;
          lookTarget = { x: pointer.x * k * 0.8, y: pointer.y * k * 0.6 };
        } else if (time >= nextGlance) {
          lookTarget = Math.random() < 0.55 ? { x: 0, y: 0 } : { x: rand(-0.7, 0.7), y: rand(-0.5, 0.4) };
          nextGlance = time + rand(1.2, 4);
        }
        break;
      case 'ponder': // eyes drift up and to the side, circling lazily
        lookTarget = { x: 0.45 + 0.18 * Math.cos(time * 0.8), y: -0.55 + 0.12 * Math.sin(time * 1.1) };
        break;
      case 'aside': // looks toward the suggestion, glances back at the user
        if (time >= nextGlance) {
          const away = lookTarget.x < 0.3;
          lookTarget = away ? { x: 0.65, y: -0.1 } : { x: 0, y: 0 };
          nextGlance = time + (away ? rand(1.8, 3) : rand(0.5, 0.9));
        }
        break;
      case 'comet':
        lookTarget = { x: Math.cos(cometAngle) * 0.7, y: -Math.sin(cometAngle) * 0.5 };
        break;
      case 'down':
        lookTarget = { x: 0.1 * Math.sin(time * 0.6), y: 0.45 };
        break;
      default:
        lookTarget = { x: 0, y: 0 };
    }
    // Secondary action: a big change of gaze usually comes with a blink.
    if (b.blink && blinkStart < 0 && Math.hypot(lookTarget.x - before.x, lookTarget.y - before.y) > 0.6 &&
        Math.random() < 0.6) startBlink();
  }

  function startBlink() {
    blinkStart = time;
    doubleBlink = Math.random() < 0.2;
  }

  function blinkAmount(b) {
    if (b.blink && time >= blinkAt && blinkStart < 0) startBlink();
    if (blinkStart < 0) return 0;
    const t = (time - blinkStart) / 0.16;
    if (t >= 1) {
      if (doubleBlink) { doubleBlink = false; blinkStart = time + 0.08; }
      else { blinkStart = -1; if (b.blink) blinkAt = time + rand(...b.blink); }
      return 0;
    }
    return t < 0 ? 0 : Math.sin(Math.PI * t);
  }

  // ---- keep-alives: the current pose, and random flourishes for calm moods ----
  function currentPose(b) {
    if (!flourish && b.keepAlive && options.keepAlives !== false && time >= nextFlourish) {
      const pool = (b.keepAlives ?? []).filter(n => n !== lastFlourish);
      if (pool.length) play(pool[Math.floor(Math.random() * pool.length)]);
    }
    if (!flourish) return {};
    const p = (time - flourish.start) / flourish.def.dur;
    if (p >= 1) {
      finishSpin();
      flourish = null;
      if (b.keepAlive) nextFlourish = time + rand(...b.keepAlive);
      return {};
    }
    const pose = samplePose(flourish.def, p);
    if (pose.spin !== undefined) { phase += pose.spin - spun; spun = pose.spin; }
    return pose;
  }

  // ---- frame loop ----
  let raf = 0, last = 0;
  const autoplay = options.autoplay !== false;
  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, last ? (now - last) / 1000 : 0.016);
    last = now;
    update(dt);
  }

  function update(dt) {
    time += dt;

    const m = MOODS[mood];
    const b = m.behaviour;
    const tempo = b.tempo ?? 1;
    const step = (s, target, c) => spring(s, target, c.k * tempo, reduceMotion ? Math.max(1, c.z) : c.z, dt);

    for (const k of COLOUR_KEYS) {
      // Hue takes the short way round the colour wheel.
      const target = k === 'hue' ? springs.hue.x + wrapHalf(m.orb.hue - springs.hue.x) : m.orb[k];
      step(springs[k], target, SPRING.colour);
    }
    step(springs.scale, m.orb.scale, SPRING.size);
    for (const k of EYE_KEYS) step(springs[k], m.eyes[k], SPRING.eyes);
    step(springs.tilt, b.tilt ?? 0, SPRING.tilt);
    step(springs.sparkle, b.sparkle ?? 0, SPRING.colour);
    level = ease(level, levelTarget, dt, 14);

    const pose = currentPose(b);
    gaze(b);
    const lx = clamp(lookTarget.x + (pose.lookX ?? 0), -1, 1);
    const ly = clamp(lookTarget.y + (pose.lookY ?? 0), -1, 1);
    const lookRate = b.look === 'comet' ? 1.6 : 1; // keeps up with the comet
    spring(look.x, lx, SPRING.lookX.k * lookRate, SPRING.lookX.z, dt);
    spring(look.y, ly, SPRING.lookY.k * lookRate, SPRING.lookY.z, dt);

    // What gets drawn: the springs plus the keep-alive pose on top.
    const v = {};
    for (const k in springs) v[k] = springs[k].x;
    for (const [k, off] of Object.entries(pose)) if (k in v) v[k] += off;
    v.tilt += (pose.rot ?? 0) * motion;
    v.smile = clamp(v.smile, 0, 1);
    v.comet = clamp(v.comet, 0, 1);

    phase += v.speed * dt * motion;
    cometAngle = (cometAngle + dt * 3.2 * motion) % TAU;

    // Body: squash and stretch, offsets, breathing (secondary action).
    const breathe = (b.breathe ?? 0.01) * Math.sin(time * TAU * 0.25 * (b.breatheRate ?? 1));
    const talk = b.levelBody ? level * 0.05 : 0;
    const sq = ((pose.sq ?? 0) + breathe + talk) * motion;
    const stretch = { x: 1 / (1 + sq), y: 1 + sq }; // x * y = 1: area kept
    const R = ORB_RADIUS * v.scale;
    const shiver = b.shiver && !reduceMotion && Math.sin(time * 1.7) > 0.2 ? Math.sin(time * 38) * 0.006 : 0;
    const center = {
      x: ((pose.dx ?? 0) * motion) + shiver,
      y: ((pose.dy ?? 0) * motion) + (stretch.y - 1) * R, // squash about the base, not the middle
    };

    // Follow-through: the eyes are a looser part of the body, so they trail its moves.
    if (prevBody) {
      lag.x.x -= (center.x - prevBody.x) * 0.6;
      lag.y.x -= (center.y - prevBody.y) * 0.6;
    }
    prevBody = { ...center };
    spring(lag.x, 0, SPRING.lag.k, reduceMotion ? 1 : SPRING.lag.z, dt);
    spring(lag.y, 0, SPRING.lag.k, reduceMotion ? 1 : SPRING.lag.z, dt);

    const ringLevel = b.levelRing ? level * b.levelRing : 0;
    orb.draw({
      time: time * motion, phase, scale: v.scale * (1 + ringLevel * 0.024), center, stretch, cometAngle,
      hue: v.hue, spread: v.spread, sat: v.sat, ring: v.ring, glow: v.glow, core: v.core,
      wobble: v.wobble, fill: v.fill, comet: v.comet, dim: v.dim, sparkle: v.sparkle,
      level: ringLevel,
    });
    drawEyes(v, center, stretch, blinkAmount(b));
  }

  function drawEyes(v, center, stretch, blink) {
    const W = eyeCanvas.width, H = eyeCanvas.height;
    ctx.clearRect(0, 0, W, H);
    const unit = Math.min(W, H) / 2;
    const R = ORB_RADIUS * v.scale * unit;
    const b = MOODS[mood].behaviour;

    // Speaking squashes the eyes a little with the voice.
    const talk = b.levelEyes ? 1 - level * 0.35 : 1;
    const lift = b.levelEyes ? level * 0.03 : 0;

    ctx.save();
    // Squash and stretch about the orb's centre, so the eyes deform with the body.
    ctx.translate(W / 2 + center.x * unit, H / 2 - center.y * unit);
    ctx.scale(stretch.x, stretch.y);
    ctx.translate(lag.x.x * unit, -lag.y.x * unit);
    ctx.rotate(v.tilt);
    for (const side of [-1, 1]) {
      const size = side < 0 ? v.sizeL : v.sizeR;
      const w = v.w * R * size;
      const h = Math.max(v.h * R * size * talk * (1 - 0.92 * blink), w * 0.18);
      const x = side * v.gap * R + look.x.x * 0.2 * R;
      const y = -(v.y + lift) * R + look.y.x * 0.16 * R;
      drawEye(ctx, x, y, w, h, side < 0 ? v.tiltL : v.tiltR, v.smile);
    }
    ctx.restore();

    if (b.zzz) drawZzz(W / 2 + center.x * unit + R * 0.55, H / 2 - center.y * unit - R * 0.75, R);
  }

  function drawZzz(x, y, R) {
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    for (let i = 0; i < 3; i++) {
      const t = (time * 0.35 + i / 3) % 1;
      ctx.globalAlpha = Math.sin(Math.PI * t) * 0.7;
      ctx.font = `600 ${Math.round(R * (0.12 + t * 0.1))}px system-ui, sans-serif`;
      ctx.fillText('z', x + t * R * 0.3 + Math.sin(t * 6) * R * 0.04, y - t * R * 0.6);
    }
    ctx.restore();
  }

  // ---- sizing and lifecycle ----
  function resize() {
    const r = container.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 2);
    for (const c of [orbCanvas, eyeCanvas]) {
      c.width = Math.max(1, Math.round(r.width * dpr));
      c.height = Math.max(1, Math.round(r.height * dpr));
    }
    orb.resize(orbCanvas.width, orbCanvas.height);
    if (!autoplay && ready) update(0); // resizing clears the canvas; repaint the held frame
  }
  let ready = false;
  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  function onVisibility() {
    cancelAnimationFrame(raf);
    last = 0;
    if (!document.hidden && autoplay) raf = requestAnimationFrame(frame);
  }
  document.addEventListener('visibilitychange', onVisibility);
  setMood(mood);
  ready = true;
  if (autoplay) raf = requestAnimationFrame(frame);

  // With autoplay: false, the caller drives the clock (tests, pose sheets).
  function stepBy(seconds) {
    for (let t = 0; t < seconds - 1e-9; t += 1 / 60) update(Math.min(1 / 60, seconds - t));
  }

  return {
    setMood,
    setLevel,
    play,
    step: stepBy,
    get mood() { return mood; },
    destroy() {
      cancelAnimationFrame(raf);
      clearTimeout(holdTimer);
      ro.disconnect();
      removeEventListener('pointermove', onPointer);
      document.removeEventListener('visibilitychange', onVisibility);
      orbCanvas.remove();
      eyeCanvas.remove();
    },
  };
}

// A keep-alive's pose at p (0..1): a Catmull-Rom curve through its keyed poses, so
// the motion passes through every pose without stopping dead at each one.
function samplePose(def, p) {
  const keys = def.keys;
  let i = 0;
  while (i < keys.length - 2 && p > keys[i + 1][0]) i++;
  const [t1, P1] = keys[i];
  const [t2, P2] = keys[i + 1];
  const P0 = (keys[i - 1] ?? keys[i])[1];
  const P3 = (keys[i + 2] ?? keys[i + 1])[1];
  const u = clamp((p - t1) / (t2 - t1), 0, 1);
  const out = {};
  for (const f of new Set([...Object.keys(P0), ...Object.keys(P1), ...Object.keys(P2), ...Object.keys(P3)])) {
    const a = P0[f] ?? 0, b = P1[f] ?? 0, c = P2[f] ?? 0, d = P3[f] ?? 0;
    out[f] = 0.5 * (2 * b + (c - a) * u + (2 * a - 5 * b + 4 * c - d) * u * u + (3 * b - a - 3 * c + d) * u * u * u);
  }
  return out;
}

function drawEye(ctx, x, y, w, h, tilt, smile) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(tilt);
  ctx.fillStyle = ctx.strokeStyle = '#fff';
  ctx.shadowColor = 'rgba(255,255,255,0.85)';
  ctx.shadowBlur = w * 0.9;
  // A smile squashes the pill flat, then curves it into a ^, rather than fading
  // one shape over the other.
  const pillShare = 1 - smoothstep(0.35, 0.6, smile);
  const arcShare = smoothstep(0.4, 0.65, smile);
  if (pillShare > 0.01) { // a rounded pill
    ctx.globalAlpha = pillShare;
    h = Math.max(h * (1 - smile * 1.4), w * 0.45);
    const rr = Math.min(w, h) / 2;
    ctx.beginPath();
    ctx.moveTo(-w / 2 + rr, -h / 2);
    ctx.arcTo(w / 2, -h / 2, w / 2, h / 2, rr);
    ctx.arcTo(w / 2, h / 2, -w / 2, h / 2, rr);
    ctx.arcTo(-w / 2, h / 2, -w / 2, -h / 2, rr);
    ctx.arcTo(-w / 2, -h / 2, w / 2, -h / 2, rr);
    ctx.closePath();
    ctx.fill();
  }
  if (arcShare > 0.01) { // a happy arc: ^, bending as it arrives
    ctx.globalAlpha = arcShare;
    ctx.lineWidth = w * 0.5;
    ctx.lineCap = 'round';
    const bend = 0.3 + 0.7 * arcShare;              // 0.3 almost flat .. 1 full curve
    const span = 0.25 + 0.77 * bend;                // half-angle of the arc, radians
    const radius = (w * 0.9) / Math.sin(span);      // keeps the arc the same width
    ctx.beginPath();
    ctx.arc(0, radius * Math.cos(span) - w * 0.15, radius, -Math.PI / 2 - span, -Math.PI / 2 + span);
    ctx.stroke();
  }
  ctx.restore();
}

function createOrbRenderer(canvas) {
  const gl = canvas.getContext('webgl', { premultipliedAlpha: true, alpha: true, antialias: true });
  if (!gl) return createFallbackOrb(canvas);

  const prog = gl.createProgram();
  for (const [type, src] of [[gl.VERTEX_SHADER, VERT], [gl.FRAGMENT_SHADER, FRAG]]) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    gl.attachShader(prog, s);
  }
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
  gl.useProgram(prog);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const FLOATS = ['time', 'phase', 'scale', 'hue', 'spread', 'sat', 'ring', 'glow', 'core', 'wobble',
    'fill', 'comet', 'cometAngle', 'level', 'dim', 'sparkle'];
  const u = {};
  for (const name of [...FLOATS, 'res', 'center', 'stretch']) u[name] = gl.getUniformLocation(prog, 'u_' + name);

  return {
    resize(w, h) { gl.viewport(0, 0, w, h); gl.uniform2f(u.res, w, h); },
    draw(p) {
      for (const k of FLOATS) gl.uniform1f(u[k], p[k]);
      gl.uniform2f(u.center, p.center.x, p.center.y);
      gl.uniform2f(u.stretch, p.stretch.x, p.stretch.y);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
  };
}

// Without WebGL: a simpler ring drawn with a conic gradient, so the face still shows.
function createFallbackOrb(canvas) {
  const ctx = canvas.getContext('2d');
  return {
    resize() {},
    draw(p) {
      const W = canvas.width, H = canvas.height, unit = Math.min(W, H) / 2;
      const R = ORB_RADIUS * p.scale * unit;
      ctx.clearRect(0, 0, W, H);
      ctx.save();
      ctx.translate(W / 2 + p.center.x * unit, H / 2 - p.center.y * unit);
      ctx.scale(p.stretch.x, p.stretch.y);
      ctx.globalAlpha = p.dim;
      ctx.fillStyle = '#04262a';
      ctx.beginPath(); ctx.arc(0, 0, R, 0, TAU); ctx.fill();
      const g = ctx.createConicGradient(-p.phase * TAU, 0, 0);
      for (let i = 0; i <= 6; i++) {
        g.addColorStop(i / 6, `hsl(${((p.hue - p.spread * i / 6) * 360 + 360) % 360}, ${p.sat * 100}%, 60%)`);
      }
      ctx.strokeStyle = g;
      ctx.lineWidth = R * (0.12 + 0.08 * p.ring);
      ctx.shadowColor = `hsl(${p.hue * 360}, ${p.sat * 100}%, 60%)`;
      ctx.shadowBlur = R * 0.3 * p.glow;
      ctx.beginPath(); ctx.arc(0, 0, R * 0.9, 0, TAU); ctx.stroke();
      ctx.restore();
    },
  };
}

function layer(container) {
  const c = document.createElement('canvas');
  c.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;';
  container.appendChild(c);
  return c;
}

// Damped spring, stepped in small slices so stiff springs stay stable.
function spring(s, target, k, z, dt) {
  const n = Math.ceil(dt / 0.008);
  const h = dt / n;
  const c = 2 * z * Math.sqrt(k);
  for (let i = 0; i < n; i++) {
    s.v += (-k * (s.x - target) - c * s.v) * h;
    s.x += s.v * h;
  }
}

function ease(from, to, dt, rate) { return from + (to - from) * (1 - Math.exp(-dt * rate)); }
function rand(a, b) { return a + Math.random() * (b - a); }
function clamp(x, a, b) { return Math.min(b, Math.max(a, x)); }
function wrapHalf(d) { return ((d % 1) + 1.5) % 1 - 0.5; }
function smoothstep(a, b, x) { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
