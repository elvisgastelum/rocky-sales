# Project State Snapshot

Last updated: 2026-03-28

## Repository Health

- Git branch: `master`
- Remote relation: `ahead 1` vs `origin/master`
- Working tree: dirty (active local changes in agent/todo files plus e2e ESLint configs)
- Monorepo: Nx v22 + npm workspaces

## Active Projects

1. `@rocky-sales/store-consumer-web` (React + Vite + Vitest)
2. `@rocky-sales/store-consumer-web-e2e` (Playwright)
3. `@rocky-sales/store-consumer-bff` (NestJS + Jest)
4. `@rocky-sales/store-consumer-bff-e2e` (Jest e2e)
5. `@rocky-sales/admin-web` (React + Vite + Vitest)
6. `@rocky-sales/admin-web-e2e` (Playwright)
7. `@rocky-sales/admin-bff` (NestJS + Jest)
8. `@rocky-sales/admin-bff-e2e` (Jest e2e)

## Functional Maturity

- `store-consumer-web`: first real home flow implemented; `/` now fetches `/api/consumer/home` and renders loading/success/error states.
- `store-consumer-bff`: first real endpoint implemented at `GET /api/consumer/home` returning `{ title, message }`.
- Consumer tests updated beyond scaffold smoke checks (web unit + BFF unit + consumer web/bff e2e).
- Admin apps remain scaffold-level.
- Domain code under root `src/customers` and `src/stores`: directory placeholders only.
- `packages/`: currently empty placeholder.

## Agent System

- Repository-local agent profiles now exist under `.agents/skills/`.
- Profiles:
  - `rocky-sales-planner` for planning-only loops.
  - `rocky-sales-builder` for implementation + verification + handoff updates.
- Both profiles enforce startup anchor on `todo/README.md`, `todo/handoff/current-context.md`, and `todo/next-steps.md`.
- OpenCode primary (Tab-switchable) agents now exist under `.opencode/agents/`:
  - `.opencode/agents/rocky-sales-planner.md`
  - `.opencode/agents/rocky-sales-builder.md`
- OpenCode specialist subagent worker pool now exists under `.opencode/agents/`:
  - `rocky-sales-project-manager`
  - `rocky-sales-senior-frontend`
  - `rocky-sales-senior-backend`
  - `rocky-sales-test-engineer`
  - `rocky-sales-e2e-specialist`
  - `rocky-sales-qa-analyst`
  - `rocky-sales-devops-engineer`
  - `rocky-sales-docker-expert`
- `rocky-sales-planner` uses guarded planning permissions (`edit: deny`, `bash: ask`) with allowlisted context + validation commands (`git status/log/diff`, `npx nx show`, `npm run format`, `npx nx affected`, `npx nx run-many -t lint test typecheck --tui=false`); clipboard commands (`pbcopy`, `pbpaste`) are explicitly ask-gated.
- Added project-local OpenCode command `.opencode/commands/commit-message.md` to suggest commit titles and then ask whether to copy with `pbcopy`.
- `rocky-sales-planner` and `rocky-sales-builder` now both include explicit worker-delegation guidance and before/after chunk validation cadence.
- `CLAUDE.md` is now a filesystem symlink to `AGENTS.md`; `AGENTS.md` is the canonical instruction source.
- Delegation smoke test completed through specialist workers:
  - Planner handoff validated with `rocky-sales-project-manager` (minimal web+BFF vertical slice proposal).
  - Builder handoff validated with `rocky-sales-senior-frontend` (file-level consumer web implementation plan).

## Verification Status

Latest loop verification:

- `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
- `npx nx run @rocky-sales/store-consumer-bff-e2e:e2e -- --runTestsByPath src/store-consumer-bff/store-consumer-bff.spec.ts`
- `npx nx run @rocky-sales/store-consumer-web-e2e:e2e -- src/example.spec.ts`

Outcome:

- Pass: `npm run format` (now runs `nx format:write` + workspace `lint --fix`) completed.
- Pass: affected `lint/test/typecheck` for changed consumer projects completed.
- Pass: targeted consumer BFF e2e and consumer web e2e specs completed.
- Note: Vitest still emits non-failing React Router future-flag warnings.
- Note: Nx web e2e chain prints `vite preview` non-zero shutdown warning after Playwright exits.

## Current Blockers

1. OpenCode in-app restart/Tab-list verification is still pending (manual UI check not completed in this loop).
2. First admin product slice and shared contract strategy are still pending.

## Risk Notes

- Broad lint/test runs can still generate artifacts; keep `dist/` and `out-tsc/` ignored in project ESLint configs.
- Current apps remain scaffold-level, so baseline green does not represent product readiness.
