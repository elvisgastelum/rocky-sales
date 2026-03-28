# RCS-0008 admin-auth-login-bff

## Code

- `RCS-0008`

## Goal

Implement admin BFF login endpoint and service path for authentication bootstrap.

## Acceptance

- [ ] `POST /api/admin/auth/login` endpoint exists with typed request and response DTOs.
- [ ] Success and invalid credential paths are unit tested.
- [ ] BFF e2e validates status and payload contract.

## Notes

Keep auth logic inside dedicated module/service boundaries.
