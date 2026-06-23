"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Factory,
  Menu,
  Phone,
  Utensils,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Factories", href: "/factories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Factory Safety", href: "#" },
  { label: "Global Logistics", href: "#" },
];

type FeaturePanelProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  imagePosition: string;
  icon: LucideIcon;
  tone: "light" | "dark";
  headingLevel: "h1" | "h2";
  align?: "left" | "right";
};

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d9dce3] bg-[#fcf8f9]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="text-[17px] font-bold tracking-[-0.02em] text-[#001836] sm:text-xl"
        >
          BHAKTI INDUSTRIES
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={`border-b-2 py-1 text-sm font-medium transition-colors ${
                index === 0
                  ? "border-[#001836] text-[#001836]"
                  : "border-transparent text-[#5c5f60] hover:text-[#001836]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 text-xs font-medium text-[#5c5f60] transition-colors hover:text-[#001836]"
          >
            <Phone className="h-3.5 w-3.5" />
            +91 98765 43210
          </a>
          <Button
            render={<Link href="/inquiry" />}
            nativeButton={false}
            className="h-10 rounded-sm bg-[#001836] px-5 text-xs font-semibold uppercase tracking-[0.06em] text-white shadow-none hover:bg-[#002d5b]"
          >
              Request Quote
              <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

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

      {mobileOpen && (
        <nav
          className="border-t border-[#e5e2e3] bg-[#fcf8f9] px-5 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-[1600px] flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-sm px-3 py-2.5 text-sm font-medium text-[#43474f] hover:bg-[#f0edee] hover:text-[#001836]"
              >
                {link.label}
              </Link>
            ))}
            <Button
              render={
                <Link href="/inquiry" onClick={() => setMobileOpen(false)} />
              }
              nativeButton={false}
              className="mt-3 h-10 rounded-sm bg-[#001836] text-sm text-white shadow-none hover:bg-[#002d5b]"
            >
              Request Quote
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

function FeaturePanel({
  eyebrow,
  title,
  description,
  cta,
  href,
  image,
  imagePosition,
  icon: Icon,
  tone,
  headingLevel,
  align = "left",
}: FeaturePanelProps) {
  const isDark = tone === "dark";
  const Heading = headingLevel;
  const isRightAligned = align === "right";

  return (
    <article className="group relative min-h-[calc(100svh-4rem)] overflow-hidden border-b border-white/15">
      <div
        className="absolute inset-0 scale-[1.01] bg-cover bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundPosition: imagePosition,
        }}
        role="img"
        aria-label={`${title} product collection`}
      />

      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-t from-[#001836] via-[#001836]/62 to-[#001836]/12"
            : "bg-gradient-to-t from-[#f8f8f7]/95 via-[#f8f8f7]/40 to-black/5"
        }`}
      />

      <div
        className={`relative z-10 flex min-h-[calc(100svh-4rem)] items-end p-5 sm:p-8 lg:p-10 xl:p-14 ${
          isRightAligned ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`w-full max-w-[540px] border p-6 backdrop-blur-md sm:p-8 ${
            isDark
              ? "border-white/15 bg-[#001836]/82 text-white"
              : "border-white/50 bg-white/82 text-[#001836]"
          }`}
        >
          <div
            className={`mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] ${
              isDark ? "text-[#a7c8ff]" : "text-[#5c5f60]"
            }`}
          >
            <Icon className="h-4 w-4" strokeWidth={1.8} />
            <span>{eyebrow}</span>
          </div>

          <Heading className="max-w-[440px] text-[38px] font-semibold leading-[1.03] tracking-[-0.035em] sm:text-5xl xl:text-[56px]">
            {title}
          </Heading>

          <p
            className={`mt-5 max-w-[480px] text-sm leading-6 sm:text-base ${
              isDark ? "text-white/72" : "text-[#43474f]"
            }`}
          >
            {description}
          </p>

          <Button
            render={<Link href={href} />}
            nativeButton={false}
            variant={isDark ? "outline" : "default"}
            className={`mt-7 h-12 rounded-sm px-6 text-xs font-semibold uppercase tracking-[0.08em] shadow-none ${
              isDark
                ? "border-white/45 bg-transparent text-white hover:bg-white hover:text-[#001836]"
                : "bg-[#001836] text-white hover:bg-[#002d5b]"
            }`}
          >
            {cta}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#d9dce3] bg-white">
      <div className="mx-auto grid max-w-[1600px] gap-7 px-5 py-8 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-10">
        <div>
          <p className="text-lg font-bold tracking-tight text-[#001836]">
            BHAKTI INDUSTRIES
          </p>
          <p className="mt-2 text-xs leading-5 text-[#5c5f60]">
            © 2026 Bhakti Industries. All rights reserved. ISO 9001:2015 Certified.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#43474f] transition-colors hover:text-[#001836]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#fcf8f9] pt-16 text-[#1b1b1c] antialiased">
      <Navbar />
      <main className="flex flex-col">
        <FeaturePanel
          eyebrow="Precision Cutlery"
          title="The Spoon Collection"
          description="Engineered with metallurgical precision. Our premier line of industrial-grade spoons combines high-tolerance manufacturing with rigorous ergonomic design."
          cta="Explore Spoons"
          href="/products"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuBCYJ8a1Ig2LhzbOiISmz5W2yPI7DdlidbmwfGRv-zAOKQgeO69knptfCxcuAhtszteWCYN5pHQr2GUVr9Vr4bk-4mC5HdI2SSZitDnIR76tKb81p1hSHyL_8bNhBUhPjKYVcokAaHPX-w2NhLRlqs5X4MnoBWcUikuLjMriA0BI0BjFuDmQrAQv3dVs1LhG6dSm9nziNu6R4Y_qMaBPcTzIYUs16wgnH9Q5vywCLNTeyPTxpWgTD2lrc2Rhx4t7fcRA3x7f8bYzz8"
          imagePosition="center center"
          icon={Utensils}
          tone="light"
          headingLevel="h1"
          align="left"
        />
        <FeaturePanel
          eyebrow="Heavy Duty Assembly"
          title="The Ambular Series"
          description="Robust. Reliable. Ready for scale. The Ambular series sets the standard for high-capacity structural components built for demanding operational environments."
          cta="Explore Ambular"
          href="/products"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuARJjGqeII7uT_I8n2GcLlStbxdtpYIfN_1yMN_BEVewBAPrr9GqgFRphdfY6mS9CBi2HvRPEPxGbGA0FYYpJSIFN_X9FApjooZlMRXedgpQ3PW1qPfzRslQdISSdlVZIVQc-jIfMuOPcvs6o89DQQrQu8pcIjybkIe9jN6uYJaIJ4SOJABtfeE19Uvgclc_v2ADoh7PA3TgQUgeAXteX3yW8cjtuKNOq6UH4_SyfL_mordKWGTsPyUI0PaYLhLyhNhqL1ke2aEc-M"
          imagePosition="58% center"
          icon={Factory}
          tone="dark"
          headingLevel="h2"
          align="right"
        />
      </main>
      <Footer />
    </div>
  );
}
