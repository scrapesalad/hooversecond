# Hoover Fence Company conversion report

Updated: November 10, 2026

## Result

Reconstructed Hoover Fence Company as a self-contained static site in this repository. using the supplied fencing site capture as the template reference and Hoover's mirror as the brand and content source. The source mirrors were left unchanged. The original target workspace had no Git repository or commit baseline; this repository was initialized for the requested handoff. The reference is a static HTTrack capture of a WordPress site, not an application source checkout; there is no Git repository or original build system in the workspace, so this reconstruction uses a small dependency-free Node build.

The shared page system now closely follows the source site's multi-level header and product mega menus, four-slide hero, proof strip, four image-led category cards, fence material panels, estimate-planning steps, callout panel, local-service section, FAQ content, split interior introductions, on-page anchor navigation, full-width content grids, and multi-column footer. It uses the reference theme stylesheet and Avenir fonts while applying Hoover's logo, brand colors, and verified Hoover content and media. Responsive navigation, keyboard access, visible skip link/focus behavior, reduced-motion handling, semantic headings, and image optimization are retained.

## Public pages and SEO

The site builds 18 static pages: Hoover's 15 captured public paths plus /fence-repair/, /vinyl-fencing/, and /gates/, based on offerings in Hoover's source. All local SEO titles, page headings, schema area, and location copy target Hoover, Alabama. The homepage is the primary Hoover landing page; no separate Hoover city doorway page was added, which avoids competing pages for the same main search intent. The route list and generated metadata are available in [`route-inventory.json`](route-inventory.json); source content and metadata are maintained in [`pages.js`](src/pages.js).

Every page has a unique title and description, one descriptive H1, a self-referencing canonical, Open Graph and Twitter metadata, and internal links. The build generates a sitemap, robots.txt, `HomeAndConstructionBusiness` JSON-LD with the source-verified telephone and Hoover service area, and breadcrumb JSON-LD on interior pages. Hoover is the only published geographic service area. Birmingham, Vestavia Hills, Homewood, Pelham, Helena, Alabaster, Mountain Brook, Chelsea, Bessemer, and Trussville remain candidate markets only; neither the supplied mirror nor the attempted live-site fetch verified Hoover Fence Company's coverage there, so there are no pages or claims for those cities.

Content covers fence installation and source-listed repair, wood privacy, chain link, vinyl, ornamental steel, composite, shadowbox, spaced picket, cap-and-trim, gates, privacy styles, decks, pergolas, arbors, company information, and contact. The source phone number `205-525-6454` appears as a tap-to-call CTA. Generic project/asset imagery from the Hoover capture is not labeled as a local Hoover installation.

## Build and verification

- `npm run build` succeeds and writes `hoover-site/dist`.
- `npm run preview` serves the built pages at `http://localhost:4173`.
- HTTP checks passed for all 18 pages and the key assets, sitemap, and robots.txt.
- Static checks found 18 unique titles, 18 unique descriptions, exactly one H1 per page, a canonical and valid JSON-LD on every page, and no missing internal link targets.
- Public build audit found no prior-business identity, former-market, old phone, local-capture host, or source-filename references.

## Items requiring business-side confirmation

- The source lists `205-525-6454`; confirm it is still the correct public number.
- The Hoover capture's contact form has no live receiving address or working submission endpoint. The reconstructed contact path uses the source phone instead of displaying a form that silently fails. Connect a form provider if web inquiries are required.
- Confirm rights to the fence photo retained in Hoover's own mirror; replace it with Hoover project photography if available. It is used as general fence imagery and not claimed as a local project.
- The capture has no verified physical address, email, business hours, social accounts, privacy/terms pages, or connected analytics credentials. These have not been fabricated or reconnected.
- No service areas beyond Hoover are publicly claimed. Verify each additional market before creating location content. The live-domain fetch timed out, so current online service-area claims could not be independently checked.

The build is deployable as a static artifact; it has not been published. [`vercel.json`](vercel.json) points Vercel to `npm run build` and the `dist` output.
