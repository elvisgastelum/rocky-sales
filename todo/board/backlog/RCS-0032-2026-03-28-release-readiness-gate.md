# RCS-0032 release-readiness-gate

## Code

- `RCS-0032`

## Goal

Define and run formal release-readiness gate before first baseline release cut.

## Acceptance

- [ ] Risk-based checklist is documented for critical domains.
- [ ] Full workspace `lint`, `test`, and `typecheck` pass.
- [ ] Smoke e2e for consumer and admin surfaces pass.

## Notes

No release tag is cut until gate criteria are met.
