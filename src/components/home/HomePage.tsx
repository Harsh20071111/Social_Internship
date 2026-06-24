"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Factory,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { PuckFooter } from "@/components/layout/PuckChrome";

type FeaturePanelProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  imagePosition: string;
  icon: LucideIcon;
  tone: "light" | "dark";
  headingLevel: "h1" | "h2";
  align?: "left" | "right";
  overlayColor?: string;
  overlayOpacity?: number;
};

function FeaturePanel({
  eyebrow,
  title,
  description,
  cta,
  href,
  image,
  imagePosition,
  icon: Icon,
  tone,
  headingLevel,
  align = "left",
  overlayColor,
  overlayOpacity,
}: FeaturePanelProps) {
  const isDark = tone === "dark";
  const Heading = headingLevel;
  const isRightAligned = align === "right";

  return (
    <div className="block snap-start relative min-h-svh overflow-hidden border-b border-white/15">
      <div
        className="absolute inset-0 scale-[1.01] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundPosition: imagePosition,
        }}
        role="img"
        aria-label={`${title} product collection`}
      />

      <div
        className={`absolute inset-0 ${
          overlayColor 
            ? overlayColor 
            : isDark
            ? "bg-gradient-to-t from-[#001836] via-[#001836]/62 to-[#001836]/12"
            : "bg-gradient-to-t from-[#f8f8f7]/95 via-[#f8f8f7]/40 to-black/5"
        }`}
        style={overlayOpacity !== undefined ? { opacity: overlayOpacity } : undefined}
      />

      <div
        className={`relative z-10 flex min-h-svh items-end p-5 sm:p-8 lg:p-10 xl:p-14 ${isRightAligned ? "justify-end" : "justify-start"
          }`}
      >
        <Link
          href={href}
          className={`group w-full max-w-[540px] border p-6 backdrop-blur-md sm:p-8 transition-colors duration-300 cursor-pointer ${isDark
              ? "border-white/15 bg-[#001836]/82 text-white hover:bg-[#001836]"
              : "border-white/50 bg-white/82 text-[#001836] hover:bg-white"
            }`}
        >
          <div
            className={`mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] ${isDark ? "text-[#a7c8ff]" : "text-[#5c5f60]"
              }`}
          >
            <Icon className="h-4 w-4" strokeWidth={1.8} />
            <span>{eyebrow}</span>
          </div>

          <Heading className="max-w-[440px] text-[38px] font-semibold leading-[1.03] tracking-[-0.035em] sm:text-5xl xl:text-[56px]">
            {title}
          </Heading>

          <p
            className={`mt-5 max-w-[480px] text-sm leading-6 sm:text-base ${isDark ? "text-white/72" : "text-[#43474f]"
              }`}
          >
            {description}
          </p>

          <div
            className={`mt-7 inline-flex h-12 items-center justify-center rounded-sm px-6 text-xs font-semibold uppercase tracking-[0.08em] shadow-none transition-all duration-300 ${isDark
                ? "border border-white/45 bg-transparent text-white group-hover:bg-white group-hover:text-[#001836]"
                : "bg-[#001836] text-white group-hover:bg-[#002d5b]"
              }`}
          >
            {cta}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}


export function HomePage() {
  return (
    <div className="h-svh w-full overflow-y-auto snap-y snap-mandatory bg-[#fcf8f9] text-[#1b1b1c] antialiased">
      <FeaturePanel
          eyebrow="Precision Cutlery"
          title="The Spoon Collection"
          description="Engineered with metallurgical precision. Our premier line of industrial-grade spoons combines high-tolerance manufacturing with rigorous ergonomic design."
          cta="Explore Spoons"
          href="/products"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuBCYJ8a1Ig2LhzbOiISmz5W2yPI7DdlidbmwfGRv-zAOKQgeO69knptfCxcuAhtszteWCYN5pHQr2GUVr9Vr4bk-4mC5HdI2SSZitDnIR76tKb81p1hSHyL_8bNhBUhPjKYVcokAaHPX-w2NhLRlqs5X4MnoBWcUikuLjMriA0BI0BjFuDmQrAQv3dVs1LhG6dSm9nziNu6R4Y_qMaBPcTzIYUs16wgnH9Q5vywCLNTeyPTxpWgTD2lrc2Rhx4t7fcRA3x7f8bYzz8"
          imagePosition="center center"
          icon={Utensils}
          tone="light"
          headingLevel="h1"
          align="left"
        />
        <FeaturePanel
          eyebrow="Heavy Duty Assembly"
          title="The Ambular Series"
          description="Robust. Reliable. Ready for scale. The Ambular series sets the standard for high-capacity structural components built for demanding operational environments."
          cta="Explore Ambular"
          href="/products"
          image="/images/home-hero.png"
          imagePosition="center center"
          icon={Factory}
          tone="dark"
          headingLevel="h2"
          align="right"
          overlayColor="bg-[#001836]"
          overlayOpacity={0.55}
        />
      <div className="snap-start">
        <PuckFooter />
      </div>
    </div>
  );
}
