# RCS-0005 error-envelope-standardization

## Code

- `RCS-0005`

## Goal

Standardize BFF error envelope and web error handling contract for predictable UI behavior.

## Acceptance

- [ ] BFF responses use a typed error envelope shape.
- [ ] Web API layer maps known error categories deterministically.
- [ ] Unit tests cover at least unauthorized, forbidden, validation, and unknown errors.

## Notes

Keep controllers thin and place mapping logic in service or adapter boundaries.
