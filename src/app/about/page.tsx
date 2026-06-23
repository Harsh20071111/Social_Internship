"use client";

import Image from "next/image";
import { Award, Factory, Globe2, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";

const principles = [
  { icon: Factory, title: "Our Strength", text: "Placeholder manufacturing scale and capability statement." },
  { icon: Lightbulb, title: "Innovation", text: "Placeholder research, design, and continuous-improvement statement." },
  { icon: Globe2, title: "Our Reach", text: "Placeholder domestic and international network statement." },
  { icon: Award, title: "Quality", text: "Placeholder certifications and quality-management statement." },
];

const timeline = ["20XX", "20XX", "20XX", "20XX"];

export default function AboutPage() {
  return (
    <PuckPage
      hero="Bringing Innovation to the Industry"
      eyebrow="About Us"
      subtitle="Quality | Innovation | Sustainability"
    >
      <nav className="sticky top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1160px] gap-8 overflow-x-auto px-5 py-5 text-sm font-bold md:gap-16">
          {["About Bhakti", "Company", "Culture", "History", "Certificates"].map((item) => (
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
              This placeholder introduction is reserved for your actual company
              background, manufacturing expertise, market position, and customer promise.
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
                className="border-t-4 border-[#318bc1] pt-5"
              >
                <item.icon className="h-7 w-7 text-[#318bc1]" />
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/60">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="company" className="bg-[#f2f8fc] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1160px] items-center gap-12 px-5 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=88"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div>
            <PuckSectionTitle>Integrated by Design</PuckSectionTitle>
            <p className="mt-8 text-lg leading-8 text-black/65">
              Placeholder copy for facilities, engineering teams, process integration,
              and production technology. Replace this section with verified company data.
            </p>
            <div className="mt-9 grid grid-cols-3 gap-5 border-t border-black/15 pt-7">
              {["00+ Years", "00 Markets", "000+ Products"].map((stat) => (
                <p key={stat} className="text-lg font-black text-[#318bc1]">{stat}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="culture" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1160px] px-5">
          <PuckSectionTitle center>Our Culture</PuckSectionTitle>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              "People-led engineering",
              "Responsible manufacturing",
              "Customer-first execution",
            ].map((title, index) => (
              <div key={title} className="min-h-[260px] bg-[#318bc1] p-8 text-white">
                <span className="text-6xl font-black text-white/20">0{index + 1}</span>
                <h3 className="mt-12 text-2xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">Placeholder culture description.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="bg-[#f7f7f7] py-20 md:py-28">
        <div className="mx-auto max-w-[1160px] px-5">
          <PuckSectionTitle>History</PuckSectionTitle>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {timeline.map((year, index) => (
              <div key={`${year}-${index}`} className="relative border-l-2 border-[#318bc1] pl-6">
                <p className="text-3xl font-black text-[#318bc1]">{year}</p>
                <h3 className="mt-4 font-black">Placeholder milestone</h3>
                <p className="mt-2 text-sm leading-6 text-black/55">Add the verified event for this year.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1160px] px-5">
          <PuckSectionTitle center>Certificates</PuckSectionTitle>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Certificate 01", "Certificate 02", "Certificate 03", "Certificate 04"].map((item) => (
              <div key={item} className="flex aspect-[4/5] items-center justify-center border border-black/10 bg-[#fafafa] text-sm font-black text-black/35">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PuckPage>
  );
}
