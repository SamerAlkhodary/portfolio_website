# Adding a project

Every project on the site comes from **one** entry in the projects list plus a
folder of images and its captions in both languages. Do the three steps below,
then run the checker — it tells you immediately if anything is missing.

> Use the **next free number** as the project `id` (the current projects are `1`
> and `2`, so the next is `3`). The `id` is also the image folder name.

---

## Step 1 — Add the images

Create the folder `public/assets/images/projects/<id>/` and put the photos in it.

**Always needed** (these are the big hero photo and every card thumbnail):

```
public/assets/images/projects/3/hero_desktop.webp
public/assets/images/projects/3/hero_mobile.webp
```

Then choose **one** of the two ways to show the work:

**A) Before / after of rooms** — when you have a matching pair for the same spot.
One folder per area; the files are always named `before.webp` and `after.webp`:

```
public/assets/images/projects/3/areas/kitchen/before.webp
public/assets/images/projects/3/areas/kitchen/after.webp
public/assets/images/projects/3/areas/facade/after.webp   ← after-only is fine
```
- A folder with **both** files becomes a drag-to-compare slider.
- A folder with **only `after.webp`** shows as a finished photo in the gallery.

**B) Step-by-step progress** — when you have photos of one space over time
(empty → built), not matching pairs. Number them in order:

```
public/assets/images/projects/3/progress/1.webp
public/assets/images/projects/3/progress/2.webp
```

---

## Step 2 — Add the project entry

In `src/pages/projectsPage/expandedProjectPage/projects.js`, add an object to the
list. Copy an existing one and change the values.

**For before/after rooms (A):**
```js
{
  id: '3',
  name: 'cafeName',
  description: 'cafeDescription',
  type: 'cafeType',
  category: 'commercial',   // commercial | residential | renovation
  featured: true,           // true = also appears on the home page
  year: '2025',
  location: 'Dunakeszi',
  area: 90,                 // floor area in m² (shown under the title)
  areas: [
    { name: 'kitchen', caption: 'kitchenCaption', before: true }, // slider
    { name: 'facade',  caption: 'facadeCaption' },                // gallery photo
  ],
},
```

**For step-by-step progress (B):** replace `areas` with `stages`:
```js
  stages: [
    { caption: 'stageEmptyCaption', folder: 'progress', id: 1 },
    { caption: 'stageDoneCaption',  folder: 'progress', id: 2 },
  ],
```

> `name`, the folder name in `areas`, and the photo files must match exactly.

---

## Step 3 — Add the words (both languages)

In `src/res/strings/strings.js` there are two language blocks, `en-US` and
`hu-HU`. Inside **each one**, find `projectsInfo` and add every key you used —
the name, description, type, and each caption:

```js
// in en-US → projectsInfo
cafeName: 'Corner Café',
cafeDescription: 'A full fit-out of a street-corner café…',
cafeType: 'Café',
kitchenCaption: 'The kitchen',
facadeCaption: 'The facade',

// the SAME keys in hu-HU → projectsInfo, in Hungarian
cafeName: 'Sarki Kávézó',
...
```

You must add them to **both** languages. If you forget one, visitors in that
language see the key text (e.g. `kitchenCaption`) instead of a real label.

---

## Step 4 — Check it

From the project folder, run:

```
yarn validate
```

It checks every project for missing images, missing captions (in either
language), and missing hero photos, and prints exactly what to fix. A clean run
looks like:

```
✓ Project content OK — 3 project(s), en-US + hu-HU locales, all images and captions present.
```

This same check runs automatically before `yarn deploy`, so a project with a
missing photo or caption can't go live by accident.

---

## Keeping the home stats band honest

The "X years · Y projects · Z m² · N cities" band on the home page reads its
numbers from `src/res/trust.js`. When you finish a new project, bump
`projects` and `area` there. (`years` updates itself from the founding year.)
