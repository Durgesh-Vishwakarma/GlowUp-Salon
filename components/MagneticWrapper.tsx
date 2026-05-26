"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticWrapperProps {
  children: ReactNode;
  className?: string;
  strength?: number; // How far the element is pulled (default: 30)
}

export function MagneticWrapper({ children, className = "", strength = 20 }: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const boundingRect = ref.current?.getBoundingClientRect();
    if (!boundingRect) return;

    const { height, width, left, top } = boundingRect;
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX * (strength / 100), y: middleY * (strength / 100) });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.div>
  );
}
