import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, Manrope, DM_Mono } from "next/font/google";
import "./globals.css";
import "./white.css";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/context/ThemeContext";
import { projects, services, faqItems } from "@/lib/data";


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chrysaaa.vercel.app";
const verificationFile = "google82ea3315fdd0abe5.html";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CHRYSA | Digital Transformation & Technology Studio",
    template: "%s | CHRYSA",
  },
  description:
    "CHRYSA is a digital transformation and technology studio in Mumbai, India. We engineer custom web applications, SaaS platforms, AI integrations, and automated digital systems for ambitious businesses.",
  keywords: [
    "CHRYSA",
    "Chrysa Studio",
    "Chrysa digital agency",
    "Chrysa technology",
    "Chrysa development",
    "Chrysa software",
    "Chrysa digital transformation",
    "Chrysa web development",
    "Chrysa AI",
    "Chrysa India",
    "Chrysa Mumbai",
    "digital transformation studio",
    "digital transformation agency",
    "software development agency",
    "web development agency",
    "custom web development",
    "SaaS development agency",
    "AI development agency",
    "AI integration agency",
    "business automation agency",
    "UI UX development agency",
    "Shaikh Mohd Arsan",
    "Arsan",
  ],
  authors: [
    { name: "Shaikh Mohd Arsan", url: "https://arsansk.vercel.app" },
    { name: "Imran", url: "https://imran21.vercel.app/" },
  ],
  creator: "Shaikh Mohd Arsan",
  publisher: "CHRYSA",
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "geo.position": "19.0760;72.8777",
    ICBM: "19.0760, 72.8777",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: { google: verificationFile },
  icons: {
    icon: [
      { url: "/common/chrysa-mark.svg", type: "image/svg+xml" },
    ],
    shortcut: "/common/chrysa-mark.svg",
    apple: "/common/chrysa-mark.svg",
  },
  openGraph: {
    title: "CHRYSA | Digital Transformation & Technology Studio",
    description:
      "We help businesses move from what they are today to what they're capable of becoming through custom web applications, SaaS, and AI systems.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CHRYSA",
    images: [
      {
        url: `${siteUrl}/common/chrysa-mark.svg`,
        width: 1200,
        height: 630,
        alt: "CHRYSA — Digital Transformation & Technology Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHRYSA | Digital Transformation & Technology Studio",
    description:
      "Websites, SaaS, AI integrations, automation, and digital experiences built for what your business can become.",
    images: [`${siteUrl}/common/chrysa-mark.svg`],
    creator: "@its_arsaaan",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0A08",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "CHRYSA",
        alternateName: [
          "Chrysa Studio",
          "Chrysa Digital Agency",
          "Chrysa Technology",
          "Chrysa Development",
          "Chrysa India",
          "Chrysa Digital Transformation Studio",
        ],
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/common/chrysa-mark.svg`,
          caption: "CHRYSA Studio Logo",
        },
        slogan: "Transform. Connect. Become.",
        disambiguatingDescription:
          "CHRYSA is a digital transformation and technology studio inspired by the chrysalis process of metamorphosis, helping businesses evolve into modern digital systems through custom software, AI integration, and SaaS platforms.",
        description:
          "CHRYSA is a digital transformation and technology studio helping businesses turn existing ideas, manual processes, and systems into scalable web applications, SaaS products, AI systems, and digital experiences.",
        email: "chrysadev09@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "19.0760",
          longitude: "72.8777",
        },
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Worldwide" },
        ],
        founder: [
          {
            "@type": "Person",
            name: "Shaikh Mohd Arsan",
            alternateName: ["Arsan", "Arsan Shaikh", "Shaikh Arsan"],
            jobTitle: "Founder & Systems Architect",
            url: "https://arsansk.vercel.app",
            sameAs: [
              "https://github.com/Arsan-sk",
              "https://linkedin.com/in/arsan-sk",
              "https://www.instagram.com/its.chrysa.dev/",
            ],
          },
          {
            "@type": "Person",
            name: "Imran",
            jobTitle: "Co-Founder",
            url: "https://imran21.vercel.app/",
            sameAs: [
              "https://imran21.vercel.app/",
            ],
          },
        ],
        sameAs: [
          "https://github.com/Arsan-sk",
          "https://linkedin.com/in/arsan-sk",
          "https://www.instagram.com/its.chrysa.dev/",
          "https://imran21.vercel.app/",
        ],

        knowsAbout: services.map((service) => service.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Transformation & Engineering Services",
          itemListElement: services.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              provider: { "@id": `${siteUrl}/#organization` },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "CHRYSA",
        alternateName: ["Chrysa Studio", "Chrysa Agency"],
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#portfolio`,
        name: "CHRYSA Selected Systems & Client Case Studies",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          description: project.description,
          url: project.href || `${siteUrl}/#work`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${manrope.variable} ${dmMono.variable}`}
    >
      <body className="antialiased selection:bg-amber-500/20 selection:text-white">
        <ThemeProvider>
          <CustomCursor />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schemaData),
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

