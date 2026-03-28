# Decisions Log

## 2026-03-28 - Adopt `todo/` as Agent Memory

- Decision: use a structured `todo/` folder as persistent project memory.
- Why: `AGENTS.md` requires progress tracking and iterative updates.
- Impact: every agent iteration must read and update this folder.

## 2026-03-28 - Use Ralph-Style Cycle Notes

- Decision: track substantial loops under `todo/agent-memory/cycles/` with goal/plan/actions/results/next move.
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

## 2026-03-28 - Separate Stable Context (`docs/`) from Iteration Memory (`todo/`)

- Decision: add `docs/agent-context.md`, `docs/project-goal.md`, and `docs/architecture.md` as mandatory docs-first startup context for all primary agents and specialist subagents.
- Why: keep project purpose and architecture consistently available across sessions and delegation hops.
- Impact: agents now read stable product context first, then continue to use `todo/` as the required per-iteration memory and handoff system.

## 2026-03-28 - Keep Docs Branch-Agnostic and Monorepo-First

- Decision: keep `docs/` content branch-agnostic and avoid explicit branch references in persistent project context docs.
- Why: docs should remain stable, reusable context regardless of active branch and should reflect current monorepo (frontend + backend) reality.
- Impact: historical plans can inform direction, but docs language stays generic and anchored to current repository architecture.

## 2026-03-28 - Add Markdown Board Workflow Under `todo/board`

- Decision: add board-style markdown tracking with folders `backlog`, `todo`, `doing`, `testing`, `done`, and `archive`.
- Why: keep work tracking granular and AI-friendly with one small card per chunk and simple file moves across states.
- Impact: complements existing `todo/*.md` memory by adding lightweight, card-level operational flow.

## 2026-03-28 - Require Searchable Board Task Codes

- Decision: require each board card to include a unique searchable code using `RCS-0000` format.
- Why: improves traceability across prompts, commits, and run-log references.
- Impact: card filenames and content now include code IDs, and allocations are tracked in `todo/board/task-codes.md`.

## 2026-03-28 - Reinstate Explicit Todo Startup Anchor for Planner/Builder

- Decision: keep planner and builder startup anchors explicitly reading `todo/README.md`, `todo/agent-memory/next-steps.md`, and `todo/agent-memory/handoff/current-context.md`.
- Why: preserves the repo's operational memory discipline and prevents drift between prompts.
- Impact: `.opencode/agents/*`, `.agents/skills/*`, and `AGENTS.md` are aligned on the todo anchor order.

## 2026-03-28 - Seed Full Ordered Delivery Backlog on Markdown Board

- Decision: expand `todo/board/` from one seed card to a full ordered backlog (`RCS-0001` to `RCS-0032`) covering admin parity, contracts, auth/RBAC, core domains, QA, CI/CD, and release readiness.
- Why: convert high-level roadmap into atomic commit-sized work units with explicit acceptance criteria and dependency-friendly sequence.
- Impact: execution can now proceed one card at a time with deterministic board movement and lower risk of scope creep.

## 2026-03-28 - Move Agent Memory Files Under `todo/agent-memory/`

- Decision: move operational memory files and cycle logs under `todo/agent-memory/` while keeping `todo/board/` as the board workspace root.
- Why: separate persistent agent memory from board task tracking and reduce root-level clutter under `todo/`.
- Impact: startup anchors, read-order prompts, and memory update paths now reference `todo/agent-memory/*`.

## 2026-03-28 - Normalize Path Terminology After Memory Split

- Decision: standardize language to explicitly reference `todo/agent-memory/` for agent memory and `todo/board/` for board state.
- Why: avoid ambiguity caused by older generic `todo/` wording after the directory split.
- Impact: docs, agent profiles, and active handoff/next-step instructions now use normalized paths.
