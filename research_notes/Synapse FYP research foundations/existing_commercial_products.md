# Existing commercial products that overlap with Synapse (state as of November 2026)

All web sources were accessed on 2026-11-13. Many 2026 facts come from tech press or aggregator sites rather than vendor pages. Each item says how strong its source is. Items marked "(background, not re-verified)" come from the researcher's prior knowledge. They were not confirmed in this session and must be checked before they are cited.

## Q1. What do these products do today, on which devices, and do they learn routines automatically or rely on user setup?

### Takeaway
None of the mainstream products learns a person's routines across both phone and web from one consented activity log and then guides them with an LLM. Platform assistants (Gemini, Siri, Samsung) learn within one vendor's ecosystem. Wellbeing and time trackers (Digital Wellbeing, Screen Time, RescueTime) measure usage but do not learn sequences. Calendar AIs (Reclaim, Motion) schedule tasks the user enters. "Record everything" tools (Recall, Rewind/Limitless) capture a great deal but do not model routines, and Rewind/Limitless has been shut down. Screen-aware and computer-use agents (Copilot Vision, Siri onscreen awareness, Claude/Gemini/OpenAI agents) react to the current screen or task but have no long-term model of the user's habits. The 2026 market has also been unstable: Google Assistant was retired on Android phones, Clockwise and Rewind/Limitless were shut down, and the agent products were renamed or repackaged.

### Cited Findings

**Google Assistant to Gemini (Android)**
- On phones, Google Assistant is gone. The official shutdown phase began on 4 September 2026. Gemini is now the default assistant on smartphones, tablets, Wear OS watches, paired headphones and Android Auto, and opens with a long press of the power button. Nest/Home speakers and displays keep Assistant for now, and the Assistant app still works on iOS. The "Switch to Google Assistant" option was removed in Google app 17.60 (stable) — [Android Headlines, 30 Sep 2026](https://www.androidheadlines.com/2026/09/google-assistant-killed-android-gemini.html); timeline corroborated by [Implicator](https://www.implicator.ai/google-sets-september-4-date-to-replace-assistant-with-gemini-on-android/) and [Inc.](https://www.inc.com/georgia-fearn/google-is-finally-shutting-down-the-google-assistant-heres-what-android-users-need-to-know/91385340)
- Once a device switches to Gemini it cannot go back to Assistant — [Implicator](https://www.implicator.ai/google-sets-september-4-date-to-replace-assistant-with-gemini-on-android/)
- Gemini still lacks some Assistant functions: offline voice commands for quick phone settings, and smart-home automation routines — [Android Headlines](https://www.androidheadlines.com/2026/09/google-assistant-killed-android-gemini.html). Another report says Gemini supports calls, messages, routines, navigation and many device controls, but some actions work differently — [Remio](https://www.remio.ai/post/gemini-fully-replaces-google-assistant-on-android-but-reliability-is-now-the-tes) (weaker source; the two reports partly conflict on routines).
- In May 2026 Google described "proactive briefs" and an agent that manages ongoing tasks under user direction. This was reported second-hand via search summaries, and the primary Google post was not fetched — [Renascence summary](https://www.renascence.io/news/15573/google-assistant-end-of-life-september-2026-gemini-takes-over)
- Plain language: Google Assistant Routines were rule-based ("when I say 'good morning', or at 7am, do X, Y, Z"). The user built them, or picked from templates. They were not learned automatically (background, not re-verified).

**Apple: Siri, Siri Suggestions, Shortcuts automations, Screen Time**
- Apple announced "Siri AI" on 8 June 2026 and released it in September 2026 as part of the next generation of Apple Intelligence. It adds onscreen awareness (Siri can answer questions about what is on the screen, including through context menus) and personal context — [Apple Newsroom, Jun 2026](https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/); [Apple Newsroom, Sep 2026](https://www.apple.com/newsroom/2026/09/siri-ai-a-profoundly-more-capable-and-personal-assistant-is-here/)
- Earlier (Feb 2026) reporting said Apple had promised three Siri upgrades: personal context, onscreen awareness, and actions in and between apps. Some secondary sources claim Google Gemini models power parts of the new Siri. This is not confirmed by Apple's pages — [MacRumors](https://www.macrumors.com/2026/02/06/siri-ios-26-4-rumors/); [Digital Applied (secondary)](https://www.digitalapplied.com/blog/apple-siri-2026-gemini-powered-context-aware-ai)
- Plain language: Siri Suggestions learns on the device which app or action a user tends to open at a given time or place and offers it. This is automatic learning, but only within Apple devices. Shortcuts "personal automations" are triggers the user sets up (time, arriving somewhere, opening an app). Screen Time reports per-app usage and lets users set limits (background, not re-verified).

**Samsung Modes and Routines (formerly Bixby Routines)**
- Users can build "if-then" routines and pick preset modes (sleep, theatre, driving). Samsung also offers AI "auto suggestions" that generate routines from usage patterns analysed by Galaxy's Personal Data Core platform, based on time, place and occasion (TPO) — [Samsung Support (SA)](https://www.samsung.com/sa_en/support/mobile-devices/How-can-AI-affect-Modes-and-Routines); [Samsung Support (Levant)](https://www.samsung.com/levant/support/mobile-devices/how-can-ai-affect-modes-and-routines); [Samsung US support](https://www.samsung.com/us/support/answer/ANS00083201/)
- Galaxy devices only. Samsung's Africa support site also documents Routines — [Samsung Africa](https://www.samsung.com/africa_en/support/mobile-devices/how-to-use-routines-on-your-samsung-galaxy-device/)

**Google Digital Wellbeing (Android)**
- Plain language: a dashboard of screen time, unlocks and notifications per app, with app timers, Bedtime mode, Focus mode and parental controls through Family Link. It measures and limits. It does not learn routines or make suggestions beyond showing usage (background, not re-verified; the official page was not fetched).
- Academic context: [Monge Roffarello & De Russis (2019)](https://doi.org/10.1145/3290605.3300616) reviewed 42 digital-wellbeing apps and 1,128 user reviews. They found such tools mostly track use and set limits, and that this has limited effect on behaviour.

**Microsoft Recall (Windows 11, Copilot+ PCs only)**
- Plain language: Recall takes regular screenshots ("snapshots") of the screen. It reads them with OCR and AI so the user can later search "that thing I saw last week" in natural language — [Kaspersky](https://www.kaspersky.com/blog/recall-2025-risks-benefits/53407/); [Microsoft Support](https://support.microsoft.com/en-us/windows/privacy/privacy-and-control-over-your-recall-experience)
- Microsoft's support page still calls it a preview. On unmanaged PCs it is available but off until the user opts in to save snapshots — [Microsoft Support](https://support.microsoft.com/en-us/windows/privacy/privacy-and-control-over-your-recall-experience); [Microsoft Learn, Manage Recall](https://learn.microsoft.com/en-us/windows/client-management/manage-recall)
- In February 2026 Microsoft was still promoting Recall as a headline Copilot+ feature. Windows 11 lets users remove Recall entirely — [Windows Latest, Feb 2026](https://www.windowslatest.com/2026/02/20/microsoft-says-2026-is-the-moment-for-ai-pcs-touts-windows-11-recall-copilot-and-the-highest-standard-of-security/)
- Recall is a memory or search tool. It does not learn routines or give proactive suggestions.

**Microsoft Copilot (Windows) and Copilot Vision**
- Copilot Vision lets the Copilot app "see" one or two shared app windows, and later the whole desktop ("Desktop Share", first to Windows Insiders). It talks the user through a task and uses "Highlights" to point at where to click. It launched in the US only, on Windows 10 and 11, as part of Copilot Labs — [Tom's Hardware](https://www.tomshardware.com/software/windows/copilot-vision-is-live-on-windows-in-the-us-ai-companion-can-see-two-apps-at-once); [Neowin](https://www.neowin.net/news/windows-11-now-lets-you-share-the-entire-desktop-with-copilot/); [Engadget](https://engadget.com/ai/microsofts-copilot-vision-ai-helper-is-now-available-on-windows-in-the-us-160034369.html)
- For enterprise Microsoft 365 Copilot, real-time screen sharing in voice sessions began rolling out in late June 2026, with general availability planned for late July 2026 — [Microsoft message center MC1325421 via Itelio](https://www.itelio.com/en/microsoft-message-center/MC1325421)
- Copilot Vision is session-based. The user starts sharing for a single task. It does not build a long-term model of routines.

**Microsoft Viva Insights (work accounts, Microsoft 365)**
- Personal insights are built from the user's Exchange Online email and calendar data. Examples are focus-time suggestions, meeting habits and wellbeing nudges. Users opt in or out of the dashboard, the Outlook add-in, inline suggestions and digests. Briefing emails were paused at the time of access — [Microsoft Learn, Personal insights FAQ](https://learn.microsoft.com/en-us/viva/insights/personal/overview/mya-faq)
- It is available only through an organisation's Microsoft 365 tenant, not to individual students on their own devices (inference from the FAQ's work-mailbox basis).

**RescueTime (Windows, macOS, Linux, Android, browser)**
- Plain language: RescueTime runs in the background and logs which apps and websites are used and for how long. It sorts them into productive or distracting categories, gives reports and focus sessions, and can block sites. It relies on categories (default and user-edited) rather than learning sequences (product description: background, not re-verified; pricing below is sourced).
- In peer-reviewed studies, participants often failed to engage with RescueTime. Collins et al. (2014) identified four barriers to engagement — [Collins et al., 2014](https://doi.org/10.1145/2686612.2686668); barrier list as summarised by later citing work in search results (not checked against the full text).

**Reclaim.ai (web; Google and Outlook calendars; owned by Dropbox, background)**
- Plain language: the user enters habits (for example "gym 3x/week"), tasks and focus-time goals. Reclaim's AI finds and defends time for them on the calendar and reschedules when conflicts arise. Habits are user-defined. It adapts their placement, not their content (background description). Reclaim publicly courted Clockwise's users after Clockwise shut down — [Reclaim help notice](https://help.reclaim.ai/en/articles/14071559); [Reclaim blog](https://reclaim.ai/blog/clockwise-shutdown-news)

**Motion (web, iOS, Android)**
- Plain language: an AI planner that takes the user's task list, deadlines and meetings and builds a schedule automatically, re-planning when things change. It has no free plan — [CostBench comparison](https://costbench.com/compare/motion-vs-reclaim-ai/); [Asian Efficiency](https://www.asianefficiency.com/schedule-management/motion-vs-reclaim/)

**Clockwise: DISCONTINUED**
- Clockwise (an AI calendar optimiser for teams) shut down on 27 March 2026 after its team joined Salesforce to work on Agentforce — [Doodle](https://doodle.com/en/clockwise-is-shutting-down-what-to-do-next-in-2026/); [Pulse summary](https://www.pulse.bot/ceo-pulse/news/clockwises-team-joins-salesforce-sunsetting-platform-as-they-go-0a371bee-5e75-4ed3-88e6-7ed0db628c5a/); [Reclaim notice](https://help.reclaim.ai/en/articles/14071559)
- Sources conflict on what happened to user data. One says accounts were deleted with no read-only mode, while Doodle urged users to export — [usecarly](https://www.usecarly.com/blog/clockwise-shut-down) vs [Doodle](https://doodle.com/en/clockwise-is-shutting-down-what-to-do-next-in-2026/)

**Rewind / Limitless: DISCONTINUED**
- Rewind (a Mac app that recorded the screen and audio for searchable personal memory) became Limitless (a web/desktop app plus a wearable "Pendant" that recorded conversations). Meta acquired Limitless in December 2025. The Rewind Mac app shut down on 19 December 2025, recording in the Limitless web and desktop apps was disabled the same day, and Pendant sales stopped. Existing customers get one year of support — [9to5Mac](https://9to5mac.com/2025/12/05/rewind-limitless-meta-acquisition/); [TechCrunch via scour.ing](https://scour.ing/@emschwartz/p/https://techcrunch.com/2025/12/05/meta-acquires-ai-device-startup-limitless); [Sacra](https://sacra.com/research/why-meta-bought-limitless/)
- Service in the EU and UK was discontinued, with a data-export deadline. This comes from a competitor's blog, so treat with care — [Hedy.ai](https://www.hedy.ai/post/meta-acquires-limitless-ai-privacy/)

**Computer-use and agent products (OpenAI, Anthropic, Google)**
- OSWorld, the standard benchmark for computer-use agents: humans complete 72.36% of 369 real desktop tasks. The best model in 2024 managed 12.24% — [Xie et al., NeurIPS 2024](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf). A 2026 paper reports frontier agents exceeding 85% on OSWorld-Verified (reported in search summary; paper not fetched) — [OSExpert, arXiv 2603.07978](https://arxiv.org/pdf/2603.07978)
- Anthropic: Claude computer use reportedly reached general availability in August 2026 (sources give 19 or 21 August) on the API, Amazon Bedrock and Vertex AI. Consumer access is through Claude in Chrome and Cowork, and Pro costs about $20/month — [agentstackwatch guide](https://agentstackwatch.com/guide/); [TechVerdict](https://www.techverdict.io/articles/best-ai-agent-tools-2026) (low-reliability aggregators; verify on anthropic.com)
- OpenAI: sources conflict. One says the help centre now marks "ChatGPT agent" as no longer available and points to "ChatGPT Work" (launched 13 July 2026, included with Plus at $20/month, asks before key steps). Another still lists agent mode on paid plans — [izzedo](https://www.izzedo.chat/blog/ai-agent-mode) vs [tech-insider](https://tech-insider.org/ie/chatgpt-vs-claude-vs-gemini-agent-mode-2026/) (both low-reliability; verify on openai.com)
- Google: the Gemini computer-use model is in Preview, with configurable safety policies and confirmation decisions. Reports conflict on whether consumer "Gemini Agent" needs AI Ultra ($99.99/month, US/English only) or AI Pro — [agentstackwatch](https://agentstackwatch.com/guide/); [tech-insider](https://tech-insider.org/ie/chatgpt-vs-claude-vs-gemini-agent-mode-2026/)

### Inferences
- The products fall into five groups, which suit a comparison table: (1) platform assistants with some learned suggestions (Gemini, Siri, Samsung); (2) usage trackers and wellbeing tools (Digital Wellbeing, Screen Time, RescueTime); (3) AI calendar schedulers (Reclaim, Motion, and formerly Clockwise); (4) total-recall memory tools (Recall, and formerly Rewind/Limitless); (5) screen-aware and computer-use agents (Copilot Vision, Siri onscreen awareness, Claude/Gemini/OpenAI agents).
- Only Samsung's auto-suggestions and Apple's Siri Suggestions clearly learn routines automatically. Both are tied to one vendor's hardware, and neither covers web activity on other devices.
- The scheduling tools adapt, but only to what the user typed in. They do not observe behaviour.
- Two of the closest "capture everything" products (Rewind/Limitless and Clockwise) shut down within four months of each other. Both shutdowns followed acquisitions by big-tech companies. This is worth noting as a risk for users who hand their data to small vendors.

### Gaps
- No official Google page was fetched that confirms which Gemini routine and proactive features exist on Android in November 2026. The press reports partly conflict.
- Apple Screen Time, Siri Suggestions, Shortcuts automations and Google Digital Wellbeing descriptions are from background knowledge. Official help pages were not fetched this session.
- Agent product names, launch dates and plan tiers (ChatGPT Work vs agent mode, Gemini Agent tier) come from low-reliability aggregators that contradict each other. Check vendor pages before citing.
- Reclaim's ownership by Dropbox (acquired 2024) is from background knowledge.

## Q2. How does each handle privacy and consent (what is captured, where stored, on-device vs cloud, controversies)?

### Takeaway
Privacy approaches range from on-device and opt-in (Recall after its redesign, Apple's on-device learning) to cloud-based within one vendor's account (Gemini, Samsung, Viva, RescueTime, calendar AIs). Microsoft Recall is the defining controversy: it was pulled and redesigned in 2024, and even in 2025–26 testers found that its sensitive-data filter missed unlabelled passwords and card numbers. The Rewind/Limitless and Clockwise shutdowns show a second risk: data stranded or deleted when a vendor is acquired.

### Cited Findings
- **Recall's design.** No internet or cloud connection is used to save or analyse snapshots, and Microsoft says it cannot see them. Windows Hello identity checks are required to open Recall and view snapshots — [Microsoft Support](https://support.microsoft.com/en-us/windows/privacy/privacy-and-control-over-your-recall-experience). Snapshots and the vector database are encrypted with TPM-protected keys tied to Windows Hello Enhanced Sign-in Security — [Wikipedia summary of Microsoft's security architecture](https://en.wikipedia.org/wiki/Windows_Recall)
- **Recall's controversy history.** The 2024 preview stored its database unencrypted. A tool called "TotalRecall" showed the local data could be stolen, and Microsoft then delayed the feature, made it opt-in and re-architected it — [Wikipedia](https://en.wikipedia.org/wiki/Windows_Recall); [TechRadar](https://www.techradar.com/computing/windows/microsoft-dropping-copilot-notification-plans-is-a-victory-for-users-but-the-fight-over-windows-11s-soul-continues)
- **Recall's filter still leaks.** The Register's test found the sensitive-information filter caught labelled passwords but captured an unlabelled list of usernames and passwords. Others reported card forms and healthcare portal data being saved — [PC Gamer reporting The Register](https://www.pcgamer.com/gaming-industry/new-report-alleges-microsoft-recall-is-still-screenshotting-credit-card-numbers-and-passwords/); [Windows News](https://windowsnews.ai/article/microsoft-recall-after-2024-opt-in-usefulness-vs-sensitive-info-gaps.419173); [Kaspersky](https://www.kaspersky.com/blog/recall-2025-risks-benefits/53407/)
- Critics still call Recall "an OS-level keylogger with a visual component" — [How-To Geek (opinion)](https://www.howtogeek.com/microsoft-has-lost-the-plot-windows-features-nobody-asked-for/)
- **Viva Insights.** Personal insights are visible only to the user, not to their manager or admin. Managers see only aggregated metrics protected by differential privacy. Anyone given delegate access to the mailbox can see the digest insights — [Microsoft Learn FAQ](https://learn.microsoft.com/en-us/viva/insights/personal/overview/mya-faq); [Microsoft Viva privacy](https://www.microsoft.com/microsoft-viva/privacy)
- **Samsung Modes and Routines.** It has its own Privacy Notice and permission controls. Its suggestions come from Galaxy's Personal Data Core platform — [Samsung Support](https://www.samsung.com/sa_en/support/mobile-devices/How-can-AI-affect-Modes-and-Routines); [Samsung AE how-to](https://ushl.samsung.com/ae/support/mobile-devices/how-to-create-and-manage-modes-and-routines-on-a-galaxy-device)
- **Rewind/Limitless.** The privacy concern sharpened after the Meta acquisition. German outlet heise called it "Eavesdropping as a feature" — [heise](https://heise.de/-11105985). The company promised tools to export or delete data — [9to5Mac](https://9to5mac.com/2025/12/05/rewind-limitless-meta-acquisition/)
- **Gemini.** The press lists data-privacy questions among the reasons users resist the forced switch, but gives no specifics — [Android Headlines](https://www.androidheadlines.com/2026/09/google-assistant-killed-android-gemini.html)
- **Agents.** Claude's Gmail and Calendar connectors ask before sending by default. Gemini's computer-use model has confirmation decisions and optional prompt-injection detection — [agentstackwatch](https://agentstackwatch.com/guide/) (low-reliability)
- **Apple.** Apple says its personal-context features run on the device or on Private Cloud Compute (background, not re-verified; the Apple Newsroom pages above were not fetched for privacy detail).

### Inferences
- Recall shows what happens without strict consent at the level of each data category. "Capture everything, filter afterwards" leaks credentials. Synapse's choices directly answer this failure: per-category consent, skipping `isPassword` fields and the lock screen, and never recording PINs, passwords or card numbers.
- Most cloud products ask for consent once, for the whole app ("allow usage access"). None of those reviewed offered consent at a finer, per-category level for cross-device activity logs. This is a reasonable contrast for Synapse, but it is the researcher's inference, not an audited finding.
- The vendor-shutdown cases support Synapse's planned export and delete-all features (NDPA 2023 and GDPR rights).

### Gaps
- No primary Google or Apple privacy documents for 2026 Gemini or Siri AI were fetched.
- No source was found on RescueTime's, Motion's or Reclaim's data storage location or retention.

## Q3. Which are available or affordable in Nigeria, and what do they cost?

### Takeaway
The phone-native tools (Digital Wellbeing, Gemini on Android, Samsung Modes and Routines, and Siri/Screen Time on iPhone) come free with the device. In Nigeria, though, Android dominates and iPhones and Copilot+ PCs are expensive. The paid tools are priced in US dollars: RescueTime about $6.50–12/month, Reclaim free–$12/month, Motion about $19–29/month, and agents about $20–100/month. Copilot Vision and some agent tiers launched US-only. Recall needs a Copilot+ PC, which few Nigerian students own.

### Cited Findings
- **Reclaim.ai:** a free "Lite" plan for one user, and Starter at $10/month billed annually or $12 monthly — [CostBench](https://costbench.com/compare/motion-vs-reclaim-ai/); [PricingSaaS](https://pricingsaas.com/companies/reclaim)
- **Motion:** no free plan. Sources conflict: Pro AI is $19/month (about $12.73 annually) in one source, and $29/user/month (Business AI $49) in another — [Techpresso](https://academy.techpresso.co/reviews/is-motion-worth-it); [CostBench alternatives](https://costbench.com/software/ai-productivity/motion/alternatives/)
- **RescueTime:** Solo about $7–12/month ($6.50/month annually), Team $10–16/user/month. Capterra lists $6.50/month — [CostBench](https://costbench.com/software/time-tracking/rescuetime/); [Capterra](https://www.capterra.com/p/103317/RescueTime/pricing/)
- **Clockwise:** not available (shut down 27 March 2026) — [Doodle](https://doodle.com/en/clockwise-is-shutting-down-what-to-do-next-in-2026/)
- **Rewind/Limitless:** not available (shut down December 2025) — [9to5Mac](https://9to5mac.com/2025/12/05/rewind-limitless-meta-acquisition/)
- **Copilot Vision:** launched in the US. Microsoft said it was "coming to more non-European countries soon", and no country list was found for November 2026 — [Engadget](https://engadget.com/ai/microsofts-copilot-vision-ai-helper-is-now-available-on-windows-in-the-us-160034369.html); [Tom's Hardware](https://www.tomshardware.com/software/windows/copilot-vision-is-live-on-windows-in-the-us-ai-companion-can-see-two-apps-at-once)
- **Recall:** Copilot+ PCs only — [Microsoft Copilot+ PCs](https://www.microsoft.com/en-us/windows/business/devices/copilot-plus-pcs)
- **Agents:** ChatGPT Plus/Work about $20/month. Claude Pro $20/month ($17 annually), Max from $100/month. Gemini Agent possibly AI Ultra at $99.99/month, US/English only (disputed) — [agentstackwatch](https://agentstackwatch.com/guide/) (low-reliability)
- **Samsung:** Samsung's Africa support site documents Routines, which suggests the feature ships on Galaxy phones sold in Africa — [Samsung Africa](https://www.samsung.com/africa_en/support/mobile-devices/how-to-use-routines-on-your-samsung-galaxy-device/)
- **Viva Insights:** needs an organisational Microsoft 365 work account — [Microsoft Learn FAQ](https://learn.microsoft.com/en-us/viva/insights/personal/overview/mya-faq)

### Inferences
- For a typical Nigerian undergraduate on a mid-range Android phone, the realistic free options are Digital Wellbeing, Gemini, and (on Samsung) Modes and Routines. The dollar-priced subscriptions are a real cost burden. Synapse's planned stack (Android client, web client, Supabase free tier) is cheaper to access.
- Exchange-rate conversions to naira are left out on purpose. The rate moves too much, so the report writer should insert a current rate and its date if needed.

### Gaps
- No official confirmation was found that the Gemini app, Gemini Live screen sharing, Apple's Siri AI or Copilot Vision are enabled in Nigeria as of November 2026.
- No source was found on how easily Nigerian naira cards can pay for foreign subscriptions (FX limits on cards). This is relevant to affordability but unverified.
- No data was found on Nigerian market share of Android vs iPhone or Samsung vs other brands among students.

## Q4. What gaps do they leave that Synapse addresses?

### Takeaway
Synapse's distinct combination is: (a) automatic routine and sequence learning that (b) spans the Android phone and the web, (c) under consent for each data category, (d) adapts as habits change, and (e) gives LLM guidance aimed at students, with (f) a later screen companion that confirms every action. Each existing product covers at most two of these.

### Cited Findings
- Samsung's routine auto-suggestions learn from usage, but only on Galaxy devices and within Samsung's own platform (Personal Data Core) — [Samsung Support](https://www.samsung.com/sa_en/support/mobile-devices/How-can-AI-affect-Modes-and-Routines)
- Gemini on Android lacks some automation routines that Assistant had — [Android Headlines](https://www.androidheadlines.com/2026/09/google-assistant-killed-android-gemini.html)
- Recall captures everything locally but offers recall and search, not guidance. Its consent is all-or-nothing at the level of the whole feature, with filters added afterwards that leak — [Microsoft Support](https://support.microsoft.com/en-us/windows/privacy/privacy-and-control-over-your-recall-experience); [PC Gamer](https://www.pcgamer.com/gaming-industry/new-report-alleges-microsoft-recall-is-still-screenshotting-credit-card-numbers-and-passwords/)
- Copilot Vision is session-based screen help, US-first — [Tom's Hardware](https://www.tomshardware.com/software/windows/copilot-vision-is-live-on-windows-in-the-us-ai-companion-can-see-two-apps-at-once)
- Viva Insights works only from a work mailbox and calendar in an organisational tenant — [Microsoft Learn FAQ](https://learn.microsoft.com/en-us/viva/insights/personal/overview/mya-faq)
- Users of tracking-only tools disengage. RescueTime users lacked contextual information and action advice — [Collins et al., 2014](https://doi.org/10.1145/2686612.2686668). Digital-wellbeing apps mostly track and limit — [Monge Roffarello & De Russis, 2019](https://doi.org/10.1145/3290605.3300616)
- Computer-use agents still fell well short of humans on real desktop tasks in the original benchmark (12% vs 72%) — [Xie et al., 2024](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf). This supports Synapse's choice to confirm each action.

### Inferences
- **Gap 1, cross-ecosystem learning.** No product learns one routine model from both phone app use and web browsing across vendors.
- **Gap 2, observed vs declared habits.** Reclaim and Motion adapt schedules to habits the user declares. Synapse learns habits from what the user actually does and updates the model when behaviour drifts.
- **Gap 3, from tracking to guidance.** Trackers show numbers but give no advice (the Collins et al. barrier). Synapse's LLM guide turns patterns into next-step suggestions.
- **Gap 4, granular consent.** Most products ask for consent once per app or feature. Synapse asks per category, with hard exclusions for credentials, as a response to the Recall pattern.
- **Gap 5, student focus and affordability.** None of the products is designed around a student's timetable, coursework and study sessions. The paid ones are priced in dollars, and the enterprise ones (Viva) are out of reach.
- **Gap 6, memory plus routine plus agent in one consented system.** Memory (Recall), routine learning (Samsung, Siri) and agents (Copilot Vision, computer use) exist only as separate products. Synapse plans to combine them, with confirmation for every action.
- Caution for the write-up: Apple's Siri AI "personal context" and Google's "proactive briefs" are moving toward Synapse's goals, so the gap is narrowing inside each ecosystem. The claim should be framed as "cross-platform, consent-first, student-focused", not "nobody does proactive suggestions".

### Gaps
- No direct feature-by-feature test was done (for example, whether Siri AI personal context learns web routines in Safari). These claims rest on vendor descriptions.

## Q5. Are there peer-reviewed studies that evaluate or describe these products?

### Takeaway
Peer-reviewed work exists for usage trackers (RescueTime, iOS Screen Time), digital-wellbeing apps as a category, and computer-use agents (the OSWorld benchmark). No peer-reviewed study of Microsoft Recall, Reclaim, Motion, Clockwise or Viva Insights as products was found. For those, the review must use official documentation and press, labelled as such.

### Cited Findings

**Verified peer-reviewed references (APA 7):**
- Collins, E. I. M., Cox, A. L., Bird, J., & Cornish-Tresstail, C. (2014). Barriers to engagement with a personal informatics productivity tool. In *Proceedings of the 26th Australian Computer-Human Interaction Conference (OzCHI '14)* (pp. 370–379). ACM. https://doi.org/10.1145/2686612.2686668. A study of RescueTime: participants did not engage with it, and four barriers were identified — [ACM DOI](https://doi.org/10.1145/2686612.2686668)
- Monge Roffarello, A., & De Russis, L. (2019). The race towards digital wellbeing: Issues and opportunities. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (Paper 386, pp. 1–14). ACM. https://doi.org/10.1145/3290605.3300616. It reviews 42 digital-wellbeing apps, analyses 1,128 user reviews, and reports a 3-week field study — [ACM DL](https://dl.acm.org/doi/10.1145/3290605.3300616)
- Ohme, J., Araujo, T., de Vreese, C. H., & Piotrowski, J. T. (2021). Mobile data donations: Assessing self-report accuracy and sample biases with the iOS Screen Time function. *Mobile Media & Communication, 9*(2), 293–313. https://doi.org/10.1177/2050157920959106. Using iOS Screen Time logs (n = 404), self-reports were off by an average of 110 minutes, correlated only 0.3–0.4 with the logs, and tended to under-report. This supports the case for logged rather than self-reported activity — [SAGE](https://journals.sagepub.com/doi/10.1177/2050157920959106)
- Hiniker, A., Hong, S. R., Kohno, T., & Kientz, J. A. (2016). MyTime: Designing and evaluating an intervention for smartphone non-use. In *Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems* (pp. 4746–4757). ACM. https://doi.org/10.1145/2858036.2858403. DOI confirmed in search results; the author list and page numbers are from background knowledge and should be verified — [ACM PDF](https://dl.acm.org/doi/pdf/10.1145/2858036.2858403)
- Xie, T., Zhang, D., Chen, J., Li, X., Zhao, S., Cao, R., … Yu, T. (2024). OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments. In *Advances in Neural Information Processing Systems 37 (Datasets and Benchmarks Track)*. NeurIPS proceedings have no DOI, so cite the URL: https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf. Humans scored 72.36% and the best model 12.24% on 369 tasks. The co-author list after Zhang is from background knowledge, so verify it — [NeurIPS](https://neurips.cc/virtual/2024/poster/97468)

**Candidate peer-reviewed references (from background knowledge; DOIs NOT verified this session, so check before citing):**
- Lyngs, U., Lukoff, K., Slovak, P., Binns, R., Slack, A., Inzlicht, M., Van Kleek, M., & Shadbolt, N. (2019). Self-control in cyberspace: Applying dual systems theory to a review of digital self-control tools. *CHI '19*. https://doi.org/10.1145/3290605.3300361. A review of 367 digital self-control tools.
- Shin, C., Hong, J.-H., & Dey, A. K. (2012). Understanding and prediction of mobile application usage for smart phones. *UbiComp '12*, 173–182. https://doi.org/10.1145/2370216.2370243. The academic basis for app-prediction features like Siri Suggestions.
- Ammari, T., Kaye, J., Tsai, J. Y., & Bentley, F. (2019). Music, search, and IoT: How people (really) use voice assistants. *ACM Transactions on Computer-Human Interaction, 26*(3), Article 17. https://doi.org/10.1145/3311956. Usage logs of Google Assistant and Alexa.
- Almoallim, S., & Sas, C. (2022). Toward research-informed design implications for interventions limiting smartphone use: Functionalities review of digital well-being apps. *JMIR Formative Research, 6*(4), e31730. https://doi.org/10.2196/31730

**Official and press sources:** listed inline throughout Q1–Q4. All were accessed 2026-11-13 and should be cited in the review with URL and access date.

### Inferences
- In the review, use peer-reviewed sources to make the general claims: trackers fail without context and advice (Collins), wellbeing apps only track and limit (Monge Roffarello), self-reports are inaccurate so logging is needed (Ohme), and agents are not yet reliable (Xie). Use official and press sources only for current product features, prices and the Recall controversy, where no peer-reviewed work exists yet.

### Gaps
- No peer-reviewed paper on Microsoft Recall was found, despite a targeted search; only press, vendor and security-blog analyses turned up. The same goes for Reclaim, Motion, Clockwise, Viva Insights (as a product), Samsung Modes and Routines, and Gemini/Siri AI's 2026 features.
- ACM DL and Google Scholar were not queried directly because of the time budget. A direct ACM DL search for "Recall" with "screenshot" and "privacy", and for "Copilot Vision" or "screen-aware assistant", may turn up 2025–26 CHI, SOUPS or USENIX papers.
