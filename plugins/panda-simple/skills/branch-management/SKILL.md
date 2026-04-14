---
name: branch-management
description: Create a feature branch safely — verify repo state before branching
---

# Branch Management

Before creating a branch, verify the local repo is ready.

## Pre-flight checks

Run all three checks before creating the branch:

1. `git branch --show-current` — must be on `main` (or the repo's default branch)
2. `git status` — working tree must be clean (no uncommitted changes)
3. `git fetch origin && git status -sb` — local branch must not be behind origin

**If any check fails** → stop and report in Czech what is wrong. Do not create the branch until all checks pass.

## Branch naming

```
feature/issue-{NUMBER}-{short-description}
```

Examples:
- `feature/issue-42-add-user-auth`
- `feature/issue-7-fix-login-redirect`

Keep the short description lowercase, hyphen-separated, max 5 words.

## After creating the branch

- Confirm the branch was created: `git branch --show-current`
- All subsequent commits go on this branch
- Do not switch branches during implementation
