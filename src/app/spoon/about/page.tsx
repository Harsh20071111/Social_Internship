"use client";

import Image from "next/image";
import { Award, Factory, Globe2, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";

const principles = [
  { 
    icon: Factory, 
    title: "Our Strength", 
    text: "Our strength lies in our ability to manufacture cutlery and spoons that combine precision, durability, and value. Backed by modern pressing machinery, skilled technicians, and efficient production systems, we consistently deliver high-quality kitchenware that meets market demands and design standards." 
  },
  { 
    icon: Lightbulb, 
    title: "Innovation", 
    text: "Innovation drives our design progress. We continuously improve manufacturing techniques, stainless steel material utilization, and ergonomic designs to enhance product performance, polish, and customer value. By embracing new automatic polishing technologies, we stay ahead in the cutlery market." 
  },
  { 
    icon: Globe2, 
    title: "Our Reach", 
    text: "Bhakti Industries supplies cutlery and steel utensils to wholesalers, distributors, retail chains, and hospitality partners across multiple states in India. Our growing network reflects the trust partners place in our kitchenware manufacturing excellence." 
  },
  { 
    icon: Award, 
    title: "Quality", 
    text: "Quality is at the heart of everything we do. From food-grade raw stainless steel selection to final high-gloss inspection, every spoon undergoes rigorous quality checks to ensure consistency, corrosion resistance, and long-lasting performance." 
  },
];

const timeline = [
  { 
    year: "1995", 
    title: "Spoon Operations Commenced", 
    desc: "Began its journey in spoon manufacturing with two machines, laying the foundation for a business focused on quality and precision manufacturing." 
  },
  { 
    year: "2005", 
    title: "Production Capacity Growth", 
    desc: "Expanded capacity by adding three additional machines, strengthening our manufacturing capabilities to meet rising product demand." 
  },
  { 
    year: "2009", 
    title: "Dedicated Manufacturing Hub", 
    desc: "Acquired a private manufacturing shed, providing a dedicated facility for large-scale production and future industrial growth." 
  },
  { 
    year: "2018", 
    title: "Rajnigandha Manufacturing Partner", 
    desc: "Achieved a major milestone by becoming a manufacturing partner for Rajnigandha, demonstrating our ability to meet the high quality standards of leading brands." 
  },
];

export default function SpoonAboutPage() {
  return (
    <PuckPage
      hero="Crafting Premium Cutlery with Precision"
      eyebrow="Spoon Division"
      subtitle="Quality | Ergonomics | Durability"
    >
      <nav className="sticky top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1160px] gap-8 overflow-x-auto px-5 py-5 text-sm font-bold md:gap-16">
          {["Bhakti Spoon", "Culture", "History"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="whitespace-nowrap">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section id="bhakti-spoon" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1160px] gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <PuckSectionTitle>Bhakti Spoon</PuckSectionTitle>
            <p className="mt-8 text-lg leading-8 text-black/65">
              With 31 years of industry experience, Bhakti Industries is a leading manufacturer of premium stainless steel spoons and cutlery. Built on a foundation of reliability, precision, and consistent quality, we serve wholesalers, distributors, retail brands, and commercial kitchen suppliers across India.
              <br /><br />
              Our stainless steel spoons are crafted for durability, elegant aesthetics, and comfortable everyday use. Through advanced stamping, forming, and multi-stage polishing processes, we ensure every spoon meets the highest standards of structural integrity and mirror finish.
              <br /><br />
              With a commitment to excellence and customer satisfaction, Bhakti Industries continues to grow as a trusted manufacturing partner in the kitchenware and dining industry.
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
              { title: "Precision in Design", desc: "We believe that detail defines quality. Every cutlery model is designed with meticulous focus on thickness, balance, handle comfort, and edge smoothness." },
              { title: "Hygiene & Safety Standards", desc: "Our team ensures that only certified, food-grade stainless steel material is processed, ensuring non-toxic, rust-free, and safe dining products." },
              { title: "Volume & Reliability", desc: "We support retail chains and distributors with high-volume production capabilities, reliable supply timelines, and consistent quality parameters." },
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
