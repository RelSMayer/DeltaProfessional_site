# SITE MEDIA BASELINE v1

Status: active baseline for deltaproprof.com media assets.

## Goal

Use one predictable pipeline for all public images on the site. Keep source/master media outside the website repository and commit only prepared web assets.

## Source vs web assets

- MASTER / source files: keep outside this repository (Google Drive / working media archive).
- Website repository: keep only final web-ready variants.
- Do not commit camera originals, generated intermediate files, PSD/project files, or oversized source PNGs unless there is a specific technical reason.

## Repository structure

```text
assets/
├── brand/
│   ├── logo/
│   └── icons/
└── images/
    ├── home/
    ├── support/
    ├── about/
    ├── rnd/
    └── delivery/
```

Each logical image gets its own directory when multiple responsive variants are used:

```text
assets/images/home/delta-cnc-system/
├── delta-cnc-system.v1.720.webp
└── delta-cnc-system.v1.1440.webp
```

## Naming

Use semantic, lowercase, hyphenated names.

Pattern:

```text
<image-name>.v<revision>.<width>.<format>
```

Examples:

```text
delta-cnc-system.v1.720.webp
delta-cnc-system.v1.1440.webp
```

When image content changes, increment the revision in the filename. Do not reuse an old filename for different image content.

## Responsive image baseline

Default raster set for important content images:

- 720 px wide — mobile / standard density
- 1440 px wide — desktop / HiDPI

Use `srcset` and `sizes` so the browser chooses the appropriate resource.

Example:

```html
<img
  src="/assets/images/home/delta-cnc-system/delta-cnc-system.v1.1440.webp"
  srcset="
    /assets/images/home/delta-cnc-system/delta-cnc-system.v1.720.webp 720w,
    /assets/images/home/delta-cnc-system/delta-cnc-system.v1.1440.webp 1440w
  "
  sizes="(max-width: 900px) 100vw, 55vw"
  width="1440"
  height="1080"
  loading="lazy"
  alt="..."
/>
```

Use `<picture>` only when mobile needs a different crop/composition, not merely a smaller copy.

## Formats

- Technical diagrams with small labels: high-quality WebP; preserve text readability over minimum file size.
- Equipment photos: WebP.
- Logos and simple vector icons: SVG.
- PNG: only when lossless raster or transparency is specifically required.
- JPEG: only when there is a specific reason.

## Quality rule

Do not optimize for minimum bytes at any cost.

The acceptance criterion is: the web variant must be visually readable at its intended display size. Fine text, callout lines and technical details must remain clear.

For the DELTA CNC structural diagram, ~50–200 KiB per responsive variant is acceptable if it preserves readability.

## HTML requirements

For every content image:

- meaningful `alt` text;
- intrinsic `width` and `height`;
- CSS `width: 100%; height: auto;` when responsive;
- `loading="lazy"` for below-the-fold images;
- `srcset` for important raster images with multiple widths.

## Caching

Versioned files under `/assets/images/` may use long immutable caching because changed image content gets a new filename/revision.

HTML/CSS remain revalidated during active development.

## Update workflow

1. Create or obtain the MASTER image.
2. Keep MASTER outside the site repository.
3. Export approved web variants (normally 720w + 1440w).
4. Review legibility on desktop and mobile.
5. Add them under `assets/images/<section>/<image-name>/`.
6. Update HTML `src`, `srcset`, dimensions and alt text.
7. Deploy and verify both variants load correctly.
8. Only after verification remove superseded web assets.

## Current reference asset

First image to use this baseline:

```text
assets/images/home/delta-cnc-system/
├── delta-cnc-system.v1.720.webp
└── delta-cnc-system.v1.1440.webp
```

This image is the reference implementation for future site media.