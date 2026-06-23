"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";

const certifications = [
  {
    code: "ISO 9001:2015",
    title: "Quality Management",
    description: "Certified quality management systems across all three factories.",
  },
  {
    code: "BIS",
    title: "Bureau of Indian Standards",
    description: "Products tested and marked as per BIS specifications.",
  },
  {
    code: "FSSAI",
    title: "Food Safety",
    description: "Compliant with food-grade safety standards for kitchenware.",
  },
  {
    code: "ISO 14001",
    title: "Environmental Management",
    description: "Committed to sustainable and responsible manufacturing.",
  },
];

export function Certifications() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <FadeUp>
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#3e5f90]">
              Standards & Compliance
            </p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[36px] tracking-tight text-[#1b1b1c] md:text-[32px] md:leading-[40px]">
              Certifications & Quality
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-[24px] text-[#43474f]">
              Our manufacturing processes comply with national and international
              quality standards, ensuring every product meets rigorous benchmarks.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.12}
        >
          {certifications.map((cert) => (
            <StaggerItem key={cert.code} distance={30}>
              <div className="group rounded-lg border border-[#e5e2e3] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded border border-[#e5e2e3] bg-[#fcf8f9] transition-all duration-300 group-hover:scale-110 group-hover:border-[#001836]/20 group-hover:bg-[#001836]/5">
                  <span className="text-[13px] font-bold text-[#001836]">
                    {cert.code.length > 6 ? cert.code.split(" ")[0] : cert.code}
                  </span>
                </div>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#3e5f90]">
                  {cert.code}
                </p>
                <h3 className="mt-1 text-[15px] font-semibold text-[#1b1b1c]">
                  {cert.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[18px] text-[#43474f]">
                  {cert.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
