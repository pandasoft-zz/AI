# panda-ai

Claude Code plugin marketplace — multi-agent development team.

## What it does

```
/panda-ai:analyze "Add email validation"
        │
        ▼
  project-analyst asks questions, prepares issue drafts
  → WAITS for your approval (Czech)
        │
        ▼
/panda-ai:start #42
        │
        ▼
  orchestrator reads issue, creates plan
  → WAITS for your approval (Czech)
        │
        ▼
  creates branch + spawns developers (parallel)
  nodejs-developer / go-developer / frontend-developer / fullstack-developer
        │
        ▼
  test-runner writes & runs tests
  fix loop max 3x → reports to orchestrator
        │
        ▼
  code-reviewer checks code quality
  review loop max 3x → reports to orchestrator
        │
        ▼
  docs-manager updates README, prepares commit + PR
  → WAITS for your approval (Czech)
        │
        ▼
       MERGE
```

**Language:** Agents communicate in **Czech**. Code, comments, commits, and docs in **English A2**.

## Install

```
/plugin marketplace add YOUR_GITHUB_USERNAME/panda-ai
/plugin install panda-ai@panda-ai
```

## Commands

| Command | What it does |
|---|---|
| `/panda-ai:analyze <idea>` | Analyst prepares GitHub issue drafts |
| `/panda-ai:start #42` | Orchestrator executes a GitHub issue |
| `/panda-ai:status` | Status update in Czech |

## Agents

| Agent | Role |
|---|---|
| `project-analyst` | Breaks features into GitHub issues, waits for approval |
| `orchestrator` | Team lead — plans, delegates, 2 approval checkpoints |
| `nodejs-developer` | Node.js, Express, NestJS |
| `go-developer` | Go services and CLIs |
| `frontend-developer` | React, Vue, HTML/CSS/TS |
| `fullstack-developer` | Mixed or universal tasks |
| `test-runner` | Writes tests, fix loop max 3x |
| `code-reviewer` | Reviews code, review loop max 3x |
| `docs-manager` | Updates README, prepares commit + PR |

## Project-specific rules

Add `CLAUDE.md` to your project root:

```markdown
## Project-specific rules
- API prefix: /api/v2
- Database: PostgreSQL, repository pattern
- Auth: JWT, 24h expiry
- UI language: Czech
```

## Enable Agent Teams (true parallelism)

```json
// ~/.claude/settings.json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

## Test locally

```bash
git clone https://github.com/pandasoft-zz/AI
cd AI/
claude --plugin-dir ./plugins/panda-ai
```

## Update

```
/plugin marketplace update panda-ai
```

## Sources

- [Claude Code subagents docs](https://code.claude.com/docs/en/sub-agents)
- [Claude Code plugins docs](https://code.claude.com/docs/en/plugins)
- [Claude Code marketplace docs](https://code.claude.com/docs/en/plugin-marketplaces)
- [Anthropic: Building effective agents](https://www.anthropic.com/research/building-effective-agents)
