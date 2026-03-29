# RCS-0033 swr-data-fetching-adoption

## Code

- `RCS-0033`

## Goal

Install SWR and define a safe adoption path for data fetching in web apps.

## Acceptance

- [ ] `swr` is added as a workspace dependency.
- [ ] One web flow uses SWR without changing API contract behavior.
- [ ] Unit tests cover loading, success, and error states with SWR.

## Notes

Start with `store-consumer-web` home flow, then evaluate admin-web parity.
