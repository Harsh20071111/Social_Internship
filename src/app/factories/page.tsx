"use client";

import Image from "next/image";
import { ArrowRight, Building2, Droplets, Factory, Flame, Home, Leaf, Sun, Waves } from "lucide-react";
import { motion } from "framer-motion";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";

const applications = [
  { title: "Industrial", icon: Factory, image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=85" },
  { title: "Infrastructure", icon: Building2, image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85" },
  { title: "Water Management", icon: Droplets, image: "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=1000&q=85" },
  { title: "Fire Safety", icon: Flame, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1000&q=85" },
  { title: "Residential", icon: Home, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85" },
  { title: "Renewable Energy", icon: Sun, image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=85" },
  { title: "Agriculture", icon: Leaf, image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=85" },
  { title: "Process Systems", icon: Waves, image: "https://images.unsplash.com/photo-1531053326607-9d349096d887?auto=format&fit=crop&w=1000&q=85" },
];

export default function FactoriesPage() {
  return (
    <PuckPage
      hero="Applications"
      subtitle="Placeholder solutions organized around the industries and environments they serve."
    >
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1160px] px-5">
          <PuckSectionTitle>Application Categories</PuckSectionTitle>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative min-h-[360px] overflow-hidden bg-[#102c3b]"
              >
                <Image src={item.image} alt="" fill className="object-cover opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061821] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <item.icon className="h-8 w-8 text-[#77cff5]" />
                  <h2 className="mt-4 text-2xl font-black">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/65">Placeholder application description.</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PuckPage>
  );
}
