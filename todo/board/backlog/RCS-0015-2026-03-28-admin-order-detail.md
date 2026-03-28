# RCS-0015 admin-order-detail

## Code

- `RCS-0015`

## Goal

Implement admin order detail route and endpoint with deterministic not-found handling.

## Acceptance

- [ ] BFF detail endpoint returns typed order detail payload.
- [ ] Admin route renders order data and not-found fallback state.
- [ ] Unit and e2e tests cover both success and not-found scenarios.

## Notes

Keep URL params and DTO parsing explicit.
