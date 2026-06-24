"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";
import { spoonCategories } from "@/lib/puck-content";

export default function SpoonProductsPage() {
  return (
    <PuckPage
      hero="Spoon Collection"
      subtitle="Food-grade stainless steel spoons manufactured for clean finishing, daily durability, and consistent quality"
      heroImage="/images/spoon-hero.png"
      overlayOpacity={0.25}
      overlayColor="bg-black"
    >
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1160px] space-y-6 px-5">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-black text-[#001836]"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <PuckSectionTitle>Our Spoon Range</PuckSectionTitle>
          <p className="mt-4 max-w-2xl text-base leading-7 text-black/55">
            Explore our complete range of stainless steel spoons — from everyday
            table spoons to specialty serving and soup spoons, all manufactured
            with precision finishing and food-safe quality.
          </p>

          <div className="mt-10 space-y-6">
            {spoonCategories.map((category) => (
              <motion.article
                key={category.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  href={`/spoon/products/${category.slug}`}
                  className="group grid min-h-[220px] overflow-hidden rounded-[14px] border border-black/10 bg-[#fcfcfc] transition-shadow hover:shadow-[0_14px_45px_rgba(0,0,0,0.08)] md:grid-cols-[230px_1fr_210px]"
                >
                  <div className="relative min-h-[220px] bg-white">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-contain p-6"
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
  );
}
