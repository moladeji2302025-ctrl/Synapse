# Free AI (LLM) options for Synapse: text guide and vision screen companion (state as of November 2026)

All pages were accessed on **2026-11-13** unless stated otherwise. Free tiers change often, and several providers no longer publish their free limits (they show them only in a logged-in console). Anything that comes from a third-party aggregator, not the provider itself, is marked **(third-party, unverified)**. Model names such as "Gemini 3.8 Flash", "Gemma 4" and "Qwen3.8-27B" are newer than this researcher's training data. They are reported as the sources give them, and several independent sources (Google's pricing page, Arena, Groq, Cerebras and Cloudflare) agree on them.

## Which providers offer free API access today, and with what limits?

### Takeaway
Free API access in late 2026 is narrower than in 2024–25. Google Gemini still has a real free tier, but only for Flash/Flash-Lite-class models, and Google no longer publishes the limits (developers report about 20 requests a day for 3.x Flash). The most usable free capacity now comes from Groq (about 1K requests a day per model), Cerebras' free trial, Cloudflare Workers AI (10,000 "neurons" a day) and OpenRouter `:free` models (50–1,000 requests a day). GitHub Models has been retired, and Hugging Face no longer gives free users any inference credit.

### Cited Findings
**Google Gemini API (AI Studio)**
- The docs moved from ai.google.dev to aistudio.google.com (301 redirects). The rate-limits page publishes no per-model free numbers and says limits "can be viewed in Google AI Studio". Limits apply "per project, not per API key", and daily quotas reset at midnight Pacific. — [Gemini rate limits](https://aistudio.google.com/docs/rate-limits)
- The only free figure on that page is for Gemini Decision 1: 200 RPM, 50,000 TPM, 10,000 RPD. `gemini-omni-1.2-flash` is "Not supported" on Free. — [Gemini rate limits](https://aistudio.google.com/docs/rate-limits)
- Models listed as "Free of charge" on the Standard tier: `gemini-3.8-flash`, `gemini-3.6-flash`, `gemini-3-flash-preview`, `gemini-3.5-flash-lite`, `gemini-3.1-flash-lite`, `gemini-4-hydrogen`, the TTS/Live/transcribe models, the embeddings models, and the deprecated `gemini-2.5-flash`/`-flash-lite`/`-pro` (rerouted from 2026-12-01). — [Gemini pricing](https://aistudio.google.com/docs/pricing)
- No free tier for: `gemini-4-carbon`, `gemini-4-argon`, `gemini-3.1-pro-preview`, `gemini-omni-1.2-flash`, or any image-generation model. — [Gemini pricing](https://aistudio.google.com/docs/pricing)
- Reported limits: 3.x Flash returns 429 errors at about **20 RPD**, and 3.x Flash-Lite allows about **500 RPD** (developer reports, September 2026). Gemini 2.5 Flash was cut from 10 RPM/250 RPD to 5 RPM/20 RPD on 2025-12-06, and Pro models are paid-only. The same page lists Gemma 4 as free on the Gemini API. — [agentdeals.dev, third-party, unverified](https://agentdeals.dev/gemini-api-pricing-changes)
- Other aggregators conflict. Older guides still quote 10 RPM, 250K TPM and 250 RPD (or about 1,500 RPD) for 2.5 Flash, and these figures are probably out of date. — [scriptbyai](https://www.scriptbyai.com/gemini-api-free-tier-limits/); [yingtu.ai](https://yingtu.ai/en/blog/google-gemini-api-free-tier) (third-party)
- Free-tier eligibility requires an "Active project or free trial", and some projects need verification. — [Gemini rate limits](https://aistudio.google.com/docs/rate-limits)

**Groq**
- Published limits per model (the page labels them "base limits for the Developer plan", and the separate Free plan is not shown on the extracted page):
  - `openai/gpt-oss-120b`: 30 RPM, 1K RPD, 8K TPM, 200K TPD
  - `openai/gpt-oss-20b`: 30 RPM, 1K RPD, 8K TPM, 200K TPD
  - `qwen/qwen3.8-27b`: 30 RPM, 1K RPD, 8K TPM, 200K TPD
  - `whisper-large-v3`: 20 RPM, 2K RPD

  — [Groq rate limits](https://console.groq.com/docs/rate-limits)
- A third-party guide reports exactly these figures (gpt-oss-120b at 30 RPM, 1K RPD, 8K TPM, 200K TPD) as the **free**-plan limits, read 2026-09-15. Groq's own docs describe the Developer plan as an upgrade that gives "higher limits". — [apidog, third-party](https://apidog.com/blog/groq-api-free/)
- Production models: `llama-3.1-8b-instant`, `llama-3.3-70b-versatile`, `openai/gpt-oss-120b` and `openai/gpt-oss-20b`, all with a 131,072-token context. Preview models include `qwen/qwen3.8-27b` (131K), `minimaxai/minimax-m2.7` (196K) and `meta-models/muse-spark-open` (131K). — [Groq models](https://console.groq.com/docs/models)
- One source reports that Llama 3.1 8B and 3.3 70B moved to Enterprise-only pricing (August 2026) and dropped off the Free and Developer rate-limit tables. This is a single source. — [usagepricing.com, third-party](https://www.usagepricing.com/blueprint/activity/groq-2026-08-26-llama-enterprise-only)

**Cerebras**
- Free Trial: `gpt-oss-120b` at 5 RPM, 30K uncached TPM, 90K total TPM, 1M tokens per hour, 1M TPD. `qwen-3.8-27b` at 300 RPM, 150K uncached TPM, and 750K total TPM (temporarily raised from 450K). Image limits are 2 images per request and a 10 MiB total payload. — [Cerebras rate limits](https://inference-docs.cerebras.ai/support/rate-limits)

**OpenRouter**
- `:free` models: 20 RPM always. 50 RPD if you have bought fewer than 10 credits in total, or 1,000 RPD once you have bought at least 10. — [OpenRouter limits](https://openrouter.ai/docs/api-reference/limits)
- The free catalogue is small right now. The free-filtered model list showed only Perplexity Decider Flash V1.3 and Decider V1.3 (decision models, not chat), Baidu ERNIE-5.5-Flash-Preview (1.02M context), and **Thinking Machines Inkling 2 Small** (1.05M context, text plus image input, tool calling). — [OpenRouter models, max_price=0](https://openrouter.ai/models?max_price=0)

**Cloudflare Workers AI**
- 10,000 neurons a day free, reset at 00:00 UTC. Above that, $0.011 per 1,000 neurons on Workers Paid. — [Workers AI pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/)
- Cost in neurons per million tokens (input / output):

  | Model | Input | Output |
  |---|---|---|
  | `llama-3.2-1b-instruct` | 2,457 | 18,252 |
  | `llama-3.1-8b-instruct-fp8-fast` | 4,119 | 34,868 |
  | `llama-3.2-11b-vision-instruct` | 4,410 | 61,493 |
  | `llama-4-scout-17b-16e-instruct` | 24,545 | 77,273 |
  | `google/gemma-4-26b-a4b-it` | 9,091 | 27,273 |
  | `gemma-3-12b-it` | 31,371 | 50,560 |
  | `mistral-small-3.1-24b-instruct` | 31,876 | 50,488 |
  | `qwen3-30b-a3b-fp8` | 4,625 | 30,475 |
  | `qwen/qwen3.8-27b` | 40,909 | 290,909 |

  Some newer models need a paid billing method. — [Workers AI pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/)

**Mistral (La Plateforme, "Experiment"/Free plan)**
- The free Experiment plan exists, and its API requests may be used for training (you can opt out). — [Mistral help, via search](https://help.mistral.ai/en/articles/347614-can-i-opt-out-of-my-input-or-output-data-being-used-for-training)
- The limits are disputed. Mid-2026 guides say about 1 request a second, 500K TPM and about 1B tokens a month. An October 2026 guide says Mistral publishes no numbers (they are shown per workspace in the admin panel), and that the pricing page dropped its "$10/month free credits" wording on 2026-10-07. — [activepieces](https://www.activepieces.com/blog/mistral-api-free-tier-limits-models-credits-2026.md); [agentdeals](https://agentdeals.dev/mistral-api-pricing-2026) (third-party, unverified)
- The official Experiment-plan help article (450104) now returns **404**, which suggests the plan has been restructured. — [Mistral help 404](https://help.mistral.ai/en/articles/450104-how-can-i-try-the-api-for-free-with-the-experiment-plan)

**GitHub Models: retired**
- "As of July 30, 2026, GitHub Models has been fully retired." The page points users to Azure AI Foundry. — [GitHub Docs](https://docs.github.com/en/github-models/use-github-models/prototyping-with-ai-models)

**Hugging Face Inference Providers**
- Free users get **no** monthly credits and must buy credits. PRO users get $2.00 a month. The router is OpenAI-compatible at `https://router.huggingface.co/v1`. — [HF pricing](https://huggingface.co/docs/inference-providers/pricing)

### Inferences
- For a live demo, Gemini 3.x Flash's reported ~20 RPD would run out within one test session. Gemini Flash-Lite (~500 RPD reported), Groq (1K RPD per model, so separate models give separate pools) and Cloudflare are more realistic free daily budgets.
- Groq's 8K TPM is the binding limit for the guide. If each request carries ~3K tokens of routine context, that allows only about 2 requests a minute. The prompt context needs to be summarised or trimmed.
- On Cloudflare, `gemma-4-26b-a4b-it` costs about 26 neurons for a request of 2,000 tokens in and 300 out (18.2 + 8.2). That is roughly **380 requests a day** free (calculated from the published rates; image tokens would add to this).
- Because these are free tiers, the app should treat 429 responses as normal and fall back to a second provider.

### Gaps
- Exact current Gemini free RPM/RPD per model: Google shows these only inside a logged-in AI Studio page.
- Whether Groq still has a separate "Free" plan with lower limits than the Developer table. The extracted page showed only Developer limits, while third-party guides call the same numbers "free".
- Mistral's current free limits and whether the Experiment plan still exists under that name (the official help article returns 404).
- Context-length caps on Cerebras' free trial (not listed).
- OpenRouter's free list may have been filtered or incomplete in the fetched view. Other `:free` models may exist.

## Which free options support vision (image input) and tool/function calling?

### Takeaway
Free vision plus tool calling is available on: Gemini Flash/Flash-Lite (free tier, OpenAI-compatible, both features documented), Gemma 4 (every size handles images and has built-in function calling, and it is free on Cloudflare Workers AI and reportedly on the Gemini API), OpenRouter's Inkling 2 Small (free, images and tools), and Cerebras' `qwen-3.8-27b` (image limits are published, so images are accepted).

### Cited Findings
- Gemini models whose pricing lists image input include `gemini-3.5-flash-lite` (text, image, video, audio), `gemini-3.1-flash-lite`, `gemini-3-flash-preview` and `gemini-2.5-flash`/`-lite`. The pricing page does not state image input for `gemini-3.8-flash`, `gemini-3.6-flash` or `gemini-4-hydrogen`. — [Gemini pricing](https://aistudio.google.com/docs/pricing)
- Gemini's OpenAI-compatible endpoint supports base64 `image_url` image input and OpenAI-format function calling (`tool_choice: "auto"`). — [Gemini OpenAI compatibility](https://aistudio.google.com/docs/openai)
- Gemma 4 sizes: E2B, E4B, 12B, 26B A4B (mixture-of-experts) and 31B dense. "All models process text and images", video is supported, audio is native on E2B, E4B and 12B, function calling is built in, and context is 128K (small) or 256K (medium). — [Gemma docs](https://ai.google.dev/gemma/docs/core)
- `@cf/google/gemma-4-26b-a4b-it` and `@cf/meta/llama-3.2-11b-vision-instruct` are on Cloudflare Workers AI. The pricing page does not itself state capabilities. — [Workers AI pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/)
- OpenRouter's free Inkling 2 Small accepts text and image and supports tool calling. — [OpenRouter models](https://openrouter.ai/models?max_price=0)
- Cerebras lists "2 images per request" for its free-trial limits, which means image input is accepted, apparently on `qwen-3.8-27b`. — [Cerebras rate limits](https://inference-docs.cerebras.ai/support/rate-limits)
- Groq's models page does not show vision or tool-use flags in the extracted text. It mentions only gpt-oss-120b's built-in browser search and code execution. — [Groq models](https://console.groq.com/docs/models)

### Inferences
- Gemma 4 is the most portable choice for the screen companion. One model family with vision and function calling is available free on Cloudflare, reportedly free on the Gemini API, and runs locally or on a phone. That means the same prompts and tool schemas can be used across hosted and on-device deployment.
- Groq's free text models (gpt-oss) appear to be text-only. Groq suits the text guide but probably not the vision companion.

### Gaps
- An official confirmation of vision and function-calling support for each Cloudflare model ID, and of Groq's `qwen/qwen3.8-27b` vision support (capability icons did not extract).
- Whether Gemma 4 on the Gemini API free tier carries the same data-use terms as Gemini models. It most likely does, since the terms cover "Unpaid Services" generally, but this was not checked on a Gemma-specific page.

## What do the terms say about training, human review, retention and region availability (Nigeria)?

### Takeaway
**Gemini's free tier trains on and lets humans review inputs, and its terms tell developers not to submit personal information.** That directly conflicts with sending Synapse users' personal activity data, unless the data is de-identified or synthetic, or the paid tier is used. Gemini also requires users to be 18 or older and limits users in the EEA, UK and Switzerland to paid services. Nigeria is a supported Gemini region. Cloudflare Workers AI explicitly does not train on customer content and keeps no inputs or outputs. Groq keeps no inference data by default and offers Zero Data Retention to all customers. Mistral's free plan trains by default unless you opt out. OpenRouter's free endpoints depend on each upstream provider's policy.

### Cited Findings
- **Gemini Unpaid Services:** content is used to "provide, improve, and develop Google products and services and machine learning technologies", "human reviewers may read, annotate, and process your API input and output" (after it is disconnected from the account, API key and project), and "Do not submit sensitive, confidential, or personal information to the Unpaid Services." — [Gemini API Additional Terms, effective 2026-03-23](https://aistudio.google.com/docs/terms)
- **Gemini Paid Services:** Google "doesn't use your prompts" or responses to improve products, and logs them "for a limited period of time, solely for detecting and preventing violations" of policy. — [Gemini terms](https://aistudio.google.com/docs/terms)
- The pricing table marks "Used to improve our products" as **Yes** on the free tier and **No** on the paid tier for every free model. — [Gemini pricing](https://aistudio.google.com/docs/pricing)
- For the EEA, UK and Switzerland: "You may use only Paid Services when making API Clients available to users." Users must be 18 or older, and the service may not be used in clients "directed at or likely accessed by" people under 18. — [Gemini terms](https://aistudio.google.com/docs/terms)
- **Nigeria is a supported Gemini API/AI Studio country**, along with most African countries. — [Gemini available regions](https://aistudio.google.com/docs/available-regions)
- **Cloudflare:** "Cloudflare does not use Customer Content processed by Workers AI to train AI models." Standard inference inputs and outputs are not kept beyond processing (unless AI Gateway logging, R2, KV and similar features are used). Operational metadata may be kept. — [Workers AI data usage](https://developers.cloudflare.com/workers-ai/platform/data-usage/)
- **Groq:** inference requests are "not retained by default". Logs kept for reliability or abuse investigations last up to 30 days. "All customers may enable Zero Data Retention (ZDR)". The page does not mention model training or the free tier specifically. — [Groq Your Data](https://console.groq.com/docs/your-data)
- **Mistral:** Experiment-plan API data may be used for training, users can opt out in the Admin Console privacy settings, and Scale (paid) plans are opted out by default. One secondary source notes that opting out of training is not the same as zero retention. — [Mistral help](https://help.mistral.ai/en/articles/347614-can-i-opt-out-of-my-input-or-output-data-being-used-for-training); [meetily.ai, third-party](https://meetily.ai/llm-privacy/mistral)
- **OpenRouter:** each provider has its own data policy. There are "separate settings for paid and free models" for allowing providers that may train on your data, and opting out means "OpenRouter will not route to providers that train". The page does not describe OpenRouter's own prompt storage. — [OpenRouter logging](https://openrouter.ai/docs/guides/privacy/logging)

### Inferences
- Under NDPA 2023 and GDPR-style principles (purpose limitation, data minimisation, lawful cross-border transfer), sending identifiable user routine data to a free tier that trains on it and lets humans review it would be hard to justify in the dissertation's privacy chapter. It would also break Google's own instruction not to submit personal information.
- The defensible free setup is: Cloudflare Workers AI (no training, no retention) and/or Groq with ZDR switched on for real user data. Gemini's free tier should be kept for development with synthetic or de-identified data, or used only after the Edge Function strips identifiers and sends aggregated routine summaries (for example "user usually exercises 18:00–19:00").
- The age-18 rule in Gemini's terms matters if Synapse might be used by under-18 students.
- Screenshots (the screen companion) are the highest-risk input, because they can contain third-party messages and possibly credentials. That favours on-device inference (Gemma 4 E2B/E4B) or a no-retention provider, plus redaction before upload. This also fits Synapse's rule that password fields are never captured.

### Gaps
- Groq's explicit training policy and Cerebras' data-use or retention terms were not retrieved.
- Region availability for Groq, Cerebras, Cloudflare, OpenRouter and Mistral in Nigeria was not confirmed from their terms. No restriction was seen, but no explicit country list was checked. Payment-card acceptance for later paid upgrades from Nigeria was also not investigated.
- The paid Gemini retention period is not specified ("limited period").

## What open-weight models can run locally or on-device for free, what hardware do they need, and how good are they?

### Takeaway
Gemma 4 is the strongest candidate to run locally. E2B and E4B fit on phones (about 1.1 GB and 2.5 GB with LiteRT-LM) and support images and function calling. The 12B fits a 4-bit 8 GB GPU (about 6.7 GB of weights), and the 26B A4B and 31B need roughly 14–18 GB at 4-bit. On Arena, Gemma 4 31B scores about 1452 against about 1497 for Gemini 3.8 Flash: good enough for routine suggestions, a step below the hosted frontier.

### Cited Findings
- Approximate memory needed for Gemma 4 weights (weights plus about 20% loading overhead, KV cache excluded):

  | Model | BF16 | 8-bit | 4-bit | Phone (LiteRT-LM) |
  |---|---|---|---|---|
  | E2B | 11.4 GB | 5.7 GB | 2.9 GB | 1.1 GB (0.84 GB text-only) |
  | E4B | 17.9 GB | 8.9 GB | 4.5 GB | 2.5 GB |
  | 12B | 26.7 GB | 13.4 GB | 6.7 GB | — |
  | 26B A4B | 57.7 GB | 28.8 GB | 14.4 GB | — |
  | 31B | 69.9 GB | 34.9 GB | 17.5 GB | — |

  The 26B A4B uses only 4B parameters per token, but all 26B must be loaded. Gemma is open-weight and allows responsible commercial use. — [Gemma docs](https://ai.google.dev/gemma/docs/core)
- Arena text leaderboard (updated 2026-11-11):
  - Gemma 4 31B: #79, 1452
  - Gemma 4 26B A4B: #102, 1437
  - Qwen3.8-27B: #111, 1434
  - Mistral Medium 3.5: #121, 1426
  - Inkling: #95, 1442
  - Gemini 3.5 Flash-Lite: #76, 1455
  - Gemini 3.8 Flash (High): #9, 1497
  - Leader: Gemini 4 Carbon at 1526

  gpt-oss and Llama models were not in the visible part of the list (truncated after rank 152). — [Arena text leaderboard](https://arena.ai/leaderboard/text)
- Supabase Edge Functions include a built-in `Supabase.ai.Session` with `gte-small` embeddings (512-token truncation). Larger LLMs need a self-managed Ollama or Llamafile server reached through the `AI_INFERENCE_API_HOST` secret. Hosted LLM support is in early access. — [Supabase AI models](https://supabase.com/docs/guides/functions/ai-models)

### Inferences
- The free built-in gte-small model can produce embeddings for retrieving routine records within Supabase (pgvector), with no external API needed.
- A local Ollama server running Gemma 4 12B on the student's laptop could be the "fully private" demo mode. It is not reliable for a hosted demo, because the Edge Function would need a public tunnel to the laptop.
- On-device Gemma 4 E2B/E4B on the Android client (LiteRT-LM) is a strong privacy story for screen reading: screenshots never leave the phone, and only structured results go to the server.
- Qwen 3.x, Llama and Phi families exist as alternatives, but this session found no hardware tables for them. Qwen3.8-27B performs close to Gemma 4 26B on Arena.

### Gaps
- No peer-reviewed papers were retrieved for the Gemma 4, Qwen 3.x, Llama or Phi families. No Phi or Llama 4 hardware data was gathered.
- On-device latency figures on typical mid-range Android phones (the hardware common in Nigeria) were not found.
- The Gemma licence terms were not read in detail.

## How easy is each to call from a Supabase Edge Function (Deno/TypeScript)?

### Takeaway
Most options can be reached with the same OpenAI-style `chat/completions` call through the `openai` npm package (or plain `fetch`) in Deno. Only the base URL and API key change, and the key stays in Supabase secrets. That means Synapse can build one provider-agnostic client and switch between Gemini, Groq, Cerebras, OpenRouter and Hugging Face by changing configuration.

### Cited Findings
- Gemini's OpenAI-compatible base URL is `https://generativelanguage.googleapis.com/v1beta/openai/`. The docs' JavaScript examples use `import OpenAI from "openai"` with `baseURL`, and image input and function calling both work through it. — [Gemini OpenAI compatibility](https://aistudio.google.com/docs/openai)
- Hugging Face's router is OpenAI-compatible at `https://router.huggingface.co/v1` (OpenAI JS client and `fetch` examples), and there is also an `@huggingface/inference` JS client. — [HF pricing](https://huggingface.co/docs/inference-providers/pricing)
- Supabase's example uses the OpenAI Deno SDK with `OPENAI_BASE_URL` and `OPENAI_API_KEY` from `supabase/functions/.env` locally, and `supabase secrets set ...` for deployed secrets. — [Supabase AI models](https://supabase.com/docs/guides/functions/ai-models)

### Inferences
- A thin `llm.ts` module in the Edge Function, with `{baseURL, apiKey, model}` per provider and fallback on 429, lets the demo survive free-tier exhaustion. It also keeps the Synapse rule that keys stay on the server.
- Streaming responses through the Edge Function works with any OpenAI-compatible SSE stream.

### Gaps
- Groq, Cerebras, OpenRouter and Cloudflare Workers AI are widely known to offer OpenAI-compatible endpoints (Groq at `api.groq.com/openai/v1`, OpenRouter at `openrouter.ai/api/v1`, Cerebras at `api.cerebras.ai/v1`, and Cloudflare's `/ai/v1/chat/completions`). **These were not checked against their docs in this session**, so confirm them before citing.
- Supabase Edge Function wall-clock and CPU limits for long LLM calls were not documented on the fetched page.

## Which option best balances quality, free limits, privacy terms and reliability for a student project demo?

### Takeaway
**(a) Text guide:** use a no-retention, no-training provider as the primary for real user data. That means **Groq `openai/gpt-oss-120b` (with ZDR on)**, or **Cloudflare Workers AI `gemma-4-26b-a4b-it`**. Add Gemini 3.5 Flash-Lite (free tier) as a higher-quality fallback, but send it only de-identified or aggregated data, because its free tier trains on and lets humans review inputs.

**(b) Screen companion (vision plus tools):** use **Gemma 4 everywhere**. Run **Cloudflare Workers AI `gemma-4-26b-a4b-it`** server-side (free, no training, images plus function calling), with **on-device Gemma 4 E2B/E4B** on Android as the privacy-maximal path. Gemini Flash-Lite and OpenRouter Inkling 2 Small are optional free fallbacks. Because every route uses an OpenAI-compatible interface (to be confirmed for Cloudflare), the provider can be swapped by configuration.

### Cited Findings
- Groq gpt-oss-120b: 1K RPD, 30 RPM, 8K TPM, 131K context. Data is not kept by default, and ZDR is available to all. — [Groq rate limits](https://console.groq.com/docs/rate-limits); [Groq models](https://console.groq.com/docs/models); [Groq Your Data](https://console.groq.com/docs/your-data)
- Cloudflare: 10,000 neurons a day free. Gemma 4 26B A4B costs 9,091 / 27,273 neurons per million input / output tokens. There is no training on customer content and no retention of inputs or outputs. — [Workers AI pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/); [Workers AI data usage](https://developers.cloudflare.com/workers-ai/platform/data-usage/)
- Gemma 4 handles images, has function calling, offers 128K/256K context, and runs on phones (E2B at 1.1 GB, E4B at 2.5 GB). — [Gemma docs](https://ai.google.dev/gemma/docs/core)
- Quality on Arena: Gemini 3.5 Flash-Lite 1455, Gemma 4 31B 1452, Gemma 4 26B A4B 1437, Qwen3.8-27B 1434. — [Arena](https://arena.ai/leaderboard/text)
- Gemini's free tier is "used to improve our products", humans may review it, and its terms say not to submit personal information. Nigeria is supported. — [Gemini terms](https://aistudio.google.com/docs/terms); [Gemini regions](https://aistudio.google.com/docs/available-regions)

### Inferences
- **Reliability:** no single free tier is safe for a live examiner demo. Gemini 3.x Flash at about 20 RPD is the weakest, and Groq's 8K TPM can throttle long prompts. The plan should be: primary provider → fallback provider → cached or canned response. Record a backup demo video.
- **Quality:** the free hosted options sit close together on Arena (about 1435–1455). For "summarise my routine and suggest the next step", the quality difference matters less than privacy and reliability. Gemini 3.8 Flash (1497) is clearly better but is effectively unusable at about 20 RPD.
- **Dissertation framing:** "free tier with no training or retention plus on-device vision" maps neatly onto NDPA 2023 and GDPR data minimisation, and it fits Synapse's privacy-by-design and no-covert-capture rules. "Free Gemini with personal data" would need a justification that the examiner may challenge.
- **If a small budget appears later**, Gemini paid Tier 1 (no training, Flash-class models) is the simplest upgrade within the same API.

### Gaps
- No public uptime or SLA data was found for any free tier. Reliability claims are inferred from rate limits only.
- No benchmark specific to "routine-data reasoning" or screenshot UI understanding (for example ScreenSpot-style) was retrieved for these models. Arena text scores are a general proxy only, and the vision leaderboard was not checked.
