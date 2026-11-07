"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "black";
  const [isFlipping, setIsFlipping] = useState(false);

  const handleMobileClick = () => {
    setIsFlipping(true);
    toggleTheme();
    setTimeout(() => {
      setIsFlipping(false);
    }, 650);
  };

  return (
    <div className={`theme-toggle-container relative inline-flex items-center ${className}`}>
      {/* ========================================================
          DESKTOP VIEW (md+):
          Dual-icon track with generous left/right padding and a
          sliding color circle indicator behind the active icon.
          ======================================================== */}
      <div
        className={`hidden md:inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-all duration-300 ${
          isDark
            ? "bg-[#141310]/85 border border-[#F5F1E8]/12 text-[#F5F1E8] shadow-[0_2px_14px_rgba(0,0,0,0.5)]"
            : "bg-white/90 border border-[#141311]/12 text-[#141311] shadow-[0_2px_14px_rgba(0,0,0,0.08)]"
        }`}
        role="group"
        aria-label="Theme selector"
      >
        {/* Day / Sun Option */}
        <button
          type="button"
          onClick={() => {
            if (isDark) toggleTheme();
          }}
          className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-200 focus:outline-none ${
            !isDark ? "text-white" : "text-[#F5F1E8]/50 hover:text-[#F5F1E8]"
          }`}
          aria-label="Switch to Day mode"
          title="Day Theme (Light)"
        >
          {!isDark && (
            <motion.div
              layoutId="desktop-active-circle"
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D97706] to-[#F59E0B] shadow-[0_2px_10px_rgba(217,119,6,0.4)]"
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            />
          )}
          <Sun size={15} strokeWidth={2.4} className="relative z-10" />
        </button>

        {/* Night / Moon Option */}
        <button
          type="button"
          onClick={() => {
            if (!isDark) toggleTheme();
          }}
          className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-200 focus:outline-none ${
            isDark ? "text-[#0B0A08]" : "text-[#141311]/50 hover:text-[#141311]"
          }`}
          aria-label="Switch to Night mode"
          title="Night Theme (Dark)"
        >
          {isDark && (
            <motion.div
              layoutId="desktop-active-circle"
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E8A33D] to-[#F5BE6B] shadow-[0_0_14px_rgba(232,163,61,0.5)]"
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            />
          )}
          <Moon size={15} strokeWidth={2.4} className="relative z-10" />
        </button>
      </div>

      {/* ========================================================
          MOBILE VIEW (< md):
          Single coin icon with generous touch target and
          a realistic 3D coin-flip hop and rotation animation on click.
          ======================================================== */}
      <div className="flex md:hidden items-center px-1">
        <button
          type="button"
          onClick={handleMobileClick}
          className="relative h-10 w-10 rounded-full focus:outline-none"
          style={{ perspective: 1000 }}
          aria-label={`Switch to ${isDark ? "Day" : "Night"} mode`}
          title={`Currently ${isDark ? "Night" : "Day"} mode. Tap to flip coin to ${isDark ? "Day" : "Night"}`}
        >
          <motion.div
            className="relative h-full w-full rounded-full"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateY: isDark ? 0 : 180,
              y: isFlipping ? [-1, -14, 0] : 0,
              scale: isFlipping ? [1, 1.15, 1] : 1,
            }}
            transition={{
              rotateY: { type: "spring", stiffness: 280, damping: 22 },
              y: { duration: 0.55, times: [0, 0.45, 1], ease: "easeInOut" },
              scale: { duration: 0.55, times: [0, 0.45, 1], ease: "easeInOut" },
            }}
          >
            {/* FRONT FACE OF COIN (Night / Moon) */}
            <div
              className="absolute inset-0 flex items-center justify-center rounded-full border-2 border-[#E8A33D]/70 bg-gradient-to-br from-[#201D17] to-[#0D0C0A] text-[#E8A33D] shadow-[0_0_12px_rgba(232,163,61,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)]"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <Moon size={17} strokeWidth={2.3} className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
              {/* Inner minted rim */}
              <div className="pointer-events-none absolute inset-[2px] rounded-full border border-[#E8A33D]/30" />
            </div>

            {/* BACK FACE OF COIN (Day / Sun) - Pre-rotated by 180deg */}
            <div
              className="absolute inset-0 flex items-center justify-center rounded-full border-2 border-[#D97706]/75 bg-gradient-to-br from-[#FFFDF9] to-[#F5EFE6] text-[#D97706] shadow-[0_4px_12px_rgba(217,119,6,0.25),inset_0_1px_2px_rgba(255,255,255,0.9)]"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <Sun size={18} strokeWidth={2.3} className="drop-shadow-[0_1px_2px_rgba(217,119,6,0.25)]" />
              {/* Inner minted rim */}
              <div className="pointer-events-none absolute inset-[2px] rounded-full border border-[#D97706]/35" />
            </div>
          </motion.div>
        </button>
      </div>
    </div>
  );
}
