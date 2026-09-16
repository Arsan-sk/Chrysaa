"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { navLinks } from "@/lib/data";
import MagneticButton from "./MagneticButton";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 150);
    setScrolled(latest > 50);
  });

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <motion.header
        className="nav-header"
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <nav
          className="nav-container"
          style={{
            backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(0px)",
            background: scrolled
              ? "rgba(11, 10, 8, 0.7)"
              : "transparent",
            borderColor: scrolled
              ? "rgba(245, 241, 232, 0.06)"
              : "transparent",
          }}
        >
          {/* Logo */}
          <a href="#" className="nav-logo" data-cursor="">
            <span className="nav-logo-text">CHRYSA</span>
            <span className="nav-logo-tagline">From potential to presence</span>
          </a>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link" data-cursor="">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger + ThemeToggle */}
          <div className="nav-actions flex items-center gap-3">
            <ThemeToggle variant="dark" />

            <MagneticButton
              href="#contact"
              className="nav-cta"
              data-cursor=""
            >
              Start a Project
            </MagneticButton>

            <button
              className="nav-hamburger"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              data-cursor=""
            >
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 6 : 0,
                }}
                className="hamburger-line"
              />
              <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="hamburger-line"
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -6 : 0,
                }}
                className="hamburger-line"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="mobile-menu-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="mobile-menu-link"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mobile-link-number">0{i + 1}</span>
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}
              >
                <ThemeToggle variant="dark" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{ marginTop: "1.5rem" }}
              >
                <a
                  href="#contact"
                  className="nav-cta mobile-cta"
                  onClick={() => setIsOpen(false)}
                >
                  Start a Project
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
