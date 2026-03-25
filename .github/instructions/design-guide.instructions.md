---
description: "Use when designing or redesigning UI screens/components in this app, especially for themed visual refreshes, copy polish, and interaction styling."
name: "Bingo Mixer Design Guide"
applyTo:
  - "src/components/**/*.tsx"
  - "src/index.css"
---
# Bingo Mixer Design Guide

## Design Direction Workflow

- Start with a clear art direction in one sentence before coding (for example: modern luxury marina).
- Implement design tokens first in [src/index.css](src/index.css): palette, typography, and key surface/state colors.
- Build components from tokens; avoid hardcoded one-off colors unless there is a strong reason.
- Keep motion balanced: one notable reveal per screen, subtle interactions elsewhere.

## Visual Standards

- Avoid generic UI aesthetics and default color schemes.
- Prefer expressive typography with a clear display font and readable body font.
- Create atmosphere with layered backgrounds, depth, and intentional contrast.
- Preserve mobile usability: comfortable tap targets, no text clipping, board readability first.

## Component Expectations

- Start screen: strong themed headline, concise onboarding copy, clear primary CTA.
- Game screen: compact header, clear helper text, non-intrusive status/banner treatment.
- Board/squares: default, marked, winning, and free-space states must be instantly distinguishable.
- Modal: celebratory but brief; dismissal path obvious and fast.

## Guardrails

- Do not change gameplay logic in [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts) for visual-only redesigns.
- Do not change board logic in [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts) for visual-only redesigns.
- Keep existing component props contracts stable unless explicitly requested.

## Quality Gates

- After UI redesign changes, you must run:
  - `npm run lint`
  - `npm run build`
  - `npm test`
- You must also verify manually:
  - Start -> play -> bingo -> modal dismiss -> reset flow.
  - Refresh during play and confirm persistence still works.
  - Mobile layout remains readable and usable.
