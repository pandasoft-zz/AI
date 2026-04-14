---
name: testing
description: Write and run tests for implemented code — black-box first, coverage ≥ 80%, fix loop max 3 cycles
---

# Testing

## Step 1 — Read project README first

Before writing any tests, read the project `README.md` (and any `CONTRIBUTING.md`).
Look for:
- How to run tests (custom commands, env vars, setup steps)
- Test framework or tooling the project uses
- Any coverage thresholds or test conventions

Follow those instructions. They override the defaults below.

## Step 2 — Write tests

**Start with what the feature is supposed to do, not what the code looks like.**

### Black-box tests (requirements-first)
Write these first, based on the issue/task description and business rules:
- **Happy path** — normal input, expected output
- **Business rules** — constraints, validations, domain logic
- **Error cases** — bad input, missing data, unauthorized access
- **Edge cases** — boundary values, empty collections, max limits

### White-box tests (code-aware)
After black-box tests are written, read the implementation and look for uncovered paths:
- Branches that only trigger under specific internal conditions
- Error handling inside helper functions

Add targeted tests only **if the path represents real behaviour worth guarding**.

> Never write a test whose only purpose is to satisfy a coverage tool.

Use the test framework already in the project:
- Node.js → Jest or Vitest (check `package.json`)
- Go → standard `testing` package (`go test ./...`)
- Frontend → Jest + Testing Library

## Step 3 — Run tests with coverage

Use the command from the README if provided. Otherwise:

```bash
# Node.js / frontend (Jest)
npx jest --coverage

# Node.js / frontend (Vitest)
npx vitest run --coverage

# Go
go test ./... -coverprofile=coverage.out && go tool cover -func=coverage.out
```

## Step 4 — Coverage goal: ≥ 80% on changed files

For each uncovered line or branch, ask: "Is there a real scenario that exercises this path?"
- If yes → write a test for that scenario
- If no (dead code, unreachable branch, trivial getter) → leave it and note it

## Step 5 — Fix loop (max 3 cycles)

If tests fail:
1. Read the error — is the problem in the **test** or in the **source code**?
2. If problem is in the **test** → fix the test and re-run
3. If problem is in the **source code** → apply the fix, re-run tests
4. After **3 cycles without success** → stop and report to human in Czech

## Test standards

- Each test has one clear assertion
- Tests are independent — no test depends on another
- Clean up after tests (delete temp data, reset state)

## Anti-patterns to avoid

- **Testing mock behavior** — assert on real observable outcomes, not that a mock was called
- **Test-only methods in production classes** — put cleanup in test helpers
- **Incomplete mocks** — mock the complete data structure the real API returns
