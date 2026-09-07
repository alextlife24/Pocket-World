# Pocket World — Day 1: The Fallen Star

A mobile browser prototype of choice → visible consequence → resident memory.

## Run

Requires Node.js 22.12+ (or 24).

```sh
npm ci
npm run dev
```

Open the printed local URL. For iPhone Safari, connect the phone to the same Wi-Fi and open the printed Network URL (allow the dev server through the local firewall if needed). Keep the same origin/port to retain the save.

```sh
npm run build
npm run preview
```

Deploy the generated `dist` directory to any static HTTPS host. Vercel settings: framework Vite, build `npm run build`, output `dist`. No environment variables or backend needed.

## Scope and source decisions

Read all six documents under `docs/research`. `POCKET-WORLD-STRATEGY.md` sections 5, 13 and 17 take precedence over the earlier research's seven-event proposal. This implementation follows the user's narrower Day 1 request: no Day 2 event, postcards, sharing, accounts, AI, economy, or additional systems.

Implementation plan: a fixed SVG village and spatial HTML touch targets; a three-second carry/build transition; authored branch-specific reactions; local persistence; a simulated return revealing routines; browser/build verification.

Hill creates a raised beacon/lookout. Mira moves her sleeping blanket uphill on return. Square creates a communal lantern with footprints. Residents bring stools and tea and gather on return. Both outcomes retain the original Day 1 memory. Preview Tomorrow is a simulation of the consequence, not a second playable day. Refresh also reveals that consequence, per section 17. Back to today only changes the presentation.

Only `{ choice, completedAt }` is stored under `pocket-world:fallen-star:v1`. The key carries the schema version. Selection is committed before animation for reload safety; `completedAt` represents the committed decision time. No network calls are made by the production game. Console timestamps record first render, first tap, completion and preview. Reset removes only this prototype's key.

## Test

```sh
npx playwright install webkit
npm test
```

The Chromium project uses an installed Google Chrome (`channel: chrome`). Install Chrome before running it.

Tests exercise both choices, distinct landmarks and routines, reload, interruption during animation, reset, reduced motion, malformed saves, failed storage, and 360×640 layout in Chromium and WebKit mobile emulation. WebKit emulation is not a physical iPhone Safari test.

Manual iPhone checks: open → tap Hill → watch beacon appear → Preview Tomorrow → see blanket and Mira's callback → refresh → verify same branch → Reset → repeat Square and verify the gathering. Also check portrait/landscape, Safari bars, background/resume and enlarged text.

With five first-time players, give no explanation. Time their first choice. After the preview ask “What changed, and why?” Record whether they identify the choice, landmark and resident habit, and whether they spontaneously want to return. Technical tests cannot establish the 30-second comprehension hypothesis.

## Placeholders and limits

SVG terrain, characters and motion are original lightweight prototype art. Dialogue and routines are deterministic authored scenes; time is simulated, with no background world simulation or audio. No cloud backup: clearing browser data or switching origin loses the save. If storage fails, the game remains playable and shows an unsaved notice. There is no deployed public URL included by default.

Next priority: physical iPhone and five-player comprehension testing, then improve the spatial tap affordance and the visibility of the remembered routine based on observed confusion. Do not expand to Day 2 before that test.


