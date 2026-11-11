# Hoover Fence Company Website — Buyer Summary

**Prepared:** November 10, 2026  
**Business:** Hoover Fence Company  
**Primary market:** Hoover, Alabama  
**Configured domain:** [https://hooverfencing.com/](https://hooverfencing.com/)  
**Source repository:** [github.com/scrapesalad/hooversecond](https://github.com/scrapesalad/hooversecond)

## Executive overview

This is a static, responsive website for Hoover Fence Company. It adapts the supplied high-performing fencing-site template to Hoover branding, Hoover source content, and the Hoover service market. The site includes 18 individual pages, shared desktop and mobile navigation, fence and outdoor-living content, phone-based calls to action, page-specific SEO metadata, structured data, a sitemap, and robots directives.

The configured canonical domain is `hooverfencing.com`. The site is prepared for Vercel deployment, but this build has not been published to the production domain. The current local preview is [http://localhost:4173](http://localhost:4173).

## Website pages and URLs

All URLs below are configured as canonical `https://hooverfencing.com` pages. Hoover, Alabama is the only service area currently published.

| Page | URL path | Page title / purpose |
|---|---|---|
| Home | `/` | Fence Company in Hoover, AL |
| About | `/about/` | About Hoover Fence Company |
| Fence services | `/services/` | Fence Installation & Repair in Hoover, AL |
| Wood privacy fencing | `/wood-privacy-fencing/` | Wood Privacy Fencing in Hoover, AL |
| Chain link fencing | `/chainlink-fencing/` | Chain Link Fencing in Hoover, AL |
| Fence repair | `/fence-repair/` | Fence Repair in Hoover, AL |
| Vinyl fencing | `/vinyl-fencing/` | Vinyl Fencing in Hoover, AL |
| Gates | `/gates/` | Fence Gates in Hoover, AL |
| Ornamental steel fencing | `/ornamental-steel-fencing/` | Ornamental Steel Fencing in Hoover, AL |
| Composite fencing | `/trex-composite-fencing/` | Composite Fencing in Hoover, AL |
| Shadowbox fencing | `/shadow-box-fencing/` | Shadowbox Fencing in Hoover, AL |
| Spaced picket fencing | `/spaced-picket-fencing/` | Spaced Picket Fencing in Hoover, AL |
| Cap and trim fencing | `/cap-and-trim-fencing/` | Cap and Trim Fencing in Hoover, AL |
| Privacy fencing | `/privacy/` | Privacy Fencing in Hoover, AL |
| Decks | `/decks/` | Decks in Hoover, AL |
| Pergolas | `/pergolas/` | Pergolas in Hoover, AL |
| Arbors | `/arbors/` | Arbors in Hoover, AL |
| Contact | `/contact/` | Contact Hoover Fence Company |

Additional site endpoints:

- Sitemap: [https://hooverfencing.com/sitemap.xml](https://hooverfencing.com/sitemap.xml)
- Robots rules: [https://hooverfencing.com/robots.txt](https://hooverfencing.com/robots.txt)
- Generated route inventory: `/route-inventory.json`

## Customer-facing features

- Shared Hoover-branded header and footer across every page.
- Two-level navigation with expandable service menus for decks, fences, outdoor living, gates, and support.
- Responsive mobile menu and submenu controls.
- Four-slide homepage hero with previous/next controls, slide indicators, automatic rotation, and reduced-motion support.
- Homepage proof strip, service-category cards, wood and vinyl material cards, three-step project-planning section, estimate callout, Hoover service-area section, and project FAQ section.
- Split introduction layouts and on-page section navigation for service pages.
- Related-service cards and internal links between relevant products and services.
- Tap-to-call links using the source-listed number **205-525-6454**.
- Hoover logo, favicon, available Hoover fence imagery, Avenir fonts, and supporting icon fonts.
- Accessible skip link, semantic page headings, keyboard-operable navigation controls, descriptive image text, and responsive layouts.

## SEO and technical features

- Static HTML generated at build time; no runtime server or database is required for the website itself.
- Unique page title and meta description for each of the 18 routes.
- Self-referencing canonical URL, Open Graph and Twitter metadata, and `index,follow` robots meta on each page.
- `HomeAndConstructionBusiness` JSON-LD with the source-listed phone number and Hoover, Alabama as the service area.
- Breadcrumb structured data on interior pages.
- Generated XML sitemap, `robots.txt`, and machine-readable route inventory.
- Shared page templates, domain configuration, navigation, SEO rendering, and static asset handling.
- No third-party npm packages are required.

## Build and deployment

- Requirement: Node.js 18 or newer.
- Build: `npm run build` generates the deployable static site in `dist/`.
- Local preview: `npm run preview` serves the generated site at `http://localhost:4173`.
- Vercel configuration: build command `npm run build`, output directory `dist`.
- Git branch: `main`.

## Launch status and verification items

- The domain is configured in canonical URLs and sitemap entries, but production deployment has not been performed.
- The local source lists `205-525-6454`; Hoover Fence Company should confirm that it is still the correct public number.
- There is no live inquiry-form endpoint, CRM connection, or email recipient configured. Current lead actions call the business by phone.
- The available Hoover mirror contains a limited set of usable fence imagery. Existing fence images are general product imagery and are not presented as Hoover project photographs. Confirm image rights and replace or expand the gallery with approved project photos when available.
- No physical street address, business hours, business email, social profiles, reviews, awards, warranties, licenses, or certifications are claimed because the source did not verify them.
- No city pages or coverage claims are published for surrounding communities. Confirm additional service areas before adding them.
- Analytics, Google Search Console, and advertising integrations are not connected in this build.

## Verification snapshot

The latest build generated 18 routes with 18 unique titles and 18 unique descriptions. Static checks passed for one H1 per page, canonical metadata, valid JSON-LD, and local asset references. HTTP checks returned success for all 18 routes on the local preview server. The deployable output audit found no Rick's Fencing identity or former-market references.
