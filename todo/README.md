# Agent Memory Protocol

Purpose: this folder is the persistent memory for human + agent iterations in this repo.

## Read Order (Required)

1. `todo/agent-memory/handoff/current-context.md`
2. `todo/agent-memory/next-steps.md`
3. `todo/agent-memory/project-state.md`
4. `todo/agent-memory/backlog.md`
5. `todo/agent-memory/decisions.md`
6. `todo/agent-memory/run-log.md`
7. latest file in `todo/agent-memory/cycles/`

## Update Rules (Required)

- At the start of each iteration, read the files above in order.
- During implementation, append meaningful command/test outcomes to `todo/agent-memory/run-log.md`.
- At the end of each iteration:
  - update `todo/agent-memory/project-state.md` if system state changed,
  - update task statuses in `todo/agent-memory/backlog.md`,
  - rewrite `todo/agent-memory/next-steps.md` with the next actionable queue,
  - update `todo/agent-memory/handoff/current-context.md` for a fast resume.
- When a decision affects architecture, constraints, or workflow, add it to `todo/agent-memory/decisions.md`.
- Create one cycle note per substantial loop in `todo/agent-memory/cycles/` using date + sequence naming.

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
