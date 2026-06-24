"use client";

import Image from "next/image";
import { PuckFooter } from "@/components/layout/PuckChrome";
import { motion } from "framer-motion";


export function PuckPage({
  children,
  hero,
  heroImage,
  eyebrow,
  subtitle,
}: {
  children: React.ReactNode;
  hero?: string;
  heroImage?: string;
  eyebrow?: string;
  subtitle?: string;
}) {
  const imageHero = Boolean(heroImage);

  return (
    <div className="min-h-screen bg-[#fcf8f9] text-[#1b1b1c] antialiased">
      {hero && (
        <section
          className={`relative flex min-h-[140px] items-center justify-center overflow-hidden px-5 text-center md:min-h-[180px] ${
            imageHero ? "pt-24 text-white" : "bg-[#fcf8f9] border-b border-[#d9dce3] text-[#001836]"
          }`}
        >
          {imageHero && (
            <>
              <Image src={heroImage!} alt="" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-[#001836]/70" />
            </>
          )}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mx-auto max-w-[800px]"
          >
            {eyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
                {eyebrow}
              </p>
            )}
            <h1 className="text-3xl font-black md:text-5xl">{hero}</h1>
            {subtitle && (
              <p className={`mt-4 text-base font-medium md:text-lg ${imageHero ? "text-white/80" : "text-[#5c5f60]"}`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        </section>
      )}
      <main>{children}</main>
      <PuckFooter />
    </div>
  );
}

export function PuckSectionTitle({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-3xl font-black tracking-tight text-[#001836] md:text-5xl">
        {children}
      </h2>
      <div className={`mt-3 h-[5px] w-[60px] bg-black ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
