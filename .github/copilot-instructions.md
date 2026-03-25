# Bingo Mixer – Workspace Guidelines

## Mandatory Development Checklist

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm test`

## Build & Run

```bash
npm install          # install dependencies
npm run dev          # dev server → http://localhost:5173
npm run build        # tsc + vite production build
npm run lint         # eslint
npm test             # vitest (single run)
```

> **GitHub Pages base path** is set via `VITE_REPO_NAME` env var in CI. Never hard-code `/game/` locally.

## Architecture

Keep these layers separate:
- Pure logic in `src/utils/bingoLogic.ts` (no React, no side effects)
- Game state in `src/hooks/useBingoGame.ts` (single source of state/actions)
- UI in `src/components/` (props-driven; no Context API)

Types live in `src/types/index.ts`. `BingoSquareData.id` is the 0-based board index, and index `12` is always FREE SPACE.

## Conventions

- If you add a `BingoLine` type (for example `corners`), update both `src/types/index.ts` and `validateStoredData` in `src/hooks/useBingoGame.ts`, then bump `STORAGE_VERSION`.
- Game state is versioned in `localStorage`; schema changes require a `STORAGE_VERSION` bump.
- `src/data/questions.ts` must keep at least 24 entries (board generation slices exactly 24).

## Styling

Tailwind CSS v4 is loaded via `@tailwindcss/vite` (no `tailwind.config.js`).
Read `.github/instructions/tailwind-4.instructions.md` before writing Tailwind.

## Testing Notes

- Vitest + jsdom + `@testing-library/react`
- Setup file: `src/test/setup.ts`
- Test globals are available; no import needed for `describe`, `it`, `expect`
- Co-locate tests with source files; prioritize pure logic tests

## Workshop

Lab guides for participants live in `workshop/`. They are documentation only — do not import from or modify them during development.
