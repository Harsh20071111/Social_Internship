"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const defaultNavItems = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Spoon Machineries", href: "/spoon/machineries" },
  { label: "Impeller Machineries", href: "/impeller/machineries" },
  { label: "Contact Us", href: "/contact" },
];

const spoonNavItems = [
  { label: "Home", href: "/" },
  { label: "Spoon Products", href: "/spoon/products" },
  { label: "Spoon Machineries", href: "/spoon/machineries" },
  { label: "About Spoons", href: "/spoon/about" },
  { label: "Contact Us", href: "/spoon/contact" },
];

const impellerNavItems = [
  { label: "Home", href: "/" },
  { label: "Impeller Products", href: "/impeller/products" },
  { label: "Impeller Machineries", href: "/impeller/machineries" },
  { label: "About Impellers", href: "/impeller/about" },
  { label: "Contact Us", href: "/impeller/contact" },
];

export function PuckBrandMark({ inverse = false }: { inverse?: boolean }) {
  const pathname = usePathname() || "/";
  const isSpoon = pathname.startsWith("/spoon");
  const isImpeller = pathname.startsWith("/impeller");

  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Bhakti Industries home">
      <div className={`relative flex items-center gap-2.5 p-1.5 rounded-lg transition-all duration-200 ${inverse ? 'bg-white/95 shadow-sm' : ''}`}>
        <Image
          src="/images/logo.png"
          alt="Bhakti Industries Logo"
          width={44}
          height={44}
          className="h-11 w-auto object-contain"
        />
        {isSpoon && (
          <span className="font-bold tracking-wider text-[#001836] border-l-2 border-black/15 pl-2.5 text-[11px] uppercase">
            Spoon Division
          </span>
        )}
        {isImpeller && (
          <span className="font-bold tracking-wider text-[#001836] border-l-2 border-black/15 pl-2.5 text-[11px] uppercase">
            Pump Spares Division
          </span>
        )}
      </div>
    </Link>
  );
}



export function PuckFooter() {
  const pathname = usePathname() || "/";
  const isSpoon = pathname.startsWith("/spoon");
  const isImpeller = pathname.startsWith("/impeller");

  const navItems = isSpoon
    ? spoonNavItems
    : isImpeller
    ? impellerNavItems
    : defaultNavItems;

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
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-[#001836]/70 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-[1160px] flex-col justify-between gap-3 px-5 py-5 text-xs text-[#001836]/65 sm:flex-row">
          <p>© {new Date().getFullYear()} Bhakti Industries. All rights reserved.</p>
          <p>Terms of Use &nbsp; | &nbsp; Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
