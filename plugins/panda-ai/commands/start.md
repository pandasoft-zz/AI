---
description: Start the full development workflow for a GitHub issue. Usage: /panda-ai:start #42 or /panda-ai:start https://github.com/org/repo/issues/42
disable-model-invocation: true
---

Use the `orchestrator` agent to execute GitHub issue: $ARGUMENTS

The orchestrator will:
1. Read and analyze the issue
2. Create a plan → WAIT for your approval (Czech)
3. Create a branch, spawn specialist developer agents
4. Run test-runner (max 3 fix cycles)
5. Run code-reviewer (max 3 review cycles)
6. Run docs-manager to prepare the PR
7. WAIT for your final approval before merging
