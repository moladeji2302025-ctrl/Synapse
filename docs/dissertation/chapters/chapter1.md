# CHAPTER ONE
# INTRODUCTION

## 1.1 Background to the Study

Smartphones now go wherever their owners go, and they record much of how each day is spent. Every app opened, message checked and page visited leaves a small trace with a time attached. Taken together, these traces reveal the shape of a person's day [@caolin2017; @li2022]. A study of more than 100,000 Android users found that people fall into hundreds of distinct groups by their app use [@zhao2016]. Each person's day therefore follows its own pattern, rather than one pattern shared by everyone. This makes the phone a rich source for understanding everyday behaviour. It also makes the phone a natural place to support people as they move through their day [@sarker2021].

University students are one group for whom such support matters a great deal. For them, the way time is spent has clear consequences. A meta-analysis that combined many studies linked good time management with better performance and wellbeing [@aeon2021]. Students divide their days between lectures, private study, social life and rest, often with little structure. Their phones sit at the centre of this mix, serving both learning and distraction. A review of research on smartphone use found that heavier use tends to go with weaker academic results [@amez2020]. In Nigeria, a study across three universities examined how undergraduates use the internet and how this relates to their performance [@musa2026].

To manage their days, students already rely on a range of digital tools. Calendars and reminder apps hold plans, but only the plans that users type in themselves. Voice assistants such as Siri, Alexa and Google Assistant answer questions and carry out commands when asked [@hoy2018]. Digital self-control tools track screen time and help people limit their device use [@monge2023]. A time management app for students reduced stress and improved planning, yet it depended on tasks entered by hand [@alhasani2025]. Study reminders sent to students' phones have shown both helpful and unhelpful effects on their studying [@nobbe2024]. Each tool helps in part, but none of them learns how a student's day actually runs.

Research has gone further by building systems that learn routines from phone data. Some model a routine as the action a person usually takes in a given situation [@banovic2016]. Others track daily routines through dedicated Android apps built for research studies [@beierle2018]. Many such systems divide the day into fixed time slots that are the same for every user [@sarker2018seg]. Fixed slots hide how differently people live. Habits also change over time, so recent behaviour should count for more than old behaviour [@sarker2019recency]. Work on detecting such changes from phone use is still at an early stage [@koch2020]. Most of these systems measure or predict behaviour rather than guide the user [@banovic2016; @beierle2018].

A further gap lies in where the data comes from. In a single day, people move between phones, laptops and web browsers [@brudy2019]. Yet routine studies usually draw on one device. A study that combined screen time from phones and computers did not attempt to learn routines from it [@rooksby2016]. Privacy adds another concern to this picture. Mobile apps continue to track their users widely, even after data protection laws came into force [@kollnig2021]. Worries about privacy also make people unwilling to share data with phone-based studies [@roberts2022]. A system that learns routines must therefore collect only what each user agrees to, and make that choice easy to see.

Recent advances in artificial intelligence (AI) make a new kind of support possible. Large language models (LLMs) can hold natural conversations and explain information in plain language [@kasneci2023]. People also expect AI assistants to take some initiative, though how much they want varies from person to person [@meurisch2020]. Suggestions are welcome only in the right circumstances, and poorly timed ones can annoy users [@zargham2022]. This project brings these strands together in a system called Synapse. Synapse records a student's phone and web activity with their consent, learns their routines as they change, and guides them through the day. The next section states the specific problem this study addresses.

## 1.2 Statement of the Problem

Students lack a tool that learns their daily routines from what they actually do. Existing calendars, reminder apps and assistants act only on what users type in or ask for [@hoy2018; @alhasani2025]. Reminders on fixed schedules ignore each student's own rhythm, and their effects on studying are mixed [@nobbe2024]. Research systems that do learn routines often rely on fixed time slots shared by all users [@sarker2018seg]. Many of them also weigh old and recent behaviour equally [@sarker2019recency]. Their picture of a routine therefore grows stale as habits change across a semester. Such systems also tend to stop at measuring behaviour, without guiding the student [@banovic2016].

The data such systems use is a second part of the problem. Students move between phones and web browsers throughout the day [@brudy2019]. Routine-learning work, however, usually draws on a single device, so the routine it sees is incomplete [@rooksby2016]. Many apps also collect personal data without meaningful consent, which makes people wary of sharing it [@kollnig2021; @roberts2022]. There is therefore a need for a system that collects smartphone and web activity only with each user's consent. That system must learn routines that adapt over time and turn them into timely guidance. It must also be shown to be accurate, usable and acceptable to the students it serves.

## 1.3 Aim and Objectives

The aim of this project is to design and implement an adaptive routine learning system using smartphone and web activity data.

The objectives of the project are:

1. To identify the requirements of an adaptive routine learning system.
2. To collect smartphone and web activity data from consenting student participants.
3. To design the system's architecture, data model and routine-learning model.
4. To implement the system as an Android application and a web application backed by a cloud database.
5. To evaluate the system's routine-detection accuracy, usability, flexibility and user satisfaction.

## 1.4 Methodology

Each objective is met through a specific method that produces a specific result. The requirements come from a review of related literature and existing systems, which shows what similar systems do and what they lack. Activity data is then collected from students who agree to take part, through an Android app and a web browser extension. The design follows from the requirements and is expressed in standard diagrams. The system is then built in short development cycles, each ending in a working version that can be tested [@hoda2018]. Finally, the system is evaluated with the participating students against its accuracy, usability, flexibility and their satisfaction. Table 1.1 links each objective to its method and result.

Table 1.1: Objectives, methods and results

| Objective | Methodology | Result |
| --- | --- | --- |
| 1. To identify the requirements | Review of related literature and existing systems | A list of functional and non-functional requirements |
| 2. To collect the data | A consent screen; an Android app that records app usage; a browser extension that records websites visited, over a set study period | A dataset of consented activity records |
| 3. To design the system | Architecture, use case, entity-relationship and sequence diagrams; design of the routine-learning steps | Design documents and diagrams |
| 4. To implement the system | Kotlin for the Android app, React for the web app and Supabase for the cloud database, built in short cycles | A working Android app, web app and backend |
| 5. To evaluate the system | Comparison of detected routines with routines participants confirm; System Usability Scale questionnaire; a test of how quickly routines adapt; acceptance and satisfaction questionnaire | Accuracy, usability, flexibility and satisfaction results |

## 1.5 Scope of the Study

This study covers a system for students of [University] who agree to take part. The system records app usage on Android phones and the websites visited in a web browser. It records only the categories of activity that each user enables. Each user's records are stored separately in a cloud database. From these records, the system learns daily and weekly routines and sequences of actions that usually follow one another. It offers suggestions based on these routines, a morning brief of the day ahead and an end-of-day report. Users may also link other services they choose, such as a calendar. They can export or delete all of their data at any time.

The system must keep each user's data private, and it never records passwords, personal identification numbers (PINs) or card details. It must remain easy to use and keep working without a network connection, sending its records once the connection returns. The study does not cover iPhones, or computer activity outside the web browser. It does not record the content of screens or what users type. The system does not act on the user's behalf, and the study does not measure health or academic grades. These limits keep the work focused on routine learning and guidance, which the time available allows.

The project is feasible within the time and resources available to it. It is built with free or free-tier tools: Android Studio, the React library and the free plan of the Supabase cloud database. The guide uses a free online language model reached from the server, so no paid licence is needed. The Android app is installed directly on participants' phones for the study, so no app store approval is required. The routine-learning methods chosen work from a few weeks of records, which fits a single study period. Each part is developed and tested in short cycles, so progress can be checked throughout the project [@hoda2018].
