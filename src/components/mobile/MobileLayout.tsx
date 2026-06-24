"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", icon: "home", label: "Home" },
  { href: "/spoon/products", icon: "precision_manufacturing", label: "Products" },
  { href: "/about", icon: "info", label: "About Us" },
  { href: "/contact", icon: "mail", label: "Contact" },
];

function useActivePage() {
  const pathname = usePathname();
  if (pathname === "/") return 0;
  if (pathname.startsWith("/spoon") || pathname.startsWith("/impeller") || pathname.startsWith("/products")) return 1;
  if (pathname.startsWith("/about")) return 2;
  if (pathname.startsWith("/contact") || pathname.startsWith("/inquiry")) return 3;
  return 0;
}

export function MobileLayout({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeIndex = useActivePage();

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
      />

      {/* NavigationDrawer */}
      <nav
        className={`fixed inset-y-0 left-0 z-50 flex flex-col p-4 h-full w-72 rounded-r-none shadow-sm bg-[#f9f9ff] dark:bg-[#d7dae4] transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#5c5f60] uppercase">BHAKTI INDUSTRIES</h2>
          <button
            className="p-2 text-[#000000] dark:text-[#ffffff] active:scale-[0.98] transition-transform"
            onClick={closeDrawer}
          >
            <span className="material-symbols-outlined mat-symbols">close</span>
          </button>
        </div>
        <div className="flex flex-col gap-1">
          {navItems.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeDrawer}
                className={`flex items-center gap-4 px-4 py-3 rounded-sm text-[16px] leading-[24px] font-[400] transition-all active:scale-[0.98] ${
                  isActive
                    ? "bg-[#e2dfe0] text-[#646263] font-semibold"
                    : "text-[#5f5e5f] hover:bg-[#e5e8f2]"
                }`}
              >
                <span
                  className="material-symbols-outlined mat-symbols"
                  style={{ fontVariationSettings: `'FILL' ${isActive ? 1 : 0}` }}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* TopAppBar */}
      <header className="w-full sticky top-0 z-40 border-b border-[#c4c6ce] dark:border-[#74777e] bg-[#f9f9ff] dark:bg-[#181c23] flex items-center justify-between px-5 py-2">
        <div className="flex items-center gap-2">
          <button
            className="p-2 text-[#000000] dark:text-[#ffffff] hover:bg-[#f0f3fd] transition-colors active:opacity-80 rounded-full flex items-center justify-center"
            onClick={toggleDrawer}
          >
            <span className="material-symbols-outlined mat-symbols" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
          </button>
          <h1 className="text-[24px] leading-[32px] font-semibold text-[#000000] dark:text-[#ffffff] uppercase tracking-tight">Bhakti Industries</h1>
        </div>
        <a
          href="https://wa.me/919427806585"
          className="text-[#fb3232] hover:bg-[#f0f3fd] transition-colors active:opacity-80 text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase px-4 py-2 rounded-sm"
        >
          Enquiry
        </a>
      </header>

      {/* Page Content */}
      <main className={`flex flex-col w-full ${className}`}>
        {children}
      </main>
    </>
  );
}
