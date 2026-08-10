# DELTA Professional — deltaprof.com

Public website for DELTA Professional, DELTA CNC and DELTA R&D.

**Production:** https://deltaprof.com

## About

DELTA Professional develops systems for automation of industrial sewing and embroidery equipment in Ukraine.

The public history of DELTA Professional starts in 1995. More than 6000 DELTA Professional systems have been sold in Ukraine.

The current generation, **DELTA CNC**, is in active development and practical validation on real equipment.

## Site structure

- `/` — DELTA CNC product overview and current validation status
- `/rnd/` — DELTA R&D engineering direction
- `/support/` — legacy software, documentation and modernization path
- `/about/` — company history and engineering profile
- `/delivery/` — ordering, payment, packaging and delivery information

## Stack

The site is intentionally lightweight:

- static HTML
- CSS
- small vanilla JavaScript enhancements
- responsive raster media with `srcset`
- Cloudflare Pages deployment

No client-side application framework is required for the current site scope.

## Production baseline

Current public baseline includes:

- responsive desktop/mobile layout
- DELTA Professional visual identity and approved logo assets
- canonical URLs
- `robots.txt` and `sitemap.xml`
- branded HTTP 404 page
- Open Graph and Twitter/X social preview metadata
- versioned social and product media
- production cache policy for Cloudflare Pages

## Deployment

`main` is the production branch. Changes are deployed to Cloudflare Pages and served from `https://deltaprof.com`.

Development follows a small-step workflow:

1. one focused patch
2. deploy
3. verify in production
4. record the confirmed baseline

## Current direction

The site is a public foundation that will be expanded with verified material as DELTA CNC and DELTA R&D progress:

- real product photos and video
- validated technical parameters
- selected public engineering projects and case studies
- additional support documentation for legacy DELTA Professional systems

Only verified or clearly marked development-state information is published.
