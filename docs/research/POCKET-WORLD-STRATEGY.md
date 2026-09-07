# POCKET WORLD — PRODUCT STRATEGY

**Decision:** Build a constrained prototype of the **Living Memory Postcard Village**. Do not build the original broad “AI living world” concept.  
**Research date:** 2026-09-07  
**Platform:** Mobile browser first; desktop browser second; GitHub + Vercel.

---

## 1. ONE-SENTENCE GAME PITCH

**Make one small choice each day, then return to a tiny village that physically changes—and whose three residents remember what you chose.**

Short acquisition line:

> **Choose today. See what they remember tomorrow.**

## 2. TARGET PLAYER

### Primary

A mobile-first player who:

- likes Animal Crossing, Neko Atsume, Finch, Tiny Glade, cozy dioramas, or short daily games;
- wants a calm 1–3 minute ritual, not a 30-minute management session;
- values characters, atmosphere, and visible personal history over optimization;
- shares aesthetically distinctive, personally meaningful moments through messaging or social media;
- is willing to revisit a URL but may not install an app or create an account immediately.

### Secondary

- Browser-game players attracted by a one-sentence curiosity hook.
- Creative players who enjoy “always looks good” tools but want more emotional consequence.
- Busy players who like persistent games but dislike missed-day punishment.

### Not the target

- Players seeking deep city management, combat, unrestricted sandbox building, competitive ranking, or endless AI conversation.

## 3. UNIQUE SELLING PROPOSITION

Most virtual pets remember through meters, streaks, or generated dialogue. Pocket World makes memory **physical and inspectable**:

- each meaningful choice creates a landmark, repair, path, plant, ritual, weathered surface, or resident habit;
- that memory changes a later option or behavior;
- two players responding to the same situation receive visibly different worlds and postcards.

The USP is not “AI residents.” It is:

> **A daily world where decisions become scenery and scenery becomes shared history.**

## 4. CORE EMOTIONAL PROMISE

> **Even a tiny choice mattered here, and someone remembered it.**

The player should feel recognition, gentle responsibility, anticipation, and pride—never guilt for staying away.

Design boundaries:

- Absence produces events; it does not injure residents.
- There are trade-offs, not good/evil answers.
- The world acknowledges history without demanding personal disclosure.
- Growth is visible in the village, not trapped in bars and menus.

## 5. FIRST 30 SECONDS

### 0–3 seconds

A portrait one-screen diorama loads directly—no logo animation, sign-in, character creator, permission prompt, or “Start” menu. The village is a small floating patch of land with three readable zones: hill, stream, square. One resident, **Mira**, is holding a dim fallen star. Another resident watches from the square.

On-screen line:

> “It fell before dawn. Where should we keep it?”

Two locations softly pulse: **Hill** and **Square**.

### 3–10 seconds

The player taps a location. The input is spatial; there is no abstract choice menu.

- Tap Hill: Mira walks uphill; a faint light trail follows.
- Tap Square: Mira carries it toward the shared plaza.

### 10–20 seconds

A three-second construction/transformation beat occurs:

- Hill becomes a tiny star lookout with a warm beacon, **or**
- Square becomes a communal lantern with resident footprints around it.

A second resident reacts with one short line that reveals a preference:

- “Good. Quiet things deserve a view.”
- or “Good. Now nobody has to see it alone.”

### 20–27 seconds

The camera returns to the full diorama. A memory tile appears briefly:

> **Day 1 — The Fallen Star**  
> You chose the hill. Mira will stay there until moonrise.

A subtle sunset preview passes over the world, showing that time will change.

### 27–30 seconds

One button appears:

> **Come back to see what they make of it**

Secondary, smaller action:

> **Preview tomorrow now** — only in the research prototype, used to test the loop without forcing a real-day wait.

The player has already completed the core promise before any request to save, install, enable notifications, or share.

## 6. CORE GAME LOOP

1. **Notice** — Open the world and immediately see what changed while away.
2. **Understand** — A 1–2 sentence recap attributes the change to residents and prior choices.
3. **Choose** — Resolve one low-stakes spatial dilemma with two meaningfully different trade-offs.
4. **Witness** — Receive immediate animation, resident reactions, and a physical world mark.
5. **Anticipate** — One resident begins an action that will resolve later.
6. **Remember** — The event enters a compact history and modifies resident/world state.
7. **Share optionally** — Generate a standardized postcard showing the consequence and deep link.
8. **Leave satisfied** — No maintenance backlog, energy wait, or penalty.

### What makes a choice meaningful

Every choice must change at least **three** layers:

- **Visual:** object/landscape/color/routine changes.
- **Social:** at least one resident approves, worries, adapts, or changes preference.
- **Systemic:** a future event option, schedule, or resource category changes.

If a choice changes only dialogue or color, it fails content review.

## 7. DAILY LOOP

Target visit: **60–180 seconds**.

1. Load directly into the current world.
2. A “while you were away” vignette lasts 5–10 seconds and is skippable.
3. Tap one changed object or resident to inspect yesterday’s result.
4. Receive today’s event.
5. Make one spatial choice.
6. Watch the immediate consequence.
7. Optionally inspect up to two resident thoughts or the seven-tile memory path.
8. Optionally create/share a postcard.
9. Exit with a specific unresolved image or action.

No daily checklist. No “collect all income” button. No streak-loss warning.

## 8. 7-DAY PLAYER JOURNEY

### Day 1 — Ownership

- Event: **The Fallen Star**.
- Learn: tap the world to choose.
- Result: first landmark and first resident preference.
- Emotional beat: “My action changed this place.”

### Day 2 — Evidence of life

- Return reveal: Mira changed her sleep location or the town gathered near the star, based on Day 1.
- Event: rain threatens one of two spaces.
- Choose where the residents spend limited repair effort.
- Emotional beat: “They acted while I was gone.”

### Day 3 — Recognition

- A resident explicitly references Day 1 without repeating its label.
- Event branches based on the star’s location.
- First optional postcard prompt appears **after** the result.
- Optional “Add to Home Screen” education may appear only after the session closes; it is never required. PWA installation differs by browser and requires user confirmation.[20][27]
- Emotional beat: “They remember my version.”

### Day 4 — Relationship tension

- Two residents want different uses for a recovered object.
- Neither answer is morally superior.
- The non-selected resident adapts visibly rather than becoming “sad meter -10.”
- Emotional beat: “My choice shaped relationships.”

### Day 5 — Emergence illusion

- Yesterday’s object, weather, resident preference, and location combine into one authored micro-event.
- The player sees two residents interact without prompting.
- Emotional beat: “This seems specific to my history.”

### Day 6 — Identity

- The village receives a descriptor derived from accumulated state, such as **Lantern Commons**, **Windwatch Hamlet**, or **Mosswater Rest**.
- The player can compare a spoiler-light outcome gallery containing authored example worlds—not a live social feed.
- Emotional beat: “My world has a character.”

### Day 7 — Keepsake and forward promise

- A weekly gathering uses the physical marks from Days 1–6.
- A resident gives a deterministic, state-based three-line letter.
- The camera creates a seven-day panorama/postcard.
- One next-week mystery appears at the edge of the world.
- Optional cloud backup/account offer appears now, because the player finally owns something worth protecting.
- Emotional beat: “This week left a history I want to keep.”

## 9. WORLD SYSTEM

### Residents

**MVP cast: three residents**, visually and behaviorally distinct.

Each has:

- one core value axis (solitude/community, preservation/change, caution/curiosity);
- two daily routines represented by location and animation;
- relationship values toward the player and the other two residents;
- 4–6 authored reaction templates selected by tags;
- memory references to event IDs and choice tags;
- one preference that can change after repeated evidence.

Residents are not simulated with pathfinding while the tab is closed. On load, the game calculates which authored routine/result should now be shown.

### Environment

- One fixed-camera diorama.
- Three choice zones and 8–12 authored landmark sockets.
- Layered sprites/meshes for base terrain, buildings, props, vegetation, weather, residents, and lighting.
- Visual variation is constrained so every combination remains readable and attractive.
- No unrestricted object placement in v0.1.

### Time

- Store `last_seen_at`, `day_index`, and pending event timestamps.
- On load, compute elapsed phases: immediate, later-today, next-day.
- The world does not need a continuously running server.
- Local time affects lighting, but core event availability uses a clearly defined reset rule and must resist simple clock changes once cloud state is introduced.

### Weather

- Authored daily weather state: clear, drizzle, wind, fog, warm night.
- Weather modifies ambience and may select event variants; it never blocks play or destroys progress.
- Weather is game fiction, not real-location weather, avoiding permissions and unequal climates.

### Memories

A memory is structured state, not prose:

```ts
type Memory = {
  eventId: string;
  dayIndex: number;
  choiceId: string;
  actors: ResidentId[];
  location: LocationId;
  tags: string[];       // e.g. community, hill, star, protected
  visualMarkId: string;
  consequenceIds: string[];
};
```

Memory must drive future selectors. Resident lines are authored from state tags; no embeddings or vector database are required.

### Events

An event contains:

- entry conditions;
- resident actor;
- 1–2 sentence setup;
- exactly two spatial options in v0.1;
- immediate visual/social results;
- delayed result;
- memory tags;
- future branch tags;
- postcard composition rules.

An event cannot repeat until its cooldown and state conditions permit. The first seven events are manually ordered enough to guarantee a coherent introduction.

### Resources

V0.1 should have **one soft resource at most: community effort**.

- It is not farmed, purchased, or refilled by waiting.
- Each event allocates the same limited effort toward one of two visible changes.
- The resource exists to clarify trade-offs, not to create grind.

Prefer removing it entirely if spatial scarcity already explains the choice.

### Progression

Progression is represented by:

1. physical marks in the scene;
2. resident preference/routine changes;
3. unlocked event branches;
4. memory timeline;
5. weekly village descriptor/panorama.

No player level, XP, prestige, rarity tiers, battle pass, or upgrade tree in v0.1.

## 10. SOCIAL / VIRAL LOOP

### Why a player shares

The postcard communicates identity and consequence:

> **The Fallen Star — Day 3**  
> “Alex put it on the hill. Mira hasn’t missed a moonrise since.”

It shows the relevant landmark, one resident action, weather, village descriptor, and a small choice glyph. It does not expose personal text or the live private save.

### How sharing works

1. After a meaningful result, **Make postcard** frames an authored camera composition.
2. Player sees an exact preview of the data/image to be shared.
3. On supported browsers, a user-tapped button invokes the native Web Share API; because support is not universal and the API requires user activation, provide **Copy link** and **Download image** fallbacks.[25]
4. The shared URL opens a static/read-only snapshot quickly.
5. Recipient can tap **What would your village choose?**
6. Recipient starts their own world on the same event seed, preserving comparison without copying the sender’s save.
7. If both later share, the cards align as a two-outcome diptych.

### What not to build

- Public feed, likes, follower graph, comments, direct messages, rankings, world search, or user-entered captions.
- Forced “invite three friends” rewards.
- Rewards that make sharing strategically mandatory.

### Viral loop metric

Track:

`postcard_created → share_initiated → snapshot_opened → recipient_world_created`

A beautiful card without recipient conversion is not a successful loop.

## 11. VISUAL DIRECTION

### Art direction

**Hand-painted storybook diorama with crisp shape language**, not generic pixel art and not an Animal Crossing imitation.

- Slight paper/clay texture.
- Stylized humanlike or ambiguous woodland residents—not collectible cute animals as the entire hook.
- Every landmark has a silhouette readable at phone scale.
- Weather and time tint the same authored palette rather than generating arbitrary colors.

### UI

- World-first; no permanent top/bottom resource bars.
- Dialogue appears as short anchored speech slips near the speaker.
- One thumb-reachable action area.
- 44×44 CSS-pixel minimum targets; text respects safe areas and browser bars.
- Memory timeline is a seven-tile horizontal drawer, not a journal screen.

### Animation

- 8–12 fps character animation or restrained skeletal tweening, rendered at a 30 fps scene cap.
- Strong anticipation and completion beats for transformations.
- Ambient loops are sparse and desynchronized.
- Respect `prefers-reduced-motion`; provide instant-state alternative.

### World scale

- Whole village visible at once in portrait orientation.
- Three major zones, three residents, maximum 12 persistent landmark sockets in v0.1.
- No pinch zoom required; optional inspect focus uses a short camera ease.

### Camera

- Fixed 3/4 isometric or elevated oblique camera.
- No free rotation.
- Postcards use 3–4 authored crop presets so output is always legible.

### Colors

- Base: moss, oat, faded teal, clay red, warm cream.
- One high-chroma accent per day/event.
- Night remains readable; avoid gray-blue mud.
- Meet text contrast requirements outside the art scene.

### Typography

- Warm humanist sans for UI and short dialogue.
- Optional restrained serif for day/event headings.
- Use system font fallback immediately; do not block first render on large web fonts.

### Sound direction

- Optional, off until user interaction satisfies autoplay rules.
- Small environmental loop: wind, stream, distant bell.
- Each landmark has one 0.5–1.5 second sonic signature.
- No constant music required in prototype; later use a sparse adaptive loop.
- Full mute and independent reduced-audio option.

## 12. MVP — VERSION 0.1

### MUST HAVE

- One mobile-first portrait diorama.
- Three named residents with distinct silhouettes, preference axes, and two routines each.
- Seven authored daily event beats with two spatial choices.
- Immediate visual consequence for every choice.
- Delayed return result calculated from timestamps.
- Structured memory state; at least three later events reference earlier choices mechanically.
- Seven-tile memory timeline.
- Local save/load with schema version and failure handling. `localStorage` is acceptable for compact v0.1 state but is browser/origin-bound and can disappear in private browsing.[26]
- One postcard template with preview, native share where available, copy link, and image download fallback.[25]
- Read-only snapshot route with opaque ID for the test cohort, or a local-only generated image if backend is deferred during the first test.
- Anonymous product events needed for the success metrics.
- Mobile Safari testing at 360×640 and at least one older supported iPhone.
- Keyboard/pointer support on desktop; reduced-motion and mute controls.

### SHOULD HAVE

- Game-time lighting and five authored weather states.
- Export/import save code.
- PWA manifest and icons; install remains optional.[20][27]
- One weekly village descriptor and Day-7 panorama.
- Localization-ready string IDs, even if English is the only launch language.
- Offline shell caching after the first successful load.

### LATER

- Optional cloud backup/account.
- Additional seven-day resident arcs and landmarks.
- Asynchronous sealed visitor gifts.
- Multiple postcard layouts.
- Seasonal authored chapters.
- Accessibility settings beyond baseline.
- Carefully tested supporter purchase.

### DO NOT BUILD YET

- Runtime LLM residents.
- Free-form chat or user text.
- Public social feed, comments, profiles, follows, likes, rankings.
- Real-time multiplayer.
- Continuous server simulation or per-world cron jobs.
- Unrestricted decoration, pathfinding-heavy building, physics, combat.
- Farming, fishing, crafting trees, shops, inventory, premium currencies.
- Procedural world map generation.
- Push-notification dependency.
- Native app wrapper.

## 13. TECHNICAL ARCHITECTURE

### Recommended progression

#### Research prototype

- **Plain TypeScript + HTML/CSS + SVG or DOM layers**.
- Vite for development/build.
- One JSON state object in `localStorage`.
- Static deployment to Vercel from GitHub.
- Fake “next day” button behind a test flag.

This is deliberately not the final engine. It tests choice, consequence, memory comprehension, and postcard preference at the lowest cost.

#### Version 0.1

- **Vite + TypeScript + Canvas 2D**, with the renderer isolated behind a small interface.
- HTML/CSS overlay for accessible UI/dialogue; Canvas only for the world and a separate origin-clean Canvas for postcard export.
- State machine and event resolver as pure TypeScript modules independent of rendering.
- Prerender static layers, use a small sprite atlas, stop drawing unchanged frames, cap device-pixel ratio, and use compressed WebP/AVIF assets with fallbacks. These are consistent with MDN’s Canvas optimization guidance.[50]
- Vercel static hosting and short serverless routes only for anonymous telemetry and frozen share snapshots.
- Supabase only if those two server-side needs are included in the test; otherwise remain local-only.

### Technology evaluation

| Technology | Decision | Reason |
|---|---|---|
| **React** | **No for prototype/v0.1** | The UI is tiny; React adds a second state model around a game scene. Re-evaluate if account/settings/content tools become complex. |
| **Next.js** | **No** | Server rendering and routing conventions do not solve the core scene/state problem. Vite static output is simpler on Vercel. |
| **Phaser** | **No initially** | Strong game framework, but physics, scene systems, cameras, and broad input abstractions exceed this fixed-diorama need. Choose it only if the prototype discovers substantial minigame/physics requirements. |
| **PixiJS** | **No initially; conditional after profiling** | A scene graph and sprite batching may help later, but three residents and a dozen landmarks do not justify engine overhead before real-device profiling. The renderer boundary preserves this upgrade path. |
| **Three.js** | **No** | 3D camera, materials, geometry, and asset pipeline raise production/performance cost without proving the emotional loop. |
| **Canvas** | **Yes: Canvas 2D for v0.1** | The scene is small, sprite/tile based, and modestly animated. It has a smaller debugging surface and straightforward PNG postcard export; keep semantic UI in DOM.[50] |
| **WebGL** | **No initially; conditional** | Adopt only if written profiling thresholds show Canvas misses frame-time or memory targets with production-like assets. WebGL has device-dependent GPU and texture limits and should not be assumed faster by default.[51] |
| **Supabase** | **Not for prototype; conditional for v0.1/v0.2** | It provides Postgres plus Auth/Storage/Realtime foundations.[23] Use only for anonymous event rows, frozen share snapshots, and later optional backup. Realtime is unnecessary. |
| **Firebase** | **No** | Duplicates the backend role; do not maintain two backend models. Supabase’s relational state and row-level policies fit snapshot/backup needs better. |
| **localStorage** | **Yes for compact first save** | It persists across normal browser sessions but is origin-specific and private-mode data is temporary.[26] Add schema version, export, and later cloud backup. |
| **AI APIs** | **No at runtime through v0.1** | Deterministic event/state logic is cheaper, safer, testable, and more consistent. |

### Repository shape

```text
/
  src/
    world/          # pure state, time resolution, memory, event rules
    content/        # typed event/resident JSON or TS data
    render/         # Canvas renderer adapter and animation mapping
    ui/             # DOM dialogue, timeline, settings
    share/          # postcard composition and Web Share fallback
    telemetry/      # consent, event schema, queue/retry
  public/
    art/
    audio/
    manifest.webmanifest
  api/              # only if Vercel snapshot/telemetry routes are enabled
  tests/
    world/
    content/
    save-migrations/
```

### Persistence model

Client save:

- anonymous installation ID;
- schema version;
- current day/event;
- compact resident states;
- memory array;
- visual mark IDs;
- pending resolution timestamps;
- settings/consent.

Never store generated prose as the source of truth. The source of truth is IDs/tags; prose and visuals are projections.

### Vercel use

- Static assets and application bundle via Vercel CDN.
- Optional short functions for `POST /api/events`, `POST /api/snapshots`, and `GET /s/:id` metadata.
- No long-running processes. Vercel Functions have execution, memory, bundle, and usage constraints and charge for compute/memory; the world must not be implemented as one ongoing function.[21]
- Protect write endpoints with schema validation, rate limits, size limits, and origin/abuse checks.

### Mobile Safari requirements

- Test safe-area insets, dynamic viewport units, touch scrolling suppression only inside the scene, orientation change, page restore, audio unlock, low-power mode behavior, storage failures, and tab suspension.
- Stop/reduce animation on `visibilitychange`.
- Reconstruct elapsed world state from timestamps on resume.
- PWA and push are optional layers, not assumptions.[20][27]

## 14. AI STRATEGY

### Decision

**AI should not exist in the runtime game for Prototype or Version 0.1.**

Residents, memories, weather, event selection, consequences, and dialogue should be deterministic ordinary game logic. The user does not receive enough value from unbounded generation to justify inconsistency, moderation, latency, privacy, or cost.

### Where AI may help later

1. **Internal authoring assistant:** propose event variants from a strict schema.
2. **Consistency linting:** flag lines that contradict resident preferences or prior tags.
3. **Localization draft support:** human-reviewed only.
4. **Private content testing:** generate combinatorial test cases, never ship raw output.

No generated event reaches players without human review and automated schema/safety tests.

### Optional post-alpha experiment

Test one narrowly scoped feature against authored control:

- Input: non-personal world tags only.
- Output: one 80-character resident recap.
- Cache by normalized state signature.
- No user free text.
- Hard fallback to authored line.
- Measure whether players rate recognition higher than deterministic text.

Remove it if it does not materially improve recognition/attachment.

### API-cost risks

Do not invent a fixed dollar forecast before selecting a model/provider and measuring prompts. Cost should be modeled as:

$$
\text{monthly cost} = MAU \times \text{AI calls/user/month} \times
\left(\frac{\text{input tokens} \times p_{in} + \text{output tokens} \times p_{out}}{1{,}000{,}000}\right)
$$

Add image/voice generation and retries separately. Main risks:

- daily calls scale directly with retained users;
- context/memory increases input tokens over time;
- retries and moderation calls multiply nominal cost;
- free users can generate unbounded liability;
- provider prices/models/deprecations change;
- latency or outage can block the emotional payoff;
- commercial character platforms often expose credit/model-cost structures rather than a fixed per-player guarantee.[28]

Policy if AI is ever enabled: monthly hard cap, per-install quota, cache rate target, short context, no background generation, provider fallback, and a kill switch.

## 15. DEVELOPMENT ROADMAP

### Prototype — Core hypothesis

**Build:** One scene, one resident event, two spatial choices, two distinct transformations, one callback line, two postcard variants, and simulated next day.

**Completion criteria:**

- Works from a Vercel URL on mobile Safari and desktop.
- First meaningful tap occurs without tutorial or account.
- Save/reload preserves the chosen branch.
- At least 5 target players complete both “today” and simulated “tomorrow” in observation.
- Players can state what changed and why.
- Direct preference test compares consequence postcard vs plain screenshot.

### Version 0.1 — Seven-day vertical slice

**Build:** Three residents, seven events, structured memory, daily timestamps, local save, seven memory tiles, one postcard format, baseline telemetry.

**Completion criteria:**

- All seven days are playable and branch coherently.
- At least three events mechanically reference prior choices.
- No progress-blocking issues across refresh, tab suspension, and day transition.
- Meets first-session and qualitative recognition gates.
- Performance budget passes on target iPhone.
- No runtime AI or public UGC.

### Version 0.2 — Durable sharing and backup

**Build:** Frozen read-only share snapshots, recipient start flow, save export/import, optional cloud backup, second seven-day arc if v0.1 validates.

**Completion criteria:**

- Snapshot exposes only approved game state.
- Links are opaque, rate-limited, and revocable/expiring as designed.
- Recipient conversion funnel is measurable.
- Save migrations and cross-device restore pass automated tests.
- Cloud account remains optional and appears after demonstrated value.

### Public Alpha — Retention test

**Build:** 21–28 days of content/system combinations, onboarding polish, PWA shell, accessibility pass, lightweight feedback channel.

**Completion criteria:**

- Cohort metrics can be computed without manual reconstruction.
- Content repeat/confusion reports are below a predeclared tolerance.
- D1/D7 and share-recipient conversion meet go/no-go targets or show a clear improvable bottleneck.
- Incident, deletion, privacy, and support procedures exist.
- Scope remains one world; no feed/chat/economy.

### Beta — Sustainable product

**Build:** Content cadence tools, localization, supporter monetization experiment, seasonal chapter, reliability/abuse hardening.

**Completion criteria:**

- Four-week content plan is producible within the developer’s actual capacity.
- Monetization does not gate core choices or remove created friction.
- Cloud backup, deletion, snapshot privacy, and rollback are reliable.
- Performance/crash/error budgets hold across supported browsers.
- A documented launch decision is based on cohort data, not wishlists or compliments.

## 16. SUCCESS METRICS

Targets below are **initial go/no-go product targets**, not claimed industry benchmarks. Revise after the first cohort, but lock them before reading each experiment’s result.

| Metric | Exact definition | Initial target | Diagnostic use |
|---|---|---:|---|
| **World creation rate** | Unique landing sessions that complete the first choice / unique eligible landing sessions | **≥70%** | Tests click promise, load, and first-action clarity. |
| **First-session completion** | New worlds that reach the Day-1 memory tile / worlds that start the Day-1 event | **≥60%** | Tests the first 30 seconds and payoff. |
| **Day-1 return rate** | New worlds with an active session 18–48 hours after Day-1 completion / eligible Day-1 completed worlds | **≥25%** | Tests delayed reveal and tomorrow curiosity. |
| **Day-7 return rate** | New worlds with an active session on days 6–8 / eligible created worlds | **≥10%** | Tests attachment and progression beyond novelty. |
| **Average session duration** | Mean active foreground time, excluding hidden/idle time; report median and distribution too | **60–180 sec median band** | Too short may mean no payoff; too long may mean friction or scope drift. |
| **Share rate** | Worlds with at least one user-initiated share/copy/download after an eligible consequence / eligible worlds | **≥8% by Day 7** | Tests whether outcomes feel worth showing. |
| **Snapshot open rate** | Unique recipient snapshot opens / successful share-link creations | Record baseline first | Separates share intent from delivery. |
| **Share-to-world conversion** | Recipient worlds completing first choice / unique recipient snapshot opens | **≥15%** | Tests the actual viral loop. |
| **Memory comprehension** | Testers who correctly identify a current visual/behavioral consequence and its prior choice | **≥80% in moderated test** | Validates the USP. |
| **Resident specificity** | Testers who can describe at least one resident with a distinct preference after Day 3 | **≥60% in cohort interview** | Tests attachment substrate. |
| **Save reliability** | Successful state restores / attempted restores across supported scenarios | **≥99.5% in automated/manual test set** | Attachment cannot survive lost worlds. |

### Required event schema

- `landing_viewed`
- `world_rendered`
- `event_started`
- `choice_selected`
- `choice_animation_completed`
- `memory_tile_seen`
- `return_recap_seen`
- `postcard_previewed`
- `share_initiated` with channel category only when available
- `snapshot_opened`
- `recipient_world_created`
- `save_failed`

Do not collect event choice text entered by users—there is no free-text input. Use pseudonymous installation IDs, publish a concise privacy explanation, and establish retention/deletion limits before public alpha.

## 17. FIRST DEVELOPMENT TASK

# Build the “Fallen Star” two-branch memory test—nothing else.

### Deliverable

A single mobile web page deployed to Vercel that:

1. renders one fixed village image/SVG at 360×640;
2. shows Mira holding a star and one sentence;
3. lets the player tap **hill** or **square** directly in the scene;
4. animates the selected landmark into existence;
5. saves only `{ choice, completedAt }` locally;
6. after refresh or pressing a hidden tester-only **Tomorrow** control, shows a visibly different resident routine and a callback line based on that choice;
7. generates two standardized postcard previews;
8. logs timestamps for first render, first tap, completion, and postcard choice in the local console/test export.

### Explicitly excluded

No engine, backend, account, AI, inventory, weather system, second event, free placement, procedural generation, or polished asset pipeline.

### Test question

> After seeing tomorrow, does the player feel that the village remembered **their** choice—and do they want to see another day?

### Pass condition

Run with at least five target players. Proceed only if most can explain the causal memory without prompting, at least two express spontaneous interest in the next event, and the consequence postcard is preferred over a generic beauty screenshot. These are prototype gates, not market validation.

---

# Executive Summary

## BUILD THIS

A **Living Memory Postcard Village**: one screen, three residents, one consequential spatial choice per day, and a world where each choice becomes a physical memory.

## WHY

It combines the strongest adjacent patterns—browser immediacy, delayed surprise, personal place/character attachment, and automatically attractive output—without requiring a full life sim or runtime AI.[9][10][15]

## CORE LOOP

Return → see what happened while away → make one spatial choice → watch the world/residents change → store a mechanical memory → optionally share the consequence → leave with one unresolved tomorrow hook.

## UNIQUE HOOK

**Residents do not merely say they remember: their routines, future choices, and the physical village prove it.**

## BIGGEST RISK

The two-choice event loop may feel scripted and shallow after its visual novelty fades. More content, AI, currencies, and social features would hide rather than solve that problem.

## FIRST THING TO BUILD

The single-event **Fallen Star** prototype with two visual branches, simulated next-day resident behavior, and two postcard variants. Test whether remembered consequence is fun before building the world.

## Sources

[9] https://www.animal-crossing.com/new-horizons — Animal Crossing: New Horizons — Nintendo
[10] https://play.google.com/store/apps/details?id=jp.co.hit_point.nekoatsume&hl=en_US — Neko Atsume — Google Play
[15] https://store.steampowered.com/app/2198150/Tiny_Glade — Tiny Glade — Steam
[20] https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados — WebKit: Web Push on iOS/iPadOS
[21] https://vercel.com/docs/functions/limitations — Vercel Functions limitations
[23] https://supabase.com/docs/guides/database/overview — Supabase database overview
[25] https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API — MDN Web Share API
[26] https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage — MDN localStorage
[27] https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Installing — MDN PWA installation
[28] https://inworld.ai/pricing — Inworld AI pricing
[50] https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas — MDN Optimizing Canvas
[51] https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices — MDN WebGL best practices
