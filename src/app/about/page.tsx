"use client";

import Image from "next/image";
import { Award, Factory, Globe2, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";

const principles = [
  { icon: Factory, title: "Our Strength", text: "Our strength lies in our ability to manufacture products that combine precision, durability, and value. Backed by modern machinery, skilled technicians, and efficient production systems, we consistently deliver products that meet market demands and industry standards." },
  { icon: Lightbulb, title: "Innovation", text: "Innovation drives our progress. We continuously improve manufacturing techniques, material utilization, and product designs to enhance product performance, durability, and customer value. By embracing new technologies and production methods, we stay ahead in a competitive market." },
  { icon: Globe2, title: "Our Reach", text: "Bhakti Industries supplies products to wholesalers, distributors, and business partners across multiple states in India. Our growing network reflects the trust customers place in our quality, service, and manufacturing excellence." },
  { icon: Award, title: "Quality", text: "Quality is at the heart of everything we do. From raw material selection to final inspection, every product undergoes rigorous quality checks to ensure consistency, strength, and long-lasting performance. Our commitment to excellence ensures reliable products for every customer." },
];

const timeline = [
  { year: "2010", title: "Foundation of Bhakti Industries", desc: "Established with a vision to manufacture quality stainless steel kitchenware products for the Indian market." },
  { year: "2014", title: "Expansion into Industrial Components", desc: "Expanded manufacturing capabilities with the introduction of submersible pump impellers and water-management components." },
  { year: "2019", title: "Capacity Enhancement", desc: "Invested in advanced machinery and production systems to increase manufacturing capacity and improve product quality." },
  { year: "2025", title: "Expanding Nationwide Presence", desc: "Strengthened distribution networks and expanded market reach while continuing to uphold the highest standards of quality and customer satisfaction." },
];

export default function AboutPage() {
  return (
    <PuckPage
      hero="Bringing Innovation to the Industry"
      eyebrow="About Us"
      subtitle="Quality | Innovation | Sustainability"
    >
      <nav className="sticky top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1160px] gap-8 overflow-x-auto px-5 py-5 text-sm font-bold md:gap-16">
          {["About Bhakti", "Culture", "History"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="whitespace-nowrap">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section id="about-puck" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1160px] gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <PuckSectionTitle>About Bhakti</PuckSectionTitle>
            <p className="mt-8 text-lg leading-8 text-black/65">
              Bhakti Industries is a leading manufacturer of premium stainless steel spoons and high-performance submersible pump impellers. Built on a foundation of quality, precision, and reliability, we serve wholesalers, distributors, retailers, and industrial customers across India.

              Our stainless steel spoons are crafted for durability, elegance, and everyday use, while our submersible pump impellers are engineered to deliver efficient water flow and dependable performance. Through advanced manufacturing processes and strict quality standards, we ensure every product meets the expectations of our customers.

              With a commitment to innovation and customer satisfaction, Bhakti Industries continues to grow as a trusted name in both kitchenware and pump component manufacturing.
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2">
            {principles.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border-t-4 border-[#001836] pt-5"
              >
                <item.icon className="h-7 w-7 text-[#001836]" />
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/60">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1160px] px-5">
          <PuckSectionTitle center>Our Culture</PuckSectionTitle>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { title: "Precision in Every Product", desc: "We believe that attention to detail creates superior products. Every spoon and impeller is manufactured with a focus on precision, consistency, and craftsmanship." },
              { title: "Quality Without Compromise", desc: "Our team is dedicated to maintaining the highest standards of manufacturing excellence, ensuring that customers receive products they can trust." },
              { title: "Customer-Driven Growth", desc: "We grow by helping our customers succeed. Through dependable products, timely deliveries, and responsive support, we build long-term business relationships." },
            ].map((item, index) => (
              <div key={item.title} className="min-h-[260px] bg-[#001836] p-8 text-white">
                <span className="text-6xl font-black text-white/20">0{index + 1}</span>
                <h3 className="mt-12 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="bg-[#f7f7f7] py-20 md:py-28">
        <div className="mx-auto max-w-[1160px] px-5">
          <PuckSectionTitle>History</PuckSectionTitle>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {timeline.map((item, index) => (
              <div key={`${item.year}-${index}`} className="relative border-l-2 border-[#001836] pl-6">
                <p className="text-3xl font-black text-[#001836]">{item.year}</p>
                <h3 className="mt-4 font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/55">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PuckPage>
  );
}
