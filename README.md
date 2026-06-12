# Arshdeep Dubey — Portfolio (mac-portfolio)

This repository contains a single-page portfolio built with React, TypeScript and Vite.

Overview
- Purpose: a stylized Mac/arcade-themed interactive portfolio that presents resume, projects and contact links.
- Frameworks: React + TypeScript, bundled with Vite.
- Target: static hosting (GitHub Pages, Netlify, Vercel, etc.). Note: `vite.config.ts` sets `base: '/Portfolio/'` — change that if you deploy under a different path.

Quick start (development)

1. Install dependencies

```bash
cd mac-portfolio
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Open http://localhost:5173 (Vite prints the exact URL).

Build for production

```bash
npm run build
```

Preview the production build locally

```bash
npm run preview
```

Linting

```bash
npm run lint
```

Project structure (important files)

- `index.html` — root HTML file.
- `src/main.tsx` — app entry; imports global CSS and mounts React app.
- `src/App.tsx` — main UI component containing the portfolio sections and interactive arcade-style controls.
- `src/index.css` — primary styling for the site. This file contains the visual theme, layout, and animations.
 - `src/App.css` — (removed) legacy/unused mac UI styles — deleted during cleanup.
- `public/` — static assets (icons, favicon).
- `vite.config.ts` — vite configuration (note `base` for GitHub Pages deployments).
- `package.json` — scripts and dependency list.

Known observations and suggested cleanups

`src/App.css` was removed in this cleanup because it was not imported anywhere (the app uses `src/index.css` and `@sakun/system.css`).

- `vite.config.ts` currently sets `base: '/Portfolio/'`. If your GitHub repository or deploy path is different, update that value. For GitHub Pages under the repo `username/Portfolio`, this value is correct.

- `eslint.config.js` imports `typescript-eslint` as `tseslint`. The published package name is usually `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`. If linting fails, check installed ESLint plugin packages and update `package.json` and `eslint.config.js` accordingly.

Recommendations

- Remove `node_modules` and `package-lock.json` from the repository if you don't intend to commit them (they are already present locally). Typically `node_modules/` is gitignored and `package-lock.json` is committed for reproducible installs — choose what's appropriate for your workflow.
- Keep `index.css` as the canonical stylesheet. Consolidate any remaining styles into it and remove `App.css`.
- If you plan to publish on GitHub Pages under a different path (or as a user site), update `vite.config.ts` and the deploy steps accordingly.

Deployment notes (GitHub Pages simple flow)

1. Build the app: `npm run build`.
2. Commit the `dist/` (or serve it via GitHub Pages action). A common approach is to use a GitHub Action to build and push the production output to the `gh-pages` branch.

CI/workflows in this repository

- Active workflow (kept): `.github/workflows/deploy.yml` at the repository root. This workflow builds the `mac-portfolio` project and deploys `mac-portfolio/dist` to the `gh-pages` branch. It triggers on pushes to `arsh-portfolio-setup` and `main`.
- Duplicate removed: `mac-portfolio/.github/workflows/deploy.yml` was deleted during cleanup so there is a single canonical deploy pipeline.

Contact

If you'd like me to:
- remove or consolidate unused files (I can remove `src/App.css`),
- adjust the `vite.config.ts` base path for a specific hosting target, or
- add a GitHub Actions workflow to deploy to GitHub Pages — tell me which and I'll make the changes and run quick validations.
