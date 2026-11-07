# CHRYSA

CHRYSA is a digital transformation and systems studio portfolio. The name comes from **chrysalis**, the stage of transformation before emergence. The site expresses that idea through two visual directions: a dark, editorial experience and a light, structured experience.

> We help businesses move from what they are today to what they are capable of becoming.

## What is in this repository

This repository contains the unified CHRYSA website application:

- **Chrysa-black**: The primary Next.js experience. It features a unified single component tree with dynamic Night and Day theme support powered by CSS tokens and a warm gallery day palette.
- **Root `shared/` and `public/`**: canonical content and assets consumed by the application.
- **Root files**: shared context, configuration, and project-level metadata.

## Product direction

CHRYSA is designed for business owners, founders, organizations, and teams that want to turn manual or disconnected work into capable digital systems. The experience is intentionally more than a services page: it moves visitors from recognition and possibility to demonstration, proof, trust, and contact.

The current content and visual direction covers:

- Websites and web applications
- SaaS development
- AI integrations and AI experiences
- UI/UX and branding
- SEO and digital marketing
- Video and content editing
- Automation and dashboards
- Maintenance and hosting/infrastructure
- Digital transformation consulting

The portfolio content includes GridLock, Bonhomie, SWIK Plus, Share-Bite, and Tony. Founder and contact details contain some placeholders and should be replaced with final approved content before launch.

## Technology

### Chrysa-black (Unified Next.js App)

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4 & CSS Custom Properties for theme tokens
- Fraunces + Inter editorial typography across both Day & Night modes
- Framer Motion for interactive transitions
- GSAP and ScrollTrigger for interaction and scroll motion
- Lucide React for interface icons

## Requirements

- Node.js 20 or newer is recommended.
- npm 10 or newer is recommended.

Check your versions:

```bash
node --version
npm --version
```

## Run the application

Start the Next.js implementation:

```bash
cd Chrysa-black
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available commands:

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run start    # Serve the production build
```

## Production builds

Build the application from `Chrysa-black`:

```bash
cd Chrysa-black
npm run build
npm run start
```

The Next.js output is generated in `.next/` and should be deployed using a Next.js-compatible host such as Vercel.

## Project structure

```text
.
├── public/
│   ├── common/               # Shared brand assets and future common media
│   ├── black/                # Black-theme-only assets
│   ├── white/                # Day-theme assets
│   └── work/                 # Shared project/sample-work media
├── shared/
│   └── content/              # Canonical data consumed by the app
├── Chrysa-black/
│   ├── app/                  # Next.js routes, layout, and global styles (Night & Day tokens)
│   ├── components/           # Unified editorial components (Hero, Navigation, Work, etc.)
│   ├── context/              # Theme state management (dark/light)
│   ├── hooks/                # Interaction and scroll hooks
│   ├── lib/                  # Shared data and utilities
│   └── scripts/              # Content maintenance scripts
├── chrysa-context.md         # Brand, content, design, and open-item context
├── index.html                # Legacy root Vite shell
├── package.json               # Legacy root package metadata
└── .gitignore
```

### Shared content and assets

The app uses the root-level project data and work images. `shared/content/sampleWorks.ts` owns the sample-work records, while `shared/content/siteData.ts` owns the shared projects, capabilities, process steps, and connection details. Existing image URLs such as `/work/resin-art.png` remain unchanged.

Next.js serves the root assets through `Chrysa-black/app/[assetType]/[...path]/route.ts`, so the frontend components do not need separate asset paths or duplicated public folders.

## Editing guide

- Update the site in `Chrysa-black/app/` and `Chrysa-black/components/`.
- Styling for both Night and Day themes is driven by CSS custom property tokens in `Chrysa-black/app/globals.css`.
- Keep real project names and proof points aligned with `chrysa-context.md`.
- Replace placeholder founder imagery, founder details, contact information, project screenshots, and favicon assets before publishing.
- Preserve the transformation concept without using literal butterfly imagery or generic agency filler.
- Respect reduced-motion preferences when adding new motion interactions.

## Validation checklist

Before opening a pull request or deploying:

```bash
cd Chrysa-black
npm run lint
npm run build
```

Then verify the following manually in a desktop and mobile viewport:

- Theme switching remains usable and does not reset the page unexpectedly.
- Navigation, accordion, carousel, magnetic controls, and contact actions work with keyboard and pointer input.
- Project media loads from the correct `public/work/` directory.
- Text remains readable and does not overlap at narrow widths.
- Reduced-motion preferences disable or soften non-essential animation.
- Contact details and placeholder founder/project assets have been replaced.

## SEO deployment configuration

The primary Next.js app reads `NEXT_PUBLIC_SITE_URL` for canonical URLs, structured data, `robots.txt`, and the XML sitemap. Set it to the real production origin before deployment, for example:

```env
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

The repository currently uses `https://chrysaaa.vercel.app` as a fallback. Replace the same fallback in the standalone static app's `index.html`, `robots.txt`, and `sitemap.xml` if a custom domain is confirmed. Google Search Console verification is available at `/google82ea3315fdd0abe5.html`.

## Current open items

The following are still content decisions rather than implementation tasks:

- Confirm Imran's full name, role, biography, and portrait.
- Decide whether Rehman and Adnan should appear as founders or team members.
- Add final project screenshots and approved brand assets.
- Add production contact details, domain, logo, and favicon.
- Decide whether the legacy root Vite shell should be restored, removed, or replaced by a workspace-level configuration.

## License

This project is private and intended for CHRYSA development. No public license has been specified.
