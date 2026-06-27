---
name: add-project
description: "Adds a new project to the Palmyra-Építő portfolio site end to end — takes a folder of raw JPG/PNG photos, converts and resizes them to the site's webp image set, drafts the bilingual (hu-HU + en-US) copy, writes the project into projects.js and strings.js, and verifies with the content validator. Activates on requests like 'add a new project', 'add this project to the site', 'I have photos for a new project', 'create a project from these images', or any request to publish a new portfolio project."
version: 0.1.0
---

# add-project

Add one new project to the site, end to end: **images → copy → data → verify.**
Everything a project needs comes from one entry in `projects.js`, a folder of
webp images under `public/assets/images/projects/<id>/`, and caption strings in
both locales in `strings.js`. The human reference for this is
`docs/ADDING_A_PROJECT.md`; this skill automates it. The safety net is
`yarn validate`, which must pass at the end.

Work through the steps in order. Do not skip the confirmation step — the
image-to-area mapping needs human judgement, and the copy must be approved.

## Step 1 — Pick the project id

Read `src/pages/projectsPage/expandedProjectPage/projects.js`. The `id` is a
string; use the next free integer (current projects are `'1'` and `'2'` → next
is `'3'`). This id is also the image folder name.

## Step 2 — Look at the photos and propose a plan

Ask the user where the raw photos are (a folder of JPG/PNG). **View each photo**
(Read the image files) and propose, for the user to confirm:

- **Hero** — the single strongest finished shot (fills the page-top, full-bleed).
- **Which model fits the rest:**
  - **Before/after areas** — when there are matched pairs of the same spot. Group
    them into named areas (`kitchen`, `facade`, `washroom`…). An area with a
    before+after becomes a drag-to-compare reveal; an area with only an after
    becomes a finished gallery photo.
  - **Progress timeline** — when the photos are one space over time (empty →
    done), not pairs. Order them.
- **Metadata:** `category` (`commercial` | `residential` | `renovation`),
  `featured` (true = also on the home page), `year`, `location`, `area` (m²).
- **Copy:** draft the project `name`, `description`, `type`, and a caption for
  each area/stage. Use the **copywriter** skill so the hu-HU (formal Ön) and
  en-US text is native-quality. Never ship machine-translated captions.

Present this plan and get explicit confirmation (use AskUserQuestion for the
mapping and metadata choices). Correct anything the user changes.

## Step 3 — Convert the images

Write a manifest to the scratch dir and run the converter. Manifest shape:

```json
{
  "id": "3",
  "hero": "/abs/path/raw/storefront.jpg",
  "areas": [
    { "name": "kitchen", "before": "/abs/path/raw/k1.jpg", "after": "/abs/path/raw/k2.jpg" },
    { "name": "facade",  "after": "/abs/path/raw/facade.jpg" }
  ]
}
```

(Use `"stages": [ { "id": 1, "src": "…" }, … ]` instead of `"areas"` for the
timeline model — never both.)

```bash
python3 scripts/process-project-images.py <manifest.json>
```

It writes resized webp (hero at two widths, work shots ≤1600w, EXIF-rotated,
metadata stripped) straight into `public/assets/images/projects/<id>/`. Sizes
are tunable constants at the top of the script.

## Step 4 — Add the data entry

Append an object to the `projects` array in `projects.js`. Before/after model:

```js
{
  id: '3',
  name: 'cafeName', description: 'cafeDescription', type: 'cafeType',
  category: 'commercial', featured: true,
  year: '2025', startDate: '2025', duration: '',
  location: 'Dunakeszi',
  area: 90,
  areas: [
    { name: 'kitchen', caption: 'kitchenCaption', before: true }, // reveal
    { name: 'facade',  caption: 'facadeCaption' },                // gallery
  ],
},
```

For the timeline model, replace `areas` with `stages`:
```js
  stages: [
    { caption: 'stageEmptyCaption', folder: 'progress', id: 1 },
    { caption: 'stageDoneCaption',  folder: 'progress', id: 2 },
  ],
```

The `name` in each area MUST match the image folder. Reuse an existing caption
key (e.g. `kitchenCaption`) if the wording fits; otherwise add a new one.

## Step 5 — Add the copy (both locales)

In `src/res/strings/strings.js`, add every key you referenced — `name`,
`description`, `type`, and each caption — under `projectsInfo` in **both**
`en-US` and `hu-HU`. A key missing in one locale renders the raw key text to
visitors in that language. (The validator catches this, but add both up front.)

## Step 6 — Verify

```bash
yarn validate
```

Must print `✓ Project content OK`. Fix anything it flags (missing image, missing
caption in a locale, both/neither areas+stages). Then, if a dev server is handy,
open `/projects/<id>/` and screenshot desktop + mobile to confirm the reveals,
gallery, and hero read correctly.

## Step 7 — Wrap up

Summarise what was added (id, image count + total size, which model, the copy),
and remind the user to update `src/res/trust.js` totals if this changes the
firm's headline numbers. Commit only if the user asks.

## Notes
- Source photos must be JPG or PNG. (HEIC would need `pip install pillow-heif`.)
- Don't upscale or invent content — if a project lacks a real before shot for an
  area, make it an after-only gallery photo instead of faking a pair.
