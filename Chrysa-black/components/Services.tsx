"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { services } from "@/lib/data";
import {
  Globe, Cloud, Brain, Palette, Search, Video,
  Zap, Server, Compass, ArrowRight
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Globe, Cloud, Brain, Palette, Search, Video, Zap, Server, Compass,
};

const CYCLE_DURATION_SEC = 3.8; // 3.8 seconds per capability

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeService = services[activeIndex];
  const Icon = iconMap[activeService.icon] || Globe;

  // Single reliable sequential auto-cycle timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
      setCycleKey((prev) => prev + 1);
    }, CYCLE_DURATION_SEC * 1000);

    return () => clearTimeout(timer);
  }, [activeIndex, cycleKey]);

  const handleSelectService = (index: number) => {
    setActiveIndex(index);
    setCycleKey((prev) => prev + 1);
  };

  return (
    <section id="services" className="services-section-v2" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="srv-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">
            <span className="label-dot" />
            <span>Our Capabilities</span>
          </div>
          <h2 className="section-title">
            <span className="text-cream">9 capabilities,</span>{" "}
            <span className="text-gold italic">one studio</span>
          </h2>
          <p className="section-subtitle">
            From concept to deployment and scaling — everything your business
            needs to thrive in the modern digital landscape.
          </p>
        </motion.div>

        {/* Split layout: left side list, right side expanded detail */}
        <div className="srv-split">
          {/* Left: Interactive sequential list */}
          <motion.div
            className="srv-list"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {services.map((service, i) => {
              const SIcon = iconMap[service.icon] || Globe;
              const isActive = i === activeIndex;

              return (
                <motion.button
                  key={service.id}
                  className={`srv-list-item ${isActive ? "srv-list-item-active" : ""}`}
                  onClick={() => handleSelectService(i)}
                  data-cursor="Select"
                  whileHover={{ x: isActive ? 0 : 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Smooth Progress Bar filling across the active item */}
                  {isActive && (
                    <motion.div
                      key={`progress-bar-${cycleKey}-${i}`}
                      className="srv-item-progress"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: CYCLE_DURATION_SEC,
                        ease: "linear",
                      }}
                      style={{
                        backgroundColor: `${service.color}15`,
                      }}
                    />
                  )}

                  {/* Active vertical color indicator */}
                  <motion.div
                    className="srv-indicator"
                    initial={false}
                    animate={{
                      scaleY: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                    style={{ backgroundColor: service.color }}
                  />

                  <span
                    className="srv-list-num"
                    style={{ color: isActive ? service.color : "" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div
                    className="srv-list-icon"
                    style={{ color: isActive ? service.color : "" }}
                  >
                    <SIcon size={18} strokeWidth={1.5} />
                  </div>

                  <span className="srv-list-label">{service.title}</span>

                  <motion.div
                    className="srv-list-arrow"
                    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -5 }}
                  >
                    <ArrowRight size={14} style={{ color: service.color }} />
                  </motion.div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Right: Expanded detail panel */}
          <motion.div
            className="srv-detail"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                className="srv-detail-inner"
                initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
              >
                {/* Ambient glow matching active capability color */}
                <div
                  className="srv-detail-glow"
                  style={{
                    background: `radial-gradient(circle at 35% 30%, ${activeService.color}20 0%, transparent 65%)`,
                  }}
                />

                <div className="srv-detail-content">
                  {/* Top bar with icon and number */}
                  <div className="srv-detail-top">
                    <div
                      className="srv-detail-icon"
                      style={{
                        color: activeService.color,
                        borderColor: `${activeService.color}40`,
                        background: `${activeService.color}10`,
                      }}
                    >
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <span
                      className="srv-detail-number"
                      style={{ color: activeService.color }}
                    >
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="srv-detail-title">{activeService.title}</h3>
                  <p className="srv-detail-desc">{activeService.description}</p>

                  {/* Architectural Blueprint Graphic */}
                  <div className="srv-detail-visual">
                    <svg viewBox="0 0 240 130" className="srv-wireframe">
                      <defs>
                        <linearGradient
                          id={`srv-grad-${activeService.id}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor={activeService.color} stopOpacity="0.45" />
                          <stop offset="100%" stopColor={activeService.color} stopOpacity="0.08" />
                        </linearGradient>
                      </defs>
                      <rect
                        x="10"
                        y="12"
                        width="220"
                        height="10"
                        rx="5"
                        fill={`url(#srv-grad-${activeService.id})`}
                      />
                      <rect
                        x="10"
                        y="32"
                        width="100"
                        height="86"
                        rx="8"
                        fill="none"
                        stroke={activeService.color}
                        strokeWidth="0.7"
                        strokeOpacity="0.35"
                      />
                      <rect
                        x="120"
                        y="32"
                        width="110"
                        height="40"
                        rx="6"
                        fill="none"
                        stroke={activeService.color}
                        strokeWidth="0.7"
                        strokeOpacity="0.25"
                      />
                      <rect
                        x="120"
                        y="78"
                        width="50"
                        height="40"
                        rx="6"
                        fill={`${activeService.color}12`}
                        stroke={activeService.color}
                        strokeWidth="0.5"
                        strokeOpacity="0.3"
                      />
                      <rect
                        x="180"
                        y="78"
                        width="50"
                        height="40"
                        rx="6"
                        fill="none"
                        stroke={activeService.color}
                        strokeWidth="0.5"
                        strokeOpacity="0.2"
                      />
                      <circle
                        cx="60"
                        cy="75"
                        r="20"
                        fill="none"
                        stroke={activeService.color}
                        strokeWidth="0.6"
                        strokeOpacity="0.25"
                      />
                      <circle
                        cx="60"
                        cy="75"
                        r="9"
                        fill={`${activeService.color}20`}
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
