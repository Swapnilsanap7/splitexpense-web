# SplitExpense (Frontend)

This repository contains the frontend for SplitExpense an expense-splitting web application built with Next.js.

**Important:** This is the frontend-only repository (UI). The backend (API, database, and server-side components) and any backend-driven UI integration will be implemented later and tracked separately.

## Current status
- Frontend (UI) implemented with Next.js (App Router) and React.
- No backend API or persistent data storage is included in this repository yet.

## Key features (frontend)
- Next.js App Router structure in `src/app`
- Reusable UI components in `src/app/components`
- Client-side authentication scaffold in `src/context/AuthContext.js`
- Firebase client helper in `lib/firebase.js` (placeholder for future integration)

## Tech stack
- Frontend: Next.js, React
- Styling: TailwindCSS
- Optional: Firebase client SDK

## Project structure (high level)
- `src/app/` — Next.js app directory (pages, layout, global styles)
	- `src/app/page.js` — main landing page
	- `src/app/layout.js` — top-level layout
	- `src/app/components/` — UI components (Navbar, Hero, Footer, etc.)
- `src/context/AuthContext.js` — frontend auth context
- `lib/firebase.js` — firebase initialization (client-side helper)
- `public/` — static assets

## Development (run locally)
From the project root run:

```powershell
cd "D:\Project\WebAppProjects\splitexpense"
npm install
npm run dev
```

Open http://localhost:3000 in your browser. If you prefer `yarn` or `pnpm`, substitute the appropriate install/run commands.

## Build for production

```powershell
npm run build
npm run start
```

## Backend & future work
This repository is intentionally frontend-focused. Planned backend work (to be added later) includes:
- Authentication backend and secure session handling
- Persistent storage for users, expenses, and groups
- Server-side validation and business logic

Frontend components are designed to call API endpoints (for example `/api/expenses`) once the backend is available.


## Deployment
- Deploy the frontend to Vercel or Netlify. Vercel supports the Next.js App Router out-of-the-box.

