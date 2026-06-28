# AGENTS.md

Orientation guide for AI agents working in this repository.

## What this is

A marketing/portfolio site for **Palmyra-Építő Kft.**, a Budapest-based construction company. Single-page React site with a few sub-routes, **hosted on Netlify** at **https://palmyraepito.com** (`netlify.toml` holds the SPA fallback redirect).

- Stack: React 18 + Vite, MUI 5, styled-components, jotai (state), react-router-dom 6, react-spring, react-ga4.
- Languages: English (`en-US`) and Hungarian (`hu-HU`), toggled via a jotai atom.
- Hosting/deploy: **Netlify** serves the live site at `https://palmyraepito.com` (production builds from `main`; deploy previews on PRs to `main`). We do **not** use GitHub Pages — a legacy `yarn deploy` (gh-pages) script remains in `package.json` but is not the live host.

## Commands

- `yarn start` — Vite dev server on port 3000 (auto-opens browser).
- `yarn build` — production build into `dist/`.
- `yarn preview` — preview built site.
- `yarn deploy` — legacy gh-pages publish (`predeploy` build → `dist/` to gh-pages). Not used; Netlify hosts the live site.

No test or lint script is wired into `package.json` despite eslint/prettier being installed.

## Routes (`src/App.jsx`)

- `/` → `HomePage` — the full one-pager (hero + about + services + projects + contact).
- `/projects/:id` → `ExtendedProjectPage` — detail page per project.
- `/cookie-policy` → `CookiePolicyPage`.
- `*` → `PageNotFoundPage`.

Analytics (GA4, tracking id `G-JKWK78TVMF`) initialize only when the user accepts via the cookie consent modal — see `src/utils/analytics.js` and the `analytics-consent` cookie.

## Directory layout

```
src/
  App.jsx              router + MUI theme + analytics bootstrap
  index.jsx            entry
  consts.js            theme colors + feature flags (frozen object)
  style.js             shared styles
  atoms/               jotai atoms: showMenuAtom, languageAtom, showImageAtom
  components/
    appbar/            top bar (scroll-to-section via refs)
    menu/              mobile/side menu (toggled by showMenuAtom)
    humburger/         hamburger icon button
    footer/
    cookieConsentModal/
    styledTextField.js MUI TextField wrapper used by contact form
  pages/
    homePage/          composes the one-pager, holds section refs
    heroPage/          landing hero
    aboutPage/
    servicesPage/      cards for services (components/serviceCard, serviceInfoCard)
    projectsPage/      project grid (components/projectCard)
      expandedProjectPage/
        projects.js    project list (id, name key, image counts, etc.)
    contactPage/       items/card for contact info entries
    cookiePage/
    pageNotFoundPage/
  res/
    strings/
      strings.js       en-US + hu-HU dictionaries, read via useAtom(languageAtom)
      info.js          email, phone, social links
    images/            logo svgs (project images live in public/assets)
  utils/analytics.js   GA4 + cookie-gated tracking hooks
public/
  assets/              project photos, hero/background images, manifest, robots
netlify.toml           SPA fallback redirect to /
vite.config.ts         base '/', port 3000
```

## Conventions to follow

- **Pages and components** each live in their own folder with a `.jsx` and a `style.js`. Keep that pattern when adding new ones.
- **Styling**: inline style objects exported from `style.js`. Colors come from `Consts.theme` in `src/consts.js` — don't hardcode hex values; add to the theme.
- **i18n**: any user-facing string belongs in `src/res/strings/strings.js` under both `en-US` and `hu-HU`. Read it with `const [lang] = useAtom(languageAtom); Strings[lang].key`. Project metadata uses string *keys* (e.g. `midoName`) resolved against the same dictionary — see `projectsInfo` in strings.
- **Cross-section navigation** uses React refs created in `HomePage` and passed into `CustomAppBar` / `Menu`. New sections should be wired the same way.
- **Global UI state** (menu open, lightbox image, language) goes through jotai atoms in `src/atoms/atoms.js` — don't reach for context or Redux.
- **Routing**: react-router-dom v6 syntax (`Routes`/`Route element=`). The Netlify config rewrites everything to `/` so client-side routing works on refresh.
- **Analytics**: never call `ReactGA` directly from components. Go through `useAnalytics()` so consent gating is honored.
- **Images**: place new project photos in `public/assets/...` and update the corresponding entry in `src/pages/projectsPage/expandedProjectPage/projects.js` (`beforeImageCount` / `afterImageCount` / `progressImages` drive how many files the page tries to load).

## Adding things

- **New project**: append an entry to `projects.js`, add `<id>name` / `<id>Description` / `<id>Type` keys to both locales in `strings.js`, drop images in `public/assets/`.
- **New service**: add card data and a string key per locale; mirror an existing `serviceCard`.
- **New language**: add a third top-level key in `Strings` and update the `locale` toggle wherever `languageAtom` is set.
- **New top-level section** on the home page: create a folder under `src/pages/`, export it from `src/pages/index.js`, instantiate it in `HomePage.jsx` with a ref, and pass that ref into `CustomAppBar` and `Menu`.

## Things not to do

- Don't add tests assuming a runner — none is configured.
- Don't introduce a CSS framework or global stylesheet; the project uses per-component `style.js` modules plus MUI's theme.
- Don't mutate `Consts` — it's frozen.
- Don't bypass the consent modal to fire analytics events.

## Security

See `SECURITY.md` at the repo root for the disclosure policy before touching anything sensitive.
