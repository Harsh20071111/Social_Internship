"use client";

import { type ReactNode } from "react";

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up";
  duration?: number;
  delay?: number;
}

/**
 * Static ClipReveal component - renders children immediately without animations
 */
export function ClipReveal({
  children,
  className,
}: ClipRevealProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
