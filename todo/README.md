# Agent Memory Protocol

Purpose: this folder is the persistent memory for human + agent iterations in this repo.

## Read Order (Required)

1. `todo/handoff/current-context.md`
2. `todo/next-steps.md`
3. `todo/project-state.md`
4. `todo/backlog.md`
5. `todo/decisions.md`
6. `todo/run-log.md`
7. latest file in `todo/cycles/`

## Update Rules (Required)

- At the start of each iteration, read the files above in order.
- During implementation, append meaningful command/test outcomes to `todo/run-log.md`.
- At the end of each iteration:
  - update `todo/project-state.md` if system state changed,
  - update task statuses in `todo/backlog.md`,
  - rewrite `todo/next-steps.md` with the next actionable queue,
  - update `todo/handoff/current-context.md` for a fast resume.
- When a decision affects architecture, constraints, or workflow, add it to `todo/decisions.md`.
- Create one cycle note per substantial loop in `todo/cycles/` using date + sequence naming.

## Status Vocabulary

- `todo`: not started
- `doing`: in progress
- `blocked`: waiting on dependency/decision
- `done`: completed

## Ralph-Style Cycle Template

Use this structure for each cycle note:

```md
# YYYY-MM-DD Cycle NNN

## Goal

## Plan

## Actions

## Results

## Learnings

## Next Move
```
