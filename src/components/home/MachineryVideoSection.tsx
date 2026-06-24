"use client";

import { motion } from "framer-motion";

export function MachineryVideoSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative h-[60vh] min-h-[400px] w-full overflow-hidden sm:h-[70vh] lg:h-[80vh]"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=75"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/manufacturing-process.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col items-center justify-center px-5 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl font-black tracking-tight sm:text-5xl lg:text-7xl"
        >
          Inside Our Manufacturing Facility
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 max-w-[800px] text-base font-medium opacity-90 sm:text-lg lg:text-xl"
        >
          Explore our advanced machinery, precision engineering, and quality-focused production process.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="https://wa.me/919427806585"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 rounded-sm bg-white px-10 text-xs font-bold uppercase tracking-widest text-black hover:bg-white/90"
          >
            Enquiry
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
