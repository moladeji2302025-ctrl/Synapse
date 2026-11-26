# CHAPTER ONE
# INTRODUCTION

## 1.1 Background to the Study

Smartphones go wherever their owners go, and they record much of how each day is spent. Every app opened, message checked and page visited leaves a small trace with a time attached. Taken together, these traces show the shape of a person's day [@caolin2017; @li2022]. No two shapes are quite alike. When more than 100,000 Android users were studied, their app use alone split them into hundreds of distinct groups [@zhao2016]. Each person's day therefore has to be read on its own terms. That makes the phone a detailed record of everyday behaviour, and a good source for understanding it. It is also a natural place to help people as they move through their day [@sarker2021].

University students are one group for whom such help matters, because the way they spend their time has clear consequences. Pooling many studies, a meta-analysis linked good time management with wellbeing and with better performance [@aeon2021]. Yet a student's hours are rarely well structured. Lectures, private study, social life and rest all compete for them, and the phone sits in the middle, used for study and for distraction. How heavily it is used matters. A review of studies on smartphone use found that heavier use tends to go with weaker academic results [@amez2020]. In Nigeria, a study across three universities examined how undergraduates use the internet and how that use relates to academic performance [@musa2026].

Students already use a range of tools to plan their days. Calendars and reminder apps hold plans, but only the plans that users type in themselves. Voice assistants such as Siri, Alexa and Google Assistant answer questions and carry out commands when asked [@hoy2018]. Digital self-control tools track screen time and help people limit their device use [@monge2023]. One time management app for students improved planning as well as reducing stress, though it depended on tasks entered by hand [@alhasani2025]. Reminders sent to students' phones are a mixed case: they have helped studying in some cases and hindered it in others [@nobbe2024]. Each tool helps in part. None of them learns how a student's day actually runs.

Several research teams have gone further and built software that learns routines from phone data. Some of it models a routine as the action a person usually takes in a given situation [@banovic2016]. Other projects are Android apps, built for research studies, that track daily routines [@beierle2018]. Many divide the day into fixed time slots that are the same for every user [@sarker2018seg]. Fixed slots hide how differently people live. Habits change as well, which means recent behaviour should weigh more than old [@sarker2019recency]. Detecting those changes from phone use is still an early line of work [@koch2020]. Most of it stops at measuring or predicting behaviour, without going on to guide the user [@banovic2016; @beierle2018].

Where the data comes from is a further gap. Within a single day people move between phones, laptops and web browsers [@brudy2019], yet routine studies usually draw on one device. One study did combine screen time from phones and computers, but it made no attempt to learn routines from it [@rooksby2016]. Then there is privacy. Mobile apps still track their users widely, even after data protection laws came into force [@kollnig2021]. Worried about privacy, people become unwilling to share data with phone-based studies [@roberts2022]. A system that learns routines has to collect only what each user agrees to, and it has to make that choice easy to see.

Artificial intelligence (AI) has recently made a new form of help possible. Large language models (LLMs) can now talk with people in natural language and explain information plainly [@kasneci2023]. People also expect AI assistants to take some initiative, although how much they want varies from person to person [@meurisch2020]. Timing counts. Suggestions are welcome only in the right circumstances, and badly timed ones can annoy users [@zargham2022]. This project draws these strands into one system, called Synapse. With the student's consent, Synapse records their phone and web activity, learns their routines as those routines change and guides them through the day. The next section states the specific problem this study addresses.

## 1.2 Statement of the Problem

Students have no tool that learns their daily routines from what they actually do. Calendars, reminder apps and assistants act only on what users type in or ask for [@hoy2018; @alhasani2025]. Reminders on fixed schedules ignore each student's own rhythm, and their effects on studying are mixed [@nobbe2024]. Where research systems do learn routines, fixed time slots shared by all users are common [@sarker2018seg]. Many weigh old and recent behaviour equally [@sarker2019recency], so their picture of a routine goes stale as habits change across a semester. They also tend to stop at measuring behaviour and do not guide the student [@banovic2016].

The second part of the problem lies in the data. Students move between phones and web browsers throughout the day [@brudy2019]. Routine-learning work usually draws on a single device, so the routine it sees is incomplete [@rooksby2016]. Many apps also collect personal data without meaningful consent, which leaves people wary of sharing it [@kollnig2021; @roberts2022]. What is needed, then, is a system that collects smartphone and web activity only with each user's consent. That system has to keep each routine up to date as habits change and use it to guide the student at the right time. It also has to be shown to be accurate, usable and acceptable to the students who use it.

## 1.3 Aim and Objectives

The aim of this project is to design and implement an adaptive routine learning system using smartphone and web activity data.

The objectives of the project are:

1. To identify the requirements of an adaptive routine learning system.
2. To collect smartphone and web activity data from consenting student participants.
3. To design the system's architecture, data model and routine-learning model.
4. To implement the system as an Android application and a web application backed by a cloud database.
5. To evaluate the system's routine-detection accuracy, usability, flexibility and user satisfaction.

## 1.4 Methodology

Each objective has its own method and its own result. The requirements come from a review of related literature and existing systems; it shows what similar systems do and what they lack. Activity data is then collected, through an Android app and a web browser extension, from students who agree to take part. The design follows from the requirements and is drawn up in standard diagrams. Building happens in short development cycles; each cycle ends in a working version that can be tested [@hoda2018]. Last, the system is evaluated with the participating students for its accuracy, usability and flexibility, and for their satisfaction with it. Table 1.1 links each objective to its method and result.

Table 1.1: Objectives, methods and results

| Objective | Methodology | Result |
| --- | --- | --- |
| 1. To identify the requirements | Review of related literature and existing systems | A list of functional and non-functional requirements |
| 2. To collect the data | A consent screen; an Android app that records app usage; a browser extension that records websites visited, over a set study period | A dataset of consented activity records |
| 3. To design the system | Architecture, use case, entity-relationship and sequence diagrams; design of the routine-learning steps | Design documents and diagrams |
| 4. To implement the system | Kotlin for the Android app, React for the web app and Supabase for the cloud database, built in short cycles | A working Android app, web app and backend |
| 5. To evaluate the system | Comparison of detected routines with routines participants confirm; System Usability Scale questionnaire; a test of how quickly routines adapt; acceptance and satisfaction questionnaire | Accuracy, usability, flexibility and satisfaction results |

## 1.5 Scope of the Study

The study covers a system for students of [University] who agree to take part. It records app usage on Android phones and the websites visited in a web browser, but only for the categories of activity each user enables. Nothing outside those categories is captured. Each user's records are kept apart from everyone else's in a cloud database, and from them the system learns daily and weekly routines. It also learns sequences of actions that usually follow one another. Those routines drive its suggestions, a morning brief of the day ahead and an end-of-day report. Users may also link other services they choose, such as a calendar. They can export or delete all of their data at any time.

Beyond these functions, the system must keep each user's data private, and it never records passwords, personal identification numbers (PINs) or card details. It also has to stay easy to use and keep working without a network connection; records collected offline are sent once the connection returns. Some things fall outside the study. It does not cover iPhones, or computer activity outside the web browser, and it does not record the content of screens or what users type. The system does not act on the user's behalf, and the study does not measure health or academic grades. These limits keep the work on learning routines and turning them into guidance, which is what the time available allows.

The project is feasible within the time and means available to it. The system is built with free or free-tier tools: Android Studio, the React library and the free plan of the Supabase cloud database. The guide calls a free online language model from the server, so no paid licence is needed. Nor is app store approval, since the Android app is installed directly on participants' phones for the study. A few weeks of records are enough for the routine-learning methods chosen, and a single study period provides that. Each part is developed and tested in short cycles (Section 1.4), which lets progress be checked at every stage of the project [@hoda2018].
