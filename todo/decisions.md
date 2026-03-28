# Decisions Log

## 2026-03-28 - Adopt `todo/` as Agent Memory

- Decision: use a structured `todo/` folder as persistent project memory.
- Why: `AGENTS.md` requires progress tracking and iterative updates.
- Impact: every agent iteration must read and update this folder.

## 2026-03-28 - Use Ralph-Style Cycle Notes

- Decision: track substantial loops under `todo/cycles/` with goal/plan/actions/results/next move.
- Why: keeps iterative reasoning and execution history explicit for handoff.
- Impact: improves continuity across human/agent sessions.

## 2026-03-28 - Add Repository-Local Planner/Builder Profiles

- Decision: define git-tracked local agent profiles at `.agents/skills/rocky-sales-planner` and `.agents/skills/rocky-sales-builder`.
- Why: enforce consistent startup anchor and workflow behavior across machines for this repo.
- Impact: planning and implementation loops can be routed deterministically with shared prompts and expectations.

## 2026-03-28 - Add OpenCode Primary Agents for Tab Switching

- Decision: define git-tracked primary agents at `.opencode/agents/rocky-sales-planner.md` and `.opencode/agents/rocky-sales-builder.md`.
- Why: make planner/builder selectable via Tab in OpenCode, not only via skill/tool routing.
- Impact: consistent, discoverable agent switching across machines and sessions.

## 2026-03-28 - Enforce Read-Only Planner Permissions

- Decision: set `rocky-sales-planner` permissions to `edit: deny` and `bash: deny`.
- Why: planner is intended only for strategy and sequencing before implementation.
- Impact: prevents file changes and command execution from planner mode.

## 2026-03-28 - Refine Planner to Guarded Context Commands

- Decision: change `rocky-sales-planner` bash permissions from `deny` to guarded mode: `'*': ask` with allowlisted `git status*`, `git log*`, `git diff*`, and `npx nx show*`.
- Why: enable better planning context without allowing implementation commands by default.
- Impact: planner can self-serve safe repo context while still requiring approval for any non-allowlisted command.

## 2026-03-28 - Make `CLAUDE.md` a Pointer to `AGENTS.md`

- Decision: replace `CLAUDE.md` content with a short redirect to `AGENTS.md`.
- Why: keep one canonical instruction source and avoid drift.
- Impact: agents reading `CLAUDE.md` are directed to the up-to-date `AGENTS.md` playbook.

## 2026-03-28 - Allow Planner Validation Command Chain

- Decision: expand `rocky-sales-planner` allowlist with validation commands: `npm run format`, `npx nx affected -t lint test typecheck --uncommitted --tui=false`, and `npx nx run-many -t lint test typecheck --tui=false`.
- Why: planner loops can now verify repo health between planning chunks without switching agents.
- Impact: planner remains non-editing while supporting consistent pre/post chunk validation discipline.

## 2026-03-28 - Add OpenCode Specialist Subagent Worker Pool

- Decision: add 8 repo-local OpenCode subagents under `.opencode/agents/` for PM, frontend, backend, test, e2e, QA, DevOps, and Docker specialization.
- Why: improve quality and speed by delegating domain-heavy tasks to focused workers with clear charters.
- Impact: planner and builder can orchestrate specialist handoffs with structured outputs and stronger quality checks.

## 2026-03-28 - Require Worker Handoff Quality Guardrails

- Decision: update planner and builder profile instructions to require worker outputs that include assumptions, risks, code-smell/clean-architecture checks, and exact Nx verification commands.
- Why: keep multi-agent orchestration consistent and auditable between iterations.
- Impact: delegated work remains aligned with clean-code standards and repo verification cadence.

## 2026-03-28 - Integrate ESLint Fixes into `npm run format`

- Decision: update root `format` script to run `nx format:write` followed by `nx run-many -t lint --fix --tui=false`.
- Why: ensure formatting flow applies both Prettier formatting and ESLint auto-fix in one command.
- Impact: `npm run format` is now a heavier but complete formatting pipeline used in builder pre/post chunk validation.
