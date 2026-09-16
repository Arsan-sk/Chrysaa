"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { founders } from "@/lib/data";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}

const socialIcons: Record<string, React.ElementType> = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
  portfolio: ExternalLink,
};

function FounderCard({
  founder,
  index,
}: {
  founder: (typeof founders)[0];
  index: number;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x: y, y: x });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      className="founder-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.2,
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
    >
      {/* Photo area */}
      <div className="founder-photo">
        <div className="founder-photo-placeholder">
          <span className="founder-initial">{founder.name[0]}</span>
          <div className="founder-photo-overlay" />
        </div>
        {/* Subtle geometric decoration */}
        <div className="founder-decoration">
          <svg viewBox="0 0 100 100" className="decoration-svg">
            <circle cx="50" cy="50" r="48" fill="none" stroke="#E8A33D" strokeWidth="0.5" opacity="0.3" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#E8A33D" strokeWidth="0.3" opacity="0.2" />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="founder-info">
        <h3 className="founder-name">{founder.fullName}</h3>
        <p className="founder-role">{founder.role}</p>
        <p className="founder-bio">{founder.bio}</p>

        {/* Social Links */}
        <div className="founder-socials">
          {Object.entries(founder.socials).map(([platform, url]) => {
            if (!url || url === "#") return null;
            const Icon = socialIcons[platform] || ExternalLink;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                data-cursor=""
                aria-label={platform}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function Founders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="founders" className="founders-section" ref={ref}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">
            <span className="label-dot" />
            <span>The Team</span>
          </div>
          <h2 className="section-title">
            <span className="text-cream">The minds behind the</span>{" "}
            <span className="text-gold italic">metamorphosis</span>
          </h2>
          <p className="section-subtitle">
            Two builders with a shared vision — creating digital experiences
            that transform businesses.
          </p>
        </motion.div>

        <div className="founders-grid">
          {founders.map((founder, i) => (
            <FounderCard key={founder.name} founder={founder} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
