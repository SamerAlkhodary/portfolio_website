# Palmyra-Építő Kft. — Portfolio Website

Marketing site for a Budapest-based general contractor. Single-page React app
with a public projects gallery, services overview, and contact section.

- **Live site:** https://sameralkhodary.github.io/portfolio_website
- **Languages:** Hungarian (`hu-HU`, default) and English (`en-US`)

---

## Tech stack

| Area        | Choice |
|-------------|--------|
| Framework   | React 18 (function components + hooks) |
| Build tool  | Vite 5 |
| UI / styling| MUI (`@mui/material`) + inline `style.js` objects per component |
| Routing     | React Router v6 |
| State       | Jotai atoms (language, menu, lightbox) |
| i18n        | Custom dictionary in `src/res/strings/strings.js` |
| Analytics   | Google Analytics 4 (`react-ga4`) |
| Hosting     | GitHub Pages (manual) + Netlify (PR previews) |

There is **no backend**. Contact actions open the visitor's email/phone app via
`mailto:` / `tel:`.

---

## Running locally

Prerequisites: **Node 18+** (developed on Node 22) and **Yarn** (the repo uses
`yarn.lock`).

```bash
yarn install      # install dependencies
yarn start        # start the dev server on http://localhost:3000
```

The dev server opens the browser automatically and hot-reloads on save.

### Available scripts

| Script         | What it does |
|----------------|--------------|
| `yarn start`   | Dev server (Vite) on port 3000 |
| `yarn build`   | Production build into `dist/` |
| `yarn preview` | Serve the built `dist/` locally |
| `yarn lint`    | ESLint over `src` (`.js`, `.jsx`) |
| `yarn format`  | Prettier-format `src` |
| `yarn deploy`  | Build, then publish `dist/` to the `gh-pages` branch |

> Run `yarn lint && yarn build` before opening a PR — both must pass.

---

## Project structure

```
public/assets/images/        Static images (served from / at runtime)
  projects/<id>/             Per-project images (see "Adding a project")
src/
  App.jsx                    Routes
  consts.js                  Brand theme (colors, font) — pull colors from here
  atoms/                     Jotai atoms (language, menu, lightbox)
  res/strings/
    strings.js               All UI text, keyed by locale  ← every string lives here
    info.js                  Contact details (email, phone, socials)
  components/                Shared components (AppBar, Footer, Menu, ContactActions)
  pages/
    homePage/                Assembles the one-page site (hero → about → services → projects → contact)
    servicesPage/            Services section + cards
    projectsPage/            Home featured grid + project detail page
      expandedProjectPage/
        projects.js          ← project DATA lives here
    projectsListPage/        Dedicated /projects page with category filter
    contactPage/             Contact section (uses shared ContactActions)
```

### Routes

| Path             | Page |
|------------------|------|
| `/`              | Home (all sections on one page) |
| `/projects`      | Full projects grid with category filter |
| `/projects/:id`  | Single project detail page |
| `/cookie-policy` | Cookie policy |

---

## Adding a new project

A project is **data + images + translations** — no component changes needed.

### 1. Add the images

Create a folder named after the project's `id` under
`public/assets/images/projects/<id>/`:

```
public/assets/images/projects/3/
  hero_desktop.webp     (required) wide hero, ~1700px
  hero_mobile.webp      (required) narrower hero, ~1500px
  before/1.webp, 2.webp, …   (optional) "before" photos
  after/1.webp,  2.webp, …   (optional) "after" photos
  progress/1.webp, 2.webp, … (optional) build-progress photos
```

Use **`.webp`** and keep files reasonably small. Images are referenced by number
(`1.webp`, `2.webp`, …) in order.

### 2. Add the data

Append an entry to `src/pages/projectsPage/expandedProjectPage/projects.js`:

```js
{
  id: '3',                    // must match the image folder name
  name: 'villaName',          // i18n key (see step 3)
  description: 'villaDescription', // i18n key
  type: 'villaType',          // i18n key — shown as the "scope"
  category: 'residential',    // 'residential' | 'commercial' | 'renovation'
  featured: true,             // show on the home featured grid?
  year: '2025',
  startDate: '2025',
  duration: '',               // optional, e.g. '3 months' (shown when set)
  location: 'Budapest',
  beforeImageCount: 0,        // number of before/ photos + 1  (see note)
  afterImageCount: 0,         // number of after/ photos
  progressImages: 0,          // number of progress/ photos
}
```

**Image-count note (gotcha):**
- `afterImageCount` and `progressImages` = the exact number of files.
- `beforeImageCount` currently renders `1 … (count − 1)`, so set it to
  **(number of before photos + 1)**. (e.g. 4 before photos → `beforeImageCount: 5`.)
- The **before/after slider** on the detail page only appears when *both*
  `beforeImageCount > 0` and `afterImageCount > 0`; it compares `before/1.webp`
  with `after/1.webp`.

### 3. Add the translations

In `src/res/strings/strings.js`, add the keys you referenced to the
`projectsInfo` block **in both locales** (`en-US` and `hu-HU`):

```js
projectsInfo: {
  …
  villaName: 'Lakeside Villa',
  villaType: 'Family house',
  villaDescription: 'Full build from foundation to handover.', // one-line teaser
},
```

Leave `description` empty (`''`) if you have no copy yet — the teaser simply
won't render.

That's it. The project now appears on `/projects` (and the home grid if
`featured: true`), filterable by its `category`, with a detail page at
`/projects/3`.

---

## Adding a new service

Services are rendered as a fixed list of `<ServiceCard>`s in
`src/pages/servicesPage/servicesPage.jsx`.

### 1. Add the image(s)

Drop the image(s) into `public/assets/images/` (e.g. `roofing_desktop.webp`,
`roofing_mobile.webp`).

### 2. Add a card

Add a `<ServiceCard>` inside the `serviceList` div. Alternate `reverse` to keep
the zig-zag layout. `width`/`height` are the source image's natural pixel
dimensions (used to reserve space and avoid layout shift):

```jsx
<ServiceCard
  width={3000} height={2000}
  img={'/assets/images/roofing_desktop.webp'}
  srcSet={'/assets/images/roofing_mobile.webp 1500w, /assets/images/roofing_desktop.webp 1700w'}
  reverse
  title={translate('roofing')}
  description={translate('roofingDescription')}
/>
```

### 3. Add the translations

In `src/res/strings/strings.js`, add `roofing` and `roofingDescription` (and any
other keys) to **both** the `en-US` and `hu-HU` blocks.

---

## Editing text / translations

All user-facing text lives in `src/res/strings/strings.js`, keyed by locale.
Never hardcode display text in components — add a key to **both** `en-US` and
`hu-HU` and read it with the `useTranslate()` hook:

```jsx
const translate = useTranslate();
translate('services');                 // top-level key
translate('midoName', 'projectsInfo'); // nested under a section
```

The active language is stored in `localStorage` (Jotai `atomWithStorage`), so a
visitor's choice persists across pages. Default is `hu-HU`.

Contact details (email, phone, social links) live in `src/res/strings/info.js`.

---

## Deployment

There is **no automatic production deploy** on push/merge.

### GitHub Pages (the live site)

Published from the `gh-pages` branch, updated manually:

```bash
yarn deploy        # builds, then pushes dist/ to gh-pages
```

### Netlify

Netlify builds a **Deploy Preview only for PRs that target the `main` branch**
(it posts a `netlify/palmyraepito/deploy-preview` check on the PR). PRs that
target a feature branch get no preview. `netlify.toml` holds the SPA redirect
rule.

> Note: `dist/` is committed to the repo because the `gh-pages` deploy publishes
> it. A local `yarn build` will modify `dist/` — discard those changes
> (`git checkout -- dist/`) unless you're actually deploying.

---

## Conventions

- **Colors / fonts:** pull from `src/consts.js` (`Consts.theme`) — don't hardcode
  hex values in components. Accent is `#EEC283` on a `#242424` background.
- **Component layout:** one folder per component (`name/name.jsx` + `style.js`),
  inline style objects (no Tailwind).
- **i18n:** every string in `strings.js`, in both locales.
- **Before committing:** `yarn lint` and `yarn build` must pass.
