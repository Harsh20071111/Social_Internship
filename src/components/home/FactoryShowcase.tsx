"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { FadeUp, Parallax, SlideLeft, SlideRight } from "@/components/animations/FadeUp";
import { ClipReveal } from "@/components/animations/ClipReveal";

const factoryData = [
  {
    name: "Factory 1 — Rajkot",
    location: "Rajkot, Gujarat",
    area: "25,000 sq. ft.",
    employees: "120+",
    specialization: "Spoons & Cutlery",
    description:
      "Our flagship facility specializes in high-volume cutlery production with automated stamping, polishing, and quality grading lines.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format",
  },
  {
    name: "Factory 2 — Morbi",
    location: "Morbi, Gujarat",
    area: "30,000 sq. ft.",
    employees: "150+",
    specialization: "Kitchenware",
    description:
      "Equipped with deep-draw presses and automated welding stations, this facility produces cookware, tiffin boxes, and kitchen accessories.",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80&auto=format",
  },
  {
    name: "Factory 3 — Wankaner",
    location: "Wankaner, Gujarat",
    area: "20,000 sq. ft.",
    employees: "90+",
    specialization: "Household Products",
    description:
      "Dedicated to manufacturing steel plates, glasses, bowls, and utility products with a focus on finishing quality and surface polish.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80&auto=format",
  },
];

export function FactoryShowcase() {
  return (
    <section className="border-t border-[#e5e2e3] bg-[#fcf8f9] py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <FadeUp>
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#3e5f90]">
              Our Facilities
            </p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[36px] tracking-tight text-[#1b1b1c] md:text-[32px] md:leading-[40px]">
              State-of-the-Art Factories
            </h2>
          </div>
        </FadeUp>

        <div className="mt-14 space-y-16">
          {factoryData.map((factory, index) => (
            <div
              key={factory.name}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image with parallax + clip reveal */}
              <Parallax speed={index % 2 === 0 ? -10 : 10}>
                <ClipReveal direction={index % 2 === 0 ? "right" : "left"}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[#e5e2e3]">
                    <Image
                      src={factory.image}
                      alt={factory.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </ClipReveal>
              </Parallax>

              {/* Content — slides from the side opposite the image */}
              {index % 2 === 0 ? (
                <SlideRight>
                  <FactoryContent factory={factory} />
                </SlideRight>
              ) : (
                <SlideLeft>
                  <FactoryContent factory={factory} />
                </SlideLeft>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FactoryContent({ factory }: { factory: (typeof factoryData)[number] }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[13px] text-[#737780]">
        <MapPin className="h-3.5 w-3.5" />
        {factory.location}
      </div>
      <h3 className="mt-2 text-[22px] font-semibold leading-[28px] tracking-tight text-[#1b1b1c]">
        {factory.name}
      </h3>
      <p className="mt-3 text-[15px] leading-[24px] text-[#43474f]">
        {factory.description}
      </p>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[#e5e2e3] pt-6">
        <div>
          <p className="text-[18px] font-semibold text-[#001836]">
            {factory.area}
          </p>
          <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.05em] text-[#737780]">
            Facility Area
          </p>
        </div>
        <div>
          <p className="text-[18px] font-semibold text-[#001836]">
            {factory.employees}
          </p>
          <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.05em] text-[#737780]">
            Employees
          </p>
        </div>
        <div>
          <p className="text-[14px] font-semibold text-[#001836]">
            {factory.specialization}
          </p>
          <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.05em] text-[#737780]">
            Specialization
          </p>
        </div>
      </div>

      <Link
        href="/factories"
        className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-[#001836] hover:underline"
      >
        Learn more
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
