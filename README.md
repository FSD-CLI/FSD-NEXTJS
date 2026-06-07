# FSD Next.js Starter

A Next.js, React, TypeScript, Tailwind CSS, and Feature-Sliced Design starter.

## Quick Start

```bash
npm install
npm run dev
npm run build
```

## Structure

```text
src/
  app/       Next App Router entry, providers, guards, routing, and global styles
  screens/   Route-level screens composed from lower layers (Next-safe FSD pages equivalent)
  widgets/   Large composed layout sections
  features/  User actions, mutations, schemas, and feature flows
  entities/  Business entities, API reads, query keys, and domain models
  shared/    Reusable UI, helpers, config, types, and assets
```

## Configuration

- Next.js App Router with React Compiler enabled.
- TypeScript strict mode with path alias `@/* -> ./src/*`.
- Tailwind CSS v4 through `@tailwindcss/postcss`.
- Biome for linting, formatting, React rules, Next rules, and import organization.
- shadcn configured for FSD aliases under `shared/ui` and `shared/lib`.
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