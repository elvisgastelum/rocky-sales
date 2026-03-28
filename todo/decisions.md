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
