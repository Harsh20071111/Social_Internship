"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Media", href: "/#media" },
  { label: "Careers", href: "/contact" },
  { label: "Applications", href: "/factories" },
  { label: "Products", href: "/products", dropdown: true },
  { label: "Contact Us", href: "/contact", dropdown: true },
  { label: "Our Verticals", href: "/factories", dropdown: true },
];

export function PuckBrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Bhakti Industries home">
      <div
        className={`relative flex h-[52px] w-[104px] items-center justify-center border-2 px-3 ${
          inverse ? "border-white text-white" : "border-[#4396c8] text-[#318bc1]"
        }`}
      >
        <span className="puck-logo-word text-[25px] font-black italic tracking-[-0.08em]">
          BHAKTI
        </span>
        <span
          className={`absolute -bottom-[7px] right-2 px-1 text-[7px] font-bold uppercase tracking-[0.18em] ${
            inverse ? "bg-[#0876b7] text-white" : "bg-white text-[#111]"
          }`}
        >
          Industries
        </span>
      </div>
      <div className="hidden h-[44px] w-[44px] items-center justify-center rounded-full border border-[#f0a13a] text-[#e87d24] sm:flex">
        <Sparkles className="h-5 w-5" />
      </div>
    </Link>
  );
}

export function PuckHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const inverse = overlay;

  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-50 text-white"
          : "relative z-50 bg-white text-[#111]"
      }
    >
      <div className="mx-auto flex h-[96px] max-w-[1160px] items-center justify-between px-5">
        <PuckBrandMark inverse={inverse} />
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1 text-[14px] font-bold transition-opacity hover:opacity-65 ${
                inverse ? "text-white" : "text-[#111]"
              }`}
            >
              {item.label}
              {item.dropdown && <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.5} />}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`flex h-11 w-11 items-center justify-center border lg:hidden ${
            inverse ? "border-white/40" : "border-black/10"
          }`}
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
          className="border-t border-black/10 bg-white px-5 py-5 text-[#111] lg:hidden"
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

export function PuckFooter() {
  return (
    <footer className="bg-[#0876b7] text-white">
      <div className="mx-auto grid max-w-[1160px] gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <PuckBrandMark inverse />
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
