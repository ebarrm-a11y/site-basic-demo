# Site Demo (Full-Stack)

A **container** repository that includes everything used for this web project in one place: **frontend**, **backend**, **shared modules**, **scripts**, **assets/resources**, and **configuration**.

---

## What’s Included

### Frontend (`/client`)
Modern web app built with **Vite + TypeScript** and a component-oriented structure.

**Pages included** (based on the project structure):
- `Home`
- `About`
- `Services`
- `Portfolio`
- `Pricing`
- `Reviews`
- `FAQ`
- `Contact`
- `Legal`
- `Success`
- `Not Found`

**Layout / UI**
- `Navbar`, `Footer`, `Layout`
- Reusable UI library under `client/src/components/ui/` (buttons, cards, modals, tabs, forms, etc.)

### Backend (`/server`)
TypeScript backend ready to serve APIs/services to support the site:
- `server/index.ts`
- `server/routes.ts`
- `server/static.ts`
- `server/storage.ts`
- `server/vite.ts`

### Shared (`/shared`)
Shared code to keep consistency between frontend and backend:
- `shared/schema.ts`

### Tooling / Configuration
- `vite.config.ts` + `vite-plugin-meta-images.ts`
- `tsconfig.json`
- `postcss.config.js`
- `drizzle.config.ts`
- `components.json`

### Resources / Attachments
- `attached_assets/` with files used during development.

---

## Project Structure

```txt
.
├─ client/
│  ├─ index.html
│  ├─ public/
│  └─ src/
│     ├─ pages/
│     ├─ components/
│     │  ├─ home/
│     │  ├─ layout/
│     │  └─ ui/
│     └─ lib/
├─ server/
├─ shared/
├─ script/
├─ attached_assets/
├─ drizzle.config.ts
├─ postcss.config.js
├─ tsconfig.json
├─ vite.config.ts
├─ vite-plugin-meta-images.ts
├─ package.json
└─ package-lock.json
```

---

## Requirements

- **Node.js 18+** (recommended: Node 20 LTS)
- **npm** (bundled with Node)

---

## Installation

From the repository root:

```bash
npm install
```

---

## Development (Local)

> Depending on how scripts are defined in `package.json`, you can run everything from the root or run client/server separately.

### Option A: Run from the root (if a `dev` script exists)
```bash
npm run dev
```

### Option B: Run frontend and backend separately

**Frontend**
```bash
cd client
npm run dev
```

**Backend**
```bash
cd server
npm run dev
```

---

## Build (Production)

### Option A: From the root (if a `build` script exists)
```bash
npm run build
```

### Option B: Frontend only
```bash
cd client
npm run build
```

### Preview (if applicable)
```bash
npm run preview
```

---

## Environment Variables (Recommended)

Create local `.env` files **without committing them**.

Example:

### `server/.env`
```bash
PORT=3001
# DATABASE_URL=...   (if using a database)
```

### `client/.env`
```bash
VITE_API_BASE_URL=http://localhost:3001
```

> Tip: Add a `.env.example` file (with empty values) to document setup without exposing secrets.

---

## Database / Drizzle

This repository includes DB/ORM configuration and schema files:
- `drizzle.config.ts`
- `shared/schema.ts`

If you connect a database, define `DATABASE_URL` (or your chosen env var) and run the Drizzle commands defined in `package.json` (they may vary by setup).

---

## Version Control Notes

This repo should avoid committing generated or local-environment folders such as:
- `node_modules/`
- `dist/`
- `.local/`
- `.DS_Store`
- (optional) `.replit` if the project was developed in Replit

---

## Notes

- This repository is intended to remain a clean “single source of truth”: **frontend + backend + shared + tooling + resources**.
