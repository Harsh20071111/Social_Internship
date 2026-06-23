"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/factories", label: "Factories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e2e3] bg-white">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-[#001836]">
            <span className="text-sm font-bold text-white leading-none">B</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold leading-tight tracking-tight text-[#1b1b1c]">
              Bhakti Industries
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#737780]">
              Industries
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-[#43474f] transition-colors duration-200 hover:text-[#001836]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 text-[13px] font-medium text-[#43474f]"
          >
            <Phone className="h-3.5 w-3.5" />
            +91 98765 43210
          </a>
          <Link href="/inquiry">
            <Button className="h-9 rounded bg-[#001836] px-5 text-[13px] font-semibold text-white shadow-none hover:bg-[#002d5b] transition-colors duration-200">
              Request Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded border border-[#e5e2e3] md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-4 w-4 text-[#1b1b1c]" />
          ) : (
            <Menu className="h-4 w-4 text-[#1b1b1c]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-[#e5e2e3] bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded px-3 py-2.5 text-[14px] font-medium text-[#43474f] hover:bg-[#f0edee] hover:text-[#001836] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-[#e5e2e3] pt-3">
              <Link href="/inquiry" onClick={() => setMobileOpen(false)}>
                <Button className="w-full h-10 rounded bg-[#001836] text-[13px] font-semibold text-white shadow-none hover:bg-[#002d5b]">
                  Request Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
