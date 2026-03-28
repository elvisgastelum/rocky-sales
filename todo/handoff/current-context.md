# Current Context

Updated: 2026-03-28

## Where We Are

- Nx monorepo with 8 apps (consumer/admin web + bff + e2e).
- Codebase is in scaffold stage for most projects.
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
- `rocky-sales-planner` is planning-only by policy with guarded context commands (`edit: deny`, `bash: ask` + allowlisted `git status/log/diff`, `npx nx show`) and validation commands (`npm run format`, `npx nx affected -t lint test typecheck --uncommitted --tui=false`, `npx nx run-many -t lint test typecheck --tui=false`).
- Planner and builder profiles now explicitly instruct delegation to specialist workers and require clean architecture + code-smell checks in handoff outputs.
- `CLAUDE.md` is now a symlink to `AGENTS.md` (single canonical instructions source).

## Most Important Open Issue

- Agent topology now includes specialist workers; next critical move is to validate end-to-end delegation flow in OpenCode and start first real product slice using planner -> specialist workers -> builder loop.

## What To Do First

1. Restart OpenCode and confirm planner/builder plus specialist workers appear in agent list.
2. Validate planner guarded behavior with one newly allowlisted validation command and one non-allowlisted command.
3. Validate one planner delegation and one builder delegation to specialist workers.
4. Use planner profile + workers to shape the first minimal consumer/admin product slice.
5. Execute chosen slice with builder profile + workers and run focused Nx checks.

## Quick Command Pack

- `npx nx show projects`
- `npx nx run-many -t lint test typecheck --tui=false`
- `npx nx run @rocky-sales/store-consumer-web-e2e:lint`
- `Read todo/README.md and todo/handoff/current-context.md first, then <task>.`

## Latest Verification Snapshot

- `npx nx run @rocky-sales/store-consumer-web-e2e:lint` -> pass.
- `npx nx run-many -t lint test typecheck --tui=false` -> pass for all 8 projects.
- e2e `.eslintrc.json` files now ignore `out-tsc/` and `dist/`.

## Memory Discipline

- Read `todo/README.md` first.
- At end of iteration: update `project-state`, `backlog`, `next-steps`, `run-log`, and this handoff file.
