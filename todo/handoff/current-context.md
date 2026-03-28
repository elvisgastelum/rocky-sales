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
- `rocky-sales-planner` is planning-only by policy with guarded context commands (`edit: deny`, `bash: ask` + allowlisted `git status/log/diff`, `npx nx show`).
- `CLAUDE.md` is now a symlink to `AGENTS.md` (single canonical instructions source).

## Most Important Open Issue

- Baseline checks now pass; next critical move is to start the first real product slice using planner -> builder loop.

## What To Do First

1. Restart OpenCode and confirm planner/builder appear in Tab options.
2. Validate planner guarded behavior with one allowlisted command and one non-allowlisted command.
3. Use planner profile to shape the first minimal consumer/admin product slice.
4. Execute chosen slice with builder profile.
5. Run focused Nx checks on changed projects and update todo memory files.

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
