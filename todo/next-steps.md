# Next Steps

Last updated: 2026-03-28

## Immediate Queue

1. Restart OpenCode and verify `rocky-sales-planner`/`rocky-sales-builder` appear in Tab cycle and planner only runs allowlisted context commands.
2. Use `rocky-sales-planner` to define the first minimal consumer/admin product slices.
3. Select one slice and execute it with `rocky-sales-builder` (web + bff endpoint + tests).
4. Run focused Nx checks for changed projects during slice implementation.
5. Keep todo memory and cycle notes updated at the end of each implementation loop.

## Definition of Done for Current Baseline

- All 8 projects pass `lint`, `test`, and `typecheck`.
- No generated artifact directories are linted.
- Todo memory files are updated after each implementation iteration.

## Baseline Status

- Achieved on 2026-03-28 after e2e ESLint ignore updates and full `run-many` verification.
