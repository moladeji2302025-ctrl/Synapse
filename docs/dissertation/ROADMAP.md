# Chapter roadmap — for writing Chapters 1 to 3 yourself

**Title:** Design and Implementation of an AI-Powered Cross-Device Routine Learning, Daily
Planning and Task Automation System for Executive Function Support in University Students

Layout for each chapter, what each section and paragraph should say, and which sources to cite
where, with the full APA reference list for every chapter at the end of that chapter. Updated
2026-11-24 for the full design: Windows PC + Android, passive logging, location and places,
day-specific routines, routines from documents, daily plans, conditions as triggers, dependent
tasks and per-task automation levels. Updated again on 2026-11-25 for executive function
support in university students. The evidence for every claim is in `Literature_Review.md`.

Built from three things:
- **Your department's rules** (`README.md` in this folder). Where the other two disagree with
  them, the rules win.
- **Two real FYP reports from Covenant University**: the 2024 CIS report (Umukoro, *AI-powered
  job-match and skill gap analysis platform*) and the 2026 EEE report (Oladeji, *Smart multilevel
  water pump controller*). Their section layout is copied where it helps, and their mistakes are
  listed so you avoid them.
- **Your verified sources** (`sources.md`, `build/refs.cjs`). Every reference below is in
  `refs.cjs` with a DOI checked against Crossref.

---

## 0. Fixed, and still to confirm

**Aim (the title, word for word):** "The aim of this project is to design and implement an
AI-powered cross-device routine learning, daily planning and task automation system for
executive function support in university students."

| Item | Status |
| --- | --- |
| Title and aim | Fixed (owner, 2026-11-25) |
| What "executive function" means here | Planning, keeping track of time, remembering to act on intentions, and starting and finishing tasks. The system takes these jobs over by automating them (automated cognitive offloading). |
| Who it is for | All university students. Executive function is weakened by everyday factors (phone, sleep, stress) and by health conditions from mild to severe (anxiety, depression, ADHD, autism, post-viral illness). No diagnosis is needed, and the system never diagnoses or treats anything. |
| Significance and Organisation sections | Included: both real FYPs have them, though the rules don't mention them. Confirm with your supervisor. |
| PC app language | C# on .NET suggested, for direct access to Windows features. Electron or Tauri would reuse React. Decide before Chapter 2.16. |
| Ethics approval for the participant study | Ask the department now, as it can take weeks. The study collects personal data, and the survey asks about focus and difficulties. |

**One wording trap:** the AI model does not "train" on a timetable. It **reads and extracts**
routines from it (information extraction). Training means changing the model's weights, which
is not happening.

---

## Front matter (order taken from the two real reports)

1. Cover page
2. Title page: title, name, matric number, "A project report submitted to the Department of
   Computer and Information Sciences… in partial fulfilment of the requirements for the award of
   the Bachelor of Science (Honours) degree in Computer Science", supervisor, month and year
3. Declaration (the 2026 report has one; check the current template)
4. Certification: supervisor and Head of Department with signature and date
5. Dedication
6. Acknowledgements
7. Table of contents
8. List of figures
9. List of tables
10. List of abbreviations (the 2026 report adds the page of first use, which is useful for the
    first-mention rule)
11. Abstract, with keywords

Write the abstract last: problem, aim, methods, results with real numbers, conclusion. No
citations.

---

## Chapter 1 — Introduction (no preamble; at least 15 citations)

Rules that bite in this chapter:
- **No definitions.** Plain words only. Terms like DBSCAN or topological sort are not named here.
  Executive function can be named in plain words ("planning, keeping track of time, remembering
  to act"); it is defined in Chapter 2.
- **Acronyms in full at first mention**, from page one: "artificial intelligence (AI)",
  "large language model (LLM)", "personal computer (PC)",
  "attention-deficit/hyperactivity disorder (ADHD)".
- **Paragraphs of 8–9 printed lines; no sentence over 25 words; old information first, new
  information last; each paragraph links back and leads on.**

### 1.1 Background to the Study (at least one full page; about 9 paragraphs)

The chain: university life runs on planning and remembering → this weakens easily, from everyday
factors to serious conditions → it costs students grades → help exists but is hard to reach →
the tools need the effort that is failing → devices already record the routine → automation
today waits to be told → AI makes something better possible → this project.

| ¶ | What it says | Cite |
| --- | --- | --- |
| 1 | University life runs on planning the day, keeping track of time and remembering to act at the right moment. These abilities are linked to academic performance, and forgetting to carry out an intention is the most common everyday lapse in young adults. | del-Valle et al. (2024); Haas et al. (2020); Aeon et al. (2021) |
| 2 | These abilities weaken easily. Everyday factors do it: the mere presence of a phone reduces available mental capacity, and poor or irregular sleep goes with lower grades. Exam stress adds to it. | Ward et al. (2017); Okano et al. (2019); Seun-Fadipe & Mosaku (2017); Shields et al. (2016) |
| 3 | Health conditions weaken them further, from mild to severe: anxiety and depression, ADHD (one Ethiopian undergraduate in four had high symptoms), autism and illness such as post-COVID fatigue. About a third of first-year students screen positive for a common mental disorder, and many are never diagnosed. | Moran (2016); Semkovska et al. (2019); Kassaw et al. (2025); Dijkhuis et al. (2020); Ceban et al. (2022); Auerbach et al. (2018) |
| 4 | The cost to students is real. Inattention predicts lower grades and dropout, and executive difficulties, not intelligence, make the difference. Poor organisation of time goes with lower quality of life. Heavier phone use goes with weaker results, and a Nigerian study across three universities examined internet use and performance. **Context only. Don't promise to fix grades.** | Henning et al. (2022); Weyandt et al. (2017); Grinblat & Rosenblum (2025); Amez & Baert (2020); Musa & Iliyasu (2026) |
| 5 | Help exists but is hard to reach. Therapy and skills training work, but need trained staff, and waits are long. In Nigeria, stigma around mental health keeps people from help. Students fall back on their own coping strategies, with mixed success. | Anastopoulos et al. (2021); Sedgwick-Müller et al. (2022); Pederson et al. (2023); Canela et al. (2017) |
| 6 | The tools need the effort that is failing. People offload memory onto reminders, but every reminder must be set up, and the tool must be remembered. A therapy app lost most of its users within seven weeks, and text reminders did not help. Calendars, assistants and student time apps hold only what users enter or ask. | Risko & Gilbert (2016); Gilbert et al. (2020); Knouse et al. (2022); Nordby et al. (2022); Hoy (2018); Alhasani & Orji (2025); Nobbe et al. (2024) |
| 7 | Devices already record the routine. Phones and computers log app use, place and device state, and this passive data reveals behaviour. People differ widely. Research systems learn routines, but use fixed time slots, weigh old and new behaviour equally, sit on one device and stop at measuring. | Cao & Lin (2017); Zhao et al. (2016); Harari et al. (2016); Mohr et al. (2017); Brudy et al. (2019); Banovic et al. (2016); Sarker et al. (2018); Sarker et al. (2019b); Rooksby et al. (2016) |
| 8 | Automation today waits to be told. "If this, then that" rules must be written by the user and are often misread. AI agents act on a command. Rules fire at set times, not when the real conditions are met. Recording this much also demands consent, as apps still track widely and location is especially revealing. | Ur et al. (2016); Brackenbury et al. (2019); Wen et al. (2024); C. Zhang et al. (2025); Kollnig et al. (2021); Primault et al. (2019) |
| 9 | What AI makes possible, and the project. LLMs work in plain language. People expect some initiative from AI, but timing matters, and actions must stay under the user's control. Introduce the system: with consent, it learns a student's routine from PC and phone, plans their day, and carries out routine tasks at the moment they are due, telling them first unless set to always. It takes over the planning and remembering when executive function slips, whatever the cause. Lead into 1.2. | Kasneci et al. (2023); Meurisch et al. (2020); Zargham et al. (2022); Amershi et al. (2019) |

### 1.2 Statement of the Problem (exactly two paragraphs)

Write this **after** 1.3 and 1.4. Every problem named must map to an objective, a method and a
result. Grades and specific conditions stay in 1.1 as context.

| ¶ | What it says | Cite |
| --- | --- | --- |
| 1 | University students depend on executive function to plan their day, keep track of time and act on their intentions, and it slips easily. Phone presence, poor sleep and stress weaken it in everyone. Anxiety, depression, ADHD, autism and illness weaken it more, often undiagnosed. When it slips, commitments are missed, work is left undone and grades suffer. Help that works needs trained staff, who are scarce, and in Nigeria stigma keeps many from seeking it. | del-Valle et al. (2024); Haas et al. (2020); Ward et al. (2017); Okano et al. (2019); Auerbach et al. (2018); Henning et al. (2022); Sedgwick-Müller et al. (2022); Pederson et al. (2023) |
| 2 | The tools meant to help ask for the very effort that is failing. Reminders must be set up and planners kept, users drop away, and reminders alone do not change behaviour. Automation tools make users write rules that fire at set times. Research systems that learn routines use one device and fixed time slots, and stop at measuring. What is needed is a consent-based system that learns each student's routine from their PC and phone without manual input, plans their day, and carries out routine tasks when their conditions are met. It must be shown to be accurate, usable and acceptable, and to reduce missed commitments. | Gilbert et al. (2020); Knouse et al. (2022); Nordby et al. (2022); Ur et al. (2016); Brackenbury et al. (2019); Sarker et al. (2018); Rooksby et al. (2016); Banovic et al. (2016) |

**Check table (keep this out of the report, but tick it before submitting):**

| Problem named | Feature | Objective | Method | Result |
| --- | --- | --- | --- | --- |
| Students lose track of time and miss commitments | Daily plan, labelled alarms, spoken transition warnings, condition-triggered actions | 3, 4, 5 | Before-and-after comparison | Missed and late commitments |
| Intentions are forgotten at the moment they are due | Actions fire when conditions are met | 3, 4, 5 | Acceptance, cancellation, false triggers | Automation results |
| Running the day overloads executive function | Plan + automation take the load (automated cognitive offloading) | 5 | ADEXI at start and end | Change in everyday executive function |
| Tools need set-up and remembering; users drop away | Passive learning, no manual input | 2, 3, 4, 5 | Retention over the study | Retention vs app studies |
| Help is scarce and stigmatised | Private, non-labelling help that needs no diagnosis | 1, 4 | Requirements survey; design review | Requirements and design |
| Fixed slots, one device, stale routines | Per-user, per-weekday routines; recency; PC + Android | 2, 3, 5 | Routine accuracy; adaptation test | Accuracy and adaptation |
| No meaningful consent | Consent per category; visible logging | 2, 4 | Consent screen | Consented dataset |
| Must be shown to work | — | 5 | Accuracy, SUS, TAM/UTAUT | Evaluation results |

### 1.3 Aim and Objectives

Aim as in section 0. Objectives, each starting with an action word, in the department's fixed
order:

1. To identify the requirements of an AI-powered cross-device routine learning, daily planning and task automation system for executive function support in university students.
2. To collect activity, passive device and location data from consenting university students through their Windows PCs and Android phones.
3. To design the system's architecture, data model, and its routine-learning, daily-planning and task-automation models.
4. To implement the system as a Windows desktop application and an Android application connected through a cloud backend.
5. To evaluate the system's routine-detection and planning accuracy, task-automation performance, usability, user satisfaction, and its effect on missed commitments and everyday executive functioning.

### 1.4 Methodology

One short paragraph per objective (as in the 2024 report), then Table 1.1 **with a Result
column** (your rules require it).

| Objective | Methodology | Result |
| --- | --- | --- |
| 1. To identify the requirements | Review of related literature and existing systems; a requirements survey of students on focus, time, current tools and needs | Functional and non-functional requirements |
| 2. To collect the data | A consent screen with a switch for each kind of data; a Windows app and an Android app that record activity, device events and location, over a set study period | A dataset of consented device events |
| 3. To design the system | Architecture, use case, entity-relationship, sequence and activity diagrams; design of the routine-learning, planning and automation steps | Design documents and diagrams |
| 4. To implement the system | A Windows desktop app, a Kotlin Android app, a React web dashboard and a Supabase cloud database, built in short cycles | A working cross-device system |
| 5. To evaluate the system | Detected routines compared with routines participants confirm; daily plans compared with what actually happened; counts of automations accepted, cancelled and wrongly triggered; a before-and-after comparison of missed commitments and off-task time; the ADEXI questionnaire at the start and end; System Usability Scale (all 10 items); acceptance and satisfaction questionnaire | Accuracy, automation, effect, usability and satisfaction results |

Cite: Hoda et al. (2018) for short development cycles. Name instruments here if you like
(J. R. Lewis, 2018; Davis, 1989; Dwivedi et al., 2019) but explain them in Chapter 2.

### 1.5 Significance of the Study (confirm the section is wanted)

Each point is a benefit the project actually delivers:
- Students get the planning, timekeeping and remembering done for them on the days executive
  function slips, whatever the cause.
- Help does not depend on a diagnosis, a clinic or the student's own steady effort.
- Routine tasks happen at the moment they are due, when conditions are met, not at a fixed time.
- The student stays in control: told before interruptions, with a per-task choice of how much the
  system acts alone.
- Help is private and never labels anyone, which matters where mental health carries stigma.
- A worked example of consent-based collection designed in line with the NDPA 2023.
- African evidence on student routines and executive function, where most research comes from
  elsewhere (Kassaw et al., 2025; Busso et al., 2025).

**Lesson from the 2024 report:** it listed features it never built. List only what Chapter 4
will show working.

### 1.6 Scope of the Study (four parts, from the rules)

**Participants:** university students using a Windows PC and an Android phone. No screening or
diagnosis is needed. The requirements survey records everyday focus and time difficulties, so
results can be compared between students with more and fewer difficulties.

**Focus:** the executive jobs of the day (planning, keeping track of time, remembering to act,
starting and finishing tasks). The system takes these over; it does not treat whatever weakened
them.

**Functional requirements:**
- Consented, visible logging on a Windows PC and an Android phone:
  - activity: apps, windows, recent apps, times;
  - passive events: start-up, shut-down, charging, screen, notifications, networks, movement;
  - phone location, turned into labelled places.
- Routines learned per weekday, time and place, kept current as habits change.
- Routines extracted from documents the user provides (e.g. a timetable), then reviewed.
- Calendars and similar existing systems read first; they override learned routines.
- A detailed daily plan (activities, sub-activities, tasks with times) that replans when the
  user runs late or skips something.
- Task automation on any connected device:
  - per-task levels: suggest, ask first, always automate;
  - fired only when conditions are met; dependent tasks wait for what they depend on;
  - announced by voice and notification before interrupting, unless set to always.
- **Core actions (official features):**
  - scheduled SMS and email;
  - calls the app dials;
  - Google Calendar meetings;
  - modes (Do Not Disturb, ringer, brightness, hiding notifications; on Windows also Wi-Fi,
    Bluetooth, volume);
  - opening apps and files;
  - location triggers;
  - alarms labelled in detail from the plan.
- **Extended actions (screen automation, more fragile):** WhatsApp and Telegram scheduling, and
  steps inside other apps.
- Morning brief and end-of-day report; web dashboard; export and delete all data.
- Design informed by the executive-function evidence:
  - almost no setup;
  - short, specific spoken warnings before transitions;
  - few notifications, with actions in place of nagging;
  - a notice when a session runs far past its plan;
  - no labels or mental-health wording on screen.

**Non-functional requirements:**
- Privacy: consent per category; passwords, PINs, card details, typing and clipboard never
  recorded; notification text only if the user opts in.
- Usability.
- Reliability: acts offline from cached rules and plans; syncs later.
- Acceptable speed and battery use.

**Left out:**
- iPhone (iOS), macOS and Linux.
- Location from IP addresses (too coarse to tell buildings apart).
- Recording typing or the clipboard.
- Payments and passwords.
- AI-written messages sent without the user writing or approving the content.
- Health outcomes and grades.
- Diagnosing, screening for or treating any health condition, and anything to do with medication.

**Feasibility:**
- Free or free-tier tools; apps installed directly, so no store approval.
- Core actions use official Android and Windows features, so every objective is met even if
  the extended layer breaks.
- Learning happens online; acting happens on each device, offline if needed.
- A few weeks of data gives daily and weekly routines. Say so: each weekday gets only one
  example per week.
- Built and checked in short cycles (Hoda et al., 2018).
- Participants are ordinary students, so recruitment is open. Twenty to thirty is a workable
  target; state the number honestly. Ethics approval is still needed for a study with people.

### 1.7 Organisation of the Report (confirm the section is wanted)

One short paragraph per chapter: what Chapters 2–5 contain, plus the references.

#### References for Chapter 1 (54 sources)

- Aeon, B., Faber, A., & Panaccio, A. (2021). Does time management work? A meta-analysis. *PLOS ONE, 16*(1), e0245066. https://doi.org/10.1371/journal.pone.0245066
- Alhasani, M., & Orji, R. (2025). Promoting stress management among students in higher education: Evaluating the effectiveness of a persuasive time management mobile app. *International Journal of Human–Computer Interaction, 41*(1), 219–241. https://doi.org/10.1080/10447318.2023.2297330
- Amershi, S., Weld, D., Vorvoreanu, M., Fourney, A., Nushi, B., Collisson, P., Suh, J., Iqbal, S., Bennett, P. N., Inkpen, K., Teevan, J., Kikin-Gil, R., & Horvitz, E. (2019). Guidelines for human-AI interaction. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (pp. 1–13). https://doi.org/10.1145/3290605.3300233
- Amez, S., & Baert, S. (2020). Smartphone use and academic performance: A literature review. *International Journal of Educational Research, 103*, 101618. https://doi.org/10.1016/j.ijer.2020.101618
- Anastopoulos, A. D., Langberg, J. M., Eddy, L. D., Silvia, P. J., & Labban, J. D. (2021). A randomized controlled trial examining CBT for college students with ADHD. *Journal of Consulting and Clinical Psychology, 89*(1), 21–33. https://doi.org/10.1037/ccp0000553
- Auerbach, R. P., Mortier, P., Bruffaerts, R., Alonso, J., Benjet, C., Cuijpers, P., Demyttenaere, K., Ebert, D. D., Green, J. G., Hasking, P., Murray, E., Nock, M. K., Pinder-Amaker, S., Sampson, N. A., Stein, D. J., Vilagut, G., Zaslavsky, A. M., Kessler, R. C., & WHO WMH-ICS Collaborators. (2018). WHO World Mental Health Surveys International College Student Project: Prevalence and distribution of mental disorders. *Journal of Abnormal Psychology, 127*(7), 623–638. https://doi.org/10.1037/abn0000362
- Banovic, N., Buzali, T., Chevalier, F., Mankoff, J., & Dey, A. K. (2016). Modeling and understanding human routine behavior. In *Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems* (pp. 248–260). https://doi.org/10.1145/2858036.2858557
- Brackenbury, W., Deora, A., Ritchey, J., Vallee, J., He, W., Wang, G., Littman, M. L., & Ur, B. (2019). How users interpret bugs in trigger-action programming. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (pp. 1–12). https://doi.org/10.1145/3290605.3300782
- Brudy, F., Holz, C., Rädle, R., Wu, C.-J., Houben, S., Klokmose, C. N., & Marquardt, N. (2019). Cross-device taxonomy: Survey, opportunities and challenges of interactions spanning across multiple devices. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (pp. 1–28). https://doi.org/10.1145/3290605.3300792
- Busso, M., Bontempelli, A., Malcotti, L. J., Meegahapola, L., Kun, P., Diwakar, S., Nutakki, C., Britez, M. D. R., Xu, H., Song, D., Correa, S. R., Mendoza-Lara, A. R., Gaskell, G., Stares, S., Bidoglia, M., Ganbold, A., Chagnaa, A., Cernuzzi, L., Hume, A., ... Giunchiglia, F. (2025). DiversityOne: A multi-country smartphone sensor dataset for everyday life behavior modeling. *Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 9*(1), 1–49. https://doi.org/10.1145/3712289
- Canela, C., Buadze, A., Dube, A., Eich, D., & Liebrenz, M. (2017). Skills and compensation strategies in adult ADHD – A qualitative study. *PLOS ONE, 12*(9), e0184964. https://doi.org/10.1371/journal.pone.0184964
- Cao, H., & Lin, M. (2017). Mining smartphone data for app usage prediction and recommendations: A survey. *Pervasive and Mobile Computing, 37*, 1–22. https://doi.org/10.1016/j.pmcj.2017.01.007
- Ceban, F., Ling, S., Lui, L. M. W., Lee, Y., Gill, H., Teopiz, K. M., Rodrigues, N. B., Subramaniapillai, M., Di Vincenzo, J. D., Cao, B., Lin, K., Mansur, R. B., Ho, R. C., Rosenblat, J. D., Miskowiak, K. W., Vinberg, M., Maletic, V., & McIntyre, R. S. (2022). Fatigue and cognitive impairment in post-COVID-19 syndrome: A systematic review and meta-analysis. *Brain, Behavior, and Immunity, 101*, 93–135. https://doi.org/10.1016/j.bbi.2021.12.020
- Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. *MIS Quarterly, 13*(3), 319–340. https://doi.org/10.2307/249008 *(Older than 10 years: foundational, ask first.)*
- del-Valle, M. V., Canet-Juric, L., Zamora, E. V., Andrés, M. L., & Urquijo, S. (2024). Executive functions and their relation to academic performance in university students. *Psicología Educativa, 30*(1), 47–55. https://doi.org/10.5093/psed2024a2
- Dijkhuis, R., de Sonneville, L., Ziermans, T., Staal, W., & Swaab, H. (2020). Autism symptoms, executive functioning and academic progress in higher education students. *Journal of Autism and Developmental Disorders, 50*(4), 1353–1363. https://doi.org/10.1007/s10803-019-04267-8
- Dwivedi, Y. K., Rana, N. P., Jeyaraj, A., Clement, M., & Williams, M. D. (2019). Re-examining the unified theory of acceptance and use of technology (UTAUT): Towards a revised theoretical model. *Information Systems Frontiers, 21*(3), 719–734. https://doi.org/10.1007/s10796-017-9774-y
- Gilbert, S. J., Bird, A., Carpenter, J. M., Fleming, S. M., Sachdeva, C., & Tsai, P.-C. (2020). Optimal use of reminders: Metacognition, effort, and cognitive offloading. *Journal of Experimental Psychology: General, 149*(3), 501–517. https://doi.org/10.1037/xge0000652
- Grinblat, N., & Rosenblum, S. (2025). The relationship between organization in time, executive functions, and quality of life in adult ADHD. *Brain Sciences, 15*(12), 1262. https://doi.org/10.3390/brainsci15121262
- Haas, M., Zuber, S., Kliegel, M., & Ballhausen, N. (2020). Prospective memory errors in everyday life: Does instruction matter? *Memory, 28*(2), 196–203. https://doi.org/10.1080/09658211.2019.1707227
- Harari, G. M., Lane, N. D., Wang, R., Crosier, B. S., Campbell, A. T., & Gosling, S. D. (2016). Using smartphones to collect behavioral data in psychological science: Opportunities, practical considerations, and challenges. *Perspectives on Psychological Science, 11*(6), 838–854. https://doi.org/10.1177/1745691616650285
- Henning, C., Summerfeldt, L. J., & Parker, J. D. A. (2022). ADHD and academic success in university students: The important role of impaired attention. *Journal of Attention Disorders, 26*(6), 893–901. https://doi.org/10.1177/10870547211036758
- Hoda, R., Salleh, N., & Grundy, J. (2018). The rise and evolution of agile software development. *IEEE Software, 35*(5), 58–63. https://doi.org/10.1109/MS.2018.290111318
- Holst, Y., & Thorell, L. B. (2018). Adult Executive Functioning Inventory (ADEXI): Validity, reliability, and relations to ADHD. *International Journal of Methods in Psychiatric Research, 27*(1), e1567. https://doi.org/10.1002/mpr.1567
- Hoy, M. B. (2018). Alexa, Siri, Cortana, and more: An introduction to voice assistants. *Medical Reference Services Quarterly, 37*(1), 81–88. https://doi.org/10.1080/02763869.2018.1404391
- Kasneci, E., Sessler, K., Küchemann, S., Bannert, M., Dementieva, D., Fischer, F., Gasser, U., Groh, G., Günnemann, S., Hüllermeier, E., Krusche, S., Kutyniok, G., Michaeli, T., Nerdel, C., Pfeffer, J., Poquet, O., Sailer, M., Schmidt, A., Seidel, T., ... Kasneci, G. (2023). ChatGPT for good? On opportunities and challenges of large language models for education. *Learning and Individual Differences, 103*, 102274. https://doi.org/10.1016/j.lindif.2023.102274
- Kassaw, C., Meshcheriakova, A., Yenealem Mekuriaw, B., & Demareva, V. (2025). Prevalence and associated factors of ADHD symptoms among higher education students in Southern Ethiopia. *Frontiers in Psychiatry, 16*, 1566847. https://doi.org/10.3389/fpsyt.2025.1566847
- Knouse, L. E., Hu, X., Sachs, G., & Isaacs, S. (2022). Usability and feasibility of a cognitive-behavioral mobile app for ADHD in adults. *PLOS Digital Health, 1*(8), e0000083. https://doi.org/10.1371/journal.pdig.0000083
- Kollnig, K., Binns, R., Van Kleek, M., Lyngs, U., Zhao, J., Tinsman, C., & Shadbolt, N. (2021). Before and after GDPR: Tracking in mobile apps. *Internet Policy Review, 10*(4). https://doi.org/10.14763/2021.4.1611
- Lewis, J. R. (2018). The System Usability Scale: Past, present, and future. *International Journal of Human–Computer Interaction, 34*(7), 577–590. https://doi.org/10.1080/10447318.2018.1455307
- Meurisch, C., Mihale-Wilson, C. A., Hawlitschek, A., Giger, F., Müller, F., Hinz, O., & Mühlhäuser, M. (2020). Exploring user expectations of proactive AI systems. *Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 4*(4), 1–22. https://doi.org/10.1145/3432193
- Mohr, D. C., Zhang, M., & Schueller, S. M. (2017). Personal sensing: Understanding mental health using ubiquitous sensors and machine learning. *Annual Review of Clinical Psychology, 13*, 23–47. https://doi.org/10.1146/annurev-clinpsy-032816-044949
- Moran, T. P. (2016). Anxiety and working memory capacity: A meta-analysis and narrative review. *Psychological Bulletin, 142*(8), 831–864. https://doi.org/10.1037/bul0000051
- Musa, D. Y., & Iliyasu, F. (2026). Internet usage patterns and their association with academic performance among undergraduates in three Nigerian universities. *FUDMA Journal of Sciences, 10*(21), 351–355. https://doi.org/10.33003/fjs-2026-1021-6488
- Nobbe, L., Breitwieser, J., Biedermann, D., & Brod, G. (2024). Smartphone-based study reminders can be a double-edged sword. *npj Science of Learning, 9*(1), 40. https://doi.org/10.1038/s41539-024-00253-7
- Nordby, E. S., Gjestad, R., Kenter, R. M. F., Guribye, F., Mukhiya, S. K., Lundervold, A. J., & Nordgreen, T. (2022). The effect of SMS reminders on adherence in a self-guided internet-delivered intervention for adults with ADHD. *Frontiers in Digital Health, 4*, 821031. https://doi.org/10.3389/fdgth.2022.821031
- Okano, K., Kaczmarzyk, J. R., Dave, N., Gabrieli, J. D. E., & Grossman, J. C. (2019). Sleep quality, duration, and consistency are associated with better academic performance in college students. *npj Science of Learning, 4*, 16. https://doi.org/10.1038/s41539-019-0055-z
- Pederson, A. B., Konadu Fokuo, J., Thornicroft, G., Bamgbose, O., Ogunnubi, O. P., Ogunsola, K., & Oshodi, Y. O. (2023). Perspectives of university health care students on mental health stigma in Nigeria: Qualitative analysis. *Transcultural Psychiatry, 60*(2), 272–285. https://doi.org/10.1177/13634615211055007
- Primault, V., Boutet, A., Ben Mokhtar, S., & Brunie, L. (2019). The long road to computational location privacy: A survey. *IEEE Communications Surveys & Tutorials, 21*(3), 2772–2793. https://doi.org/10.1109/COMST.2018.2873950
- Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. *Trends in Cognitive Sciences, 20*(9), 676–688. https://doi.org/10.1016/j.tics.2016.07.002
- Rooksby, J., Asadzadeh, P., Rost, M., Morrison, A., & Chalmers, M. (2016). Personal tracking of screen time on digital devices. In *Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems* (pp. 284–296). https://doi.org/10.1145/2858036.2858055
- Sarker, I. H., Colman, A., & Han, J. (2019b). RecencyMiner: Mining recency-based personalized behavior from contextual smartphone data. *Journal of Big Data, 6*, 49. https://doi.org/10.1186/s40537-019-0211-6
- Sarker, I. H., Colman, A., Kabir, M. A., & Han, J. (2018). Individualized time-series segmentation for mining mobile phone user behavior. *The Computer Journal, 61*(3), 349–368. https://doi.org/10.1093/comjnl/bxx082
- Sedgwick-Müller, J. A., Müller-Sedgwick, U., Adamou, M., Catani, M., Champ, R., Gudjónsson, G., Hank, D., Pitts, M., Young, S., & Asherson, P. (2022). University students with attention deficit hyperactivity disorder (ADHD): A consensus statement from the UK Adult ADHD Network (UKAAN). *BMC Psychiatry, 22*, 292. https://doi.org/10.1186/s12888-022-03898-z
- Semkovska, M., Quinlivan, L., O'Grady, T., Johnson, R., Collins, A., O'Connor, J., Knittle, H., Ahern, E., & Gload, T. (2019). Cognitive function following a major depressive episode: A systematic review and meta-analysis. *The Lancet Psychiatry, 6*(10), 851–861. https://doi.org/10.1016/S2215-0366(19)30291-3
- Seun-Fadipe, C. T., & Mosaku, K. S. (2017). Sleep quality and psychological distress among undergraduate students of a Nigerian university. *Sleep Health, 3*(3), 190–194. https://doi.org/10.1016/j.sleh.2017.02.004
- Shields, G. S., Sazma, M. A., & Yonelinas, A. P. (2016). The effects of acute stress on core executive functions: A meta-analysis and comparison with cortisol. *Neuroscience & Biobehavioral Reviews, 68*, 651–668. https://doi.org/10.1016/j.neubiorev.2016.06.038
- Ur, B., Pak Yong Ho, M., Brawner, S., Lee, J., Mennicken, S., Picard, N., Schulze, D., & Littman, M. L. (2016). Trigger-action programming in the wild: An analysis of 200,000 IFTTT recipes. In *Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems* (pp. 3227–3231). https://doi.org/10.1145/2858036.2858556
- Ward, A. F., Duke, K., Gneezy, A., & Bos, M. W. (2017). Brain drain: The mere presence of one's own smartphone reduces available cognitive capacity. *Journal of the Association for Consumer Research, 2*(2), 140–154. https://doi.org/10.1086/691462
- Wen, H., Li, Y., Liu, G., Zhao, S., Yu, T., Li, T. J.-J., Jiang, S., Liu, Y., Zhang, Y., & Liu, Y. (2024). AutoDroid: LLM-powered task automation in Android. In *Proceedings of the 30th Annual International Conference on Mobile Computing and Networking* (pp. 543–557). https://doi.org/10.1145/3636534.3649379
- Weyandt, L. L., Oster, D. R., Gudmundsdottir, B. G., DuPaul, G. J., & Anastopoulos, A. D. (2017). Neuropsychological functioning in college students with and without ADHD. *Neuropsychology, 31*(2), 160–172. https://doi.org/10.1037/neu0000326
- Zargham, N., Reicherts, L., Bonfert, M., Voelkel, S. T., Schöning, J., Malaka, R., & Rogers, Y. (2022). Understanding circumstances for desirable proactive behaviour of voice assistants: The proactivity dilemma. In *Proceedings of the 4th Conference on Conversational User Interfaces* (pp. 1–14). https://doi.org/10.1145/3543829.3543834
- Zhang, C., Yang, Z., Liu, J., Li, Y., Han, Y., Chen, X., Huang, Z., Fu, B., & Yu, G. (2025). AppAgent: Multimodal agents as smartphone users. In *Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems* (pp. 1–20). https://doi.org/10.1145/3706598.3713600
- Zhao, S., Ramos, J., Tao, J., Jiang, Z., Li, S., Wu, Z., Pan, G., & Dey, A. K. (2016). Discovering different kinds of smartphone users through their application usage behaviors. In *Proceedings of the 2016 ACM International Joint Conference on Pervasive and Ubiquitous Computing* (pp. 498–509). https://doi.org/10.1145/2971648.2971696

---

## Chapter 2 — Literature Review (opens with a preamble; with Chapters 3–4, at least 45–50 citations)

The rule for this chapter: break the project into its basic parts, study each, and define terms
here. Then review existing systems and say what makes yours different. Every technology,
algorithm and tool gets **what it is, why it is used and why it beat the alternatives**, with a
citation. **Every algorithm gets a simple worked example** (the panel will ask).

### 2.1 Preamble
One paragraph: the topic restated, then what the chapter covers and in what order.

### 2.2 Executive Function in University Students (the users and their problem)
Full evidence and synthesis: `Literature_Review.md`, Part A.
- **2.2.1 What executive function is:**
  - working memory, inhibition, shifting;
  - planning, organising time and prospective memory (remembering to carry out an intention);
  - why it matters for grades;
  - why forgetting intentions is the commonest lapse.

  Define these terms here. Cite: del-Valle et al. (2024); Haas et al. (2020); Weyandt et al.
  (2017); Holst & Thorell (2020); Grinblat & Rosenblum (2025).
- **2.2.2 What weakens it, from mild to severe:**
  - phone presence;
  - sleep;
  - acute stress;
  - anxiety;
  - depression;
  - ADHD (the inattentive and executive side);
  - autism;
  - post-viral illness;
  - how common these are among students.

  Use the summary table in the review. Cite: Ward et al. (2017); Panagiotidi & Overton (2022);
  Müller et al. (2023); Okano et al. (2019); Seun-Fadipe & Mosaku (2017); Shields et al. (2016);
  Moran (2016); Semkovska et al. (2019); Henning et al. (2022); Kassaw et al. (2025); Altgassen et
  al. (2019); Bodalski et al. (2023); Ginapp et al. (2023); Kooij et al. (2019); Faraone et al.
  (2021); Fayyad et al. (2017); Rivas-Vazquez et al. (2023); Dijkhuis et al. (2020); Ceban et al.
  (2022); Auerbach et al. (2018).
- **2.2.3 The help that exists, and its limits:**
  - therapy and skills training;
  - slow support;
  - stigma in Nigeria;
  - self-made strategies.

  Cite: Anastopoulos et al. (2021); Hartung et al. (2022); Sedgwick-Müller et al. (2022); Pederson
  et al. (2023); Canela et al. (2017); Kysow et al. (2017).
- **2.2.4 Cognitive offloading.** Moving mental work onto external aids, and the set-up cost every
  reminder carries. Why existing apps and reminders lose users. Why automated offloading is the
  answer. Cite: Risko & Gilbert (2016); Gilbert et al. (2020); Hernández-Capistrán et al. (2025);
  Knouse et al. (2022); Nordby et al. (2022).
- **2.2.5 Measuring executive function:**
  - the ADEXI questionnaire (14 items) as the before-and-after measure;
  - optionally, the ASRS-5 for an ADHD-symptom subgroup.

  Cite: Holst & Thorell (2018); Üstün et al. (2017).
- **2.2.6 What the system must therefore do:** the design requirements table in
  `Literature_Review.md`, section 9.

### 2.3 Routines and Habits
- Define a routine and a habit and how they differ. A routine is a regular sequence of actions;
  a habit is an action triggered automatically by a context.
- Routines differ by day: Monday is not Friday, and weekdays are not weekends.
- Habits take about two months to form on average, ranging from days to almost a year. This
  justifies why routines need weeks of data to settle.
- Cite: Banovic et al. (2016); Gardner et al. (2020); Gardner et al. (2022); Singh et al. (2024);
  Zhao et al. (2016).

### 2.4 Collecting Activity and Passive Device Data Across PCs and Phones
- **Passive sensing:** recording what a device notices without the user doing anything
  (charging, movement, screen, networks). Why it helps explain behaviour.
- **Phone app use** and public datasets (e.g. LSApp, 292 users).
- **Computer activity tracking:** time trackers, workplace self-monitoring, screen time across
  phone and computer.
- **Cross-device use:** people's days span several devices.
- **How it is recorded:** Android usage statistics service (and why not the accessibility
  service for this); the Windows foreground-window record. Both are documented only officially,
  so ask whether docs may be cited.
- **Datasets:** DiversityOne (no African country); MakOne (Ugandan students).
- Cite: Harari et al. (2016); Mohr et al. (2017); Cao & Lin (2017); Li et al. (2022); Zhao et
  al. (2016); Aliannejadi et al. (2021); Kim et al. (2016); Whittaker et al. (2016); Meyer et
  al. (2017); Rooksby et al. (2016); Brudy et al. (2019); Busso et al. (2025); Kizito et al. (2025).

### 2.5 Location and Places
- **How phones locate themselves:** satellite positioning (GPS), Wi-Fi and mobile masts; accuracy
  indoors versus outdoors.
- **From location readings to places:**
  - a trail of readings (a trajectory) is grouped into the places a person stays;
  - the method is **DBSCAN**, which groups points packed closely together and ignores scattered
    ones.
  - **Worked example:** readings within 50 m of each other, at least 5 of them, form a place.
    The 40 readings taken in the library over two hours become one place; the 6 scattered
    readings on the walk there are ignored. The user labels the place "Library" once.
- **Place improves prediction:** knowing where someone is improves app prediction.
- **Why not IP addresses:** IP location databases are often wrong by tens to hundreds of
  kilometres, and mobile networks share addresses across many users, so IP location cannot tell
  one building from another.
- **Location triggers (geofences):** an action fires on entering or leaving an area.
  Official Android documentation (ask).
- Cite: Zheng (2015, foundational); Schubert et al. (2017); Yu et al. (2018); Komosný et al.
  (2017); Gharaibeh et al. (2017).

### 2.6 Context and Context-Aware Computing
- Define context: time, place, activity, device state.
- Context-aware systems; context in app prediction.
- Cite: Vahdat-Nejad et al. (2019); Sarker et al. (2019a); Xia et al. (2020); Aliannejadi et al. (2021).

### 2.7 Learning Routines from Data (the machine learning in "AI-powered"; Mr Dami's section)
One subsection per method, each with a worked example:
- **2.7.1 Association rules: support and confidence** (Agrawal et al., 1993, foundational).
  - Example: notes app opened on 6 of 8 Monday mornings gives confidence 0.75.
- **2.7.2 Periodic pattern mining, day by day** (X. Zhang et al., 2022).
  - The time slot is weekday × hour × place.
  - Routines are learned at several levels, and the most specific one that holds is used:
    specific weekday, weekdays vs weekends, every day, monthly.
- **2.7.3 Sequential pattern mining: PrefixSpan** (Pei et al., 2004; Gan et al., 2019).
  - Example: "leave lecture hall" grows into "leave lecture hall, then phone off silent within
    5 minutes".
  - This is also how **dependencies** between tasks are found (2.9).
- **2.7.4 Recency weighting** (Sarker et al., 2019b).
  - A 4-week half-life gives weights of ½ at 4 weeks, ¼ at 8 and ⅛ at 12.
- **2.7.5 Per-user time segments** rather than fixed slots (Sarker et al., 2018).
- **2.7.6 Extracting routines from documents.**
  - Information extraction: turning a document into structured records (day, time, course,
    venue).
  - LLMs that read text and images.
  - Why a human review step stays: models misread merged timetable cells.
  - Cite: Xu et al. (2024).
- **2.7.7 Alternatives considered:**
  - deep learning (Xia et al., 2020): needs much data and is hard to explain;
  - classifier models (Sarker et al., 2019a);
  - Banovic's goal-driven model (Banovic et al., 2016).

  Say why each lost.
- Framing: Sarker et al. (2021).

### 2.8 Representing What Is Learned: Personal Knowledge Graphs
- Define a personal knowledge graph.
- Weighted links that fade over time.
- Using graphs to ground LLM answers.
- Cite: Balog & Kenter (2019); Skjæveland et al. (2024); Chakraborty & Sanyal (2023); Pan et al. (2024).

### 2.9 Daily Planning: Dependencies, Conditions and Replanning
- **Hierarchical plans:** a day planned in broad blocks first, then hours, then short steps, as
  in the generative agents study (Park et al., 2023). Here: activities → sub-activities →
  tasks with times.
- **Event–condition–action rules:** "when this event happens, if these conditions hold, do this".
  - Time is only the expected window. The condition (arrived at the library) is the trigger.
  - Cite: Paton & Díaz (1999, foundational); Ur et al. (2016).
- **Dependent tasks and the dependency graph:**
  - Tasks are nodes; an arrow means "must happen first"; no loops are allowed (a directed
    acyclic graph).
  - The plan orders tasks so each comes after what it depends on (**topological sort**).
  - **Worked example:**
    - "arrive at library → Library mode on → open notes app";
    - "leave lecture hall → phone off silent".
    - Sorting puts each task after its precondition. If "arrive at library" is late, the
      tasks after it wait. If it never happens, they expire or move, and the user is told.
  - Cite: Kahn (1962, foundational).
- **Explicit beats learned:** calendar entries, holidays and imported timetables are certain;
  learned routines are probable (they carry a confidence). The plan places certain entries
  first.
- **Replanning:** rebuilding the rest of the day from the current state when something runs late.
- **Labelled alarms:** the alarm time comes from the plan (first commitment minus travel and
  getting-ready time) and the label states what follows.

### 2.10 Task Automation
- **2.10.1 Trigger-action rules:** what 200,000 IFTTT recipes show people automate; how users
  misread their own rules. Cite: Ur et al. (2016); Brackenbury et al. (2019).
- **2.10.2 Automation by demonstration:** learning a phone task by watching it once.
  Cite: Li et al. (2017).
- **2.10.3 Automation from learned routines:** earlier systems that mined routines and offered to
  automate them. Cite: Antila et al. (2012); Rashidi & Cook (2009). Both are foundational, so
  ask first.
- **2.10.4 AI agents that carry out tasks:** LLM agents that complete Android tasks; agents that
  operate phone apps; the agent building blocks (profile, memory, planning, action). This is
  the basis of the extended layer. Cite: Wen et al. (2024); C. Zhang et al. (2025); Wang et al.
  (2024).
- **2.10.5 Levels of automation and human control:**
  - Automation can range from suggesting to acting alone; the system lets the user choose a level
    per task (suggest, ask first, always).
  - High automation can coexist with high human control.
  - Guidelines: make clear what the system will do; support easy cancel and undo.
  - Risks of language-model actions justify "never pay, never handle passwords" and "the user
    writes message content".
  - Cite: Parasuraman et al. (2000, foundational); Shneiderman (2020); Amershi et al. (2019);
    Weidinger et al. (2022).

### 2.11 Suggestions, Notifications and Their Timing
- Recommender systems and how they are evaluated.
- Notification receptivity and opportune moments. This is why announcements matter before
  interrupting.
- How much initiative people want; when proactive behaviour annoys.
- Adjusting an imperfect AI; why fixed reminders are mixed.
- Cite: Zangerle & Bauer (2023); Mehrotra et al. (2016); Pielot et al. (2017); Meurisch et al.
  (2020); Zargham et al. (2022); Kocielnik et al. (2019); Nobbe et al. (2024).

### 2.12 Intelligent Assistants and Large Language Models
- Voice assistants; what an LLM is; LLMs in education; proactive dialogue.
- Retrieval-augmented generation (RAG); assistant memory; generative agents; LLM risks.
- Point to make: the plan's times come from data, never from the model; the model only words
  the plan.
- Cite: Hoy (2018); Brown et al. (2020); Kasneci et al. (2023); Deng et al. (2023); P. Lewis et
  al. (2020); Fan et al. (2024); Z. Zhang et al. (2025); Park et al. (2023); Weidinger et al. (2022).

### 2.13 Storing, Syncing and Acting Offline Across Devices
- Cross-device interaction.
- **Local-first software:** each device works from its own copy and syncs later.
- **Learn online, act offline:** mining, extraction and plan wording run online; triggers,
  modes, alarms, voice, SMS and calls run on the device from cached rules and tomorrow's plan.
- Real-time messages carry cross-device triggers (Supabase Realtime; docs, ask).
- Cite: Brudy et al. (2019); Kleppmann et al. (2019).

### 2.14 Privacy, Consent and Data Protection
- Tracking before and after GDPR; privacy concerns blocking collection; privacy by design.
- **Location privacy:** a few location points can single out most people. Protections include
  storing places rather than trails, coarsening and letting users pause.
- NDPA 2023 and Nigerian commentary.
- Other people's data inside notifications: metadata by default.
- Row-level security (Supabase/PostgreSQL docs, ask).
- Cite: Kollnig et al. (2021); Roberts et al. (2022); Andrade et al. (2022); de Montjoye et al.
  (2013, foundational); Primault et al. (2019); Jiang et al. (2021); Nigeria Data Protection Act
  (2023); Mahmoud et al. (2025).

### 2.15 User Acceptance and Evaluation
- TAM: perceived usefulness and ease of use.
- UTAUT: performance expectancy, effort expectancy, social influence, facilitating conditions.
- Student adoption of ChatGPT; mobile learning adoption in Nigeria.
- SUS: 10 items, scored 0–100, with 68 as the average.
- Cite: Davis (1989); Dwivedi et al. (2019); Zogheib & Zogheib (2024); Makinde & Akinbowale (in
  press); J. R. Lewis (2018).

### 2.16 Technologies Used and Why They Were Chosen
A table (choice | used for | alternatives | why it won | citation), then a paragraph per row.

| Choice | Alternatives | Cite |
| --- | --- | --- |
| Windows app in C# on .NET (or Electron, your call) | Electron, Tauri, Python | Official docs (ask) |
| Kotlin + Jetpack Compose | Java, Flutter, React Native | Góis Mateus & Martinez (2019) |
| React web dashboard | Angular, Vue | Bielak et al. (2022) |
| Supabase (PostgreSQL, Realtime) with row-level security | Firebase, own server | Official docs (ask) |
| Offline queue and cached rules | Online-only | Kleppmann et al. (2019) |
| DBSCAN for places | Fixed grid cells, k-means | Schubert et al. (2017) |
| Periodic mining, PrefixSpan, recency weighting | Deep learning, Markov models | X. Zhang et al. (2022); Gan et al. (2019); Sarker et al. (2019b); Xia et al. (2020) |
| Dependency graph + topological sort for plans | Fixed timetable | Kahn (1962); Park et al. (2023) |
| LLM extraction from documents, with user review | Manual entry; plain text recognition only | Xu et al. (2024) |
| Knowledge graph + LLM with retrieval | Rule-based chatbot | Skjæveland et al. (2024); Fan et al. (2024) |
| Per-task automation levels with announcements | Fully automatic; user-written rules | Parasuraman et al. (2000); Amershi et al. (2019); Brackenbury et al. (2019) |
| Screen automation (Android accessibility, Windows UI Automation) for the extended layer | Official APIs only | C. Zhang et al. (2025); Wen et al. (2024) |
| Agile, short cycles | Waterfall | Hoda et al. (2018) |

### 2.17 Review of Existing Systems
Copy the 2024 report's layout:
- one subsection per system: what it is, who made it, what it does, a screenshot with its
  source, and what it lacks;
- then a **feature comparison table** (rows are features, columns are systems, cells are
  Yes/No), with the proposed system as the last column.

Systems and sources:
- **Routine research systems:**
  - TYDR (Beierle et al., 2018);
  - RecencyMiner (Sarker et al., 2019b);
  - Banovic's routine models (Banovic et al., 2016);
  - routine-change monitoring (Koch et al., 2020).
- **Time and screen trackers:**
  - TimeAware (Kim et al., 2016);
  - meTime (Whittaker et al., 2016);
  - workplace self-monitoring (Meyer et al., 2017);
  - cross-device screen time (Rooksby et al., 2016).
- **Student and wellbeing tools:**
  - SortOut (Alhasani & Orji, 2025);
  - Good Vibrations (Okeke et al., 2018);
  - digital self-control tools (Monge Roffarello & De Russis, 2023).
- **Assistants:**
  - Siri, Alexa, Google Assistant (Hoy, 2018);
  - app-recommending assistants (Aliannejadi et al., 2021).
- **Automation tools:**
  - IFTTT-style rules (Ur et al., 2016);
  - SUGILITE (Li et al., 2017);
  - AutoDroid (Wen et al., 2024);
  - AppAgent (C. Zhang et al., 2025).
- **Regional data:**
  - DiversityOne (Busso et al., 2025);
  - MakOne (Kizito et al., 2025);
  - Musa & Iliyasu (2026).

Suggested comparison rows:
- learns routines from recorded use;
- PC and phone;
- passive and location data;
- day-specific routines;
- reads calendars and documents;
- daily plan;
- automates tasks;
- fires on conditions, not just times;
- dependent tasks;
- user chooses automation level;
- works offline;
- consent per category.

### 2.18 Summary and the Gap
One or two paragraphs. No system combines consent-based PC and phone data (activity, passive and
location), day-specific routines that adapt, a detailed daily plan and condition-triggered
automation across devices under the user's control. Cite the systems that come closest: Banovic
et al. (2016); Beierle et al. (2018); Alhasani & Orji (2025); Sarker et al. (2019b); Wen et al.
(2024); Rooksby et al. (2016).

#### References for Chapter 2 (129 sources)

- Aeon, B., Faber, A., & Panaccio, A. (2021). Does time management work? A meta-analysis. *PLOS ONE, 16*(1), e0245066. https://doi.org/10.1371/journal.pone.0245066
- Agrawal, R., Imieliński, T., & Swami, A. (1993). Mining association rules between sets of items in large databases. *ACM SIGMOD Record, 22*(2), 207–216. https://doi.org/10.1145/170036.170072 *(Older than 10 years: foundational, ask first.)*
- Alhasani, M., & Orji, R. (2025). Promoting stress management among students in higher education: Evaluating the effectiveness of a persuasive time management mobile app. *International Journal of Human–Computer Interaction, 41*(1), 219–241. https://doi.org/10.1080/10447318.2023.2297330
- Aliannejadi, M., Zamani, H., Crestani, F., & Croft, W. B. (2021). Context-aware target apps selection and recommendation for enhancing personal mobile assistants. *ACM Transactions on Information Systems, 39*(3), 1–30. https://doi.org/10.1145/3447678
- Altgassen, M., Scheres, A., & Edel, M.-A. (2019). Prospective memory (partially) mediates the link between ADHD symptoms and procrastination. *ADHD Attention Deficit and Hyperactivity Disorders, 11*(1), 59–71. https://doi.org/10.1007/s12402-018-0273-x
- Amershi, S., Weld, D., Vorvoreanu, M., Fourney, A., Nushi, B., Collisson, P., Suh, J., Iqbal, S., Bennett, P. N., Inkpen, K., Teevan, J., Kikin-Gil, R., & Horvitz, E. (2019). Guidelines for human-AI interaction. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (pp. 1–13). https://doi.org/10.1145/3290605.3300233
- Amez, S., & Baert, S. (2020). Smartphone use and academic performance: A literature review. *International Journal of Educational Research, 103*, 101618. https://doi.org/10.1016/j.ijer.2020.101618
- Anastopoulos, A. D., Langberg, J. M., Eddy, L. D., Silvia, P. J., & Labban, J. D. (2021). A randomized controlled trial examining CBT for college students with ADHD. *Journal of Consulting and Clinical Psychology, 89*(1), 21–33. https://doi.org/10.1037/ccp0000553
- Andrade, V. C., Gomes, R. D., Reinehr, S., Freitas, C. O. d. A., & Malucelli, A. (2022). Privacy by design and software engineering: A systematic literature review. In *Proceedings of the XXI Brazilian Symposium on Software Quality* (pp. 1–10). https://doi.org/10.1145/3571473.3571480
- Antila, V., Polet, J., Lämsä, A., & Liikka, J. (2012). RoutineMaker: Towards end-user automation of daily routines using smartphones. In *2012 IEEE International Conference on Pervasive Computing and Communications Workshops* (pp. 399–402). https://doi.org/10.1109/PERCOMW.2012.6197519 *(Older than 10 years: foundational, ask first.)*
- Auerbach, R. P., Mortier, P., Bruffaerts, R., Alonso, J., Benjet, C., Cuijpers, P., Demyttenaere, K., Ebert, D. D., Green, J. G., Hasking, P., Murray, E., Nock, M. K., Pinder-Amaker, S., Sampson, N. A., Stein, D. J., Vilagut, G., Zaslavsky, A. M., Kessler, R. C., & WHO WMH-ICS Collaborators. (2018). WHO World Mental Health Surveys International College Student Project: Prevalence and distribution of mental disorders. *Journal of Abnormal Psychology, 127*(7), 623–638. https://doi.org/10.1037/abn0000362
- Balog, K., & Kenter, T. (2019). Personal knowledge graphs: A research agenda. In *Proceedings of the 2019 ACM SIGIR International Conference on Theory of Information Retrieval* (pp. 217–220). https://doi.org/10.1145/3341981.3344241
- Banovic, N., Buzali, T., Chevalier, F., Mankoff, J., & Dey, A. K. (2016). Modeling and understanding human routine behavior. In *Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems* (pp. 248–260). https://doi.org/10.1145/2858036.2858557
- Beierle, F., Tran, V. T., Allemand, M., Neff, P., Schlee, W., Probst, T., Pryss, R., & Zimmermann, J. (2018). TYDR – Track your daily routine. Android app for tracking smartphone sensor and usage data. In *Proceedings of the 5th International Conference on Mobile Software Engineering and Systems* (pp. 72–75). https://doi.org/10.1145/3197231.3197235
- Bielak, K., Borek, B., & Plechawska-Wójcik, M. (2022). Web application performance analysis using Angular, React and Vue.js frameworks. *Journal of Computer Sciences Institute, 23*, 77–83. https://doi.org/10.35784/jcsi.2827
- Bodalski, E. A., Flory, K., Canu, W. H., Willcutt, E. G., & Hartung, C. M. (2023). ADHD symptoms and procrastination in college students: The roles of emotion dysregulation and self-esteem. *Journal of Psychopathology and Behavioral Assessment, 45*(1), 48–57. https://doi.org/10.1007/s10862-022-09996-2
- Brackenbury, W., Deora, A., Ritchey, J., Vallee, J., He, W., Wang, G., Littman, M. L., & Ur, B. (2019). How users interpret bugs in trigger-action programming. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (pp. 1–12). https://doi.org/10.1145/3290605.3300782
- Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J. D., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal, S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D., Wu, J., Winter, C., ... Amodei, D. (2020). Language models are few-shot learners. In *Advances in Neural Information Processing Systems 33* (pp. 1877–1901). https://proceedings.neurips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html
- Brudy, F., Holz, C., Rädle, R., Wu, C.-J., Houben, S., Klokmose, C. N., & Marquardt, N. (2019). Cross-device taxonomy: Survey, opportunities and challenges of interactions spanning across multiple devices. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (pp. 1–28). https://doi.org/10.1145/3290605.3300792
- Busso, M., Bontempelli, A., Malcotti, L. J., Meegahapola, L., Kun, P., Diwakar, S., Nutakki, C., Britez, M. D. R., Xu, H., Song, D., Correa, S. R., Mendoza-Lara, A. R., Gaskell, G., Stares, S., Bidoglia, M., Ganbold, A., Chagnaa, A., Cernuzzi, L., Hume, A., ... Giunchiglia, F. (2025). DiversityOne: A multi-country smartphone sensor dataset for everyday life behavior modeling. *Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 9*(1), 1–49. https://doi.org/10.1145/3712289
- Canela, C., Buadze, A., Dube, A., Eich, D., & Liebrenz, M. (2017). Skills and compensation strategies in adult ADHD – A qualitative study. *PLOS ONE, 12*(9), e0184964. https://doi.org/10.1371/journal.pone.0184964
- Cao, H., & Lin, M. (2017). Mining smartphone data for app usage prediction and recommendations: A survey. *Pervasive and Mobile Computing, 37*, 1–22. https://doi.org/10.1016/j.pmcj.2017.01.007
- Ceban, F., Ling, S., Lui, L. M. W., Lee, Y., Gill, H., Teopiz, K. M., Rodrigues, N. B., Subramaniapillai, M., Di Vincenzo, J. D., Cao, B., Lin, K., Mansur, R. B., Ho, R. C., Rosenblat, J. D., Miskowiak, K. W., Vinberg, M., Maletic, V., & McIntyre, R. S. (2022). Fatigue and cognitive impairment in post-COVID-19 syndrome: A systematic review and meta-analysis. *Brain, Behavior, and Immunity, 101*, 93–135. https://doi.org/10.1016/j.bbi.2021.12.020
- Chakraborty, P., & Sanyal, D. K. (2023). A comprehensive survey of personal knowledge graphs. *WIREs Data Mining and Knowledge Discovery, 13*(6), e1513. https://doi.org/10.1002/widm.1513
- Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. *MIS Quarterly, 13*(3), 319–340. https://doi.org/10.2307/249008 *(Older than 10 years: foundational, ask first.)*
- del-Valle, M. V., Canet-Juric, L., Zamora, E. V., Andrés, M. L., & Urquijo, S. (2024). Executive functions and their relation to academic performance in university students. *Psicología Educativa, 30*(1), 47–55. https://doi.org/10.5093/psed2024a2
- Deng, Y., Lei, W., Lam, W., & Chua, T.-S. (2023). A survey on proactive dialogue systems: Problems, methods, and prospects. In *Proceedings of the Thirty-Second International Joint Conference on Artificial Intelligence* (pp. 6583–6591). https://doi.org/10.24963/ijcai.2023/738
- Dijkhuis, R., de Sonneville, L., Ziermans, T., Staal, W., & Swaab, H. (2020). Autism symptoms, executive functioning and academic progress in higher education students. *Journal of Autism and Developmental Disorders, 50*(4), 1353–1363. https://doi.org/10.1007/s10803-019-04267-8
- Dwivedi, Y. K., Rana, N. P., Jeyaraj, A., Clement, M., & Williams, M. D. (2019). Re-examining the unified theory of acceptance and use of technology (UTAUT): Towards a revised theoretical model. *Information Systems Frontiers, 21*(3), 719–734. https://doi.org/10.1007/s10796-017-9774-y
- Fan, W., Ding, Y., Ning, L., Wang, S., Li, H., Yin, D., Chua, T.-S., & Li, Q. (2024). A survey on RAG meeting LLMs: Towards retrieval-augmented large language models. In *Proceedings of the 30th ACM SIGKDD Conference on Knowledge Discovery and Data Mining* (pp. 6491–6501). https://doi.org/10.1145/3637528.3671470
- Faraone, S. V., Banaschewski, T., Coghill, D., Zheng, Y., Biederman, J., Bellgrove, M. A., Newcorn, J. H., Gignac, M., Al Saud, N. M., Manor, I., Rohde, L. A., Yang, L., Cortese, S., Almagor, D., Stein, M. A., Albatti, T. H., Aljoudi, H. F., Alqahtani, M. M., Asherson, P., ... Wang, Y. (2021). The World Federation of ADHD International Consensus Statement: 208 evidence-based conclusions about the disorder. *Neuroscience & Biobehavioral Reviews, 128*, 789–818. https://doi.org/10.1016/j.neubiorev.2021.01.022
- Fayyad, J., Sampson, N. A., Hwang, I., Adamowski, T., Aguilar-Gaxiola, S., Al-Hamzawi, A., Andrade, L. H. S. G., Borges, G., de Girolamo, G., Florescu, S., Gureje, O., Haro, J. M., Hu, C., Karam, E. G., Lee, S., Navarro-Mateu, F., O’Neill, S., Pennell, B.-E., Piazza, M., ... Kessler, R. C. (2017). The descriptive epidemiology of DSM-IV adult ADHD in the World Health Organization World Mental Health Surveys. *ADHD Attention Deficit and Hyperactivity Disorders, 9*(1), 47–65. https://doi.org/10.1007/s12402-016-0208-3
- Gan, W., Lin, J. C.-W., Fournier-Viger, P., Chao, H.-C., & Yu, P. S. (2019). A survey of parallel sequential pattern mining. *ACM Transactions on Knowledge Discovery from Data, 13*(3), 1–34. https://doi.org/10.1145/3314107
- Gardner, B., Lally, P., & Rebar, A. L. (2020). Does habit weaken the relationship between intention and behaviour? Revisiting the habit–intention interaction hypothesis. *Social and Personality Psychology Compass, 14*(8), e12553. https://doi.org/10.1111/spc3.12553
- Gardner, B., Rebar, A. L., & Lally, P. (2022). How does habit form? Guidelines for tracking real-world habit formation. *Cogent Psychology, 9*(1), 2041277. https://doi.org/10.1080/23311908.2022.2041277
- Gharaibeh, M., Shah, A., Huffaker, B., Zhang, H., Ensafi, R., & Papadopoulos, C. (2017). A look at router geolocation in public and commercial databases. In *Proceedings of the 2017 Internet Measurement Conference* (pp. 463–469). https://doi.org/10.1145/3131365.3131380
- Gilbert, S. J., Bird, A., Carpenter, J. M., Fleming, S. M., Sachdeva, C., & Tsai, P.-C. (2020). Optimal use of reminders: Metacognition, effort, and cognitive offloading. *Journal of Experimental Psychology: General, 149*(3), 501–517. https://doi.org/10.1037/xge0000652
- Ginapp, C. M., Greenberg, N. R., MacDonald-Gagnon, G., Angarita, G. A., Bold, K. W., & Potenza, M. N. (2023). "Dysregulated not deficit": A qualitative study on symptomatology of ADHD in young adults. *PLOS ONE, 18*(10), e0292721. https://doi.org/10.1371/journal.pone.0292721
- Góis Mateus, B., & Martinez, M. (2019). An empirical study on quality of Android applications written in Kotlin language. *Empirical Software Engineering, 24*(6), 3356–3393. https://doi.org/10.1007/s10664-019-09727-4
- Grinblat, N., & Rosenblum, S. (2025). The relationship between organization in time, executive functions, and quality of life in adult ADHD. *Brain Sciences, 15*(12), 1262. https://doi.org/10.3390/brainsci15121262
- Haas, M., Zuber, S., Kliegel, M., & Ballhausen, N. (2020). Prospective memory errors in everyday life: Does instruction matter? *Memory, 28*(2), 196–203. https://doi.org/10.1080/09658211.2019.1707227
- Harari, G. M., Lane, N. D., Wang, R., Crosier, B. S., Campbell, A. T., & Gosling, S. D. (2016). Using smartphones to collect behavioral data in psychological science: Opportunities, practical considerations, and challenges. *Perspectives on Psychological Science, 11*(6), 838–854. https://doi.org/10.1177/1745691616650285
- Hartung, C. M., Canu, W. H., Serrano, J. W., Vasko, J. M., Stevens, A. E., Abu-Ramadan, T. M., Bodalski, E. A., Neger, E. N., Bridges, R. M., Gleason, L. L., Anzalone, C., & Flory, K. (2022). A new organizational and study skills intervention for college students with ADHD. *Cognitive and Behavioral Practice, 29*(2), 411–424. https://doi.org/10.1016/j.cbpra.2020.09.005
- Henning, C., Summerfeldt, L. J., & Parker, J. D. A. (2022). ADHD and academic success in university students: The important role of impaired attention. *Journal of Attention Disorders, 26*(6), 893–901. https://doi.org/10.1177/10870547211036758
- Hernández-Capistrán, J., Alor-Hernández, G., Sánchez-Morales, L. N., & Machorro-Cano, I. (2025). A decade of apps for ADHD management: A scoping review. *Behaviour & Information Technology, 44*(16), 4037–4064. https://doi.org/10.1080/0144929X.2025.2461225
- Hoda, R., Salleh, N., & Grundy, J. (2018). The rise and evolution of agile software development. *IEEE Software, 35*(5), 58–63. https://doi.org/10.1109/MS.2018.290111318
- Holst, Y., & Thorell, L. B. (2018). Adult Executive Functioning Inventory (ADEXI): Validity, reliability, and relations to ADHD. *International Journal of Methods in Psychiatric Research, 27*(1), e1567. https://doi.org/10.1002/mpr.1567
- Holst, Y., & Thorell, L. B. (2020). Functional impairments among adults with ADHD: A comparison with adults with other psychiatric disorders and links to executive deficits. *Applied Neuropsychology: Adult, 27*(3), 243–255. https://doi.org/10.1080/23279095.2018.1532429
- Hoy, M. B. (2018). Alexa, Siri, Cortana, and more: An introduction to voice assistants. *Medical Reference Services Quarterly, 37*(1), 81–88. https://doi.org/10.1080/02763869.2018.1404391
- Jiang, H., Li, J., Zhao, P., Zeng, F., Xiao, Z., & Iyengar, A. (2021). Location privacy-preserving mechanisms in location-based services: A comprehensive survey. *ACM Computing Surveys, 54*(1), 1–36. https://doi.org/10.1145/3423165
- Kahn, A. B. (1962). Topological sorting of large networks. *Communications of the ACM, 5*(11), 558–562. https://doi.org/10.1145/368996.369025 *(Older than 10 years: foundational, ask first.)*
- Kasneci, E., Sessler, K., Küchemann, S., Bannert, M., Dementieva, D., Fischer, F., Gasser, U., Groh, G., Günnemann, S., Hüllermeier, E., Krusche, S., Kutyniok, G., Michaeli, T., Nerdel, C., Pfeffer, J., Poquet, O., Sailer, M., Schmidt, A., Seidel, T., ... Kasneci, G. (2023). ChatGPT for good? On opportunities and challenges of large language models for education. *Learning and Individual Differences, 103*, 102274. https://doi.org/10.1016/j.lindif.2023.102274
- Kassaw, C., Meshcheriakova, A., Yenealem Mekuriaw, B., & Demareva, V. (2025). Prevalence and associated factors of ADHD symptoms among higher education students in Southern Ethiopia. *Frontiers in Psychiatry, 16*, 1566847. https://doi.org/10.3389/fpsyt.2025.1566847
- Kim, Y.-H., Jeon, J. H., Choe, E. K., Lee, B., Kim, K., & Seo, J. (2016). TimeAware: Leveraging framing effects to enhance personal productivity. In *Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems* (pp. 272–283). https://doi.org/10.1145/2858036.2858428
- Kizito, M., Kayongo, I., Nyende, H., Chongomweru, H., Muyama, L., Asiku, R. A., & Mugisha, A. (2025). MakOne: Behavioural data of university students' smart devices in Uganda. In *Companion of the 2025 ACM International Joint Conference on Pervasive and Ubiquitous Computing* (pp. 815–819). https://doi.org/10.1145/3714394.3756183
- Kleppmann, M., Wiggins, A., van Hardenberg, P., & McGranaghan, M. (2019). Local-first software: You own your data, in spite of the cloud. In *Proceedings of the 2019 ACM SIGPLAN International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software* (pp. 154–178). https://doi.org/10.1145/3359591.3359737
- Knouse, L. E., Hu, X., Sachs, G., & Isaacs, S. (2022). Usability and feasibility of a cognitive-behavioral mobile app for ADHD in adults. *PLOS Digital Health, 1*(8), e0000083. https://doi.org/10.1371/journal.pdig.0000083
- Koch, A. d. M., Kastanos, N., & Aharonson, V. (2020). Monitoring routine changes from daily smartphone usage. In *2020 IEEE International Conference on Human-Machine Systems* (pp. 1–6). https://doi.org/10.1109/ICHMS49158.2020.9209417
- Kocielnik, R., Amershi, S., & Bennett, P. N. (2019). Will you accept an imperfect AI? Exploring designs for adjusting end-user expectations of AI systems. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (pp. 1–14). https://doi.org/10.1145/3290605.3300641
- Kollnig, K., Binns, R., Van Kleek, M., Lyngs, U., Zhao, J., Tinsman, C., & Shadbolt, N. (2021). Before and after GDPR: Tracking in mobile apps. *Internet Policy Review, 10*(4). https://doi.org/10.14763/2021.4.1611
- Komosný, D., Vozňák, M., & Ur Rehman, S. (2017). Location accuracy of commercial IP address geolocation databases. *Information Technology and Control, 46*(3), 333–344. https://doi.org/10.5755/j01.itc.46.3.14451
- Kooij, J. J. S., Bijlenga, D., Salerno, L., Jaeschke, R., Bitter, I., Balázs, J., Thome, J., Dom, G., Kasper, S., Nunes Filipe, C., Stes, S., Mohr, P., Leppämäki, S., Casas, M., Bobes, J., McCarthy, J. M., Richarte, V., Kjems Philipsen, A., Pehlivanidis, A., ... Asherson, P. (2019). Updated European Consensus Statement on diagnosis and treatment of adult ADHD. *European Psychiatry, 56*(1), 14–34. https://doi.org/10.1016/j.eurpsy.2018.11.001
- Kysow, K., Park, J., & Johnston, C. (2017). The use of compensatory strategies in adults with ADHD symptoms. *ADHD Attention Deficit and Hyperactivity Disorders, 9*(2), 73–88. https://doi.org/10.1007/s12402-016-0205-6
- Lewis, J. R. (2018). The System Usability Scale: Past, present, and future. *International Journal of Human–Computer Interaction, 34*(7), 577–590. https://doi.org/10.1080/10447318.2018.1455307
- Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. In *Advances in Neural Information Processing Systems 33* (pp. 9459–9474). https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html
- Li, T. J.-J., Azaria, A., & Myers, B. A. (2017). SUGILITE: Creating multimodal smartphone automation by demonstration. In *Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems* (pp. 6038–6049). https://doi.org/10.1145/3025453.3025483
- Li, T., Xia, T., Wang, H., Tu, Z., Tarkoma, S., Han, Z., & Hui, P. (2022). Smartphone app usage analysis: Datasets, methods, and applications. *IEEE Communications Surveys & Tutorials, 24*(2), 937–966. https://doi.org/10.1109/COMST.2022.3163176
- Mahmoud, R. F., Yusuf, E., & Olohungbebe, M. (2025). Blockchain and data privacy in Nigeria: Reconciling innovation with the Nigeria Data Protection Act 2023. *Agora International Journal of Juridical Sciences, 19*(2), 174–190. https://doi.org/10.15837/aijjs.v19i2.7372
- Makinde, O. B., & Akinbowale, S. S. (in press). Mobile learning adoption in Nigerian universities among computer science students: The role of effort expectancy and social influence. *International Journal of Mobile Learning and Organisation*. https://doi.org/10.1504/IJMLO.2027.10077740
- Mehrotra, A., Pejovic, V., Vermeulen, J., Hendley, R., & Musolesi, M. (2016). My phone and me: Understanding people's receptivity to mobile notifications. In *Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems* (pp. 1021–1032). https://doi.org/10.1145/2858036.2858566
- Meurisch, C., Mihale-Wilson, C. A., Hawlitschek, A., Giger, F., Müller, F., Hinz, O., & Mühlhäuser, M. (2020). Exploring user expectations of proactive AI systems. *Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 4*(4), 1–22. https://doi.org/10.1145/3432193
- Meyer, A. N., Murphy, G. C., Zimmermann, T., & Fritz, T. (2017). Design recommendations for self-monitoring in the workplace: Studies in software development. *Proceedings of the ACM on Human-Computer Interaction, 1*(CSCW), 1–24. https://doi.org/10.1145/3134714
- Mohr, D. C., Zhang, M., & Schueller, S. M. (2017). Personal sensing: Understanding mental health using ubiquitous sensors and machine learning. *Annual Review of Clinical Psychology, 13*, 23–47. https://doi.org/10.1146/annurev-clinpsy-032816-044949
- Monge Roffarello, A., & De Russis, L. (2023). Achieving digital wellbeing through digital self-control tools: A systematic review and meta-analysis. *ACM Transactions on Computer-Human Interaction, 30*(4), 1–66. https://doi.org/10.1145/3571810
- de Montjoye, Y.-A., Hidalgo, C. A., Verleysen, M., & Blondel, V. D. (2013). Unique in the crowd: The privacy bounds of human mobility. *Scientific Reports, 3*, 1376. https://doi.org/10.1038/srep01376 *(Older than 10 years: foundational, ask first.)*
- Moran, T. P. (2016). Anxiety and working memory capacity: A meta-analysis and narrative review. *Psychological Bulletin, 142*(8), 831–864. https://doi.org/10.1037/bul0000051
- Müller, V., Mellor, D., & Piko, B. F. (2023). How to procrastinate productively with ADHD: A study of smartphone use, depression, and other academic variables among university students with ADHD symptoms. *Journal of Attention Disorders, 27*(9), 951–959. https://doi.org/10.1177/10870547231171724
- Musa, D. Y., & Iliyasu, F. (2026). Internet usage patterns and their association with academic performance among undergraduates in three Nigerian universities. *FUDMA Journal of Sciences, 10*(21), 351–355. https://doi.org/10.33003/fjs-2026-1021-6488
- Nigeria Data Protection Act, 2023. (2023). *Federal Republic of Nigeria Official Gazette*. Federal Government of Nigeria.
- Nobbe, L., Breitwieser, J., Biedermann, D., & Brod, G. (2024). Smartphone-based study reminders can be a double-edged sword. *npj Science of Learning, 9*(1), 40. https://doi.org/10.1038/s41539-024-00253-7
- Nordby, E. S., Gjestad, R., Kenter, R. M. F., Guribye, F., Mukhiya, S. K., Lundervold, A. J., & Nordgreen, T. (2022). The effect of SMS reminders on adherence in a self-guided internet-delivered intervention for adults with ADHD. *Frontiers in Digital Health, 4*, 821031. https://doi.org/10.3389/fdgth.2022.821031
- Okano, K., Kaczmarzyk, J. R., Dave, N., Gabrieli, J. D. E., & Grossman, J. C. (2019). Sleep quality, duration, and consistency are associated with better academic performance in college students. *npj Science of Learning, 4*, 16. https://doi.org/10.1038/s41539-019-0055-z
- Okeke, F., Sobolev, M., Dell, N., & Estrin, D. (2018). Good vibrations: Can a digital nudge reduce digital overload? In *Proceedings of the 20th International Conference on Human-Computer Interaction with Mobile Devices and Services* (pp. 1–12). https://doi.org/10.1145/3229434.3229463
- Pan, S., Luo, L., Wang, Y., Chen, C., Wang, J., & Wu, X. (2024). Unifying large language models and knowledge graphs: A roadmap. *IEEE Transactions on Knowledge and Data Engineering, 36*(7), 3580–3599. https://doi.org/10.1109/TKDE.2024.3352100
- Panagiotidi, M., & Overton, P. (2022). Attention deficit hyperactivity symptoms predict problematic mobile phone use. *Current Psychology, 41*(5), 2765–2771. https://doi.org/10.1007/s12144-020-00785-2
- Parasuraman, R., Sheridan, T. B., & Wickens, C. D. (2000). A model for types and levels of human interaction with automation. *IEEE Transactions on Systems, Man, and Cybernetics – Part A: Systems and Humans, 30*(3), 286–297. https://doi.org/10.1109/3468.844354 *(Older than 10 years: foundational, ask first.)*
- Park, J. S., O'Brien, J., Cai, C. J., Morris, M. R., Liang, P., & Bernstein, M. S. (2023). Generative agents: Interactive simulacra of human behavior. In *Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology* (pp. 1–22). https://doi.org/10.1145/3586183.3606763
- Paton, N. W., & Díaz, O. (1999). Active database systems. *ACM Computing Surveys, 31*(1), 63–103. https://doi.org/10.1145/311531.311623 *(Older than 10 years: foundational, ask first.)*
- Pederson, A. B., Konadu Fokuo, J., Thornicroft, G., Bamgbose, O., Ogunnubi, O. P., Ogunsola, K., & Oshodi, Y. O. (2023). Perspectives of university health care students on mental health stigma in Nigeria: Qualitative analysis. *Transcultural Psychiatry, 60*(2), 272–285. https://doi.org/10.1177/13634615211055007
- Pei, J., Han, J., Mortazavi-Asl, B., Wang, J., Pinto, H., Chen, Q., Dayal, U., & Hsu, M.-C. (2004). Mining sequential patterns by pattern-growth: The PrefixSpan approach. *IEEE Transactions on Knowledge and Data Engineering, 16*(11), 1424–1440. https://doi.org/10.1109/TKDE.2004.77 *(Older than 10 years: foundational, ask first.)*
- Pielot, M., Cardoso, B., Katevas, K., Serrà, J., Matic, A., & Oliver, N. (2017). Beyond interruptibility: Predicting opportune moments to engage mobile phone users. *Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 1*(3), 1–25. https://doi.org/10.1145/3130956
- Primault, V., Boutet, A., Ben Mokhtar, S., & Brunie, L. (2019). The long road to computational location privacy: A survey. *IEEE Communications Surveys & Tutorials, 21*(3), 2772–2793. https://doi.org/10.1109/COMST.2018.2873950
- Rashidi, P., & Cook, D. J. (2009). Keeping the resident in the loop: Adapting the smart home to the user. *IEEE Transactions on Systems, Man, and Cybernetics – Part A: Systems and Humans, 39*(5), 949–959. https://doi.org/10.1109/TSMCA.2009.2025137 *(Older than 10 years: foundational, ask first.)*
- Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. *Trends in Cognitive Sciences, 20*(9), 676–688. https://doi.org/10.1016/j.tics.2016.07.002
- Rivas-Vazquez, R. A., Diaz, S. G., Visser, M. M., & Rivas-Vazquez, A. A. (2023). Adult ADHD: Underdiagnosis of a treatable condition. *Journal of Health Service Psychology, 49*(1), 11–19. https://doi.org/10.1007/s42843-023-00077-w
- Roberts, C., Herzing, J. M. E., Sobrino Piazza, J., Abbet, P., & Gatica-Perez, D. (2022). Data privacy concerns as a source of resistance to complete mobile data collection tasks via a smartphone app. *Journal of Survey Statistics and Methodology, 10*(3), 518–548. https://doi.org/10.1093/jssam/smac018
- Rooksby, J., Asadzadeh, P., Rost, M., Morrison, A., & Chalmers, M. (2016). Personal tracking of screen time on digital devices. In *Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems* (pp. 284–296). https://doi.org/10.1145/2858036.2858055
- Sarker, I. H., Colman, A., & Han, J. (2019b). RecencyMiner: Mining recency-based personalized behavior from contextual smartphone data. *Journal of Big Data, 6*, 49. https://doi.org/10.1186/s40537-019-0211-6
- Sarker, I. H., Colman, A., Kabir, M. A., & Han, J. (2018). Individualized time-series segmentation for mining mobile phone user behavior. *The Computer Journal, 61*(3), 349–368. https://doi.org/10.1093/comjnl/bxx082
- Sarker, I. H., Hoque, M. M., Uddin, M. K., & Alsanoosy, T. (2021). Mobile data science and intelligent apps: Concepts, AI-based modeling and research directions. *Mobile Networks and Applications, 26*(1), 285–303. https://doi.org/10.1007/s11036-020-01650-z
- Sarker, I. H., Kayes, A. S. M., & Watters, P. (2019a). Effectiveness analysis of machine learning classification models for predicting personalized context-aware smartphone usage. *Journal of Big Data, 6*, 57. https://doi.org/10.1186/s40537-019-0219-y
- Schubert, E., Sander, J., Ester, M., Kriegel, H. P., & Xu, X. (2017). DBSCAN revisited, revisited: Why and how you should (still) use DBSCAN. *ACM Transactions on Database Systems, 42*(3), 1–21. https://doi.org/10.1145/3068335
- Sedgwick-Müller, J. A., Müller-Sedgwick, U., Adamou, M., Catani, M., Champ, R., Gudjónsson, G., Hank, D., Pitts, M., Young, S., & Asherson, P. (2022). University students with attention deficit hyperactivity disorder (ADHD): A consensus statement from the UK Adult ADHD Network (UKAAN). *BMC Psychiatry, 22*, 292. https://doi.org/10.1186/s12888-022-03898-z
- Semkovska, M., Quinlivan, L., O'Grady, T., Johnson, R., Collins, A., O'Connor, J., Knittle, H., Ahern, E., & Gload, T. (2019). Cognitive function following a major depressive episode: A systematic review and meta-analysis. *The Lancet Psychiatry, 6*(10), 851–861. https://doi.org/10.1016/S2215-0366(19)30291-3
- Seun-Fadipe, C. T., & Mosaku, K. S. (2017). Sleep quality and psychological distress among undergraduate students of a Nigerian university. *Sleep Health, 3*(3), 190–194. https://doi.org/10.1016/j.sleh.2017.02.004
- Shields, G. S., Sazma, M. A., & Yonelinas, A. P. (2016). The effects of acute stress on core executive functions: A meta-analysis and comparison with cortisol. *Neuroscience & Biobehavioral Reviews, 68*, 651–668. https://doi.org/10.1016/j.neubiorev.2016.06.038
- Shneiderman, B. (2020). Human-centered artificial intelligence: Reliable, safe & trustworthy. *International Journal of Human–Computer Interaction, 36*(6), 495–504. https://doi.org/10.1080/10447318.2020.1741118
- Singh, B., Murphy, A., Maher, C., & Smith, A. E. (2024). Time to form a habit: A systematic review and meta-analysis of health behaviour habit formation and its determinants. *Healthcare, 12*(23), 2488. https://doi.org/10.3390/healthcare12232488
- Skjæveland, M. G., Balog, K., Bernard, N., Łajewska, W., & Linjordet, T. (2024). An ecosystem for personal knowledge graphs: A survey and research roadmap. *AI Open, 5*, 55–69. https://doi.org/10.1016/j.aiopen.2024.01.003
- Ur, B., Pak Yong Ho, M., Brawner, S., Lee, J., Mennicken, S., Picard, N., Schulze, D., & Littman, M. L. (2016). Trigger-action programming in the wild: An analysis of 200,000 IFTTT recipes. In *Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems* (pp. 3227–3231). https://doi.org/10.1145/2858036.2858556
- Üstün, B., Adler, L. A., Rudin, C., Faraone, S. V., Spencer, T. J., Berglund, P., Gruber, M. J., & Kessler, R. C. (2017). The World Health Organization Adult Attention-Deficit/Hyperactivity Disorder Self-Report Screening Scale for DSM-5. *JAMA Psychiatry, 74*(5), 520. https://doi.org/10.1001/jamapsychiatry.2017.0298
- Vahdat-Nejad, H., Asani, E., Mahmoodian, Z., & Mohseni, M. H. (2019). Context-aware computing for mobile crowd sensing: A survey. *Future Generation Computer Systems, 99*, 321–332. https://doi.org/10.1016/j.future.2019.04.052
- Wang, L., Ma, C., Feng, X., Zhang, Z., Yang, H., Zhang, J., Chen, Z., Tang, J., Chen, X., Lin, Y., Zhao, W. X., Wei, Z., & Wen, J. (2024). A survey on large language model based autonomous agents. *Frontiers of Computer Science, 18*(6), 186345. https://doi.org/10.1007/s11704-024-40231-1
- Ward, A. F., Duke, K., Gneezy, A., & Bos, M. W. (2017). Brain drain: The mere presence of one's own smartphone reduces available cognitive capacity. *Journal of the Association for Consumer Research, 2*(2), 140–154. https://doi.org/10.1086/691462
- Weidinger, L., Uesato, J., Rauh, M., Griffin, C., Huang, P.-S., Mellor, J., Glaese, A., Cheng, M., Balle, B., Kasirzadeh, A., Biles, C., Brown, S., Kenton, Z., Hawkins, W., Stepleton, T., Birhane, A., Hendricks, L. A., Rimell, L., Isaac, W., ... Gabriel, I. (2022). Taxonomy of risks posed by language models. In *2022 ACM Conference on Fairness, Accountability, and Transparency* (pp. 214–229). https://doi.org/10.1145/3531146.3533088
- Wen, H., Li, Y., Liu, G., Zhao, S., Yu, T., Li, T. J.-J., Jiang, S., Liu, Y., Zhang, Y., & Liu, Y. (2024). AutoDroid: LLM-powered task automation in Android. In *Proceedings of the 30th Annual International Conference on Mobile Computing and Networking* (pp. 543–557). https://doi.org/10.1145/3636534.3649379
- Weyandt, L. L., Oster, D. R., Gudmundsdottir, B. G., DuPaul, G. J., & Anastopoulos, A. D. (2017). Neuropsychological functioning in college students with and without ADHD. *Neuropsychology, 31*(2), 160–172. https://doi.org/10.1037/neu0000326
- Whittaker, S., Kalnikaite, V., Hollis, V., & Guydish, A. (2016). 'Don't waste my time': Use of time information improves focus. In *Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems* (pp. 1729–1738). https://doi.org/10.1145/2858036.2858193
- Xia, T., Li, Y., Feng, J., Jin, D., Zhang, Q., Luo, H., & Liao, Q. (2020). DeepApp: Predicting personalized smartphone app usage via context-aware multi-task learning. *ACM Transactions on Intelligent Systems and Technology, 11*(6), 1–12. https://doi.org/10.1145/3408325
- Xu, D., Chen, W., Peng, W., Zhang, C., Xu, T., Zhao, X., Wu, X., Zheng, Y., Wang, Y., & Chen, E. (2024). Large language models for generative information extraction: A survey. *Frontiers of Computer Science, 18*(6), 186357. https://doi.org/10.1007/s11704-024-40555-y
- Yu, D., Li, Y., Xu, F., Zhang, P., & Kostakos, V. (2018). Smartphone app usage prediction using points of interest. *Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 1*(4), 1–21. https://doi.org/10.1145/3161413
- Zangerle, E., & Bauer, C. (2023). Evaluating recommender systems: Survey and framework. *ACM Computing Surveys, 55*(8), 1–38. https://doi.org/10.1145/3556536
- Zargham, N., Reicherts, L., Bonfert, M., Voelkel, S. T., Schöning, J., Malaka, R., & Rogers, Y. (2022). Understanding circumstances for desirable proactive behaviour of voice assistants: The proactivity dilemma. In *Proceedings of the 4th Conference on Conversational User Interfaces* (pp. 1–14). https://doi.org/10.1145/3543829.3543834
- Zhang, C., Yang, Z., Liu, J., Li, Y., Han, Y., Chen, X., Huang, Z., Fu, B., & Yu, G. (2025). AppAgent: Multimodal agents as smartphone users. In *Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems* (pp. 1–20). https://doi.org/10.1145/3706598.3713600
- Zhang, X., Qi, Y., Chen, G., Gan, W., & Fournier-Viger, P. (2022). Fuzzy-driven periodic frequent pattern mining. *Information Sciences, 618*, 253–269. https://doi.org/10.1016/j.ins.2022.11.009
- Zhang, Z., Dai, Q., Bo, X., Ma, C., Li, R., Chen, X., Zhu, J., Dong, Z., & Wen, J.-R. (2025). A survey on the memory mechanism of large language model-based agents. *ACM Transactions on Information Systems, 43*(6), 1–47. https://doi.org/10.1145/3748302
- Zhao, S., Ramos, J., Tao, J., Jiang, Z., Li, S., Wu, Z., Pan, G., & Dey, A. K. (2016). Discovering different kinds of smartphone users through their application usage behaviors. In *Proceedings of the 2016 ACM International Joint Conference on Pervasive and Ubiquitous Computing* (pp. 498–509). https://doi.org/10.1145/2971648.2971696
- Zheng, Y. (2015). Trajectory data mining: An overview. *ACM Transactions on Intelligent Systems and Technology, 6*(3), 1–41. https://doi.org/10.1145/2743025 *(Older than 10 years: foundational, ask first.)*
- Zogheib, S., & Zogheib, B. (2024). Understanding university students' adoption of ChatGPT: Insights from TAM, SDT, and beyond. *Journal of Information Technology Education: Research, 23*, Article 25. https://doi.org/10.28945/5377

---

## Chapter 3 — Research Methodology (opens with a preamble)

Layout merges the 2024 report's Chapter 3 with what your rules require.

- **3.1 Preamble.**
- **3.2 Development methodology:** agile, short cycles, and why not waterfall (Hoda et al.,
  2018). Build order, so a late stage can be cut without sinking the project: collection →
  routines → dashboard → plan → core automation → extended automation.
- **3.3 Requirements analysis** (objective 1's result):
  - 3.3.1 Functional requirements;
  - 3.3.2 Non-functional requirements.

  Taken from 1.6, in detail, and from the student requirements survey
  (`requirements/Student_Routine_and_Focus_Survey.md`).
- **3.4 Data collection and the dataset** (objective 2):
  - the requirements survey at the start (focus, time, tools, needs), with the ASRS-5 as an
    optional extra for an ADHD-symptom subgroup (Üstün et al., 2017);
  - consent flow and visible logging;
  - study period and participants;
  - **the event schema**: one table of every signal, giving name, meaning, type, example and
    which device records it;
  - what uploads (sessions and summaries) and what stays on the device;
  - cleaning;
  - limitations: gaps when phone makers kill background apps; missed shut-downs when the
    battery dies.
  - Cite Harari et al. (2016).
- **3.5 System architecture:** a figure plus a paragraph per module:
  - Windows agent;
  - Android app;
  - cloud database and real-time channel;
  - routine learner;
  - place finder;
  - document extractor;
  - planner;
  - trigger engine (on each device);
  - automation actions;
  - guide (LLM + retrieval);
  - web dashboard.

  State what runs online and what runs offline (Kleppmann et al., 2019).
- **3.6 Routine-learning design:**
  - raw events → sessions → places (DBSCAN) → day-specific routines → dependencies;
  - thresholds (minimum support, minimum confidence, half-life, DBSCAN distance and minimum
    points) and how you will tune them on held-out weeks;
  - document extraction with review.
  - Worked example on a small sample of records.
  - Cite Schubert et al. (2017); Agrawal et al. (1993); X. Zhang et al. (2022); Pei et al.
    (2004); Sarker et al. (2018); Sarker et al. (2019b); Xu et al. (2024).
- **3.7 Daily-planning design:**
  - fixed events placed first;
  - routines fill the gaps;
  - dependency graph sorted (topological sort);
  - times taken from data;
  - LLM wording only;
  - replanning rules;
  - alarm calculation and labels.
  - Cite Park et al. (2023); Kahn (1962); Paton & Díaz (1999).
- **3.8 Task-automation design:**
  - levels (suggest, ask first, always);
  - preconditions and expected windows;
  - announcement by voice and notification;
  - logging;
  - core vs extended actions;
  - the list of actions never allowed (payments, passwords, unreviewed AI-written messages);
  - choices informed by the executive-function evidence:
    - almost no setup;
    - short, specific spoken warnings before transitions;
    - few notifications, with actions in place of nagging;
    - a notice when a session runs far past its plan;
    - no labels or mental-health wording on screen.

    Cite Altgassen et al. (2019); Nordby et al. (2022); Ginapp et al. (2023); Pederson et al. (2023).
  - Cite Parasuraman et al. (2000); Shneiderman (2020); Amershi et al. (2019).
- **3.9 Logical design:** use case, sequence (include a cross-device trigger), class, activity
  and entity-relationship diagrams, each introduced in one paragraph.
- **3.10 Evaluation design** (objective 5). **Define every metric before Chapter 4:**
  - **Design:** before and after, within the same participants. One to two weeks with the system
    only observing, then the remaining weeks with it planning and automating.
  - **Effect on the problem:**
    - commitments missed or late (from calendar, plan and place);
    - off-task phone time in planned study blocks;
    - ADEXI score at the start and end (Holst & Thorell, 2018);
    - retention at the end of the study, compared with app studies (Knouse et al., 2022).
  - **Routine accuracy:** precision = confirmed ÷ found; recall = confirmed ÷ (confirmed + missed
    routines the participant adds); F1; averaged over participants; by weekday; against a
    fixed-time-slot baseline (Sarker et al., 2018).
  - **Plan accuracy:** mean start-time error (minutes), duration error, coverage of the real day,
    and change week by week.
  - **Automation:**
    - acceptance and cancellation rates by level;
    - undo rate;
    - false triggers (fired when the condition wasn't really met);
    - trigger delay (condition met → action);
    - cross-device delay (phone event → PC action).
  - **Extraction:** share of timetable entries correct before review.
  - **Offline:** share of actions that fired correctly with no network.
  - **Contribution of data:** accuracy with vs without passive signals, place and calendar data.
  - **Flexibility:** days until a changed routine is reflected.
  - **Usability:** SUS, all 10 items, 0–100 (J. R. Lewis, 2018).
  - **Acceptance and satisfaction:** TAM/UTAUT items (Davis, 1989; Dwivedi et al., 2019).
- **3.11 Ethics and consent:**
  - questions about focus and difficulties are personal and may touch on health, so treat them
    as sensitive data under the NDPA; ethics approval is required;
  - never tell a participant they have any condition; the system does not diagnose or treat;
    everyone is pointed to the counselling unit (Sedgwick-Müller et al., 2022);
  - consent per category and visible logging;
  - what is never recorded;
  - location stored as places;
  - export and delete;
  - NDPA 2023 (Nigeria Data Protection Act, 2023; Andrade et al., 2022; Jiang et al., 2021).

#### References for Chapter 3 (32 sources)

- Agrawal, R., Imieliński, T., & Swami, A. (1993). Mining association rules between sets of items in large databases. *ACM SIGMOD Record, 22*(2), 207–216. https://doi.org/10.1145/170036.170072 *(Older than 10 years: foundational, ask first.)*
- Altgassen, M., Scheres, A., & Edel, M.-A. (2019). Prospective memory (partially) mediates the link between ADHD symptoms and procrastination. *ADHD Attention Deficit and Hyperactivity Disorders, 11*(1), 59–71. https://doi.org/10.1007/s12402-018-0273-x
- Amershi, S., Weld, D., Vorvoreanu, M., Fourney, A., Nushi, B., Collisson, P., Suh, J., Iqbal, S., Bennett, P. N., Inkpen, K., Teevan, J., Kikin-Gil, R., & Horvitz, E. (2019). Guidelines for human-AI interaction. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (pp. 1–13). https://doi.org/10.1145/3290605.3300233
- Andrade, V. C., Gomes, R. D., Reinehr, S., Freitas, C. O. d. A., & Malucelli, A. (2022). Privacy by design and software engineering: A systematic literature review. In *Proceedings of the XXI Brazilian Symposium on Software Quality* (pp. 1–10). https://doi.org/10.1145/3571473.3571480
- Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. *MIS Quarterly, 13*(3), 319–340. https://doi.org/10.2307/249008 *(Older than 10 years: foundational, ask first.)*
- Dwivedi, Y. K., Rana, N. P., Jeyaraj, A., Clement, M., & Williams, M. D. (2019). Re-examining the unified theory of acceptance and use of technology (UTAUT): Towards a revised theoretical model. *Information Systems Frontiers, 21*(3), 719–734. https://doi.org/10.1007/s10796-017-9774-y
- Gilbert, S. J., Bird, A., Carpenter, J. M., Fleming, S. M., Sachdeva, C., & Tsai, P.-C. (2020). Optimal use of reminders: Metacognition, effort, and cognitive offloading. *Journal of Experimental Psychology: General, 149*(3), 501–517. https://doi.org/10.1037/xge0000652
- Ginapp, C. M., Greenberg, N. R., MacDonald-Gagnon, G., Angarita, G. A., Bold, K. W., & Potenza, M. N. (2023). "Dysregulated not deficit": A qualitative study on symptomatology of ADHD in young adults. *PLOS ONE, 18*(10), e0292721. https://doi.org/10.1371/journal.pone.0292721
- Harari, G. M., Lane, N. D., Wang, R., Crosier, B. S., Campbell, A. T., & Gosling, S. D. (2016). Using smartphones to collect behavioral data in psychological science: Opportunities, practical considerations, and challenges. *Perspectives on Psychological Science, 11*(6), 838–854. https://doi.org/10.1177/1745691616650285
- Hoda, R., Salleh, N., & Grundy, J. (2018). The rise and evolution of agile software development. *IEEE Software, 35*(5), 58–63. https://doi.org/10.1109/MS.2018.290111318
- Holst, Y., & Thorell, L. B. (2018). Adult Executive Functioning Inventory (ADEXI): Validity, reliability, and relations to ADHD. *International Journal of Methods in Psychiatric Research, 27*(1), e1567. https://doi.org/10.1002/mpr.1567
- Jiang, H., Li, J., Zhao, P., Zeng, F., Xiao, Z., & Iyengar, A. (2021). Location privacy-preserving mechanisms in location-based services: A comprehensive survey. *ACM Computing Surveys, 54*(1), 1–36. https://doi.org/10.1145/3423165
- Kahn, A. B. (1962). Topological sorting of large networks. *Communications of the ACM, 5*(11), 558–562. https://doi.org/10.1145/368996.369025 *(Older than 10 years: foundational, ask first.)*
- Kleppmann, M., Wiggins, A., van Hardenberg, P., & McGranaghan, M. (2019). Local-first software: You own your data, in spite of the cloud. In *Proceedings of the 2019 ACM SIGPLAN International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software* (pp. 154–178). https://doi.org/10.1145/3359591.3359737
- Knouse, L. E., Hu, X., Sachs, G., & Isaacs, S. (2022). Usability and feasibility of a cognitive-behavioral mobile app for ADHD in adults. *PLOS Digital Health, 1*(8), e0000083. https://doi.org/10.1371/journal.pdig.0000083
- Lewis, J. R. (2018). The System Usability Scale: Past, present, and future. *International Journal of Human–Computer Interaction, 34*(7), 577–590. https://doi.org/10.1080/10447318.2018.1455307
- Nigeria Data Protection Act, 2023. (2023). *Federal Republic of Nigeria Official Gazette*. Federal Government of Nigeria.
- Nordby, E. S., Gjestad, R., Kenter, R. M. F., Guribye, F., Mukhiya, S. K., Lundervold, A. J., & Nordgreen, T. (2022). The effect of SMS reminders on adherence in a self-guided internet-delivered intervention for adults with ADHD. *Frontiers in Digital Health, 4*, 821031. https://doi.org/10.3389/fdgth.2022.821031
- Parasuraman, R., Sheridan, T. B., & Wickens, C. D. (2000). A model for types and levels of human interaction with automation. *IEEE Transactions on Systems, Man, and Cybernetics – Part A: Systems and Humans, 30*(3), 286–297. https://doi.org/10.1109/3468.844354 *(Older than 10 years: foundational, ask first.)*
- Park, J. S., O'Brien, J., Cai, C. J., Morris, M. R., Liang, P., & Bernstein, M. S. (2023). Generative agents: Interactive simulacra of human behavior. In *Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology* (pp. 1–22). https://doi.org/10.1145/3586183.3606763
- Paton, N. W., & Díaz, O. (1999). Active database systems. *ACM Computing Surveys, 31*(1), 63–103. https://doi.org/10.1145/311531.311623 *(Older than 10 years: foundational, ask first.)*
- Pederson, A. B., Konadu Fokuo, J., Thornicroft, G., Bamgbose, O., Ogunnubi, O. P., Ogunsola, K., & Oshodi, Y. O. (2023). Perspectives of university health care students on mental health stigma in Nigeria: Qualitative analysis. *Transcultural Psychiatry, 60*(2), 272–285. https://doi.org/10.1177/13634615211055007
- Pei, J., Han, J., Mortazavi-Asl, B., Wang, J., Pinto, H., Chen, Q., Dayal, U., & Hsu, M.-C. (2004). Mining sequential patterns by pattern-growth: The PrefixSpan approach. *IEEE Transactions on Knowledge and Data Engineering, 16*(11), 1424–1440. https://doi.org/10.1109/TKDE.2004.77 *(Older than 10 years: foundational, ask first.)*
- Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. *Trends in Cognitive Sciences, 20*(9), 676–688. https://doi.org/10.1016/j.tics.2016.07.002
- Sarker, I. H., Colman, A., & Han, J. (2019b). RecencyMiner: Mining recency-based personalized behavior from contextual smartphone data. *Journal of Big Data, 6*, 49. https://doi.org/10.1186/s40537-019-0211-6
- Sarker, I. H., Colman, A., Kabir, M. A., & Han, J. (2018). Individualized time-series segmentation for mining mobile phone user behavior. *The Computer Journal, 61*(3), 349–368. https://doi.org/10.1093/comjnl/bxx082
- Schubert, E., Sander, J., Ester, M., Kriegel, H. P., & Xu, X. (2017). DBSCAN revisited, revisited: Why and how you should (still) use DBSCAN. *ACM Transactions on Database Systems, 42*(3), 1–21. https://doi.org/10.1145/3068335
- Sedgwick-Müller, J. A., Müller-Sedgwick, U., Adamou, M., Catani, M., Champ, R., Gudjónsson, G., Hank, D., Pitts, M., Young, S., & Asherson, P. (2022). University students with attention deficit hyperactivity disorder (ADHD): A consensus statement from the UK Adult ADHD Network (UKAAN). *BMC Psychiatry, 22*, 292. https://doi.org/10.1186/s12888-022-03898-z
- Shneiderman, B. (2020). Human-centered artificial intelligence: Reliable, safe & trustworthy. *International Journal of Human–Computer Interaction, 36*(6), 495–504. https://doi.org/10.1080/10447318.2020.1741118
- Üstün, B., Adler, L. A., Rudin, C., Faraone, S. V., Spencer, T. J., Berglund, P., Gruber, M. J., & Kessler, R. C. (2017). The World Health Organization Adult Attention-Deficit/Hyperactivity Disorder Self-Report Screening Scale for DSM-5. *JAMA Psychiatry, 74*(5), 520. https://doi.org/10.1001/jamapsychiatry.2017.0298
- Xu, D., Chen, W., Peng, W., Zhang, C., Xu, T., Zhao, X., Wu, X., Zheng, Y., Wang, Y., & Chen, E. (2024). Large language models for generative information extraction: A survey. *Frontiers of Computer Science, 18*(6), 186357. https://doi.org/10.1007/s11704-024-40555-y
- Zhang, X., Qi, Y., Chen, G., Gan, W., & Fournier-Viger, P. (2022). Fuzzy-driven periodic frequent pattern mining. *Information Sciences, 618*, 253–269. https://doi.org/10.1016/j.ins.2022.11.009

---

## Chapters 4 and 5 (outline only, for later)

**Chapter 4 — Results** (preamble first). From both real reports:
- 4.2 hardware and software requirements tables (PC and phone);
- 4.3 implementation tools;
- 4.4 program modules and interfaces, with screenshots of both apps and the dashboard;
- 4.5 functional testing as an **expected versus observed table** (the 2026 report's Table 4.1
  is a good model): one row per condition, e.g. "late to library → Library mode waits", "holiday
  → Monday routine skipped";
- 4.6 evaluation results for each metric in 3.10;
- 4.7 discussion;
- 4.8 challenges encountered.

**Chapter 5 — Summary and Conclusion** (preamble first; at least 10 citations):
- summary;
- achievements stated against each objective;
- recommendations and future work (screen companion: C. Zhang et al., 2025; Wen et al., 2024;
  iOS and macOS);
- conclusion.

---

## Terms you must be able to explain (with a worked example each)

Support and confidence · periodic pattern mining · PrefixSpan · recency weighting and half-life
· DBSCAN · event–condition–action rule · dependency graph (directed acyclic graph) ·
topological sort · information extraction · passive sensing · geofence · local-first software ·
levels of automation · retrieval-augmented generation · TAM and UTAUT · System Usability Scale ·
executive function · prospective memory · cognitive offloading · organisation in time · ADEXI ·
ASRS-5 (sensitivity and specificity) · before-and-after (within-subject) design.

---

## Mistakes in the two real reports, and how to avoid them

| Mistake | Where | Do instead |
| --- | --- | --- |
| Precision, recall and F1 reported for each CV (always 0 or 1) | 2024, Table 4.3 | Compute over all routines, plans and participants; explain the counting |
| A model scoring F1 0.0074 called "unsuitable" | 2024, Table 4.4 | A score that low means a bug; investigate before reporting |
| No dataset size, source, split or folds | 2024 | Describe the event schema feature by feature (3.4) |
| The core feature (matching) never measured | 2024 | Measure routines, plans **and** automation, not a side component |
| SUS with 5 of 10 items, reported as "55.0%" | 2024 | All 10 items, score 0–100, compare with 68 |
| Features claimed but never built | 2024, Table 2.1 and 1.5 | Claim only what Chapter 4 shows; keep extended features labelled as extended |
| Blogs, Forbes and vendor sites as sources | 2024 | Peer-reviewed only, from 2016 on; official docs only if allowed |
| A saving that equals its own assumption (30% assumed, 30% "found") | 2026, 4.6 | Don't count something as correct because your own system caused it (e.g. a plan block the user followed only because the alarm told them to) |
| Component names and times that change between chapters | 2026 | One table of names and numbers; check every chapter against it |

---

## Writing checklist (every paragraph)

- 8–9 printed lines (12 pt, 1.5 spacing, A4). Check in Word, not by word count.
- No sentence over 25 words.
- Old information first, new last; each paragraph links back and leads on.
- Acronym in full at first mention, then the short form.
- Every strong claim cited, close to the claim. APA forms:
  - "Ur et al. (2016) found…" at the start;
  - "(Ur et al., 2016)" at the end;
  - several sources alphabetical, separated by semicolons.
- Same surname, same year, different authors: "Z. Zhang et al. (2025)" (memory survey) vs
  "C. Zhang et al. (2025)" (AppAgent); "J. R. Lewis (2018)" (SUS) vs "P. Lewis et al. (2020)"
  (RAG).
- Foundational sources older than 10 years (Agrawal 1993, Pei 2004, Davis 1989, Paton & Díaz
  1999, Parasuraman 2000, Kahn 1962, Rashidi 2009, Antila 2012, de Montjoye 2013, Zheng 2015)
  don't count toward the minimum. Ask before using them.
