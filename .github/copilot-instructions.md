## AI agent guide for this repository

This repo currently contains AI “chat modes” that define how work should be done; app source hasn’t been scaffolded yet. The key files live in `.github/chatmodes/`:

- `frontend.chatmode.md` — UI delivery (TS/React/Vite by default)
- `backend.chatmode.md` — API/services (contract-first, Node TS by default)
- `database-architect.chatmode.md` — schema/indexing/migrations (Postgres default)
- `debugger.chatmode.md` — triage and fix workflow

What this means for you:

- Prefer explicit assumptions and proceed with safe defaults; ask only on blockers. Keep commands Windows PowerShell-friendly.
- If you introduce code, document assumptions in a short README next to it and provide copy-paste run scripts.
- No secrets in code; use env vars and commit a `.env.example`. Add basic health checks and request IDs if you add a backend.

Architecture and boundaries (derived from chat modes):

- Frontend first for a portfolio site; wire to real APIs later. Cover loading/empty/error states explicitly.
- If an API is added, define an OpenAPI (or GraphQL SDL) contract before handlers. Keep clear module boundaries: controllers → services → repositories.
- Database work follows model → DDL/migrations → indexing plan. Default to UTC timestamps and surrogate PKs; be selective with indexes.

Workflows and expectations:

- There are no build/test configs in the repo yet. When scaffolding, include scripts and verify locally:
  - Frontend (TS/React/Vite): `dev`, `build`, `preview`, `test` (Vitest + Testing Library), and Storybook if relevant.
  - Backend (Node TS + Fastify/Express): `dev` (ts-node/nodemon), `build` (tsc), `test` (Vitest/Jest), OpenAPI generator/validator.
  - Database: migration tool (Prisma/Drizzle/Knex) with `migrate`, `seed`, and a Docker Compose service if needed.
- Add minimal observability: structured logs, correlation/request IDs; avoid logging secrets. Commit small fixtures and example requests.

Repo conventions you should follow:

- Keep mode-specific checklists in mind (security/a11y/perf). Reference the chat mode files above when deciding details.
- Prefer contract-first for services and design-by-contract for components (typed props, clear states, tests/stories).
- If you create structure, propose it explicitly (e.g., `frontend/`, `backend/`) and keep changes small and documented.

Handy mode “slash” cues you can use while working (from the chat modes):

- Frontend: `/scaffold react <Name>`, `/component <Name> --props`, `/styles <system>`, `/storybook`, `/test <unit|visual>`
- Backend: `/openapi`, `/endpoint <METHOD> <path>`, `/auth <jwt|oauth2|session>`, `/db <postgres|mysql|sqlite>`, `/obs`, `/secure`
- Database: `/model`, `/ddl postgres`, `/index`, `/migrate`, `/backup`, `/security`
- Debugging: `/repro`, `/logs`, `/bisect`, `/trace`, `/rollback`, `/postmortem`

Examples anchored to this repo:

- Starting UI: scaffold a TS/React/Vite app under `frontend/` with typed components and tests; include Storybook if helpful.
- Adding an API: create a Node TS service under `backend/`, write OpenAPI first, add `/health` and one feature endpoint, plus a test and logger with request IDs.
- Schema: propose an ER model (Projects, Assets, Tags), generate DDL and forward-only migrations; add seed data for local dev.

Success looks like: small, well-documented increments; contracts and tests included; PowerShell-friendly scripts; and guardrails from the chat modes applied.
