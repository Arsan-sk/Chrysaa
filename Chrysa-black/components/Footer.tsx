"use client";
import { motion } from "framer-motion";
import { navLinks, services } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}

export default function Footer() {
  const marqueeItems = [
    "FROM POTENTIAL TO PRESENCE",
    "•",
    "WE BUILD WHAT YOU ARE CAPABLE OF BECOMING",
    "•",
    "CHRYSA STUDIO",
    "•",
    "METAMORPHOSIS IN CODE & DESIGN",
    "•",
  ];

  return (
    <footer className="footer-container">
      {/* Infinite Top Banner Marquee */}
      <div className="footer-marquee-strip">
        <motion.div
          className="footer-marquee-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, index) => (
              <span
                key={index}
                className={item === "•" ? "footer-marquee-dot" : "footer-marquee-text"}
              >
                {item}
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* Main Footer Body */}
      <div className="section-container footer-body">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <span className="footer-logo-title">CHRYSA</span>
              <span className="footer-logo-sub">Transformation Studio</span>
            </div>
            <p className="footer-bio">
              We exist to help businesses move from what they are today to what they are capable of becoming. Crafting bespoke websites, robust web applications, AI systems, and scalable digital infrastructure.
            </p>
            <div className="footer-socials">
              <a
                href="https://github.com/Arsan-sk"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                data-cursor="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com/in/arsan-sk"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                data-cursor="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.instagram.com/its.chrysa.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                data-cursor="Instagram"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/arsan.sk"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                data-cursor="WhatsApp"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="footer-link">
                  Contact Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="footer-col">
            <h4 className="footer-col-title">Key Capabilities</h4>
            <ul className="footer-links">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="footer-link">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Inquiries */}
          <div className="footer-col">
            <h4 className="footer-col-title">Direct Inquiries</h4>
            <p className="footer-contact-text">
              Direct connection with Chrysa Studio:
            </p>
            <a
              href="mailto:chrysadev09@gmail.com"
              className="footer-email-link"
              data-cursor="Write"
            >
              <span>chrysadev09@gmail.com</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href="https://wa.me/arsan.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-email-link"
              style={{ marginTop: "0.5rem" }}
              data-cursor="WhatsApp"
            >
              <span>WhatsApp: @arsan.sk</span>
              <ArrowUpRight size={16} />
            </a>
            <div className="footer-badge">
              <span className="pulse-dot" />
              <span>Available for New Projects</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} CHRYSA Studio. All rights reserved.
          </div>
          <div className="footer-meta">
            <span>Designed &amp; Engineered with Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
