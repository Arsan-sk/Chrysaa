"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { faqItems } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">
            <span className="label-dot" />
            <span>Clarity & Answers</span>
          </div>
          <h2 className="section-title">
            <span className="text-cream">Frequently Asked</span>{" "}
            <span className="text-gold italic">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about working with Chrysa, our turnaround times, and delivery standards.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  data-cursor="Toggle"
                >
                  <span className="faq-question-text">{item.question}</span>
                  <motion.div
                    className="faq-icon-wrapper"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <ChevronDown size={20} strokeWidth={1.75} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                      className="faq-answer-container"
                    >
                      <div className="faq-answer-content">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
