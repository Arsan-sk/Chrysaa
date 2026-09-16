# CHRYSA — Master Context File
*For any AI/LLM picking up this build if the original session fails. Read this fully before writing code.*

---

## 1. Who this is for

**Founder:** Shaikh Mohd Arsan — final-year B.E. Electronics & Computer Science student, AIKTC (Mumbai University), Bhiwandi, Maharashtra, India. CGPA 9.86 (last sem), 8.79 overall. Technical Lead at Elite Club (ECS Dept) since 2023. Certified in AI/ML (Samsung Innovation Campus), Oracle Cloud AI Foundations, Python (GUVI/IIT Madras). Co-authored a patent-pending research paper, **GridLock** (grid-based passwordless OIDC authentication). Positions himself as a systems-first full-stack engineer + AI pipeline builder, not a generalist. Targets: Full-Stack Dev, AI/ML Engineering, Prompt Engineering, Systems Design.
- Portfolio: arsansk.vercel.app
- GitHub: github.com/Arsan-sk
- LinkedIn: linkedin.com/in/arsan-sk

**Co-founder:** Imran (surname/details not yet given — ask user or use "Imran" alone / placeholder role "Co-Founder").
**Possibly joining later:** Rehman, Adnan (not yet confirmed founders — do not feature prominently, mention only if user confirms).

## 2. The agency

A digital services agency covering: websites, web applications, SaaS, mobile apps, internal systems, dashboards, automation, AI integrations, AI experiences, UI/UX, branding, SEO, digital marketing, content, video editing, maintenance, hosting/infrastructure, analytics, digital transformation, consulting.

Core brand belief (their words): **"We exist to help businesses move from what they are today to what they are capable of becoming."**

## 3. The name: CHRYSA

- Root of "chrysalis" — the stage where something ordinary transforms into something new.
- User picked this after rejecting ~50+ other name suggestions across categories (mythology/object references, invented/coined names, meaning-rooted words in Sanskrit/Arabic/Swahili/Latin/Greek, founder-name blends, metaphor-based names). Final round was narrowed to a "transformation/becoming" theme (not "journey/carrying," which was the earlier direction inspired by the rejected name "Kaswa" — the Prophet's camel — dropped for religious-sensitivity + over-commonality reasons).
- Brand line pairing already approved in spirit: *"[Business] today → [business] capable of becoming."* Chrysalis = the transformation stage itself.
- Visual direction implied by the name: cocoon/emergence motifs, metamorphosis, geometric wing-fold or spiral marks — NOT literal butterfly clip-art (too on-the-nose/cheesy). Keep it abstract/geometric/premium.

## 4. Services to actually list on the site
(Chosen as the realistic subset Arsan can deliver on, from the client's full requested list — do not list mobile apps prominently unless confirmed, since it's not a proven strength yet.)

1. Websites & Web Applications
2. SaaS Development
3. AI Integrations & AI Experiences
4. UI/UX & Branding
5. SEO & Digital Marketing
6. Video & Content Editing
7. Automation & Dashboards
8. Maintenance & Hosting/Infrastructure
9. Digital Transformation Consulting

## 5. Sample project portfolio (real projects — use these, not fake placeholders)

- **GridLock** — patent-pending, grid-based passwordless authentication system (OIDC), co-authored research paper, patent application under review.
- **Bonhomie** — event registration platform, sole-built end-to-end, handled 3,000+ real registrations.
- **SWIK Plus** (formerly CivicPlus) — unified civic/e-governance service-integration layer for Maharashtra, built for SIH hackathon (SIH26129); React 19 + TypeScript + Vite + Supabase + Firebase Hosting + Gemini Vision API.
- **Share-Bite** — social-good application (food-sharing / social impact).
- **Tony** — Retell AI-powered outbound voice calling agent for lead generation.
- Ongoing: Instagram educational Reels series (@its.arsaaan) on system design — proof of content/teaching ability, could be framed as "Content & Digital Marketing" proof-of-work.

Use these as real case-study cards, not generic stock "Project 1/2/3" filler.

## 6. Reference sites analyzed (design inspiration)

**https://www.averza.in/** (Digital Technology & Growth Studio — direct competitor archetype, Thane/Mumbai digital agency):
- Structure: Nav → Hero ("Turn Your Business Into a Digital Business") → scrolling tech-stack marquee → Services grid (8 cards w/ images) → "How We Work" numbered stepper process → "What We Can Build" case-example cards → Engagement Models (3-tier pricing: Starter/Growth/Scale) → FAQ accordion → CTA + contact form → footer with marquee tagline strip.
- Tone: trust-first, B2B SME buyer, structured, WhatsApp-CTA driven (localized for Indian SME clients).
- Stack they advertise: React, Next.js, Tailwind, TypeScript, Node, GSAP, Framer Motion, Postgres, MongoDB, AWS/GCP/Vercel, Docker.

**https://sarahzaheer.site/** (Framer-built product-designer portfolio, "Sarah Zaheer" by Maks K, featured in Framer Gallery):
- Described as an "immersive experience rooted in empathy, research, and clarity" — kinetic/portfolio-grade motion design, case-study storytelling, generous whitespace, premium editorial feel. (Site is Framer/JS-heavy; exact motion specifics inferred from Framer-gallery "immersive portfolio" genre conventions: staggered kinetic-type hero reveals, custom cursor, magnetic buttons, scroll-linked parallax/scale, smooth section-to-section transitions rather than plain fade-on-scroll.)

**Design synthesis used:** Averza's *information architecture* (the trust-building B2B section order: services → process → work → engagement → FAQ → contact) combined with Sarah Zaheer's *motion/interaction language* (kinetic type, custom cursor, magnetic buttons, scroll-driven reveals, immersive transitions) — applied to Chrysa's transformation/chrysalis metaphor.

## 7. Design system decisions for the build

- **Design read:** Agency landing page for SME/business-owner buyers + recruiters/clients evaluating credibility — premium creative-studio language, blending Averza's structured trust-building sections with Sarah Zaheer's kinetic/immersive motion. Dark, editorial, warm chrysalis-gold accent. Interactive rather than scroll-and-read.
- **Dials:** DESIGN_VARIANCE 8/10, MOTION_INTENSITY 8/10, VISUAL_DENSITY 3/10 (Agency/creative landing preset).
- **Palette:** near-black warm background (#0B0A08), warm cream text (#F5F1E8), chrysalis gold/amber accent (#E8A33D → #C77B3D gradient), muted stone (#8A8578).
- **Type:** Fraunces (serif, variable, dramatic display/italics) for headlines + Inter for UI/body.
- **Motion stack:** GSAP + ScrollTrigger (via cdnjs) — no React/npm in this deliverable, single static HTML file. Manual text-splitting for kinetic type (no SplitText paid plugin). Custom cursor, magnetic buttons, scroll-pinned transformation section, marquee ticker, accordion FAQ, draggable/scroll-snap project carousel.
- **Sections built:** Loader (cocoon-morph) → Nav → Hero (kinetic headline + scroll cue) → Capabilities marquee ticker → Services (interactive cards) → Process (numbered stepper) → Transformation section (Chrysa metaphor, "Today → Capable of Becoming" interactive toggle) → Work/Portfolio (project cards, real projects from §5) → Founders (Arsan + Imran, sample placeholder photos, bios) → FAQ (accordion) → CTA/contact form → Footer.

## 8. Founders section content used

- **Arsan (Shaikh Mohd Arsan)** — Founder & Systems Architect. Full-stack + AI/ML, patent-pending GridLock research, systems-first thinker.
- **Imran** — Co-Founder. (No further detail provided by user yet — kept intentionally light/generic: "Co-Founder," a short placeholder line about operations/growth — user should replace with Imran's real bio/role later.)
- Photos: placeholder/sample avatar images used (via pravatar.cc placeholder service) since no real photos were supplied — clearly swappable image URLs, commented in code.

## 9. Deliverable

Single self-contained HTML file (`chrysa-website.html`) — no build step required, opens directly in browser. GSAP/ScrollTrigger + Google Fonts loaded via CDN. All copy, sections, and interactions as described above.

## 10. Open items / things to confirm with Arsan before going further
- Imran's surname, role, and real bio/photo.
- Whether Rehman/Adnan should be added as founders or team members.
- Real project screenshots/images to replace placeholder visuals.
- Real contact details (email/phone/WhatsApp) for the CTA/contact section — currently placeholder.
- Domain/logo/favicon — not yet designed.
