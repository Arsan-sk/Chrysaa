"use client";
import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  style?: React.CSSProperties;
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  staggerChildren = 0.03,
  tag: Tag = "h1",
  style,
}: AnimatedTextProps) {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerChildren * 3,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren,
      },
    },
  };

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -40,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 150,
      },
    },
  };

  return (
    <Tag className={className} style={{ ...style, perspective: "1000px" }}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        style={{ display: "inline" }}
      >
        {words.map((word, wi) => (
          <motion.span
            key={wi}
            variants={wordVariants}
            style={{
              display: "inline-block",
              marginRight: "0.3em",
              whiteSpace: "nowrap",
            }}
          >
            {word.split("").map((char, ci) => (
              <motion.span
                key={ci}
                variants={charVariants}
                style={{
                  display: "inline-block",
                  willChange: "transform, opacity, filter",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
