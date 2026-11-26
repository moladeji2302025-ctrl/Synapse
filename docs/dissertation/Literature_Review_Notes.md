# Literature Review

**Design and Implementation of an AI-Powered Cross-Device Routine Learning, Daily Planning and
Task Automation System for Executive Function Support in University Students**

*Prepared 2026-11-25 for Chapter 1 (background and problem statement) and Chapter 2.*
- **Part A (sections 2–7):** executive function in university students: what university life
  demands of it, what weakens it (from everyday factors to serious health conditions), what help
  exists, and why automated cognitive offloading is the right kind of help.
- **Part B (section 8):** the literature behind each part of the system's functionality, plus the
  supporting areas.
- **Section 9:** brings both parts together.
- **Sections 10–11:** the synthesis table, and the strays removed.

---

## 1. How the literature was found and checked

- **Search:** about 40 searches of OpenAlex (a free index of scholarly works) in November 2026,
  limited to journal articles from 2016 onwards. Topics: executive function and academic
  performance; prospective memory; cognitive offloading and reminders; sleep, stress, anxiety,
  depression, ADHD, autism and post-viral illness in relation to cognition; student mental-health
  prevalence (global, Africa, Nigeria); phone use; support and interventions; apps; measurement.
- **Screening:** a paper was kept only if it bears on university students or young adults **and**
  on executive function, time, planning, remembering intentions, daily functioning, phone use,
  support or measurement. Studies of children only, games, gaming disorder, medication, and
  outlets of doubtful standing were dropped (section 11).
- **Verification:** every DOI was checked against Crossref, and the reference entries are built
  from the Crossref record. Claims come from each paper's own abstract. Where no abstract was
  available, the paper is cited only for what its title states, and marked "topic only" in the
  tables. Read those papers before citing them for anything more.
- **Quality:** every source was checked for currency (2016 onwards, or marked foundational),
  relevance, authority (peer-reviewed journal or recognised expert body), accuracy (DOI verified,
  claims from the paper) and purpose (research, not marketing). Only sources that pass all five
  are included.

The Part B sources were found earlier in the project, with each DOI checked against Crossref or
OpenAlex in November 2026, and screened again on 2026-11-25.

---

# Part A — Executive Function in University Students

## 2. What university life demands: executive function and remembering intentions

**Executive function** is the set of mental processes that manage behaviour. Its core parts are
working memory (holding information in mind), inhibition (resisting distraction and impulses)
and shifting (switching between tasks). Planning, organising time and **prospective memory**
(remembering to carry out an intention at the right moment) all rely on them.

- **They matter for grades.** Among 196 university students, working memory, inhibition and
  shifting were each weakly related to academic performance. Together with age, socio-economic
  status and work hours, inhibition and shifting accounted for 38% of the variance in
  performance (del-Valle et al., 2024).
- **Forgetting intentions is the commonest everyday lapse.** In a five-day diary study, failures
  of prospective memory were the most frequent everyday error for younger adults, whatever the
  instructions (Haas et al., 2020).
- **When it fails, daily life suffers.** Poorer organisation in time goes with lower quality of
  life (Grinblat & Rosenblum, 2025). Executive deficits mark the adults whose academic,
  occupational and daily functioning is most impaired (Holst & Thorell, 2020).
- **It is a different thing from intelligence.** Students with ADHD did worse on executive
  measures but not on intellectual ones (Weyandt et al., 2017). The difficulty lies in managing
  the work, not in ability, so outside support can make up for it.

**For this project:** planning the day, keeping track of time and remembering to act are the
exact jobs the system takes over.

## 3. What weakens executive function: everyday factors and common conditions

Executive function is not fixed. It dips with everyday conditions and with health problems, and
one student can face several at once, often undiagnosed. Among 13,984 full-time first-year
students in 19 colleges across 8 countries, 35% screened positive for at least one common
lifetime mental disorder and 31% for at least one in the past year (Auerbach et al., 2018).

**Everyday factors (mild, affect almost everyone):**
- **The phone.** In two experiments, the mere presence of one's own smartphone reduced available
  cognitive capacity, even when people resisted checking it. The cost was highest for the most
  phone-dependent (Ward et al., 2017). ADHD symptoms, especially inattention, predict
  problematic phone use (Panagiotidi & Overton, 2022). Among 408 university students,
  procrastination, boredom and phone addiction were tied to attention symptoms (Müller et al.,
  2023).
- **Sleep.** In 88 college students tracked with wearables, better quality, longer and more
  consistent sleep went with better grades, and sleep measures accounted for nearly 25% of the
  variance in performance. Sleep in the month and week before a test mattered, not the single
  night before (Okano et al., 2019). Sleep quality and psychological distress have also been
  studied among Nigerian undergraduates (Seun-Fadipe & Mosaku, 2017; topic only).
- **Acute stress.** Its effects on core executive functions have been meta-analysed (Shields et
  al., 2016; topic only). Examinations and deadlines make stress a regular part of student life.

**Common mental-health conditions (moderate):**
- **Anxiety.** Across 177 samples and 22,061 people, self-reported anxiety was reliably linked
  to poorer working-memory capacity (g = −.33) (Moran, 2016).
- **Depression.** Cognitive function after a major depressive episode has been reviewed and
  meta-analysed (Semkovska et al., 2019; topic only).

## 4. Neurodevelopmental conditions and illness (moderate to severe)

**ADHD.** ADHD often lasts into adulthood as a lifelong, impairing condition that is
underdiagnosed and undertreated, and stigma from lack of knowledge increases suffering (Kooij et
al., 2019). The World Federation of ADHD set out 208 evidence-based conclusions to counter
misconceptions that delay help (Faraone et al., 2021). Adult ADHD has been studied across the
WHO World Mental Health Surveys (Fayyad et al., 2017; topic only), and its underdiagnosis is the
subject of a recent review (Rivas-Vazquez et al., 2023; topic only).
- **Students.** In 3,688 post-secondary students followed over time, inattention at the start of
  the programme predicted lower GPA and higher dropout. Inattention, not hyperactivity or
  impulsivity, was the main driver (Henning et al., 2022). At an Ethiopian university, 25.1% of
  513 undergraduates had high ADHD symptoms, linked to below-average GPA and heavy social-media
  use (Kassaw et al., 2025).
- **The mechanism.** Adults with ADHD recalled and carried out fewer of their own real-life
  intentions, and this partly explained their procrastination (Altgassen et al., 2019).
  Procrastination in college students with ADHD symptoms has been linked to emotion
  dysregulation and self-esteem (Bodalski et al., 2023; topic only). Young adults describe
  attention *dysregulation*, including hyperfocus, rather than simply too little attention
  (Ginapp et al., 2023).
- **ADHD is broad.** It has inattentive, hyperactive-impulsive and combined presentations. The
  system addresses only the inattentive and executive side, which is the side that drives
  academic harm (Henning et al., 2022).

**Autism.** In 54 higher-education students with autism, symptom severity explained 12% of the
variance in academic progress. Adding self-reported daily executive functioning raised this to
36% (Dijkhuis et al., 2020). Executive function, rather than the diagnosis itself, was the
stronger marker.

**Illness.** Fatigue and cognitive impairment after COVID-19 have been reviewed and meta-analysed
(Ceban et al., 2022; topic only). Illness can weaken executive function for weeks or months.

**Summary: what weakens executive function, from mild to severe**

| Level | Factor | Evidence |
| --- | --- | --- |
| Everyday | Phone presence and dependence | Ward et al. (2017); Panagiotidi & Overton (2022); Müller et al. (2023) |
| Everyday | Poor or irregular sleep | Okano et al. (2019); Seun-Fadipe & Mosaku (2017) |
| Everyday to moderate | Acute stress (exams, deadlines) | Shields et al. (2016) |
| Moderate | Anxiety | Moran (2016) |
| Moderate to severe | Depression | Semkovska et al. (2019) |
| Moderate to severe | ADHD (inattentive and executive side) | Henning et al. (2022); Altgassen et al. (2019); Kassaw et al. (2025) |
| Moderate to severe | Autism | Dijkhuis et al. (2020) |
| Severe | Post-viral illness | Ceban et al. (2022) |
| How common | About a third of first-year students screen positive for a common disorder | Auerbach et al. (2018) |

**For this project:** the causes differ, but they lead to the same result: plans slip,
intentions are forgotten and commitments are missed. The system needs **no diagnosis**. It
supports executive function whenever it slips, whatever the cause, and it never diagnoses or
treats any condition.

## 5. The help that exists, and its limits

- **Therapy and training work, but need trained staff and sustained effort.** A two-semester
  programme of cognitive-behavioural therapy (CBT) groups and mentoring gave 250 college
  students with ADHD medium-to-large gains in symptoms and executive functioning (d = .39 to
  1.21) (Anastopoulos et al., 2021). Organisational and study-skills training has been developed
  for college students with ADHD (Hartung et al., 2022; topic only).
- **Support is slow to reach students.** A UK consensus statement found provision for
  university students with ADHD often inadequate, with long waits for diagnosis and treatment,
  and called for multimodal educational support (Sedgwick-Müller et al., 2022).
- **Stigma keeps people from help.** Among Nigerian university health-care students,
  mental-health stigma was tied to spiritual interpretations, to beliefs that mental illness is
  communicable, and to attributing it to moral failing (Pederson et al., 2023).
- **People build their own strategies.** Adults with ADHD develop organisational, motoric,
  attentional, social and medication strategies, of varying effectiveness (Canela et al., 2017).
  Adults with ADHD symptoms use compensatory strategies too (Kysow et al., 2017; topic only).

**For this project:** help should not wait for a diagnosis or a clinic, should never label the
student, and should build on what students already do.

## 6. Cognitive offloading: why automation is the right kind of help

**Cognitive offloading** means using something outside the head, such as a note, an alarm or a
calendar, to reduce the mental demand of a task (Risko & Gilbert, 2016). Setting a reminder is
the everyday example. In three experiments, people chose external reminders even when unaided
memory would have earned more. They were biased towards offloading, and the bias was predicted
by underconfidence in their own memory. Every reminder still has a set-up cost: the time and
effort to create it (Gilbert et al., 2020).

Today's tools all keep that cost, and they add another, because the user must remember to use
the tool:
- most ADHD apps target cognitive training or diagnosis, and only 2 of 35 commercial apps had
  medical endorsement (Hernández-Capistrán et al., 2025);
- a CBT app was rated usable, but only 95 of the 240 adults who started completed the 7-week
  assessment (Knouse et al., 2022);
- SMS reminders did not improve module completion, logins or practice of coping strategies in an
  online programme for adults with ADHD (Nordby et al., 2022).

**For this project:** the system is **automated cognitive offloading**. It learns the routine
itself, builds the plan itself and carries out the tasks itself, at the moment their conditions
are met. That removes both costs: setting things up and remembering to use the tool. These are
exactly the costs that weakened executive function makes hardest to pay.

## 7. Measuring executive function and the study's participants

- **ADEXI (main outcome).** The Adult Executive Functioning Inventory has 14 items on working
  memory and inhibition. It showed high internal consistency and adequate test–retest
  reliability, with high specificity but relatively low sensitivity for ADHD (Holst & Thorell,
  2018). It suits a **before-and-after measure of everyday executive function in any adult**,
  not a diagnosis.
- **Participants are ordinary students.** No screening or diagnosis is needed. The requirements
  survey (`requirements/`) asks about focus, time and organisation, which lets results be
  compared between students with more and fewer everyday difficulties as a secondary analysis.
- **Optional: ASRS-5.** If an ADHD-symptom subgroup is wanted, the WHO's six-question screener
  can be added unchanged (sensitivity 91.4%, specificity 96.0% in weighted general-population
  data) (Üstün et al., 2017). It is a screener, not a diagnosis.

---

# Part B — The Literature Behind the System's Functionality

## 8. What each part of the system rests on

### 8.1 Students, time and phones (the wider setting)
- Time management is linked to wellbeing and to performance, according to a meta-analysis
  combining many studies (Aeon et al., 2021).
- Heavier smartphone use goes with weaker academic results (Amez & Baert, 2020). A Nigerian
  study across three universities examined internet use and academic performance (Musa &
  Iliyasu, 2026).
- A persuasive time-management app reduced students' stress, but every task had to be entered
  by hand (Alhasani & Orji, 2025). Fixed-time study reminders helped some students and
  hindered others (Nobbe et al., 2024).
- Time trackers show people where their computer time went (Kim et al., 2016; Whittaker et al.,
  2016; Meyer et al., 2017), and digital self-control tools limit use (Monge Roffarello & De
  Russis, 2023). None learns a routine or plans a day.

### 8.2 Devices record the day: activity, passive and cross-device data
- App-usage data shows how a day is spent and lets apps be predicted (Cao & Lin, 2017; Li et
  al., 2022). In over 100,000 Android users, people fell into many distinct groups by app use,
  so routines must be learned per person (Zhao et al., 2016).
- Smartphones can collect behavioural data passively, recording what the device notices without
  the person doing anything (Harari et al., 2016). Passive sensing combined with machine
  learning can reveal behaviour and mental-health states (Mohr et al., 2017).
- People spread their activity across several devices (Brudy et al., 2019). Screen time has been
  tracked across phone and computer, but no routines were learned from it (Rooksby et al., 2016).
- Large multi-country smartphone datasets include no African country (Busso et al., 2025). A
  dataset of Ugandan students' devices has begun to fill that gap (Kizito et al., 2025).

### 8.3 Learning routines from data (the machine learning)
- **Routines and habits.** Routines can be modelled from behaviour data (Banovic et al., 2016).
  Habit strength shapes how intentions turn into behaviour (Gardner et al., 2020). Habit
  formation can be tracked in real life (Gardner et al., 2022), and it takes from days to
  almost a year (Singh et al., 2024).
- **Per-user, not fixed, time slots.** Fixed slots shared by all users hide how people differ;
  each user's day should be segmented from their own data (Sarker et al., 2018).
- **Recent behaviour counts more.** Weighting recent behaviour above old behaviour keeps learned
  routines current (Sarker et al., 2019b). Routine changes can be detected from daily phone use,
  though this work is at an early stage (Koch et al., 2020).
- **The mining methods:**
  - association rules with support and confidence (Agrawal et al., 1993);
  - periodic pattern mining (X. Zhang et al., 2022);
  - sequential pattern mining by pattern growth, PrefixSpan (Pei et al., 2004; Gan et al., 2019).
- **Alternatives:** deep-learning app prediction (Xia et al., 2020) and classification models
  (Sarker et al., 2019a); an overview of AI on mobile data (Sarker et al., 2021). A research app
  that tracks daily routines (Beierle et al., 2018).

### 8.4 Context, location and places
- Context-aware computing adapts behaviour to time, place and activity (Vahdat-Nejad et al.,
  2019). Context improves which app a phone assistant recommends (Aliannejadi et al., 2021), and
  places of interest improve app prediction (Yu et al., 2018).
- Location trails can be mined into the places a person stays (Zheng, 2015). DBSCAN, a
  density-based clustering method, groups closely packed points and ignores scattered ones
  (Schubert et al., 2017).
- IP-address geolocation databases are often wrong by large distances (Komosný et al., 2017;
  Gharaibeh et al., 2017), so the system does not use them.

### 8.5 Representing what is learned, and planning the day
- A personal knowledge graph stores what a system knows about one person as linked entities
  (Balog & Kenter, 2019; Chakraborty & Sanyal, 2023; Skjæveland et al., 2024). Knowledge graphs
  can ground what language models say (Pan et al., 2024).
- Generative agents plan a day in broad blocks, then hours, then short steps, from a memory of
  past events (Park et al., 2023). This is the model for the daily plan.
- Event–condition–action rules fire an action when an event happens and its conditions hold
  (Paton & Díaz, 1999). This is the basis for "the condition is the trigger, not the clock".
- Topological sorting orders tasks so each comes after what it depends on (Kahn, 1962).

### 8.6 Task automation and keeping the user in control
- People automate tasks with trigger-action ("if this, then that") rules (Ur et al., 2016), but
  often misread how their own rules behave (Brackenbury et al., 2019).
- Phone tasks can be automated from a single demonstration (Li et al., 2017). Earlier systems
  mined routines and offered to automate them with the user's approval (Antila et al., 2012;
  Rashidi & Cook, 2009).
- Language-model agents complete Android tasks from a command (Wen et al., 2024) and learn to
  operate phone apps (C. Zhang et al., 2025). Wang et al. (2024) survey how such agents are
  built.
- Automation can range from suggesting to acting alone (Parasuraman et al., 2000). High
  automation can coexist with high human control (Shneiderman, 2020). Guidelines for AI that
  people interact with include making clear what the system will do and supporting easy undo
  (Amershi et al., 2019).

### 8.7 When to prompt, and how
- People's receptivity to notifications varies with context (Mehrotra et al., 2016), and
  opportune moments to engage them can be predicted (Pielot et al., 2017).
- People expect proactive AI but differ in how much initiative they want (Meurisch et al., 2020).
  Badly timed proactive behaviour annoys (Zargham et al., 2022). How users' expectations are set
  shapes whether they accept an imperfect AI (Kocielnik et al., 2019).
- Okeke et al. (2018) tested whether a digital nudge can reduce digital overload. Zangerle and
  Bauer (2023) set out a framework for evaluating recommender systems.

### 8.8 Assistants and language models
- Voice assistants act only when asked (Hoy, 2018). Large language models can follow tasks from
  a few examples (Brown et al., 2020) and bring opportunities and challenges in education
  (Kasneci et al., 2023).
- Proactive dialogue systems take the initiative (Deng et al., 2023). Retrieval-augmented
  generation grounds answers in retrieved data (P. Lewis et al., 2020; Fan et al., 2024), and
  agent memory is surveyed by Z. Zhang et al. (2025).
- Language models carry risks (Weidinger et al., 2022). This is why the system takes all times
  from data and never lets the model invent them.
- Language models can extract structured information from documents (Xu et al., 2024). This is
  how a timetable becomes routines, with the student reviewing the result.

### 8.9 Syncing and acting offline
- Local-first software works from each device's own copy and syncs later (Kleppmann et al.,
  2019). The system learns online and acts offline from cached rules and plans.

### 8.10 Privacy and data protection
- Mobile apps kept tracking users widely after the GDPR (Kollnig et al., 2021), and privacy
  concerns make people resist mobile data collection (Roberts et al., 2022). Privacy by design is
  reviewed by Andrade et al. (2022).
- Four location points are enough to single out most people (de Montjoye et al., 2013). Location
  privacy protections are surveyed by Primault et al. (2019) and Jiang et al. (2021).
- The Nigeria Data Protection Act 2023 governs the study, including sensitive data such as
  health (Nigeria Data Protection Act, 2023). Mahmoud et al. (2025) discuss it.

### 8.11 Acceptance, usability and development method
- Acceptance is explained by perceived usefulness and ease of use (Davis, 1989) and by UTAUT
  (Dwivedi et al., 2019). Both have been applied to students adopting ChatGPT (Zogheib &
  Zogheib, 2024) and mobile learning in Nigeria (Makinde & Akinbowale, in press).
- The System Usability Scale has 10 items scored 0–100 (J. R. Lewis, 2018).
- Agile development builds in short cycles (Hoda et al., 2018). Kotlin Android apps show fewer
  code smells (Góis Mateus & Martinez, 2019), and React's performance is compared with other
  frameworks by Bielak et al. (2022).

---

## 9. Synthesis: what this means for the system

**The problem, stated from the evidence.** University study demands executive function:
planning, keeping track of time and remembering to act on intentions. These functions are linked
to academic performance (del-Valle et al., 2024), and forgetting intentions is the commonest
everyday lapse (Haas et al., 2020). Executive function is weakened by factors that run from mild
to severe:
- everyday ones such as phone presence, poor sleep and stress (Ward et al., 2017; Okano et al.,
  2019; Shields et al., 2016);
- common conditions such as anxiety and depression (Moran, 2016; Semkovska et al., 2019);
- neurodevelopmental conditions and illness such as ADHD, autism and post-viral fatigue (Henning
  et al., 2022; Dijkhuis et al., 2020; Ceban et al., 2022).

About a third of first-year students screen positive for a common mental disorder (Auerbach et
al., 2018), and many are undiagnosed. Effective help needs trained staff and is slow to arrive
(Anastopoulos et al., 2021; Sedgwick-Müller et al., 2022). In Nigeria, stigma also holds people
back (Pederson et al., 2023). The tools students can reach themselves need the executive effort
that is failing: people offload onto reminders, but each one has to be set up (Gilbert et al.,
2020), and apps and reminders lose their users (Knouse et al., 2022; Nordby et al., 2022).

**The gap this project fills.** No reviewed tool learns a student's routine on its own from their
phone and PC, then takes over planning, keeping time and acting on intentions at the moment they
are due. No reviewed tool removes the cost of setting up and remembering the help itself.

**Design requirements drawn from the literature:**

| Requirement | Because | Source |
| --- | --- | --- |
| Learn the routine passively, with almost no setup | Every reminder has a set-up cost; tools that need steady input lose users | Gilbert et al. (2020); Knouse et al. (2022) |
| Act or prompt when the real condition is met (arrival, departure, end of a lecture) | Forgetting intentions is the commonest lapse | Haas et al. (2020); Altgassen et al. (2019) |
| Spoken warnings before transitions | Poor organisation in time | Grinblat & Rosenblum (2025) |
| Break the day into activities, sub-activities and small timed tasks | Planning and organising depend on executive function | del-Valle et al. (2024); Hartung et al. (2022) |
| Focus modes at study places, held until the student leaves | The phone's presence drains cognitive capacity | Ward et al. (2017); Panagiotidi & Overton (2022) |
| Notice over-long sessions as well as distraction | Attention can be dysregulated, including hyperfocus | Ginapp et al. (2023) |
| Few, specific notifications; act instead of nagging | Reminders alone did not change engagement | Nordby et al. (2022) |
| Work the same with or without a diagnosis; never label the user | Many causes, often undiagnosed; stigma | Auerbach et al. (2018); Pederson et al. (2023) |
| Keep working on bad days (sleep loss, stress, illness) | Executive function dips with everyday and health factors | Okano et al. (2019); Shields et al. (2016); Ceban et al. (2022) |

**Evaluation requirements drawn from the literature:**
- **Participants:** ordinary students, with no screening needed. Optionally add the ASRS-5 for an
  ADHD-symptom subgroup (Üstün et al., 2017).
- **Before-and-after design:** one to two weeks with the system only observing, then the
  remaining weeks with it planning and automating.
- **Outcomes:**
  - commitments missed or late;
  - off-task phone time in planned study blocks;
  - ADEXI scores at the start and end (Holst & Thorell, 2018);
  - retention at the end of the study, compared with app studies (Knouse et al., 2022).
- **Secondary analysis:** whether students reporting more everyday difficulties benefit more.
- **Claims:** the system supports executive function in daily life. It does not diagnose or
  treat any condition.

---

## 10. Synthesis table: Part A sources (author, method, result, limitation, use)

| Source | Method and sample | Main result | Limitation | Use here |
| --- | --- | --- | --- | --- |
| del-Valle et al. (2024) | 196 university students, EF tasks | Inhibition and shifting (with age, status, work hours) explain 38% of performance variance | Single Latin American sample | EF matters for grades |
| Haas et al. (2020) | 5-day diary, 64 younger and 64 older adults | Forgetting intentions is the most frequent everyday error | Small diary sample | Core lapse the system targets |
| Weyandt et al. (2017) | 436 first-year students with and without ADHD | Poorer EF, same intellectual ability | First-year data only | EF, not ability |
| Holst & Thorell (2020) | Adults with ADHD vs other disorders | Wider daily impairment, worst with EF deficits | Clinical sample | Daily-life cost |
| Grinblat & Rosenblum (2025) | 69 adults with ADHD vs 52 controls | Poorer time organisation; adds 10.8% to quality-of-life variance | Small sample | Time is a core target |
| Auerbach et al. (2018) | 13,984 first-year students, 8 countries | 35% lifetime, 31% past-year positive screens | No African site except South Africa; self-report | How common the factors are |
| Ward et al. (2017) | Two experiments | Phone presence reduces cognitive capacity | Lab tasks | Everyday factor; focus modes |
| Panagiotidi & Overton (2022) | 273 adults, ASRS and phone scales | Inattention predicts problematic phone use | Correlational | Phone and attention |
| Müller et al. (2023) | 408 university students | Procrastination, boredom, phone addiction tied to attention symptoms | Cross-sectional | Students and phones |
| Okano et al. (2019) | 88 students with wearables | Sleep explains nearly 25% of grade variance | One course | Everyday factor; keep working on bad days |
| Seun-Fadipe & Mosaku (2017) | Nigerian undergraduates (topic only) | Sleep quality and psychological distress | Read before citing detail | Local evidence |
| Shields et al. (2016) | Meta-analysis (topic only) | Acute stress and core EF | Read before citing detail | Stress as a factor |
| Moran (2016) | Meta-analysis, 177 samples, 22,061 people | Anxiety linked to poorer working memory (g = −.33) | Mixed task types | Anxiety as a factor |
| Semkovska et al. (2019) | Meta-analysis (topic only) | Cognition after major depression | Read before citing detail | Depression as a factor |
| Henning et al. (2022) | 3,688 students, longitudinal | Inattention predicts lower GPA and dropout | Canadian sample | ADHD; inattentive side |
| Kassaw et al. (2025) | 513 Ethiopian undergraduates | 25.1% high ADHD symptoms | One university | African evidence |
| Altgassen et al. (2019) | 29 adults with ADHD vs 24 controls | Fewer real-life intentions carried out | Small sample | Act at the moment of need |
| Bodalski et al. (2023) | College students (topic only) | ADHD symptoms and procrastination | Read before citing detail | Procrastination |
| Ginapp et al. (2023) | 43 young adults, focus groups | Attention dysregulation incl. hyperfocus | Mostly North American women | Watch for hyperfocus |
| Kooij et al. (2019); Faraone et al. (2021) | Expert consensus statements | ADHD lifelong, underdiagnosed; evidence base | Not student-specific | Authority on ADHD |
| Fayyad et al. (2017); Rivas-Vazquez et al. (2023) | Epidemiology; review (topic only) | Adult ADHD across countries; underdiagnosis | Read before citing detail | Underdiagnosis |
| Dijkhuis et al. (2020) | 54 students with autism | Daily EF raises explained academic progress from 12% to 36% | Small, mostly male | Autism; EF as the marker |
| Ceban et al. (2022) | Meta-analysis (topic only) | Fatigue and cognition after COVID-19 | Read before citing detail | Illness as a factor |
| Anastopoulos et al. (2021) | RCT, 250 college students | CBT + mentoring: medium–large gains | Needs trained staff | What works and its cost |
| Hartung et al. (2022) | Intervention (topic only) | Organisational and study skills | Read before citing results | Planning skills |
| Sedgwick-Müller et al. (2022) | UK expert consensus | Slow, inadequate support | UK system | Support is scarce |
| Pederson et al. (2023) | 40 Nigerian students, focus groups | Stigma from spiritual and moral beliefs | Health students only | Never label users |
| Canela et al. (2017); Kysow et al. (2017) | Interviews; survey (Kysow topic only) | Self-made compensatory strategies | Clinical; read Kysow first | Build on existing strategies |
| Risko & Gilbert (2016) | Review (topic only) | Defines cognitive offloading | Read before citing detail | The system's core concept |
| Gilbert et al. (2020) | Three experiments | People over-use reminders; reminders have set-up costs | Lab task | Remove the set-up cost |
| Hernández-Capistrán et al. (2025) | Scoping review, 46 apps | Mostly training or diagnosis; few endorsed | Apps only | Gap in existing apps |
| Knouse et al. (2022) | Open study, 240 adults | 95 of 240 completed 7 weeks | No control group | Engagement drops |
| Nordby et al. (2022) | Randomised reminders, 109 adults | SMS reminders did not raise completion | Self-reported diagnosis | Reminders alone fall short |
| Holst & Thorell (2018) | Psychometric study | ADEXI reliable; high specificity | Self- vs other-rating gaps | Main outcome measure |
| Üstün et al. (2017) | 637 participants | ASRS-5: 91.4% sensitivity, 96.0% specificity | US samples | Optional subgroup screener |

## 11. Removed during screening (strays)

These matched the searches but don't fit a project about executive function support for university
students, so they are not used:
- Studies of **children only**: digital interventions for youth (a mapping review), smartwatch
  studies with children, serious games for children's routines, primary-school teacher training
  in Kaduna.
- **Off-topic for this system**: a critique of games for neurodivergent players, gaming disorder
  and GPA, stimulant misuse, medication trials, a lifespan prevalence letter.
- **Doubtful outlets**: several titles from non-indexed or low-credibility journals that publish
  without rigorous peer review.
- **Unverifiable**: a Nigerian study of student depression and anxiety whose DOI could not be
  confirmed. Find it through Google Scholar before citing.

From the earlier computing sources, LayoutLMv3 (a document-layout model) was removed as a stray.
Timetable extraction is covered by the LLM information-extraction survey.

---

## References

*129 sources, APA 7.*

- Aeon, B., Faber, A., & Panaccio, A. (2021). Does time management work? A meta-analysis. *PLOS ONE, 16*(1), e0245066. https://doi.org/10.1371/journal.pone.0245066
- Agrawal, R., Imieliński, T., & Swami, A. (1993). Mining association rules between sets of items in large databases. *ACM SIGMOD Record, 22*(2), 207–216. https://doi.org/10.1145/170036.170072 *(Older than 10 years: foundational.)*
- Alhasani, M., & Orji, R. (2025). Promoting stress management among students in higher education: Evaluating the effectiveness of a persuasive time management mobile app. *International Journal of Human–Computer Interaction, 41*(1), 219–241. https://doi.org/10.1080/10447318.2023.2297330
- Aliannejadi, M., Zamani, H., Crestani, F., & Croft, W. B. (2021). Context-aware target apps selection and recommendation for enhancing personal mobile assistants. *ACM Transactions on Information Systems, 39*(3), 1–30. https://doi.org/10.1145/3447678
- Altgassen, M., Scheres, A., & Edel, M.-A. (2019). Prospective memory (partially) mediates the link between ADHD symptoms and procrastination. *ADHD Attention Deficit and Hyperactivity Disorders, 11*(1), 59–71. https://doi.org/10.1007/s12402-018-0273-x
- Amershi, S., Weld, D., Vorvoreanu, M., Fourney, A., Nushi, B., Collisson, P., Suh, J., Iqbal, S., Bennett, P. N., Inkpen, K., Teevan, J., Kikin-Gil, R., & Horvitz, E. (2019). Guidelines for human-AI interaction. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (pp. 1–13). https://doi.org/10.1145/3290605.3300233
- Amez, S., & Baert, S. (2020). Smartphone use and academic performance: A literature review. *International Journal of Educational Research, 103*, 101618. https://doi.org/10.1016/j.ijer.2020.101618
- Anastopoulos, A. D., Langberg, J. M., Eddy, L. D., Silvia, P. J., & Labban, J. D. (2021). A randomized controlled trial examining CBT for college students with ADHD. *Journal of Consulting and Clinical Psychology, 89*(1), 21–33. https://doi.org/10.1037/ccp0000553
- Andrade, V. C., Gomes, R. D., Reinehr, S., Freitas, C. O. d. A., & Malucelli, A. (2022). Privacy by design and software engineering: A systematic literature review. In *Proceedings of the XXI Brazilian Symposium on Software Quality* (pp. 1–10). https://doi.org/10.1145/3571473.3571480
- Antila, V., Polet, J., Lämsä, A., & Liikka, J. (2012). RoutineMaker: Towards end-user automation of daily routines using smartphones. In *2012 IEEE International Conference on Pervasive Computing and Communications Workshops* (pp. 399–402). https://doi.org/10.1109/PERCOMW.2012.6197519 *(Older than 10 years: foundational.)*
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
- Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. *MIS Quarterly, 13*(3), 319–340. https://doi.org/10.2307/249008 *(Older than 10 years: foundational.)*
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
- Grinblat, N., & Rosenblum, S. (2025). The relationship between organization in time, executive functions, and quality of life in adult ADHD. *Brain Sciences, 15*(12), 1262. https://doi.org/10.3390/brainsci15121262
- Góis Mateus, B., & Martinez, M. (2019). An empirical study on quality of Android applications written in Kotlin language. *Empirical Software Engineering, 24*(6), 3356–3393. https://doi.org/10.1007/s10664-019-09727-4
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
- Kahn, A. B. (1962). Topological sorting of large networks. *Communications of the ACM, 5*(11), 558–562. https://doi.org/10.1145/368996.369025 *(Older than 10 years: foundational.)*
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
- de Montjoye, Y.-A., Hidalgo, C. A., Verleysen, M., & Blondel, V. D. (2013). Unique in the crowd: The privacy bounds of human mobility. *Scientific Reports, 3*, 1376. https://doi.org/10.1038/srep01376 *(Older than 10 years: foundational.)*
- Moran, T. P. (2016). Anxiety and working memory capacity: A meta-analysis and narrative review. *Psychological Bulletin, 142*(8), 831–864. https://doi.org/10.1037/bul0000051
- Musa, D. Y., & Iliyasu, F. (2026). Internet usage patterns and their association with academic performance among undergraduates in three Nigerian universities. *FUDMA Journal of Sciences, 10*(21), 351–355. https://doi.org/10.33003/fjs-2026-1021-6488
- Müller, V., Mellor, D., & Piko, B. F. (2023). How to procrastinate productively with ADHD: A study of smartphone use, depression, and other academic variables among university students with ADHD symptoms. *Journal of Attention Disorders, 27*(9), 951–959. https://doi.org/10.1177/10870547231171724
- Nigeria Data Protection Act, 2023. (2023). *Federal Republic of Nigeria Official Gazette*. Federal Government of Nigeria.
- Nobbe, L., Breitwieser, J., Biedermann, D., & Brod, G. (2024). Smartphone-based study reminders can be a double-edged sword. *npj Science of Learning, 9*(1), 40. https://doi.org/10.1038/s41539-024-00253-7
- Nordby, E. S., Gjestad, R., Kenter, R. M. F., Guribye, F., Mukhiya, S. K., Lundervold, A. J., & Nordgreen, T. (2022). The effect of SMS reminders on adherence in a self-guided internet-delivered intervention for adults with ADHD. *Frontiers in Digital Health, 4*, 821031. https://doi.org/10.3389/fdgth.2022.821031
- Okano, K., Kaczmarzyk, J. R., Dave, N., Gabrieli, J. D. E., & Grossman, J. C. (2019). Sleep quality, duration, and consistency are associated with better academic performance in college students. *npj Science of Learning, 4*, 16. https://doi.org/10.1038/s41539-019-0055-z
- Okeke, F., Sobolev, M., Dell, N., & Estrin, D. (2018). Good vibrations: Can a digital nudge reduce digital overload? In *Proceedings of the 20th International Conference on Human-Computer Interaction with Mobile Devices and Services* (pp. 1–12). https://doi.org/10.1145/3229434.3229463
- Pan, S., Luo, L., Wang, Y., Chen, C., Wang, J., & Wu, X. (2024). Unifying large language models and knowledge graphs: A roadmap. *IEEE Transactions on Knowledge and Data Engineering, 36*(7), 3580–3599. https://doi.org/10.1109/TKDE.2024.3352100
- Panagiotidi, M., & Overton, P. (2022). Attention deficit hyperactivity symptoms predict problematic mobile phone use. *Current Psychology, 41*(5), 2765–2771. https://doi.org/10.1007/s12144-020-00785-2
- Parasuraman, R., Sheridan, T. B., & Wickens, C. D. (2000). A model for types and levels of human interaction with automation. *IEEE Transactions on Systems, Man, and Cybernetics – Part A: Systems and Humans, 30*(3), 286–297. https://doi.org/10.1109/3468.844354 *(Older than 10 years: foundational.)*
- Park, J. S., O'Brien, J., Cai, C. J., Morris, M. R., Liang, P., & Bernstein, M. S. (2023). Generative agents: Interactive simulacra of human behavior. In *Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology* (pp. 1–22). https://doi.org/10.1145/3586183.3606763
- Paton, N. W., & Díaz, O. (1999). Active database systems. *ACM Computing Surveys, 31*(1), 63–103. https://doi.org/10.1145/311531.311623 *(Older than 10 years: foundational.)*
- Pederson, A. B., Konadu Fokuo, J., Thornicroft, G., Bamgbose, O., Ogunnubi, O. P., Ogunsola, K., & Oshodi, Y. O. (2023). Perspectives of university health care students on mental health stigma in Nigeria: Qualitative analysis. *Transcultural Psychiatry, 60*(2), 272–285. https://doi.org/10.1177/13634615211055007
- Pei, J., Han, J., Mortazavi-Asl, B., Wang, J., Pinto, H., Chen, Q., Dayal, U., & Hsu, M.-C. (2004). Mining sequential patterns by pattern-growth: The PrefixSpan approach. *IEEE Transactions on Knowledge and Data Engineering, 16*(11), 1424–1440. https://doi.org/10.1109/TKDE.2004.77 *(Older than 10 years: foundational.)*
- Pielot, M., Cardoso, B., Katevas, K., Serrà, J., Matic, A., & Oliver, N. (2017). Beyond interruptibility: Predicting opportune moments to engage mobile phone users. *Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 1*(3), 1–25. https://doi.org/10.1145/3130956
- Primault, V., Boutet, A., Ben Mokhtar, S., & Brunie, L. (2019). The long road to computational location privacy: A survey. *IEEE Communications Surveys & Tutorials, 21*(3), 2772–2793. https://doi.org/10.1109/COMST.2018.2873950
- Rashidi, P., & Cook, D. J. (2009). Keeping the resident in the loop: Adapting the smart home to the user. *IEEE Transactions on Systems, Man, and Cybernetics – Part A: Systems and Humans, 39*(5), 949–959. https://doi.org/10.1109/TSMCA.2009.2025137 *(Older than 10 years: foundational.)*
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
- Zheng, Y. (2015). Trajectory data mining: An overview. *ACM Transactions on Intelligent Systems and Technology, 6*(3), 1–41. https://doi.org/10.1145/2743025 *(Older than 10 years: foundational.)*
- Zogheib, S., & Zogheib, B. (2024). Understanding university students' adoption of ChatGPT: Insights from TAM, SDT, and beyond. *Journal of Information Technology Education: Research, 23*, Article 25. https://doi.org/10.28945/5377
- Üstün, B., Adler, L. A., Rudin, C., Faraone, S. V., Spencer, T. J., Berglund, P., Gruber, M. J., & Kessler, R. C. (2017). The World Health Organization Adult Attention-Deficit/Hyperactivity Disorder Self-Report Screening Scale for DSM-5. *JAMA Psychiatry, 74*(5), 520. https://doi.org/10.1001/jamapsychiatry.2017.0298
