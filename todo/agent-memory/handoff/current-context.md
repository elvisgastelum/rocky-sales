# Current Context

Updated: 2026-03-28

## Where We Are

- Nx monorepo with 8 apps (consumer/admin web + bff + e2e).
- Consumer apps now have first non-scaffold vertical slice implemented.
- Git branch `master` is ahead by 1 commit, working tree currently dirty with local in-progress files.
- Repo-local agent profiles are now tracked in git:
  - `.agents/skills/rocky-sales-planner/SKILL.md`
  - `.agents/skills/rocky-sales-builder/SKILL.md`
- OpenCode Tab-switchable primary agents are now tracked in git:
  - `.opencode/agents/rocky-sales-planner.md`
  - `.opencode/agents/rocky-sales-builder.md`
- OpenCode specialist subagent worker pool is now tracked in git:
  - `.opencode/agents/rocky-sales-project-manager.md`
  - `.opencode/agents/rocky-sales-senior-frontend.md`
  - `.opencode/agents/rocky-sales-senior-backend.md`
  - `.opencode/agents/rocky-sales-test-engineer.md`
  - `.opencode/agents/rocky-sales-e2e-specialist.md`
  - `.opencode/agents/rocky-sales-qa-analyst.md`
  - `.opencode/agents/rocky-sales-devops-engineer.md`
  - `.opencode/agents/rocky-sales-docker-expert.md`
- `rocky-sales-planner` is planning-only by policy with guarded context commands (`edit: deny`, `bash: ask` + allowlisted `git status/log/diff`, `npx nx show`) and validation commands (`npm run format`, `npx nx affected -t lint test typecheck --uncommitted --tui=false`, `npx nx run-many -t lint test typecheck --tui=false`); clipboard commands `pbcopy`/`pbpaste` are explicitly ask-gated.
- Added project-local slash command `.opencode/commands/commit-message.md` to suggest a commit title and then ask whether to copy it to clipboard.
- Added canonical product context docs under `docs/`:
  - `docs/agent-context.md`
  - `docs/project-goal.md`
  - `docs/architecture.md`
- Added `docs/testing-strategy.md` for prioritized test implementation guidance.
- Updated startup anchors in `AGENTS.md`, primary agents, repo-local skills, and all specialist subagents to read docs-first context while preserving required `todo/agent-memory/` iteration memory flow.
- Standardized docs language to reflect current monorepo reality (frontend + backend) and kept older API-first planning references generic (no branch-specific mentions).
- Added markdown board tracking under `todo/board/` with columns `backlog`, `todo`, `doing`, `testing`, `done`, `archive`, plus `card-template.md` and per-column guidance.
- Added searchable board task-code convention (`RCS-0000`) with central registry file `todo/board/task-codes.md`.
- Created first board card `RCS-0001` under `todo/board/todo/` for admin BFF home endpoint implementation chunk.
- Expanded board with full project delivery queue:
  - `todo`: `RCS-0001` to `RCS-0003` (first admin vertical slice).
  - `backlog`: `RCS-0004` to `RCS-0032` (contract strategy, auth/RBAC, domain modules, QA hardening, CI/release work).
- Normalized path terminology across docs and agent instructions:
  - `todo/agent-memory/` is canonical for persistent agent memory.
  - `todo/board/` is canonical for board state and card workflow.
- Restored planner/builder startup-anchor order to explicitly read `todo/README.md`, `todo/agent-memory/next-steps.md`, and `todo/agent-memory/handoff/current-context.md`.
- Planner and builder profiles now explicitly instruct delegation to specialist workers and require clean architecture + code-smell checks in handoff outputs.
- `CLAUDE.md` is now a symlink to `AGENTS.md` (single canonical instructions source).
- Delegation flow smoke-tested in this loop:
  - Planner handoff to `rocky-sales-project-manager` succeeded.
  - Builder handoff to `rocky-sales-senior-frontend` succeeded.
  - Both outputs included clean architecture checks, code-smell risks, and exact Nx verification commands.
- First consumer vertical slice implemented this loop:
  - BFF: `GET /api/consumer/home` returns `{ title, message }`.
  - Web: `/` route fetches endpoint and renders loading/error/success states.
  - Tests updated: consumer web unit, consumer BFF unit, consumer BFF e2e, consumer web e2e.
- Local runtime defaults now avoid BFF collisions:
  - `store-consumer-bff` default port `3000`
  - `admin-bff` default port `4000`
  - `admin-bff-e2e` support scripts default to `4000` (setup + teardown + axios base URL)
- `npm run format` now runs `nx format:write` + `nx run-many -t lint --fix --tui=false`.

## Most Important Open Issue

- Consumer baseline is established; next critical move is executing the seeded board queue starting with `RCS-0001` to `RCS-0003` for first admin slice completion.

## What To Do First

1. Execute `RCS-0001` in `admin-bff` and move card states (`todo -> doing -> testing -> done`).
2. Execute `RCS-0002` in `admin-web` after `RCS-0001` reaches `testing` or `done`.
3. Execute `RCS-0003` to finalize admin home e2e coverage for first vertical slice.
4. Promote `RCS-0004` and `RCS-0005` into `todo/board/todo/` next, then continue in code order.
5. Run full workspace validation: `npx nx run-many -t lint test typecheck --tui=false` at phase boundaries.

## Quick Command Pack

- `npx nx show projects`
- `npx nx run-many -t lint test typecheck --tui=false`
- `npx nx run @rocky-sales/store-consumer-web-e2e:lint`
- `Read todo/README.md and todo/agent-memory/handoff/current-context.md first, then <task>.`

## Latest Verification Snapshot

- `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false` -> pass for changed consumer projects.
- `npx nx run @rocky-sales/store-consumer-bff-e2e:e2e -- --runTestsByPath src/store-consumer-bff/store-consumer-bff.spec.ts` -> pass.
- `npx nx run @rocky-sales/store-consumer-web-e2e:e2e -- src/example.spec.ts` -> pass.
- `npm run format` now includes ESLint `--fix` and completed successfully.
- Latest docs/agent wiring loop also passed `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false` (no failing targets; `nx affected` had no tasks for current uncommitted scope).
- Port-fix loop passed:
  - `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false` -> pass for `@rocky-sales/admin-bff` and `@rocky-sales/admin-bff-e2e`.
  - `npx nx run @rocky-sales/admin-bff-e2e:e2e -- --runTestsByPath src/admin-bff/admin-bff.spec.ts` -> pass; teardown confirms port `4000`.

## Memory Discipline

- Read `todo/README.md` first.
- At end of iteration: update `todo/agent-memory/project-state.md`, `todo/agent-memory/backlog.md`, `todo/agent-memory/next-steps.md`, `todo/agent-memory/run-log.md`, and this handoff file.
