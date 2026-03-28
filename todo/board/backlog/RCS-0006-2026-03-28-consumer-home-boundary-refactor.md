# RCS-0006 consumer-home-boundary-refactor

## Code

- `RCS-0006`

## Goal

Refactor consumer home flow into presentation, state, and API boundaries without changing behavior.

## Acceptance

- [ ] API calls move out of route component into dedicated API/state layer.
- [ ] UI component remains focused on rendering.
- [ ] Existing behavior and tests remain green.

## Notes

No scope expansion; this is architecture hygiene for maintainability.
