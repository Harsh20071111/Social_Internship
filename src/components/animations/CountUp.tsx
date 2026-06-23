"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  /** Target number to count to */
  end: number;
  /** Optional suffix (e.g. "+", "K") */
  suffix?: string;
  /** Duration in seconds. Default 2 */
  duration?: number;
  className?: string;
}

/**
 * CountUp — animates a number from 0 → end when the element scrolls into view.
 *
 * Uses useInView (motion.dev) with once:true so it only fires once.
 * Easing is cubic-out for a natural deceleration feel.
 */
export function CountUp({
  end,
  suffix = "",
  duration = 2,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const startValue = 0;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Ease out cubic — starts fast, decelerates
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + (end - startValue) * eased);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
