"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FadeUp, Parallax } from "@/components/animations/FadeUp";
import { ClipReveal } from "@/components/animations/ClipReveal";

const highlights = [
  "ISO 9001:2015 certified manufacturing processes",
  "Export-quality products meeting international standards",
  "Dedicated quality control at every production stage",
  "Customized packaging and OEM solutions available",
];

export function CompanyOverview() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div>
            <FadeUp y={30}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#3e5f90]">
                About Our Company
              </p>

              <h2 className="mt-3 text-[28px] font-semibold leading-[36px] tracking-tight text-[#1b1b1c] md:text-[32px] md:leading-[40px]">
                Manufacturing Excellence
                <br />
                Since 1998
              </h2>

              <p className="mt-5 text-[16px] leading-[26px] text-[#43474f]">
                Bhakti Industries has been at the forefront of
                kitchenware and steel product manufacturing for over two
                decades. With three modern factories equipped with advanced
                machinery, we deliver products that meet the highest quality
                benchmarks in the industry.
              </p>

              <p className="mt-4 text-[16px] leading-[26px] text-[#43474f]">
                Our commitment to precision engineering and rigorous quality
                control has earned us the trust of 500+ businesses across India,
                from small retailers to large-scale distributors.
              </p>

              <ul className="mt-6 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#001836]" />
                    <span className="text-[14px] leading-[20px] text-[#43474f]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          {/* Image — clip reveal + parallax */}
          <Parallax speed={-15}>
            <ClipReveal direction="up">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#e5e2e3]">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=75&auto=format"
                  alt="Modern manufacturing facility interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ClipReveal>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
