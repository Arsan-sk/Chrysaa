"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function ThemeToggle({ variant = "dark", className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "black";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle group relative inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A33D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0A08] ${
        variant === "dark"
          ? "bg-[#141310]/80 border border-[#F5F1E8]/10 text-[#F5F1E8]/80 hover:text-white hover:border-[#E8A33D]/40 hover:bg-[#1B1915] hover:shadow-[0_0_15px_rgba(232,163,61,0.15)]"
          : "bg-[#e7e4dc]/80 border border-[#1b1d1c]/15 text-[#1b1d1c]/80 hover:text-[#1b1d1c] hover:border-[#e84d37]/40 hover:bg-[#dedad0] hover:shadow-[0_0_15px_rgba(232,77,55,0.12)]"
      } ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? "Day" : "Night"} theme`}
    >
      <div className="relative flex h-4 w-4 items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-[#E8A33D]"
            >
              <Sun size={15} strokeWidth={2.2} />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-[#1b1d1c]"
            >
              <Moon size={14} strokeWidth={2.2} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <span className="font-mono text-[11px] uppercase select-none">
        {isDark ? "Day" : "Night"}
      </span>

      {/* Subtle indicator dot */}
      <span
        className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
          isDark
            ? "bg-[#E8A33D] group-hover:shadow-[0_0_6px_#E8A33D]"
            : "bg-[#e84d37] group-hover:shadow-[0_0_6px_#e84d37]"
        }`}
      />
    </button>
  );
}
