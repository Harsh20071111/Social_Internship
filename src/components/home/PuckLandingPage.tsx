"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Factory,
  Menu,
  Play,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Media", href: "#media" },
  { label: "Careers", href: "/contact" },
  { label: "Applications", href: "#applications" },
  { label: "Products", href: "/products", dropdown: true },
  { label: "Contact Us", href: "/contact", dropdown: true },
  { label: "Our Verticals", href: "/factories", dropdown: true },
];

const applications = [
  {
    title: "Industrial",
    description: "Placeholder solutions for demanding production environments.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Infrastructure",
    description: "Placeholder systems engineered for scale and reliability.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Energy",
    description: "Placeholder technologies for efficient industrial operations.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Bhakti Industries home">
      <div className={`relative flex items-center gap-2 p-1.5 rounded-lg transition-all duration-200 ${inverse ? 'bg-white/95 shadow-sm' : ''}`}>
        <img
          src="/images/logo.png"
          alt="Bhakti Industries Logo"
          className="h-11 w-auto object-contain"
        />
      </div>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto flex h-[96px] max-w-[1160px] items-center justify-between px-5">
        <BrandMark />

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-[14px] font-bold text-[#111] transition-colors hover:text-[#001836]"
            >
              {item.label}
              {item.dropdown && <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.5} />}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center border border-black/10 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-black/10 bg-white px-5 py-5 lg:hidden"
        >
          <div className="mx-auto grid max-w-[1160px] gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-black/5 py-3 text-sm font-bold"
              >
                {item.label}
                {item.dropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden bg-white pb-10 pt-8 md:pb-16 md:pt-16">
      <div className="mx-auto max-w-[1160px] px-5">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.h1
              variants={reveal}
              className="puck-outline-heading text-[48px] font-black leading-[1.42] tracking-[-0.035em] sm:text-[60px] lg:text-[52px] xl:text-[62px]"
            >
              Totally Integrated &amp;
              <br />
              Sustainable
              <br />
              <span className="puck-video-word relative inline-block">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="https://images.unsplash.com/photo-1531053326607-9d349096d887?auto=format&fit=crop&w=1000&q=80"
                >
                  <source
                    src="https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4"
                    type="video/mp4"
                  />
                </video>
                <span className="relative">Manufacturing</span>
              </span>{" "}
              Solutions
            </motion.h1>

            <motion.div
              variants={reveal}
              className="mt-14 flex flex-wrap items-center gap-y-2 text-[15px] font-extrabold sm:text-[17px]"
            >
              {["Products", "Systems", "Components", "Services", "Technology"].map(
                (item, index, list) => (
                  <span key={item} className="flex items-center">
                    {item}
                    {index < list.length - 1 && (
                      <span className="mx-2 h-5 w-[2px] bg-[#001836]" />
                    )}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Image
              src="/images/puck-product-collage.png"
              alt="Placeholder industrial product range"
              width={1792}
              height={1024}
              priority
              className="h-auto w-full mix-blend-multiply"
            />
            <p className="mt-3 text-center text-[16px] font-extrabold lg:text-right">
              Est. 20XX - Made for Industry
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CampaignFilm() {
  return (
    <section className="bg-white pb-28 md:pb-52">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        className="relative mx-auto aspect-video max-w-[1160px] overflow-hidden rounded-[5px] bg-[#0b303e]"
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=88"
        >
          <source
            src="https://videos.pexels.com/video-files/4488706/4488706-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#071c24]/75 via-transparent to-transparent" />
        <div className="absolute left-6 top-6 border border-white px-3 py-2 text-xl font-black italic text-white md:left-9 md:top-8">
          BHAKTI
        </div>
        <div className="absolute bottom-7 left-7 max-w-md text-white md:bottom-12 md:left-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
            Placeholder campaign film
          </p>
          <p className="mt-2 text-2xl font-black md:text-4xl">
            Engineering that keeps industry moving.
          </p>
        </div>
        <div className="absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 text-white md:bottom-10 md:right-10">
          <Play className="ml-0.5 h-4 w-4 fill-current" />
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section className="relative overflow-hidden bg-white py-28 md:py-48">
      <div className="pointer-events-none absolute right-[-38px] top-1/2 -translate-y-1/2 rotate-90 text-[92px] font-black uppercase tracking-[0.08em] text-[#eef7fc] md:text-[130px]">
        Industry
      </div>
      <div className="mx-auto grid max-w-[1160px] gap-14 px-5 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#001836]">
            About Bhakti Industries
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            One partner.
            <br />
            Every industrial need.
          </h2>
          <div className="mt-7 h-[5px] w-[60px] bg-black" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10"
        >
          <p className="text-lg leading-8 text-black/65">
            This is placeholder copy for the company story. Replace it with your
            actual manufacturing experience, product capabilities, quality
            standards, and geographic reach.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.12em] text-[#001836]"
          >
            Know More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function Applications() {
  return (
    <section id="applications" className="relative overflow-hidden bg-white pb-28 pt-20 md:pb-40">
      <div className="mx-auto max-w-[1160px] px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
        >
          <h2 className="text-4xl font-black text-[#001836] md:text-6xl">
            Applications
          </h2>
          <div className="mt-3 h-[5px] w-[60px] bg-black" />
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {applications.map((application, index) => {
            const Icon = application.icon;
            return (
              <motion.article
                key={application.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className="group relative min-h-[430px] overflow-hidden rounded-[4px] bg-[#0b2230]"
              >
                <Image
                  src={application.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041722] via-[#041722]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <Icon className="h-8 w-8 text-[#70c4ef]" />
                  <h3 className="mt-4 text-3xl font-black">{application.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {application.description}
                  </p>
                  <Link
                    href="/products"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold"
                  >
                    Know More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Media() {
  return (
    <section id="media" className="bg-[#f4f9fc] py-24 md:py-36">
      <div className="mx-auto max-w-[1160px] px-5">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-black text-[#001836] md:text-6xl">Media</h2>
            <div className="mt-3 h-[5px] w-[60px] bg-black" />
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.12em]"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-[1.25fr_0.75fr]">
          <article className="group relative min-h-[480px] overflow-hidden bg-black">
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=88"
              alt=""
              fill
              className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 65vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 p-8 text-white">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#70c4ef]">
                Articles
              </span>
              <h3 className="mt-3 max-w-xl text-3xl font-black leading-tight md:text-4xl">
                Placeholder title for your latest company story
              </h3>
            </div>
          </article>
          <div className="grid gap-6">
            {["Events & Exhibitions", "Case Study"].map((title) => (
              <article
                key={title}
                className="flex min-h-[228px] flex-col justify-end bg-[#001836] p-7 text-white transition-colors hover:bg-[#1f7eae]"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">
                  Placeholder
                </span>
                <h3 className="mt-3 text-2xl font-black">{title}</h3>
                <ArrowRight className="mt-6 h-5 w-5" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0876b7] text-white">
      <div className="mx-auto grid max-w-[1160px] gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <BrandMark inverse />
          <p className="mt-7 max-w-sm text-sm leading-7 text-white/75">
            Placeholder company address, industrial estate, city, state, postal
            code, country.
          </p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-white/55">
            Contact
          </p>
          <p className="mt-5 text-sm leading-8">
            +00 00000 00000
            <br />
            hello@placeholder.com
          </p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-white/55">
            Quick Links
          </p>
          <div className="mt-5 grid grid-cols-2 gap-y-3 text-sm font-bold">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1160px] flex-col justify-between gap-3 px-5 py-5 text-xs text-white/65 sm:flex-row">
          <p>© 20XX Bhakti Industries. Placeholder rights statement.</p>
          <p>Terms of Use &nbsp; | &nbsp; Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export function PuckLandingPage() {
  return (
    <div className="bg-white text-[#101010]">
      <Header />
      <main>
        <Hero />
        <CampaignFilm />
        <About />
        <Applications />
        <Media />
      </main>
      <Footer />
    </div>
  );
}
