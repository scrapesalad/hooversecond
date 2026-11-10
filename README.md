# Hoover Fence Company website

Static site reconstruction using the supplied fencing site layout reference and Hoover Fence Company's mirrored content and brand assets.

## Build and preview

Requires Node.js 18 or newer. No third-party npm packages are required.

```sh
npm run build
npm run preview
```

The build writes a deployable static site to `dist/`. The local preview server listens on port 4173. Vercel is configured to build with `npm run build` and publish `dist/`.

Page copy, page titles, descriptions, and service links live in `src/pages.js`. Shared layout, navigation, metadata, JSON-LD, and page rendering live in `src/template.js`; shared responsive styles and the small mobile navigation script are in `assets/`.

## Conversion details

- Carries over the reference compiled theme stylesheet and Avenir fonts, with its multi-level header and mega menus, four-slide hero, proof strip, image-led service categories, fence material panels, project-planning steps, estimate callout, local-service section, question section, split service-page introductions, anchor navigation, full-width content grids, and multi-column footer.
- Preserves Hoover's 15 existing public paths and adds fence repair, vinyl fencing, and gate pages based on offerings listed in Hoover's source, for 18 total pages.
- Generates page-specific title/description, canonical, Open Graph/Twitter metadata, breadcrumb markup, `HomeAndConstructionBusiness` JSON-LD, sitemap, and robots directives.
- Publishes Hoover, Alabama as the only confirmed geographic service area.
- Uses the homepage as the main Hoover local landing page and keeps all local service copy Hoover-specific; candidate nearby cities remain unpublished until Hoover Fence Company confirms coverage.
- Uses the Hoover logo/icon, favicon, and a fence photo included in the Hoover mirror. The photo is used as general fence imagery and is not represented as a Hoover project.
- Uses available Hoover source images in the hero and category cards; the vinyl asset is optimized as WebP for page delivery.
- Uses source-listed phone `205-525-6454` as the working contact conversion. The captured contact form has no live recipient or submit handler; no nonfunctional form has been shipped.

Before launch, Hoover Fence Company should verify that the phone number remains current, confirm the photo usage rights and whether to replace it with Hoover project photography, and provide an approved recipient/service if a web inquiry form should be connected. No secondary city, street address, email, hours, warranty, review, award, or credential was invented.
