"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";

const factories = [
  {
    id: "factory-1",
    name: "Factory 1",
    subtitle: "Spoons & Cutlery Division",
    description:
      "Specialized in manufacturing high-grade stainless steel spoons, forks, and cutlery sets for domestic and export markets.",
    products: ["Table Spoons", "Tea Spoons", "Serving Spoons", "Fork Sets"],
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&auto=format",
  },
  {
    id: "factory-2",
    name: "Factory 2",
    subtitle: "Kitchenware Division",
    description:
      "Producing premium cookware, tiffin boxes, containers, and kitchen accessories built for durability and everyday use.",
    products: ["Cookware", "Tiffin Boxes", "Storage Containers", "Accessories"],
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format",
  },
  {
    id: "factory-3",
    name: "Factory 3",
    subtitle: "Household Products Division",
    description:
      "Manufacturing steel utensils, plates, glasses, and household essentials with focus on quality finishing and polish.",
    products: ["Steel Plates", "Glasses", "Bowls", "Utility Items"],
    image:
      "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?w=600&q=80&auto=format",
  },
];

export function ProductCategories() {
  return (
    <section className="border-t border-[#e5e2e3] bg-[#fcf8f9] py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <FadeUp>
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#3e5f90]">
              Our Product Lines
            </p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[36px] tracking-tight text-[#1b1b1c] md:text-[32px] md:leading-[40px]">
              Three Factories, One Standard
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[24px] text-[#43474f]">
              Each of our manufacturing units specializes in a dedicated product
              line, ensuring focused expertise and consistent quality.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {factories.map((factory) => (
            <StaggerItem key={factory.id}>
              <div className="group overflow-hidden rounded-lg border border-[#e5e2e3] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={factory.image}
                    alt={factory.subtitle}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#3e5f90]">
                    {factory.name}
                  </p>
                  <h3 className="mt-1.5 text-[18px] font-semibold leading-[24px] text-[#1b1b1c]">
                    {factory.subtitle}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[20px] text-[#43474f]">
                    {factory.description}
                  </p>

                  {/* Product Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {factory.products.map((product) => (
                      <span
                        key={product}
                        className="rounded bg-[#f0edee] px-2.5 py-1 text-[11px] font-medium text-[#43474f]"
                      >
                        {product}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href={`/products?factory=${factory.id}`}
                    className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-[#001836] hover:underline"
                  >
                    View Products
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
