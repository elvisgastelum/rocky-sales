# Run Log

## 2026-03-28

- Command: `npx nx show projects`
  - Result: 8 projects detected (`consumer/admin` x `web/bff` + `e2e`).

- Command: `npx nx run-many -t lint test typecheck --tui=false`
  - Result: failed overall due to one target.
  - Failed target: `@rocky-sales/store-consumer-web-e2e:lint`
  - Error source: `apps/store-consumer-web-e2e/out-tsc/playwright/playwright.config.d.ts`
  - Error rule: `@typescript-eslint/ban-types`

- Command: `git status --short --branch`
  - Result: `## master...origin/master [ahead 1]`
  - Working tree remained clean after checks.

- Command: `mkdir -p .agents/skills/rocky-sales-builder .agents/skills/rocky-sales-planner`
  - Result: created repo-local agent profile directories for tracked, cross-machine usage.

- File updates:
  - Added `.agents/skills/rocky-sales-builder/SKILL.md`.
  - Added `.agents/skills/rocky-sales-planner/SKILL.md`.
  - Added `.agents/README.md`.
  - Updated `AGENTS.md` with repository-local profile routing and startup anchor.

- Command: `mkdir -p .opencode/agents`
  - Result: created project-local OpenCode agents directory for Tab-switchable agents.

- File updates:
  - Added `.opencode/agents/rocky-sales-planner.md`.
  - Added `.opencode/agents/rocky-sales-builder.md`.
  - Updated `AGENTS.md` to include OpenCode primary agent locations.

- File updates:
  - Updated `.opencode/agents/rocky-sales-planner.md` to enforce read-only permissions (`edit: deny`, `bash: deny`).
  - Updated `AGENTS.md` with explicit permission intent for planner vs builder.

- File updates:
  - Updated `.opencode/agents/rocky-sales-planner.md` to guarded context permissions:
    - `edit: deny`
    - `bash: '*' ask` + allowlisted `git status/log/diff` and `npx nx show`
  - Updated `AGENTS.md` and todo memory docs to match planner permission policy.

- File updates:
  - Replaced `CLAUDE.md` with a pointer to `AGENTS.md`.

- Command: `rm "CLAUDE.md" && ln -s "AGENTS.md" "CLAUDE.md"`
  - Result: `CLAUDE.md` is now a symlink to `AGENTS.md` (`CLAUDE.md -> AGENTS.md`).

- File updates:
  - Updated e2e ESLint configs to ignore generated `out-tsc/` artifacts:
    - `apps/store-consumer-web-e2e/.eslintrc.json`
    - `apps/admin-web-e2e/.eslintrc.json`
    - `apps/store-consumer-bff-e2e/.eslintrc.json`
    - `apps/admin-bff-e2e/.eslintrc.json`

- Command: `npx nx run @rocky-sales/store-consumer-web-e2e:lint`
  - Result: passed.

- Command: `npx nx run-many -t lint test typecheck --tui=false`
  - Result: passed for all 8 projects.
  - Note: Nx cache reused 17 of 20 tasks.

- Command: `git status --short`
  - Result: working tree contains existing in-progress changes plus this iteration's e2e ESLint and todo updates.

- File updates:
  - Updated `.opencode/agents/rocky-sales-planner.md` allowlist to include validation commands: `npm run format`, `npx nx affected`, and `npx nx run-many -t lint test typecheck --tui=false`.
  - Updated `.agents/skills/rocky-sales-planner/SKILL.md` to document before/after chunk validation cadence and permitted validation commands.
  - Updated `AGENTS.md` permission intent to match planner validation allowlist.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: `nx format:write` completed; `nx affected` reported `No tasks were run` for current uncommitted scope.

- File updates:
  - Updated todo memory docs (`project-state`, `backlog`, `next-steps`, `handoff/current-context`) to reflect planner permission and workflow changes.

- Research:
  - Used Context7 with `/anomalyco/opencode` to confirm OpenCode best practices for project-local agents, `mode: subagent`, frontmatter permissions, and skill discovery.

- File updates:
  - Added specialist OpenCode subagent worker profiles under `.opencode/agents/`:
    - `rocky-sales-project-manager.md`
    - `rocky-sales-senior-frontend.md`
    - `rocky-sales-senior-backend.md`
    - `rocky-sales-test-engineer.md`
    - `rocky-sales-e2e-specialist.md`
    - `rocky-sales-qa-analyst.md`
    - `rocky-sales-devops-engineer.md`
    - `rocky-sales-docker-expert.md`
  - Updated planner/builder docs to include worker delegation rules and quality guardrails:
    - `.opencode/agents/rocky-sales-planner.md`
    - `.opencode/agents/rocky-sales-builder.md`
    - `.agents/skills/rocky-sales-planner/SKILL.md`
    - `.agents/skills/rocky-sales-builder/SKILL.md`
  - Updated discovery docs:
    - `.agents/README.md`
    - `AGENTS.md`

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: `nx format:write` completed; `nx affected` reported `No tasks were run` for current uncommitted scope.

- File updates:
  - Updated todo memory docs (`project-state`, `backlog`, `next-steps`, `handoff/current-context`, `decisions`) for specialist-worker rollout.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: `nx format:write` completed; `nx affected` reported `No tasks were run`.

- Delegation smoke test: planner -> `rocky-sales-project-manager`
  - Result: returned minimal web+BFF vertical slice proposal (`GET /api/consumer/home` + consumer web `/` fetch/render with loading/error states).
  - Included: acceptance criteria, clean architecture checks, code-smell risks, exact Nx verification commands.

- Delegation smoke test: builder -> `rocky-sales-senior-frontend`
  - Result: returned file-level consumer web implementation plan (routes/components/tests/e2e updates).
  - Included: clean architecture checks, code-smell risks, exact Nx verification commands.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: `nx format:write` completed; `nx affected` reported `No tasks were run`.

- File updates:
  - Updated todo memory docs (`project-state`, `backlog`, `next-steps`, `handoff/current-context`) after delegation smoke-test loop.
  - Added cycle note: `todo/cycles/2026-03-28-cycle-010.md`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: `nx format:write` completed; `nx affected` reported `No tasks were run`.

- File updates (consumer vertical slice):
  - BFF endpoint + tests:
    - `apps/store-consumer-bff/src/app/app.controller.ts`
    - `apps/store-consumer-bff/src/app/app.service.ts`
    - `apps/store-consumer-bff/src/app/app.controller.spec.ts`
    - `apps/store-consumer-bff/src/app/app.service.spec.ts`
    - `apps/store-consumer-bff-e2e/src/store-consumer-bff/store-consumer-bff.spec.ts`
  - Web flow + tests:
    - `apps/store-consumer-web/src/app/app.tsx`
    - `apps/store-consumer-web/src/app/app.spec.tsx`
    - `apps/store-consumer-web-e2e/src/example.spec.ts`
  - Workflow update:
    - `package.json` (`npm run format` now runs `nx format:write` + `nx run-many -t lint --fix --tui=false`).

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: passed; `npm run format` executed Prettier + lint fix for all projects, and affected targets passed for consumer projects.

- Command: `npx nx run @rocky-sales/store-consumer-bff-e2e:e2e -- --runTestsByPath src/store-consumer-bff/store-consumer-bff.spec.ts`
  - Result: pass.

- Command: `npx nx run @rocky-sales/store-consumer-web-e2e:e2e -- src/example.spec.ts --tui=false`
  - Result: failed.
  - Failed target: `@rocky-sales/store-consumer-web-e2e:e2e`
  - Error: Playwright CLI does not accept `--tui=false` forwarded through Nx args.

- Command: `npx nx run @rocky-sales/store-consumer-web-e2e:e2e -- src/example.spec.ts`
  - Result: pass (3/3 browsers).
  - Note: Nx chain prints non-failing `vite preview` shutdown warning after Playwright exits.

- File updates:
  - Updated todo memory docs (`project-state`, `backlog`, `next-steps`, `handoff/current-context`) after consumer slice implementation.
  - Added cycle note: `todo/cycles/2026-03-28-cycle-011.md`.
