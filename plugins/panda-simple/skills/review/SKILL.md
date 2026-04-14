---
name: review
description: Self-review checklist before reporting to human — verify your own implementation for correctness, security, and quality
---

# Self-Review

Before reporting to the human, review your own implementation using this checklist.
You wrote the code — you know where the risky parts are. Be honest.

## Checklist

### Correctness
- [ ] Does the implementation match the issue requirements exactly?
- [ ] Are all acceptance criteria satisfied? (check each one explicitly)
- [ ] Are edge cases handled (empty input, null, 0, very large values)?
- [ ] Is error handling in place at system boundaries (user input, external APIs)?

### Security
- [ ] No SQL injection, command injection, or XSS vectors introduced?
- [ ] No secrets, tokens, or passwords hardcoded or logged?
- [ ] User input is validated before use?
- [ ] No new attack surface introduced without authorization check?

### Code quality
- [ ] No dead code or unused imports left behind?
- [ ] No debug statements, `console.log`, or `fmt.Println` left in?
- [ ] Functions are small and do one thing?
- [ ] No copy-paste duplication that should be extracted?

### Tests
- [ ] Tests cover the happy path?
- [ ] Tests cover the main error cases?
- [ ] Coverage ≥ 80% on changed files?

## How to report

After completing the checklist, report to the human in Czech:

**If all items pass:**
```
## Self-review

✅ Vše v pořádku

- Zkontrolované kategorie: správnost, bezpečnost, kvalita kódu, testy
- Žádné problémy nenalezeny
- Kód je připraven k mergi
```

**If issues found:**
```
## Self-review

⚠️ Nalezeny problémy

- [kategorie] — popis problému
- [kategorie] — popis problému

Opravuji...
```

Fix the issues, re-run tests, then repeat the checklist before reporting again.
Do not report to human until all checklist items pass.
