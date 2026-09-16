"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Transformation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, x)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, x)));
  };

  return (
    <section className="transformation-section" ref={ref}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">
            <span className="label-dot" />
            <span>The Chrysa Philosophy</span>
          </div>
          <h2 className="section-title">
            <span className="text-cream">The space between</span>{" "}
            <span className="text-gold italic">today</span>{" "}
            <span className="text-cream">and</span>{" "}
            <span className="text-gold italic">tomorrow</span>
          </h2>
        </motion.div>

        {/* Interactive slider */}
        <motion.div
          ref={containerRef}
          className="transformation-slider"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          data-cursor="Drag"
        >
          {/* "Today" side — grayscale, static */}
          <div
            className="slider-side slider-today"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <div className="slider-content">
              <span className="slider-label">Today</span>
              <div className="slider-mock">
                <div className="mock-bar" />
                <div className="mock-grid">
                  <div className="mock-card-gray" />
                  <div className="mock-card-gray" />
                  <div className="mock-card-gray" />
                </div>
                <div className="mock-text-lines">
                  <div className="mock-line w-80" />
                  <div className="mock-line w-60" />
                  <div className="mock-line w-40" />
                </div>
              </div>
              <p className="slider-desc">Manual processes, outdated systems, untapped potential.</p>
            </div>
          </div>

          {/* "Tomorrow" side — vibrant, animated */}
          <div
            className="slider-side slider-tomorrow"
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <div className="slider-content">
              <span className="slider-label slider-label-gold">Capable of Becoming</span>
              <div className="slider-mock slider-mock-gold">
                <div className="mock-bar-gold" />
                <div className="mock-grid">
                  <div className="mock-card-gold" />
                  <div className="mock-card-gold" />
                  <div className="mock-card-gold" />
                </div>
                <div className="mock-text-lines">
                  <div className="mock-line-gold w-80" />
                  <div className="mock-line-gold w-60" />
                  <div className="mock-line-gold w-40" />
                </div>
              </div>
              <p className="slider-desc slider-desc-gold">
                Digital systems, automated workflows, scalable growth.
              </p>
            </div>
          </div>

          {/* Divider line */}
          <div
            className="slider-divider"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="divider-handle">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6 4L2 10L6 16" stroke="#E8A33D" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M14 4L18 10L14 16" stroke="#E8A33D" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="transformation-quote"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <span className="quote-mark">&ldquo;</span>
          Chrysa represents the stage where potential is transformed into
          something new — the chrysalis moment where what was ordinary becomes
          extraordinary.
          <span className="quote-mark">&rdquo;</span>
        </motion.blockquote>
      </div>
    </section>
  );
}
