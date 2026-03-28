# Rocky Sales Project Goal

## Product Goal

Rocky Sales is a multi-store Point of Sale and sales operations platform built in a single Nx monorepo, with separate consumer and admin experiences.

Important context: earlier planning artifacts were API-first and pre-monorepo. The current repository is monorepo-first and includes both frontend and backend applications that must evolve together.

The near-term delivery goal is to establish production-ready vertical slices for both surfaces with clear API contracts, deterministic tests, and repeatable Nx validation.

The medium-term product goal is to evolve into a secure, role-driven retail operations system that supports orders, payments, inventory, customer lifecycle, and reporting.

## Who This Platform Serves

- Consumer users who interact with storefront web experiences.
- Admin users who manage internal sales operations through a separate admin surface.

## Product Surfaces in Scope

- Consumer surface:
  - `store-consumer-web`
  - `store-consumer-bff`
  - `store-consumer-web-e2e`
  - `store-consumer-bff-e2e`
- Admin surface:
  - `admin-web`
  - `admin-bff`
  - `admin-web-e2e`
  - `admin-bff-e2e`

## Target Business Domains

Planned business domains from historical initialization planning include:

- Authentication and authorization foundation (JWT + roles + permissions).
- Orders and order items.
- Payments and refunds.
- Products, categories, suppliers, and inventory.
- Stores, employees, and customer management.
- Reporting, tax rates, discounts, and operational analytics.

This is the intended target state; current implementation is still early-stage.

When there is conflict between historical plans and current implementation constraints, current monorepo state and active branch requirements win.

## Security and Access Goal

The intended security model is role-based and permission-based access control (RBAC + fine-grained permissions) with store-scoped authorization:

- role hierarchy for admin/operator personas,
- permission-level endpoint enforcement,
- multi-store access constraints (user can only access assigned store scope unless elevated role).

## Delivery Objectives

- Build in thin vertical slices (endpoint + UI integration + tests).
- Keep all apps green on `lint`, `test`, and `typecheck`.
- Maintain strict boundaries across Nx projects and clean architecture layers.
- Ensure each behavior change includes matching unit/integration/e2e coverage where appropriate.

## Current Baseline (2026-03-28)

- Consumer first vertical slice is implemented:
  - BFF endpoint: `GET /api/consumer/home` returns `{ title, message }`.
  - Web root route fetches and renders loading/success/error states.
  - Consumer unit and e2e tests were updated accordingly.
- Admin apps remain mostly scaffold-level and are next for implementation.

## Program-Level Roadmap Theme

The project roadmap follows phased progression:

1. Authentication foundation and policy enforcement.
2. Critical business modules (orders, payments, access guards).
3. Core domain modules (stores, employees, products, inventory, customers, suppliers, discounts, tax, refunds, reports).
4. Security integration and system wiring.
5. Quality hardening via tests and documentation.

## Near-Term Milestones

1. Implement first admin vertical slice that mirrors the consumer baseline.
2. Decide a shared contract strategy for web/BFF payloads.
3. Keep full workspace validation green via Nx checks.

## Non-Goals Right Now

- Large cross-workspace refactors without user-driven need.
- Premature shared-package extraction before a stable duplicated contract appears.
- Expanding scope beyond the first validated consumer/admin slices.
