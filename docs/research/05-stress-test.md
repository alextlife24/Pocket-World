# Pocket World — Stage 5: Red-Team Stress Test

## Assume it failed

Pocket World launched as a beautiful miniature village. People clicked because the trailer was charming, made one choice, shared a few launch-week screenshots, and did not return. By Day 4, the two-option events felt like a disguised visual novel. Residents repeated animation loops and “remembered” by inserting a prior noun into template dialogue. The world changed color and props but not behavior. Players realized absence was only a timer, not life. The team responded by adding AI chat, crafting, more resources, and social visits; costs and bugs increased while the core choice remained shallow. Mobile Safari dropped frames, local saves disappeared for some players, and the sharing feed had nothing worth comparing. Content production became the bottleneck. The game was praised as cute and abandoned as thin.

That is the default failure path unless the project proves that **one choice creates a consequence players understand, remember, and want to revisit**.

## Risk matrix

Probability and impact are qualitative judgments (Low / Medium / High), not measured forecasts.

| Major risk | Probability | Impact | Evidence | Mitigation / kill criterion |
|---|---|---|---|---|
| **Boring gameplay: binary choices feel like clicking through dialogue** | High | Critical | No cited comparison proves that one gentle daily dilemma is itself fun. Townscaper/Tiny Glade provide satisfying direct manipulation; Pocket World could lack that tactile pleasure.[13][15] | Choice must happen spatially by touching/placing/moving, with immediate animation and a visible trade-off. Prototype-test against a pure watch/read version. Kill or redesign if most testers cannot name a favorite decision. |
| **Weak retention after the first reveal** | High | Critical | Browser novelty and daily retention are distinct. neal.fun demonstrates instant concepts, not durable worlds.[24] | Test a simulated 3-day sequence in one sitting, then a real 7-day test. Require unsolicited curiosity about the next state; do not compensate with streak rewards. |
| **Novelty wears off once players recognize templates** | High | High | Neko Atsume’s compact collection loop is clear but finite; authored event combinations also exhaust.[10] | Build event grammar around resident × location × world-state tags; later events must branch from prior consequences. Track repeat perception in playtests. Do not promise endless content. |
| **Memory is cosmetic** | High | Critical | AI Dungeon exposes explicit memory/context tools, but generated continuity remains a hard product problem; a callback line alone is not evidence of consequence.[35] | Every stored memory must affect at least one of: future option, resident preference, schedule, relationship, or visible object. QA memory with deterministic tests. |
| **Residents feel like puppets rather than inhabitants** | Medium–High | High | WorldBox’s pitch depends on observable autonomous civilization behavior, setting a high expectation for “living.”[16] | Give each resident two visible routines, one preference axis, one relationship edge, and event-driven schedule changes. Simulate only on load; show an event log with causes. |
| **AI becomes a gimmick** | Medium | High | Infinite Craft succeeds with a tight deterministic combination interface and cached results; AI Dungeon exposes unbounded text and moderation/privacy complexity.[34][35] | No runtime LLM in prototype or v0.1. If tested later, use AI only to propose offline authoring variants that a human approves. Never advertise “AI residents” without measured benefit. |
| **Variable API cost or provider outage** | Low in proposed v0.1; High if AI chat added | High | Commercial character/voice providers use credits and pass through model costs; pricing can vary by model and usage.[28] | Keep runtime simulation deterministic and client-side. Set AI spend to zero in v0.1. Any later experiment gets per-user quotas, caching, hard monthly cap, and fallback authored text. |
| **Excessive development complexity** | High | Critical | Animal Crossing combines collecting, crafting, decoration, social visits, residents, time, and content at console scope.[9] | One scene, three residents, seven events, no free placement, no inventory grid, no economy in prototype. Reject features that do not test memory, consequence, or sharing. |
| **Mobile performance and battery problems** | Medium | High | Canvas guidance recommends prerendering repeated content, layered canvases, and avoiding unnecessary state changes; WebGL guidance warns that mobile GPU limits and memory budgets vary.[50][51] | Start with Canvas 2D; cap at 30 FPS only while animated; stop drawing unchanged frames and pause when hidden; atlas assets; test on an older supported iPhone before renderer escalation. |
| **Unclear onboarding** | Medium | Critical | Successful simple loops expose a clear first input: Wordle keyboard, Neko Atsume placement, Cookie Clicker’s cookie.[8][10][33] | No title menu. Load directly into a resident pointing at two world locations. Instrument `world_visible → first_choice_started → first_choice_completed`. Kill copy-heavy onboarding. |
| **Meaningless progression** | High | High | Numeric accumulation is legible in Cookie Clicker but does not satisfy a remembered-world fantasy.[8] | Progression is a world-history graph: landmarks, resident preferences, unlocked event branches, and weekly panorama. No XP level in v0.1. Test whether players can explain why two worlds differ. |
| **Weak social sharing** | High | High | A photo feature exists in Neko Atsume/Usagi Shima, but that alone does not prove virality.[10][12] Wordle’s artifact is comparative, standardized, and spoiler-light.[33] | Share card must include event, visible consequence, resident quote, day number, and deep link. A/B test generic beauty image vs “because you chose…” card. Provide native share plus copy/download fallback. |
| **Looks too similar to Animal Crossing/Neko Atsume/cozy-island games** | Medium–High | High | The adjacent products already combine cute residents, decoration, real time, collections, and photos.[9][10][12] | Avoid animal-only cast, tropical island, furniture grid, fishing/farming, and attract-a-visitor loop. Brand around **memory landmarks** and one shared daily dilemma. |
| **Content exhaustion / writing treadmill** | High | Critical | Binary authored events multiply across residents and prior state; there is no evidence a solo developer can sustain daily bespoke narrative indefinitely. | Ship seven strong event templates first. Use tagged recombination and consequences that modify later events. Seasonal drops only after D7 evidence. Set a content budget per month and design replayable systems around it. |
| **Player choices feel morally loaded or anxiety-inducing** | Medium | High | Finch’s health framing involves personal data and emotional stakes; Pocket World should not inherit that burden.[11] | Choices are preference trade-offs, never “good vs cruel.” Preview categories of effects. Permit one rewind token per week only if tests show regret blocks return; never sell rewinds. |
| **Local save loss destroys attachment** | Medium | Critical | `localStorage` is origin-specific, private-session storage is cleared, and blocking persistence can prevent saves.[26] | Prototype: warn gently only when persistence fails. v0.1: export/import a tiny save code. v0.2: optional account/cloud backup after value is demonstrated. Version save schema and migrate it. |
| **PWA/notification plan fails on iOS** | High if relied upon | Medium | iOS Web Push requires a Home Screen web app and user-granted permission after direct interaction.[20] PWA install UX varies by browser.[27] | Retention cannot depend on push. Use tomorrow anticipation, calendar-like routine, optional install prompt after Day 3, and optional email only with explicit consent later. |
| **Social features create privacy or moderation problems** | Medium | High | AI Dungeon’s history shows how user-generated text and moderation can become a trust crisis.[35] | No public text, chat, usernames, comments, discovery feed, or free-text postcard captions. Shared snapshots use generated IDs, expire/revoke where possible, and expose only game state. |
| **Share links leak stable identity/world history** | Medium | High | Web sharing can send links/files into arbitrary user-selected targets; once shared, control is limited.[25] | Share a frozen snapshot, not the live private save. Use opaque IDs, no personal profile, a preview screen, revoke control, and explicit “what will be shared” copy. |
| **Monetization undermines calm or cannot cover service cost** | Medium | High | Adjacent products span paid premium, free-to-play, ads, and in-app purchases; no single model is validated for this exact browser concept.[8][10][18] | Zero monetization in prototype. If retention exists, test a one-time supporter pack/visual chapter; no energy, loot boxes, streak insurance, interstitial ads, or AI usage subsidy without unit economics. |
| **Vercel architecture is misused as continuous simulation** | Medium | High | Vercel Functions are bounded request executions with duration/bundle/cost limits, not an always-running world server.[21] | Store compact state and compute elapsed events on request/client load. No per-world cron and no continuous agents. Use static hosting plus optional short API routes only. |
| **Backend/auth arrives before product proof** | High | Medium | Supabase can provide Postgres, Auth, Storage, Realtime, and functions, but that breadth is unnecessary for a local prototype.[23] | Prototype and first qualitative test are local-only. Add Supabase only for cloud backup/read-only share snapshots/analytics needs that cannot be met locally. |
| **Small-screen composition becomes illegible** | Medium | High | Tiny Glade’s PC presentation and WorldBox’s dense map do not validate a portrait phone diorama.[15][16] | Design at 360×640 CSS pixels first; 44px minimum interactive targets; fixed camera; maximum three residents and 12 persistent landmarks; test screenshots and live tap accuracy separately. |
| **No monetizable long-term depth** | Medium | Medium–High | Daily restraint can be compelling, but the winning comparisons often have catalogs, authored breadth, or strong IP.[8][9][18] | Do not solve before D7. If validated, expand with new resident arcs and visual chapters, not grind. Price content only after observing willingness to keep/backup the world. |

## Scope attacks

### If we add free placement

We inherit collision, pathfinding, ugly compositions, object catalogs, save complexity, touch precision, and comparison problems. **Reject for v0.1.** Use two or three authored placement sockets per event.

### If we add “real” continuous simulation

Mobile browsers suspend background tabs. A server simulation adds cost without guaranteeing perception. **Reject.** Store timestamps and calculate a small ordered event queue when the player returns.

### If we add free-form resident chat

We inherit prompt moderation, data policy, age gating, latency, injection, incoherence, cost, deletion requests, and emotional dependency concerns. **Reject.** Residents speak authored lines selected from state tags.

### If we add public world discovery

We inherit moderation, ranking, empty-feed cold start, spam, and identity systems. **Reject.** A player shares a specific private snapshot through an existing social channel.

### If we add currencies and shops

They may create more taps but change the emotional promise from “they remember what I chose” to “I accumulate enough to buy props.” **Reject in prototype; challenge again only after the memory loop works.**

## Would I still build it?

# MODIFY

Build **only a seven-event, one-screen, deterministic prototype** of the Living Memory Postcard Village. Do not build a platform, social network, AI residents, procedural civilization, or content pipeline yet.

The concept remains worth testing because the combination is differentiated and the cheapest meaningful experiment can directly test its central promise. It is **not** strong enough to justify full production from desk research alone.

## Non-negotiable pre-production gates

Proceed from prototype to v0.1 only if moderated and unmoderated tests show:

1. Most testers understand the core action without explanatory text.
2. Testers can correctly connect a visible mark to their prior choice.
3. At least some testers express spontaneous curiosity about tomorrow before being asked.
4. Residents are described with specific traits, not only “cute.”
5. The consequence postcard is chosen for sharing more often than a plain beauty screenshot in a direct comparison.
6. The prototype holds frame time, tap accuracy, save/reload, and scene restoration on target mobile Safari hardware.

If the memory/consequence tests fail, switch to **One Resident Diary** rather than adding more simulation. If the share test fails but attachment succeeds, position it as a private ritual instead of forcing virality.

## Sources

[8] https://store.steampowered.com/app/1454400/Cookie_Clicker — Cookie Clicker — Steam
[9] https://www.animal-crossing.com/new-horizons — Animal Crossing: New Horizons — Nintendo
[10] https://play.google.com/store/apps/details?id=jp.co.hit_point.nekoatsume&hl=en_US — Neko Atsume — Google Play
[11] https://play.google.com/store/apps/details?id=com.finch.finch&hl=en_US — Finch — Google Play
[12] https://store.steampowered.com/app/3144010/Usagi_Shima_Bunny_Island — Usagi Shima: Bunny Island — Steam
[13] https://www.townscapergame.com — Townscaper — official site
[15] https://store.steampowered.com/app/2198150/Tiny_Glade — Tiny Glade — Steam
[16] https://store.steampowered.com/app/1206560/WorldBox__God_Simulator — WorldBox — Steam
[18] https://www.pokemonsleep.net/en — Pokémon Sleep — official
[20] https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados — WebKit: Web Push on iOS/iPadOS
[21] https://vercel.com/docs/functions/limitations — Vercel Functions limitations
[23] https://supabase.com/docs/guides/database/overview — Supabase database overview
[24] https://neal.fun — neal.fun
[25] https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API — MDN Web Share API
[26] https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage — MDN localStorage
[27] https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Installing — MDN PWA installation
[28] https://inworld.ai/pricing — Inworld AI pricing
[33] https://en.wikipedia.org/wiki/Wordle — Wordle — Wikipedia overview
[34] https://en.wikipedia.org/wiki/Infinite_Craft — Infinite Craft — Wikipedia overview
[35] https://en.wikipedia.org/wiki/AI_Dungeon — AI Dungeon — Wikipedia overview
[50] https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas — MDN Optimizing Canvas
[51] https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices — MDN WebGL best practices
