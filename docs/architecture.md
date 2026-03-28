# Rocky Sales Architecture

## Monorepo Foundation

- Tooling: Nx v22 monorepo with npm workspaces.
- Language: TypeScript across frontend and backend.
- Principle: changes should be validated through Nx targets (`affected`, `run`, `run-many`).

This architecture supersedes earlier API-only initialization assumptions. Frontend and backend delivery now happen together in one workspace.

## Application Topology

The workspace currently contains 8 apps split by product surface and test type.

### Consumer Family

- `@rocky-sales/store-consumer-web` (React 19 + Vite + Vitest)
- `@rocky-sales/store-consumer-web-e2e` (Playwright)
- `@rocky-sales/store-consumer-bff` (NestJS + Jest)
- `@rocky-sales/store-consumer-bff-e2e` (Jest e2e)

### Admin Family

- `@rocky-sales/admin-web` (React 19 + Vite + Vitest)
- `@rocky-sales/admin-web-e2e` (Playwright)
- `@rocky-sales/admin-bff` (NestJS + Jest)
- `@rocky-sales/admin-bff-e2e` (Jest e2e)

## Runtime Interaction Model

- Web applications call their matching BFF API endpoints.
- BFF applications expose API contracts consumed by web surfaces.
- Current implemented example:
  - `store-consumer-web` calls `GET /api/consumer/home` from `store-consumer-bff`.

## Security Architecture Target

Planned architecture includes layered authorization:

- Authentication: JWT-based identity for API access.
- Authorization layer 1: role guards (coarse access by persona).
- Authorization layer 2: permission guards (fine-grained operation access).
- Authorization layer 3: store-access guards for multi-store scope enforcement.

This model is derived from historical initialization plans and is not fully implemented yet. Treat it as target architecture, not current-state guarantee.

## Layering and Boundaries

- Frontend: keep presentation, state, and API concerns separated.
- Backend: keep NestJS module/controller/service layers explicit.
- Nx boundaries: avoid cross-project imports that violate tags/rules.
- Type safety: strict TypeScript, no casual `any` usage.

## Domain Model Direction

Target domain entities include:

- Core people and location entities: users, employees, customers, stores.
- Catalog and stock: products, categories, suppliers, inventory.
- Commerce flow: orders, order items, payments, payment methods, refunds.
- Operations and finance: discounts, tax rates, sales reports.

Entity scope and naming should remain aligned with future API modules and tests.

## Testing Strategy

- Unit tests:
  - Vitest for React apps.
  - Jest for NestJS apps.
- End-to-end tests:
  - Playwright for web user journeys.
  - Jest e2e for BFF API behavior.
- Validation cadence:
  - Pre/post implementation chunk: `npm run format && npx nx affected -t lint test typecheck --uncommitted --tui=false`
  - Broad confidence loop: `npx nx run-many -t lint test typecheck --tui=false`

## Contract Strategy (Open Decision)

The project still needs to finalize contract sharing between web and BFF apps:

- Option A: duplicate local types per app family until shape stabilizes.
- Option B: create a shared package in `packages/` for stable contracts.

Current direction: keep scope tight and choose a shared package only when at least one stable repeated contract emerges.

## Delivery Pattern

Implementation should continue in vertical slices:

- define/adjust endpoint contract,
- connect UI flow,
- add/update unit and e2e coverage,
- validate with Nx affected checks,
- sync `todo/agent-memory/` for handoff continuity.
