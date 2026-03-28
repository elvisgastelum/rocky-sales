# RCS-0010 admin-session-guard

## Code

- `RCS-0010`

## Goal

Implement session-check endpoint and admin web route guard bootstrap behavior.

## Acceptance

- [ ] Session endpoint returns authenticated context or unauthorized status.
- [ ] Web boot flow redirects unauthenticated users.
- [ ] Unit and e2e tests cover both allowed and redirected paths.

## Notes

Guard behavior should be deterministic and easy to test.
