"use client";

interface CountUpProps {
  /** Target number to count to */
  end: number;
  /** Optional suffix (e.g. "+", "K") */
  suffix?: string;
  /** Duration in seconds (ignored in static version) */
  duration?: number;
  className?: string;
}

/**
 * Static CountUp component - renders the final value immediately without counting animations
 */
export function CountUp({
  end,
  suffix = "",
  className,
}: CountUpProps) {
  return (
    <span className={className}>
      {end}
      {suffix}
    </span>
  );
}
