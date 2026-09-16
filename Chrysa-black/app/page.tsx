"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import BlackApp from "@/components/BlackApp";
import WhiteApp from "@/components/white/WhiteApp";

export default function Home() {
  const { theme } = useTheme();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {theme === "black" ? (
        <motion.div
          key="black-theme-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="w-full min-h-screen bg-[#0B0A08]"
          style={{ transform: "none", filter: "none" }}
        >
          <BlackApp />
        </motion.div>
      ) : (
        <motion.div
          key="white-theme-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="w-full min-h-screen bg-[#f2f0eb]"
          style={{ transform: "none", filter: "none" }}
        >
          <WhiteApp />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
