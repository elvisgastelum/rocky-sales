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
- `npm run format` now runs `nx format:write` + `nx run-many -t lint --fix --tui=false`.

## Most Important Open Issue

- Consumer baseline is established; next critical move is delivering the first admin slice and selecting a shared contract strategy between web and BFF apps.

## What To Do First

1. Restart OpenCode and confirm planner/builder plus specialist workers appear in agent list.
2. Implement first admin vertical slice mirroring consumer pattern (endpoint + root fetch/render + tests).
3. Decide shared contract path for web/BFF payloads (local duplicated types vs new `packages/` contract package).
4. Run full workspace validation: `npx nx run-many -t lint test typecheck --tui=false`.
5. Update todo memory files and open next cycle note.

## Quick Command Pack

- `npx nx show projects`
- `npx nx run-many -t lint test typecheck --tui=false`
- `npx nx run @rocky-sales/store-consumer-web-e2e:lint`
- `Read todo/README.md and todo/handoff/current-context.md first, then <task>.`

## Latest Verification Snapshot

- `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false` -> pass for changed consumer projects.
- `npx nx run @rocky-sales/store-consumer-bff-e2e:e2e -- --runTestsByPath src/store-consumer-bff/store-consumer-bff.spec.ts` -> pass.
- `npx nx run @rocky-sales/store-consumer-web-e2e:e2e -- src/example.spec.ts` -> pass.
- `npm run format` now includes ESLint `--fix` and completed successfully.

## Memory Discipline

- Read `todo/README.md` first.
- At end of iteration: update `project-state`, `backlog`, `next-steps`, `run-log`, and this handoff file.
