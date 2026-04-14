---
name: language-policy
description: Language rules for panda-simple. Defines which language to use for communication, code, comments, and documentation.
disable-model-invocation: true
---

# Language Policy — Panda Simple

## Communication with human
- **Always Czech** — every message to the human is in Czech
- When asking for approval, always say clearly: "Čekám na tvoje schválení."
- When hitting a limit or error, say clearly in Czech what happened and what you need

## Source code
- **English A2 level** — simple, clear technical English
- Variable and function names: short verbs + nouns
  - Good: `getUser`, `createOrder`, `isValid`, `UserService`, `ErrNotFound`
  - Bad: `retrieveUserEntityFromPersistenceLayer`
- Comments: simple English sentences
  - Good: `// get user from database`, `// check if token is valid`
  - Bad: no comments, or very complex grammar
- No Czech strings in source code unless the project `CLAUDE.md` explicitly requires it

## Documentation and commits
- README, API docs, CHANGELOG → **English A2**
- Commit messages → **English A2**, Conventional Commits format
- PR title and description → **English A2**

## UI strings (user-facing text in frontend)
- Default: ask the human which language is needed
- If project `CLAUDE.md` specifies the language, follow that

## Project overrides
- Check the project `CLAUDE.md` for a `## Project-specific rules` section
- Any language rules there take priority over this skill
