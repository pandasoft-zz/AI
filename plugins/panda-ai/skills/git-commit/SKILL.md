---
name: git-commit
description: Generate a conventional commit message from current git changes and ask the user what to do (show only / commit / commit + push).
---

# Git Commit Skill

Generate a conventional commit message from current git changes, then ask the user what to do.

## Steps

1. Run `git diff HEAD` to see all changes.
   - If output is empty, run `git status` to check for untracked files.
   - If there is truly nothing to commit, tell the user and stop.

2. Run `git branch --show-current` to get the branch name.

3. Extract a GitHub issue number from the branch name if present.
   - Patterns: `feature/123-some-desc` or `fix/123` or `123-desc` → `#123`
   - Any leading numeric segment qualifies: `[0-9]+`

4. Determine the conventional commit type:
   - `feat` — new feature or behavior added
   - `fix` — bug fix
   - `chore` — build, config, deps, refactor, docs, tests (no production behavior change)

5. Detect breaking changes:
   - Removed or renamed public API / exported symbol
   - Changed contract or interface signature
   - Dropped backward compatibility
   - If breaking → append `!` to type (e.g. `feat!`) and add `BREAKING CHANGE:` footer.

6. Compose the commit message:

**With GitHub issue:**
```
type(#123): short imperative description

- factual bullet 1
- factual bullet 2

BREAKING CHANGE: <description>   ← only if breaking
```

**Without GitHub issue:**
```
type: short imperative description

- factual bullet 1
- factual bullet 2

BREAKING CHANGE: <description>   ← only if breaking
```

### Rules
- Subject line: max 72 chars, imperative mood, lowercase
- Body: 2–5 bullets, each factual and concrete (what changed, not why)
- Omit body if subject line fully covers the change (trivial/single-file fix)
- Always include `BREAKING CHANGE` footer when breaking (required by semantic-release)
- Do NOT add `Co-Authored-By` or any attribution trailers

### Versioning impact (semantic-release)
| Type | Version bump |
|------|-------------|
| `feat` | minor (1.**x**.0) |
| `fix` | patch (1.0.**x**) |
| `feat!` / `fix!` / any `BREAKING CHANGE` | major (**x**.0.0) |
| `chore` | no bump |

## User action

Show the proposed commit message, then use the `AskUserQuestion` tool to ask:

```
question: "What do you want to do with this commit?"
header: "Action"
options:
  - label: "Message only"
    description: "Show commit message, do nothing"
  - label: "Commit"
    description: "Run git add -A && git commit"
  - label: "Commit + push"
    description: "Run git add -A && git commit && git push"
```

Then execute the chosen action.
