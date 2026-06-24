"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";
import { impellerCategories } from "@/lib/puck-content";

import { MobileLayout } from "@/components/mobile/MobileLayout";
import { MobileFooter } from "@/components/mobile/MobileFooter";

export default function ImpellerProductsPage() {
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

          {/* Product 2: The Impeller Series */}
          <section className="px-[20px] py-[16px]">
            <div className="border border-[#c4c6ce] rounded-[0.5rem] bg-[#f9f9ff] overflow-hidden">
              <div className="w-full h-48 bg-[#ebeef8] relative">
                <img 
                  className="object-cover w-full h-full grayscale" 
                  alt="A striking industrial photograph of a massive titanium alloy impeller turbine blade, engineered for high RPM applications." 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcJ7RljXflKgUVX1-gW9rIzpj4D28Cmrw6iDpZiwqPuG9X5IqOo1kQ8s4km6cn5Ydxcp85sMvH8yNLTxGawDRFKAz3Xj8IxvMDLgtdaiLAxGr_xDMfuvUfL78rN38YOh7NRNEqdzMUq7Sh33USkptxQSAs8yZwBcFG-1hUETyx_wty6dYUxf5BIXhkR0MQSf0LuxU1Em3ayYgKLQxy2o9dlcTiNg29SzTIJKBnLIFePFI9DxaEXW1RY1CikHE5nnzYyPm35dozUAw"
                />
                <div className="absolute top-4 left-4 bg-[#f9f9ff] text-[#181c23] text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase px-2 py-1 rounded-[0.125rem] border border-[#c4c6ce]">
                  Heavy Duty Assembly
                </div>
              </div>
              <div className="p-[16px] flex flex-col gap-[16px]">
                <div>
                  <h3 className="text-[24px] leading-[32px] font-semibold text-[#181c23] mb-[4px]">The Impeller Series</h3>
                  <p className="text-[16px] leading-[24px] font-normal text-[#44474e]">Robust. Reliable. Ready for scale. The Impeller series sets the standard for high-capacity structural components built for demanding operational environments.</p>
                </div>
                <div className="border-t border-[#c4c6ce] pt-[16px]">
                  <h4 className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#5c5f60] mb-[8px] uppercase">Technical Specifications</h4>
                  <table className="w-full text-left">
                    <tbody>
                      <tr className="border-b border-[#dfe2ec]">
                        <th className="py-2 text-[16px] leading-[24px] text-[#44474e] font-normal">Material</th>
                        <td className="py-2 text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#181c23] text-right">Titanium Alloy</td>
                      </tr>
                      <tr className="border-b border-[#dfe2ec]">
                        <th className="py-2 text-[16px] leading-[24px] text-[#44474e] font-normal">Rating</th>
                        <td className="py-2 text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#181c23] text-right">High RPM</td>
                      </tr>
                      <tr className="border-b border-[#dfe2ec]">
                        <th className="py-2 text-[16px] leading-[24px] text-[#44474e] font-normal">Balancing</th>
                        <td className="py-2 text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#181c23] text-right">Dynamic</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a className="w-full flex items-center justify-center gap-2 border border-[#000000] text-[#000000] text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase py-3 rounded-[0.125rem] active:scale-[0.98] transition-transform bg-transparent" href="https://wa.me/919427806585?text=I'm%20interested%20in%20The%20Impeller%20Series">
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
          hero="Impeller Series"
          subtitle="Precision-engineered K type impellers for V6 submersible pumps and high-performance fluid movement"
          heroImage="/images/home-hero.png"
          overlayOpacity={0.55}
          overlayColor="bg-[#001836]"
        >
          <section className="py-16 md:py-24">
            <div className="mx-auto max-w-[1160px] space-y-6 px-5">
              <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 text-sm font-black text-[#001836]"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>

              <PuckSectionTitle>Our Impeller Range</PuckSectionTitle>
              <p className="mt-4 max-w-2xl text-base leading-7 text-black/55">
                Explore our complete range of high-efficiency K-Type impellers — available in 40-foot and 45-foot variants, manufactured for durability and optimized for maximum fluid dynamics in submersible pumps.
              </p>

              <div className="mt-10 space-y-6">
                {impellerCategories.map((category) => (
                  <motion.article
                    key={category.slug}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Link
                      href={`/impeller/products/${category.slug}`}
                      className="group grid min-h-[220px] overflow-hidden rounded-[14px] border border-black/10 bg-[#fcfcfc] transition-shadow hover:shadow-[0_14px_45px_rgba(0,0,0,0.08)] md:grid-cols-[230px_1fr_210px]"
                    >
                      <div className="relative min-h-[220px] bg-white">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 230px"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col justify-center px-7 py-8 md:px-10">
                        <h2 className="text-2xl font-black tracking-tight md:text-[28px]">
                          {category.title}
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                          {category.summary}
                        </p>
                      </div>
                      <div className="flex items-center justify-end border-t border-black/5 px-7 py-7 md:border-l md:border-t-0">
                        <span className="text-sm font-bold text-[#001836]">View Range</span>
                        <ArrowRight className="ml-2 h-5 w-5 shrink-0 text-[#001836] transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        </PuckPage>
      </div>
    </>
  );
}
