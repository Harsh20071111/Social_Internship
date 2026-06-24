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



export function PuckFooter() {
  return (
    <footer className="bg-[#fcf8f9] text-[#001836] border-t border-black/10">
      <div className="mx-auto grid max-w-[1160px] gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <PuckBrandMark />
          <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-[#001836]/55">
            ADDRESS
          </p>
          <p className="mt-3 text-sm leading-7 text-[#001836]/75">
            7, Kumar Estate,
            <br />
            B/S Bank of Baroda, nr. Shayona Estate,
            <br />
            Naroda Road,
            <br />
            Ahmedabad - 380025.
          </p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#001836]/60">
            Contact
          </p>
          <p className="mt-5 text-sm leading-8">
            +91 94278 06585
          </p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#001836]/60">
            Quick Links
          </p>
          <div className="mt-5 grid grid-cols-2 gap-y-3 text-sm font-bold">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-[#001836]/70 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-[1160px] flex-col justify-between gap-3 px-5 py-5 text-xs text-[#001836]/65 sm:flex-row">
          <p>© 20XX Bhakti Industries. Placeholder rights statement.</p>
          <p>Terms of Use &nbsp; | &nbsp; Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
