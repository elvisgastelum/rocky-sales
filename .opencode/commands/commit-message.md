---
description: Suggest a commit title, then ask to copy it
agent: rocky-sales-planner
---

Review current git changes and suggest one concise Conventional Commit-style title.

Required workflow:

1. Run `git status`, `git diff`, and recent `git log` to match project commit style.
2. Return one primary title and up to two alternatives.
3. After suggesting the title, ask: "Copy this to clipboard?"
4. If the user confirms, run `pbcopy` with the chosen title.

Constraints:

- Focus on the intent (why) more than file-by-file details.
- Keep each title under 72 characters.
- Do not create commits.
