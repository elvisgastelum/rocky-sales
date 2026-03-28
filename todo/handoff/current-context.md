# Current Context

Updated: 2026-03-28

## Where We Are

- Nx monorepo with 8 apps (consumer/admin web + bff + e2e).
- Codebase is in scaffold stage for most projects.
- Git branch `master` is ahead by 1 commit, working tree clean.
- Repo-local agent profiles are now tracked in git:
  - `.agents/skills/rocky-sales-planner/SKILL.md`
  - `.agents/skills/rocky-sales-builder/SKILL.md`

## Most Important Open Issue

- `@rocky-sales/store-consumer-web-e2e:lint` fails because generated `out-tsc` files are being linted.

## What To Do First

1. Fix e2e lint ignore pattern in `apps/store-consumer-web-e2e/.eslintrc.json` (and align similar projects).
2. Re-run full baseline checks.
3. Use planner profile to shape first real consumer/admin product slices.
4. Execute chosen slice with builder profile.

## Quick Command Pack

- `npx nx show projects`
- `npx nx run-many -t lint test typecheck --tui=false`
- `npx nx run @rocky-sales/store-consumer-web-e2e:lint`
- `Read todo/README.md and todo/handoff/current-context.md first, then <task>.`

## Memory Discipline

- Read `todo/README.md` first.
- At end of iteration: update `project-state`, `backlog`, `next-steps`, `run-log`, and this handoff file.
