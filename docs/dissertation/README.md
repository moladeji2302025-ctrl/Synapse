# Project report — department requirements

Rules from the owner's lecturer and the FYP meetings for the final-year project report. Every
chapter drafted here must follow them. Where a later instruction changed an earlier one, the
later one is what stands below.

## Structure
1. Introduction — no preamble.
2. Literature review — opens with a preamble.
3. Research methodology — opens with a preamble.
4. Results — opens with a preamble.
5. Summary and conclusion — opens with a preamble.

## Formatting
- Body text: font size 12, 1.5 line spacing. Major headings: font size 14.
- **Every paragraph is 8 to 9 lines long** as printed (12 pt, 1.5 spacing, A4, standard margins).
  Check by rendering the document, not by word count alone.
- **No sentence longer than 25 words.**

## Writing
- **Clear enough that the panel never has to infer or ask.** Say each point directly; never leave
  a link, reason or meaning for the reader to work out. Say why each fact matters to this project.
- **Old information first, new information last** in every sentence: start from what the reader
  already knows (often the end of the previous sentence) and end on the new point.
- **Paragraphs flow into one another** in context and thought. Each opens by linking back to the
  previous point and closes by leading into the next. Sections build as a chain (Chapter 1: the
  wider setting → students and their routines → what existing tools do → where they fall short →
  what this project does).
- **No definitions in Chapter 1** — definitions belong in the literature review. Chapter 1 is
  written in plain words that need no definition.
- **Law of first mention:** an acronym is never used before it appears once in full with the
  acronym in brackets — "artificial intelligence (AI)", then "AI". This applies from page one.
- **No technical words the student cannot explain.** Technicality is expected of a computer
  science student, but only at the level the student can defend. A technical term goes in only
  if the project needs it and the student can explain it; otherwise use plain words or leave it
  out. Name each choice in plain words before its technical name ("a method for finding actions
  that usually follow one another, called PrefixSpan").

## Chapter 1 — Introduction
- **Background to the study:** at least one full page. An overview of the whole area. It names
  the problems in current solutions and gives examples of what others have built, with
  citations, and says exactly what each is.
- **Statement of the problem:** two paragraphs, clear and concise. It is specific to what this
  study will solve, where the background is a general overview. It is **derived from the aim,
  objectives and methods** — write those first. **Never state a problem the project is not
  solving:** every problem named is answered by a feature, an objective, a method and a result.
  Wider issues the project does not fix (smartphone addiction, grades, mental health) appear in
  the background only, as context.
- **Aim:** exactly the project topic, turned into an aim ("The aim of this project is to design
  and implement [the rest of the title word for word]"). If the title changes, the aim changes.
- **Objectives** are what will be done; **methods** are how. Each objective begins with an action
  word and has its own method and its own result. They follow a fixed order: (1) identify the
  requirements, through a literature review; (2) collect the data; (3) design the system;
  (4) implement it; (5) evaluate it, including a user review of user satisfaction. Usability,
  flexibility and similar qualities are metrics inside objective 5, not objectives of their own.
- **Scope:** how far the project goes — its functional and non-functional requirements, what it
  leaves out, and why it is feasible. Keep it modest: better for the panel to ask for more scope
  than to ask what the scope is.

### Draft aim and objectives (working — retitled 2026-11-24; full plan in `ROADMAP.md`)
**Aim:** to design and implement an AI-powered cross-device routine learning, daily planning and
task automation system for executive function support in university students.

| # | Objective | Method | Result |
| --- | --- | --- | --- |
| 1 | To identify the requirements of an AI-powered cross-device routine learning, daily planning and task automation system for executive function support in university students | Review of related literature and existing systems | Functional and non-functional requirements |
| 2 | To collect activity, passive device and location data from consenting university students through their Windows PCs and Android phones | Consent screen with a toggle per category; PC and Android collectors over a set study period | A dataset of consented device events |
| 3 | To design the system's architecture, data model, routine-learning, daily-planning and task-automation models | Architecture, use-case, entity-relationship, sequence and activity diagrams; design of the learning, planning and trigger steps | Design documents and diagrams |
| 4 | To implement the system as a Windows desktop application and an Android application connected through a cloud backend | Windows agent, Kotlin/Jetpack Compose, React dashboard, Supabase; built in short iterations | A working cross-device system |
| 5 | To evaluate the system's accuracy, automation, usability, user satisfaction and effect on missed commitments and executive functioning | Routine and plan accuracy against what participants confirm and do; automation acceptance, cancellation, false triggers and delays; usability (System Usability Scale); flexibility (adapting when a routine changes); acceptance and satisfaction questionnaire (TAM/UTAUT) | Evaluation scores and user review findings |

### Draft scope (working)
- **Functional requirements:** consented, visible logging of activity and passive events on a
  Windows PC and an Android phone, plus phone location turned into labelled places; routines
  learned per weekday, time and place, and extracted from documents the user provides (e.g. a
  timetable); calendars and other existing systems read first and allowed to override; a detailed
  daily plan (activities, sub-activities, tasks with times) that replans when the user runs late;
  task automation on any connected device with per-task levels (suggest, ask first, always),
  fired only when its conditions are met and announced by voice and notification before
  interrupting; core actions through official APIs (scheduled SMS and email, calls, Google
  Calendar meetings, modes, geofences, labelled alarms), extended actions through UI automation
  (WhatsApp/Telegram scheduling, steps in other apps); morning brief and end-of-day report; a web
  dashboard; export and delete.
- **Non-functional requirements:** privacy (consent per category; passwords, PINs, card details,
  typing and clipboard never recorded; notification text opt-in); usability; reliability (acts
  offline from cached rules and plans, syncs later); acceptable speed and battery use.
- **Left out:** iPhone (iOS), macOS and Linux; IP-based location; recording typing or the
  clipboard; payments and passwords; AI-written messages sent without review; health outcomes.
- **Feasibility:** free or free-tier tools (Android Studio, .NET or Electron, React, Supabase, an
  online language model with a free tier); apps installed directly for the study, so no store
  approval; core actions use official APIs, so the objectives never depend on the fragile
  extended layer.

## Chapter 2 — Literature review
- **Breaks the project idea into its most basic components and studies each one**, then reviews
  previous works related to this one and what makes this one different. Definitions live here.
- The system's components, one section each (the 2026-11-24 layout is in `ROADMAP.md`):
  1. Routines and habits.
  2. Collecting activity and passive device data from PCs and phones (cross-device).
  3. Location and places.
  4. Context and context-aware computing.
  5. Learning routines from data — periodic, sequential and association pattern mining; giving
     recent behaviour more weight; day-specific routines; extracting routines from documents.
  6. Representing what is learned — linked graphs of a person's activities.
  7. Daily planning — dependencies, conditions as triggers, replanning.
  8. Task automation — trigger-action rules, levels of automation, human control.
  9. Suggestions, notifications and their timing.
  10. Intelligent assistants and language models.
  11. Storing, syncing and acting offline across devices.
  12. Privacy, consent and data protection — privacy by design, location privacy, the NDPA 2023.
  13. User acceptance and evaluation — TAM/UTAUT, usability.
  14. **Review of existing systems** (required) — each named, described, referenced, compared
      with the proposed system, and the gap it leaves stated:

      | Existing system | What it does | What it lacks that the proposed system adds | Reference |
      | --- | --- | --- | --- |
      | RoutineMaker | Logs phone use, suggests routines to automate | Phone only; no adapting over time | Antila et al. (2012) |
      | RoutineSense | Rebuilds daily routines from phone sensing | Phone only; no guidance | Ranvier et al. (2015) |
      | BehavMiner | Mines behaviour rules from phone logs | Phone only; no assistant | Sarker (2018) |
      | Reality Mining | Recognised routines from phone logs | Research study, not a tool for users | Eagle & Pentland (2006) |
      | StudentLife | Sensed students' behaviour by phone | Measures, does not guide | Wang et al. (2014) |
      | CASAS smart home | Learns residents' routines at home | Home sensors, not personal devices | Cook et al. (2013) |
      | Cortana-style proactive cards | Shows suggestions before being asked | Limited to the vendor's own data | Shokouhi & Guo (2015) |
      | Siri, Alexa, Google Assistant | Answer voice commands | Do not learn the user's routine | Hoy (2018) |
      | Time trackers (RescueTime-style) | Show how computer time was spent | Report only; no routine learning | Kim et al. (2016); Whittaker et al. (2016) |
      | Digital-wellbeing apps | Track and limit screen time | Limit use; do not learn or guide | Monge Roffarello & De Russis (2019) |
      | Screen-operating AI agents (AppAgent, UFO) | Carry out tasks on a screen | No routine learning; future work | Zhang et al. (2025a, 2025b) |

      Commercial products with no peer-reviewed source (Samsung Bixby Routines, Microsoft
      Recall, Reclaim.ai) are cited only if the lecturer accepts official websites. Several
      entries above are older than 10 years and need recent equivalents (see Sources).
- **Every technology, algorithm, system and program is explained and justified:** what it is,
  why it is used, and why it beat the alternatives, with a citation.

  | Choice | Used for | Alternatives to weigh |
  | --- | --- | --- |
  | Kotlin + Jetpack Compose | Android app | Java, Flutter, React Native |
  | Android usage statistics | Recording app use with permission | Accessibility service, manual logging |
  | React + Vite | Web app | Angular, Vue, plain HTML |
  | Supabase (PostgreSQL) | Cloud backend, sign-in, storage | Firebase, a self-built server |
  | Row-level security | Keeping each user's data separate | A database per user, checks in the app |
  | Offline queue with later sync | Collecting while offline | Online-only upload |
  | Periodic pattern mining | Daily and weekly routines | Fixed time slots, topic models |
  | PrefixSpan (sequential mining) | "A then B" routines | Apriori-style mining, Markov models |
  | Support and confidence | Scoring routines | Raw counts |
  | Recency weighting | Letting routines change | Treating all history equally |
  | Linked graph of activities | Representing what is learned | Flat event tables |
  | Language model + retrieval | The guide's answers | Rule-based chatbot |
  | Agile, iterative development | Development method | Waterfall |

  Tools such as Kotlin, React and Supabase are mostly described in official documentation, which
  is not peer-reviewed: prefer peer-reviewed comparisons, and ask the lecturer whether official
  documentation may be cited where none exists.

## Datasets
- **Any dataset used is studied and described in full, feature by feature:** source (cited), who
  it was collected from and how many, period covered, number of records, every feature (name,
  meaning, type, example), how it was cleaned, limitations, and the licence or consent allowing
  its use.
- The system's own dataset (objective 2), working features:

  | Feature | Meaning | Type | Example |
  | --- | --- | --- | --- |
  | User | Which participant, as an anonymous ID | Identifier | 7f3a… |
  | Device | Which phone or browser recorded it | Identifier | Android phone |
  | Timestamp | When the action happened | Date and time | 2026-11-20 08:14 |
  | Event type | Kind of action | Category | app opened, web page |
  | App | Which app or website | Text | WhatsApp |
  | Duration | How long it lasted | Number (seconds) | 420 |
  | Weekday, hour, month | When in the week, day and year | Derived numbers | Monday, 8, November |
  | Place | Labelled place from phone location, only if location is enabled | Category | library |
| Passive state | Charging, screen, network, headphones, movement, idle/active | Category / number | charging = yes |
| Source | Which signal produced the event | Category | notification, window, location |

- Public datasets may be used to test the routine finder early (candidates: StudentLife —
  Wang et al., 2014; the app-usage data in Yu et al., 2018). Any used gets the same description.

## Sources and citations
- **Finding sources:** search Google Scholar with the key words of the project title; search
  papers by their titles; follow the related and "cited by" articles under each.
- **Recent and credible only:** papers from the last 5–10 years (2016 onwards); peer-reviewed,
  never preprints; check credibility before downloading. Foundational older works only if the
  lecturer allows them, and never counted toward the minimum.
- **How many:** at least 70 citations across the report (the meeting said 60–70; the stricter
  earlier figure stands): Chapter 1 at least 15, Chapters 2–4 at least 45–50, Chapter 5 at least 10.
- **Every strong claim carries a citation**, placed close to the claim, citing the source for that
  exact point.
- **Style:** APA. The meeting notes say "APA 8"; the current edition known here is APA 7 (2019) —
  confirm with the lecturer. In-text forms:
  - Start of a sentence: author outside, year in brackets — "Joy (2028) found…"
  - Middle: either form — "…as Joy and Preye (2027) show…" or "…(Joy & Preye, 2027)…"
  - End: everything in brackets — "…grades fell (Joy, 2028)."
- **Keep every paper used** in one folder (`papers/`, kept out of git) and in **Zotero** as the
  reference manager.
- **Synthesis table** of the papers: author, method, result, limitations, further work.
- NotebookLM may be used to study papers, at most 10 per notebook.
- The verified list, tagged by chapter, is `sources.md`: 189 sources, 129 of them from 2016 on —
  enough on their own for every minimum (Ch. 1: 65, Ch. 2–4: 118, Ch. 5: 23). The full literature
  review, with a synthesis table and the CRAAP test for every source, is `Literature_Review.md`. Older ones are
  marked and used only as foundational works if allowed.
- `ROADMAP.md` lays out Chapters 1–3 section by section for the retitled project (task
  automation added), with the sources for each paragraph and full reference lists.

## The defense
- The mini defense tests how well the student understands the project. Questions centre on the
  **problem statement, aim, objectives and methodology** — know these word for word, "even in
  your sleep"; once final they go on one page to memorise, worded exactly as in Chapter 1.
- The panel picks out concepts, algorithms and objectives and asks for explanations, so the
  student must understand everything in the report, and every algorithm comes with a simple
  worked example.
- What each panel member looks for:

  | Panel member | Focus |
  | --- | --- |
  | Dr. Theresa | Concepts cited in the work |
  | Prof. Dami | Algorithms |
  | Mr. Otavie | Programming languages |
  | Dr. Iheneatu | A clear, concise problem statement |
  | Dr. Jemima | Everything in these rules |

## Title
**Design and Implementation of an AI-Powered Cross-Device Routine Learning, Daily Planning and
Task Automation System for Executive Function Support in University Students** — chosen by the
owner on 2026-11-25. The system takes over planning, timekeeping and remembering intentions
(automated cognitive offloading) for any student whose executive function slips, from everyday
factors to health conditions such as anxiety, depression, ADHD or autism. No diagnosis is needed. The earlier title was "…an Adaptive
Routine Learning System Using Smartphone and Web Activity Data (A Case Study of Students of
[University])"; the existing chapter drafts still carry it until the owner rewrites them from
`ROADMAP.md`.
