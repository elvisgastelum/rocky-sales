# Next Steps

Last updated: 2026-03-28

## Immediate Queue

1. Restart OpenCode and verify planner/builder + all specialist subagents appear and are invokable (`@rocky-sales-*`).
2. Validate planner and builder delegation flow by running one planning handoff and one implementation handoff to specialist workers.
3. Use `rocky-sales-planner` + worker pool to define the first minimal consumer/admin product slices.
4. Select one slice and execute it with `rocky-sales-builder` + specialist workers (web + bff endpoint + tests).
5. Keep before/after chunk validation cadence and todo memory updates on every loop.

## Definition of Done for Current Baseline

- All 8 projects pass `lint`, `test`, and `typecheck`.
- No generated artifact directories are linted.
- Todo memory files are updated after each implementation iteration.

## Baseline Status

- Achieved on 2026-03-28 after e2e ESLint ignore updates and full `run-many` verification.
