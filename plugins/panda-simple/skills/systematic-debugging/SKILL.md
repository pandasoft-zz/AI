---
name: systematic-debugging
description: Use when encountering any bug, test failure, or unexpected behavior — find root cause before attempting fixes
---

# Systematic Debugging

## The Iron Law

```
NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST
```

Random fixes waste time and create new bugs. If you haven't completed Phase 1, you cannot propose fixes.

## The Four Phases

### Phase 1 — Root Cause Investigation

**BEFORE attempting ANY fix:**

1. **Read error messages carefully** — don't skip past them. Stack traces, line numbers, error codes often contain the exact answer.

2. **Reproduce consistently** — can you trigger it reliably? If not, gather more data. Don't guess.

3. **Check recent changes** — what changed that could cause this? Git diff, new dependencies, config changes.

4. **Trace data flow** — where does the bad value originate? Trace backward up the call stack until you find the source. Fix at the source, not at the symptom.

5. **In multi-component systems** — add diagnostic instrumentation at each boundary before proposing fixes:
   - What data enters each component?
   - What data exits?
   - Which layer is actually failing?

### Phase 2 — Pattern Analysis

1. Find working examples of similar code in the same codebase.
2. Read the reference implementation **completely** — don't skim.
3. List every difference between working and broken — however small.
4. Identify missing dependencies, config, or assumptions.

### Phase 3 — Hypothesis and Testing

1. State one clear hypothesis: "I think X is the root cause because Y."
2. Make the **smallest possible change** to test it — one variable at a time.
3. Verify result before continuing.
4. If wrong: form a NEW hypothesis. Don't stack fixes on top of each other.

### Phase 4 — Implementation

1. Fix the root cause, not the symptom.
2. One change at a time.
3. Verify the fix resolves the original issue and doesn't break other tests.

**If 3+ fixes have failed — stop and report to human:**
- Each fix revealing a new problem in a different place = wrong architecture, not wrong fix.
- Do not attempt a 4th fix. Report in Czech what you tried and what each fix revealed.

## Red Flags — STOP and Return to Phase 1

- "Quick fix for now, investigate later"
- "Just try changing X and see"
- Proposing multiple fixes at once
- "I don't fully understand but this might work"
- Attempting fix #4 after 3 have already failed

## Common Rationalizations

| Excuse | Reality |
|--------|---------|
| "Issue is simple, skip the process" | Simple bugs have root causes too |
| "Emergency, no time" | Systematic is faster than guess-and-check |
| "I see the problem, let me fix it" | Seeing symptoms ≠ understanding root cause |
| "One more fix attempt" after 2 failures | 3+ failures = architectural problem |
