"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutSection } from "./AboutSection";
import { CapabilitiesSection } from "./CapabilitiesSection";
import { ContactSection } from "./ContactSection";
import { ElasticSection } from "./ElasticSection";
import { FaqSection } from "./FaqSection";
import { HeroSection } from "./HeroSection";
import { LayeredRevealWrapper } from "./LayeredRevealWrapper";
import { PhilosophySection } from "./PhilosophySection";
import { ProcessSection } from "./ProcessSection";
import { RecognitionSection } from "./RecognitionSection";
import { SampleWorksSection } from "./SampleWorksSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { TransformationSection } from "./TransformationSection";
import { WorkSection } from "./WorkSection";

gsap.registerPlugin(ScrollTrigger);

function useRevealMotion() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduceMotion) return;

      // General reveal animation for headings and blocks
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 36,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      // Work section project panels entry
      gsap.utils
        .toArray<HTMLElement>(".project-panel")
        .forEach((panel, index) => {
          gsap.from(panel, {
            y: 80,
            rotate: index % 2 ? 1.5 : -1.5,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: panel, start: "top 82%", once: true },
          });
        });
    }, root);

    // Refresh ScrollTrigger after DOM measurement
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      context.revert();
    };
  }, []);

  return root;
}

export default function WhiteApp() {
  const root = useRevealMotion();

  useEffect(() => {
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={root} className="crysa-white-root">
      <div className="scroll-progress" />
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <LayeredRevealWrapper
          foreground={<RecognitionSection />}
          background={<TransformationSection />}
        />
        <ElasticSection />
        <CapabilitiesSection />
        <SampleWorksSection />
        <WorkSection />
        <ProcessSection />
        <FaqSection />
        <AboutSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
