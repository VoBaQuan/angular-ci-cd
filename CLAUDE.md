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

# Run tests
npm test

# Run SSR server (after build)
npm run serve:ssr:test-cicd
```

There is no lint script defined in `package.json`. Angular's build tooling performs type checking during build.

## Architecture

This is an **Angular 21 SSR application** using standalone components (no NgModule pattern).

**Rendering**: Server-Side Rendering via `@angular/ssr` with Express 5. The app has two bootstrap paths:
- Browser: `src/main.ts` → `app.config.ts` (includes `provideRouter`, `provideClientHydration`)
- Server: `src/main.server.ts` → `app.config.server.ts` → `src/server.ts` (Express handler)

**Key conventions**:
- Standalone components only — no `NgModule` declarations
- File naming: `app.ts` (not `app.component.ts`), `app.html`, `app.css` per component
- Signals-based reactivity preferred
- Tailwind CSS 4 for styling (configured via PostCSS in `.postcssrc.json`)
- TypeScript strict mode enabled; ES2022 target

**Testing**: Vitest 4 with jsdom environment. Test files live alongside source as `*.spec.ts`. Config in `tsconfig.spec.json`.

**Code style**: 2-space indent, single quotes, 100-char line width (enforced by `.editorconfig` and Prettier config in `package.json`).
