# Backlog

Last updated: 2026-03-28

## High Priority

- [x] `done` Create repo-local agent profiles `rocky-sales-builder` and `rocky-sales-planner` with mandatory todo startup anchor.
- [x] `done` Add OpenCode Tab-switchable primary agents for planner/builder under `.opencode/agents/`.
- [x] `done` Set `rocky-sales-planner` to planning permissions (`edit: deny`, `bash: ask`) with allowlisted context commands.
- [x] `done` Expand `rocky-sales-planner` allowlist to include validation commands (`npm run format`, `npx nx affected -t lint test typecheck --uncommitted --tui=false`, and `npx nx run-many -t lint test typecheck --tui=false`).
- [x] `done` Fix e2e lint scope by excluding generated `out-tsc` outputs in all e2e projects.
- [x] `done` Add OpenCode specialist subagent worker pool for PM, FE, BE, test, e2e, QA, DevOps, and Docker roles.
- [x] `done` Add worker delegation and clean-architecture/code-smell quality expectations to planner and builder profiles.
- [x] `done` Validate planner and builder delegation flow with specialist workers via smoke-test handoffs.
- [x] `done` Add explicit ask-gated clipboard permissions (`pbcopy`, `pbpaste`) to `rocky-sales-planner` OpenCode profile.
- [x] `done` Add OpenCode slash command `/commit-message` to suggest commit titles and ask for clipboard copy confirmation.
- [x] `done` Create product context docs under `docs/` (`agent-context`, `project-goal`, `architecture`) and wire them into agent startup anchors.
- [x] `done` Add markdown work board under `todo/board/` with columns (`backlog`, `todo`, `doing`, `testing`, `done`, `archive`) and small-card guidance.
- [x] `done` Add searchable task code standard for board cards (`RCS-0000`) with shared registry file.
- [x] `done` Seed first board task card (`RCS-0001`) in `todo/board/todo/`.
- [x] `done` Expand board with full ordered project plan cards (`RCS-0002` through `RCS-0032`) for atomic commit-sized delivery.
- [x] `done` Move persistent memory files to `todo/agent-memory/` and normalize path references across agent/docs instructions.
- [x] `done` Restore planner/builder startup anchors to explicitly read `todo/README.md`, `todo/agent-memory/next-steps.md`, and `todo/agent-memory/handoff/current-context.md`.
- [x] `done` Resolve local BFF default-port collision by keeping consumer on `3000` and moving admin scope defaults to `4000` (including admin-bff-e2e support scripts).
- [x] `done` Replace scaffold routes and copy in `store-consumer-web` with first real user flow.
- [x] `done` Harden consumer web Vite API proxy so `/api/consumer/home` falls back to baseline payload when local consumer BFF is unavailable.
- [x] `done` Add MSW foundations to `store-consumer-web` and `admin-web` (browser/node setup, worker assets, and smoke tests).
- [x] `done` Align current web code to MSW test-only policy by removing app-runtime worker startup and browser worker assets.
- [x] `done` Add BFF Jest MSW smoke tests to prove Node unit-test runtime interception in `store-consumer-bff` and `admin-bff`.
- [ ] `todo` Replace scaffold routes and copy in `admin-web` with first admin flow.
- [ ] `doing` Define first domain modules and API contracts for both BFF services (consumer contract shipped; admin pending).

## Medium Priority

- [ ] `todo` Add shared contract strategy between web and BFF (types or schema package).
- [ ] `todo` Add basic CI profile for affected `lint`, `test`, `typecheck`.
- [x] `done` Mirror before/after chunk validation cadence in `rocky-sales-builder` profile docs.
- [x] `done` Update `npm run format` to run Prettier plus ESLint `--fix` integration.
- [ ] `todo` Populate root `src/customers` and `src/stores` with real domain models or remove placeholders.

## Low Priority

- [x] `done` Convert `CLAUDE.md` into a redirect/pointer file to `AGENTS.md` as the canonical instructions source.
- [ ] `todo` Replace boilerplate root `README.md` with project-specific onboarding and architecture map.
- [ ] `todo` Introduce first reusable internal package under `packages/` when shared logic appears.
