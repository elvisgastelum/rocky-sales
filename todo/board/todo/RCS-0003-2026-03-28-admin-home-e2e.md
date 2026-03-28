# RCS-0003 admin-home-e2e

## Code

- `RCS-0003`

## Goal

Add deterministic admin BFF and admin web e2e coverage for the first admin home vertical slice.

## Acceptance

- [ ] Admin BFF e2e validates `GET /api/admin/home` response status and payload shape.
- [ ] Admin web e2e validates root happy path.
- [ ] Admin web e2e validates root error fallback behavior.

## Notes

Use stable selectors and avoid timing-based flake.
