"use client";
import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

function MarqueeRow({
  items,
  direction = "left",
  speed = 30,
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const quadrupled = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-wrapper">
      <div
        className={`marquee-track ${direction === "left" ? "marquee-left" : "marquee-right"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {quadrupled.map((tech, i) => (
          <span key={`${tech}-${i}`} className="marquee-item" data-cursor="">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}


export default function TechMarquee() {
  const firstHalf = techStack.slice(0, Math.ceil(techStack.length / 2));
  const secondHalf = techStack.slice(Math.ceil(techStack.length / 2));

  return (
    <section className="marquee-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="marquee-label">
          <span className="label-dot" />
          <span>Technologies We Build With</span>
        </div>
        <MarqueeRow items={firstHalf} direction="left" speed={25} />
        <MarqueeRow items={secondHalf} direction="right" speed={30} />
      </motion.div>
    </section>
  );
}
