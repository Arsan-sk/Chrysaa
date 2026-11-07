"use client";
import { useState } from "react";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Transformation from "@/components/Transformation";
import SampleWorks from "@/components/SampleWorks";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function BlackApp() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="chrysa-app-root relative min-h-screen bg-[var(--bg-deep)] text-[var(--text-cream)] transition-colors duration-300">
      {/* Intro Loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Navigation */}
      <Navigation />

      {/* Skip to main content (accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--gold)] focus:text-black focus:rounded"
      >
        Skip to main content
      </a>

      {/* Main Landmark */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* Tech Stack Marquee */}
        <TechMarquee />

        {/* Services Grid (9 Realistic Capabilities) */}
        <Services />

        {/* Process / How We Work */}
        <Process />

        {/* Brand Transformation Interactive Experience */}
        <Transformation />

        {/* Sample Works Interactive 3D Showcase */}
        <SampleWorks />

        {/* Real Project Portfolio Showcase */}
        <Portfolio />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Contact & Transformation CTA */}
        <CTA />
      </main>

      {/* Footer with Marquee */}
      <Footer />
    </div>
  );
}
