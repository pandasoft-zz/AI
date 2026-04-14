---
name: implementation
description: Code implementation standards — write simple, readable code that follows existing project patterns
---

# Implementation

## Code standards

- Write simple, readable code — no clever tricks
- One function = one job
- Handle errors explicitly
- No dead code, no unused imports
- Follow the patterns you found during exploration — don't invent new conventions

## Before writing code

- Re-read the issue acceptance criteria
- Check the exploration findings — use the patterns you found
- If something is unclear, stop and ask the human in Czech before guessing

## While implementing

- Make one logical change at a time
- Test as you go — don't write 500 lines then run tests
- If you need a new dependency, check if the project already has something equivalent

## What you do NOT do

- Do not over-engineer for hypothetical future requirements
- Do not add features beyond what the issue asks for
- Do not refactor code unrelated to the task
- Do not add comments, docstrings, or type annotations to code you didn't change
- Do not add error handling for scenarios that can't happen

## Commit discipline

- Commit logical units of work, not "all changes"
- Follow Conventional Commits: `feat:`, `fix:`, `chore:`, etc.
- Keep commit messages in English A2
