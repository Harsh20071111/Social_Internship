"use client";

import { type ReactNode } from "react";

/* ─── Static FadeUp ────────────────────────────────────────────────────────
   Renders children immediately without opacity changes or scroll animations.
───────────────────────────────────────────────────────────────────────── */
interface FadeUpProps {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
}

export function FadeUp({
  children,
  className,
}: FadeUpProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

/* ─── Static FadeIn ────────────────────────────────────────────────────────
   Renders children immediately without scale or opacity transitions.
───────────────────────────────────────────────────────────────────────── */
interface FadeInProps {
  children: ReactNode;
  className?: string;
  startScale?: number;
  delay?: number;
  duration?: number;
}

export function FadeIn({
  children,
  className,
}: FadeInProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

/* ─── Static StaggerContainer ─────────────────────────────────────────────
   Simple wrapper for children.
───────────────────────────────────────────────────────────────────────── */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}

export function StaggerContainer({
  children,
  className,
}: StaggerContainerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

/* ─── Static StaggerItem ───────────────────────────────────────────────────
   Simple wrapper for items.
───────────────────────────────────────────────────────────────────────── */
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  distance?: number;
}

export function StaggerItem({
  children,
  className,
}: StaggerItemProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

/* ─── Static SlideLeft ─────────────────────────────────────────────────────
   Renders children statically without slide or opacity transitions.
───────────────────────────────────────────────────────────────────────── */
interface SlideLeftProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  delay?: number;
  duration?: number;
}

export function SlideLeft({
  children,
  className,
}: SlideLeftProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

/* ─── Static SlideRight ────────────────────────────────────────────────────
   Renders children statically without slide or opacity transitions.
───────────────────────────────────────────────────────────────────────── */
interface SlideRightProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  delay?: number;
  duration?: number;
}

export function SlideRight({
  children,
  className,
}: SlideRightProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

/* ─── Static Parallax ─────────────────────────────────────────────────────
   Renders children without dynamic vertical translations or scroll offsets.
───────────────────────────────────────────────────────────────────────── */
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({
  children,
  className,
}: ParallaxProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
