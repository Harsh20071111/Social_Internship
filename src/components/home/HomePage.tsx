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
import { MobileLayout } from "@/components/mobile/MobileLayout";
import { MobileFooter } from "@/components/mobile/MobileFooter";

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
            : "bg-gradient-to-t from-[#f8f8f7]/40 via-[#f8f8f7]/15 to-transparent"
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
    <div id="home-scroll-container" className="h-svh w-full overflow-y-auto snap-y snap-mandatory bg-[#fcf8f9] text-[#1b1b1c] antialiased">
      <FeaturePanel
        eyebrow="Precision Cutlery"
        title="The Spoon Collection"
        description="Engineered with metallurgical precision. Our premier line of industrial-grade spoons combines high-tolerance manufacturing with rigorous ergonomic design."
        cta="Explore Spoons"
        href="/spoon/products"
        image="/images/spoonbg.jpg"
        imagePosition="center center"
        icon={Utensils}
        tone="light"
        headingLevel="h1"
        align="left"
      />
      <FeaturePanel
        eyebrow="Heavy Duty Assembly"
        title="The Impeller Series"
        description="Robust. Reliable. Ready for scale. The Impeller series sets the standard for high-capacity structural components built for demanding operational environments."
        cta="Explore Impeller"
        href="/impeller/products"
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

      {/* ── Mobile Version ─────────────────────────────────────────── */}
      <div className="md:hidden bg-background text-on-background antialiased">
        <MobileLayout>
          {/* Hero Section: The Spoon Collection */}
          <section className="w-full px-[20px] py-[48px] flex flex-col gap-[16px] border-b border-[#c4c6ce]">
            <div className="flex flex-col gap-[4px]">
              <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#5c5f60] uppercase">Precision Cutlery</span>
              <h1 className="text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[#000000]">The Spoon Collection</h1>
            </div>
            <div className="w-full aspect-[4/3] bg-[#e5e8f2] rounded-[0.125rem] border border-[#c4c6ce] overflow-hidden relative">
              <img 
                className="w-full h-full object-cover" 
                alt="A highly detailed, macro shot of polished industrial-grade stainless steel spoons arrayed perfectly on a light grey technical work surface." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYX9MrLMmVyDcbiPGhbPjYwparmpVg4vpUNsrLMTejArsBezGVfutVFd-d76qFSFeYaMfixtZZEY7RKXmcqalNDNqK0rcfmPuo_wrbHDH3YW0EDmfhfIyp89wHNedvaRh0Hii0O1VodlO9ahODncRFFyjp87m4eyv-__aZABPxxSWGql2vx2ZEHBUDppDp5strmrpzc8U1xSJ5R9NwujuTDHEqL_Nl5rZAD39KHcbtoeIkWMgl8N269yobKienQ55n4MXU7QLkMTE"
              />
              <div className="absolute top-2 left-2 bg-[#f9f9ff] px-2 py-1 rounded-[2px] border border-[#c4c6ce]">
                <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#000000] uppercase">Technical Grade</span>
              </div>
            </div>
            <p className="text-[16px] leading-[24px] font-normal text-[#5f5e5f]">Engineered with metallurgical precision. Our premier line of industrial-grade spoons combines high-tolerance manufacturing with rigorous ergonomic design.</p>
            <a href="/spoon/products" className="bg-[#000000] text-[#ffffff] text-[16px] leading-[24px] font-normal rounded-[0.125rem] h-12 flex items-center justify-center gap-2 hover:bg-[#181c23] transition-colors">
              Explore Spoons <span className="material-symbols-outlined text-[18px] mat-symbols">arrow_forward</span>
            </a>
          </section>

          {/* Secondary Section: The Impeller Series */}
          <section className="w-full px-[20px] py-[48px] flex flex-col gap-[16px] bg-[#f4f4f6] border-b border-[#c4c6ce]">
            <div className="flex flex-col gap-[4px]">
              <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#5c5f60] uppercase">Heavy Duty Assembly</span>
              <h2 className="text-[28px] leading-[34px] font-semibold text-[#000000]">The Impeller Series</h2>
            </div>
            <p className="text-[16px] leading-[24px] font-normal text-[#5f5e5f]">Robust. Reliable. Ready for scale. The Impeller series sets the standard for high-capacity structural components built for demanding operational environments.</p>
            {/* Bento-style Grid for Specs */}
            <div className="grid grid-cols-2 gap-[16px]">
              <div className="bg-[#f9f9ff] p-[16px] border border-[#c4c6ce] rounded-[0.125rem] flex flex-col gap-[4px]">
                <span className="material-symbols-outlined text-[#5c5f60] mat-symbols" style={{fontVariationSettings: "'wght' 200"}}>precision_manufacturing</span>
                <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#5c5f60] uppercase">Tolerance</span>
                <span className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#000000]">±0.005mm</span>
              </div>
              <div className="bg-[#f9f9ff] p-[16px] border border-[#c4c6ce] rounded-[0.125rem] flex flex-col gap-[4px]">
                <span className="material-symbols-outlined text-[#5c5f60] mat-symbols" style={{fontVariationSettings: "'wght' 200"}}>shield</span>
                <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#5c5f60] uppercase">Material</span>
                <span className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#000000]">SS-316L</span>
              </div>
            </div>
            <div className="w-full h-48 bg-[#e5e8f2] rounded-[0.125rem] border border-[#c4c6ce] overflow-hidden mt-[8px]">
              <img 
                className="w-full h-full object-cover grayscale" 
                alt="A close-up, high-contrast image of a heavy-duty industrial impeller component." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0UEQc8psUFm-0v0G15G2_mpNJCmC4hkd_R29xBASuKbj6ZUNBz7hMteorOP9v15JVtVM6SGpeTi3AUijRBU-mVWaKStgnVxxNA3JF8TAI4C8V5tP_0ntau-XPAXi2p5nIqHZm6eoddsc4nR-lKmP9iDWyrANK0OI3-EdAsUDOsS-icyQpPzRe__8TM-oaCmcLJg6BQvz2PrCLvmGtWVCP8W0APLMrOwUyZMHhmONFBo54ikF6aZrWATSvpHnmYXX0FeE8ISBk0JE"
              />
            </div>
            <a href="/impeller/products" className="border border-[#000000] text-[#000000] text-[16px] leading-[24px] font-normal rounded-[0.125rem] h-12 flex items-center justify-center gap-2 hover:bg-[#f0f3fd] transition-colors mt-[8px]">
              Explore Impeller <span className="material-symbols-outlined text-[18px] mat-symbols">settings</span>
            </a>
          </section>

          {/* Manufacturing Excellence Section */}
          <section className="w-full px-[20px] py-[48px] flex flex-col gap-[16px]">
            <div className="flex items-center gap-[8px] mb-[8px]">
              <div className="w-10 h-10 bg-[#031c3a] text-[#7085a8] rounded-[0.125rem] flex items-center justify-center">
                <span className="material-symbols-outlined mat-symbols" style={{fontVariationSettings: "'wght' 300"}}>factory</span>
              </div>
              <h2 className="text-[24px] leading-[32px] font-semibold text-[#000000]">Manufacturing Excellence</h2>
            </div>
            <p className="text-[16px] leading-[24px] font-normal text-[#5f5e5f]">Our facility in Ahmedabad operates with uncompromising standards, utilizing advanced CNC machinery and rigorous quality control protocols to deliver structural integrity at scale.</p>
            <div className="w-full p-[16px] bg-[#f9f9ff] border border-[#c4c6ce] rounded-[0.125rem] flex flex-col gap-[4px]">
              <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#5c5f60] uppercase">Facility Location</span>
              <span className="text-[16px] leading-[24px] font-normal text-[#000000]">Ahmedabad, Gujarat</span>
              <a href="/factories" className="text-[#410002] underline text-[16px] leading-[24px] font-normal mt-2 flex items-center gap-1">
                View Facilities <span className="material-symbols-outlined text-[16px] mat-symbols">open_in_new</span>
              </a>
            </div>
          </section>

          <MobileFooter />
        </MobileLayout>
      </div>
    </div>
  );
}
