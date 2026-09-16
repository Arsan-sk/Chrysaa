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
    <div className="relative min-h-screen bg-[#0B0A08] text-[#F5F1E8]">
      {/* Intro Loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Navigation */}
      <Navigation />

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

