# Next Steps

Last updated: 2026-03-28

## Immediate Queue

1. Manually restart OpenCode UI and verify planner/builder + all specialist subagents appear and are invokable (`@rocky-sales-*`).
2. Start the first admin slice mirroring consumer baseline (`admin-bff` endpoint + `admin-web` root fetch/render flow + tests).
3. Define shared web/BFF contract strategy for home payloads (local type pattern vs `packages/` contract package).
4. Re-run broad validation before next handoff: `npx nx run-many -t lint test typecheck --tui=false`.
5. Keep todo memory and cycle notes updated at each implementation loop.
6. In OpenCode, smoke-test planner clipboard flow (`pbcopy`/`pbpaste`) to confirm commands prompt with ask-gated approval.
7. Smoke-test new `/commit-message` command end-to-end (title suggestion + clipboard confirmation flow).

## Definition of Done for Current Baseline

- All 8 projects pass `lint`, `test`, and `typecheck`.
- No generated artifact directories are linted.
- Todo memory files are updated after each implementation iteration.

## Baseline Status

- Achieved on 2026-03-28 after e2e ESLint ignore updates and full `run-many` verification.
