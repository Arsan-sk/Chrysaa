"use client";
import { useState } from 'react'
import { ArrowUp, ArrowUpRight, Check, Copy, ExternalLink, Mail, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react'
import { connectionDetails } from './siteData'

// Crisp custom SVG icons for brands
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  )
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function SiteFooter() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const handleCopy = (text: string, key: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer dark-section">
      {/* Top Banner / Status Line */}
      <div className="footer-status-bar">
        <div className="footer-status-container">
          <div className="status-badge-wrapper">
            <span className="status-ping" />
            <span className="status-text">Available for Q3/Q4 Architecture & Digital Transformation</span>
          </div>
          <div className="status-meta">
            <span>Global Remote · UTC+5:30</span>
            <span className="status-sep">/</span>
            <span>Response &lt; 4h</span>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Content */}
      <div className="footer-main-grid section-pad">
        {/* Col 1: Brand & Thesis */}
        <div className="footer-brand-col">
          <a href="#top" className="footer-brand-logo" onClick={scrollToTop}>
            CHRYSA<span>.</span>
          </a>
          <p className="footer-brand-tagline">
            Digital systems for the next version of your business.
          </p>
          <p className="footer-brand-bio">
            We architect and engineer bespoke digital platforms, AI workflows, and high-velocity web products that transform fragmented operations into unified advantage.
          </p>

          <div className="footer-cta-card">
            <div className="cta-card-header">
              <Sparkles size={14} className="cta-icon" />
              <span>Have a project in mind?</span>
            </div>
            <p className="cta-card-desc">Share your scope, challenges, or timeline.</p>
            <a href="#contact" className="footer-primary-btn">
              Start a conversation <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Col 2: Direct Inquiries & Connection Details */}
        <div className="footer-links-col">
          <p className="footer-col-title">
            <span>01</span> Direct Inquiries
          </p>
          <div className="footer-contact-cards">
            {/* Email Card */}
            <div className="contact-detail-card">
              <div className="contact-detail-top">
                <div className="contact-detail-icon">
                  <Mail size={16} />
                </div>
                <div className="contact-detail-meta">
                  <span className="contact-meta-label">{connectionDetails.email.label}</span>
                  <a
                    href={connectionDetails.email.href}
                    className="contact-meta-value"
                    aria-label="Send email to chrysadev09@gmail.com"
                  >
                    {connectionDetails.email.address}
                  </a>
                </div>
              </div>
              <div className="contact-card-actions">
                <a
                  href={connectionDetails.email.href}
                  className="contact-card-link"
                >
                  Write Email <ArrowUpRight size={12} />
                </a>
                <button
                  type="button"
                  className="contact-copy-btn"
                  onClick={(e) => handleCopy(connectionDetails.email.address, 'email', e)}
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedKey === 'email' ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedKey === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-detail-card">
              <div className="contact-detail-top">
                <div className="contact-detail-icon whatsapp-icon-wrap">
                  <WhatsAppIcon size={16} />
                </div>
                <div className="contact-detail-meta">
                  <span className="contact-meta-label">{connectionDetails.whatsapp.label}</span>
                  <a
                    href={connectionDetails.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-meta-value"
                    aria-label="Chat on WhatsApp @arsan.sk"
                  >
                    {connectionDetails.whatsapp.handle}
                  </a>
                </div>
              </div>
              <div className="contact-card-actions">
                <a
                  href={connectionDetails.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-link whatsapp-link"
                >
                  Chat on WhatsApp <ArrowUpRight size={12} />
                </a>
                <button
                  type="button"
                  className="contact-copy-btn"
                  onClick={(e) => handleCopy(connectionDetails.whatsapp.handle, 'whatsapp', e)}
                  title="Copy WhatsApp handle"
                  aria-label="Copy WhatsApp handle"
                >
                  {copiedKey === 'whatsapp' ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedKey === 'whatsapp' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Col 3: Navigation & System Index */}
        <div className="footer-links-col">
          <p className="footer-col-title">
            <span>02</span> System Index
          </p>
          <ul className="footer-nav-list">
            <li>
              <a href="#sample-works">
                <span>01</span> Products & Interfaces
              </a>
            </li>
            <li>
              <a href="#possibility">
                <span>02</span> Connected Practice
              </a>
            </li>
            <li>
              <a href="#capabilities">
                <span>03</span> Capabilities Matrix
              </a>
            </li>
            <li>
              <a href="#work">
                <span>04</span> Things We Have Made
              </a>
            </li>
            <li>
              <a href="#approach">
                <span>05</span> Transformation Path
              </a>
            </li>
            <li>
              <a href="#about">
                <span>06</span> Leadership & Team
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>07</span> Start Inquiries
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Social Ecosystem & Founder Details */}
        <div className="footer-links-col">
          <p className="footer-col-title">
            <span>03</span> Social & Practice
          </p>

          <div className="footer-social-grid">
            {/* WhatsApp */}
            <a
              href={connectionDetails.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-tile"
              aria-label="WhatsApp @arsan.sk"
            >
              <div className="social-tile-icon whatsapp-bg">
                <WhatsAppIcon size={16} />
              </div>
              <div className="social-tile-info">
                <span className="social-tile-name">WhatsApp</span>
                <span className="social-tile-handle">{connectionDetails.whatsapp.handle}</span>
              </div>
              <ArrowUpRight size={13} className="social-tile-arrow" />
            </a>

            {/* LinkedIn */}
            <a
              href={connectionDetails.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-tile"
              aria-label="LinkedIn arsan-sk"
            >
              <div className="social-tile-icon linkedin-bg">
                <LinkedinIcon size={16} />
              </div>
              <div className="social-tile-info">
                <span className="social-tile-name">LinkedIn</span>
                <span className="social-tile-handle">{connectionDetails.linkedin.handle}</span>
              </div>
              <ArrowUpRight size={13} className="social-tile-arrow" />
            </a>

            {/* GitHub */}
            <a
              href={connectionDetails.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-tile"
              aria-label="GitHub Arsan-sk"
            >
              <div className="social-tile-icon github-bg">
                <GithubIcon size={16} />
              </div>
              <div className="social-tile-info">
                <span className="social-tile-name">GitHub</span>
                <span className="social-tile-handle">{connectionDetails.github.handle}</span>
              </div>
              <ArrowUpRight size={13} className="social-tile-arrow" />
            </a>

            {/* Instagram */}
            <a
              href={connectionDetails.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-tile"
              aria-label="Instagram its.chrysa.dev"
            >
              <div className="social-tile-icon instagram-bg">
                <InstagramIcon size={16} />
              </div>
              <div className="social-tile-info">
                <span className="social-tile-name">Instagram</span>
                <span className="social-tile-handle">{connectionDetails.instagram.handle}</span>
              </div>
              <ArrowUpRight size={13} className="social-tile-arrow" />
            </a>
          </div>

          {/* Founder Portfolio Card */}
          <div className="footer-founder-card">
            <span className="founder-badge">Leadership</span>
            <div className="founder-card-body">
              <div>
                <p className="founder-name">Shaikh Mohd Arsan</p>
                <p className="founder-role">Founder & Systems Architect</p>
              </div>
              <a
                href={connectionDetails.portfolio.href}
                target="_blank"
                rel="noopener noreferrer"
                className="founder-portfolio-link"
                aria-label="Visit Founder Portfolio arsansk.vercel.app"
              >
                <span>{connectionDetails.portfolio.handle}</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-content">
          <div className="footer-bottom-left">
            <span>© 2026 CHRYSA.</span>
            <span className="footer-bottom-dot">·</span>
            <span>All rights reserved.</span>
            <span className="footer-bottom-dot">·</span>
            <span className="security-note">
              <ShieldCheck size={12} /> End-to-end engineered
            </span>
          </div>

          <div className="footer-bottom-center">
            <span className="footer-philosophy">Today → Becoming</span>
          </div>

          <div className="footer-bottom-right">
            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
