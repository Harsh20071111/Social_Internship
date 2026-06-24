"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PuckPage } from "@/components/layout/PuckPage";
import { productCategories } from "@/lib/puck-content";

export default function ProductsPage() {
  return (
    <PuckPage hero="Products">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1160px] space-y-6 px-5">
          {productCategories.map((category, index) => (
            <motion.article
              key={category.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href={`/products/${category.slug}`}
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
  );
}
