# Rocky Sales Agent Guide

This guide is for coding agents operating in this repository.
Use it as the default playbook for commands, style, and test execution.

## Repository Overview

- Monorepo: Nx (v22)
- Package manager: npm workspaces
- Languages: TypeScript, TSX
- Frontend stack: React 19 + Vite + Vitest + Playwright
- Backend stack: NestJS + Webpack + Jest

Project families:

- Consumer: `store-consumer-web`, `store-consumer-web-e2e`, `store-consumer-bff`, `store-consumer-bff-e2e`
- Admin: `admin-web`, `admin-web-e2e`, `admin-bff`, `admin-bff-e2e`

## Core Rules for Agents

- Prefer Nx commands (`npx nx ...`) over calling tool CLIs directly.
- Use `nx run <project>:<target>` for focused work.
- Use `nx run-many -t <target>` for workspace-wide checks.
- Use `nx affected -t <target>` for branch-safe, minimal CI-style runs.

## Progress Tracking (Required)

- This repo uses an in-code progress tracking system in the `todo/` folder for feature tracking.
- ALWAYS read the `todo/` folder before starting a prompt iteration.
- At the end of every implementation iteration, update the relevant files in `todo/` with current status, completed work, and next steps.
- ALWAYS keep this progress updated between prompts so the next agent/user interaction has accurate context.

## Repository-Local Agent Profiles

This repo ships local, git-tracked agent profiles under `.agents/skills/`:

- `rocky-sales-planner`: planning/scoping/sequence work
- `rocky-sales-builder`: implementation/verification/handoff updates

Mandatory startup anchor for both profiles:

1. `todo/README.md`
2. `todo/handoff/current-context.md`
3. `todo/next-steps.md`

Prompting shortcut:

- `Read todo/README.md and todo/handoff/current-context.md first, then <task>.`

OpenCode primary agents (Tab-switchable) are defined under `.opencode/agents/`:

- `rocky-sales-planner` -> `.opencode/agents/rocky-sales-planner.md`
- `rocky-sales-builder` -> `.opencode/agents/rocky-sales-builder.md`

Permission intent:

- `rocky-sales-planner`: planning-first with guarded context commands (`edit: deny`, `bash: ask` with allowlist for `git status/log/diff` and `npx nx show`)
- `rocky-sales-builder`: implementation agent with command/edit permissions

## Build, Lint, Test, Typecheck Commands

Root scripts:

- `npm run dev` -> `nx run-many -t serve`
- `npm run build` -> `nx run-many -t build --tui=false`
- `npm run lint` -> `nx run-many -t lint --tui=false`
- `npm run test` -> `nx run-many -t test --tui=false`
- `npm run typecheck` -> `nx run-many -t typecheck --tui=false`
- `npm run e2e` -> `nx run-many -t e2e`

Direct Nx commands:

- Build all: `npx nx run-many -t build --tui=false`
- Lint all: `npx nx run-many -t lint --tui=false`
- Test all: `npx nx run-many -t test --tui=false`
- Typecheck all: `npx nx run-many -t typecheck --tui=false`
- E2E all: `npx nx run-many -t e2e --tui=false`

Per-project examples (replace project name as needed):

- `npx nx run @rocky-sales/store-consumer-web:dev`
- `npx nx run @rocky-sales/store-consumer-bff:serve`
- `npx nx run @rocky-sales/admin-web:test`
- `npx nx run @rocky-sales/admin-bff-e2e:e2e`

## Running a Single Test (Most Important)

This workspace uses three runners. Use the matching pattern.

### Vitest (React apps)

- Single spec file:
  - `npx nx run @rocky-sales/store-consumer-web:test -- --run src/app/app.spec.tsx`
  - `npx nx run @rocky-sales/admin-web:test -- --run src/app/app.spec.tsx`
- Single test by name:
  - `npx nx run @rocky-sales/store-consumer-web:test -- --run -t "test name"`

### Jest (Nest apps and BFF e2e)

- Single spec file:
  - `npx nx run @rocky-sales/store-consumer-bff:test -- --runTestsByPath src/app/app.controller.spec.ts`
  - `npx nx run @rocky-sales/admin-bff-e2e:e2e -- --runTestsByPath src/admin-bff/admin-bff.spec.ts`
- Single test by name:
  - `npx nx run @rocky-sales/admin-bff:test -- -t "should return \"Hello API\""`

### Playwright (web e2e)

- Single file:
  - `npx nx run @rocky-sales/store-consumer-web-e2e:e2e -- src/example.spec.ts`
- Single test by title grep:
  - `npx nx run @rocky-sales/admin-web-e2e:e2e -- --grep "has title"`

## Code Style Guidelines

### Formatting

- Formatter: Prettier.
- Config currently enforces: `singleQuote: true`.
- Do not hand-format around Prettier output.

### Linting and module boundaries

- ESLint runs per project via Nx `lint` targets.
- `@nx/enforce-module-boundaries` is enabled at root.
- Respect project boundaries; do not introduce cross-project imports that violate tags.

### Type safety

- TypeScript is strict (`strict: true` in `tsconfig.base.json`).
- Keep `noImplicitReturns`, `noUnusedLocals`, and `noImplicitOverride` clean.
- Avoid `any`; prefer explicit interfaces/types and narrow return types.
- Use assertions (`as`) only when unavoidable and safe.

### Imports

- Prefer this order in each file:
  1. external packages
  2. workspace/internal packages
  3. relative imports
- Keep imports deterministic and avoid unused imports.
- Use relative imports inside a project; use package names for cross-project references.

### Naming conventions

- Components/classes/types: `PascalCase`
- Variables/functions/methods: `camelCase`
- Constants/env vars: `UPPER_SNAKE_CASE`
- Test files: `*.spec.ts` and `*.spec.tsx`

### React conventions

- Use function components.
- Follow existing pattern of named export + default export when already present.
- Keep routing with `react-router-dom` (`Routes`, `Route`, `Link`) unless refactoring intentionally.

### NestJS conventions

- Follow Nest module/controller/service layering.
- Use constructor dependency injection.
- Keep `main.ts` bootstrap concise; put only app-wide setup there.

### Error handling

- Never swallow exceptions silently.
- Throw meaningful, typed backend errors where possible.
- In async code, handle expected failures and rethrow unexpected failures.
- Add tests for error/failure paths when behavior changes.

### Testing conventions

- Add or update tests with any behavior change.
- Keep tests near implementation (`src/**/*.spec.*`) unless project structure dictates otherwise.
- Prefer deterministic tests; avoid flaky time-based assertions.

## Agent Quality Checklist

- Run lint/test/typecheck for changed projects before final handoff.
- Report exact failing Nx target(s) if verification fails.
- Keep changes scoped; avoid unrelated refactors.

## Cursor and Copilot Rules

- `.cursorrules`: not found.
- `.cursor/rules/`: not found.
- `.github/copilot-instructions.md`: not found.
- No repository-specific Cursor/Copilot rule files are currently defined.

<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- You have access to the Nx MCP server and its tools, use them to help the user
- When answering questions about the repository, use the `nx_workspace` tool first to gain an understanding of the workspace architecture where applicable.
- When working in individual projects, use the `nx_project_details` mcp tool to analyze and understand the specific project structure and dependencies
- For questions around nx configuration, best practices or if you're unsure, use the `nx_docs` tool to get relevant, up-to-date docs. Always use this instead of assuming things about nx configuration
- If the user needs help with an Nx configuration or project graph error, use the `nx_workspace` tool to get any errors
- For Nx plugin best practices, check `node_modules/@nx/<plugin>/PLUGIN.md`. Not all plugins have this file - proceed without it if unavailable.

<!-- nx configuration end-->
