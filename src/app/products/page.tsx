"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PuckPage } from "@/components/layout/PuckPage";
import { MobileLayout } from "@/components/mobile/MobileLayout";
import { MobileFooter } from "@/components/mobile/MobileFooter";
import { productLines } from "@/lib/puck-content";

export default function ProductsPage() {
  return (
    <>
      {/* ── Mobile Version ── */}
      <div className="md:hidden bg-[#f9f9ff] text-[#181c23] antialiased">
        <MobileLayout>
          <section className="px-5 pt-12 pb-4">
            <div className="flex flex-col gap-2">
              <span className="text-label-caps text-[#5c5f60] uppercase tracking-wider">Product Catalog</span>
              <h2 className="text-headline-lg-mobile text-[#181c23]">Industrial Components</h2>
              <p className="text-body-md text-[#44474e] max-w-prose">Engineered with metallurgical precision for demanding operational environments.</p>
            </div>
          </section>

          <section className="px-5 py-4">
            <div className="border border-[#c4c6ce] rounded-sm bg-[#f9f9ff] overflow-hidden">
              <div className="w-full h-48 bg-[#ebeef8] relative">
                <div className="w-full h-full bg-[#ebeef8] flex items-center justify-center text-[#74777e] text-sm">
                  [Spoon Collection Image]
                </div>
                <div className="absolute top-4 left-4 bg-[#f9f9ff] text-[#181c23] text-label-caps px-2 py-1 rounded-sm border border-[#c4c6ce]">
                  Precision Cutlery
                </div>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div>
                  <h3 className="text-headline-md text-[#181c23] mb-1">The Spoon Collection</h3>
                  <p className="text-body-md text-[#44474e]">Our premier line of industrial-grade spoons combines high-tolerance manufacturing with rigorous ergonomic design. Machine polished 316L Stainless Steel.</p>
                </div>
                <div className="border-t border-[#c4c6ce] pt-4">
                  <h4 className="text-label-caps text-[#5c5f60] mb-2 uppercase">Technical Specifications</h4>
                  <table className="w-full text-left">
                    <tbody>
                      <tr className="border-b border-[#dfe2ec]">
                        <th className="py-2 text-body-md text-[#44474e] font-normal">Material</th>
                        <td className="py-2 text-mono-data text-[#181c23] text-right">316L Stainless Steel</td>
                      </tr>
                      <tr className="border-b border-[#dfe2ec]">
                        <th className="py-2 text-body-md text-[#44474e] font-normal">Finish</th>
                        <td className="py-2 text-mono-data text-[#181c23] text-right">Machine Polished</td>
                      </tr>
                      <tr className="border-b border-[#dfe2ec]">
                        <th className="py-2 text-body-md text-[#44474e] font-normal">Tolerance</th>
                        <td className="py-2 text-mono-data text-[#181c23] text-right">±0.05mm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a href="https://wa.me/919427806585?text=I'm%20interested%20in%20The%20Spoon%20Collection" className="w-full flex items-center justify-center gap-2 bg-[#b30000] text-white text-label-caps py-3 rounded-sm active:scale-[0.98] transition-transform">
                  Request Quote
                  <span className="material-symbols-outlined text-[18px] mat-symbols">arrow_forward</span>
                </a>
              </div>
            </div>
          </section>

          <section className="px-5 py-4">
            <div className="border border-[#c4c6ce] rounded-sm bg-[#f9f9ff] overflow-hidden">
              <div className="w-full h-48 bg-[#ebeef8] relative">
                <div className="w-full h-full bg-[#ebeef8] flex items-center justify-center text-[#74777e] text-sm">
                  [Impeller Image]
                </div>
                <div className="absolute top-4 left-4 bg-[#f9f9ff] text-[#181c23] text-label-caps px-2 py-1 rounded-sm border border-[#c4c6ce]">
                  Heavy Duty Assembly
                </div>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div>
                  <h3 className="text-headline-md text-[#181c23] mb-1">The Impeller Series</h3>
                  <p className="text-body-md text-[#44474e]">Robust. Reliable. Ready for scale. The Impeller series sets the standard for high-capacity structural components built for demanding operational environments.</p>
                </div>
                <div className="border-t border-[#c4c6ce] pt-4">
                  <h4 className="text-label-caps text-[#5c5f60] mb-2 uppercase">Technical Specifications</h4>
                  <table className="w-full text-left">
                    <tbody>
                      <tr className="border-b border-[#dfe2ec]">
                        <th className="py-2 text-body-md text-[#44474e] font-normal">Material</th>
                        <td className="py-2 text-mono-data text-[#181c23] text-right">Titanium Alloy</td>
                      </tr>
                      <tr className="border-b border-[#dfe2ec]">
                        <th className="py-2 text-body-md text-[#44474e] font-normal">Rating</th>
                        <td className="py-2 text-mono-data text-[#181c23] text-right">High RPM</td>
                      </tr>
                      <tr className="border-b border-[#dfe2ec]">
                        <th className="py-2 text-body-md text-[#44474e] font-normal">Balancing</th>
                        <td className="py-2 text-mono-data text-[#181c23] text-right">Dynamic</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a href="https://wa.me/919427806585?text=I'm%20interested%20in%20The%20Impeller%20Series" className="w-full flex items-center justify-center gap-2 border border-[#000000] text-[#000000] text-label-caps py-3 rounded-sm active:scale-[0.98] transition-transform bg-transparent">
                  Request Quote
                  <span className="material-symbols-outlined text-[18px] mat-symbols">arrow_forward</span>
                </a>
              </div>
            </div>
          </section>

          <MobileFooter />
        </MobileLayout>
      </div>
      {/* ── Desktop Version ── */}
      <div className="hidden md:block">
        <PuckPage hero="Products">
          <section className="py-16 md:py-24">
            <div className="mx-auto max-w-[1160px] space-y-6 px-5">
              {productLines.map((category) => (
                <motion.article
                  key={category.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    href={category.slug === "spoons" ? "/spoon/products" : "/impeller/products"}
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
          </section>
        </PuckPage>
      </div>
    </>
  );
}
