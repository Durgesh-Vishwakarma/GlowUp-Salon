"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

/* -------------------------------------------------------------------------- */
/*                                REVEAL TEXT                                 */
/* -------------------------------------------------------------------------- */
interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RevealText({ text, className = "", delay = 0 }: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap", margin: 0, padding: 0 }}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={index}
          style={{ overflow: "hidden", display: "inline-block", marginRight: "0.25em" }}
          aria-hidden="true"
        >
          <motion.span variants={child} style={{ display: "inline-block" }}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* -------------------------------------------------------------------------- */
/*                               IMAGE REVEAL                                 */
/* -------------------------------------------------------------------------- */
interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ImageReveal({ children, className = "", delay = 0 }: ImageRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "0%" }}
        animate={isInView ? { y: "-100%" } : { y: "0%" }}
        transition={{ duration: 1.2, delay: delay, ease: [0.77, 0, 0.175, 1] }}
        className="absolute inset-0 z-20 bg-[#F7F3EF]"
      />
      <motion.div
        initial={{ scale: 1.15 }}
        animate={isInView ? { scale: 1 } : { scale: 1.15 }}
        transition={{ duration: 1.4, delay: delay, ease: [0.77, 0, 0.175, 1] }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              EYEBROW REVEAL                                */
/* -------------------------------------------------------------------------- */
export function EyebrowReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, letterSpacing: "0em" }}
      animate={isInView ? { opacity: 1, letterSpacing: "0.15em" } : { opacity: 0, letterSpacing: "0em" }}
      transition={{ duration: 1, delay: delay, ease: "easeOut" }}
      className={`tracking-[0.15em] ${className}`}
      style={{ display: "inline-block" }}
    >
      {text}
    </motion.span>
  );
}
