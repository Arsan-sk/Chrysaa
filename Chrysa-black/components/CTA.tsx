"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Send, CheckCircle2, MessageCircle, Mail, MapPin } from "lucide-react";

export default function CTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Websites & Web Applications",
    budget: "$1,000 - $3,000",
    message: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Allow reset after a while
      setFormData({
        name: "",
        email: "",
        service: "Websites & Web Applications",
        budget: "$1,000 - $3,000",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="cta-section" ref={ref}>
      <div className="section-container">
        {/* Glow ambient background */}
        <div className="cta-glow-orb" />

        <div className="cta-grid">
          {/* Left Column: Heading & Connection Details */}
          <motion.div
            className="cta-left"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="section-eyebrow">
              <span className="label-dot" />
              <span>Begin Your Metamorphosis</span>
            </div>

            <h2 className="cta-headline">
              Ready to <span className="text-gold italic">evolve</span> your digital presence?
            </h2>

            <p className="cta-description">
              Tell us about your challenges, vision, and roadmap. We respond within 24 hours with an actionable plan of attack.
            </p>

            <div className="cta-contact-cards">
              <a
                href="mailto:chrysadev09@gmail.com"
                className="contact-card"
                data-cursor="Email"
              >
                <div className="contact-card-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact-card-label">Direct Mail</div>
                  <div className="contact-card-value">chrysadev09@gmail.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/arsan.sk"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                data-cursor="WhatsApp"
              >
                <div className="contact-card-icon" style={{ color: "#34D399" }}>
                  <MessageCircle size={18} />
                </div>
                <div>
                  <div className="contact-card-label">Instant WhatsApp</div>
                  <div className="contact-card-value">@arsan.sk</div>
                </div>
              </a>

              <div className="contact-card">
                <div className="contact-card-icon" style={{ color: "#38BDF8" }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="contact-card-label">Headquarters</div>
                  <div className="contact-card-value">Mumbai &amp; Global Remote</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            className="cta-right"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="cta-form-container">
              {formSubmitted ? (
                <motion.div
                  className="form-success-state"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle2 size={56} className="text-gold mb-4" />
                  <h3 className="text-2xl font-serif text-cream mb-2">Message Received</h3>
                  <p className="text-stone text-sm max-w-sm text-center">
                    Thank you! Arsan and the Chrysa team have received your project inquiry. We&apos;ll review your requirements and get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="cta-form">
                  <div className="form-group-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="client-name">Your Name</label>
                      <input
                        id="client-name"
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="client-email">Email Address</label>
                      <input
                        id="client-email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="client-service">Service Required</label>
                      <select
                        id="client-service"
                        className="form-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option>Websites &amp; Web Applications</option>
                        <option>SaaS Development</option>
                        <option>AI Integrations &amp; Experiences</option>
                        <option>UI/UX &amp; Branding</option>
                        <option>Automation &amp; Dashboards</option>
                        <option>Digital Transformation Consulting</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="client-budget">Estimated Budget</label>
                      <select
                        id="client-budget"
                        className="form-select"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option>&lt; $1,000 (Starter / Landing)</option>
                        <option>$1,000 - $3,000 (Growth / Custom App)</option>
                        <option>$3,000 - $10,000 (Full SaaS / AI System)</option>
                        <option>$10,000+ (Enterprise Overhaul)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="client-message">Project Scope &amp; Goals</label>
                    <textarea
                      id="client-message"
                      rows={4}
                      required
                      placeholder="Briefly describe your vision, goals, or what needs transformation..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="form-submit-row">
                    <MagneticButton
                      className="btn-primary form-submit-btn"
                      data-cursor="Send"
                    >
                      <span>Send Project Inquiry</span>
                      <Send size={16} />
                    </MagneticButton>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
