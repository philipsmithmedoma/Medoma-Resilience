# Medoma Resilient Operations – clickable prototype

A front-end-only, clickable prototype showing how the Medoma platform grows from Hospital-at-Home orchestration into an operational layer for resilient, distributed hospital care: a hospital command center, incident mode with executable playbooks, evacuation planning, structured resource requests and a network of care nodes. Everything is mock data held in memory; nothing is persisted and there is no backend. The brief is in `CLAUDE.md`, `SPEC.md` and `DESIGN.md`; choices the brief did not make are logged in `DECISIONS.md`.

## Run

```
npm install
npm run dev
```

Open the URL Vite prints (by default http://localhost:5173). The app uses hash routes, so any page can be refreshed.

## Check

```
npm run typecheck   # tsc --noEmit
npm test            # vitest, unit tests for src/lib and the mock dataset
npm run build       # production build to dist/
```

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and deploys `dist/` to GitHub Pages with the `actions/deploy-pages` flow. Once Pages is enabled for the repository (Settings → Pages → Source: GitHub Actions) the site is served at `https://<owner>.github.io/<repository-name>/`. The Vite `base` is read from `GITHUB_REPOSITORY` at build time and falls back to `/` locally.

## Demo story

Coming with the final batch.
