"use client";

import {
  Cog,
  Shield,
  Truck,
  Ruler,
  Layers,
  Gauge,
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";

const capabilities = [
  {
    icon: Cog,
    title: "Advanced Machinery",
    description:
      "CNC machines, hydraulic presses, and automated polishing lines for precision output.",
  },
  {
    icon: Shield,
    title: "Quality Control",
    description:
      "Multi-stage inspection process from raw material intake to finished product dispatch.",
  },
  {
    icon: Layers,
    title: "Diverse Materials",
    description:
      "Processing SS 304, SS 201, and copper-bottom grades for varied product requirements.",
  },
  {
    icon: Gauge,
    title: "High Capacity",
    description:
      "Combined production capacity of 50,000+ units per day across all three facilities.",
  },
  {
    icon: Ruler,
    title: "Custom Specifications",
    description:
      "OEM manufacturing with custom sizing, branding, and packaging as per client needs.",
  },
  {
    icon: Truck,
    title: "Pan-India Logistics",
    description:
      "Warehousing and dispatch network ensuring timely delivery across all states.",
  },
];

export function ManufacturingCapabilities() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <FadeUp>
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#3e5f90]">
              What We Offer
            </p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[36px] tracking-tight text-[#1b1b1c] md:text-[32px] md:leading-[40px]">
              Manufacturing Capabilities
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-[24px] text-[#43474f]">
              End-to-end production infrastructure built for scale, quality, and
              reliability.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, index) => (
            <StaggerItem key={cap.title} direction={index % 2 === 0 ? "up" : "up"}>
              <div className="group rounded-lg border border-[#e5e2e3] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-[#e5e2e3] bg-[#fcf8f9] transition-colors duration-300 group-hover:border-[#001836]/20 group-hover:bg-[#001836]/5">
                  <cap.icon className="h-5 w-5 text-[#001836] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold leading-[22px] text-[#1b1b1c]">
                  {cap.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[20px] text-[#43474f]">
                  {cap.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
