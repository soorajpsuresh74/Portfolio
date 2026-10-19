# Portfolio

Personal portfolio site for Sooraj P S: a React + Vite single-page site, with its content managed in a Strapi CMS.

- **Site:** `/` (root). React 19 + Vite. Deployed to GitHub Pages.
- **CMS:** `/cms`. Strapi 5. Deployed to Render, backed by Neon Postgres.

The CMS is optional. Without it, the site renders the bundled content in [src/data/portfolio.js](src/data/portfolio.js).

## How content flows

1. On load, the site renders straight away from the last good CMS response cached in `localStorage`. On a first visit it uses the bundled content instead.
2. If `VITE_STRAPI_URL` is set, it fetches fresh content from Strapi in the background and re-renders if anything changed.
3. If Strapi is asleep or down, visitors keep seeing the cached copy. Render's free plan can take about a minute to wake up.

## Prerequisites

- Node.js 20 or later (the CMS supports 20–26)
- npm

## Run it locally

### Option A: VS Code tasks

Open the folder in VS Code, then **Terminal → Run Task**:

1. **Setup: Install all** installs dependencies for the site and the CMS, and creates `.env` files from the examples.
2. **Dev: Start all** (or `Ctrl+Shift+B`) starts Strapi and Vite side by side.

The tasks are defined in [.vscode/tasks.json](.vscode/tasks.json).

### Option B: Terminal

```bash
# 1. Install
npm install
cd cms && npm install && cd ..

# 2. Configure
cp .env.example .env
cp cms/.env.example cms/.env
#    then replace the "tobemodified" values in cms/.env (see below)

# 3. Start the CMS (terminal 1)
cd cms
npm run develop

# 4. Start the site (terminal 2)
npm run dev
```

| What           | URL                                |
| -------------- | ---------------------------------- |
| Site           | http://localhost:5173/Portfolio/   |
| Strapi admin   | http://localhost:1337/admin        |
| Strapi API     | http://localhost:1337/api          |

The first time Strapi starts locally, open the admin URL and create your admin account. Strapi then **seeds the initial content** from [cms/src/seed-data.js](cms/src/seed-data.js), once only. Content you delete later stays deleted.

To run the site without the CMS, leave `VITE_STRAPI_URL` empty in `.env` (or don't create `.env` at all).

## Configuration

### Site: `.env`

| Variable          | Required | Description |
| ----------------- | -------- | ----------- |
| `VITE_STRAPI_URL` | No       | Base URL of Strapi, e.g. `http://localhost:1337`. If empty, the site uses only the bundled content. |

Vite inlines `VITE_*` values into the public JavaScript bundle, so never put secrets here.

### CMS: `cms/.env`

Generate a fresh random value for each secret. This one-liner prints one:

```bash
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"
```

| Variable              | Required | Description |
| --------------------- | -------- | ----------- |
| `HOST`, `PORT`        | No       | Defaults to `0.0.0.0` and `1337`. |
| `APP_KEYS`            | Yes      | Two or more random values, comma-separated. |
| `API_TOKEN_SALT`      | Yes      | Random value. |
| `ADMIN_JWT_SECRET`    | Yes      | Random value. |
| `TRANSFER_TOKEN_SALT` | Yes      | Random value. |
| `JWT_SECRET`          | Yes      | Random value. |
| `ENCRYPTION_KEY`      | Yes      | Random value. |
| `CORS_ORIGINS`        | No       | Comma-separated origins allowed to call the API. Defaults to `http://localhost:5173,http://localhost:4173`. |
| `ADMIN_EMAIL`, `ADMIN_PASSWORD` | Production | Creates the super admin on first start. Required in production; optional locally. The password needs 8+ characters with an uppercase letter, a lowercase letter and a digit. |
| `ADMIN_FIRSTNAME`     | No       | Defaults to `Admin`. |
| `DATABASE_CLIENT`     | No       | `sqlite` (default), `postgres` or `mysql`. |
| `DATABASE_FILENAME`   | No       | SQLite file. Defaults to `.tmp/data.db`. |
| `DATABASE_URL`        | Postgres | Connection string, e.g. `postgresql://user:pass@host/db?sslmode=require`. |
| `DATABASE_SSL`        | No       | `true` for hosted Postgres such as Neon. |
| `DATABASE_POOL_MIN`   | No       | Set to `0` for Neon, so idle computes can suspend. |
| `PUBLIC_URL`          | No       | Public URL of the CMS (for example a custom domain). Render sets `RENDER_EXTERNAL_URL` automatically. |

Locally, the CMS uses SQLite with no extra setup.

## Editing content

Sign in to the Strapi admin and edit these types:

| Content type  | Kind       | Drives |
| ------------- | ---------- | ------ |
| Profile       | Single     | Name, title, links, resume, hero text, About, Focus, Contact headline |
| Capability    | Collection | "What I do" columns (title, dot colour, items) |
| Skill group   | Collection | "Stack" section |
| Project       | Collection | "Projects" section |

Entries must be **published** to appear on the site. Use the `order` field to sort them.

### Security defaults

Every time it starts, the CMS enforces the following (see [cms/src/index.js](cms/src/index.js)):

- The Public role can only read the four portfolio types. Any other permission added in the admin panel is removed at the next restart.
- Public user sign-ups are disabled.
- CORS allows only `GET`, `HEAD` and `OPTIONS` from `CORS_ORIGINS`.

## Deployment

### CMS on Render

[render.yaml](render.yaml) is a Render Blueprint. In Render, choose **New → Blueprint** and point it at this repository. Render generates the secrets automatically. Set these in the dashboard:

- `DATABASE_URL`: your Neon (or other Postgres) connection string
- `CORS_ORIGINS`: your site's origin, e.g. `https://<user>.github.io`
- `ADMIN_EMAIL` and `ADMIN_PASSWORD`: remove `ADMIN_PASSWORD` after your first login

### Site on GitHub Pages

[.github/workflows/deploy.yaml](.github/workflows/deploy.yaml) builds and deploys on every push to `main`.

1. In the repo settings, go to **Pages** and set the source to **GitHub Actions**.
2. Under **Settings → Secrets and variables → Actions → Variables**, add `VITE_STRAPI_URL` with your Render URL, e.g. `https://strapi-cms.onrender.com`.

**Forking under a different repo name?** Update `base` in [vite.config.js](vite.config.js) (currently `/Portfolio/`) and `homepage` in [package.json](package.json) to match.

## Scripts

| Location | Command           | Does |
| -------- | ----------------- | ---- |
| root     | `npm run dev`     | Vite dev server |
| root     | `npm run build`   | Production build to `dist/` |
| root     | `npm run preview` | Serve the production build locally |
| `cms/`   | `npm run develop` | Strapi with auto-reload |
| `cms/`   | `npm run build`   | Build the Strapi admin panel |
| `cms/`   | `npm run start`   | Strapi in production mode |

## Project structure

```
.
├── src/
│   ├── components/     # Page sections (one CSS module each)
│   ├── data/           # Bundled fallback content
│   ├── lib/            # Strapi client + content hook
│   └── index.css       # Design tokens (colours, --maxw, --gutter)
├── cms/
│   ├── config/         # Server, database, CORS/security
│   └── src/
│       ├── api/        # Content types
│       ├── components/ # Shared fields (list item, skill, focus item)
│       ├── seed-data.js
│       └── index.js    # Bootstrap: admin, permissions, seeding
├── render.yaml         # Render Blueprint for the CMS
└── .github/workflows/  # GitHub Pages deploy
```

## License

MIT. See [LICENSE](LICENSE).
