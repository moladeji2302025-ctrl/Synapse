# Files

File-by-file living doc. Update it every build.

## Root
- `README.md` — what Synapse is and the hard rules, in brief.
- `CLAUDE.md` — standing instructions for every agent working in this repo.
- `.gitignore` — keeps secrets, builds and local tooling out of git.

## backend/
- `migrations/0001_init.sql` — initial Postgres schema: devices, consent, events, the graph
  (entities, edges), rhythms, suggestions, plans, embeddings; row-level security on every table.

## web/
- `face-demo.html` — standalone preview of the face: a button per mood, `?all` grid view,
  `?strip=<keep-alive>` pose sheet. Shows how to open it if loaded from `file://`.
- `preview-face.cmd` — double-click launcher: starts the preview server and opens the demo.
- `scripts/serve.mjs` — minimal static server for `web/` on 127.0.0.1 (default port 5179).
- `src/face/face.js` — the face engine: `createFace(element, options)` returns `setMood`,
  `setLevel`, `play`, `step`, `destroy`. Springs for every value, squash and stretch, eye
  follow-through, keyframed keep-alives. WebGL shader for the orb, 2D canvas for the eyes, a
  conic-gradient fallback without WebGL. Options: `mood`, `keepAlives: false`,
  `autoplay: false` (drive the clock with `step(seconds)`), `reduceMotion`.
- `src/face/moods.js` — the personality table: each mood's orb and eye targets, behaviour,
  tempo and entrance, and the keyframed keep-alives.

## docs/
- `PROJECT_CONTEXT.md` — single source of truth: decisions, plan, current status, next steps.
- `HOPE_REFERENCE.md` — Hope patterns to re-implement here (reference only).
- `FEATURES.md` — feature-by-feature living doc.
- `FILES.md` — this file.
- `dissertation/README.md` — the department's rules for the report: structure, formatting,
  Chapter 1 contents, citation minimums per chapter.
- `dissertation/ROADMAP.md` — section-by-section plan for writing Chapters 1–3 under the
  2026-11-25 title (cross-device routine learning, daily planning and task automation for
  university students with ADHD): what each paragraph says, which sources to cite, full APA
  lists per chapter, and the mistakes found in two real Covenant University FYP reports.
  `dissertation/Chapter_Roadmap.pdf` is the same roadmap as an A4 PDF (rendered
  from the Markdown and printed with Edge; regenerate it after editing `ROADMAP.md`).
  `dissertation/ROADMAP.humanized.md` and `Chapter_Roadmap.humanized.pdf` are a light
  humanize pass on it (stylistic phrases replaced, note-style semicolon chains turned into
  sentences, list-end semicolons dropped); same content, citations and references.
- `dissertation/chapters/chapter1.v2.md`, `chapter2.v2.md` (+ `.humanized.md`) — Chapter One (Introduction)
  and Chapter Two (Literature Review) under the 2026-11-25 title, written in the reference FYP format;
  built to `Chapter_1_Introduction(.humanized).docx/.pdf` and `Chapter_2_Literature_Review(.humanized).docx/.pdf`.
- `dissertation/Literature_Review_Notes.md` (+ `.pdf`) — research notes behind Chapter Two (themes, synthesis
  table, design and evaluation requirements, strays removed); not a deliverable.
- `dissertation/requirements/Student_Routine_and_Focus_Survey.md` (+ `.pdf`) — requirements-elicitation
  questionnaire; never names ADHD; pairs with the official WHO ASRS-5 for screening.
- `dissertation/sources.md` — 152 verified peer-reviewed sources (92 from 2016 on), tagged by
  chapter, with a coverage table against the citation minimums for recent and all sources,
  older-than-10-years flags, APA references, free PDFs and Scholar links.
- `dissertation/coursework/` — COS 411 coursework (literature review of Ramachandran et al., 2022).
- `dissertation/chapters/chapter1.md`, `chapter2.md` — chapter sources (Markdown with `[@key]` citations).
- `dissertation/chapters/chapter1.humanized.md`, `chapter2.humanized.md` — the same chapters
  rewritten for sentence rhythm (same facts, citations, headings and tables); originals untouched.
  `*.humanized2.md` is a second, deeper pass built from the first; `*.humanized2.docx` / `.pdf`
  are built from it. `chapter1.humanized3.md` (and `Synapse_Chapter_1.humanized3.docx`) is a
  third pass on Chapter 1, phrase by phrase against human academic writing.
  `chapter1.humanized4.md` (and `Synapse_Chapter_1.humanized4.docx`) is a fourth pass rebuilt from
  the original in the voice of the owner's "academic" example set (Logan & Crump 2011; Morton 2017).
- `dissertation/build/` — `build.cjs` turns chapters into Word + PDF and checks the department's
  rules; `refs.cjs` holds the APA reference database; `pdf_blocks.py` is the PyMuPDF fallback for
  the 8–9-line paragraph check where Poppler's `pdftotext` is missing. Usage:
  `node build.cjs <out.docx> [chapter files...]`.
- `dissertation/*.humanized.docx` / `.pdf` — Word files built from the humanized chapters.
- `dissertation/Synapse_Chapters_1-2.docx` / `.pdf` — Chapters 1 and 2 together.
- `dissertation/Synapse_Chapter_1.docx` / `.pdf`, `Synapse_Chapter_2.docx` / `.pdf` — each chapter
  on its own, with its own reference list.
