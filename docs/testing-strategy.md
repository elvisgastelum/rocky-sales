# Rocky Sales Testing Strategy

## Objective

Build confidence incrementally while the product evolves from scaffold to real vertical slices.

## Priority Model

1. Critical security and auth behavior.
2. Core business/API paths currently in delivery.
3. DTO/entity/decorator correctness.
4. Infrastructure and utility hardening.
5. Future module suites as domains are implemented.

## Current Runner Map

- Web unit: Vitest
- BFF unit and integration: Jest
- Web e2e: Playwright
- BFF e2e: Jest

## MSW Usage Policy (Required)

- Use MSW only to support Vitest/Jest unit or integration tests.
- Do not wire a default runtime browser worker in app code.
- Do not depend on MSW in Playwright e2e flows.

## Default Validation Cadence

- Pre/post chunk: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
- Broad confidence loop: `npx nx run-many -t lint test typecheck --tui=false`

## Coverage Intent (Directional)

- Security/auth guards and policy logic: highest target.
- Active business modules: high target with error-path coverage.
- Supporting utilities/decorators/configuration: moderate-to-high target.

## Implementation Rule

When behavior changes:

- update unit/integration tests in the changed project,
- add or update e2e checks for user-visible or cross-boundary flows,
- keep tests deterministic and avoid timing-based flake patterns.

## Alignment Notes

This strategy is informed by historical planning artifacts and adapted for the current Nx workspace delivery cadence.
