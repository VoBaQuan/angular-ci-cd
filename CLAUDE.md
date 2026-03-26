# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development server
npm start

# Build (production)
npm run build

# Build (watch mode)
npm run watch

# Lint (ESLint via Angular CLI)
npm run lint

# Run all tests (interactive, via Angular CLI)
npm test

# Run tests in CI mode (non-interactive)
npm run test:ci

# Run a single test file
npx vitest run src/app/app.spec.ts

# Run SSR server (after build)
npm run serve:ssr:test-cicd
```

Angular's build tooling performs type checking during build (`ng build`).

## Architecture

This is an **Angular 21 SSR application** using standalone components (no NgModule pattern).

**Rendering**: Server-Side Rendering via `@angular/ssr` with Express 5. The app has two bootstrap paths:
- Browser: `src/main.ts` → `app.config.ts` (includes `provideRouter`, `provideClientHydration`)
- Server: `src/main.server.ts` → `app.config.server.ts` → `src/server.ts` (Express handler via `AngularNodeAppEngine`)

All routes currently use `RenderMode.Prerender` (defined in `app.routes.server.ts`), meaning pages are statically generated at build time. Build outputs to `dist/test-cicd/browser` (static) and `dist/test-cicd/server` (Express SSR). The SSR server listens on the `PORT` env var or defaults to `4000`.

**Key conventions**:
- Standalone components only — no `NgModule` declarations
- File naming: `app.ts` (not `app.component.ts`), `app.html`, `app.css` per component
- Signals-based reactivity preferred
- Tailwind CSS 4 for styling (configured via PostCSS in `.postcssrc.json`)
- TypeScript strict mode enabled; ES2022 target
- Component selector prefix: `app-` (kebab-case); directive prefix: `app` (camelCase)

**Testing**: Vitest 4 with jsdom environment. Test files live alongside source as `*.spec.ts`. Vitest globals are enabled — no need to import `describe`, `it`, `expect`, etc. Config in `vitest.config.ts` and `tsconfig.spec.json`.

**CI/CD**: GitHub Actions workflow (`.github/workflows/deploy.yml`) runs lint and build on push to `main`, then deploys the `dist/test-cicd/browser` artifact to GitHub Pages with `--base-href /angular-ci-cd/`. Unit tests are currently disabled in the CI pipeline.

**Code style**: 2-space indent, single quotes, 100-char line width (enforced by `.editorconfig` and Prettier config in `package.json`).

## Quiz Feature

The main feature lives in `src/app/quiz/`. It demonstrates the preferred signal-based state pattern:

- **`QuizStateService`** — single source of truth, provided at root. Holds writable signals (`status`, `currentIndex`, `answers`), derived computed signals (`score`, `progress`, `isLastQuestion`, etc.), and actions (`start`, `selectAnswer`, `next`, `prev`, `restart`).
- **`QuizStatus`** — state machine: `'idle'` → `'playing'` → `'finished'`. Components switch on `status` to show `<app-start>`, `<app-question>`, or `<app-result>`.
- **SSR guard pattern**: Any browser API (e.g., `localStorage`) must be gated with `isPlatformBrowser(this.platformId)` — inject `PLATFORM_ID` and check before accessing browser globals.
- Questions are loaded via `toSignal()` wrapping an RxJS observable (simulates async), with an `initialValue` fallback for SSR.
