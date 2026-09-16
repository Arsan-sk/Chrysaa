"use client";
import { useRef, useCallback } from "react";

interface MagneticOptions {
  strength?: number;
  radius?: number;
}

export function useMagnetic(options: MagneticOptions = {}) {
  const { strength = 0.3, radius = 150 } = options;
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const dist = Math.sqrt(distX * distX + distY * distY);

      if (dist < radius) {
        const pullX = distX * strength;
        const pullY = distY * strength;
        ref.current.style.transform = `translate(${pullX}px, ${pullY}px)`;
      }
    },
    [strength, radius]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
    setTimeout(() => {
      if (ref.current) {
        ref.current.style.transition = "";
      }
    }, 500);
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
