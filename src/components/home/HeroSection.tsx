"use client";

import Link from "next/link";
import { ArrowRight, Factory, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/animations/CountUp";

const statItems = [
  { icon: Clock, end: 25, suffix: "+", label: "Years Experience" },
  { icon: Factory, end: 3, suffix: "", label: "Factories" },
  { icon: ShieldCheck, end: 500, suffix: "+", label: "Products" },
];

export function HeroSection() {
  return (
    <>
      {/* ─── Mobile Hero ─────────────────────────────────────────────── */}
      <section className="md:hidden">
        {/* Hero image */}
        <div className="relative h-[280px] w-full overflow-hidden bg-[#001836]">
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80&auto=format')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcf8f9] via-[#001836]/40 to-[#001836]/10" />
        </div>

        {/* Content below image */}
        <div className="relative z-10 -mt-16 rounded-t-xl bg-[#fcf8f9] px-6 pb-8 pt-6">
          {/* Badge */}
          <span className="inline-block rounded-full border border-[#c3c6d0] bg-[#002d5b] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#7696ca]">
            ISO 9001:2015
          </span>

          <h1 className="mt-4 text-[26px] font-semibold leading-[34px] tracking-tight text-[#001836]">
            Precision-Engineered Steel Products for Your Business
          </h1>

          <p className="mt-3 text-[15px] leading-[23px] text-[#43474f]">
            Three state-of-the-art manufacturing facilities producing premium
            kitchenware, steel utensils, and household products with uncompromising
            quality standards.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-col gap-2.5">
            <Link href="/inquiry">
              <Button className="w-full h-11 rounded-sm bg-[#001836] text-[14px] font-semibold text-white shadow-none hover:bg-[#002d5b] transition-colors">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/products">
              <Button
                variant="outline"
                className="w-full h-11 rounded-sm border-[#c3c6d0] bg-[#fcf8f9] text-[14px] font-medium text-[#43474f] shadow-none hover:bg-[#f0edee] transition-colors"
              >
                View Products
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats cards */}
        <div className="px-6 pb-8">
          <div className="flex flex-col gap-2.5">
            {statItems.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 rounded-sm border border-[#e5e2e3] bg-white px-4 py-3.5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#d5e3ff]">
                    <Icon className="h-5 w-5 text-[#002d5b]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-[22px] font-semibold leading-tight text-[#001836]">
                      <CountUp end={stat.end} suffix={stat.suffix} duration={2} />
                    </p>
                    <p className="text-[11px] font-medium uppercase tracking-[0.05em] text-[#5c5f60]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Desktop Hero (static background, no parallax or motions) ── */}
      <section
        className="relative hidden h-[80vh] min-h-[600px] overflow-hidden bg-[#001836] md:block"
      >
        {/* Static Background image (no motion.div, no parallax y translate) */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&q=80&auto=format')",
            }}
          />
        </div>
        {/* Static opacity overlay */}
        <div
          className="absolute inset-0 bg-[#001836]/75"
        />

        {/* Foreground Content (static) */}
        <div className="relative mx-auto h-full max-w-[1280px] px-6">
          <div className="flex h-full flex-col justify-center py-20 md:max-w-[640px]">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7696ca]">
              Trusted by 500+ businesses across India
            </p>

            <h1 className="text-[36px] font-semibold leading-[1.15] tracking-tight text-white md:text-[48px] md:leading-[56px]">
              Precision-Engineered
              <br />
              Steel Products for
              <br />
              Your Business
            </h1>

            <p className="mt-5 max-w-[480px] text-[16px] leading-[24px] text-white/70">
              Three state-of-the-art manufacturing facilities producing premium
              kitchenware, steel utensils, and household products with
              uncompromising quality standards.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/inquiry">
                <Button className="h-11 rounded bg-white px-6 text-[14px] font-semibold text-[#001836] shadow-none hover:bg-[#f0edee] transition-colors duration-200">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                  className="h-11 rounded border-white/20 bg-transparent px-6 text-[14px] font-medium text-white shadow-none hover:border-white/40 hover:bg-white/5 transition-colors duration-200"
                >
                  View Products
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex gap-10 border-t border-white/10 pt-8">
              {statItems.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[24px] font-semibold leading-tight text-white">
                    <CountUp end={stat.end} suffix={stat.suffix} duration={2} />
                  </p>
                  <p className="mt-1 text-[12px] font-medium text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
