"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

/* ─── FadeUp ─────────────────────────────────────────────────────────────
   Fades in + slides up when the element enters the viewport.
   Uses whileInView — motion.dev's recommended approach for scroll-triggered
   entrance animations. Viewport trigger runs once.
───────────────────────────────────────────────────────────────────────── */
interface FadeUpProps {
  children: ReactNode;
  className?: string;
  /** Y offset in px at animation start. Default 40 */
  y?: number;
  /** Delay before animation starts (seconds). Default 0 */
  delay?: number;
  /** Animation duration (seconds). Default 0.6 */
  duration?: number;
}

export function FadeUp({
  children,
  className,
  y = 40,
  delay = 0,
  duration = 0.6,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── FadeIn ──────────────────────────────────────────────────────────────
   Fades in (optionally with a scale up) when the element enters the viewport.
───────────────────────────────────────────────────────────────────────── */
interface FadeInProps {
  children: ReactNode;
  className?: string;
  /** Starting scale value. Default 1 (no scale) */
  startScale?: number;
  /** Delay before animation starts (seconds). Default 0 */
  delay?: number;
  /** Animation duration (seconds). Default 0.6 */
  duration?: number;
}

export function FadeIn({
  children,
  className,
  startScale = 1,
  delay = 0,
  duration = 0.6,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: startScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerContainer ────────────────────────────────────────────────────
   Parent wrapper that triggers staggered entrance animations on children.
   Wrap a set of StaggerItem children inside this component.
───────────────────────────────────────────────────────────────────────── */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  /** Delay between each child's animation (seconds). Default 0.1 */
  staggerDelay?: number;
  /** Delay before the first child animates (seconds). Default 0 */
  delay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  delay = 0,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerItem ─────────────────────────────────────────────────────────
   Child element within a StaggerContainer. Animates in when the container
   triggers. Supports directional entrance: "up" (default), "left", "right".
───────────────────────────────────────────────────────────────────────── */
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  /** Entrance direction. Default "up" */
  direction?: "up" | "left" | "right";
  /** Distance in px. Default 24 */
  distance?: number;
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 24,
}: StaggerItemProps) {
  const hidden = {
    opacity: 0,
    ...(direction === "up" && { y: distance }),
    ...(direction === "left" && { x: -distance }),
    ...(direction === "right" && { x: distance }),
  };

  return (
    <motion.div
      variants={{
        hidden,
        visible: { opacity: 1, y: 0, x: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── SlideLeft ────────────────────────────────────────────────────────────
   Content slides in from the left when entering the viewport.
   Good for image + text sections where content enters from one side.
───────────────────────────────────────────────────────────────────────── */
interface SlideLeftProps {
  children: ReactNode;
  className?: string;
  /** Distance in px. Default 60 */
  distance?: number;
  /** Delay in seconds. Default 0 */
  delay?: number;
  /** Duration in seconds. Default 0.6 */
  duration?: number;
}

export function SlideLeft({
  children,
  className,
  distance = 60,
  delay = 0,
  duration = 0.6,
}: SlideLeftProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -distance }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── SlideRight ───────────────────────────────────────────────────────────
   Content slides in from the right when entering the viewport.
───────────────────────────────────────────────────────────────────────── */
interface SlideRightProps {
  children: ReactNode;
  className?: string;
  /** Distance in px. Default 60 */
  distance?: number;
  /** Delay in seconds. Default 0 */
  delay?: number;
  /** Duration in seconds. Default 0.6 */
  duration?: number;
}

export function SlideRight({
  children,
  className,
  distance = 60,
  delay = 0,
  duration = 0.6,
}: SlideRightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: distance }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Parallax Layer ──────────────────────────────────────────────────
   Moves an element at a different speed than the scroll.
   `speed` controls the intensity:
     speed > 0 → moves slower than scroll (background feel)
     speed < 0 → moves against scroll (foreground pop)
──────────────────────────────────────────────────────────────────────── */
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Parallax multiplier. 0.5 = half scroll speed. -0.2 = slight counter-scroll */
  speed?: number;
}

export function Parallax({
  children,
  className,
  speed = 0.5,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
