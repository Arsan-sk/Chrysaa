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
  const doubled = [...items, ...items];

  return (
    <div className="marquee-wrapper">
      <motion.div
        className="marquee-track"
        animate={{
          x: direction === "left" ? [0, -50 * items.length] : [-50 * items.length, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {doubled.map((tech, i) => (
          <span key={`${tech}-${i}`} className="marquee-item" data-cursor="">
            {tech}
          </span>
        ))}
      </motion.div>
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
