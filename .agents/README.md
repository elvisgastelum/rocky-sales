# Repository-Local Agents

This repository defines two local agent profiles that are versioned with git:

- `rocky-sales-builder`
- `rocky-sales-planner`

It also defines specialist OpenCode subagents under `.opencode/agents/`:

- `rocky-sales-project-manager`
- `rocky-sales-senior-frontend`
- `rocky-sales-senior-backend`
- `rocky-sales-test-engineer`
- `rocky-sales-e2e-specialist`
- `rocky-sales-qa-analyst`
- `rocky-sales-devops-engineer`
- `rocky-sales-docker-expert`

These profiles are intentionally repo-scoped so behavior stays consistent across machines.

## Location

- `.agents/skills/rocky-sales-builder/SKILL.md`
- `.agents/skills/rocky-sales-planner/SKILL.md`

## Required Startup Anchor

Both profiles must begin by reading:

1. `docs/agent-context.md`
2. `docs/project-goal.md`
3. `docs/architecture.md`
4. `todo/README.md`
5. `todo/agent-memory/handoff/current-context.md`
6. `todo/agent-memory/next-steps.md`

Notes:

- `docs/` provides stable product and architecture context.
- `todo/agent-memory/` remains required for per-iteration operational memory and must be read and updated every implementation loop.

If you are prompting manually, use this pattern:

`Read docs/agent-context.md, docs/project-goal.md, docs/architecture.md, todo/README.md, and todo/agent-memory/handoff/current-context.md first, then <task>.`

## Suggested Routing

- Use `rocky-sales-planner` for strategy, scoping, and sequencing.
- Use `rocky-sales-builder` for implementation, verification, and memory updates.
