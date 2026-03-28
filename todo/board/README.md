# Markdown Board

This board tracks work as small markdown cards.

## Columns

- `backlog/`: ideas and unscheduled work.
- `todo/`: ready to start next.
- `doing/`: currently in progress.
- `done/`: completed this cycle.
- `testing/`: implemented, pending verification.
- `archive/`: older done cards grouped by date.

## Card Rules

- Keep each card focused on one small chunk of work.
- Keep each card short (goal, acceptance, notes).
- Move cards by moving files between folders.
- Prefer one card per behavior change.

## File Naming

Use sortable names:

- `RCS-0000-YYYY-MM-DD-short-title.md`
- Example: `RCS-0007-2026-03-28-admin-home-endpoint.md`

## Task Codes

- Every card must have a unique searchable code: `RCS-0000` format.
- Put the code in both filename and file content header.
- Track allocations in `todo/board/task-codes.md`.

## AI Update Loop

1. Create a small card in `todo/`.
2. Move it to `doing/` when implementation starts.
3. Move it to `testing/` when implementation is complete and checks are pending.
4. Move it to `done/` after checks pass.
5. Periodically move older `done/` cards to `archive/`.
