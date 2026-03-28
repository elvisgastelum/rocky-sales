# RCS-0027 ci-mainline-confidence-gate

## Code

- `RCS-0027`

## Goal

Add mainline or scheduled confidence gate with `run-many` lint, test, and typecheck.

## Acceptance

- [ ] Workflow exists for push to protected branch or nightly schedule.
- [ ] Runs `npx nx run-many -t lint test typecheck --tui=false`.
- [ ] Failures report exact target names.

## Notes

Use this as broad confidence, not as replacement for PR affected gate.
