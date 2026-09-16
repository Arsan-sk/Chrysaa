import type { Metadata } from "next";
import { Inter, Fraunces, Manrope, DM_Mono } from "next/font/google";
import "./globals.css";
import "./white.css";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/context/ThemeContext";

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
  title: "CHRYSA | Digital Transformation & Systems Studio",
  description:
    "We exist to help businesses move from what they are today to what they are capable of becoming. Bespoke software, SaaS, AI integrations, and digital platforms.",
  keywords: [
    "CHRYSA",
    "Digital Transformation",
    "Web Applications",
    "SaaS Development",
    "AI Integrations",
    "UI/UX Design",
    "Shaikh Mohd Arsan",
    "Full-Stack Engineering",
  ],
  authors: [{ name: "Shaikh Mohd Arsan" }],
  openGraph: {
    title: "CHRYSA — From Potential to Presence",
    description:
      "We exist to help businesses move from what they are today to what they are capable of becoming.",
    type: "website",
    locale: "en_US",
  },
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
