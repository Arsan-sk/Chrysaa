"use client";
import { useRef, useCallback, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  strength?: number;
  style?: React.CSSProperties;
  "data-cursor"?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  strength = 0.3,
  style,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = (e.clientX - centerX) * strength;
      const distY = (e.clientY - centerY) * strength;
      ref.current.style.transform = `translate(${distX}px, ${distY}px)`;
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transition =
      "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
    ref.current.style.transform = "translate(0px, 0px)";
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = "";
    }, 500);
  }, []);

  const Component = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-magnetic="true"
      style={{ display: "inline-block", ...style }}
      whileTap={{ scale: 0.95 }}
    >
      <Component
        className={className}
        onClick={onClick}
        href={href}
        data-cursor={props["data-cursor"]}
        style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
      >
        {children}
      </Component>
    </motion.div>
  );
}
