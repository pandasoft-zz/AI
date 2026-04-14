---
name: exploration
description: Codebase exploration before implementation — map relevant files, patterns, and dependencies for the task at hand
---

# Codebase Exploration

Before writing any code, explore the codebase to understand what already exists.

## What to do

### 1 — Find relevant files
- Search for files related to the task (by name, imports, keywords)
- Use `Glob` and `Grep` to find patterns
- Look at directory structure to understand project layout

### 2 — Identify existing patterns
- How are similar features implemented in this codebase?
- What naming conventions are used?
- What error handling pattern is standard here?
- What test framework and structure is used?

### 3 — Map dependencies
- Which modules does the relevant code depend on?
- What interfaces or types are involved?
- Are there any shared utilities to reuse?

### 4 — Document findings (internal, before implementing)

Structure your findings:

```
## Průzkum

### Relevantní soubory
- `src/user/user.service.ts` — user business logic

### Existující vzory
- Error handling: try/catch + custom AppError class
- Tests: Jest, files named `*.spec.ts` next to source

### Závislosti
- Depends on: DatabaseService, LoggerService

### Plán implementace
- Follow the pattern in `src/order/order.service.ts`
- Reuse `validateEmail()` from `src/shared/validators.ts`
```

## What you do NOT do
- Do not start implementing before completing exploration
- Do not guess at patterns — read actual code
- Do not introduce new dependencies if existing ones cover the need
