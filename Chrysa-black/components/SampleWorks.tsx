"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SampleWorksCarousel } from "./SampleWorksCarousel";

export default function SampleWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sample-work" className="sample-works-section" ref={ref}>
      <div className="section-container">
        <motion.div
          className="section-header sample-works-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">
            <span className="label-dot" />
            <span>Sample Work</span>
          </div>
          <h2 className="section-title">
            <span className="text-cream">Interactive systems &amp;</span>{" "}
            <span className="text-gold italic">live prototypes</span>
          </h2>
          <p className="section-subtitle">
            A curated showcase of rapid bespoke builds, digital order systems, spatial galleries, and automated business workflows.
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <SampleWorksCarousel />
      </div>
    </section>
  );
}
