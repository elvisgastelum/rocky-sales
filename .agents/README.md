# Repository-Local Agents

This repository defines two local agent profiles that are versioned with git:

- `rocky-sales-builder`
- `rocky-sales-planner`

These profiles are intentionally repo-scoped so behavior stays consistent across machines.

## Location

- `.agents/skills/rocky-sales-builder/SKILL.md`
- `.agents/skills/rocky-sales-planner/SKILL.md`

## Required Startup Anchor

Both profiles must begin by reading:

1. `todo/README.md`
2. `todo/handoff/current-context.md`
3. `todo/next-steps.md`

If you are prompting manually, use this pattern:

`Read todo/README.md and todo/handoff/current-context.md first, then <task>.`

## Suggested Routing

- Use `rocky-sales-planner` for strategy, scoping, and sequencing.
- Use `rocky-sales-builder` for implementation, verification, and memory updates.
