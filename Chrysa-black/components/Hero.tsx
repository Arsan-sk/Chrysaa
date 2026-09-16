"use client";
import { useRef, useEffect, useCallback, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowRight, Compass } from "lucide-react";

function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const animRef = useRef<number | undefined>(undefined);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    type Shape = "tri" | "hex" | "dia" | "orb";
    interface P {
      x: number;
      y: number;
      s: number;
      vx: number;
      vy: number;
      o: number;
      sh: Shape;
      r: number;
      rv: number;
    }

    const pts: P[] = [];
    const shapes: Shape[] = ["tri", "hex", "dia", "orb"];
    const n = w < 768 ? 20 : 40;

    for (let i = 0; i < n; i++) {
      pts.push({
        x: Math.random() * w,
        y: Math.random() * h,
        s: Math.random() * 4.5 + 1.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.3 + 0.08,
        sh: shapes[Math.floor(Math.random() * shapes.length)],
        r: Math.random() * Math.PI * 2,
        rv: (Math.random() - 0.5) * 0.015,
      });
    }

    function loop() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const m = mouseRef.current;
      m.x += (m.tx - m.x) * 0.05;
      m.y += (m.ty - m.y) * 0.05;

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(232, 163, 61, ${(1 - d / 120) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.r += p.rv;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const dx = m.x - p.x;
        const dy = m.y - p.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        let px = p.x;
        let py = p.y;
        if (d < 200 && d > 0) {
          const f = (1 - d / 200) * 30;
          px -= (dx / d) * f;
          py -= (dy / d) * f;
        }

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(p.r);
        ctx.globalAlpha = p.o;
        ctx.strokeStyle = "#E8A33D";
        ctx.fillStyle = "rgba(232, 163, 61, 0.06)";
        ctx.lineWidth = 0.6;

        if (p.sh === "tri") {
          ctx.beginPath();
          ctx.moveTo(0, -p.s * 2.2);
          ctx.lineTo(-p.s * 1.8, p.s * 1.5);
          ctx.lineTo(p.s * 1.8, p.s * 1.5);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
        } else if (p.sh === "hex") {
          ctx.beginPath();
          for (let j = 0; j < 6; j++) {
            const a = (Math.PI / 3) * j;
            const hx = Math.cos(a) * p.s * 2;
            const hy = Math.sin(a) * p.s * 2;
            j === 0 ? ctx.moveTo(hx, hy) : ctx.lineTo(hx, hy);
          }
          ctx.closePath();
          ctx.stroke();
        } else if (p.sh === "dia") {
          ctx.beginPath();
          ctx.moveTo(0, -p.s * 2.2);
          ctx.lineTo(p.s * 1.5, 0);
          ctx.lineTo(0, p.s * 2.2);
          ctx.lineTo(-p.s * 1.5, 0);
          ctx.closePath();
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.s, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(232, 163, 61, 0.35)";
          ctx.fill();
        }
        ctx.restore();
      });
      animRef.current = requestAnimationFrame(loop);
    }
    loop();
  }, []);

  useEffect(() => {
    init();
    const onMove = (e: MouseEvent) => {
      mouseRef.current.tx = e.clientX;
      mouseRef.current.ty = e.clientY;
    };
    const onResize = () => init();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  };

  return (
    <section
      ref={ref}
      className="hero-section"
      id="hero"
      onMouseMove={handleMouseMove}
    >
      {/* Background Layer 1: Perspective Grid Floor */}
      <div className="hero-grid-perspective" />

      {/* Background Layer 2: Metamorphosis Ring & Aura */}
      <div className="hero-metamorphosis-center">
        <motion.div
          className="hero-glow-core"
          animate={{
            scale: [1, 1.25, 0.95, 1],
            opacity: [0.2, 0.35, 0.16, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="hero-rings-wrapper">
          <motion.div
            className="hero-ring ring-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
          />
          <motion.div
            className="hero-ring ring-2"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ x: mousePos.x * -0.3, y: mousePos.y * -0.3 }}
          />
          <motion.div
            className="hero-ring ring-3"
            animate={{ rotate: 180 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
          />
        </div>
      </div>

      {/* Interactive Constellation Particle Canvas */}
      <ConstellationCanvas />

      {/* Clean, High-Contrast Hero Card Scrim */}
      <motion.div className="hero-content" style={{ opacity, scale, y }}>
        {/* Minimal Pill Badge */}
        <motion.div
          className="hero-badge-clean"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="badge-clean-dot" />
          <span>CHRYSA STUDIO</span>
        </motion.div>

        {/* Clean, High-Contrast, Crystal-Clear Headline */}
        <motion.h1
          className="hero-title-clean"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          Moving businesses from{" "}
          <br className="hidden sm:inline" />
          what they are today to what they&apos;re{" "}
          <span className="hero-highlight-gold">capable of becoming.</span>
        </motion.h1>

        {/* Single Readable Subtitle */}
        <motion.p
          className="hero-desc-clean"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          We engineer high-performance web applications, scalable SaaS platforms, and AI systems for ambitious companies.
        </motion.p>

        {/* Clean Action Buttons */}
        <motion.div
          className="hero-actions-clean"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <MagneticButton
            href="#contact"
            className="btn-primary hero-btn-main"
            data-cursor="Start"
          >
            <span>Start a Project</span>
            <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton
            href="#sample-work"
            className="btn-secondary hero-btn-sub"
            data-cursor="Explore"
          >
            <Compass size={16} />
            <span>Our Work</span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <motion.div
          className="scroll-line"
          animate={{ scaleY: [0, 1, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
