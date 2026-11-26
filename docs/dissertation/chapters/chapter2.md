# CHAPTER TWO
# LITERATURE REVIEW

## 2.1 Preamble

This chapter reviews the literature behind the system described in Chapter One. It breaks the idea of an adaptive routine learning system into its basic parts and studies each part in turn. The review begins with routines and habits, the behaviour the system sets out to learn. It then covers how activity data is collected and how context shapes that behaviour. Next come the methods for learning routines from data, the ways of storing what is learned and the timing of suggestions. Intelligent assistants, cross-device storage, privacy and user acceptance follow. The chapter then explains the technologies chosen and reviews existing systems, before stating the gap this project fills.

## 2.2 Routines and Habits

A routine is a pattern of actions that a person repeats in similar situations. Banovic et al. (2016) describe a routine as what a person usually does in a given situation, such as checking email on reaching the office. A habit is closely related to a routine. It is behaviour that a situation prompts automatically, learned through repeating the behaviour in that situation [@gardner2022]. Routines can therefore be seen as chains of habits tied to times, places and earlier actions. Once formed, habits can drive behaviour even when a person intends to act differently [@gardner2020]. What people actually do may thus differ from what they plan. A system that learns from real behaviour can capture routines that planning tools miss.

Habits take time to form, and that time varies widely between people. A review of habit-formation studies found that most habits took around two months to form [@singh2024]. In the same review, individual times ranged from a few days to almost a year. Gardner et al. (2022) advise tracking habit formation through repeated measures in everyday life, rather than judging it from a single moment. These findings shape the design of Synapse in two ways. First, a routine should not be treated as settled after a few occurrences, but confirmed over several weeks. Second, the system should keep watching for change, since habits continue to form and fade.

## 2.3 Collecting Activity Data from Smartphones and the Web

Smartphones can record a wide range of everyday activity through their sensors and usage logs. Harari et al. (2016) describe how researchers use phones to collect behavioural data, and the practical and ethical challenges involved. Among the richest of these sources is app usage: which app is opened, when and for how long. Surveys show that app usage records support predicting future behaviour and recommending useful actions [@caolin2017; @li2022]. Large studies confirm that app usage reveals meaningful differences between users [@zhao2016]. Public datasets of app usage also exist for research use. LSApp, for example, contains app usage records collected from 292 users [@aliannejadi2021].

On Android, app usage can be read through the system's usage statistics service once the user grants permission. This service records which apps are used and for how long, without reading what appears on the screen. An alternative is the accessibility service, which can read screen content but is far more intrusive. Privacy worries already make people reluctant to join phone data studies, so the less intrusive service is the safer choice [@roberts2022]. On the computer, activity is captured through the web browser, using an extension that records the websites a user visits. Combining screen time across phones and computers gives a fuller picture than one device alone [@rooksby2016].

## 2.4 Context and Context-Aware Computing

Context is any information that describes a person's situation, such as the time, the day of the week and the place [@vahdat2019]. Context-aware systems use this information to adapt what they do to that situation. On smartphones, context strongly shapes which app a person opens next. Sarker et al. (2019a) compared common machine learning methods for predicting each user's phone usage from context such as time and place. Aliannejadi et al. (2021) used context to help mobile assistants choose the right app for a user's request. Together, these studies show that time, day and place are useful signals for understanding routines. Synapse adopts the same signals as the basis of its routines.

Each record in Synapse therefore carries the weekday, hour and month, and a coarse place where the user allows it. A routine is then learned for a particular context, for example weekday mornings on campus. Deep learning models can also predict app usage from context with high accuracy [@xia2020]. Such models, however, typically need large amounts of data, and their decisions are hard to explain. A student using Synapse should be able to see why a suggestion was made. Synapse therefore uses simpler pattern mining methods, whose results can be read and checked. The next section describes these methods and the measures they rely on.

## 2.5 Learning Routines from Data

Pattern mining is a family of methods that find regularities in large collections of records. The best-known method finds association rules, statements of the form "when A happens, B tends to happen" [@agrawal1993]. Two measures judge each rule. Support is the share of all records in which a pattern appears. Confidence is the share of records containing A that also contain B. Suppose a timetable app was opened on 6 of the 8 Monday mornings recorded. The confidence of the rule "Monday morning, then timetable app" is 6 divided by 8, or 0.75. Synapse uses these measures to score how firmly each routine is established.

Many routines repeat at regular intervals, such as every weekday morning or every Sunday evening. Periodic pattern mining looks for patterns that recur at such regular intervals, and recent work refines how regularity is measured [@zhang2022]. Synapse applies this idea by grouping records into time slots, each made of a weekday and an hour. It then counts how consistently an app appears in each slot over several weeks. A slot that is filled week after week signals a periodic routine. This method needs only one pass over the records. It therefore runs quickly, even on the modest computing resources of a free cloud plan.

Other routines are sequences, such as opening email and then a calendar within a few minutes. Sequential pattern mining finds such ordered patterns in collections of records [@gan2019]. PrefixSpan is a widely used method for this task [@pei2004]. It grows each pattern step by step from a short beginning, called a prefix. At each step, it searches only the parts of the data that can extend that prefix. Because it never builds candidate patterns that do not occur, it stays efficient on large collections [@gan2019]. Synapse uses PrefixSpan to find routines of the form "A, then B within a set time" in each user's records.

Routines are not fixed, so a learning method must also let old patterns fade. Sarker et al. (2019b) showed that favouring recent behaviour predicts phone usage better than treating all history equally. Synapse applies the same principle through recency weighting. The weight of each record halves after a set period, called the half-life. With a half-life of four weeks, a record from four weeks ago counts half as much as one from today. A habit that stops therefore loses its score gradually, while a new habit gains strength. In this way, the system adapts as a student's routine changes across a semester.

Other methods could also learn routines from such data. Deep learning models predict the next app a person will open from their context [@xia2020]. Banovic et al. (2016) modelled routines as choices driven by goals, using methods from planning and decision-making. These approaches can be powerful, but they need more data or more computing power, or they produce results that are hard to explain. Pattern mining suits Synapse because its output is itself an explanation, such as "you usually open your notes app after lectures". It also works from the few weeks of records that a single study period provides. For these reasons, pattern mining forms the core of the system.

## 2.6 Representing What Is Learned

Learned routines must be stored in a form that the system can search and reason over. A personal knowledge graph (PKG) is one such form. It records the people, places, things and activities related to one person, and the links between them [@balog2019]. Recent surveys describe how these graphs are built, kept up to date and used for personal services [@skjaeveland2024; @chakraborty2023]. In a PKG, each item is a node, and each link between two nodes carries a label and sometimes a weight. This structure suits routines well. A routine connects an app, a time, a place and often an earlier action, which a graph holds naturally.

Synapse stores what it learns as such a graph. Apps, places, time slots and tasks are its nodes, and its links record which of them occur together or follow one another. Each link has a weight that grows when its two items occur together and fades when they do not. This keeps the graph in step with the user's recent behaviour, in line with the recency weighting described earlier. Knowledge graphs can also supply reliable facts to language models, which helps those models give grounded answers [@pan2024]. Synapse's guide draws on the graph in this way whenever it answers a user's question about their routines.

## 2.7 Suggestions and Their Timing

A system that guides its users must decide what to suggest and when. Recommender systems are programs that suggest items or actions a user is likely to find useful [@zangerle2023]. Synapse's suggestions are of this kind, drawn from the routines it has learned. Timing, however, matters as much as content. People are more open to notifications at some moments than at others, depending on what they are doing [@mehrotra2016]. Predicting opportune moments to engage phone users performs far better than a naive approach [@pielot2017]. Synapse therefore offers each suggestion shortly before the routine it supports usually happens, rather than at fixed times.

Users also want a say in how much initiative such a system takes. People's expectations of proactive AI differ, and many want to adjust how often it acts on its own [@meurisch2020]. Proactive suggestions are welcome only in suitable circumstances, and poorly judged ones cause annoyance [@zargham2022]. Setting honest expectations helps users accept an AI that sometimes makes mistakes [@kocielnik2019]. Fixed reminders, by contrast, have shown mixed effects on students' study behaviour [@nobbe2024]. Synapse follows these lessons in its design. Each suggestion can be accepted or dismissed, and only routines that a user keeps accepting become settled.

## 2.8 Intelligent Assistants and Large Language Models

Intelligent assistants are programs that help their users through conversation. Commercial voice assistants answer questions and carry out commands, but they act mainly when asked [@hoy2018]. Large language models have changed what such assistants can do. Trained on vast amounts of text, they can follow instructions and perform new tasks from a few examples in a prompt [@brown2020]. In education, they offer clear opportunities for explanation and support, alongside risks such as errors and over-reliance [@kasneci2023]. Their ability to explain information in plain language suits a guide that talks with students about their routines. Synapse uses an LLM as the voice of its guide for this reason.

Language models answer best when they are given the right information. Retrieval-augmented generation (RAG) first retrieves records relevant to a question, then passes them to the model to ground its answer [@lewis2020; @fan2024]. Assistants that remember their users over time also need a form of memory. Recent work surveys how such assistants store, recall and update their memories [@zhang2025]. Generative agents, for instance, retrieve memories by how recent, important and relevant they are [@park2023]. Synapse's guide follows the same approach in its answers. It retrieves the user's routines and recent activity before answering, so its replies rest on the user's own data.

Language models also carry risks, including inaccurate answers and leaks of private information [@weidinger2022]. For this reason, Synapse calls its model only from the server, so no secret keys ever reach the user's device. It also sends the model only the routines and summaries needed for each answer, never the raw records. The choice of model provider matters for the same reason. Providers' terms differ on whether submitted data may be stored or used to train their models. Synapse therefore uses a provider whose terms keep submitted data out of storage and training. This keeps the guide consistent with the consent each user has given.

## 2.9 Storing and Syncing Data Across Devices

Because Synapse gathers data from more than one device, it must bring that data together for each user. People's interactions increasingly span several devices, which makes keeping their information consistent a challenge [@brudy2019]. A common answer is to store each user's data in one cloud database that all devices can reach. Devices, however, are not always online. Local-first software keeps a working copy of data on each device and synchronises it when a connection returns [@kleppmann2019]. Synapse follows this pattern for its collectors. Each device holds its records in a queue and sends them to the database once it is back online.

Keeping each user's data separate matters as much as bringing it together. Synapse stores every user's records in the same database, so it must ensure that no user can read another's records. It does this through row-level security. Row-level security is a database feature that attaches an owner to every record and shows each user only their own rows. Because this rule lives inside the database itself, it holds even if the application code contains a mistake. The same rule applies to every account, including the developer's own. This protects each participant's data for the whole of the study and beyond it.

## 2.10 Privacy, Consent and Data Protection

Personal activity data is sensitive, and collecting it raises clear privacy concerns. Mobile apps track their users widely, with little change after the European Union's General Data Protection Regulation (GDPR) took effect [@kollnig2021]. Such practices erode people's trust in the apps they use. People who worry about privacy are less willing to complete data collection tasks on their phones [@roberts2022]. Privacy by design responds to this problem by building privacy into a system from the start, rather than adding it later [@andrade2022]. Its practices include collecting as little data as possible, telling users what is collected and giving them control over it.

In Nigeria, the Nigeria Data Protection Act (NDPA) 2023 sets the rules for processing personal data [@ndpa2023]. It requires a lawful basis for processing, such as consent, and it protects people's rights over their data. Mahmoud et al. (2025) examine how the Act applies to new technologies and stress the need to balance innovation with privacy. Synapse is designed to meet these rules from the outset. Each category of data is collected only after the user enables it, and passwords, PINs and card details are never recorded. Users can also see, export and delete their data at any time, which keeps them in control.

## 2.11 User Acceptance and Evaluation

A system succeeds only if its intended users accept it. The Technology Acceptance Model (TAM) explains acceptance through two beliefs: that a system is useful, and that it is easy to use [@davis1989]. The Unified Theory of Acceptance and Use of Technology (UTAUT) adds further factors, such as social influence and the conditions that support use [@dwivedi2019]. Both models have been applied to students. University students' adoption of ChatGPT, for example, has been explained using TAM [@zogheib2024]. In Nigeria, effort expectancy and social influence shaped computer science students' adoption of mobile learning [@makinde2027]. These models guide the questionnaire used to evaluate Synapse.

Usability is measured with the System Usability Scale (SUS), a ten-item questionnaire that gives a score from 0 to 100 [@lewis2018]. The SUS is short, reliable and widely used, so its results are easy to compare with other systems. The quality of suggestions is judged separately from usability. Frameworks for evaluating recommender systems stress measuring both accuracy and the experience of the user [@zangerle2023]. Synapse is therefore evaluated in several ways. Detected routines are compared with the routines participants confirm, and flexibility is tested by how quickly routines adapt to changed behaviour. Participants also rate the system's usefulness, ease of use and their overall satisfaction.

## 2.12 Technologies Used and Why They Were Chosen

Each technology in Synapse was chosen for a reason, and Table 2.1 summarises these choices. The Android app is written in Kotlin with the Jetpack Compose interface toolkit. Góis Mateus and Martinez (2019) found that adopting Kotlin in Android apps was associated with fewer code smells, which are patterns that signal poor design. The web app uses React, one of the three web frameworks whose performance Bielak et al. (2022) compared. React builds an interface from small reusable parts called components. The backend uses Supabase, which provides a PostgreSQL database, sign-in and server functions in one free service. Development follows an agile approach of short cycles, each producing working results [@hoda2018].

Table 2.1: Technologies used in Synapse

| Technology | Used for | Reason for the choice | Alternatives considered |
| --- | --- | --- | --- |
| Kotlin with Jetpack Compose | Android app | Associated with fewer code smells than Java [@goismateus2019] | Java, Flutter |
| Android usage statistics service | Recording app usage | Records app use without reading the screen | Accessibility service |
| Browser extension | Recording websites visited | Captures web activity with the user's permission | Manual logging |
| React | Web app and dashboard | Builds the interface from reusable components [@bielak2022] | Angular, Vue.js |
| Supabase (PostgreSQL) | Database, sign-in, server functions | One free service with row-level security | Firebase, a self-built server |
| Periodic pattern mining | Daily and weekly routines | Simple, fast and explainable [@zhang2022] | Deep learning [@xia2020] |
| PrefixSpan | "A, then B" routines | Efficient sequence mining [@gan2019] | Apriori-style methods |
| Recency weighting | Letting routines change | Favours recent behaviour [@sarker2019recency] | Treating all history equally |
| Personal knowledge graph | Storing what is learned | Links apps, times, places and tasks [@skjaeveland2024] | Flat tables of records |
| Language model with retrieval | The guide | Answers grounded in the user's own data [@fan2024] | Rule-based chatbot |
| Agile development | Development method | Short cycles with working results [@hoda2018] | Waterfall model |

## 2.13 Review of Existing Systems

Several research systems already learn routines from phone data. TYDR is an Android app that tracks smartphone sensor and usage data to study daily routines [@beierle2018]. RecencyMiner mines each user's recent behaviour to predict their phone usage [@sarker2019recency]. Banovic et al. (2016) built models of routine behaviour from the actions people were observed to take. Koch et al. (2020) detected changes in daily routines from the smartphone use of 60 users. Each of these systems works with phone data alone. Their focus is on measuring and predicting behaviour, rather than on guiding the user during the day. Table 2.2 summarises them alongside the other systems reviewed.

A second group of systems tracks time spent on computers. TimeAware showed people how they spent time on their computers, and its framing affected their productivity [@kim2016]. meTime gave people feedback on their computer use and helped them stay focused [@whittaker2016]. Meyer et al. (2017) concluded that self-monitoring at work needs actionable insights, not raw data alone. Rooksby et al. (2016) combined screen time from phones and computers, but only for personal tracking. These tools inform their users about past behaviour. They do not, however, learn routines from that behaviour or suggest what to do next.

A third group guides users but does not learn from their behaviour. SortOut, a time management app for students, reduced stress and improved planning, but it relies on tasks entered by hand [@alhasani2025]. Good Vibrations used phone vibrations to nudge people to reduce phone use, but the effect faded after the nudges stopped [@okeke2018]. Digital self-control tools help people limit device use rather than understand their routines [@monge2023]. Commercial voice assistants respond to commands but do not learn a user's routine on their own [@hoy2018]. Research assistants that recommend apps from context focus on answering single requests [@aliannejadi2021].

Regional coverage in this field is also limited. A recent smartphone dataset gathered across eight countries includes no African country [@busso2025]. MakOne, collected from 72 university students in Uganda, is among the few African datasets of student device behaviour [@kizito2025]. Studies of Nigerian students' device use have mainly described usage patterns, without learning routines from them [@musa2026]. No routine learning system built for Nigerian students was found in this review. Synapse responds to this gap by focusing on students of a Nigerian university. It is designed around their devices, their consent and the shape of their academic week.

Table 2.2: Existing systems compared with Synapse

| System | What it does | What it lacks that Synapse adds | Reference |
| --- | --- | --- | --- |
| TYDR | Tracks phone sensor and usage data for routine research | Phone only; no guidance | [@beierle2018] |
| RecencyMiner | Mines recent behaviour to predict phone usage | Phone only; no guidance | [@sarker2019recency] |
| Routine behaviour models | Model routines from observed actions | Not deployed as guidance | [@banovic2016] |
| Routine change detection | Detects changes in daily phone routines | Detection only; no guidance | [@koch2020] |
| TimeAware | Shows how computer time was spent | Computer only; no routine learning | [@kim2016] |
| meTime | Gives feedback on computer use | Computer only; no routine learning | [@whittaker2016] |
| Screen time tracking | Combines phone and computer screen time | Tracking only; no routine learning | [@rooksby2016] |
| SortOut | Persuasive time management app for students | Relies on tasks typed in | [@alhasani2025] |
| Good Vibrations | Nudges people to use their phone less | Effect fades; no routine learning | [@okeke2018] |
| Voice assistants | Answer questions and carry out commands | Act only when asked | [@hoy2018] |

## 2.14 Summary of the Gap

The literature shows that the parts of Synapse exist, but not together in one system. Some systems learn routines, but they measure rather than guide [@banovic2016; @beierle2018]. Others guide users, but they do not learn from users' behaviour [@alhasani2025]. Routine learning usually draws on one device and treats old behaviour like new [@sarker2018seg; @sarker2019recency]. Privacy concerns, meanwhile, make consent essential for any such system [@roberts2022]. No reviewed system combines consent-based phone and web data, routines that adapt over time and guidance from a language model for students. Synapse is designed to fill this gap, and Chapter Three describes how it does so.
