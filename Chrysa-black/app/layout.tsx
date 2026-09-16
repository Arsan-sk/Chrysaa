import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, Manrope, DM_Mono } from "next/font/google";
import "./globals.css";
import "./white.css";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/context/ThemeContext";
import { projects, services } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chrysaa.vercel.app";
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
    default: "CHRYSA | Digital Transformation & Systems Studio",
    template: "%s | CHRYSA",
  },
  description:
    "CHRYSA is a digital transformation and development studio building websites, web applications, SaaS products, AI integrations, automation systems, and brand experiences.",
  keywords: [
    "CHRYSA",
    "Chrysa development",
    "Chrysa development agency",
    "Chrysa digital agency",
    "Chrysa studio",
    "web development agency",
    "software development agency",
    "AI development agency",
    "digital transformation agency",
    "Digital Transformation",
    "Web Applications",
    "SaaS Development",
    "AI Integrations",
    "UI/UX Design",
    "automation and dashboards",
    "SEO and digital marketing",
    "Shaikh Mohd Arsan",
    "Arsan",
    "Arsan Chrysa",
    "Arsan full stack developer",
    "Full-Stack Engineering",
  ],
  authors: [{ name: "Shaikh Mohd Arsan" }],
  creator: "Shaikh Mohd Arsan",
  publisher: "CHRYSA",
  alternates: { canonical: "/" },
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
    title: "CHRYSA — From Potential to Presence",
    description:
      "Digital systems, websites, AI experiences, and transformation strategy for businesses becoming more capable.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CHRYSA",
  },
  twitter: {
    card: "summary",
    title: "CHRYSA | Digital Transformation & Systems Studio",
    description:
      "Websites, SaaS, AI integrations, automation, and digital experiences built for what your business can become.",
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
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": `${siteUrl}/#organization`,
                    name: "CHRYSA",
                    alternateName: [
                      "Chrysa Development",
                      "Chrysa Digital Agency",
                      "Chrysa Studio",
                    ],
                    url: siteUrl,
                    logo: `${siteUrl}/common/chrysa-mark.svg`,
                    description:
                      "Digital transformation and development studio building websites, software, SaaS, AI integrations, automation, and digital experiences.",
                    email: "chrysadev09@gmail.com",
                    founder: {
                      "@type": "Person",
                      name: "Shaikh Mohd Arsan",
                      alternateName: ["Arsan", "Arsan Shaikh", "Shaikh Arsan"],
                      url: "https://arsansk.vercel.app",
                      sameAs: [
                        "https://github.com/Arsan-sk",
                        "https://linkedin.com/in/arsan-sk",
                        "https://www.instagram.com/its.chrysa.dev/",
                      ],
                    },
                    sameAs: [
                      "https://github.com/Arsan-sk",
                      "https://linkedin.com/in/arsan-sk",
                      "https://www.instagram.com/its.chrysa.dev/",
                    ],
                    areaServed: "Worldwide",
                    knowsAbout: services.map((service) => service.title),
                  },
                  {
                    "@type": "WebSite",
                    "@id": `${siteUrl}/#website`,
                    url: siteUrl,
                    name: "CHRYSA",
                    publisher: { "@id": `${siteUrl}/#organization` },
                    inLanguage: "en",
                  },
                  {
                    "@type": "ItemList",
                    name: "CHRYSA selected projects",
                    itemListElement: projects.map((project, index) => ({
                      "@type": "ListItem",
                      position: index + 1,
                      name: project.title,
                      description: project.description,
                      url: project.href,
                    })),
                  },
                ],
              }),
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
