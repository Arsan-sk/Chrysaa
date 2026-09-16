"use client";
import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail, MessageSquare, Sparkles } from 'lucide-react'
import { connectionDetails } from '@shared/content/siteData'

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  )
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const handleCopy = (text: string, key: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  return (
    <section id="contact" className="final-cta dark-section section-pad">
      <div className="contact-layout">
        {/* Left Column: Headline & Direct Contact Cards */}
        <div className="contact-info-col reveal">
          <p className="kicker light">The next version starts here</p>
          <h2>
            Let's build<br />
            <em>what's next.</em>
          </h2>
          <p className="contact-lead-desc">
            Whether architecting a zero-to-one product or overhauling an existing operational pipeline, every collaboration begins with direct conversation.
          </p>

          {/* CTA Direct Contact Cards */}
          <div className="cta-direct-cards">
            {/* Email Contact Card */}
            <div className="cta-card">
              <div className="cta-card-main">
                <div className="cta-card-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="cta-card-label">Direct Email</span>
                  <a
                    href={connectionDetails.email.href}
                    className="cta-card-value"
                    aria-label="Email chrysadev09@gmail.com"
                  >
                    {connectionDetails.email.address}
                  </a>
                </div>
              </div>
              <div className="cta-card-actions">
                <a
                  href={connectionDetails.email.href}
                  className="cta-action-link"
                >
                  Write Email <ArrowUpRight size={13} />
                </a>
                <button
                  type="button"
                  className="cta-copy-btn"
                  onClick={(e) => handleCopy(connectionDetails.email.address, 'email', e)}
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedKey === 'email' ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedKey === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* WhatsApp Contact Card */}
            <div className="cta-card">
              <div className="cta-card-main">
                <div className="cta-card-icon whatsapp-accent">
                  <WhatsAppIcon size={18} />
                </div>
                <div>
                  <span className="cta-card-label">WhatsApp Direct</span>
                  <a
                    href={connectionDetails.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-card-value"
                    aria-label="Chat on WhatsApp @arsan.sk"
                  >
                    {connectionDetails.whatsapp.handle}
                  </a>
                </div>
              </div>
              <div className="cta-card-actions">
                <a
                  href={connectionDetails.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-action-link whatsapp-action"
                >
                  Message Direct <ArrowUpRight size={13} />
                </a>
                <button
                  type="button"
                  className="cta-copy-btn"
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

        {/* Right Column: Inquiry Form */}
        <div className="contact-form-col reveal">
          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
            }}
          >
            <label>
              Name
              <input name="name" required autoComplete="name" placeholder="Your name or company" />
            </label>
            <label>
              What are you trying to improve, build or change?
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Describe your current system or upcoming initiative..."
              />
            </label>
            <label>
              What best describes the next step?
              <select name="intent" defaultValue="not-sure">
                <option value="new">Build something new</option>
                <option value="existing">Improve an existing experience</option>
                <option value="automation">Automate a process</option>
                <option value="ai">Introduce AI</option>
                <option value="growth">Improve customer acquisition</option>
                <option value="internal">Build an internal system</option>
                <option value="not-sure">I'm not sure yet</option>
              </select>
            </label>
            <button className="large-link" type="submit">
              {submitted ? 'Message ready to send' : 'Start the conversation'} <ArrowUpRight size={22} />
            </button>
            {submitted && (
              <p className="form-status" role="status">
                Thanks. Your inquiry is received. We'll be in touch within 4 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
