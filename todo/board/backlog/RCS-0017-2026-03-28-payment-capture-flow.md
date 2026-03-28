# RCS-0017 payment-capture-flow

## Code

- `RCS-0017`

## Goal

Add payment capture vertical slice with explicit success, decline, and retry-safe behavior.

## Acceptance

- [ ] BFF payment endpoint handles success and failure contracts.
- [ ] UI reflects payment state changes and failure messaging.
- [ ] Tests cover success, failure, and idempotent retry behavior.

## Notes

Keep financial state transitions explicit and test-backed.
