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
  - Added cycle note: `todo/agent-memory/cycles/2026-03-28-cycle-010.md`.

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
  - Added cycle note: `todo/agent-memory/cycles/2026-03-28-cycle-011.md`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pass for currently affected consumer projects (cached where applicable); no failing targets.

- File updates (planner clipboard permission policy):
  - Updated `.opencode/agents/rocky-sales-planner.md` to include explicit ask-gated `pbcopy` and `pbpaste` bash rules.
  - Updated `.agents/skills/rocky-sales-planner/SKILL.md` and `AGENTS.md` to document ask-gated clipboard behavior.
  - Updated todo memory docs (`project-state`, `backlog`, `next-steps`, `handoff/current-context`) to reflect the permission change.

- Research:
  - Used Context7 docs for `/anomalyco/opencode` to confirm custom slash-command format via markdown files in `.opencode/commands/`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pass; `npm run format` completed, `nx affected` reported `No tasks were run`.

- Command: `mkdir -p .opencode/commands`
  - Result: created project-local OpenCode command directory.

- File updates (slash command):
  - Added `.opencode/commands/commit-message.md` to implement `/commit-message` workflow (suggest title + ask to copy to clipboard).
  - Updated todo memory docs (`project-state`, `backlog`, `next-steps`, `handoff/current-context`) to capture the new command.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pass after command + todo updates; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: final pass after run-log sync; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pre-change validation pass; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- File updates (product context + agent startup wiring):
  - Added docs:
    - `docs/agent-context.md`
    - `docs/project-goal.md`
    - `docs/architecture.md`
  - Updated canonical instructions and startup anchors:
    - `AGENTS.md`
    - `.agents/README.md`
    - `.agents/skills/rocky-sales-planner/SKILL.md`
    - `.agents/skills/rocky-sales-builder/SKILL.md`
    - `.opencode/agents/rocky-sales-planner.md`
    - `.opencode/agents/rocky-sales-builder.md`
    - `.opencode/agents/rocky-sales-project-manager.md`
    - `.opencode/agents/rocky-sales-senior-frontend.md`
    - `.opencode/agents/rocky-sales-senior-backend.md`
    - `.opencode/agents/rocky-sales-test-engineer.md`
    - `.opencode/agents/rocky-sales-e2e-specialist.md`
    - `.opencode/agents/rocky-sales-qa-analyst.md`
    - `.opencode/agents/rocky-sales-devops-engineer.md`
    - `.opencode/agents/rocky-sales-docker-expert.md`

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: post-change validation pass; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: final pass after todo memory updates; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pre-chunk pass before reviewing legacy planning context; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- Command: `git ls-tree -r --name-only <legacy-branch> docs todo` plus multiple `git show <legacy-branch>:<path>` reads
  - Result: gathered historical docs/todo planning context (RBAC model, module roadmap, testing priorities) to improve standardized docs.

- File updates (standardized docs refinement):
  - Updated `docs/project-goal.md` with clearer monorepo-first goal, target domains, security/access model, and phased roadmap framing.
  - Updated `docs/architecture.md` with security architecture target, domain model direction, and delivery pattern guidance.
  - Updated `docs/agent-context.md` with docs-vs-todo responsibilities and current-branch truth constraints.
  - Added `docs/testing-strategy.md` and referenced it from `AGENTS.md` for testing-heavy work.
  - Removed branch-specific references from docs per user request.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: post-refinement validation pass; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: final pass after todo + decision updates; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pre-change pass for board request; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- Command: `mkdir -p "todo/board/todo" "todo/board/doing" "todo/board/done" "todo/board/testing" "todo/board/backlog" "todo/board/archive"`
  - Result: created markdown board folder structure.

- File updates (board workflow):
  - Added/updated board guidance and templates:
    - `todo/board/README.md`
    - `todo/board/card-template.md`
    - `todo/board/backlog/README.md`
    - `todo/board/todo/README.md`
    - `todo/board/doing/README.md`
    - `todo/board/testing/README.md`
    - `todo/board/done/README.md`
    - `todo/board/archive/README.md`
  - Synced memory docs for board adoption:
    - `todo/agent-memory/project-state.md`
    - `todo/agent-memory/backlog.md`
    - `todo/agent-memory/next-steps.md`
    - `todo/agent-memory/handoff/current-context.md`
    - `todo/agent-memory/decisions.md`

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pre-change pass for board task-code update; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- File updates (searchable task codes):
  - Updated `todo/board/README.md` and `todo/board/card-template.md` to require `RCS-0000` codes.
  - Added `todo/board/task-codes.md` registry with rules and next-code pointer.
  - Updated `todo/board/todo/README.md` to enforce code usage on new cards.
  - Synced memory docs:
    - `todo/agent-memory/project-state.md`
    - `todo/agent-memory/backlog.md`
    - `todo/agent-memory/next-steps.md`
    - `todo/agent-memory/handoff/current-context.md`
    - `todo/agent-memory/decisions.md`

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: post-change pass for board code convention; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pre-change pass before creating first board task card; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- File updates (first board card):
  - Added `todo/board/todo/RCS-0001-2026-03-28-admin-home-endpoint.md`.
  - Updated `todo/board/task-codes.md` (`RCS-0001` allocated, next code set to `RCS-0002`).
  - Synced memory files:
    - `todo/agent-memory/project-state.md`
    - `todo/agent-memory/backlog.md`
    - `todo/agent-memory/next-steps.md`
    - `todo/agent-memory/handoff/current-context.md`

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: post-change pass after first board card creation; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pre-change pass before startup-anchor restore; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- File updates (startup-anchor restore):
  - Updated planner/builder startup anchor order to explicitly include todo trio:
    - `.opencode/agents/rocky-sales-planner.md`
    - `.opencode/agents/rocky-sales-builder.md`
    - `.agents/skills/rocky-sales-planner/SKILL.md`
    - `.agents/skills/rocky-sales-builder/SKILL.md`
    - `AGENTS.md`
  - Synced memory docs:
    - `todo/agent-memory/project-state.md`
    - `todo/agent-memory/backlog.md`
    - `todo/agent-memory/next-steps.md`
    - `todo/agent-memory/handoff/current-context.md`
    - `todo/agent-memory/decisions.md`

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: post-change pass after startup-anchor restore; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pre-change pass before board expansion; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- File updates (board expansion):
  - Added `todo` cards:
    - `todo/board/todo/RCS-0002-2026-03-28-admin-web-home-flow.md`
    - `todo/board/todo/RCS-0003-2026-03-28-admin-home-e2e.md`
  - Added `backlog` cards:
    - `todo/board/backlog/RCS-0004-2026-03-28-home-contract-strategy.md`
    - `todo/board/backlog/RCS-0005-2026-03-28-error-envelope-standardization.md`
    - `todo/board/backlog/RCS-0006-2026-03-28-consumer-home-boundary-refactor.md`
    - `todo/board/backlog/RCS-0007-2026-03-28-admin-home-boundary-refactor.md`
    - `todo/board/backlog/RCS-0008-2026-03-28-admin-auth-login-bff.md`
    - `todo/board/backlog/RCS-0009-2026-03-28-admin-auth-login-web.md`
    - `todo/board/backlog/RCS-0010-2026-03-28-admin-session-guard.md`
    - `todo/board/backlog/RCS-0011-2026-03-28-admin-role-guard.md`
    - `todo/board/backlog/RCS-0012-2026-03-28-admin-permission-store-scope-guard.md`
    - `todo/board/backlog/RCS-0013-2026-03-28-consumer-auth-parity.md`
    - `todo/board/backlog/RCS-0014-2026-03-28-admin-orders-list.md`
    - `todo/board/backlog/RCS-0015-2026-03-28-admin-order-detail.md`
    - `todo/board/backlog/RCS-0016-2026-03-28-consumer-order-create.md`
    - `todo/board/backlog/RCS-0017-2026-03-28-payment-capture-flow.md`
    - `todo/board/backlog/RCS-0018-2026-03-28-refund-flow-admin.md`
    - `todo/board/backlog/RCS-0019-2026-03-28-catalog-products-list.md`
    - `todo/board/backlog/RCS-0020-2026-03-28-inventory-availability.md`
    - `todo/board/backlog/RCS-0021-2026-03-28-inventory-adjustment-admin.md`
    - `todo/board/backlog/RCS-0022-2026-03-28-customer-lookup-attach.md`
    - `todo/board/backlog/RCS-0023-2026-03-28-customer-profile-update.md`
    - `todo/board/backlog/RCS-0024-2026-03-28-reporting-sales-summary.md`
    - `todo/board/backlog/RCS-0025-2026-03-28-critical-regression-pack.md`
    - `todo/board/backlog/RCS-0026-2026-03-28-ci-pr-quality-gate.md`
    - `todo/board/backlog/RCS-0027-2026-03-28-ci-mainline-confidence-gate.md`
    - `todo/board/backlog/RCS-0028-2026-03-28-nx-remote-cache-and-concurrency.md`
    - `todo/board/backlog/RCS-0029-2026-03-28-root-readme-onboarding.md`
    - `todo/board/backlog/RCS-0030-2026-03-28-root-domain-placeholder-decision.md`
    - `todo/board/backlog/RCS-0031-2026-03-28-shared-contract-package-trigger.md`
    - `todo/board/backlog/RCS-0032-2026-03-28-release-readiness-gate.md`
  - Updated registry and memory docs:
    - `todo/board/task-codes.md`
    - `todo/agent-memory/project-state.md`
    - `todo/agent-memory/backlog.md`
    - `todo/agent-memory/next-steps.md`
    - `todo/agent-memory/handoff/current-context.md`
    - `todo/agent-memory/decisions.md`

- File updates (agent memory path migration):
  - Moved memory docs under `todo/agent-memory/` and preserved board location under `todo/board/`.
  - Moved cycle logs to `todo/agent-memory/cycles/` with no content loss.
  - Updated startup anchors and todo read-order references to `todo/agent-memory/*`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: post-change pass after board expansion; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- Migration: move agent memory files under `todo/agent-memory/`.
  - Result: moved root memory docs and all cycle files to `todo/agent-memory/*`; kept `todo/board/` unchanged.
  - Result: updated all md references from old memory paths to new `todo/agent-memory/*` paths.

- Command: `npm run format`
  - Result: pass; `nx format:write` and `nx run-many -t lint --fix --tui=false` completed successfully (cached lint tasks).

- Command: `npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pass; `No tasks were run` for the current uncommitted scope.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pre-normalization pass; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- File updates (path terminology normalization):
  - Updated docs/instructions to distinguish board and memory paths:
    - `AGENTS.md`
    - `.agents/README.md`
    - `docs/agent-context.md`
    - `docs/architecture.md`
  - Updated active memory docs wording:
    - `todo/agent-memory/next-steps.md`
    - `todo/agent-memory/handoff/current-context.md`
    - `todo/agent-memory/project-state.md`
    - `todo/agent-memory/backlog.md`
    - `todo/agent-memory/decisions.md`
  - Updated board onboarding reference:
    - `todo/board/backlog/RCS-0029-2026-03-28-root-readme-onboarding.md`

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: post-normalization pass; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: final pass after normalization sync updates; `npm run format` succeeded and `nx affected` reported `No tasks were run`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pre-change pass before resolving BFF local port collision.

- File updates (admin scope port defaults):
  - Updated `apps/admin-bff/src/main.ts` default port from `3000` to `4000`.
  - Updated admin BFF e2e support defaults to match admin scope:
    - `apps/admin-bff-e2e/src/support/global-setup.ts`
    - `apps/admin-bff-e2e/src/support/test-setup.ts`
    - `apps/admin-bff-e2e/src/support/global-teardown.ts`

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: post-change pass for `@rocky-sales/admin-bff` and `@rocky-sales/admin-bff-e2e`.

- Command: `npx nx run @rocky-sales/admin-bff-e2e:e2e -- --runTestsByPath src/admin-bff/admin-bff.spec.ts`
  - Result: pass; teardown confirms `Attempting to close port 4000`.

- File updates (memory sync):
  - Updated `todo/agent-memory/project-state.md`, `todo/agent-memory/backlog.md`, `todo/agent-memory/next-steps.md`, and `todo/agent-memory/handoff/current-context.md` for port-fix state.

- Command: `npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pre-change validation pass; `No tasks were run` for current uncommitted scope.

- File updates (consumer web proxy hardening):
  - Updated `apps/store-consumer-web/vite.config.mts` to:
    - read proxy target from `STORE_CONSUMER_BFF_URL` (default `http://localhost:3000`),
    - keep `/api` proxy forwarding,
    - return baseline fallback payload for `/api/consumer/home` when proxy target is unreachable,
    - return structured `502` JSON for other `/api` proxy connection failures.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pass for affected projects (`@rocky-sales/store-consumer-web`, `@rocky-sales/store-consumer-web-e2e`).

- Command: `npx nx run @rocky-sales/store-consumer-bff-e2e:e2e -- --runTestsByPath src/store-consumer-bff/store-consumer-bff.spec.ts`
  - Result: pass; confirms BFF contract remains valid at `GET /api/consumer/home`.

- Command: `npx nx run @rocky-sales/store-consumer-web:serve` + `curl http://localhost:5500/api/consumer/home`
  - Result: returned `200` with fallback JSON while consumer BFF was offline.

- File updates (memory sync):
  - Updated `todo/agent-memory/project-state.md`, `todo/agent-memory/backlog.md`, `todo/agent-memory/next-steps.md`, and `todo/agent-memory/handoff/current-context.md` for proxy-hardening loop.
  - Added cycle note: `todo/agent-memory/cycles/2026-03-28-cycle-018.md`.

- Research:
  - Used Context7 (`https://context7.com/mswjs/msw/llms.txt`) to confirm MSW setup patterns for browser (`setupWorker`) and test/node (`setupServer`) usage.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pre-change validation pass.

- Command: `npm install -D msw && npx msw init apps/store-consumer-web/public --no-save && npx msw init apps/admin-web/public --no-save`
  - Result: installed `msw` dev dependency and generated `mockServiceWorker.js` in both web app public directories.

- File updates (MSW scaffolding):
  - Added consumer web MSW setup files:
    - `apps/store-consumer-web/src/mocks/handlers.ts`
    - `apps/store-consumer-web/src/mocks/browser.ts`
    - `apps/store-consumer-web/src/mocks/server.ts`
    - `apps/store-consumer-web/src/test.setup.ts`
    - `apps/store-consumer-web/src/mocks/msw.smoke.spec.ts`
  - Added admin web MSW setup files:
    - `apps/admin-web/src/mocks/handlers.ts`
    - `apps/admin-web/src/mocks/browser.ts`
    - `apps/admin-web/src/mocks/server.ts`
    - `apps/admin-web/src/test.setup.ts`
    - `apps/admin-web/src/mocks/msw.smoke.spec.ts`
  - Updated both web app entry points to allow opt-in browser worker startup with `VITE_USE_MSW=true`:
    - `apps/store-consumer-web/src/main.tsx`
    - `apps/admin-web/src/main.tsx`
  - Updated both web Vite test configs to load MSW test setup:
    - `apps/store-consumer-web/vite.config.mts`
    - `apps/admin-web/vite.config.mts`
  - Updated consumer web e2e validation to remove Playwright route mocking:
    - `apps/store-consumer-web-e2e/src/example.spec.ts`

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pass for all affected projects; MSW smoke tests passed in both web apps.

- Command: `npx nx run @rocky-sales/store-consumer-web-e2e:e2e -- src/example.spec.ts`
  - Result: pass across chromium/firefox/webkit without route mocking; Vite logs expected proxy connection errors while fallback serves successful response.

- File updates (memory sync):
  - Updated `todo/agent-memory/project-state.md`, `todo/agent-memory/backlog.md`, `todo/agent-memory/next-steps.md`, and `todo/agent-memory/handoff/current-context.md` for MSW + validation loop.
  - Added cycle note: `todo/agent-memory/cycles/2026-03-28-cycle-019.md`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: final post-memory-sync pass; all affected lint/test/typecheck targets succeeded.

- File updates (MSW policy documentation/instruction enforcement):
  - Updated canonical and testing docs:
    - `AGENTS.md`
    - `docs/testing-strategy.md`
  - Updated local OpenCode agents:
    - `.opencode/agents/rocky-sales-builder.md`
    - `.opencode/agents/rocky-sales-planner.md`
  - Updated repo-local skill instructions:
    - `.agents/skills/rocky-sales-builder/SKILL.md`
    - `.agents/skills/rocky-sales-planner/SKILL.md`

- Command: `npm run format`
  - Result: pass; `nx format:write` completed and lint ran for all 8 projects (6 cached, 2 executed).

- Command: `npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pass; lint/test/typecheck succeeded for 8 affected projects (15 of 20 tasks from cache).

- File updates (memory sync for MSW policy loop):
  - Updated `todo/agent-memory/handoff/current-context.md` with mandatory MSW test-only policy.
  - Added cycle note: `todo/agent-memory/cycles/2026-03-28-cycle-020.md`.

- Command: `npm run format`
  - Result: final post-memory-sync format pass; `nx format:write` and lint `--fix` succeeded for all 8 projects.

- Command: `npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: final post-memory-sync affected pass; lint/test/typecheck succeeded for all 8 affected projects.
  - Note: non-failing warnings observed during run (`React Router future flags`, one `MaxListenersExceededWarning` from Node process listeners), no target failures.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: post-context-sync final pass; format succeeded and affected lint/test/typecheck succeeded for all 8 affected projects (fully cached on affected step).

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: pre-implementation validation pass for MSW policy conformance loop (`nx affected` had no tasks before code edits).

- Command: `grep` audit for `msw|mockServiceWorker|VITE_USE_MSW|setupWorker`
  - Result: detected policy-violating runtime/browser-worker usage in web app `main.tsx` files and browser-worker assets.

- File updates (MSW policy implementation):
  - Removed runtime MSW worker startup from:
    - `apps/store-consumer-web/src/main.tsx`
    - `apps/admin-web/src/main.tsx`
  - Removed browser-worker-only files/assets:
    - `apps/store-consumer-web/src/mocks/browser.ts`
    - `apps/admin-web/src/mocks/browser.ts`
    - `apps/store-consumer-web/public/mockServiceWorker.js`
    - `apps/admin-web/public/mockServiceWorker.js`

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: post-change pass for affected web projects (`@rocky-sales/store-consumer-web`, `@rocky-sales/store-consumer-web-e2e`, `@rocky-sales/admin-web`, `@rocky-sales/admin-web-e2e`).

- Command: `grep` audit in `apps/` for `setupWorker|VITE_USE_MSW|mockServiceWorker|msw/browser`
  - Result: no matches; current code now conforms to MSW test-only policy.

- File updates (memory sync):
  - Updated `todo/agent-memory/project-state.md`, `todo/agent-memory/backlog.md`, and `todo/agent-memory/handoff/current-context.md` for policy-implementation loop.
  - Added cycle note: `todo/agent-memory/cycles/2026-03-28-cycle-021.md`.

- Command: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Result: final post-memory-sync pass for policy-implementation loop; affected web targets succeeded with no failures.
