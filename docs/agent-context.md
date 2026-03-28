# Agent Context Brief

This file is the fast context anchor for every Rocky Sales agent and subagent.

## Mandatory Context Load

Before planning or implementation, read in this order:

1. `docs/project-goal.md`
2. `docs/architecture.md`
3. `AGENTS.md`
4. Required `todo/agent-memory/` startup files defined by your profile

`docs/`, `todo/board/`, and `todo/agent-memory/` have different responsibilities:

- `docs/`: stable project intent (goal, architecture, domain direction).
- `todo/board/`: project board state and card workflow.
- `todo/agent-memory/`: per-iteration operational memory, run history, and handoff state.

## What Every Agent Must Internalize

- Rocky Sales is a dual-surface platform:
  - Consumer storefront (`store-consumer-*`)
  - Admin operations (`admin-*`)
- Work should progress in vertical slices: API + UI + tests.
- Preserve Nx boundaries and strict typing.
- Prefer Nx commands for validation and execution.
- Keep changes scoped; avoid unrelated refactors.

## Current Product Baseline

- Consumer first slice is implemented and tested.
- Admin first slice is the next major delivery target.
- Shared contract strategy between web and BFF is an active design decision.

## Decision Hygiene

- Stable operating rules live in `AGENTS.md`.
- Iteration memory and handoff state live in `todo/agent-memory/`.
- Every implementation iteration must update `todo/agent-memory/` memory files.
- Update `docs/` on any iteration where goal/architecture/domain direction changes, then sync agent instructions if needed.

## Reference Context

Historical planning artifacts describe a broader target architecture:

- multi-store POS domain with 17 core models,
- phased API implementation roadmap,
- extensive RBAC + permission strategy,
- prioritized testing roadmap.

Use this as product direction context, while keeping implementation claims in sync with current branch reality.

Current branch truth: Rocky Sales is now an Nx monorepo with frontend + backend app families. Do not treat legacy API-only plans as current implementation status.
