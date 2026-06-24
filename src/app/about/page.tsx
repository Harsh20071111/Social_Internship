"use client";

import Image from "next/image";
import { Award, Factory, Globe2, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";
import { MobileLayout } from "@/components/mobile/MobileLayout";
import { MobileFooter } from "@/components/mobile/MobileFooter";

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
    <>
      {/* ── Mobile Version ── */}
      <div className="md:hidden bg-[#f9f9ff] text-[#181c23] font-body-md antialiased overflow-x-hidden">
        <MobileLayout>
          {/* Hero Section */}
          <section className="w-full px-[20px] pt-8 pb-12 bg-[#f4f4f6] border-b border-[#c4c6ce]">
            <div className="flex flex-col gap-[16px]">
              <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#5c5f60] uppercase">Company Profile</span>
              <h1 className="text-[28px] leading-[34px] font-semibold text-[#000000]">Engineered with<br/>Metallurgical Precision.</h1>
              <p className="text-[18px] leading-[28px] font-normal text-[#5f5e5f]">Bhakti Industries is a premier manufacturer of industrial-grade components, combining high-tolerance manufacturing with rigorous design principles.</p>
            </div>
          </section>

          {/* Our Heritage (Bento Grid) */}
          <section className="w-full px-[20px] py-12 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-[24px] leading-[32px] font-semibold text-[#000000]">Our Heritage</h2>
              <p className="text-[16px] leading-[24px] font-normal text-[#5f5e5f]">Decades of precision manufacturing excellence.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-[#f9f9ff] border border-[#c4c6ce] rounded-[0.125rem] p-6 flex flex-col gap-4">
                <span className="material-symbols-outlined text-[#000000] mat-symbols" data-icon="history">history</span>
                <h3 className="text-[18px] leading-[28px] font-medium text-[#000000]">Established Legacy</h3>
                <p className="text-[16px] leading-[24px] font-normal text-[#5f5e5f]">Setting the standard for high-capacity structural components built for demanding operational environments since our inception.</p>
              </div>
              <div className="bg-[#f9f9ff] border border-[#c4c6ce] rounded-[0.125rem] p-6 flex flex-col gap-4">
                <span className="material-symbols-outlined text-[#000000] mat-symbols" data-icon="engineering">engineering</span>
                <h3 className="text-[18px] leading-[28px] font-medium text-[#000000]">Precision Engineering</h3>
                <p className="text-[16px] leading-[24px] font-normal text-[#5f5e5f]">Our premier lines, including The Impeller Series, reflect our commitment to robust, reliable components ready for scale.</p>
              </div>
            </div>
          </section>

          {/* Quality Standards */}
          <section className="w-full px-[20px] py-12 bg-[#f4f4f6] border-y border-[#c4c6ce]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-[24px] leading-[32px] font-semibold text-[#000000]">Quality Standards</h2>
                <p className="text-[16px] leading-[24px] font-normal text-[#5f5e5f]">Uncompromising technical specifications.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 p-4 bg-[#f9f9ff] border border-[#c4c6ce] rounded-[0.125rem]">
                  <div className="p-2 bg-[#f0f3fd] rounded-[0.125rem]">
                    <span className="material-symbols-outlined text-[#000000] mat-symbols" data-icon="verified">verified</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#000000] uppercase">ISO Certified</span>
                    <p className="text-[16px] leading-[24px] font-normal text-[#5f5e5f]">Adhering to strict international quality management standards across all production lines.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#f9f9ff] border border-[#c4c6ce] rounded-[0.125rem]">
                  <div className="p-2 bg-[#f0f3fd] rounded-[0.125rem]">
                    <span className="material-symbols-outlined text-[#000000] mat-symbols" data-icon="straighten">straighten</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#000000] uppercase">Micron Tolerance</span>
                    <p className="text-[16px] leading-[24px] font-normal text-[#5f5e5f]">Achieving exact technical specifications for critical industrial and structural applications.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Facility Overview */}
          <section className="w-full px-[20px] py-12 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-[24px] leading-[32px] font-semibold text-[#000000]">Facility Overview</h2>
              <p className="text-[16px] leading-[24px] font-normal text-[#5f5e5f]">Infrastructure built for scale in Ahmedabad.</p>
            </div>
            <div className="relative w-full h-48 border border-[#c4c6ce] rounded-[0.125rem] overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                alt="A highly detailed exterior view of a modern, massive industrial manufacturing facility located in Ahmedabad." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe3-1XBIP-KHceD68xfdCsOOB6IhnfkmwzM2aw65Jn_5KZx5xTvewGd1VJIg6vftiRvexM2hS7huPC5J9MTGQDhuOPYBFX48N5cWpG3xtmMY2BxMwofeRYkAK8AbkNLih72q972ViOYZHgRT4dsSkLG6oNwo_6kjGEmp03ZoN_WtXcRMRe2iVn_02C7B0wzN-ON4w0JS2SbFSZKk4xZkZ6uqohi3YjjrxYj6Q6ado64WwH5kMnMHsjGNxz1JErli6Bh-A8IMEzUcY"
              />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="px-2 py-1 bg-[#f9f9ff]/90 border border-[#c4c6ce] rounded-[0.125rem] text-[10px] font-semibold tracking-wide uppercase text-[#000000]">50k+ Sq Ft</span>
                <span className="px-2 py-1 bg-[#f9f9ff]/90 border border-[#c4c6ce] rounded-[0.125rem] text-[10px] font-semibold tracking-wide uppercase text-[#000000]">24/7 Ops</span>
              </div>
            </div>
            <div className="bg-[#f9f9ff] border border-[#c4c6ce] rounded-[0.125rem] p-6">
              <div className="flex flex-col gap-2">
                <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#5c5f60] uppercase">LOCATION</span>
                <p className="text-[16px] leading-[24px] font-normal text-[#000000]">
                  7, Kumar Estate,<br/>
                  B/S Bank of Baroda, nr. Shayona Estate,<br/>
                  Naroda Road,<br/>
                  Ahmedabad - 380025.
                </p>
              </div>
            </div>
          </section>
          <MobileFooter />
        </MobileLayout>
      </div>
      {/* ── Desktop Version ── */}
      <div className="hidden md:block">
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
  </div>
</>
  );
}
