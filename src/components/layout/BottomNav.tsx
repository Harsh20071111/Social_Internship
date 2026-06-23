"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, Cog, Info, Phone } from "lucide-react";

const tabs = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Products", icon: Package },
  { href: "/machinery", label: "Machinery", icon: Cog },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Phone },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e5e2e3] bg-[#fcf8f9] md:hidden">
      <div className="mx-auto flex h-[68px] max-w-lg items-center justify-around px-2">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = tab.icon;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`relative flex flex-col items-center gap-0.5 px-3 py-1 transition-colors duration-150 ${
                isActive
                  ? "text-[#001836]"
                  : "text-[#737780] hover:text-[#43474f]"
              }`}
            >
              {isActive && (
                <span className="absolute -top-px h-0.5 w-8 rounded-full bg-[#001836]" />
              )}
              <Icon
                className="h-5 w-5"
                strokeWidth={isActive ? 2.5 : 1.75}
                fill={isActive ? "#001836" : "none"}
                fillOpacity={isActive ? 0.08 : 0}
              />
              <span
                className={`text-[10px] ${
                  isActive ? "font-semibold" : "font-medium"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
