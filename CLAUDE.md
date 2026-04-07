# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **Claude Code plugin marketplace** hosting the `panda-ai` plugin — a multi-agent development team workflow. The repo also serves as the marketplace source for self-hosted plugin distribution.

## Testing locally

```bash
claude --plugin-dir ./plugins/panda-ai
```

## Repo structure

```
.claude-plugin/marketplace.json   ← marketplace index (lists available plugins)
plugins/panda-ai/
  .claude-plugin/plugin.json      ← plugin manifest (name, version, components)
  agents/                         ← subagent definitions (.md with YAML frontmatter)
  commands/                       ← slash command definitions (/panda-ai:analyze, :start, :status)
  skills/                         ← reusable skill definitions loaded by agents
```

## Plugin architecture

Each component is a Markdown file with YAML frontmatter:

- **Agents** (`agents/*.md`) — define `name`, `description`, `model`, `tools`, `maxTurns`, and optionally `skills`. The body is the system prompt.
- **Commands** (`commands/*.md`) — define `description` and optionally `disable-model-invocation: true`. Body is the command logic; `$ARGUMENTS` is the user input.
- **Skills** (`skills/*/SKILL.md`) — reusable prompt fragments injected into agents via `skills:` list in frontmatter.

## Workflow overview

`/panda-ai:analyze <idea>` → `project-analyst` prepares GitHub issues, waits for human approval (Czech).

`/panda-ai:start #N` → `orchestrator` reads issue → spawns `code-explorer` → spawns `code-architect` (waits for approval) → creates branch `feature/issue-{N}-{desc}` → spawns developer agent(s) in parallel → `test-runner` (max 3 fix cycles) → `code-reviewer` (max 3 review cycles) → `docs-manager` → waits for final merge approval.

## Language policy

- **Agent ↔ human communication:** Czech always
- **Code, comments, commits, docs:** English A2 (simple, short names — `getUser`, not `retrieveUserEntityFromPersistenceLayer`)
- **Commit format:** Conventional Commits (`feat`, `fix`, `chore`; append `!` for breaking changes)
- Project-specific `CLAUDE.md` in the target repo can override language rules

## Adding a new agent

1. Create `plugins/panda-ai/agents/<name>.md` with the required frontmatter fields: `name`, `description`, `model`, `tools`, `maxTurns`.
2. Add `- language-policy` under `skills:` if the agent communicates with the human.
3. Reference the agent from `orchestrator.md` if it fits into the main workflow.

## Adding a new command

Create `plugins/panda-ai/commands/<name>.md`. Set `disable-model-invocation: true` if the command should delegate entirely to an agent (avoids double-invocation).

## Publishing / distributing

- The marketplace index is `.claude-plugin/marketplace.json` — update `version` here when releasing.
- Users install via `/plugin marketplace add pandasoft-zz/AI` then `/plugin install panda-ai@panda-ai`.
- Update distributed plugin: `/plugin marketplace update panda-ai`.

## Enabling true parallelism (Agent Teams)

Add to `~/.claude/settings.json`:
```json
{ "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" } }
```
