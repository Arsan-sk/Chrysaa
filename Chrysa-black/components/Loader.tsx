"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"morph" | "text" | "exit">("morph");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("text"), 800);
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    const t3 = setTimeout(() => onComplete(), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        className="loader-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "exit" ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0A08",
          pointerEvents: phase === "exit" ? "none" : "all",
        }}
      >
        {/* Cocoon SVG morph */}
        <motion.svg
          viewBox="0 0 200 200"
          width="120"
          height="120"
          style={{ position: "absolute" }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: phase === "text" ? 0 : 1,
            scale: phase === "text" ? 0.5 : 1,
            rotate: phase === "text" ? 90 : 0,
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.path
            d="M100,20 C140,20 170,50 175,90 C180,130 160,170 120,180 C80,190 40,170 30,130 C20,90 40,40 80,25 C85,23 92,20 100,20Z"
            fill="none"
            stroke="#E8A33D"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.path
            d="M100,40 C130,42 150,65 152,90 C155,120 140,150 115,158 C90,165 60,150 50,125 C40,100 55,60 85,45 C90,42 95,40 100,40Z"
            fill="none"
            stroke="#E8A33D"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          />
        </motion.svg>

        {/* CHRYSA text reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: phase === "text" || phase === "exit" ? 1 : 0,
            y: phase === "text" || phase === "exit" ? 0 : 20,
          }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#F5F1E8",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          {"CHRYSA".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: phase !== "morph" ? 1 : 0,
                y: phase !== "morph" ? 0 : 30,
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtle tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "text" ? 0.4 : 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            position: "absolute",
            bottom: "30%",
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#8A8578",
          }}
        >
          From potential to presence
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
