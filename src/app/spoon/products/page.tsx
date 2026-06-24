"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { PuckPage } from "@/components/layout/PuckPage";

const spoons = [
  {
    id: "table-spoon",
    name: "Hiramoti Table Spoon",
    description:
      "Elegant stainless steel table spoon with a polished finish, decorative handle design, and durable construction. Perfect for daily dining, serving, and hospitality use.",
    image: "/images/hiramoti-table-spoon.png",
  },
  {
    id: "tea-spoon",
    name: "S Kumar",
    description:
      "Premium S Kumar stainless steel table spoon featuring a polished finish, decorative handle pattern, and sturdy construction. Perfect for home, restaurant, hotel, and catering use.",
    image: "/uploads/spoon.svg",
  },
  {
    id: "serving-spoon",
    name: "Serving Spoon",
    description:
      "Heavy-duty serving spoon built with food-grade stainless steel for buffets, catering, restaurants, and everyday kitchen service.",
    image: "/uploads/spoon.svg",
  },
  {
    id: "soup-spoon",
    name: "Soup Spoon",
    description:
      "Deep-bowl stainless steel soup spoon shaped for comfortable use, polished finishing, and dependable resistance to frequent washing.",
    image: "/uploads/spoon.svg",
  },
  {
    id: "dessert-spoon",
    name: "Dessert Spoon",
    description:
      "Elegant stainless steel dessert spoon suitable for ice cream, sweets, and serving applications with a refined, polished look.",
    image: "/uploads/spoon.svg",
  },
  {
    id: "baby-spoon",
    name: "Baby Spoon",
    description:
      "Soft-edged, food-safe stainless steel baby spoon with a compact bowl size and comfortable grip for safe infant feeding.",
    image: "/uploads/spoon.svg",
  },
];

import { MobileLayout } from "@/components/mobile/MobileLayout";
import { MobileFooter } from "@/components/mobile/MobileFooter";

export default function SpoonProductsPage() {
  return (
    <>
      {/* ── Mobile Version ── */}
      <div className="md:hidden bg-[#f9f9ff] text-[#181c23] antialiased">
        <MobileLayout>
          {/* Page Header */}
          <section className="px-[20px] pt-[48px] pb-[16px]">
            <div className="flex flex-col gap-[8px]">
              <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#5c5f60] uppercase tracking-wider">Product Catalog</span>
              <h2 className="text-[28px] leading-[34px] font-semibold text-[#000000]">Industrial Components</h2>
              <p className="text-[16px] leading-[24px] font-normal text-[#44474e] max-w-prose">Engineered with metallurgical precision for demanding operational environments.</p>
            </div>
          </section>

          {/* Product 1: The Spoon Collection */}
          <section className="px-[20px] py-[16px]">
            <div className="border border-[#c4c6ce] rounded-[0.5rem] bg-[#f9f9ff] overflow-hidden">
              <div className="w-full h-48 bg-[#ebeef8] relative">
                <img 
                  className="object-cover w-full h-full" 
                  alt="A highly detailed close-up shot of a meticulously machined industrial steel spoon component resting on a pristine, brushed steel workbench." 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo6ra_pq4jnyTUSVFELgWfW0X1V6RP8PGCyO2dmWV_vNFrJVrDhdoYVpKHbErE00jYRbxnOC5G52DdGZ5q50ae1iTgcb2srW7JjfDHjNLV4oKWmlHwcVzHgRE8F4mKgslSgGXdi1dAgZatApBWHuZF4X4_GuJlfi43OmvRNxCcfZREm-oU4Huo4fHYF-HWQOZ7psJixcL7x4opt7sRnTu_KOgJVoss0kaWDdjxlxz3n3-v_8MCFuPfLdzHt6SMTXtRUkEQNSmcH90"
                />
                <div className="absolute top-4 left-4 bg-[#f9f9ff] text-[#181c23] text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase px-2 py-1 rounded-[0.125rem] border border-[#c4c6ce]">
                  Precision Cutlery
                </div>
              </div>
              <div className="p-[16px] flex flex-col gap-[16px]">
                <div>
                  <h3 className="text-[24px] leading-[32px] font-semibold text-[#181c23] mb-[4px]">The Spoon Collection</h3>
                  <p className="text-[16px] leading-[24px] font-normal text-[#44474e]">Our premier line of industrial-grade spoons combines high-tolerance manufacturing with rigorous ergonomic design. Machine polished 316L Stainless Steel.</p>
                </div>
                <div className="border-t border-[#c4c6ce] pt-[16px]">
                  <h4 className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#5c5f60] mb-[8px] uppercase">Technical Specifications</h4>
                  <table className="w-full text-left">
                    <tbody>
                      <tr className="border-b border-[#dfe2ec]">
                        <th className="py-2 text-[16px] leading-[24px] text-[#44474e] font-normal">Material</th>
                        <td className="py-2 text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#181c23] text-right">316L Stainless Steel</td>
                      </tr>
                      <tr className="border-b border-[#dfe2ec]">
                        <th className="py-2 text-[16px] leading-[24px] text-[#44474e] font-normal">Finish</th>
                        <td className="py-2 text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#181c23] text-right">Machine Polished</td>
                      </tr>
                      <tr className="border-b border-[#dfe2ec]">
                        <th className="py-2 text-[16px] leading-[24px] text-[#44474e] font-normal">Tolerance</th>
                        <td className="py-2 text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#181c23] text-right">±0.05mm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a className="w-full flex items-center justify-center gap-2 bg-[#fb3232] text-[#ffffff] text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase py-3 rounded-[0.125rem] active:scale-[0.98] transition-transform" href="https://wa.me/919427806585?text=I'm%20interested%20in%20The%20Spoon%20Collection">
                  Request Quote
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </section>
          <MobileFooter />
        </MobileLayout>
      </div>

      {/* ── Desktop Version ── */}
      <div className="hidden md:block">
        <PuckPage
          hero="Spoon Collection"
          subtitle="Food-grade stainless steel spoons manufactured for clean finishing, daily durability, and consistent quality"
          heroImage="/images/spoon-hero.png"
          overlayOpacity={0.25}
          overlayColor="bg-black"
        >
          <section className="py-16 md:py-24 bg-[#f9f7f7]">
            <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
              <Link
                href="/"
                className="mb-10 inline-flex items-center gap-2 text-sm font-black text-[#001836]"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>

              <div className="mt-4 mb-12 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#3e5f90]">
                  Our Products
                </p>
                <h2 className="mt-3 text-[28px] font-semibold leading-[36px] tracking-tight text-[#1b1b1c] md:text-[36px]">
                  Our Spoon Range
                </h2>
                <p className="mx-auto mt-4 max-w-[600px] text-base leading-7 text-black/55">
                  Explore our complete range of stainless steel spoons — from everyday
                  table spoons to specialty serving and soup spoons, all manufactured
                  with precision finishing and food-safe quality.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {spoons.map((spoon, index) => (
                  <motion.div
                    key={spoon.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    className="group flex flex-col overflow-hidden rounded-xl border border-black/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]"
                  >
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                      <Image
                        src={spoon.image}
                        alt={spoon.name}
                        fill
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-[17px] font-semibold leading-[24px] text-[#1b1b1c]">
                        {spoon.name}
                      </h3>
                      <p className="mt-2 flex-1 text-[13px] leading-[20px] text-[#43474f]">
                        {spoon.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </PuckPage>
      </div>
    </>
  );
}
