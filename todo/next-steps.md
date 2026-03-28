# Next Steps

Last updated: 2026-03-28

## Immediate Queue

1. Fix `store-consumer-web-e2e` lint scope to ignore generated `out-tsc` artifacts.
2. Re-run `npx nx run-many -t lint test typecheck --tui=false` to confirm clean baseline.
3. Use `rocky-sales-planner` to define the first minimal consumer/admin product slices.
4. Execute the selected slice with `rocky-sales-builder` (web + bff endpoint + tests).
5. Replace root `README.md` with repo-specific setup and architecture guidance.

## Definition of Done for Current Baseline

- All 8 projects pass `lint`, `test`, and `typecheck`.
- No generated artifact directories are linted.
- Todo memory files are updated after each implementation iteration.
