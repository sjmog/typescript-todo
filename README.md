# TypeScript Todo

Tiny React + TypeScript app powered by Vite. Tests run in a real browser via Vitest + Playwright.

## Requirements

- Node: v22.18.0 (see .nvmrc)
- pnpm: 10.10.0

## Quick start

- nvm use
- pnpm install
- pnpm dev → http://localhost:5173

## Scripts

- Dev: pnpm dev
- Build: pnpm build
- Preview build: pnpm preview
- Test (watch): pnpm test
- Test (once): pnpm test:run
- Coverage: pnpm test:coverage

## Testing

- First time: pnpm exec playwright install

## Notes

- Dev server: Vite. Default port 5173; override with: pnpm dev -- --port 3000
- Import alias: @ → src
- Entry: src/main.tsx
- Main component: src/components/App.tsx
- Tests: src/test/* (Chromium)

## Tech

TypeScript · React · Vite · Vitest · Playwright · Zustand · pnpm
