"use client";

import Image from "next/image";
import { PuckFooter } from "@/components/layout/PuckChrome";
import { Navbar } from "@/components/layout/Navbar";

export function PuckPage({
  children,
  hero,
  heroImage,
  eyebrow,
  subtitle,
}: {
  children: React.ReactNode;
  hero: string;
  heroImage?: string;
  eyebrow?: string;
  subtitle?: string;
}) {
  const imageHero = Boolean(heroImage);

  return (
    <div className="min-h-screen bg-white pt-16 text-[#111] antialiased">
      <Navbar />
      <section
        className="relative flex min-h-[300px] items-center justify-center overflow-hidden px-5 text-center text-white md:min-h-[380px] bg-[#3e94cc]"
      >
        {imageHero && (
          <>
            <Image src={heroImage!} alt="" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-[#167fbd]/70" />
          </>
        )}
        <div className="relative z-10">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-4xl font-black uppercase tracking-[-0.02em] md:text-6xl">
            {hero}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-white/90 md:text-xl">
              {subtitle}
            </p>
          )}
        </div>
      </section>
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
      <h2 className="text-3xl font-black tracking-tight text-[#318bc1] md:text-5xl">
        {children}
      </h2>
      <div className={`mt-3 h-[5px] w-[60px] bg-black ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
