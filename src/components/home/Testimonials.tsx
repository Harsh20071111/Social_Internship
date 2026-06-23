"use client";

import { Quote } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Director",
    company: "Gujarat Kitchenware Distributors",
    text: "We have been sourcing steel utensils from Bhakti Industries for over 8 years. Their consistency in quality and on-time delivery has made them our most reliable manufacturing partner.",
  },
  {
    name: "Sunil Mehta",
    role: "Procurement Head",
    company: "HomeServe Retail Pvt. Ltd.",
    text: "The OEM capabilities and customized packaging options set Bhakti Industries apart. They understand B2B requirements and deliver accordingly — no excuses, no delays.",
  },
  {
    name: "Anita Sharma",
    role: "Managing Partner",
    company: "NorthStar Trading Co.",
    text: "From product sampling to bulk production, their process is transparent and well-organized. The quality control is evident in every shipment we receive.",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-[#e5e2e3] bg-[#fcf8f9] py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <FadeUp>
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#3e5f90]">
              Client Feedback
            </p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[36px] tracking-tight text-[#1b1b1c] md:text-[32px] md:leading-[40px]">
              What Our Partners Say
            </h2>
          </div>
        </FadeUp>

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3" staggerDelay={0.15}>
          {testimonials.map((t, index) => (
            <StaggerItem
              key={t.name}
              direction={index === 0 ? "left" : index === 2 ? "right" : "up"}
              distance={30}
            >
              <div className="flex h-full flex-col rounded-lg border border-[#e5e2e3] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                <Quote className="h-5 w-5 text-[#c3c6d0]" strokeWidth={1.5} />
                <p className="mt-4 flex-1 text-[14px] leading-[22px] text-[#43474f]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 border-t border-[#e5e2e3] pt-4">
                  <p className="text-[14px] font-semibold text-[#1b1b1c]">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-[12px] text-[#737780]">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
