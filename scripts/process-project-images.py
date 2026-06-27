#!/usr/bin/env python3
"""Turn a folder of raw JPG/PNG photos into the site's project image set.

Reads a small JSON manifest describing one project's photos and writes properly
sized .webp files straight into the public/ folder convention:

    public/assets/images/projects/<id>/
        hero_desktop.webp  hero_mobile.webp
        areas/<name>/before.webp  after.webp     (before/after model)
        progress/<n>.webp                          (timeline model)

Why this exists: phones produce ~4000px, multi-MB photos. Shipping those is the
single biggest perf problem on this site. This downsizes to display-sane widths,
honours EXIF rotation, strips metadata, and encodes webp at a good quality.

Usage:
    python3 scripts/process-project-images.py <manifest.json>

Manifest (source paths are relative to the manifest file, or absolute):

    {
      "id": "3",
      "hero": "raw/storefront.jpg",
      "areas": [
        { "name": "kitchen", "before": "raw/k1.jpg", "after": "raw/k2.jpg" },
        { "name": "facade",  "after": "raw/facade.jpg" }
      ]
    }

  ...or, instead of "areas", an ordered timeline:

      "stages": [ { "id": 1, "src": "raw/p1.jpg" }, { "id": 2, "src": "raw/p2.jpg" } ]

A project uses EITHER "areas" OR "stages", never both — same rule as projects.js.
"""

import json
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("Pillow is required: pip install Pillow")

# --- Tunable targets ---------------------------------------------------------
# Max widths (never upscale). Heroes are full-bleed; work/gallery shots sit in a
# column. quality 80 / method 6 is a good size-vs-quality point for photos.
HERO_DESKTOP_W = 2000
HERO_MOBILE_W = 1080
WORK_W = 1600
QUALITY = 80
METHOD = 6

ROOT = Path(__file__).resolve().parent.parent
PROJECTS = ROOT / "public/assets/images/projects"


def convert(src: Path, dst: Path, max_w: int) -> str:
    if not src.exists():
        raise FileNotFoundError(f"source image not found: {src}")
    im = Image.open(src)
    im = ImageOps.exif_transpose(im)          # honour phone rotation
    im = im.convert("RGB")                     # drop alpha; these are photos
    if im.width > max_w:
        h = round(im.height * max_w / im.width)
        im = im.resize((max_w, h), Image.LANCZOS)
    dst.parent.mkdir(parents=True, exist_ok=True)
    im.save(dst, "WEBP", quality=QUALITY, method=METHOD)
    kb = dst.stat().st_size / 1024
    return f"  {dst.relative_to(ROOT)}  ({im.width}x{im.height}, {kb:.0f} KB)"


def main():
    if len(sys.argv) != 2:
        sys.exit("usage: python3 scripts/process-project-images.py <manifest.json>")

    manifest_path = Path(sys.argv[1]).resolve()
    if not manifest_path.exists():
        sys.exit(f"manifest not found: {manifest_path}")
    m = json.loads(manifest_path.read_text())
    base = manifest_path.parent  # source paths are relative to the manifest

    def src(p):
        p = Path(p)
        return p if p.is_absolute() else (base / p)

    pid = str(m.get("id") or "").strip()
    if not pid:
        sys.exit("manifest is missing an `id`")
    out = PROJECTS / pid

    has_areas = bool(m.get("areas"))
    has_stages = bool(m.get("stages"))
    if has_areas and has_stages:
        sys.exit("manifest has BOTH `areas` and `stages` — pick one")
    if not has_areas and not has_stages:
        sys.exit("manifest needs `areas` or `stages`")
    if not m.get("hero"):
        sys.exit("manifest is missing `hero`")

    written = []
    # Hero → two widths.
    written.append(convert(src(m["hero"]), out / "hero_desktop.webp", HERO_DESKTOP_W))
    written.append(convert(src(m["hero"]), out / "hero_mobile.webp", HERO_MOBILE_W))

    if has_areas:
        for a in m["areas"]:
            name = a["name"]
            if not a.get("after"):
                sys.exit(f"area '{name}' needs an `after` image")
            written.append(convert(src(a["after"]), out / "areas" / name / "after.webp", WORK_W))
            if a.get("before"):
                written.append(convert(src(a["before"]), out / "areas" / name / "before.webp", WORK_W))
    else:
        for s in m["stages"]:
            written.append(convert(src(s["src"]), out / "progress" / f"{s['id']}.webp", WORK_W))

    print(f"\n✓ Wrote {len(written)} image(s) for project {pid}:")
    print("\n".join(written))
    print("\nNext: add the project to projects.js + strings.js, then run `yarn validate`.\n")


if __name__ == "__main__":
    main()
