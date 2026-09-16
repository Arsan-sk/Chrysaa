# CHRYSA

CHRYSA is a digital transformation and systems studio portfolio. The name comes from **chrysalis**, the stage of transformation before emergence. The site expresses that idea through two visual directions: a dark, editorial experience and a light, structured experience.

> We help businesses move from what they are today to what they are capable of becoming.

## What is in this repository

This repository contains two related implementations of the CHRYSA website:

- **Chrysa-black**: the primary Next.js experience. It includes a theme switcher that renders the black/night and white/day experiences from one application.
- **Chrysa-white**: a standalone Vite + React implementation of the white/day experience. It is useful for focused development of that visual direction.
- **Root `shared/` and `public/`**: canonical content and assets consumed by both implementations.
- **Root files**: shared context, an older Vite configuration, and project-level metadata. The root Vite entry currently references a missing `src/` directory, so use one of the app directories for local development.

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

### Chrysa-black

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion for route/theme transitions
- GSAP and ScrollTrigger for interaction and scroll motion
- Lucide React for interface icons

### Chrysa-white

- Vite 7
- React 19 and TypeScript
- GSAP and ScrollTrigger for reveal motion
- Framer Motion and Lucide React available for interactions and UI

Both implementations use the root shared assets and Google Fonts loaded by the application HTML/layout files.

## Requirements

- Node.js 20 or newer is recommended.
- npm 10 or newer is recommended.
- Install dependencies separately in the app you want to run. Each app has its own lockfile and package manifest.

Check your versions:

```bash
node --version
npm --version
```

## Run the primary application

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

## Run the standalone white implementation

Start the Vite implementation:

```bash
cd Chrysa-white
npm install
npm run dev
```

Open the local URL printed by Vite, usually [http://localhost:5173](http://localhost:5173).

Available commands:

```bash
npm run dev      # Start the development server
npm run build    # Type-check and create a production build
npm run preview  # Preview the production build locally
```

## Production builds

Build the primary application from its directory:

```bash
cd Chrysa-black
npm run build
npm run start
```

The Next.js output is generated in `.next/` and should be deployed using a Next.js-compatible host such as Vercel. The standalone white build can be generated and previewed with:

```bash
cd Chrysa-white
npm run build
npm run preview
```

Its static output is written to `Chrysa-white/dist/` and can be deployed to any static hosting provider that supports SPA fallback routing.

## Project structure

```text
.
├── public/
│   ├── common/               # Shared brand assets and future common media
│   ├── black/                # Black-theme-only assets
│   ├── white/                # White-theme-only assets
│   └── work/                 # Shared project/sample-work media
├── shared/
│   └── content/              # Canonical data consumed by both apps
├── Chrysa-black/
│   ├── app/                  # Next.js routes, layout, and global styles
│   ├── components/           # Black theme components and white theme modules
│   ├── context/              # Shared theme state
│   ├── hooks/                # Interaction and scroll hooks
│   ├── lib/                  # Shared data and utilities
│   └── scripts/              # Theme/content maintenance scripts
├── Chrysa-white/
│   ├── src/components/       # Standalone white experience
│   └── PRP.md                # Product, design, and interaction requirements
├── chrysa-context.md         # Brand, content, design, and open-item context
├── index.html                # Legacy root Vite shell
├── package.json               # Legacy root package metadata
└── .gitignore
```

### Shared content and assets

The two apps use the same root-level project data and work images. `shared/content/sampleWorks.ts` owns the sample-work records, while `shared/content/siteData.ts` owns the shared projects, capabilities, process steps, and connection details. Existing image URLs such as `/work/resin-art.png` remain unchanged.

Vite uses the repository root `public/` directory directly. Next.js serves the same root assets through `Chrysa-black/app/[assetType]/[...path]/route.ts`, so the frontend components do not need separate asset paths or duplicated public folders.

Theme-specific components, CSS, animation, and layout remain inside their respective app directories. Centralizing content and media does not alter the visual implementation.

## Editing guide

- Update the primary site in `Chrysa-black/app/` and `Chrysa-black/components/`.
- Update the standalone white experience in `Chrysa-white/src/`.
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

cd ../Chrysa-white
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

The repository currently uses `https://chrysaa.vercel.app` as a fallback because a final production domain has not been recorded yet. Replace the same fallback in the standalone static app's `index.html`, `robots.txt`, and `sitemap.xml` when the domain is confirmed. Google Search Console verification is available at `/google82ea3315fdd0abe5.html`.

## Current open items

The following are still content decisions rather than implementation tasks:

- Confirm Imran's full name, role, biography, and portrait.
- Decide whether Rehman and Adnan should appear as founders or team members.
- Add final project screenshots and approved brand assets.
- Add production contact details, domain, logo, and favicon.
- Decide whether the legacy root Vite shell should be restored, removed, or replaced by a workspace-level configuration.

## License

This project is private and intended for CHRYSA development. No public license has been specified.
