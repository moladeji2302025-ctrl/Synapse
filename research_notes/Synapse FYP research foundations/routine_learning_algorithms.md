# Routine-learning algorithms in Synapse, and their alternatives (exam-defence notes)

How to read these notes:
- Every worked example uses **made-up numbers** and sits under "Inferences", because the numbers are mine and do not come from any paper. All the arithmetic has been checked, so the student can repeat it aloud.
- **Citation verification markers.** [V] means the bibliographic details or DOI were confirmed by a web search during this session. [K] means the details come from well-established background knowledge and were not re-checked online in this session. They are standard, widely cited references, but the report writer or student should check each [K] DOI at doi.org before submission. "(>10 yrs)" marks an original algorithm paper older than ten years (published before 2016).
- The full APA 7 reference list is at the end, under "Full APA 7 reference list", inside the last section.
- Plain-language glossary used throughout: an **item** is one kind of event (for example "opened Spotify"). An **itemset** is a set of items that happen together in one window. A **transaction** or **basket** is one window of time and the items in it. A **sequence** is an ordered list of items. **Support** means how often something happens. **Confidence** means how often B follows, given that A happened. **Complexity** means how running time or memory grows as the data grows ("O(n)" means that doubling the data roughly doubles the work).

---

## 1. Periodic pattern mining: how it works, support and confidence for "opens app X around hour H on weekday D", and recent papers

### Takeaway
Periodic pattern mining finds things that recur at regular intervals. A pattern counts as a routine when it is **frequent** (its support is above a minimum) and **regular** (the longest gap between occurrences stays below a maximum period). For Synapse, grouping events into (app, weekday, hour) slots and counting them is a simple, explainable, single-pass version of this idea, and the published periodic-frequent framework (Tanbeer et al., 2009, and the Fournier-Viger and Kiran line of work) gives it academic grounding.

### Cited Findings
- Periodic-frequent pattern mining began with PF-growth (Tanbeer, 2009). It finds itemsets in a database of time-stamped transactions and uses a **maxPer** (maximum periodicity) constraint, and it is built on FP-growth — [Fournier-Viger, "The key papers about periodic pattern mining"](https://data-mining.philippe-fournier-viger.com/the-key-papers-about-periodic-pattern-mining/) (a blog by a leading researcher in the field; the underlying paper is Tanbeer et al., 2009 [K] (>10 yrs)).
- The formal definition: "The pattern X is said to be frequent if S(X) ≥ minSup … The frequent pattern X is said to be periodic-frequent if Per(X) ≤ maxPer". Here periodicity Per(X) is the **largest gap between consecutive occurrences**, counting the gap from the start of the database and the gap to its end — [Kiran & Kitsuregawa paper, Univ. of Tokyo](https://ginza.tkl.iis.u-tokyo.ac.jp/new/uploads/publication_file/file/693/Paper%2023.pdf).
- Later variants measure regularity in different ways: PFPM (Fournier-Viger, 2016) adds **average, minimum and maximum periodicity** and shows that average periodicity is inversely related to support. PFP (Rashid, 2012) uses the **variance of periods**. PPFP (Nofong, 2016) uses the **standard deviation of periods together with a statistical significance test**. SPP-Growth (2019) finds **stable** periodic patterns using a "lability" measure. TSPIN (2020) finds the top-k stable periodic patterns. LPP-Growth and LPP-Miner (2020) find **locally periodic** patterns, which are periodic only during some time intervals — [Fournier-Viger key-papers list](https://data-mining.philippe-fournier-viger.com/the-key-papers-about-periodic-pattern-mining/).
- Fournier-Viger, Li, Lin, Kiran and Fujita (2019, *Information Sciences*) extend periodic mining from a single sequence to patterns that recur **across many sequences** (the MPFPS algorithms, which use a "sequence periodic ratio"). They report that the algorithms are efficient and filter out many non-periodic itemsets — [V] [Bohrium record](https://www.bohrium.com/paper-details/efficient-algorithms-to-identify-periodic-patterns-in-multiple-sequences/812788626176868354-105711); [SPMF MPFPS docs](https://www.philippe-fournier-viger.com/spmf/MPFPS.php).
- A survey-style edited book exists: Kiran, Fournier-Viger, Luna, Lin & Mondal (Eds.), *Periodic Pattern Mining: Theory, Algorithms, and Applications* (Springer, 2021). Its first chapter covers periodicity, periodic support, search-space exploration and pruning — [Springer](https://www.springer.com/gp/book/9789811639630). (This is an edited scholarly book, so it is secondary support.)
- For daily human behaviour specifically, Rawassizadeh et al. (2016, *IEEE TKDE*) mine recurring daily behaviour from multivariate smartphone and wearable data. They use **temporal granularity**, describing when behaviour happens with coarse time estimates rather than exact timestamps, and they show the algorithms scale on two real datasets (UbiqLog and Device Analyzer) — [V] [LJMU repository](https://researchonline.ljmu.ac.uk/id/eprint/3926/).
- MobileMiner (Srinivasan et al., UbiComp 2014, Samsung Research) mines frequent **co-occurrence patterns** of context events (time, app use, calls) **on the phone**. It uses a weighted rule-mining algorithm, WeMiT, which the paper compares with Apriori, and it was evaluated on context logs from 106 users collected over 1–3 months. The authors argue that mining on the device gives better privacy and depends less on the cloud — [V] [MobileMiner PDF](https://www.winlab.rutgers.edu/~lendlice/paper/Srinivasan_MobileMiner_UbiComp14.pdf); [search summary of paper header](https://dblp1.uni-trier.de/rec/conf/huc/MukherjiSW14.html).
- Earlier foundational work on partial periodicity in time series is Han, Dong & Yin (1999, ICDE) [K] (>10 yrs).

### Inferences
**Plain explanation for the panel.** "Every event has a timestamp. I put each event into a slot: which app, which weekday, which hour. Then for each slot I ask two questions. How many of the weeks we observed contain this event in this slot? That is support. And when the phone was in use in that slot, how often was it this app? That is confidence. If both are high and the event has not skipped too many weeks in a row, which is periodicity, it is a routine."

**Worked example (made-up numbers): "opens Spotify around 08:00 on Mondays".**
- Data: 8 weeks, so 8 Mondays. Spotify was opened in the 08:00–08:59 slot (or within ±30 minutes of 08:00 if a tolerance window is used) on Mondays in weeks 1, 2, 3, 5, 6 and 8, which is 6 of the 8 Mondays.
- **Support** (absolute) = 6. **Relative support** = 6 / 8 = **0.75**.
- **Confidence**, defined as P(Spotify | Monday 08:00 slot and the phone was active): the phone was used in that slot on 7 of the 8 Mondays, so confidence = 6 / 7 ≈ **0.86**.
- A second useful measure is **temporal concentration**, P(08:00 slot | Spotify on a Monday). If Spotify was opened 10 times on Mondays in total and 6 of those were at 08:00, it is 6 / 10 = 0.6. This shows whether the app is tied to that hour or is simply used all day.
- **Periodicity** (Tanbeer/Kiran style): occurrence weeks are 1, 2, 3, 5, 6, 8, and the database runs from week 0 to week 8. The gaps are 1, 1, 1, 2, 1, 2, and 0 (8 to the end). The largest gap is **2 weeks**. With minSup = 5 and maxPer = 2, the pattern is **periodic-frequent**, so it is a routine. If the user had skipped weeks 4 to 6, the gap would be 3 and the pattern would fail the regularity test even with high support. That is the advantage of periodicity over support alone.
- Inputs: a time-stamped event list for one user. Outputs: a list of (app, weekday, hour) slots with support, confidence and maximum period.
- Cost: a single pass with a hash map keyed by (app, weekday, hour) takes **O(n) time** for n events and **O(A × 168) space** for A apps (7 days × 24 hours = 168 slots). Monthly or day-of-month slots work the same way. This is cheap enough to run nightly on a server or even on a phone. General periodic *itemset* mining (PF-growth, PFPM) can in the worst case be exponential in the number of distinct items, like all frequent-itemset mining, but Synapse's slot approach avoids that by fixing the pattern shape (one app × one time slot) in advance.
- Why it fits Synapse: it is explainable ("you opened Spotify on 6 of the last 8 Mondays at 8 am"), works from a few weeks of data, needs no training, and maps directly onto the consent-gated event table.
- Alternatives: full PF-growth or PFPM (they find multi-item periodic sets but are harder to explain and unnecessary for single-app routines); Fourier or autocorrelation period detection on time series (it finds the period length automatically but needs long, dense, evenly sampled signals and is harder to explain); and the stable or local periodicity variants (useful upgrades if routines that only hold in term time are needed, which LPP addresses).

### Gaps
- I could not extract MobileMiner's exact support/confidence thresholds, run-times or prediction precision, because the PDF body text was not readable through the fetch tool. Cite it only for its approach, dataset size and privacy argument.
- I found no peer-reviewed 2016+ *journal survey* devoted solely to periodic pattern mining. The closest are the Springer edited book (2021) and the Fournier-Viger et al. (2019) *Information Sciences* paper, which is a research paper rather than a survey.

---

## 2. Association rules (Apriori), FP-growth, and sequential pattern mining (GSP, PrefixSpan, SPADE): differences, why PrefixSpan for "A then B", and a worked PrefixSpan example

### Takeaway
Apriori and FP-growth find things that happen **together**, with order ignored. GSP, SPADE and PrefixSpan find things that happen **in order** ("A then B"). Of the sequence miners, PrefixSpan avoids generating and testing huge candidate lists. It "grows" patterns by working only on the part of each sequence after the current prefix, which makes it fast and memory-friendly for the short, per-user session sequences that Synapse produces.

### Cited Findings
- Apriori (Agrawal & Srikant, 1994 [K] (>10 yrs); association rules first defined in Agrawal, Imieliński & Swami, 1993 [K] (>10 yrs)) works level by level. It finds frequent single items, joins them into candidate pairs, counts the pairs, and continues. It relies on the **Apriori (downward-closure) property**: every subset of a frequent itemset must itself be frequent, so any candidate with an infrequent subset is pruned. Source for these algorithm descriptions: the 25-year review Luna, Fournier-Viger & Ventura (2019, *WIREs Data Mining and Knowledge Discovery*) [K].
- FP-growth (Han, Pei & Yin, 2000 [K] (>10 yrs); journal version Han, Pei, Yin & Mao, 2004 [K] (>10 yrs)) scans the database twice, compresses it into a prefix tree (the FP-tree), and mines it recursively **without generating candidates** — [K] Luna et al., 2019.
- Sequential pattern mining was introduced by Agrawal & Srikant (1995, ICDE) [K] (>10 yrs). GSP (Srikant & Agrawal, 1996) [K] (>10 yrs) is the Apriori-style sequence miner and adds **time constraints** (minimum and maximum gap, sliding window).
- SPADE (Zaki, 2001, *Machine Learning*) [K] (>10 yrs) uses a **vertical** format: for each item it stores an id-list of (sequence-id, position) pairs and finds longer patterns by joining id-lists, which needs only a few database scans.
- PrefixSpan (Pei et al., 2004, *IEEE TKDE*) [K] (>10 yrs) is a **pattern-growth** method. It projects the database on each frequent prefix and mines each projected database recursively. Pseudo-projection stores pointers instead of copies. Pei et al. report that PrefixSpan generally outperformed GSP and SPADE on their benchmarks.
- A peer-reviewed survey covering these algorithm families and their parallel versions is Gan, Lin, Fournier-Viger, Chao & Yu (2019), "A survey of parallel sequential pattern mining", *ACM TKDD*, DOI 10.1145/3314107 — [V] [arXiv version](https://arxiv.org/abs/1805.10515v2); [BibBase listing with DOI](https://bibbase.org/network/publication/gan-lin-fournierviger-chao-yu-asurveyofparallelsequentialpatternmining-2019). An older but authoritative survey is Mooney & Roddick (2013, *ACM Computing Surveys*) [K] (>10 yrs).
- Constraints such as a maximum gap ("within T minutes") can be pushed into pattern-growth mining: Pei, Han & Wang (2007, *Journal of Intelligent Information Systems*) [K] (>10 yrs).

### Inferences
**How they differ (plain words):**

| Method | Order matters? | How it searches | Database scans | Main weakness |
|---|---|---|---|---|
| Apriori | No | Generate candidates, then count | One per pattern length | Huge candidate sets; many scans |
| FP-growth | No | Compressed tree, recursive growth | 2 | Tree can be large in memory; ignores order |
| GSP | Yes | Apriori-style generate and test | One per pattern length | Many candidates; slow on long sequences |
| SPADE | Yes | Vertical id-list joins | About 3 | Id-lists and joins use memory |
| PrefixSpan | Yes | Grow patterns inside projected suffixes | Repeated over shrinking projections | Recursive projections; gap constraints need an add-on |

**Why PrefixSpan for "A then B within T minutes".** Synapse's question is about **order** ("Alarm, then Email"), so Apriori and FP-growth are the wrong tool: they would report "Alarm and Email both happen in the morning" without saying which comes first. Among the ordered miners, PrefixSpan never builds candidate patterns that do not exist in the data, it only looks at what actually follows the current prefix, and each user's daily sessions are short, so the projected databases shrink fast. The "within T minutes" limit is added at projection time: only events whose timestamp is at most T minutes after the prefix's last event are kept. Alternatively, sessions are cut into T-minute windows before mining.

**Worked PrefixSpan example (made-up morning sessions; minimum support = 3 of 4 sequences).**
- S1: ⟨Alarm, News, Email, Calendar⟩
- S2: ⟨Alarm, Email, Calendar⟩
- S3: ⟨News, Alarm, Email⟩
- S4: ⟨Alarm, News, Calendar⟩

Step 1, count single items (each counted once per sequence): Alarm 4, News 3, Email 3, Calendar 3. All four are frequent.

Step 2, project on prefix ⟨Alarm⟩ (keep only what comes after the first Alarm):
- S1 → ⟨News, Email, Calendar⟩; S2 → ⟨Email, Calendar⟩; S3 → ⟨Email⟩; S4 → ⟨News, Calendar⟩
- Counts: News 2, Email 3, Calendar 3. So **⟨Alarm, Email⟩ (support 3)** and **⟨Alarm, Calendar⟩ (support 3)** are frequent.

Step 3, project on ⟨Alarm, Email⟩: S1 → ⟨Calendar⟩, S2 → ⟨Calendar⟩, S3 → ⟨⟩, and S4 has no Email after Alarm. Calendar has support 2, below 3, so stop. Project on ⟨Alarm, Calendar⟩: every suffix is empty, so stop.

Step 4, project on ⟨News⟩: S1 → ⟨Email, Calendar⟩, S3 → ⟨Alarm, Email⟩, S4 → ⟨Calendar⟩. Counts are Email 2, Calendar 2 and Alarm 1, so nothing is frequent. Project on ⟨Email⟩: S1 → ⟨Calendar⟩, S2 → ⟨Calendar⟩, S3 → ⟨⟩. Calendar is 2, so nothing. ⟨Calendar⟩: empty.

Result: ⟨Alarm⟩:4, ⟨News⟩:3, ⟨Email⟩:3, ⟨Calendar⟩:3, ⟨Alarm, Email⟩:3, ⟨Alarm, Calendar⟩:3.
Sequential rule confidence: conf(Alarm ⇒ Email) = sup⟨Alarm, Email⟩ / sup⟨Alarm⟩ = 3 / 4 = **0.75**.
Adding "within 10 minutes": if in S2 Email came 25 minutes after Alarm, the timestamp filter drops it from the ⟨Alarm⟩ projection, so ⟨Alarm, Email⟩ falls to support 2 and is no longer reported.

- Inputs: per-user sequences of events (for example one per day or per session) and a minimum support, plus optionally T. Outputs: frequent ordered patterns with their supports, from which rules A ⇒ B and their confidence follow.
- Cost (plain): Apriori and GSP can produce up to 2^m candidates for m distinct items (exponential) and rescan the data at each level. PrefixSpan produces no candidates, and its work is roughly proportional to the total size of all projected databases. With pseudo-projection, extra memory is about one pointer per sequence per recursion level. In the worst case the *output* itself can be exponential for any miner, so a minimum support and a maximum pattern length (for example 3) keep things bounded. For one user's few thousand events a week this runs in well under a second (an inference; I did not benchmark it).

### Gaps
- I did not retrieve the exact speed-up figures from Pei et al. (2004). The panel answer should say "reported to be generally faster than GSP and SPADE on their benchmarks" without quoting numbers.

---

## 3. Measures: support, confidence and lift, with a worked example

### Takeaway
Support says how common a pattern is, confidence says how reliably B follows A, and lift says whether A actually *raises* the chance of B compared with B's normal rate. Lift above 1 means a real positive link, 1 means no link, and below 1 means A makes B *less* likely. Synapse should report lift alongside confidence so it does not suggest things the user does all the time anyway.

### Cited Findings
- Support and confidence are the original measures for association rules (Agrawal, Imieliński & Swami, 1993) [K] (>10 yrs).
- Lift (also called "interest") was introduced for market-basket rules by Brin, Motwani, Ullman & Tsur (1997) [K] (>10 yrs). Comparative analyses of objective measures are given by Tan, Kumar & Srivastava (2004, *Information Systems*) [K] (>10 yrs) and the survey Geng & Hamilton (2006, *ACM Computing Surveys*) [K] (>10 yrs). These show that high confidence can mislead when the consequent B is very common.
- A 2016+ review that restates these measures within frequent itemset mining is Luna, Fournier-Viger & Ventura (2019) [K].

### Inferences
**Definitions** (N = number of days or windows observed):
- support(A) = count(A) / N
- support(A ∪ B) = count(A and B together) / N
- confidence(A ⇒ B) = support(A ∪ B) / support(A), the share of A-days that also had B
- lift(A ⇒ B) = confidence(A ⇒ B) / support(B) = support(A ∪ B) / (support(A) × support(B))

**Worked example (made-up).** 20 days observed. A = "at the café in the morning" on 10 days. B = "opens Notion" on 12 days. Both on 8 days.
- support(A ∪ B) = 8 / 20 = **0.40**
- confidence(A ⇒ B) = 8 / 10 = **0.80**
- lift = 0.80 / (12 / 20) = 0.80 / 0.60 = **1.33**, a genuine positive link. Being at the café makes Notion 33% more likely than usual.

**Why lift matters.** Change B to "opens WhatsApp", which happens on 18 of 20 days, and keep 8 café-and-WhatsApp days. Confidence is still 0.80, but lift = 0.80 / 0.90 = **0.89**, below 1. The café does not cause WhatsApp use, because WhatsApp is used every day anyway. Suggesting "open WhatsApp at the café" would be pointless, and lift catches that.

- Cost: each measure is a few divisions once the counts exist, so O(1) per rule.

### Gaps
- None material. If the panel asks about other measures (conviction, leverage, all-confidence, Kulczynski), point to Tan et al. (2004) and Geng & Hamilton (2006). I did not extract their specific recommendations in this session.

---

## 4. Recency weighting: exponential decay and the exponential moving average with a half-life

### Takeaway
Instead of counting every past occurrence equally, Synapse multiplies each occurrence by a weight that halves every *h* days (the half-life). Old habits therefore fade automatically and new ones take over within a few half-lives. In the machine-learning literature this is the standard **forgetting** strategy for **concept drift**, the term for when the pattern being learned changes over time.

### Cited Findings
- Concept drift is the case where the statistical properties of the target change over time. Lu et al. (2019, *IEEE TKDE*) review over 130 publications and organise the field into drift **detection**, **understanding** and **adaptation** — [V] [arXiv record](https://arxiv.org/abs/2004.05785v1); DOI 10.1109/TKDE.2018.2876857 (vol. 31, issue 12, pp. 2346–2363).
- Gama et al. (2014, *ACM Computing Surveys*) [K] describe forgetting mechanisms, including abrupt forgetting (sliding windows) and gradual forgetting (weighting examples by age, for example exponentially decaying weights), as a core adaptation strategy. (Published 2014, so just over 10 years old.)
- Time-decayed counting of frequent itemsets in data streams: Chang & Lee (2003, KDD) [K] (>10 yrs). A time-weighted recommender with an exponential decay function controlled by a half-life parameter: Ding & Li (2005, CIKM) [K] (>10 yrs). Temporal dynamics in collaborative filtering, where user preferences drift: Koren (2010, *Communications of the ACM*) [K] (>10 yrs).

### Inferences
**Formula.** weight of an event that is Δt days old: w = 2^(−Δt / h) = e^(−λΔt), with λ = ln 2 / h.
- With h = 14 days: an event today has weight 1.0, 14 days ago 0.5, 28 days ago 0.25, 56 days ago 0.0625.

**Weighted support (made-up example).** The habit is "gym on Monday at 7 am". The user went in weeks 1–6, then stopped. It is now week 10. Ages run from 0 (this week) to 9 weeks. Half-life h = 2 weeks, so the weight is 2^(−age/2).
- Weights of the six gym weeks (ages 9, 8, 7, 6, 5, 4): 0.044 + 0.0625 + 0.088 + 0.125 + 0.177 + 0.25 = **0.746**
- Total weight of all 10 weeks (ages 0–9): 1 + 0.707 + 0.5 + 0.354 + 0.25 + 0.177 + 0.125 + 0.088 + 0.0625 + 0.044 = **3.308**
- Decayed support = 0.746 / 3.308 ≈ **0.23**, against a plain support of 6 / 10 = **0.60**.
- With a routine threshold of 0.5, plain counting would still suggest the gym. The decayed version correctly retires it four weeks after the user stopped.

**Exponential moving average (EMA), the incremental version.** S_new = α·x + (1 − α)·S_old, where x = 1 if the routine happened this period and 0 if not. To match a half-life of h periods, choose α = 1 − 0.5^(1/h). For h = 2 weeks, α ≈ 0.293.
- Start with S = 0.8 and three missed weeks: 0.8 → 0.566 → 0.400 → 0.283. The score has halved after two weeks (0.8 → 0.4), as the half-life says.
- If the user restarts, two hits take 0.283 → 0.493 → 0.641, so a new habit recovers quickly.
- Cost: the EMA needs **O(1) memory per routine** (one number) and **O(1) time per update**, with no history kept, which suits a phone. Batch decayed support is O(n).
- Why it fits Synapse: routines change (new job, holidays), and decay lets the model follow them without a separate "change detector". It is also easy to explain: "older behaviour counts half as much every two weeks."
- Alternatives: a **sliding window** (only the last k weeks count; simple, but it forgets abruptly and old data either counts fully or not at all), **explicit drift detection** such as tests that trigger retraining (Lu et al., 2019; more complex, needs tuning), and **no decay** (stable, but the system never forgets a dropped habit).
- Choosing h is a design parameter. A short h reacts quickly but is jumpy, and a long h is stable but slow. A defensible choice is to tune h on the student's own pilot data (for example, test 7, 14 and 28 days and pick the one with the best next-week accuracy).

### Gaps
- I found no peer-reviewed source that recommends a specific half-life for smartphone routines, so the choice should be justified empirically.

---

## 5. Hebbian-style co-occurrence weighting in a graph, and spreading activation

### Takeaway
Synapse keeps a graph whose nodes are apps, places, times and tasks. A link gets stronger each time its two ends occur together ("cells that fire together wire together", the Hebbian rule) and weakens a little every day (decay). To make a suggestion, Synapse "lights up" the nodes for the current context and lets activation flow along strong links (spreading activation). The nodes that end up most activated are the best candidates.

### Cited Findings
- The Hebbian learning rule comes from Hebb (1949), *The Organization of Behavior* (a book, so secondary) [K] (>10 yrs). Mathematical formulations, including the basic rule Δw = η·x_i·x_j and variants with decay or normalisation, are reviewed in Gerstner & Kistler (2002, *Biological Cybernetics*) [K] (>10 yrs). Oja (1982, *Journal of Mathematical Biology*) [K] (>10 yrs) adds a decay term so that weights stay bounded.
- Spreading activation as a theory of memory and semantic processing comes from Collins & Loftus (1975, *Psychological Review*) [K] (>10 yrs). Its use in information retrieval is surveyed by Crestani (1997, *Artificial Intelligence Review*) [K] (>10 yrs). That survey describes the use of activation decay per hop and firing thresholds to stop activation from flooding the network.
- Spreading activation has been used for recommendation by seeding activation from a user's profile or query in a graph of items, terms or documents, with links built from co-occurrence — [arXiv 2512.15922 (preprint, not peer-reviewed)](https://arxiv.org/pdf/2512.15922); [TU Wien, spreading activation for rating estimation](https://ec.tuwien.ac.at/node/9313). Personalised spreading-activation networks adjust link weights per user — [interactivesystems.info paper](https://interactivesystems.info/system/pdfs/61/original/16723.pdf).
- A known failure mode is **over-activation**: spreading through dense graphs of past transactions dilutes the preference signal — [UCLV repository](https://bida.uclv.edu.cu/handle/123456789/6854).

### Inferences
**Update rule (bounded Hebbian rule with decay).** When nodes i and j occur together: w ← w + η·(1 − w), which grows w towards 1 without exceeding it. Every day: w ← w·(1 − δ).

**Worked example (made-up).** The link is "Gym ↔ Spotify", with η = 0.2, δ = 0.05 per day, and a starting weight of 0.
- Day 1, co-occur: 0 + 0.2·1 = **0.200**
- Day 2, decay then co-occur: 0.200·0.95 = 0.190, then 0.190 + 0.2·0.810 = **0.352**
- Day 3: 0.352·0.95 = 0.334, then 0.334 + 0.2·0.666 = **0.467**
- Then 10 days without the pair: 0.467 × 0.95^10 = 0.467 × 0.599 ≈ **0.280**. The link weakens but is not forgotten at once.

**Spreading activation example.** The context node "Monday 07:00" gets activation 1.0. The links are Mon07→Gym 0.8, Mon07→News 0.4 and Gym→Spotify 0.9. Activation is multiplied by the link weight, and after the first hop also by a decay factor of 0.5. Nodes below 0.1 stop spreading.
- Hop 1: Gym = 1.0 × 0.8 = **0.80**; News = 1.0 × 0.4 = **0.40**
- Hop 2: Spotify = 0.80 × 0.9 × 0.5 = **0.36**
- Ranking: Gym (0.80), News (0.40), Spotify (0.36). The suggestion is "Gym, and maybe start Spotify on the way."

- Inputs: co-occurring events (same time window). Outputs: a weighted graph, and per context a ranked list of activated nodes.
- Cost: each update is O(number of pairs in the window). With k events in a window that is O(k²), but k is small. The decay pass is O(E) for E edges, or O(1) per edge if decay is applied lazily from a stored "last updated" timestamp. Graph storage is O(V + E). Spreading activation with a hop limit L touches at most the edges within L hops, so it is cheap for L = 2 or 3.
- Why it fits Synapse: it is incremental (no retraining), handles mixed node types (place, time, app, task) in one structure, forgets through decay, and is explainable ("Gym is linked to Monday mornings with strength 0.8"). It also complements the rule miners: rules give precise "A then B" facts, and the graph gives soft context-based ranking.
- Alternatives: pointwise mutual information or lift-weighted co-occurrence graphs (statistically cleaner, but they need global counts and do not decay naturally); graph embeddings or graph neural networks (more powerful, but they need much more data, are opaque and cost more to train); random walk with restart, the personalised PageRank family (a principled form of spreading activation and a good "further work" mention).

### Gaps
- I found no recent (2016+) peer-reviewed survey of spreading activation specifically for personal context graphs. The strongest peer-reviewed anchors are the older Collins & Loftus (1975) and Crestani (1997). The recent sources found were a preprint and project pages, so the report should present the Hebbian graph as a **design choice inspired by** these classic models, not as an established benchmark method.

---

## 6. Alternatives for learning routines or the next action: Markov chains, topic models (LDA), clustering of days, deep learning (LSTM, attention, DeepApp)

### Takeaway
Markov chains are simple and explainable but see only the last step. Topic models and day-clustering find "types of day" but need many days and are hard to turn into concrete suggestions. Deep models such as DeepApp predict best when there is plenty of data, but they are opaque, data-hungry and costly to train per user. For a privacy-first final-year project with a few weeks of data per user and a requirement to explain every suggestion, transparent pattern mining with decay is the defensible choice. A Markov chain is a natural baseline to compare against.

### Cited Findings
- **Surveys of app-usage prediction:** Cao & Lin (2017, *Pervasive and Mobile Computing*, 37, 1–22) survey mining smartphone data for app-usage prediction and recommendation — [V] [Bohrium record](https://www.bohrium.com/paper-details/mining-smartphone-data-for-app-usage-prediction-and-recommendations-a-survey/811081103036121088-2652); DOI 10.1016/j.pmcj.2017.01.007. Li et al. (2022, *IEEE Communications Surveys & Tutorials*, 24(2), 937–966) cover four ways of collecting data, nine public app-usage datasets, and methods across the app, user and smartphone domains — [V] [IEEE Xplore](https://ieeexplore.ieee.org/document/9745583); [dblp](https://dblp.org/rec/journals/comsur/LiXWTTHH22).
- **Deep learning, DeepApp:** Xia et al. (2020, *ACM TIST*, 11(6), Article 64, DOI 10.1145/3408325) use context-aware **multi-task learning**. They add a location-prediction task to capture spatio-temporal context and a user-identification task to capture personal preference — [V] [Crossref](https://api.crossref.org/works/10.1145%2F3408325); [author PDF](https://xtxiatong.github.io/files/TIST_20.pdf). Do not confuse it with a different "DeepAPP" (Shen et al., SenSys 2019, DOI 10.1145/3356250.3360038), which is a reinforcement-learning framework — [V] [search result](https://unpaywall.org/10.1145%2F3356250.3360038).
- LSTM, the recurrent network commonly used for next-item prediction, comes from Hochreiter & Schmidhuber (1997, *Neural Computation*) [K] (>10 yrs).
- **Context-based classical predictors:** Huang, Zhang, Ma & Chen (2012, UbiComp) compare contextual predictors, including Bayesian methods and models of sequential app use, for predicting mobile app usage [K] (>10 yrs). Shin, Hong & Dey (2012, UbiComp) study which phone-sensed context features predict app use [K] (>10 yrs).
- **Topic models for routines:** Farrahi & Gatica-Perez (2011, *ACM TIST*) discover daily routines from large-scale location data with probabilistic topic models (LDA) [K] (>10 yrs). Huynh, Fritz & Schiele (2008, UbiComp) discover activity patterns with topic models [K] (>10 yrs). LDA itself comes from Blei, Ng & Jordan (2003, *JMLR*; no DOI) [K] (>10 yrs).
- **Clustering and decomposition of days:** Eagle & Pentland (2009, *Behavioral Ecology and Sociobiology*) represent each day as a vector and use principal component analysis to find "eigenbehaviors", typical day shapes [K] (>10 yrs).
- **Probabilistic routine models:** Banovic, Buzali, Chevalier, Mankoff & Dey (2016, CHI, pp. 248–260, DOI 10.1145/2858036.2858557) model routines using by-products of an activity-prediction algorithm, so that the causal structure of routines can be inspected, and test this on two datasets — [V] [dblp BibTeX](https://dblp.org/rec/bibtex/conf/chi/BanovicBCMD16); [Make4All project page](https://make4all.org/portfolio/modeling-and-understanding-human-routine-bahavior/).
- **On-device mining for privacy:** MobileMiner argues that on-phone pattern mining gives better privacy and less dependence on the cloud — [V] [MobileMiner PDF](https://www.winlab.rutgers.edu/~lendlice/paper/Srinivasan_MobileMiner_UbiComp14.pdf).

### Inferences
**Markov chain worked example (made-up).** The model estimates P(next = B | current = A) = count(A→B) / count(A). After "Alarm" the user went to Email 6 times, News 3 times and Calendar once (10 transitions), so P(Email | Alarm) = 0.6, P(News | Alarm) = 0.3 and P(Calendar | Alarm) = 0.1. Training is O(n), and storage is O(k²) for k apps (O(k^(r+1)) for an order-r chain, so it grows fast). Its weakness is that it sees only the current step and ignores time of day and place unless the state is expanded (for example "Alarm @ Monday morning"), which multiplies the states and the data needed.

**Trade-off table (my synthesis from the sources above).**

| Approach | Data needed | Explainability | Cost (train / predict) | Why not chosen as Synapse's core |
|---|---|---|---|---|
| Periodic and sequential pattern mining with decay (chosen) | Low: works after 2–4 weeks | High: "6 of last 8 Mondays" | Cheap, incremental or nightly | n/a |
| Markov chain | Low to medium | High | O(n) / O(1) lookup | Ignores time and place unless the states multiply; no "within T minutes" notion. Good as a **baseline** |
| LDA topic models | Medium to high (many days) | Medium: topics need human interpretation | Iterative inference, moderate | Gives "kinds of day", not concrete next steps; the number of topics must be chosen |
| Clustering or PCA of days | Medium (many days) | Medium | Moderate | Describes day types; does not output actionable "A then B" |
| LSTM, attention, DeepApp | High (many users or long histories; DeepApp uses multi-task learning across users) | Low (black box) | GPU training; heavier inference on a phone | Opaque, hard to justify each suggestion, data-hungry; pooling users conflicts with per-user privacy isolation |

- The strongest panel argument is that Synapse's requirements (per-suggestion confirmation, NDPA and GDPR transparency, row-level isolation of each user's data, small per-user datasets) favour methods whose output **is** the explanation. Deep models can be named as future work if the evaluation shows that the pattern miner's accuracy is the bottleneck.
- A fair evaluation would compare the chosen method against a Markov baseline and a "most-frequent-app-at-this-hour" baseline on held-out weeks (for example hit-rate@3).

### Gaps
- I did not retrieve DeepApp's reported accuracy figures, so no numbers should be quoted for it.
- [K] references in this section (Huang 2012, Shin 2012, Farrahi 2011, Eagle 2009, Huynh 2008) need their DOIs checked before submission.

---

## 7. How habit-formation research can justify a "settle after N keeps" rule

### Takeaway
Habit research shows that habits take weeks to months to become automatic (median about 59–66 days in the best-known studies, with huge differences between people), that automaticity grows along a curve that flattens out, and that missing a single occasion does not break a habit. So the "settled" rule should (a) require repeated keeps over several weeks, not a few days, (b) tolerate occasional misses, and (c) ideally use a statistical confidence bound rather than a fixed count.

### Cited Findings
- Singh, Murphy, Maher & Smith (2024, *Healthcare*, 12(23), 2488) is a systematic review and meta-analysis of 20 studies (2,601 adults). Four studies reported times to habit formation: **medians 59–66 days, means 106–154 days, individual range 4–335 days**. The pooled habit-score improvement was SMD 0.69 (95% CI 0.49–0.88). 11 of 20 studies were at high risk of bias, and the timing evidence was synthesised narratively. The authors say the results refute the "21-day" notion — [V] [PubMed](https://pubmed.ncbi.nlm.nih.gov/39685110/); [Adelaide repository](https://digital.library.adelaide.edu.au/items/fe6ba93e-1d6b-42b8-9ee7-a231a64ff006).
- Lally, van Jaarsveld, Potts & Wardle (2010, *European Journal of Social Psychology*) [K] (>10 yrs) followed 96 volunteers for 12 weeks. Automaticity followed an **asymptotic curve**, and the median time to reach 95% of the plateau was **66 days (range 18–254)**. Missing one opportunity did not materially affect habit formation.
- Wood & Rünger (2016, *Annual Review of Psychology*) [K] review the psychology of habit, where habits are context-cued responses learned through repetition in stable contexts. This supports conditioning routines on context (weekday, time, place).

### Inferences
- **Important distinction for the panel:** "settled" in Synapse means *the system is confident the user wants this suggestion*. It does not mean the user's habit is automatic. Habit research is used to set the **time scale** and the **tolerance for misses**, not to claim that Synapse forms habits.
- Suggested rule (a design proposal): a suggestion is settled when it has been **kept on at least 8 of its last 10 offers, spread over at least 3 weeks**. The 3-week floor reflects that habit timescales are weeks to months, and the 8-of-10 rule reflects Lally et al.'s finding that a single miss does not derail a habit.
- **Statistical version (worked example, made-up).** Use the Wilson score lower bound (Wilson, 1927 [K] (>10 yrs)) on the keep-rate. With 9 keeps out of 10 offers (p = 0.9, n = 10, z = 1.96 for 95%):
  - centre = p + z²/(2n) = 0.9 + 0.192 = 1.092
  - margin = z·√(p(1−p)/n + z²/(4n²)) = 1.96·√(0.009 + 0.0096) = 1.96 × 0.136 = 0.267
  - lower bound = (1.092 − 0.267) / (1 + z²/n) = 0.825 / 1.384 ≈ **0.60**
  - If the settling threshold is a lower bound ≥ 0.6, 9/10 just qualifies, while 5/5 (p = 1, n = 5) gives a lower bound of only about 0.57, so it does not. More evidence is needed, which is the behaviour the panel will want to see.
- Combine with decay (section 4): count keeps with recency weights so that a settled suggestion can "unsettle" if the user stops keeping it.

### Gaps
- No study links habit-formation timescales directly to the acceptance of *system suggestions*. The N and the threshold remain design parameters that should be tuned and reported in the evaluation.
- Lally et al. (2010) figures are [K] and should be checked against the paper.

### Full APA 7 reference list
[V] = verified this session; [K] = from background knowledge, so check the DOI; (>10 yrs) = original paper older than ten years.

- Agrawal, R., Imieliński, T., & Swami, A. (1993). Mining association rules between sets of items in large databases. *Proceedings of the 1993 ACM SIGMOD International Conference on Management of Data*, 207–216. https://doi.org/10.1145/170035.170072 [K] (>10 yrs)
- Agrawal, R., & Srikant, R. (1994). Fast algorithms for mining association rules. *Proceedings of the 20th International Conference on Very Large Data Bases (VLDB)*, 487–499. (No DOI.) [K] (>10 yrs)
- Agrawal, R., & Srikant, R. (1995). Mining sequential patterns. *Proceedings of the Eleventh International Conference on Data Engineering*, 3–14. https://doi.org/10.1109/ICDE.1995.380415 [K] (>10 yrs)
- Banovic, N., Buzali, T., Chevalier, F., Mankoff, J., & Dey, A. K. (2016). Modeling and understanding human routine behavior. *Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems*, 248–260. https://doi.org/10.1145/2858036.2858557 [V]
- Blei, D. M., Ng, A. Y., & Jordan, M. I. (2003). Latent Dirichlet allocation. *Journal of Machine Learning Research, 3*, 993–1022. (No DOI.) [K] (>10 yrs)
- Brin, S., Motwani, R., Ullman, J. D., & Tsur, S. (1997). Dynamic itemset counting and implication rules for market basket data. *Proceedings of the 1997 ACM SIGMOD International Conference on Management of Data*, 255–264. https://doi.org/10.1145/253260.253325 [K] (>10 yrs)
- Cao, H., & Lin, M. (2017). Mining smartphone data for app usage prediction and recommendations: A survey. *Pervasive and Mobile Computing, 37*, 1–22. https://doi.org/10.1016/j.pmcj.2017.01.007 [V]
- Chang, J. H., & Lee, W. S. (2003). Finding recent frequent itemsets adaptively over online data streams. *Proceedings of the Ninth ACM SIGKDD International Conference on Knowledge Discovery and Data Mining*, 487–492. https://doi.org/10.1145/956750.956807 [K] (>10 yrs)
- Collins, A. M., & Loftus, E. F. (1975). A spreading-activation theory of semantic processing. *Psychological Review, 82*(6), 407–428. https://doi.org/10.1037/0033-295X.82.6.407 [K] (>10 yrs)
- Crestani, F. (1997). Application of spreading activation techniques in information retrieval. *Artificial Intelligence Review, 11*(6), 453–482. https://doi.org/10.1023/A:1006569829653 [K] (>10 yrs)
- Ding, Y., & Li, X. (2005). Time weight collaborative filtering. *Proceedings of the 14th ACM International Conference on Information and Knowledge Management*, 485–492. https://doi.org/10.1145/1099554.1099689 [K] (>10 yrs)
- Eagle, N., & Pentland, A. S. (2009). Eigenbehaviors: Identifying structure in routine. *Behavioral Ecology and Sociobiology, 63*(7), 1057–1066. https://doi.org/10.1007/s00265-009-0739-0 [K] (>10 yrs)
- Farrahi, K., & Gatica-Perez, D. (2011). Discovering routines from large-scale human locations using probabilistic topic models. *ACM Transactions on Intelligent Systems and Technology, 2*(1), Article 3. https://doi.org/10.1145/1889681.1889684 [K] (>10 yrs)
- Fournier-Viger, P., Li, Z., Lin, J. C.-W., Kiran, R. U., & Fujita, H. (2019). Efficient algorithms to identify periodic patterns in multiple sequences. *Information Sciences, 489*, 205–226. https://doi.org/10.1016/j.ins.2019.03.050 [V for title, journal, year and DOI; pages K]
- Gama, J., Žliobaitė, I., Bifet, A., Pechenizkiy, M., & Bouchachia, A. (2014). A survey on concept drift adaptation. *ACM Computing Surveys, 46*(4), Article 44. https://doi.org/10.1145/2523813 [K] (>10 yrs)
- Gan, W., Lin, J. C.-W., Fournier-Viger, P., Chao, H.-C., & Yu, P. S. (2019). A survey of parallel sequential pattern mining. *ACM Transactions on Knowledge Discovery from Data, 13*(3), Article 25. https://doi.org/10.1145/3314107 [V for DOI; volume and article number K]
- Geng, L., & Hamilton, H. J. (2006). Interestingness measures for data mining: A survey. *ACM Computing Surveys, 38*(3), Article 9. https://doi.org/10.1145/1132960.1132963 [K] (>10 yrs)
- Gerstner, W., & Kistler, W. M. (2002). Mathematical formulations of Hebbian learning. *Biological Cybernetics, 87*(5–6), 404–415. https://doi.org/10.1007/s00422-002-0353-y [K] (>10 yrs)
- Han, J., Dong, G., & Yin, Y. (1999). Efficient mining of partial periodic patterns in time series database. *Proceedings of the 15th International Conference on Data Engineering*, 106–115. https://doi.org/10.1109/ICDE.1999.754913 [K] (>10 yrs)
- Han, J., Pei, J., & Yin, Y. (2000). Mining frequent patterns without candidate generation. *Proceedings of the 2000 ACM SIGMOD International Conference on Management of Data*, 1–12. https://doi.org/10.1145/342009.335372 [K] (>10 yrs)
- Han, J., Pei, J., Yin, Y., & Mao, R. (2004). Mining frequent patterns without candidate generation: A frequent-pattern tree approach. *Data Mining and Knowledge Discovery, 8*(1), 53–87. https://doi.org/10.1023/B:DAMI.0000005258.31418.83 [K] (>10 yrs)
- Hebb, D. O. (1949). *The organization of behavior: A neuropsychological theory*. Wiley. [K] (>10 yrs; book, secondary)
- Hochreiter, S., & Schmidhuber, J. (1997). Long short-term memory. *Neural Computation, 9*(8), 1735–1780. https://doi.org/10.1162/neco.1997.9.8.1735 [K] (>10 yrs)
- Huang, K., Zhang, C., Ma, X., & Chen, G. (2012). Predicting mobile application usage using contextual information. *Proceedings of the 2012 ACM Conference on Ubiquitous Computing*, 1059–1065. https://doi.org/10.1145/2370216.2370442 [K] (>10 yrs)
- Huynh, T., Fritz, M., & Schiele, B. (2008). Discovery of activity patterns using topic models. *Proceedings of the 10th International Conference on Ubiquitous Computing*, 10–19. https://doi.org/10.1145/1409635.1409638 [K] (>10 yrs)
- Kiran, R. U., Fournier-Viger, P., Luna, J. M., Lin, J. C.-W., & Mondal, A. (Eds.). (2021). *Periodic pattern mining: Theory, algorithms, and applications*. Springer. https://doi.org/10.1007/978-981-16-3964-7 [V for book; DOI from Springer PDF URL]
- Koren, Y. (2010). Collaborative filtering with temporal dynamics. *Communications of the ACM, 53*(4), 89–97. https://doi.org/10.1145/1721654.1721677 [K] (>10 yrs)
- Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. *European Journal of Social Psychology, 40*(6), 998–1009. https://doi.org/10.1002/ejsp.674 [K] (>10 yrs)
- Li, T., Xia, T., Wang, H., Tu, Z., Tarkoma, S., Han, Z., & Hui, P. (2022). Smartphone app usage analysis: Datasets, methods, and applications. *IEEE Communications Surveys & Tutorials, 24*(2), 937–966. https://doi.org/10.1109/COMST.2022.3163176 [V]
- Lu, J., Liu, A., Dong, F., Gu, F., Gama, J., & Zhang, G. (2019). Learning under concept drift: A review. *IEEE Transactions on Knowledge and Data Engineering, 31*(12), 2346–2363. https://doi.org/10.1109/TKDE.2018.2876857 [V]
- Luna, J. M., Fournier-Viger, P., & Ventura, S. (2019). Frequent itemset mining: A 25 years review. *WIREs Data Mining and Knowledge Discovery, 9*(6), e1329. https://doi.org/10.1002/widm.1329 [K]
- Mooney, C. H., & Roddick, J. F. (2013). Sequential pattern mining: Approaches and algorithms. *ACM Computing Surveys, 45*(2), Article 19. https://doi.org/10.1145/2431211.2431218 [K] (>10 yrs)
- Oja, E. (1982). Simplified neuron model as a principal component analyzer. *Journal of Mathematical Biology, 15*(3), 267–273. https://doi.org/10.1007/BF00275687 [K] (>10 yrs)
- Pei, J., Han, J., Mortazavi-Asl, B., Wang, J., Pinto, H., Chen, Q., Dayal, U., & Hsu, M.-C. (2004). Mining sequential patterns by pattern-growth: The PrefixSpan approach. *IEEE Transactions on Knowledge and Data Engineering, 16*(11), 1424–1440. https://doi.org/10.1109/TKDE.2004.77 [K] (>10 yrs)
- Pei, J., Han, J., & Wang, W. (2007). Constraint-based sequential pattern mining: The pattern-growth methods. *Journal of Intelligent Information Systems, 28*(2), 133–160. https://doi.org/10.1007/s10844-006-0006-z [K] (>10 yrs)
- Rawassizadeh, R., Momeni, E., Dobbins, C., Gharibshah, J., & Pazzani, M. (2016). Scalable daily human behavioral pattern mining from multivariate temporal data. *IEEE Transactions on Knowledge and Data Engineering, 28*(11), 3098–3112. https://doi.org/10.1109/TKDE.2016.2592527 [V]
- Shin, C., Hong, J.-H., & Dey, A. K. (2012). Understanding and prediction of mobile application usage for smart phones. *Proceedings of the 2012 ACM Conference on Ubiquitous Computing*, 173–182. https://doi.org/10.1145/2370216.2370243 [K] (>10 yrs)
- Singh, B., Murphy, A., Maher, C., & Smith, A. E. (2024). Time to form a habit: A systematic review and meta-analysis of health behaviour habit formation and its determinants. *Healthcare, 12*(23), 2488. https://doi.org/10.3390/healthcare12232488 [V for citation details; DOI string K]
- Srikant, R., & Agrawal, R. (1996). Mining sequential patterns: Generalizations and performance improvements. In *Advances in Database Technology — EDBT '96* (LNCS 1057, pp. 1–17). Springer. https://doi.org/10.1007/BFb0014140 [K] (>10 yrs)
- Srinivasan, V., Moghaddam, S., Mukherji, A., Rachuri, K. K., Xu, C., & Tapia, E. M. (2014). MobileMiner: Mining your frequent patterns on your phone. *Proceedings of the 2014 ACM International Joint Conference on Pervasive and Ubiquitous Computing*, 389–400. https://doi.org/10.1145/2632048.2632052 [V for DOI; pages K] (>10 yrs)
- Tan, P.-N., Kumar, V., & Srivastava, J. (2004). Selecting the right objective measure for association analysis. *Information Systems, 29*(4), 293–313. https://doi.org/10.1016/S0306-4379(03)00072-3 [K] (>10 yrs)
- Tanbeer, S. K., Ahmed, C. F., Jeong, B.-S., & Lee, Y.-K. (2009). Discovering periodic-frequent patterns in transactional databases. In *Advances in Knowledge Discovery and Data Mining — PAKDD 2009* (LNCS 5476, pp. 242–253). Springer. https://doi.org/10.1007/978-3-642-01307-2_24 [K] (>10 yrs)
- Wilson, E. B. (1927). Probable inference, the law of succession, and statistical inference. *Journal of the American Statistical Association, 22*(158), 209–212. https://doi.org/10.1080/01621459.1927.10502953 [K] (>10 yrs)
- Wood, W., & Rünger, D. (2016). Psychology of habit. *Annual Review of Psychology, 67*, 289–314. https://doi.org/10.1146/annurev-psych-122414-033417 [K]
- Xia, T., Li, Y., Feng, J., Jin, D., Zhang, Q., Luo, H., & Liao, Q. (2020). DeepApp: Predicting personalized smartphone app usage via context-aware multi-task learning. *ACM Transactions on Intelligent Systems and Technology, 11*(6), Article 64. https://doi.org/10.1145/3408325 [V]
- Zaki, M. J. (2001). SPADE: An efficient algorithm for mining frequent sequences. *Machine Learning, 42*(1–2), 31–60. https://doi.org/10.1023/A:1007652502315 [K] (>10 yrs)
