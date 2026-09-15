# FSD Next.js Starter

An opinionated Next.js, React, TypeScript, and Tailwind starter with the complete
Feature-Sliced Design layer structure ready from the first commit.

## Quick Start

```bash
npm install
npm run dev
npm run build
```

## Structure

```text
src/
  app/       Next App Router entry, config, providers, routing, and global styles
  pages/     FSD route-level UI imported by thin App Router page files
  widgets/   Large composed layout sections
  features/  User actions, mutations, schemas, and feature flows
  entities/  Business entities, API reads, query keys, and domain models
  shared/    API client, reusable UI, helpers, config, types, and assets
```

All six layers are present from project creation. Next.js routing stays in
`src/app`; its route files import page compositions from `src/pages`. Interactive
providers and feature UI are narrow Client Component boundaries, while route and
layout files remain Server Components by default.

Route files use the supported `.route.tsx` suffix (for example,
`app/page.route.tsx`). The custom `pageExtensions` setting prevents Next.js from
treating the FSD `src/pages` layer as the legacy Pages Router.

## Included stack

- Axios API client in `src/shared/api`.
- React Query provider in `src/app/providers`.
- Zustand for client state.
- React Hook Form and Zod for forms and validation.
- shadcn-compatible primitives under `src/shared/ui`.
- Official Steiger architecture checks through `npm run fsd:check`.

Projects created through the CLI store their selected stack once in
`fsd.config.json`. Slice generators read that file without repeating setup
questions.

## Configuration

- Next.js App Router with React Compiler enabled.
- TypeScript strict mode with path alias `@/* -> ./src/*`.
- Tailwind CSS v4 through `@tailwindcss/postcss`.
- Biome for linting, formatting, React rules, Next rules, and import organization.
- shadcn-compatible aliases under `shared/ui` and `shared/lib`; run the shadcn
  CLI on demand instead of shipping it in every application.
- Conventional commits through Commitlint and Commitizen.
- Husky hooks for commit message checks and pre-commit quality checks.

## Quality Commands

```bash
npm run lint
npm run typecheck
npm run ci
git diff --check
npm audit --omit=dev
```
