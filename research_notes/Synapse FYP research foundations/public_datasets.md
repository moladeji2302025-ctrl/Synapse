# Public datasets of smartphone usage and daily behaviour for Synapse

All web pages were accessed on **2026-11-13** unless stated otherwise. "Older than 10 years" means the collection or the introducing paper is from before 2016. "Unreachable" means the official host refused the connection from the research environment on 2026-11-13 (`ECONNREFUSED`, or HTTP 000 from curl). That may be a temporary outage, so check again before writing it up as "withdrawn".

---

## 1. What each candidate dataset contains (scope overview)

### Takeaway
Only four candidates release **per-event app-usage logs that anyone can download**: LSApp, the Tsinghua App Usage Dataset, the Carat Top-1000 dataset and LiveLab. Two more, StudentLife and Reality Mining, are open multi-sensor studies with an app-usage stream inside them. GLOBEM has no per-app data at all. MDC and K-EmoPhone sit behind agreements. Device Analyzer appears to be offline. Frappe holds context-aggregated counts, not a time series.

### Cited Findings
- **LSApp** (Aliannejadi et al.): sequential app-usage log with user_id, session_id, timestamp, app_name and event_type (Opened / Closed / User Interaction / Broken). 292 users, 599,635 records, 76,247 sessions, 87 unique apps — [LSApp GitHub](https://github.com/aliannejadi/LSApp)
- LSApp is also mirrored on IEEE DataPort as "LSApp: large dataset of sequential mobile app usage" — [IEEE DataPort](https://ieee-dataport.org/documents/lsapp-large-dataset-sequential-mobile-app-usage)
- **Tsinghua App Usage Dataset** (Yu et al., 2018): one week of app-usage records for 1,000 users in "one of the biggest cities of China". It covers 2,000 identified apps, 9,800 base stations, 20 app categories and 17 POI categories. Each record holds user, timestamp, base-station location, app and traffic — [Tsinghua FIB lab page](https://fi.ee.tsinghua.edu.cn/appusage/)
- **Carat Top 1000 Users Long-Term App Usage Dataset**: time series of running apps, each with foreground/background priority, plus battery level, battery status, time zone and mobile country code. The 1,000 longest-running Carat Android users are included: 4.65 years for the longest user and more than 2 years for the 1,000th. There are 18,146,042 records from users in 100+ countries — [Carat data-sharing page](https://www.cs.helsinki.fi/group/carat/data-sharing)
- **LiveLab** (Rice University): iPhone 3GS traces split into tables `apps`, `appusage`, `call`, `sleep`, `display`, `charging`, `power_detail`, `accel`, `iostat`, `celltower`, `cellsignal`, `associatedwifi`, `availablewifi`, `loggeron` and `web` (Safari history) — [LiveLab traces page](https://www.yecl.org/livelab/traces.html)
- The LiveLab cohort was 24 Rice University students (Feb 2010–Feb 2011) and 10 Houston Community College students (Sep 2010–Feb 2011) — [LiveLab project page, via search](https://yecl.org/livelab/); [Rahmati et al., "Tales of 34 iPhone Users"](https://arxiv.org/pdf/1106.5100)
- **StudentLife** (Dartmouth, 2013): the app infers activity (stationary, walking, running, driving, cycling), sleep and conversation. It also collects accelerometer, proximity, audio, light sensor, location, co-location and **application usage**, along with EMA and survey data — [Wang et al. 2014 paper PDF](https://www.cs.columbia.edu/~xia/publication/ubicomp14-studentlife/ubicomp14-studentlife.pdf)
- The StudentLife dataset page lists these sensing subfolders: activity, audio, conversation, bluetooth, dark, gps, phonecharge, phonelock, wifi and wifi_location. It also mentions screen lock/unlock, phone charge and app usage among other phone data — [StudentLife dataset page, as indexed by search](https://studentlife.cs.dartmouth.edu/dataset.html)
- **GLOBEM** (University of Washington, 2018–2021): **feature-level** data only, not raw streams. Sensors are location, phone screen status, calls, Bluetooth, Fitbit steps and sleep, plus Wi-Fi with high missingness. Surveys cover depression, personality and EMA. The documentation describes no per-app usage — [PhysioNet GLOBEM v1.1](https://physionet.org/content/globem/1.1/)
- **MIT Reality Mining** (2004–2005): Nokia 6600 phones ran ContextLog continuously. It logged cell-tower IDs, Bluetooth scans every 5 minutes, voice calls and texts, **active applications (such as the calendar or games)** and charging status — [Reality Mining README](https://www.cse.iitk.ac.in/users/nsrivast/HCC/RealityMining_ReadMe.pdf)
- **Nokia MDC / LDCC** (2009–2011): Nokia N95 phones. Files are `accel.csv`, `application.csv`, `bluetooth.csv`, `calendar.csv`, `calllog`, `contacts.csv`, `gsm.csv`, `mediaplay.csv`, `media.csv`, `process.csv`, `sys.csv` and `wlan.csv`. The Open Track adds GPS and WLAN-derived location — [Laurila et al. 2012 MDC paper PDF](https://infoscience.epfl.ch/record/192489/files/Laurila_MDC_2012.pdf)
- **K-EmoPhone** (KAIST, 2023): 77 students over 7 days. It combines wearable physiological signals, smartphone context and interaction data, and 5,582 ESM labels for emotion, stress, attention and disturbance — [Zenodo record 7606611](https://zenodo.org/records/7606611). Search snippets of the paper say the smartphone data covers app usage, screen, charging, mobility, network traffic and social communication — [Kang et al. 2023, via search](https://ic.kaist.ac.kr/files/papers/kang2023k.pdf)
- **Device Analyzer** (Cambridge): a time-series log of more than 200 event types. Contributors shared charging, call and text counts and lengths, and which apps they used. The data came from 16,000+ contributors on 1,277 device types in 175 countries over two years — [Wagner et al. "Device Analyzer" PDF, via search](https://www.cl.cam.ac.uk/~acr31/pubs/wagner-understanding.pdf)
- **Frappe** (Baltrunas et al.): logs from a context-aware app recommender. The background service sampled the foreground app once per minute, and context was abstracted on the server (home/work, country, city, weather) — [Baltrunas et al. 2015, arXiv:1505.03014](https://arxiv.org/abs/1505.03014)
- **College Experience Study (CES)** (Dartmouth, 2017–2022): about 215–217 students. Passive sensing covers mobility, physical activity, sleep and phone usage, plus EMA. It was released in 2024 — [search summary of Nepal et al. 2024 and arXiv works](https://arxiv.org/html/2503.08002v2); Kaggle link reported by [phys.org](https://phys.org/news/2024-03-tracks-shifts-student-mental-health.pdf)
- **Other newer datasets found**:
  - Smartphone usage dataset: 12 weeks, 113 older adults, 31 of them with cognitive impairment. DOI 10.57702/x8bsajnk — [TIB](https://service.tib.eu/ldmservice/dataset/smartphone-usage-dataset)
  - "Mobile App Usage Log Data": created January 2025, contents undescribed — [TIB](https://service.tib.eu/ldmservice/dataset/mobile-app-usage-log-data)
  - DTU urban/rural smartphone usage: aggregated category-level fractions for 454,018 people, not raw events — [DTU data](https://data.dtu.dk/articles/dataset/Data_for_Exposure_to_urban_and_rural_contexts_shapes_smartphone_usage_behavior_/24316516)
  - "App usage behavior modeling and prediction" — [IEEE DataPort](https://ieee-dataport.org/documents/app-usage-behavior-modeling-and-prediction)
  - MIRAGE-AppAct-2024: labelled network traffic of 20 apps, CC BY-NC-ND 4.0 — [UniNa](https://traffic.comics.unina.it/mirage/mirage-2024.html)
- The 2022 IEEE COMST survey by Li et al. reviews **nine publicly available app-usage datasets** and four collection methods: surveys, monitoring apps, network operators and app stores. Use it as the authoritative survey to cite for the dataset landscape — [Li et al. 2022, IEEE Xplore](https://ieeexplore.ieee.org/document/9745583); [AMiner summary](https://www.aminer.org/pub/627e31bf5aee126c0fa23c2e/smartphone-app-usage-analysis-datasets-methods-and-applications)

### Inferences
- Synapse's own schema is (user ID, device, timestamp, event type, app name, duration, weekday/hour/month, coarse place). The closest public match is **LSApp**, which has user, session, timestamp, app and open/close/interaction events, so durations can be derived. The **Tsinghua** dataset is next, adding coarse place through base-station IDs and POI counts. **LiveLab** is the only one that also has **web history** (`web` table: uid, time, count, url), which matches Synapse's web-activity stream, but it dates from 2010–11.
- For "app usage alongside the rest of daily life" (activity, sleep, location, screen lock), StudentLife and CES are the strongest open multi-sensor choices.

### Gaps
- I could not open the Li et al. (2022) survey full text, so I cannot list which nine datasets it counts as public.
- I could not open the CES Kaggle page. Its files, app-level contents, licence and access terms are unverified.
- "Mobile App Usage Log Data" (TIB) and the IEEE DataPort "app usage behavior modeling and prediction" entry: contents not checked.

---

## 2. Participants, collection period, number of records, file formats

### Takeaway
The datasets range from 34 users over a year (LiveLab) to 1,000 users over 2–4.6 years (Carat). The most practical sizes for an FYP are LSApp (292 users, about 15 days each, 600k rows, a single TSV) and Tsinghua (1,000 users, 1 week, text files).

### Cited Findings
- **LSApp**:
  - 292 participants; mean 15 days per user; 599,635 records; 76,247 sessions; 87 apps — [LSApp GitHub](https://github.com/aliannejadi/LSApp)
  - Ships as a compressed `lsapp.tsv`, with a train/validation/test split of 464,903 / 66,300 / 132,751. Example timestamps are from January 2018 — [LSApp GitHub](https://github.com/aliannejadi/LSApp)
  - Collected through the uSearch Android app. Participants ran it for at least 24 hours and self-reported their mobile searches — [LSApp GitHub](https://github.com/aliannejadi/LSApp)
- **Tsinghua**:
  - 1,000 users; one week; 2,000 apps; 9,800 base stations — [Tsinghua page](https://fi.ee.tsinghua.edu.cn/appusage/)
  - Files: `App_Usage_Trace.txt`, `App2Category.txt`, `Categories.txt`, `base_poi.txt`. The page does not state a total record count — [Tsinghua page](https://fi.ee.tsinghua.edu.cn/appusage/)
  - Collected from a mobile operator's network traffic (HTTP records); apps were identified with the SAMPLES method — [Tsinghua page](https://fi.ee.tsinghua.edu.cn/appusage/)
- **Carat**:
  - Top 1,000 users by duration of Carat use since 2014; 18,146,042 time-series records; 100+ countries and 315 time zones — [Carat page](https://www.cs.helsinki.fi/group/carat/data-sharing)
  - Archive `carat-data-top1k-users-2014-to-2018-08-25.zip`. The app-usage time series covers the top 10,000 apps, and app categories are CSV (`processName;categoryName`) — [Carat page](https://www.cs.helsinki.fi/group/carat/data-sharing)
- **LiveLab**:
  - 34 iPhone 3GS users: 24 at Rice University (Feb 2010–Feb 2011) and 10 at Houston Community College (Sep 2010–Feb 2011) — [LiveLab, via search](https://yecl.org/livelab/)
  - Format: one `.sql` file per table (MySQL), distributed as `.tar.gz`; web usage also comes as a CSV zip. The page was last updated 15 Jul 2012 — [LiveLab traces](https://www.yecl.org/livelab/traces.html)
  - **Older than 10 years.**
- **StudentLife**:
  - 48 students completed the study (60 joined), from the Dartmouth CS65 Smartphone Programming class in the 10-week Spring 2013 term — [Wang et al. 2014 PDF](https://www.cs.columbia.edu/~xia/publication/ubicomp14-studentlife/ubicomp14-studentlife.pdf)
  - 52.6 GB of sensing-inference data and 35,295 EMA/PAM responses. Of the 48, 11 used the study Android phone as their primary phone and 37 as a secondary phone — [Wang et al. 2014 PDF](https://www.cs.columbia.edu/~xia/publication/ubicomp14-studentlife/ubicomp14-studentlife.pdf)
  - Per-participant CSV files under each sensor subfolder — [StudentLife dataset page, via search](https://studentlife.cs.dartmouth.edu/dataset.html)
  - The `studentlife` R package downloads the full dataset (README says about 5 GB compressed). It also offers an RData version on Zenodo (record 3529253, as of 2019) — [frycast/studentlife GitHub](https://github.com/frycast/studentlife)
  - **Older than 10 years.**
- **GLOBEM**:
  - Four 10-week Spring-quarter studies (DS1–DS4, 2018–2021) with 155, 218, 137 and 195 participants: 705 person-years from 497 unique people at one US R1 university — [PhysioNet](https://physionet.org/content/globem/1.1/)
  - 58.9% female; Asian 53.9%, White 31.9% — [PhysioNet](https://physionet.org/content/globem/1.1/)
  - CSV files indexed by pid and date. Includes `rapids.csv` and per-sensor feature files (location, screen, call, bluetooth, steps, sleep, wifi), `platform.csv` (iOS/Android), and survey CSVs (pre, post, ema, dep_weekly, dep_endterm) — [PhysioNet](https://physionet.org/content/globem/1.1/)
- **Reality Mining**:
  - 94 subjects completed the January 2005 survey out of 106 in the release. Of these, 68 worked in the same building (90% grad students, 10% staff) and 26 were incoming business-school students — [README](https://www.cse.iitk.ac.in/users/nsrivast/HCC/RealityMining_ReadMe.pdf)
  - The 2006 paper describes 100 users: 75 from the Media Lab and 25 from Sloan — [search summary of Eagle & Pentland 2006](https://ial.eecs.ucf.edu/Reading/Papers/realitymining.pdf)
  - Period Sep 2004–Jun 2005, about 9 months; logs cover about 85.3% of deployed time; MATLAB survey/network data — [README](https://www.cse.iitk.ac.in/users/nsrivast/HCC/RealityMining_ReadMe.pdf)
  - **Older than 10 years.**
- **MDC/LDCC**:
  - Data collection ran October 2009–March 2011. Close to 200 volunteers took part (185 participants: 38% female, 62% male; about two-thirds aged 22–33) — [Laurila et al. 2012](https://infoscience.epfl.ch/record/192489/files/Laurila_MDC_2012.pdf)
  - The MDC release covered 152 participants: Set A/C for 80 users, Set B for 34 users, and the Open Challenge set for 38 users (8,154 user-days). Data came as CSV tables, each row a record with user ID and timestamp — [Laurila et al. 2012](https://infoscience.epfl.ch/record/192489/files/Laurila_MDC_2012.pdf)
  - **Older than 10 years.**
- **K-EmoPhone**:
  - 77 students, 7 days each; 5,582 self-reports. v1.0.0 had n=80; 3 participants were removed for low quality in v1.1.0 — [Zenodo](https://zenodo.org/records/7606611)
  - Per-participant `P##.zip` plus `SubjData.zip`; UTF-8 encoding, with cp949 possibly needed for Korean text — [Zenodo](https://zenodo.org/records/7606611)
- **Device Analyzer**: 16,000+ contributors, 1,277 device types, 175 countries, over two years of collection — [Wagner et al., via search](https://www.cl.cam.ac.uk/~acr31/pubs/wagner-understanding.pdf). **Older than 10 years** (paper 2014; collection started 2011).
- **Frappe**:
  - A large-scale market deployment with 1,000 Android users plus a local study of 33 users (26 with usable logs) — [Baltrunas et al. arXiv](https://arxiv.org/abs/1505.03014)
  - 2.3M app-usage events were identified over a 2-month snapshot of 2013 — [Baltrunas et al. 2015 PDF](https://arxiv.org/pdf/1505.03014)
  - The download is `Mobile_Frappe.zip` — [baltrunas.info](https://www.baltrunas.info/context-aware/frappe)
  - A Hugging Face mirror (pruned to entries with 5 or more interactions) has 651 users, 1,127 items and 84,373 interactions, and says the pruning removed 31.97% of users. That implies about 957 users in the original — [Hugging Face mirror](https://huggingface.co/datasets/abadesalex/Frappe-mobile-app-usage)
  - **Older than 10 years.**
- **CES**: about 215–217 Dartmouth students, 2017–2022 — [arXiv 2503.08002 summary](https://arxiv.org/html/2503.08002v2)

### Inferences
- From 651 users being a 31.97% reduction, the original Frappe user count works out to about 957. That matches the commonly quoted "96,203 entries, 957 users, 4,082 apps", but only the user count is indirectly supported by a source here.

### Gaps
- Tsinghua total record count: not on the official page.
- Carat file size: not given.
- Frappe original entry and app counts (96,203 / 4,082): not confirmed from a primary source.
- K-EmoPhone exact app-usage file names and format: Zenodo files are restricted and the Nature page was blocked by a login redirect.
- Device Analyzer current size: no current documentation reachable.

---

## 3. Every feature/field: name, meaning, type, example

### Takeaway
LSApp, Tsinghua, Carat, LiveLab and MDC have field-level schemas published openly; they are listed below. StudentLife's per-column schema could not be confirmed this session because the site was unreachable. GLOBEM ships engineered features, not events.

### Cited Findings

**LSApp (`lsapp.tsv`)** — [LSApp GitHub](https://github.com/aliannejadi/LSApp)

| Field | Meaning | Type | Example |
|---|---|---|---|
| user_id | anonymous user identifier | integer | 0 |
| session_id | unique session identifier | integer | 1 |
| timestamp | time of the event | datetime string `YYYY-MM-DD HH:MM:SS` | 2018-01-16 06:01:05 |
| app_name | app name, human-readable | string, categorical (87 values) | Gmail |
| event_type | Opened / Closed / User Interaction / Broken | categorical | Opened |

**Tsinghua App Usage Dataset** — [Tsinghua page](https://fi.ee.tsinghua.edu.cn/appusage/)

| File | Field | Meaning / type |
|---|---|---|
| App_Usage_Trace.txt | User ID | anonymised user ID (integer) |
| | Timestamp | time in seconds (format string per page "Timestamp (Second)") |
| | Location | base station ID (integer; joins to base_poi.txt) |
| | Used App ID | app identifier (integer; joins to App2Category.txt) |
| | Traffic | bytes of network traffic (integer) |
| App2Category.txt | App ID, Category ID | app-to-category mapping |
| Categories.txt | Category ID, English Name | 20 category labels |
| base_poi.txt | Basestation ID, count of POIs per category | 17 POI categories |

**Carat Top-1000** — [Carat page](https://www.cs.helsinki.fi/group/carat/data-sharing)

| Field | Meaning | Type |
|---|---|---|
| uuid | anonymised user ID | string |
| timestamp | UNIX UTC sample time from the phone clock | integer, epoch seconds |
| batteryLevel | battery percentage | numeric |
| batteryStatus | e.g. charging / discharging | categorical |
| timeZone | user's time zone | string |
| mobileCountryCode | MCC of the connected network | integer, coarse country |
| apps[].processName | Android package name | string |
| apps[].priority | process priority, e.g. foreground / background | categorical |
| (registrations) uuid, timestamp, model, osVersion | device and OS history | strings / epoch |
| (categories CSV) processName;categoryName | Google Play primary category | strings |
| (app list CSV) processName;numberOfSamples | top 10,000 apps and their counts | string; integer |

**LiveLab tables** (MySQL dumps) — [LiveLab traces](https://www.yecl.org/livelab/traces.html)
- `apps`: id, name, genre, price
- `appusage`: id, uid, name, time, duration
- `display`: id, uid, time, duration, displayon
- `charging`: id, uid, time, Duration, Charging
- `sleep`: id, uid, time, duration, sleeping
- `loggeron`: id, uid, time, duration
- `call`: uid, rowid, number, time, duration, flags, id
- `celltower`: uid, time, geoid, towerid
- `cellsignal`: uid, time, csq, ber
- `associatedwifi`: uid, time, ssid, bssid, channel, rate, rssi
- `availablewifi`: uid, starttime, time, ssid, bssid, channel, rssi
- `accel`: uid, time, x, y, z
- `power_detail`: id, uid, time, battery, mah, current, charging, charged
- `iostat`: uid, time, disk/cpu/load metrics
- `web`: uid, time, count, url

**MDC common data types** (one CSV table per type; every row has user ID and time) — [Laurila et al. 2012](https://infoscience.epfl.ch/record/192489/files/Laurila_MDC_2012.pdf)
- `application.csv`: user ID, time, event, application unique identifier, application name
- `process.csv`: user ID, record time, path name of running process
- `sys.csv`: user ID, time, current profile (normal/silent …), battery level, charging state, free drive space, elapsed inactive time, ringing type, free RAM
- `gsm.csv`: user ID, time, country and network code, anonymised cell ID, anonymised LAC, signal strength
- `wlan.csv`: user ID, time, MAC OUI (first 3 bytes), anonymised MAC, anonymised SSID, signal level, channel, encryption, mode
- `bluetooth.csv`: user ID, time, MAC OUI, anonymised MAC, anonymised device name
- Call log: call time, type, SMS status, direction, number prefix, anonymised number, in-phonebook flag, duration
- `calendar.csv`: entry ID, status, start time, anonymised title and location, type, class, last-modified time
- `contacts.csv`, `media.csv`, `mediaplay.csv` (album, artist, track, player state, duration), `accel.csv` (motion measure and samples)
- Open Track only: `gps` (GPS time, altitude/longitude/latitude, speed, heading, accuracy/DOP) and `wlan_loc.csv` (WLAN AP longitude/latitude)
- Dedicated Track: location is given as **sequences of place IDs**, each place a circle of 100 m radius, with a coarse distance matrix and 10 semantic place labels (home, workplace/school, transport, restaurant/bar, shop, …)

**Reality Mining** (record examples from the README) — [README](https://www.cse.iitk.ac.in/users/nsrivast/HCC/RealityMining_ReadMe.pdf)
- Phone log: `(TIME) 20060720T211505 (DESCRIPTION) Voice call (DIRECTION) Outgoing (DURATION seconds) 23 (NUMBER) <hashed>`
- Bluetooth: TIME plus a list of device MACs and names
- Location: TIME, CELL AREA, CELL TOWER, SERVICE PROVIDER, USER DEFINED LOCATION NAME (e.g. "My Office")
- Also logged: active applications and charging status. Phone numbers are MD5-hashed.

**Frappe context fields** (Table 1 of the paper; the released file's columns could not be opened) — [Baltrunas et al. 2015 PDF](https://arxiv.org/pdf/1505.03014)
- app: non-system installed apps
- count: number of times the app was used in that context
- daytime: Morning (06–12), Afternoon (12–18), Evening (18–24), Night (00–06)
- weekday: Mon–Sun
- isweekend: Weekend or Working day
- location: Home, Work or Other
- city: boolean, within 20 km of a major city centre
- country: name of the country
- weather: 9 values (Sunny, Cloudy, Foggy, Windy, Drizzle, Rainy, Stormy, Sleet, Snowy)
- battery: Full, High, Medium, Low or Empty
- charging: Battery, USB or AC
- Home is inferred as the most frequent location between 01:00 and 06:00, and work as the most frequent between 09:00 and 18:00 (95% accuracy on 10 pilot users).

**GLOBEM features** — [PhysioNet](https://physionet.org/content/globem/1.1/)
- Features are named `feature_type:feature_name[version]:time_segment`, computed with the RAPIDS pipeline.
- Time segments: morning, afternoon, evening, night, allday, 7-day and 14-day history, weekdays, weekend.
- Each feature comes in raw, normalised and discretised versions.
- Phone usage covers only screen-unlock episodes and their duration/count features.

**StudentLife** — the paper and dataset page confirm activity inference, audio/conversation, Bluetooth, dark (light), GPS, phone charge, phone lock, Wi-Fi, Wi-Fi location, app usage, call/SMS logs (one-way hashed), EMA and surveys — [Wang et al. 2014 PDF](https://www.cs.columbia.edu/~xia/publication/ubicomp14-studentlife/ubicomp14-studentlife.pdf); [dataset page via search](https://studentlife.cs.dartmouth.edu/dataset.html). Confirmed tables in the R package:
- EMA/PAM: `picture_idx`, `timestamp`, `uid` (about 9,040 rows, 49 uids)
- PHQ-9 survey: `uid`, `type` (pre/post), `Q1`–`Q10` (84 rows)
- activity: has an `activity_inference` column
- Source: [frycast/studentlife](https://github.com/frycast/studentlife)

### Inferences
- **Mapping to the Synapse schema**:
  - LSApp `event_type` Opened→Closed pairs give `duration`. `timestamp` gives weekday/hour/month. It has no device or place field.
  - Tsinghua gives `place` (base station plus POI profile) but has no explicit duration; it is traffic-based.
  - Carat gives only foreground/background snapshots at each 1% battery change, so durations are approximate.
  - LiveLab `appusage` already has `duration`, and `web` gives URLs.
- For **action-sequence mining** (Markov or next-app prediction), LSApp's session_id and ordered events are the most direct fit. For **weekly-routine learning**, the one-week Tsinghua trace is too short; LSApp (about 15 days on average), StudentLife (10 weeks), LiveLab (up to 12 months) and Carat (2+ years) suit it better.

### Gaps
- StudentLife `app_usage` file schema. From memory, unverified: files named `running_app_u##.csv` with Android RunningTaskInfo columns such as timestamp and `RUNNING_TASKS_topActivity_mPackage`. The official site was unreachable, so confirm from the downloaded data before citing.
- Tsinghua timestamp format (epoch or yyyymmddhhmmss): the page only says "Timestamp (Second)".
- K-EmoPhone and CES field-level schemas: not accessible.
- Device Analyzer event schema: docs unreachable.

---

## 4. Access, licence/restrictions, and availability as of November 2026

### Takeaway
Four are **immediately downloadable**: LSApp (GitHub), Tsinghua (public page, non-commercial), Carat (password published on the page) and LiveLab (click-through licence). GLOBEM needs PhysioNet credentialing, CITI training and a DUA. K-EmoPhone needs a Zenodo request plus a user agreement with an institutional email. MDC needs an institutional Site Manager and signed agreements. StudentLife, Device Analyzer and Reality Mining all had availability problems on the access date.

### Cited Findings
- **LSApp**: public on GitHub (HTTP 200 on 2026-11-13) and on IEEE DataPort. The repository page states no data licence — [GitHub](https://github.com/aliannejadi/LSApp); [IEEE DataPort](https://ieee-dataport.org/documents/lsapp-large-dataset-sequential-mobile-app-usage)
- **Tsinghua**: "released to the public for research purposes only". Commercial use and re-identification are forbidden, and works must mention "Tsinghua App Usage Dataset". No registration is described. Reachable (HTTP 200) on 2026-11-13 — [Tsinghua page](https://fi.ee.tsinghua.edu.cn/appusage/)
- **Carat**: password-protected ZIP whose password is stated on the page; no registration. Research only, no commercial use, no re-identification. Users must name the dataset and cite Oliner et al. (2013) — [Carat page](https://www.cs.helsinki.fi/group/carat/data-sharing)
- **LiveLab**: non-exclusive, non-transferable licence for commercial, educational or research use. No redistribution without permission, no de-anonymisation, must acknowledge LiveLab and cite Shepard et al. (2010/2011). Downloading means accepting. Page reachable (HTTP 200) on 2026-11-13 — [LiveLab traces](https://www.yecl.org/livelab/traces.html)
- **GLOBEM**: credentialed PhysioNet access with CITI "Data or Specimens Only Research" training and a signed DUA, under the PhysioNet Credentialed Health Data License 1.5.0. Demographics only on special request. Dataset DOI 10.13026/r9s1-s711 (v1.1); latest-version DOI 10.13026/889w-p048 — [PhysioNet](https://physionet.org/content/globem/1.1/)
- **K-EmoPhone**: public Zenodo record with restricted files. Access needs a Zenodo request with justification plus a separate user agreement form; Gmail-type addresses are not accepted; mainly for academic research. Record last modified 19 Feb 2024 — [Zenodo](https://zenodo.org/records/7606611)
- **MDC**: for eligible institutions only. An institutional Site Manager contacts mobiledata.challenge@idiap.ch, and each permitted staff member signs an individual agreement — [Idiap MDC page, via search](https://www.idiap.ch/dataset/mdc); [access documentation page](https://www.idiap.ch/project/mdc/access-to-mdc-dataset-documentation). The original 2012 release required signed Terms and Conditions, was academic-only, and each copy was individually watermarked — [Laurila et al. 2012](https://infoscience.epfl.ch/record/192489/files/Laurila_MDC_2012.pdf). On 2026-11-13, `https://www.idiap.ch/dataset/mdc` redirected to `/en/dataset/mdc`, which returned **HTTP 404** (own curl check). The page may have moved.
- **StudentLife**: the 2014 paper states "The StudentLife dataset is publicly available on the web" — [Wang et al. 2014 PDF](https://www.cs.columbia.edu/~xia/publication/ubicomp14-studentlife/ubicomp14-studentlife.pdf). On 2026-11-13, studentlife.cs.dartmouth.edu was **unreachable** over both HTTPS and HTTP (connection refused). An RData copy was on Zenodo (record 3529253) as of 2019 — [frycast/studentlife](https://github.com/frycast/studentlife). IEEE DataPort also hosts entries (node/14898) that search results associated with StudentLife — [IEEE DataPort](https://ieee-dataport.org/node/14898). Unverified.
- **Device Analyzer**: researchers were directed to deviceanalyzer.cl.cam.ac.uk, and earlier papers say to "contact us" for access — [Lancaster dataset page, via search](https://www.research.lancs.ac.uk/portal/en/datasets/peaks-in-internet-traffic-analysis-of-data-demand-through-timeuse-diaries-and-android-deviceuse(2d3d22fd-61ab-46bf-bb39-7487023cb8d3).html). Participants could choose to release data only to the University of Cambridge — [Cambridge poster, via search](https://www.cl.cam.ac.uk/events/cl75/posters/f/dtw30-screen.pdf). The site was **unreachable** on 2026-11-13.
- **Reality Mining**: the README's download URL `reality.media.mit.edu/download.php` now redirects to `10x.media.mit.edu/download.php`, which returned **HTTP 404** on 2026-11-13 (own curl check) — URL from [README](https://www.cse.iitk.ac.in/users/nsrivast/HCC/RealityMining_ReadMe.pdf). A TIB catalogue entry exists — [TIB](https://service.tib.eu/ldmservice/dataset/reality-mining-dataset). Small derived versions (reality_mining_84 / reality_mining_1392 networks) ship in the CRAN package GreedySBTM, but these are proximity networks, not app logs — [rdrr.io](https://rdrr.io/cran/GreedySBTM/man/reality_mining_84.html)
- **Frappe**: ZIP download live (HTTP 200). The author's page calls the datasets "probably outdated (too small and biased)" and states no licence — [baltrunas.info](https://www.baltrunas.info/context-aware/frappe). A Hugging Face mirror is labelled Apache-2.0 by its uploader (not by the original authors) — [HF](https://huggingface.co/datasets/abadesalex/Frappe-mobile-app-usage/blob/main/README.md)
- **CES**: released October 2024; Kaggle URL `kaggle.com/datasets/subigyanepal/college-experience-dataset` — [phys.org](https://phys.org/news/2024-03-tracks-shifts-student-mental-health.pdf). Kaggle page contents and licence unverified.

### Inferences
- With no agreement paperwork, a student can start this week with LSApp, Tsinghua or Carat. All of them forbid re-identification, and two (Tsinghua, Carat) forbid commercial use. That is compatible with a university FYP and with Synapse's privacy-by-design rules.
- GLOBEM's credentialing takes days to weeks and gives no per-app data. It is low value for Synapse's app-sequence learning, though useful as a related-work comparison for screen-usage routines.

### Gaps
- No explicit licence was found for LSApp. Cite the TOIS paper and treat it as research use.
- I could not confirm whether StudentLife's outage is temporary or whether the dataset moved to a new host.
- Current MDC access status (page 404) and Device Analyzer's status (site down; whether the project has formally closed) are unconfirmed.

---

## 5. Limitations and suitability for routine/sequence learning (with recommendation)

### Takeaway
**Primary recommendation: LSApp.** It is open, recent (2018), event-level and session-segmented, its open/close events give durations, and its schema is almost a subset of Synapse's. **Secondary: the Tsinghua App Usage Dataset**, for coarse place-aware usage, or **StudentLife / Carat** when longer, weekly-scale routines matter. Each is weaker on at least one dimension (see below).

### Cited Findings
- **LSApp**:
  - Short horizon: mean of 15 days per user, enough for about two weekly cycles at most.
  - Only 87 distinct apps, so the app vocabulary is truncated.
  - No device, place or demographic fields. Participants were also using a search-study app (uSearch).
  - Source: [LSApp GitHub](https://github.com/aliannejadi/LSApp)
- **Tsinghua**:
  - One week only.
  - Usage is inferred from network traffic, so offline app use is invisible and there is no screen-on duration.
  - Location is at base-station granularity.
  - Source: [Tsinghua page](https://fi.ee.tsinghua.edu.cn/appusage/)
- **Carat**:
  - Sparse sampling: a sample at each 1% battery change, uploaded only when the user opens the app, so large gaps are possible.
  - Self-selection bias: users likely installed it for energy problems, research or tech enthusiasm.
  - Source: [Carat page](https://www.cs.helsinki.fi/group/carat/data-sharing). The demographic and cultural bias of Carat data is examined in [Peltonen et al. 2018 (MobileHCI)](https://www.cs.helsinki.fi/group/carat/pubs/mobilehci18.pdf).
- **GLOBEM**:
  - Feature-level only.
  - Dates are randomly shifted, which keeps order and weekday but hides calendar timing.
  - Survey instruments vary by year, labels are sparse, and the sample is a single university.
  - Wi-Fi has high missingness.
  - Source: [PhysioNet](https://physionet.org/content/globem/1.1/)
- **StudentLife**:
  - Single class of 48 students, 10 weeks, 2013.
  - 37 of 48 carried the study phone as a secondary phone, which raised data-quality concerns.
  - Source: [Wang et al. 2014 PDF](https://www.cs.columbia.edu/~xia/publication/ubicomp14-studentlife/ubicomp14-studentlife.pdf)
- **Reality Mining**:
  - Logger crashed about once a week; logs cover about 85.3% of deployed time, with gaps from corruption and phones being powered off.
  - 2004–05 Nokia feature-phone-era apps.
  - Source: [README](https://www.cse.iitk.ac.in/users/nsrivast/HCC/RealityMining_ReadMe.pdf)
- **MDC**:
  - Location k-anonymised by truncation; Dedicated Track has no coordinates.
  - Identifiers hashed per user in the Dedicated Track.
  - Population skewed young (two-thirds aged 22–33) and recruited virally.
  - Source: [Laurila et al. 2012](https://infoscience.epfl.ch/record/192489/files/Laurila_MDC_2012.pdf)
- **Frappe**:
  - Context-aggregated counts, not timestamps.
  - 83% of usage is labelled "other" location.
  - The author calls it "too small and biased".
  - Sources: [Baltrunas et al. 2015 PDF](https://arxiv.org/pdf/1505.03014); [baltrunas.info](https://www.baltrunas.info/context-aware/frappe)
- **K-EmoPhone**: only 7 days per participant — [Zenodo](https://zenodo.org/records/7606611)
- **LiveLab**: 34 users, 2010–11, iPhone 3GS-era apps — [LiveLab](https://yecl.org/livelab/)

### Inferences
- **Suitability ranking for Synapse** (routine and next-action learning from app/web events):
  1. **LSApp**: best schema fit and open access; good for next-app prediction, session-sequence mining and hour-of-day routines; weak for weekly cycles.
  2. **Tsinghua**: adds coarse place and app categories, good for testing "place × time → app" context models; only one week.
  3. **StudentLife**: 10 weeks covers weekly cycles, and it has phone-lock, activity, GPS and conversation context. However, it is older than 10 years, the host was down on the access date, and the app-usage schema is unverified.
  4. **Carat**: years-long per-user history, ideal for testing long-term weekday/weekend stability; sparse and coarse.
  5. **LiveLab**: has app usage with duration plus web URLs, a unique match to Synapse's web stream; old and small.
  6. Lower priority: Frappe (no timestamps), GLOBEM (no per-app data), K-EmoPhone and MDC (paperwork, short or old), Reality Mining and Device Analyzer (availability).
- **Suggested evaluation design**: develop and tune the algorithms on LSApp; validate generalisation on Tsinghua (different country, population and collection method); then compare against Synapse's own consented data. Report the same metrics on all three, for example top-k next-app accuracy and routine-detection precision by hour/weekday.
- To meet the department's "well studied with its features" requirement, LSApp and Tsinghua are each documented by a peer-reviewed ACM paper (TOIS 2021, IMWUT 2018) and are widely reused in app-prediction work. That makes both defensible choices.

### Gaps
- I did not find published benchmarks of routine/periodicity mining (as opposed to next-app prediction) on LSApp or Tsinghua. The routine-algorithms research notes may cover this.
- No verified participant demographics for LSApp or Tsinghua.

---

## 6. Peer-reviewed papers introducing each dataset (APA 7, DOIs verified via Crossref on 2026-11-13)

### Takeaway
DOIs below were checked against the Crossref API ([api.crossref.org/works/{DOI}](https://api.crossref.org/)), except GLOBEM, where NeurIPS Datasets and Benchmarks papers have no Crossref DOI (use the OpenReview URL plus the PhysioNet dataset DOI), and Frappe, which is arXiv-only.

### Cited Findings
- **LSApp**: Aliannejadi, M., Zamani, H., Crestani, F., & Croft, W. B. (2021). Context-aware target apps selection and recommendation for enhancing personal mobile assistants. *ACM Transactions on Information Systems, 39*(3), 1–30. https://doi.org/10.1145/3447678 — [Crossref](https://api.crossref.org/works/10.1145/3447678)
- **Tsinghua App Usage**: Yu, D., Li, Y., Xu, F., Zhang, P., & Kostakos, V. (2018). Smartphone app usage prediction using points of interest. *Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 1*(4), Article 174, 1–21. https://doi.org/10.1145/3161413 — [Crossref](https://api.crossref.org/works/10.1145/3161413); article number from [Tsinghua page](https://fi.ee.tsinghua.edu.cn/appusage/)
- **StudentLife** (older than 10 years): Wang, R., Chen, F., Chen, Z., Li, T., Harari, G., Tignor, S., Zhou, X., Ben-Zeev, D., & Campbell, A. T. (2014). StudentLife: Assessing mental health, academic performance and behavioral trends of college students using smartphones. In *Proceedings of the 2014 ACM International Joint Conference on Pervasive and Ubiquitous Computing* (pp. 3–14). ACM. https://doi.org/10.1145/2632048.2632054 — [Crossref](https://api.crossref.org/works/10.1145/2632048.2632054)
- **GLOBEM**: Xu, X., et al. (2022). GLOBEM dataset: Multi-year datasets for longitudinal human behavior modeling generalization. In *Advances in Neural Information Processing Systems 35 (NeurIPS 2022) Datasets and Benchmarks Track*. https://openreview.net/forum?id=GKOa7yNH8Uh. Dataset: Xu, X., et al. (2023). *GLOBEM: Cross-dataset generalization of longitudinal human behavior modeling* (version 1.1) [Data set]. PhysioNet. https://doi.org/10.13026/r9s1-s711 — [PhysioNet](https://physionet.org/content/globem/1.1/)
- **Carat**: Oliner, A. J., Iyer, A. P., Stoica, I., Lagerspetz, E., & Tarkoma, S. (2013). Carat: Collaborative energy diagnosis for mobile devices. In *Proceedings of the 11th ACM Conference on Embedded Networked Sensor Systems* (pp. 1–14). ACM. https://doi.org/10.1145/2517351.2517354 — [Crossref](https://api.crossref.org/works/10.1145/2517351.2517354). Older than 10 years; this is the dataset's required citation.
  - Companion paper on dataset bias: Peltonen, E., Lagerspetz, E., Hamberg, J., Mehrotra, A., Musolesi, M., Nurmi, P., & Tarkoma, S. (2018). The hidden image of mobile apps: Geographic, demographic, and cultural factors in mobile usage. In *Proceedings of the 20th International Conference on Human-Computer Interaction with Mobile Devices and Services (MobileHCI '18)* (pp. 1–12). ACM. https://doi.org/10.1145/3229434.3229474 — [Crossref](https://api.crossref.org/works/10.1145/3229434.3229474)
- **LiveLab** (older than 10 years): Shepard, C., Rahmati, A., Tossell, C., Zhong, L., & Kortum, P. (2011). LiveLab: Measuring wireless networks and smartphone users in the field. *ACM SIGMETRICS Performance Evaluation Review, 38*(3), 15–20. https://doi.org/10.1145/1925019.1925023 — [Crossref](https://api.crossref.org/works/10.1145/1925019.1925023). Crossref issue date is 2011; the LiveLab page cites it as December 2010.
- **Device Analyzer** (older than 10 years): Wagner, D. T., Rice, A., & Beresford, A. R. (2014). Device Analyzer: Understanding smartphone usage. In I. Stojmenovic, Z. Cheng, & S. Guo (Eds.), *Mobile and Ubiquitous Systems: Computing, Networking, and Services (MobiQuitous 2013)* (LNICST, pp. 195–208). Springer. https://doi.org/10.1007/978-3-319-11569-6_16 — [Crossref](https://api.crossref.org/works/10.1007/978-3-319-11569-6_16). Editor names are from memory; verify.
- **MIT Reality Mining** (older than 10 years): Eagle, N., & Pentland, A. (2006). Reality mining: Sensing complex social systems. *Personal and Ubiquitous Computing, 10*(4), 255–268. https://doi.org/10.1007/s00779-005-0046-3 — [Crossref](https://api.crossref.org/works/10.1007/s00779-005-0046-3). Crossref's online date is 2005-11-03.
  - The README asks users to cite: Eagle, N., Pentland, A., & Lazer, D. (2009). Inferring friendship network structure by using mobile phone data. *Proceedings of the National Academy of Sciences, 106*(36), 15274–15278. https://doi.org/10.1073/pnas.0900282106 — [Crossref](https://api.crossref.org/works/10.1073/pnas.0900282106)
- **Nokia MDC** (older than 10 years): Laurila, J. K., Gatica-Perez, D., Aad, I., Blom, J., Bornet, O., Do, T. M. T., Dousse, O., Eberle, J., & Miettinen, M. (2013). From big smartphone data to worldwide research: The Mobile Data Challenge. *Pervasive and Mobile Computing, 9*(6), 752–771. https://doi.org/10.1016/j.pmcj.2013.07.014 — [Crossref](https://api.crossref.org/works/10.1016/j.pmcj.2013.07.014)
- **Frappe** (older than 10 years; not peer-reviewed): Baltrunas, L., Church, K., Karatzoglou, A., & Oliver, N. (2015). *Frappe: Understanding the usage and perception of mobile app recommendations in-the-wild* (arXiv:1505.03014) [Preprint]. arXiv. https://doi.org/10.48550/arXiv.1505.03014 — [arXiv](https://arxiv.org/abs/1505.03014)
- **K-EmoPhone**: Kang, S., Choi, W., Park, C. Y., Cha, N., Kim, A., Khandoker, A. H., Hadjileontiadis, L., Kim, H., Jeong, Y., & Lee, U. (2023). K-EmoPhone: A mobile and wearable dataset with in-situ emotion, stress, and attention labels. *Scientific Data, 10*, Article 351. https://doi.org/10.1038/s41597-023-02248-2 — [Crossref](https://api.crossref.org/works/10.1038/s41597-023-02248-2)
- **College Experience Study**: Nepal, S., Liu, W., Pillai, A., Wang, W., Vojdanovski, V., Huckins, J. F., Rogers, C., Meyer, M. L., & Campbell, A. T. (2024). Capturing the college experience: A four-year mobile sensing study of mental health, resilience and behavior of college students during the pandemic. *Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 8*(1), Article 38, 1–37. https://doi.org/10.1145/3643501 — [Crossref](https://api.crossref.org/works/10.1145/3643501); article number 38 from [PubMed](https://pubmed.ncbi.nlm.nih.gov/39086982/)
- **Dataset-landscape survey**: Li, T., Xia, T., Wang, H., Tu, Z., Tarkoma, S., Han, Z., & Hui, P. (2022). Smartphone app usage analysis: Datasets, methods, and applications. *IEEE Communications Surveys & Tutorials, 24*(2), 937–966. https://doi.org/10.1109/COMST.2022.3163176 — [Crossref](https://api.crossref.org/works/10.1109/COMST.2022.3163176)

### Inferences
- In the dissertation, cite the dataset-specific paper and also the dataset name string that each licence requires: "Tsinghua App Usage Dataset" and "Carat Top 1000 Users Long-Term App Usage Dataset".

### Gaps
- GLOBEM full author list and NeurIPS page numbers: the PhysioNet page gave only "Xu et al.". From memory, the authors include Xu, Liu, Zhang, Wang, Nepal, Sefidgar, Seo, Kuehn, Huckins, Morris, Nurius, Riskin, Patel, Althoff, Campbell, Dey and Mankoff. Verify on OpenReview.
- The PhysioNet dataset DOI 10.13026/r9s1-s711 is a DataCite DOI, so the Crossref lookup failed as expected. It is taken from the PhysioNet page.
- The full subtitle of the StudentLife and CES titles comes from the published paper titles (Crossref returns the short titles "StudentLife" and "Capturing the College Experience"). The StudentLife subtitle is confirmed by the [Columbia-hosted paper](https://www.cs.columbia.edu/~xia/publication/ubicomp14-studentlife/); the CES subtitle should be checked on the ACM DL.
