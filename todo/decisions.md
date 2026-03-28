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
