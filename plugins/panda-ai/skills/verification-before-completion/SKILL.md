---
name: verification-before-completion
description: Use before claiming any work is complete, fixed, or passing — run verification commands and confirm output before making success claims
---

# Verification Before Completion

## The Iron Law

```
NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE
```

If you haven't run the verification command in this message, you cannot claim it passes.

## The Gate Function

BEFORE claiming any status or expressing satisfaction:

1. **IDENTIFY** — What command proves this claim?
2. **RUN** — Execute the full command (fresh, complete — not a previous run)
3. **READ** — Full output, check exit code, count failures
4. **VERIFY** — Does output confirm the claim?
   - If NO: State actual status with evidence
   - If YES: State claim WITH evidence
5. **ONLY THEN** — Make the claim

Skip any step = claiming without proof.

## Common Failures

| Claim | Requires | Not Sufficient |
|-------|----------|----------------|
| Tests pass | Test command output: 0 failures | Previous run, "should pass" |
| Build succeeds | Build command: exit 0 | Linter passing |
| Bug fixed | Test original symptom: passes | Code changed, assumed fixed |
| Coverage ≥ 80% | Coverage report with numbers | Tests passing |
| Requirements met | Line-by-line checklist verified | Tests passing |

## Red Flags — STOP

- Using "should", "probably", "seems to", "looks good"
- About to report success without having run verification in this message
- Trusting a run from earlier in the session
- Partial verification ("linter passed" ≠ tests pass ≠ build passes)
- Expressing satisfaction before verification ("Done!", "Perfect!", "All good!")

## The Bottom Line

Run the command. Read the output. THEN claim the result.
