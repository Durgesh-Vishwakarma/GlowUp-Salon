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

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.33, 1, 0.68, 1] }}
      className={className}
      style={{ display: "inline-block" }}
    >
      {text}
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
        initial={{ scale: 1.1, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        transition={{ duration: 1.2, delay: delay, ease: [0.33, 1, 0.68, 1] }}
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
