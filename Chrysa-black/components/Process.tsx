"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/lib/data";

function ProcessStep({
  step,
  index,
  total,
}: {
  step: (typeof processSteps)[0];
  index: number;
  total: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="process-step"
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <div className="step-left">
        <motion.div
          className="step-number"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            delay: index * 0.15 + 0.2,
            type: "spring",
            damping: 15,
          }}
        >
          {step.number}
        </motion.div>
        {index < total - 1 && (
          <motion.div
            className="step-line"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{
              delay: index * 0.15 + 0.4,
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        )}
      </div>
      <div className="step-right">
        <h3 className="step-title">{step.title}</h3>
        <p className="step-description">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="process" className="process-section" ref={sectionRef}>
      {/* Floating geometric background */}
      <motion.div className="process-bg-shapes" style={{ y: bgY }}>
        <div className="bg-shape shape-1" />
        <div className="bg-shape shape-2" />
      </motion.div>

      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">
            <span className="label-dot" />
            <span>How We Work</span>
          </div>
          <h2 className="section-title">
            <span className="text-cream">A process built for</span>{" "}
            <span className="text-gold italic">transformation</span>
          </h2>
          <p className="section-subtitle">
            Every engagement follows a structured path — from understanding your
            vision to delivering measurable results.
          </p>
        </motion.div>

        <div className="process-steps">
          {processSteps.map((step, i) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={i}
              total={processSteps.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
