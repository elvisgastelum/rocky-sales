# Next Steps

Last updated: 2026-03-28

## Immediate Queue

1. Execute `RCS-0001` (`todo/board/todo/RCS-0001-2026-03-28-admin-home-endpoint.md`) and move it across board states.
2. Execute `RCS-0002` (`todo/board/todo/RCS-0002-2026-03-28-admin-web-home-flow.md`) after `RCS-0001` is in `testing` or `done`.
3. Execute `RCS-0003` (`todo/board/todo/RCS-0003-2026-03-28-admin-home-e2e.md`) to complete the first admin vertical slice.
4. Promote `RCS-0004` and `RCS-0005` from backlog to todo to lock contract and error envelope strategy before auth expansion.
5. Continue execution in code order (`RCS-0006` -> `RCS-0032`) with one atomic card per commit.
6. For each card, run pre and post checks: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`.
7. At phase boundaries, run broad confidence: `npx nx run-many -t lint test typecheck --tui=false`.
8. Keep `todo/agent-memory/` files and `todo/agent-memory/cycles/` updated at the end of each loop.

## Definition of Done for Current Baseline

- All 8 projects pass `lint`, `test`, and `typecheck`.
- No generated artifact directories are linted.
- Agent memory files under `todo/agent-memory/` are updated after each implementation iteration.

## Baseline Status

- Achieved on 2026-03-28 after e2e ESLint ignore updates and full `run-many` verification.
