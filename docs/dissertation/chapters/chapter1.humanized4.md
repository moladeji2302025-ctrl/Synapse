# CHAPTER ONE
# INTRODUCTION

## 1.1 Background to the Study

Smartphones now go wherever their owners go, and in doing so they record much of how the day is spent. Every app opened, message checked and page visited leaves a small trace with a time attached. Taken together, these traces reveal the shape of a person's day [@caolin2017; @li2022]. That shape is far from uniform. In a study of over 100,000 Android users, people fell into hundreds of distinct groups according to their app use [@zhao2016]. Consequently, a person's day is better understood as following a pattern of its own than as following one shared by everyone. The phone is thus a good source of evidence about everyday behaviour. For the same reason, it is a natural place to support people as they move through their day [@sarker2021].

For university students, the way time is spent has clear consequences, which makes such support particularly relevant to them. A meta-analysis that combined many studies linked good time management with wellbeing as well as with better performance [@aeon2021]. Students divide their days between lectures, private study, social life and rest, and these days often have little structure. Their phones sit at the centre of this mix and are used both for study and for distraction. A review of studies on smartphone use found that heavier use tends to go with weaker academic results [@amez2020]. In Nigeria, a study across three universities examined how undergraduates use the internet and how this relates to academic performance [@musa2026].

Students already rely on a range of tools to plan their days, and each of these helps, at least in part. Calendars and reminder apps hold only the plans that users type in themselves. Voice assistants such as Siri, Alexa and Google Assistant answer questions and carry out commands when asked, rather than on their own initiative [@hoy2018]. Digital self-control tools track screen time and help people limit their device use [@monge2023]. A time management app for students improved planning as well as reducing stress, though it depended on tasks entered by hand [@alhasani2025]. Study reminders sent to students' phones have had helpful effects on studying in some cases and unhelpful effects in others [@nobbe2024]. None of them, however, learns how a student's day actually runs.

Several research projects have gone further and built software that learns routines from phone data. Some model a routine as the action a person usually takes in a given situation [@banovic2016]. Others track daily routines through Android apps built for research studies [@beierle2018]. Many divide the day into fixed time slots that are the same for every user [@sarker2018seg]. Fixed slots hide how differently people live. Habits are not fixed either, so recent behaviour should weigh more than old behaviour [@sarker2019recency]. Work on detecting such changes from phone use is still at an early stage [@koch2020]. Most of this work measures or predicts behaviour and does not guide the user [@banovic2016; @beierle2018].

A further gap lies in where the data comes from. People move between phones, laptops and web browsers in a single day [@brudy2019], whereas routine studies usually draw on one device. One study did combine screen time from phones and computers, yet it made no attempt to learn routines from it [@rooksby2016]. Privacy adds a second concern. Mobile apps still track their users widely, even after data protection laws came into force [@kollnig2021]. Worries about privacy, in turn, make people unwilling to share data with phone-based studies [@roberts2022]. A system that learns routines thus has to collect only what each user agrees to, and to make that choice easy to see.

Developments in artificial intelligence (AI) now make a new form of support possible. Large language models (LLMs), in particular, can talk with people in natural language and explain information plainly [@kasneci2023]. People also expect AI assistants to take some initiative, although how much they want varies from person to person [@meurisch2020]. Suggestions are welcome only in the right circumstances, and poorly timed ones can annoy users [@zargham2022]. This project combines these strands in one system, called Synapse. With the student's consent, Synapse records their phone and web activity, learns their routines as they change and guides them through the day. The next section states the specific problem this study addresses.

## 1.2 Statement of the Problem

Students lack a tool that learns their daily routines from what they actually do. Existing calendars, reminder apps and assistants act only on what users type in or ask for [@hoy2018; @alhasani2025]. Reminders on fixed schedules ignore each student's own rhythm, and their effects on studying are mixed [@nobbe2024]. Where research systems do learn routines, fixed time slots shared by all users are common [@sarker2018seg]. Many of them also weigh old and recent behaviour equally [@sarker2019recency]. As a result, their picture of a routine grows stale as habits change across a semester. Such systems also tend to stop at measuring behaviour and do not go on to guide the student [@banovic2016].

The data such systems use is a second part of the problem. Students move between phones and web browsers throughout the day [@brudy2019]. Routine-learning work, however, usually draws on a single device, so the routine it sees is incomplete [@rooksby2016]. Many apps also collect personal data without meaningful consent, which makes people wary of sharing it [@kollnig2021; @roberts2022]. What is needed, accordingly, is a system that collects smartphone and web activity only with each user's consent. That system has to keep each routine up to date as habits change, and use it to guide the student at the right time. It has to be shown, moreover, to be accurate, usable and acceptable to the students who use it.

## 1.3 Aim and Objectives

The aim of this project is to design and implement an adaptive routine learning system using smartphone and web activity data.

The objectives of the project are:

1. To identify the requirements of an adaptive routine learning system.
2. To collect smartphone and web activity data from consenting student participants.
3. To design the system's architecture, data model and routine-learning model.
4. To implement the system as an Android application and a web application backed by a cloud database.
5. To evaluate the system's routine-detection accuracy, usability, flexibility and user satisfaction.

## 1.4 Methodology

Each objective is met through a specific method that produces a specific result. The requirements come from a review of related literature and existing systems; it shows what similar systems do and what they lack. Activity data is then collected from students who agree to take part, through an Android app and a web browser extension. The design follows from the requirements and is expressed in standard diagrams. Building happens in short development cycles, and each cycle ends in a working version that can be tested [@hoda2018]. Finally, the system is evaluated with the participating students for its accuracy, usability and flexibility, and for their satisfaction with it. Table 1.1 links each objective to its method and result.

Table 1.1: Objectives, methods and results

| Objective | Methodology | Result |
| --- | --- | --- |
| 1. To identify the requirements | Review of related literature and existing systems | A list of functional and non-functional requirements |
| 2. To collect the data | A consent screen; an Android app that records app usage; a browser extension that records websites visited, over a set study period | A dataset of consented activity records |
| 3. To design the system | Architecture, use case, entity-relationship and sequence diagrams; design of the routine-learning steps | Design documents and diagrams |
| 4. To implement the system | Kotlin for the Android app, React for the web app and Supabase for the cloud database, built in short cycles | A working Android app, web app and backend |
| 5. To evaluate the system | Comparison of detected routines with routines participants confirm; System Usability Scale questionnaire; a test of how quickly routines adapt; acceptance and satisfaction questionnaire | Accuracy, usability, flexibility and satisfaction results |

## 1.5 Scope of the Study

This study covers a system for students of [University] who agree to take part. It records app usage on Android phones and the websites visited in a web browser, though only for the categories each user enables. Nothing outside those categories is captured. Each user's records are kept apart from everyone else's in a cloud database. From these records, the system learns daily and weekly routines, as well as sequences of actions that usually follow one another. These routines are the basis for its suggestions, for a morning brief of the day ahead and for an end-of-day report. Users may also link other services they choose, such as a calendar, and they can export or delete all of their data at any time.

The system has to keep each user's data private, and it never records passwords, personal identification numbers (PINs) or card details. It has to remain easy to use and keep working without a network connection; records collected offline are sent once the connection returns. The study leaves out iPhones, along with any computer activity outside the web browser. The system also records neither the content of screens nor what users type. It does not act on the user's behalf, and the study does not measure health or academic grades. These limits keep the work focused on learning routines and turning them into guidance, which is what the time available allows.

The project is feasible within the time and means available to it. The system is built with free or free-tier tools: Android Studio, the React library and the free plan of the Supabase cloud database. The guide calls a free online language model from the server, so no paid licence is needed. No app store approval is required either, because the Android app is installed directly on participants' phones for the study. The routine-learning methods chosen work from a few weeks of records, which fits a single study period. Each part is developed and tested in short cycles, so progress can be checked throughout the project [@hoda2018]. None of these choices, then, depends on resources the project lacks.
