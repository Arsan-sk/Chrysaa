"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { projects } from "@/lib/data";

function ProjectCase({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const caseRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: caseRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={caseRef}
      className={`pf-case ${isEven ? "pf-case-normal" : "pf-case-reverse"}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="View"
    >
      {/* Visual / Image Side */}
      <motion.div className="pf-visual" style={{ y: parallaxY }}>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "block" }}
            data-cursor="Watch"
          >
            <motion.div
              className="pf-visual-inner"
              style={{ background: project.gradient, scale: imgScale }}
              animate={{ borderRadius: hovered ? "1.5rem" : "2rem" }}
              transition={{ duration: 0.4 }}
            >
              {/* Large branded initial */}
              <motion.span
                className="pf-visual-letter"
                animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? -5 : 0 }}
                transition={{ type: "spring", damping: 15 }}
              >
                {project.title[0]}
              </motion.span>

              {/* Geometric pattern */}
              <div className="pf-visual-dots">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="pf-dot"
                    animate={{ opacity: hovered ? 0.3 : 0.1, scale: hovered ? 1.2 : 1 }}
                    transition={{ delay: i * 0.02, duration: 0.4 }}
                  />
                ))}
              </div>

              {/* Number badge */}
              <div className="pf-visual-badge">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
            </motion.div>
          </a>
        ) : (
          <motion.div
            className="pf-visual-inner"
            style={{ background: project.gradient, scale: imgScale }}
            animate={{ borderRadius: hovered ? "1.5rem" : "2rem" }}
            transition={{ duration: 0.4 }}
          >
            {/* Large branded initial */}
            <motion.span
              className="pf-visual-letter"
              animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? -5 : 0 }}
              transition={{ type: "spring", damping: 15 }}
            >
              {project.title[0]}
            </motion.span>

            {/* Geometric pattern */}
            <div className="pf-visual-dots">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="pf-dot"
                  animate={{ opacity: hovered ? 0.3 : 0.1, scale: hovered ? 1.2 : 1 }}
                  transition={{ delay: i * 0.02, duration: 0.4 }}
                />
              ))}
            </div>

            {/* Number badge */}
            <div className="pf-visual-badge">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Info Side */}
      <div className="pf-info">
        <motion.div
          className="pf-info-inner"
          animate={{ x: hovered ? (isEven ? 10 : -10) : 0 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <div className="pf-info-eyebrow">
            <span className="pf-info-num" style={{ color: project.color }}>{String(index + 1).padStart(2, "0")}</span>
            <span className="pf-info-divider" />
            <span className="pf-info-tagline">{project.tagline}</span>
          </div>

          <h3 className="pf-info-title">{project.title}</h3>

          <p className="pf-info-desc">{project.description}</p>

          <div className="pf-info-tags">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="pf-tag"
                style={{ borderColor: `${project.color}35`, color: project.color }}
              >
                {tag}
              </span>
            ))}
          </div>

          {project.href ? (
            <motion.a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-info-cta"
              style={{ color: project.color, textDecoration: "none" }}
              animate={{ gap: hovered ? "0.7rem" : "0.4rem" }}
              data-cursor="Watch"
            >
              <span>Watch Video Demo</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          ) : (
            <motion.div
              className="pf-info-cta"
              style={{ color: project.color }}
              animate={{ gap: hovered ? "0.7rem" : "0.4rem" }}
            >
              <span>View Case Study</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="portfolio-section-v2" ref={ref}>
      <div className="section-container">
        {/* Minimal header */}
        <motion.div
          className="pf-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">
            <span className="label-dot" />
            <span>Selected Work</span>
          </div>
          <h2 className="section-title">
            <span className="text-cream">Projects that </span>
            <span className="text-gold italic">prove it</span>
          </h2>
        </motion.div>

        {/* Full-width alternating case studies */}
        <div className="pf-cases">
          {projects.map((project, i) => (
            <ProjectCase key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
