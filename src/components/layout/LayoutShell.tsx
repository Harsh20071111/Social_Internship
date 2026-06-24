"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

function HomeNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
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
          className="absolute left-1/2 -translate-x-1/2 text-lg font-bold uppercase tracking-[0.15em] text-white sm:text-xl"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.45), 0 0 12px rgba(0,0,0,0.25)" }}
        >
          Bhakti Industries
        </span>

        {/* Request Quote */}
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
    </header>
  );
}

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className={`flex flex-col min-h-screen w-full ${isHome ? "" : "pt-16"}`}>
      {isHome ? <HomeNavbar /> : <Navbar />}
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
