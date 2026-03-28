# RCS-0012 admin-permission-store-scope-guard

## Code

- `RCS-0012`

## Goal

Extend authorization with permission and store-scope enforcement for admin routes.

## Acceptance

- [ ] Permission guard deny path is tested.
- [ ] Store-scope deny path is tested.
- [ ] Allowed path remains functional for valid permissions and scope.

## Notes

Compose guards in layered order: auth, role, permission, store scope.
