"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

type RevealDirection = "left" | "right" | "up";

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  /** Direction of the reveal curtain.
   *  "right" — reveals left→right (curtain opens to the right)
   *  "left"  — reveals right→left
   *  "up"   — reveals bottom→top (lifts up). Default "right" */
  direction?: RevealDirection;
  /** Duration in seconds. Default 1 */
  duration?: number;
  /** Delay in seconds. Default 0 */
  delay?: number;
}

/**
 * ClipReveal — image/content reveal using CSS clip-path.
 *
 * Animates from a masked state (inset) to fully visible when the element
 * scrolls into the viewport. Gives a precision "unveiling" feel that suits
 * industrial / product photography.
 *
 * Uses whileInView (motion.dev's recommended scroll-triggered approach)
 * with a custom cubic-bezier for a snappy-yet-smooth reveal.
 */
export function ClipReveal({
  children,
  className,
  direction = "right",
  duration = 1,
  delay = 0,
}: ClipRevealProps) {
  const hiddenClip = {
    left: "inset(0 100% 0 0%)",
    right: "inset(0 0% 0 100%)",
    up: "inset(100% 0% 0% 0%)",
  }[direction];

  return (
    <motion.div
      initial={{ clipPath: hiddenClip }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: [0.76, 0, 0.24, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
