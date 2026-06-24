"use client";

import Image from "next/image";
import { Award, Factory, Globe2, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";

const principles = [
  { 
    icon: Factory, 
    title: "Our Strength", 
    text: "Our strength lies in our ability to manufacture pump components and fabricated impellers that combine hydraulic efficiency, durability, and value. Backed by high-precision machinery, skilled engineers, and rigorous dynamic balance systems, we consistently deliver parts that meet demanding industrial standards." 
  },
  { 
    icon: Lightbulb, 
    title: "Hydraulic Innovation", 
    text: "Innovation drives our development. We continuously improve manufacturing techniques, sheet material tolerances, and blade profiles to enhance pump performance, flow rate, and energy efficiency. By embracing new precision pressing and welding methods, we stay ahead in pump spares." 
  },
  { 
    icon: Globe2, 
    title: "Our Reach", 
    text: "Bhakti Industries supplies high-grade impellers and pump components to leading pump manufacturers, OEM clients, and water-management distributors across India. Our growing B2B network reflects the trust clients place in our engineering and manufacturing excellence." 
  },
  { 
    icon: Award, 
    title: "Quality Control", 
    text: "Quality is at the core of our operations. From raw sheet metal selection to dynamic balancing tests and dimensional inspection, every impeller undergoes thorough checks to prevent pump vibration and ensure long-lasting hydraulic performance." 
  },
];

const timeline = [
  { 
    year: "2013", 
    title: "Impeller Journey Begins", 
    desc: "Started impeller manufacturing with a modest setup consisting of three machines and a small production shed." 
  },
  { 
    year: "2016", 
    title: "Capacity Enhancement", 
    desc: "Added four additional machines to the production line, enabling increased manufacturing efficiency and higher output." 
  },
  { 
    year: "2018", 
    title: "Strategic Infrastructure Growth", 
    desc: "Installed four more machines and established a larger production shed to accommodate rising demand and future development." 
  },
  { 
    year: "Today", 
    title: "Continuous Innovation", 
    desc: "Stands as a growing manufacturer with a strong foundation built on continuous investment in technology and manufacturing excellence." 
  },
];

export default function ImpellerAboutPage() {
  return (
    <PuckPage
      hero="Engineering High-Performance Pump Components"
      eyebrow="Pump Spares Division"
      subtitle="Precision | Hydraulic Efficiency | Durability"
    >
      <nav className="sticky top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1160px] gap-8 overflow-x-auto px-5 py-5 text-sm font-bold md:gap-16">
          {["About Bhakti Impellers", "Culture", "History"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="whitespace-nowrap">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section id="about-bhakti-impellers" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1160px] gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <PuckSectionTitle>About Bhakti Impellers</PuckSectionTitle>
            <p className="mt-8 text-lg leading-8 text-black/65">
              Bhakti Industries is a leading manufacturer of high-performance submersible pump impellers and dynamic pump spare parts. Built on a foundation of engineering quality, dimensional accuracy, and B2B volume capabilities, we serve pump OEMs, industrial groups, and agricultural pump distributors across India.
              <br /><br />
              Our fabricated stainless steel and metal impellers are engineered for optimal water flow, balanced rotation, and low wear rates. Through advanced tooling, precision hydraulic press forming, and stringent dynamic testing, we ensure every pump component integrates seamlessly into submersible assembly systems.
              <br /><br />
              With a commitment to mechanical excellence and partner-first service, Bhakti Industries continues to grow as a leading manufacturer in pump and water management spare components.
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
              { title: "Engineering Excellence", desc: "We focus on geometric accuracy. Every blade curvature and hub dimension is manufactured to exact specifications for optimal hydraulic performance." },
              { title: "Dynamic Balance & Safety", desc: "To minimize vibration and extend motor life, we conduct dynamic balance checks across our impeller product range to ensure stable rotation." },
              { title: "OEM & Industrial Focus", desc: "We are optimized for B2B. We collaborate closely with pump designers and manufacturers, supporting customized tooling, batch testing, and reliable supply contracts." },
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
