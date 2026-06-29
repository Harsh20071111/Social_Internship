"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const defaultLinks = [
  { label: "Home", href: "/" },
  { label: "Spoons", href: "/spoon/products" },
  { label: "Impellers", href: "/impeller/products" },
  { label: "Spoon Machineries", href: "/spoon/machineries" },
  { label: "Impeller Machineries", href: "/impeller/machineries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const spoonLinks = [
  { label: "Home", href: "/" },
  { label: "Spoon Products", href: "/spoon/products" },
  { label: "Spoon Machineries", href: "/spoon/machineries" },
  { label: "About Spoons", href: "/spoon/about" },
  { label: "Contact", href: "/spoon/contact" },
];

const impellerLinks = [
  { label: "Home", href: "/" },
  { label: "Impeller Products", href: "/impeller/products" },
  { label: "Impeller Machineries", href: "/impeller/machineries" },
  { label: "About Impellers", href: "/impeller/about" },
  { label: "Contact", href: "/impeller/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() || "/";

  const isSpoon = pathname.startsWith("/spoon");
  const isImpeller = pathname.startsWith("/impeller");

  const navLinks = isSpoon
    ? spoonLinks
    : isImpeller
    ? impellerLinks
    : defaultLinks;

  // Helper to determine if a link is active based on current path
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d9dce3] bg-[#fcf8f9]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5"
        >
          <Image 
            src="/images/logo.png" 
            alt="Bhakti Industries Logo" 
            width={48} 
            height={48} 
            className="h-10 w-auto object-contain"
            priority
            sizes="(max-width: 768px) 40px, 48px"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`border-b-2 py-1 text-sm font-medium transition-colors ${
                  active
                    ? "border-[#001836] text-[#001836]"
                    : "border-transparent text-[#5c5f60] hover:text-[#001836]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Contact & Action */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+919427806585"
            className="flex items-center gap-1.5 text-[13px] font-medium text-[#43474f] transition-colors hover:text-[#001836]"
          >
            <Phone className="h-3.5 w-3.5" />
            +91 94278 06585
          </a>
          <a
            href="https://wa.me/919427806585"
            target="_blank"
            rel="noopener noreferrer"
            className="group/button inline-flex shrink-0 items-center justify-center h-10 rounded-sm bg-[#001836] px-5 text-xs font-semibold uppercase tracking-[0.06em] text-white shadow-none hover:bg-[#002d5b] transition-all outline-none select-none"
          >
            For Enquiry
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#d9dce3] text-[#001836] md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          className="border-t border-[#e5e2e3] bg-[#fcf8f9] px-5 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-[1600px] flex-col gap-1">
            <div className="mb-4">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5"
              >
                <Image 
                  src="/images/logo.png" 
                  alt="Bhakti Industries Logo" 
                  width={48} 
                  height={48} 
                  className="h-10 w-auto object-contain"
                  priority
                  sizes="(max-width: 768px) 40px, 48px"
                />
              </Link>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-sm px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-[#f0edee] text-[#001836]"
                    : "text-[#43474f] hover:bg-[#f0edee] hover:text-[#001836]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919427806585"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="group/button inline-flex shrink-0 items-center justify-center mt-3 h-10 rounded-sm bg-[#001836] text-sm text-white shadow-none hover:bg-[#002d5b] transition-all outline-none select-none w-full"
            >
              For Enquiry
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
