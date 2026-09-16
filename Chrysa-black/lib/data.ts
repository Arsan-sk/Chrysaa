// ─── Services ─────────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string; // Lucide icon name
  color: string;
}

export const services: Service[] = [
  {
    id: "web",
    title: "Websites & Web Applications",
    shortTitle: "Web",
    description:
      "Fast, responsive, SEO-ready websites and complex web applications built to represent your business and generate results.",
    icon: "Globe",
    color: "#61DAFB",
  },
  {
    id: "saas",
    title: "SaaS Development",
    shortTitle: "SaaS",
    description:
      "Scalable software-as-a-service products designed for recurring value — from MVPs to full-featured platforms.",
    icon: "Cloud",
    color: "#A78BFA",
  },
  {
    id: "ai",
    title: "AI Integrations & Experiences",
    shortTitle: "AI",
    description:
      "Intelligent automation, custom AI pipelines, conversational agents, and machine learning integrations that give your business an edge.",
    icon: "Brain",
    color: "#34D399",
  },
  {
    id: "design",
    title: "UI/UX & Branding",
    shortTitle: "Design",
    description:
      "Human-centered design systems, brand identities, and digital experiences that resonate with your audience.",
    icon: "Palette",
    color: "#F472B6",
  },
  {
    id: "seo",
    title: "SEO & Digital Marketing",
    shortTitle: "SEO",
    description:
      "Technical SEO, content strategy, and digital marketing that gets your business discovered by the right people.",
    icon: "Search",
    color: "#FBBF24",
  },
  {
    id: "content",
    title: "Video & Content Creation",
    shortTitle: "Content",
    description:
      "Compelling video content, reels, and visual storytelling that turns your brand narrative into engaging media.",
    icon: "Video",
    color: "#FB923C",
  },
  {
    id: "automation",
    title: "Automation & Dashboards",
    shortTitle: "Automation",
    description:
      "Custom dashboards, workflow automation, and internal tools that eliminate manual operations and boost efficiency.",
    icon: "Zap",
    color: "#38BDF8",
  },
  {
    id: "infra",
    title: "Maintenance & Infrastructure",
    shortTitle: "Infra",
    description:
      "Cloud deployment, hosting, CI/CD pipelines, SSL, domain management, and ongoing maintenance that keeps you running.",
    icon: "Server",
    color: "#6EE7B7",
  },
  {
    id: "consulting",
    title: "Digital Transformation Consulting",
    shortTitle: "Consulting",
    description:
      "Strategic guidance to move your business from manual operations to modern digital systems — roadmaps, audits, and execution plans.",
    icon: "Compass",
    color: "#E8A33D",
  },
];

// ─── Projects ─────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  color: string;
  gradient: string;
  href?: string;
}

export const projects: Project[] = [
  {
    id: "credible",
    title: "Credible",
    tagline: "Quiz-Verified Learning Credibility",
    description:
      "A certification generating platform that establishes undeniable credibility over your learnings by taking comprehensive quizzes, evaluating real knowledge mastery, and awarding verified digital certifications.",
    tags: ["Certifications", "Quiz Engine", "Credentialing", "Full-Stack"],
    color: "#E8A33D",
    gradient: "linear-gradient(135deg, #E8A33D 0%, #C77B3D 100%)",
    href: "https://www.instagram.com/reel/DZP3N0gvAZU/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: "bonhomie",
    title: "Bonhomie",
    tagline: "Event Registration at Scale",
    description:
      "End-to-end event registration and ticketing platform built from scratch. Handled 3,000+ real registrations with seamless user experience and robust high-concurrency backend infrastructure.",
    tags: ["Full-Stack", "Events", "3000+ Users", "Solo Build"],
    color: "#A78BFA",
    gradient: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)",
    href: "https://www.instagram.com/reel/DULjcRED2hK/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: "civicplus",
    title: "CivicPlus",
    tagline: "Civic E-Governance Integration",
    description:
      "Unified civic and e-governance service-integration layer built for Smart India Hackathon (SIH26129). Powered by React 19, TypeScript, Vite, Supabase, Firebase, and Gemini Vision AI for citizen service routing.",
    tags: ["React 19", "TypeScript", "AI Vision", "Supabase", "Civic Tech"],
    color: "#38BDF8",
    gradient: "linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)",
    href: "https://youtu.be/FEoNlxBvXd0?si=4GlKC07kXS0R_Ckq",
  },
  {
    id: "sharebite",
    title: "ShareBite",
    tagline: "Social Impact Food Surplus Sharing",
    description:
      "A social-good application connecting surplus food with communities in need. Built with purpose — technology serving community welfare, direct logistics redistribution, and reducing food waste.",
    tags: ["Social Impact", "Community", "Full-Stack", "Food Rescue"],
    color: "#34D399",
    gradient: "linear-gradient(135deg, #34D399 0%, #059669 100%)",
    href: "https://youtu.be/EZubp8_aofc?si=0qWTeYzRIMs7-vIi",
  },
];

// ─── Process Steps ────────────────────────────────────────
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your vision, challenges, and goals. Deep conversations to map where you are and where you want to be.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Crafting a roadmap for transformation — technology choices, architecture decisions, and milestone planning aligned with your business reality.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Bringing the vision to life visually. User-centered design, prototypes, and design systems that make complex things feel simple.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Engineering robust, scalable solutions with modern tech stacks. Regular progress updates, iterative development, and rigorous quality standards.",
  },
  {
    number: "05",
    title: "Launch & Grow",
    description:
      "Deployment to production, performance optimization, and ongoing support. We don't just deliver — we ensure it thrives.",
  },
];

// ─── FAQ ──────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What does Chrysa do?",
    answer:
      "Chrysa is a digital transformation studio. We help businesses move from what they are today to what they are capable of becoming — through custom websites, web applications, SaaS products, AI integrations, UI/UX design, SEO, content creation, automation, and strategic consulting.",
  },
  {
    question: "Who is Chrysa for?",
    answer:
      "We work with early-stage startups, growing businesses, and established companies looking to modernize their digital presence. If you have a vision but need the technical execution to bring it to life, Chrysa is for you.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Our core stack includes React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, and cloud platforms (AWS, GCP, Vercel). For AI, we work with OpenAI, Gemini, custom ML pipelines, and voice AI platforms like Retell.",
  },
  {
    question: "How does a typical project work?",
    answer:
      "Every project follows our five-phase process: Discovery (understanding your needs), Strategy (crafting a roadmap), Design (visual prototyping), Build (engineering the solution), and Launch & Grow (deployment + ongoing support). We keep you involved at every stage.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope. A landing page can be live in 1-2 weeks. A web application or SaaS MVP typically takes 4-8 weeks. Complex AI integrations or enterprise systems may take 2-4 months. We'll give you a realistic timeline during Discovery.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes. We provide maintenance packages that include bug fixes, performance monitoring, security updates, content changes, and feature additions. We build long-term relationships, not one-off deliverables.",
  },
  {
    question: "Can you work with an existing codebase?",
    answer:
      "Absolutely. Whether it's improving an existing application, migrating to a modern stack, or adding new features to legacy systems, we can work with what you already have.",
  },
  {
    question: "What's the best way to get started?",
    answer:
      "Reach out through our contact form or send us an email. We'll schedule a free discovery call to understand your needs, discuss possibilities, and see if we're the right fit for your project.",
  },
];

// ─── Founders ─────────────────────────────────────────────
export interface Founder {
  name: string;
  fullName: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    whatsapp?: string;
    portfolio?: string;
  };
}

export const founders: Founder[] = [
  {
    name: "Arsan",
    fullName: "Shaikh Mohd Arsan",
    role: "Founder & Systems Architect",
    bio: "Full-stack engineer and AI pipeline builder with a systems-first approach. Co-authored a patent-pending research paper on GridLock — grid-based passwordless authentication. Certified in AI/ML (Samsung Innovation Campus) and Oracle Cloud AI. Builds things that work at scale.",
    image: "/images/arsan.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/arsan-sk",
      github: "https://github.com/Arsan-sk",
      portfolio: "https://arsansk.vercel.app",
      instagram: "https://www.instagram.com/its.chrysa.dev/",
      whatsapp: "https://wa.me/arsan.sk",
    },
  },
  {
    name: "Imran",
    fullName: "Imran",
    role: "Co-Founder",
    bio: "Operations and growth strategist. Building the bridge between vision and execution — ensuring every project delivers real business impact. Focused on client relationships, project delivery, and studio growth.",
    image: "/images/imran.jpg",
    socials: {
      linkedin: "#",
    },
  },
];

// ─── Tech Stack (for marquee) ─────────────────────────────
export const techStack: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "GSAP",
  "Framer Motion",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "Firebase",
  "AWS",
  "GCP",
  "Vercel",
  "Docker",
  "REST APIs",
  "GraphQL",
  "Tailwind CSS",
  "Figma",
  "Git",
  "OpenAI",
  "Gemini AI",
  "Retell AI",
];

// ─── Navigation Links ────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Sample Work", href: "#sample-work" },
  { label: "Projects", href: "#work" },
  // { label: "Team", href: "#founders" },
  { label: "FAQ", href: "#faq" },
];
