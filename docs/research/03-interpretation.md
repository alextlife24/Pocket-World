# Pocket World — Stage 3: Interpretation for Pocket World

## Working interpretation

The original concept is too broad. “A tiny living world with residents who remember” describes an attractive technology/fantasy, but not a reason to click or a repeatable player action. The strongest interpretation is narrower:

> **Pocket World is a one-screen village where one low-stakes decision per day becomes a visible landmark and a memory that changes how three residents behave later.**

This is a hypothesis assembled from adjacent successes, not yet a validated product.

---

## STRONG EVIDENCE

These conclusions recur across several observed products or are directly supported by platform documentation.

1. **The first action must happen before registration.** Browser-native examples expose the game immediately, while Wordle and Infinite Craft communicate the loop with one screen and familiar input.[24][33][34]
2. **One clear verb is better than a broad simulation promise.** Guess, combine, place, click, or draw is more legible than “manage a living world.”[10][13][33]
3. **Delayed results can create return curiosity without punishment.** Neko Atsume asks players to place an invitation and later inspect visitors; Pokémon Sleep frames waking as a reveal.[10][18]
4. **A personal place and named characters support attachment.** Animal Crossing explicitly combines a customizable island community with residents and friend visits; Finch ties repeated actions to the growth and return of a persistent pet.[9][11]
5. **No-failure creation can remain satisfying when each input creates attractive, specific visual output.** Townscaper and Tiny Glade make this their central proposition.[13][15]
6. **Shareable artifacts work when they summarize a meaningful outcome.** Wordle’s spoiler-free grid and Infinite Craft’s First Discovery turn play history into a concise social object.[33][34]
7. **Mobile web constraints change the retention plan.** `localStorage` can persist local state but is origin/browser-bound; PWA install and Web Push require additional user steps, and iOS push is limited to Home Screen web apps.[20][26][27]
8. **Runtime AI is not necessary for perceived emergence.** WorldBox’s appeal is framed around interacting systems and civilization outcomes, while Infinite Craft caches a generated combination so the same pair returns the same result.[16][34]

## MODERATE EVIDENCE

These conclusions are plausible across cases, but causality or transfer to Pocket World is not established.

1. **Three residents may be enough** if each has clear preferences, relationships, routines, and visible reactions. Large casts create breadth, but specificity—not count—appears central to attachment.
2. **One daily consequential choice may outperform many chores** for a short-session game. Wordle validates daily scarcity, but not narrative world decisions specifically.[33]
3. **Automatically beautiful visual consequences may increase sharing.** Tiny Glade and Townscaper support output quality, but their pages do not prove screenshot quality caused acquisition.[13][15]
4. **A seven-day visible panorama may create early ownership.** Collections and island progression support accumulation; the exact seven-day structure is untested.
5. **Read-only friend visits may be enough for social proof.** Animal Crossing supports visits, but Pocket World’s asynchronous browser postcard is a different interaction.[9]
6. **Absence should generate evidence rather than damage.** Neko Atsume supports the positive version; the conclusion that punishment would reduce Pocket World retention still needs testing.[10]

## ASSUMPTIONS

These must be validated with prototypes or user tests.

1. Players will care about residents after only 3–7 short sessions.
2. A choice between two gentle alternatives will feel meaningful rather than arbitrary.
3. A persistent visual mark plus one remembered line is enough to communicate memory.
4. Players will notice divergence between worlds without seeing every alternative.
5. A 60–180 second visit is long enough for satisfaction and short enough for ritual use.
6. Players will tolerate waiting until the next day after the current beat closes.
7. A one-screen diorama can remain legible on small iPhones and still look shareable.
8. Authored combinatorial content can avoid repetition with a manageable content budget.
9. A share postcard will convert recipients into players rather than function only as a decorative image.

## SPECULATION

These ideas are strategically interesting but should not enter v0.1 without evidence.

1. Friends’ residents could visit one another asynchronously.
2. Weekly choices could produce rare village “personalities” recognized by the community.
3. Players might trade sealed memories or seeds without chat.
4. Optional AI-assisted authoring could expand event combinations safely before publication.
5. Seasonal community events could synchronize worlds without a live shared server.
6. A resident could compose a weekly letter that summarizes the relationship.

---

## Why would somebody click Pocket World?

### Required acquisition promise

**“Make one choice. Tomorrow, your tiny village remembers.”**

The link preview or short video should show a 3–5 second before/after: a resident asks where to place a fallen star; the player chooses **hill**; a glowing hill shrine appears; the resident later calls it “the night you trusted my view.” This demonstrates ownership, consequence, time, and memory better than the abstract phrase “AI living world.”

### Evidence basis

Instantly understandable browser premises attract low-commitment sampling, and distinctive visual outcomes are easier to communicate than feature lists.[15][24][33]

## Why would somebody continue after 30 seconds?

By 30 seconds the player must have:

1. Seen the whole one-screen world.
2. Met one named resident through a one-line request.
3. Made a binary choice by tapping the world itself.
4. Watched an immediate physical transformation.
5. Seen a second resident react differently.
6. Received one unresolved promise: **“Come back tomorrow to see what they did with it.”**

The continuation comes from one finished payoff plus one open question—not from a tutorial, resource meter, or account form.

## Why would somebody return tomorrow?

- A specific resident was left doing a specific thing.
- The return screen shows exactly what happened during the absence: changed object, footprints/path, weather residue, and a short event recap.
- A new choice is now available because of yesterday’s state.
- There is no decay penalty for arriving late.

This adapts Neko Atsume’s asynchronous surprise and Wordle’s daily closure while giving the outcome a persistent location.[10][33]

## Why would somebody care after seven days?

By Day 7 the player should be able to point to seven details and tell why each exists:

- “Mira planted that because I chose shelter over the market.”
- “The blue roof came after the storm.”
- “Odo now sits by the bell because I backed his idea.”

The village becomes a compressed autobiography of in-fiction choices. Residents reference two or three prior events, have changed preferences, and interact with the physical marks. The player cares if the world proves that their history cannot be reproduced by selecting a skin.

## Why would somebody show their Pocket World to a friend?

The share card must answer three questions at a glance:

1. **What happened?** One dramatic but cozy event title and resident quote.
2. **Why is this mine?** A visible landmark and “because Alex chose…” caption.
3. **What can my friend do?** Open a read-only live snapshot, then start their own version of the same daily situation.

The social object is a **comparison invitation**, not a generic promotional screenshot. Wordle demonstrates the power of a standardized artifact with variable personal outcome.[33] Tiny Glade supports the requirement that the artifact look good by default.[15]

## What could Pocket World offer that existing virtual-pet games do not?

1. **A relationship to a place and a small social triangle, not one need meter.**
2. **Memories with mechanical consequences:** earlier choices alter resident preferences, later options, and visible behavior.
3. **A world that grows while absent without punishing absence.**
4. **History made physical:** each consequential choice leaves a landmark, repair, path, plant, stain, ritual, or habit.
5. **Shareable divergence:** two players can answer the same daily situation and produce visibly different postcards.
6. **Frictionless browser access:** no installation or account before the first meaningful choice.
7. **Deterministic reliability:** residents feel consistent because state rules are authored and testable, not because an LLM improvises.

## What should Pocket World absolutely NOT become?

- A Tamagotchi clone with hunger, dirt, sickness, guilt, or death from absence.
- A Cookie Clicker clone with “happiness per second,” prestige, and exponential currencies.
- A thin Animal Crossing clone with fishing, farming, crafting, furniture grids, shops, and hundreds of items.
- A free-form AI chatbot with a decorative island behind it.
- A screensaver that calls random animation “simulation.”
- A procedural map generator where worlds differ only by seed.
- A branching visual novel hidden under long dialogue boxes.
- A social network with public chat, follows, moderation, or an empty feed.
- A notification-dependent app; ordinary browser visits cannot rely on iOS Web Push, and install/permission is extra friction.[20][27]
- A “cozy” product that removes all uncertainty and therefore all curiosity.

## Decision gate before production

Do not build the full persistent world until a small prototype shows that players can:

1. explain the choice–consequence–memory loop after one minute;
2. identify which visual change came from their action;
3. express curiosity about the next day without a reward bribe; and
4. prefer showing their result to at least one alternative concept.

If those conditions fail, the original concept is weak in its central promise, regardless of art quality or technical sophistication.

## Sources

[9] https://www.animal-crossing.com/new-horizons — Animal Crossing: New Horizons — Nintendo
[10] https://play.google.com/store/apps/details?id=jp.co.hit_point.nekoatsume&hl=en_US — Neko Atsume — Google Play
[11] https://play.google.com/store/apps/details?id=com.finch.finch&hl=en_US — Finch — Google Play
[13] https://www.townscapergame.com — Townscaper — official site
[15] https://store.steampowered.com/app/2198150/Tiny_Glade — Tiny Glade — Steam
[16] https://store.steampowered.com/app/1206560/WorldBox__God_Simulator — WorldBox — Steam
[18] https://www.pokemonsleep.net/en — Pokémon Sleep — official
[20] https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados — WebKit: Web Push on iOS/iPadOS
[24] https://neal.fun — neal.fun
[26] https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage — MDN localStorage
[27] https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Installing — MDN PWA installation
[33] https://en.wikipedia.org/wiki/Wordle — Wordle — Wikipedia overview
[34] https://en.wikipedia.org/wiki/Infinite_Craft — Infinite Craft — Wikipedia overview
