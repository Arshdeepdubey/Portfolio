# Arshdeep Dubey — Portfolio (mac-portfolio)

A stylized **Mac OS 1984 + Arcade-themed** interactive portfolio built with **React 19.2.6**, **TypeScript**, and **Vite 8.0.12**. Features a single-component architecture with game mechanics (Pac-Man countdown timer, content erasure animation) and a full-featured admin panel for content management.

**Live Portfolio:** https://arshdeepdubey.github.io/Portfolio/

## Overview
- **Purpose:** Interactive portfolio with retro Mac OS aesthetic and arcade game mechanics, featuring resume, projects, learning journal, and admin panel for content management
- **Frameworks:** React 19 + TypeScript 6 + Vite 8 + System.css (Apple 1 theme)
- **Deployment:** GitHub Pages (https://arshdeepdubey.github.io/Portfolio/) via automated CI/CD pipeline
- **Hosting Path:** Note: `vite.config.ts` sets `base: '/Portfolio/'` — change if deploying under a different path

## Features

### Phase 1: Resume Content ✅
- 4 detailed experience roles (Fidelity Software Engineer II, Fidelity Software Engineer, Fidelity Associate SE, Samsung Research Intern)
- 5 technical projects with GitHub repository links
- 4 skill categories: Programming & Scripting, Cloud Infrastructure & DevOps, Frameworks & Integration, IT Operations
- 11 certifications across 3 subsections (Scripting, Cloud & DevOps, Security & AI)
- 2 academic credentials with GPA information

### Phase 2: Learning Journal with Search & Filtering ✅
- 8 pre-loaded technical journal entries across 7 categories
- Real-time search across title, content, and tags
- Category filtering: All, DevOps, Cloud, Security, Integration, Architecture, AI
- Grid layout with date, category badges, content preview, and hashtags
- Newest-first sorting

### Phase 3: Admin Panel with CRUD Operations ✅
- **Admin Authentication:** Simple password-based login (MVP)
- **Create Entries:** Form with date, title, category, content, tags
- **Read Entries:** Display all entries in scrollable management list
- **Update Entries:** Edit any entry inline with form population
- **Delete Entries:** Remove entries with confirmation dialog
- **Admin Button:** Navbar floating button showing lock/unlock status
- **Session Management:** Auth state persists during session, clears on logout

### Game Mechanics
- **Boot Screen:** Arcade-style overlay with arcade-themed styling
- **5-Minute Countdown:** Pac-Man style timer that erases content after time expires
- **Content Erasure:** 4.5-second animated wipe effect when timer reaches zero
- **Menu System:** Apple OS-style dropdown menus (Apple, Navigation, View)
- **Window Chrome:** Period-accurate Mac OS 1984 window controls

## Quick Start (Development)

1. **Install dependencies**

```bash
cd mac-portfolio
npm install
```

2. **Run dev server**

```bash
npm run dev
```
Opens at http://localhost:5173/Portfolio (Vite prints the exact URL)

3. **Build for production**

```bash
npm run build
```

4. **Preview production build locally**

```bash
npm run preview
```

5. **Run linting**

```bash
npm run lint
```

## Local Testing Checklist

### Lint & Build Validation ✅
```bash
# Check code quality
npm run lint    # Should pass with 0 errors

# Build production
npm run build   # Should complete with all modules transformed

# Preview prod build
npm run preview # Vite preview server should start
```

### Phase 1 Testing (Resume Content)
- [ ] Boot portfolio and navigate to each section using the Navigation menu
- [ ] Verify experience section displays 4 timeline cards with correct dates/roles
- [ ] Confirm projects section shows 5 project boxes with GitHub links
- [ ] Check certifications display 11 certs across 3 subsections
- [ ] Verify education section shows IIT Ropar (CGPA 4.7) as primary

### Phase 2 Testing (Learning Journal)
- [ ] Click "Navigation" menu → "7. Learning Journal"
- [ ] Verify 8 sample entries load in grid layout
- [ ] Test search: type "Kubernetes" → should filter to matching entries
- [ ] Test category filters: click "Cloud" → show only cloud-tagged entries
- [ ] Click "All" → restore full list
- [ ] Verify entry cards show: date, title, category badge, content preview, tags

### Phase 3 Testing (Admin Panel)
- [ ] Look for **🔒 ADMIN** button in top navbar (right of system clock)
- [ ] Click admin button → password input appears
- [ ] Enter wrong password → "Incorrect password" alert
- [ ] Enter correct password: **arsh-admin-2026** → admin panel opens
- [ ] Verify admin button changes to **⚙️ ADMIN** with yellow background
- [ ] **Create Entry:**
  - [ ] Fill form: Date (today), Title, Category (select dropdown), Content, Tags
  - [ ] Click "Create Entry" → entry appears at top of management list
  - [ ] Form resets for next entry
- [ ] **Edit Entry:**
  - [ ] Click "Edit" on any entry → form populates with entry data
  - [ ] Button changes to "Update Entry"
  - [ ] Modify content and click "Update Entry" → entry updates in list
  - [ ] Yellow highlight shows selected entry
- [ ] **Delete Entry:**
  - [ ] Click "Delete" → confirmation dialog appears
  - [ ] Confirm deletion → entry removed from list immediately
- [ ] **Logout:**
  - [ ] Click "Logout" button → auth cleared, panel closes
  - [ ] Admin button reverts to 🔒 ADMIN

### Game Mechanics Testing
- [ ] Click boot button "INSERT COIN" → portfolio unlocks
- [ ] Verify system clock updates in top-right (HH:MM:SS format)
- [ ] Verify 5-minute countdown timer displays in yellow widget
- [ ] Navigate between sections using menu → timer continues counting down
- [ ] When timer reaches 0:00 → content begins erasure animation
- [ ] Watch 4.5s wipe effect → content fades to black
- [ ] System auto-boots back to boot screen after erasure
- [ ] Click reset button (⊗) in window header → portfolio resets

### Responsive Design
- [ ] Test on desktop (1920x1080)
- [ ] Test on tablet (768px width)
- [ ] Test on mobile (375px width)
- [ ] Verify dropdown menus close on outside click
- [ ] Confirm window chrome stays sticky at top

## Remote Testing (GitHub CI/CD)

The repository includes an automated CI/CD pipeline that runs on every push to `arsh-portfolio-setup` or `main` branches.

### Pipeline Steps (Automated)
1. **Checkout** source code from repository
2. **Setup Node.js** (v20 with npm cache)
3. **Install** dependencies via npm ci
4. **Lint** code using ESLint (quality check)
5. **Build** production static site via Vite
6. **Deploy** dist folder to gh-pages branch
7. **Live Site Updates** at https://arshdeepdubey.github.io/Portfolio/

### Check CI/CD Status
- Go to: https://github.com/Arshdeepdubey/Portfolio/actions
- View workflow runs for each branch push
- Green checkmark ✅ = all steps passed
- Red ✗ = build/lint failure (check logs)

### Deployment Verification
1. Push to `arsh-portfolio-setup` branch
2. Wait for GitHub Actions workflow to complete (~2 min)
3. Visit https://arshdeepdubey.github.io/Portfolio/
4. Hard refresh (Cmd+Shift+R) to clear cache
5. Verify latest changes are live

## Project Structure

```
mac-portfolio/
├── index.html                 # Root HTML entry point
├── package.json              # Dependencies & build scripts
├── package-lock.json         # Locked dependency versions
├── tsconfig.json             # TypeScript configuration (strict mode)
├── eslint.config.js          # ESLint rules for code quality
├── vite.config.ts            # Vite build config (base: '/Portfolio/')
├── src/
│   ├── main.tsx              # React app mount point (imports global CSS)
│   ├── App.tsx               # Main component (~1050 lines, all portfolio logic)
│   │   ├── State: 17 useState variables
│   │   ├── Game: Boot screen, 5-min timer, content erasure
│   │   ├── Navigation: 8 sections (Home, About, Experience, Projects, Education, Certifications, Journal, Contact)
│   │   ├── Admin Panel: Auth, CRUD for entries, entry management
│   │   └── Menus: Apple, Navigation, View dropdown menus
│   └── index.css             # Global styles, animations, Apple 1 theme
├── public/                   # Static assets (favicon, etc.)
└── dist/                     # Production build output (created by npm run build)
```

### Key Files Explained

- **src/App.tsx** — Single-component architecture containing:
  - JournalEntry interface for type safety
  - 17 state variables (game, UI, journal, admin)
  - 7 CRUD functions (auth, add, update, edit, delete, cancel, logout)
  - 8 navigation sections with game mechanics
  - Admin panel modal with authentication gate
  - useEffect hooks for clock sync, countdown timer, menu dismissal

- **src/index.css** — 300+ lines of styling:
  - Apple 1 theme: monospace fonts, black/white/yellow (#fffb15) colors
  - Desktop environment chrome (window header, control boxes)
  - Dropdown menu animations
  - Arcade boot overlay (4px double border, neon effects)
  - Timeline cards, project boxes, badge tags
  - Content erasure animation (4.5s wipe keyframe)
  - Admin panel modal styling

- **vite.config.ts** — Vite build configuration:
  - React plugin enabled
  - Base path: `/Portfolio/` (for GitHub Pages)
  - Output: dist/ folder with optimized assets

- **.github/workflows/deploy.yml** — CI/CD pipeline:
  - Triggers on push to arsh-portfolio-setup or main
  - Runs: lint → build → deploy to gh-pages
  - Deploys dist/ to https://arshdeepdubey.github.io/Portfolio/

## Dependencies

### Production Dependencies
- **react** ^19.2.6 — React with concurrent features
- **react-dom** ^19.2.6 — React DOM rendering
- **@sakun/system.css** ^0.1.11 — Apple 1 UI theme (monospace, retro styling)
- **@octokit/rest** ^21.x.x — GitHub API (for future persistence features)

### Development Dependencies
- **typescript** ~6.0.2 — TypeScript compiler (strict mode)
- **vite** ^8.0.12 — Build tool and dev server
- **@vitejs/plugin-react** — React support for Vite
- **eslint** ^10.x.x — Code quality linting
- **@typescript-eslint/parser** — ESLint TypeScript support

## Configuration Details

### TypeScript (`tsconfig.json`)
- **Strict Mode:** All strict checks enabled
- **Target:** ES2020
- **Module:** ESNext
- **JSX:** react-jsx

### ESLint (`eslint.config.js`)
- **Parser:** @typescript-eslint/parser
- **Support:** .ts, .tsx, .js files
- **Minimal Rules:** Intentionally lean to avoid resolution conflicts
- **To Expand:** Add more rules to eslint.config.js as needed

### Vite (`vite.config.ts`)
- **Base Path:** `/Portfolio/` (GitHub Pages repo path)
- **Build Output:** dist/ with .js, .css, .woff assets
- **Dev Server:** http://localhost:5173/Portfolio
- **React Plugin:** Fast Refresh enabled for HMR

## Known Notes

- **Single-Component Architecture:** All UI logic lives in `src/App.tsx` (~1050 lines). Optimized for moderate complexity; consider splitting if exceeding 1500+ lines.
- **State Management:** React hooks only (useState, useEffect). No Redux/Zustand — suitable for current feature scope.
- **Admin Authentication:** MVP password-based login. Future: GitHub OAuth 2.0 via @octokit/rest.
- **Entry Persistence:** Currently in-memory state. Future: GitHub API or localStorage for persistence.
- **Styling:** Single `index.css` file + System.css theme. No CSS-in-JS or CSS modules — inline styles for admin panel only.
- **Browser Support:** Modern browsers (Chrome, Safari, Firefox) with ES2020+ support.

## Troubleshooting

### Issue: `npm run build` fails with "Cannot find module"
**Solution:** Delete `node_modules/` and `package-lock.json`, then run `npm install`

### Issue: ESLint errors on `npm run lint`
**Solution:** Check that `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` are installed

### Issue: Dev server shows blank page
**Solution:** Hard refresh (Cmd+Shift+R on macOS) to clear cache

### Issue: Admin panel won't appear
**Solution:** Check browser console for errors; verify button click handler works with developer tools

### Issue: Changes not live on GitHub Pages
**Solution:**
1. Verify push to `arsh-portfolio-setup` or `main` branch
2. Check GitHub Actions workflow status: https://github.com/Arshdeepdubey/Portfolio/actions
3. Hard refresh deployed site (Cmd+Shift+R)
4. Clear browser cache if needed

## Git Workflow

### Feature Branches (Phase-Based)
- **phase/1-resume-update** — Phase 1 implementation ✅
- **phase/2-learning-journal** — Phase 2 implementation ✅
- **phase/3-github-oauth-admin** — Phase 3 implementation ✅
- **arsh-portfolio-setup** — Main development branch (default)
- **gh-pages** — Production build (auto-deployed by CI/CD)

### Deployment Flow
```
Feature Branch → GitHub Push → CI/CD Pipeline → Tests & Build → Deploy to gh-pages → Live at GitHub Pages
```

## Future Enhancements

1. **GitHub API Persistence** — Save entries to GitHub repo files via @octokit/rest
2. **GitHub OAuth 2.0** — Upgrade from password to real GitHub authentication
3. **localStorage Sync** — Automatic backup to browser storage
4. **Rich Text Editor** — Markdown or WYSIWYG for content editing
5. **Entry Drafts & Scheduling** — Publish entries on specific dates
6. **Bulk Operations** — Import/export entries, batch edit/delete
7. **Analytics** — Track entry views and engagement
8. **Multi-User Support** — Multiple admin accounts

## Performance Notes

- **Production Build Size:** ~150KB (gzipped)
- **Dev Server Startup:** <1s with Vite
- **Page Load:** <500ms on fast connections
- **Countdown Timer:** Accurate to 1-second intervals
- **Search Performance:** Real-time filtering on 8+ entries without lag
- **Admin Panel:** Modal opens instantly, no perceived delay

---

**Last Updated:** August 20, 2026  
**Phases Completed:** 3/3 ✅  
**Live Deployment:** https://arshdeepdubey.github.io/Portfolio/ 

