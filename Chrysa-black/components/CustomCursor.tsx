"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function CustomCursor() {
  const { theme } = useTheme();
  const isDark = theme === "black";
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor], [data-magnetic]"
      );
      if (interactive) {
        setIsHovering(true);
        const cursorText = interactive.getAttribute("data-cursor") || "";
        setHoverText(cursorText);
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isDark) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x,
          y,
          zIndex: 99999,
          pointerEvents: "none",
          mixBlendMode: "difference",
        }}
        animate={{
          width: isHovering ? 64 : 12,
          height: isHovering ? 64 : 12,
          opacity: isVisible ? 1 : 0,
          translateX: isHovering ? -32 : -6,
          translateY: isHovering ? -32 : -6,
        }}
        transition={{
          width: { type: "spring", damping: 20, stiffness: 300 },
          height: { type: "spring", damping: 20, stiffness: 300 },
          opacity: { duration: 0.2 },
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: isHovering
              ? (isDark ? "rgba(232, 163, 61, 0.15)" : "rgba(232, 77, 55, 0.15)")
              : (isDark ? "#E8A33D" : "#e84d37"),
            border: isHovering ? `1px solid ${isDark ? "rgba(232, 163, 61, 0.5)" : "rgba(232, 77, 55, 0.5)"}` : "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: isHovering ? "blur(4px)" : "none",
          }}
        >
          {hoverText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: isDark ? "#E8A33D" : "#e84d37",
                fontFamily: "var(--font-body)",
              }}
            >
              {hoverText}
            </motion.span>
          )}
        </div>
      </motion.div>

      {/* Global style to hide default cursor */}
      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
