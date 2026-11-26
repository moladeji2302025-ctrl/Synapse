# CHAPTER ONE
# INTRODUCTION

## 1.1 Background to the Study

Smartphones go wherever their owners go, and they record much of how each day is spent. Every app opened, message checked and page visited leaves a small trace with a time attached. Taken together, these traces show the shape of a person's day [@caolin2017; @li2022]. That shape differs from one person to the next. In a study of more than 100,000 Android users, app use alone sorted people into hundreds of distinct groups [@zhao2016]. No one pattern fits everyone, so each person's day has to be read on its own terms. For that reason the phone is a rich record of everyday behaviour. Because it is always at hand, it is also a natural place to support people through their day [@sarker2021].

Such support matters a great deal to university students, for whom the way time is spent has clear consequences. A meta-analysis that pooled many studies linked good time management with better performance and wellbeing [@aeon2021]. Managing that time is not simple. Lectures, private study, social life and rest all compete for the same hours, often with little structure. The phone sits in the middle of this mix and serves learning and distraction alike. The balance matters, since a review of research on smartphone use found that heavier use tends to go with weaker academic results [@amez2020]. In Nigeria, a study across three universities examined how undergraduates use the internet and how this relates to their performance [@musa2026].

Students already use digital tools to manage their days. Calendars and reminder apps hold plans, though only the plans that users type in themselves. Voice assistants such as Siri, Alexa and Google Assistant answer questions and carry out commands, but only when asked [@hoy2018]. Digital self-control tools track screen time and help people cut down their device use [@monge2023]. One time management app for students reduced stress and improved planning; it still depended on tasks entered by hand [@alhasani2025]. Study reminders sent to students' phones have helped their studying in some cases and hindered it in others [@nobbe2024]. Each tool helps in part. None of them learns how a student's day actually runs.

Research has gone further and built systems that learn routines from phone data. Some model a routine as the action a person usually takes in a given situation [@banovic2016]. Others track daily routines through Android apps built for research studies [@beierle2018]. Many such systems split the day into fixed time slots, the same for every user [@sarker2018seg]. Fixed slots hide how differently people live. Habits also change over time, so recent behaviour should count for more than old behaviour [@sarker2019recency]. Work on detecting those changes from phone use is still at an early stage [@koch2020]. Most of these systems also stop at measuring or predicting behaviour, without guiding the user [@banovic2016; @beierle2018].

A further gap lies in where the data comes from. People move between phones, laptops and web browsers within a single day [@brudy2019], yet routine studies usually draw on one device. One study did combine screen time from phones and computers, but it made no attempt to learn routines from it [@rooksby2016]. Privacy is the other concern. Mobile apps still track their users widely, even after data protection laws came into force [@kollnig2021]. Worry about privacy also makes people unwilling to share data with phone-based studies [@roberts2022]. So a system that learns routines has to collect only what each user agrees to, and make that choice easy to see.

Recent advances in artificial intelligence (AI) allow a new form of support. Large language models (LLMs) can hold natural conversations and explain information in plain language [@kasneci2023]. People also expect AI assistants to take some initiative, although how much they want varies from person to person [@meurisch2020]. Timing counts as well: suggestions are welcome only in the right circumstances, and badly timed ones can annoy users [@zargham2022]. This project draws these strands together in a system called Synapse. With the student's consent, Synapse records their phone and web activity, learns their routines as those routines change and guides them through the day. The next section states the specific problem this study addresses.

## 1.2 Statement of the Problem

Students have no tool that learns their daily routines from what they actually do. Calendars, reminder apps and assistants act only on what users type in or ask for [@hoy2018; @alhasani2025]. Reminders on fixed schedules ignore each student's own rhythm, and their effects on studying are mixed [@nobbe2024]. The research systems that do learn routines often rely on fixed time slots shared by all users [@sarker2018seg]. Many also give old behaviour the same weight as recent behaviour [@sarker2019recency]. Their picture of a routine therefore grows stale as habits shift across a semester. Such systems also tend to stop at measuring behaviour and leave the student without guidance [@banovic2016].

The second part of the problem is the data these systems use. Students move between phones and web browsers throughout the day [@brudy2019]. Routine-learning work usually draws on a single device, though, so the routine it sees is incomplete [@rooksby2016]. Many apps also collect personal data without meaningful consent, which leaves people wary of sharing it [@kollnig2021; @roberts2022]. What is needed is a system that collects smartphone and web activity only with each user's consent. That system must learn routines that adapt over time and turn them into timely guidance. It must also be shown to be accurate, usable and acceptable to the students it serves.

## 1.3 Aim and Objectives

The aim of this project is to design and implement an adaptive routine learning system using smartphone and web activity data.

The objectives of the project are:

1. To identify the requirements of an adaptive routine learning system.
2. To collect smartphone and web activity data from consenting student participants.
3. To design the system's architecture, data model and routine-learning model.
4. To implement the system as an Android application and a web application backed by a cloud database.
5. To evaluate the system's routine-detection accuracy, usability, flexibility and user satisfaction.

## 1.4 Methodology

Each objective has its own method and its own result. The requirements come from a review of related literature and existing systems, which shows what similar systems do and what they lack. Activity data is then collected, through an Android app and a web browser extension, from students who agree to take part. The design follows from the requirements and is drawn up in standard diagrams. Building happens in short development cycles; each cycle ends in a working version that can be tested [@hoda2018]. Last, the system is evaluated with the participating students for its accuracy, usability and flexibility, and for their satisfaction with it. Table 1.1 links each objective to its method and result.

Table 1.1: Objectives, methods and results

| Objective | Methodology | Result |
| --- | --- | --- |
| 1. To identify the requirements | Review of related literature and existing systems | A list of functional and non-functional requirements |
| 2. To collect the data | A consent screen; an Android app that records app usage; a browser extension that records websites visited, over a set study period | A dataset of consented activity records |
| 3. To design the system | Architecture, use case, entity-relationship and sequence diagrams; design of the routine-learning steps | Design documents and diagrams |
| 4. To implement the system | Kotlin for the Android app, React for the web app and Supabase for the cloud database, built in short cycles | A working Android app, web app and backend |
| 5. To evaluate the system | Comparison of detected routines with routines participants confirm; System Usability Scale questionnaire; a test of how quickly routines adapt; acceptance and satisfaction questionnaire | Accuracy, usability, flexibility and satisfaction results |

## 1.5 Scope of the Study

This study covers a system for students of [University] who agree to take part. On Android phones the system records app usage, and in a web browser it records the websites visited. Even then it records only the categories of activity that each user enables, and nothing outside them. Each user's records are kept apart from everyone else's in a cloud database. From these records the system learns daily and weekly routines, along with sequences of actions that usually follow one another. Those routines are the basis for its suggestions, for a morning brief of the day ahead and for an end-of-day report. Users may also link other services they choose, such as a calendar. They can export or delete all of their data at any time.

Beyond these functions, the system must keep each user's data private. It never records passwords, personal identification numbers (PINs) or card details. It must also stay easy to use and keep working without a network connection; records collected offline are sent once the connection returns. Some things fall outside the study. It does not cover iPhones, or computer activity outside the web browser, and it does not record the content of screens or what users type. The system does not act on the user's behalf, and the study does not measure health or academic grades. These limits keep the work on routine learning and guidance, which is what the time available allows.

The project is feasible within the time and resources available to it. The system is built with free or free-tier tools: Android Studio, the React library and the free plan of the Supabase cloud database. The guide calls a free online language model from the server, so no paid licence is needed. No app store approval is needed either, because the Android app is installed directly on participants' phones for the study. The routine-learning methods chosen need only a few weeks of records, which a single study period provides. Each part is developed and tested in short cycles, as described in Section 1.4. Progress can therefore be checked at every stage of the project [@hoda2018].
