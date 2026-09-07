# Prototype verification — 2026-09-07

- `npm run build`: passed (TypeScript strict checking and Vite production bundle).
- Playwright: **14 / 14 passed**, 27.9 seconds. Seven cases each in installed Chrome mobile emulation and Playwright WebKit 26.6 mobile emulation.
- Covered: both branches and their exclusive landmarks, resident callbacks/routines, preview, save/reload, reset/reload, refresh during animation, reset during animation, malformed save, reduced motion, storage write failure, minimum touch target size and 360×640 horizontal overflow.
- Captured and inspected initial, Hill return and Square return screenshots. Short-screen return view measured 360×640 without scrolling; normal text size.
- Fixed a moving touch target discovered by tests: location buttons now pulse their glow without moving.
- Production HTML/CSS/JS totals approximately 7.2 KB gzip; no runtime remote assets or API calls.

Environment command (this workspace stores downloaded browsers in scratch space):

```powershell
$env:PLAYWRIGHT_BROWSERS_PATH='../../work/pw-browsers'
npm test -- --workers=2
```

Not verified: physical iPhone Safari, older-device performance, real five-player 30-second comprehension, public hosting. WebKit emulation is evidence of engine compatibility, not a substitute for real-device testing.
