# RCS-0011 admin-role-guard

## Code

- `RCS-0011`

## Goal

Add role-based guard enforcement on at least one admin-protected endpoint and route.

## Acceptance

- [ ] Endpoint returns forbidden status for invalid role.
- [ ] Allowed role receives expected payload.
- [ ] UI handles forbidden state clearly.

## Notes

Keep role checks centralized to avoid duplicated policy logic.
