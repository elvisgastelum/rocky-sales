# RCS-0026 ci-pr-quality-gate

## Code

- `RCS-0026`

## Goal

Add CI PR quality gate for format check plus affected lint, test, and typecheck.

## Acceptance

- [ ] CI workflow runs non-mutating format check.
- [ ] CI workflow runs `nx affected -t lint test typecheck` with stable base/head.
- [ ] Required status checks are documented for branch protection.

## Notes

Preserve local and CI command parity.
