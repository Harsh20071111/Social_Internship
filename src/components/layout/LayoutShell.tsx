"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

function HomeNavbar({ isDark }: { isDark: boolean }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Bhakti Industries Logo"
            width={48}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Industry Name (centered) */}
        <span
          className={`absolute left-1/2 -translate-x-1/2 text-xl font-bold uppercase tracking-[0.15em] transition-all duration-300 sm:text-2xl ${
            isDark ? "text-white" : "text-[#001836]"
          }`}
          style={isDark ? { textShadow: "0 1px 4px rgba(0,0,0,0.45), 0 0 12px rgba(0,0,0,0.25)" } : undefined}
        >
          Bhakti Industries
        </span>

        {/* Enquiry Button */}
        <a
          href="https://wa.me/919427806585"
          target="_blank"
          rel="noopener noreferrer"
          className={`group/button inline-flex shrink-0 items-center justify-center h-10 rounded-sm px-5 text-xs font-semibold uppercase tracking-[0.06em] transition-all duration-300 outline-none select-none ${
            isDark
              ? "border border-white/50 bg-white/20 text-white shadow-[0_2px_8px_rgba(0,0,0,0.3)] backdrop-blur-md hover:bg-white hover:text-[#001836] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
              : "bg-[#001836] text-white hover:bg-[#002d5b]"
          }`}
        >
          For Enquiry
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isDarkNavbar, setIsDarkNavbar] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const container = document.getElementById("home-scroll-container");
    if (!container) return;

    const handleScroll = () => {
      const height = container.clientHeight;
      const scrollTop = container.scrollTop;
      const activeIndex = Math.round(scrollTop / height);
      setIsDarkNavbar(activeIndex >= 1);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    // Poll a few times initially to catch layout changes
    const interval = setInterval(handleScroll, 100);
    const timeout = setTimeout(() => clearInterval(interval), 1500);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isHome]);

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Desktop navbars are hidden on mobile — mobile layout handles its own header */}
      <div className="hidden md:block">
        {isHome ? <HomeNavbar isDark={isDarkNavbar} /> : <Navbar />}
      </div>
      <main className={`flex-1 flex flex-col ${isHome ? "" : "md:pt-16"}`}>{children}</main>
    </div>
  );
}
