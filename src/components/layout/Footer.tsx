import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  products: [
    { label: "Spoons & Cutlery", href: "/products" },
    { label: "Kitchenware", href: "/products" },
    { label: "Steel Utensils", href: "/products" },
    { label: "Household Products", href: "/products" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Spoon Machinery", href: "/spoon/machineries" },
    { label: "Impeller Machinery", href: "/impeller/machineries" },
    { label: "Certifications", href: "/about" },
    { label: "Careers", href: "/contact" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Bulk Inquiry", href: "/inquiry" },
    { label: "Dealer Portal", href: "/contact" },
    { label: "FAQ", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#e5e2e3] bg-[#001836] pb-[68px] md:pb-0">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1280px] px-6 py-12 md:py-16">
        {/* Mobile: compact single column */}
        <div className="space-y-8 md:hidden">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-white/95 rounded p-1.5 w-fit">
              <Image 
                src="/images/logo.png" 
                alt="Bhakti Industries Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] leading-[20px] text-[#a7c8ff]/70">
              Leading manufacturer of premium kitchenware, steel utensils, and
              household products since 1998.
            </p>
          </div>

          {/* Link rows */}
          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
            <div>
              <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7696ca]">
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.slice(0, 2).map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[13px] text-[#a7c8ff]/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7696ca]">
                Support
              </h4>
              <ul className="space-y-2">
                {footerLinks.support.slice(0, 2).map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[13px] text-[#a7c8ff]/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-2 border-t border-white/10 pt-4">
            <a href="tel:+919427806585" className="flex items-center gap-2 text-[13px] text-[#a7c8ff]/70 hover:text-white transition-colors">
              <Phone className="h-3.5 w-3.5 shrink-0" />
              +91 94278 06585
            </a>
            <a href="mailto:info@bhaktiindustries.com" className="flex items-center gap-2 text-[13px] text-[#a7c8ff]/70 hover:text-white transition-colors">
              <Mail className="h-3.5 w-3.5 shrink-0" />
              info@bhaktiindustries.com
            </a>
            <div className="flex items-start gap-2 text-[13px] text-[#a7c8ff]/70">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Rajkot, Gujarat
            </div>
          </div>
        </div>

        {/* Desktop: 4-column grid (unchanged) */}
        <div className="hidden gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
<div className="space-y-5">
             <Link href="/" className="inline-block bg-white/95 rounded p-1.5 w-fit">
               <Image 
                 src="/images/logo.png" 
                 alt="Bhakti Industries Logo" 
                 width={120} 
                 height={40} 
                 className="h-8 w-auto object-contain"
                 loading="lazy"
               />
             </Link>
             <p className="text-[13px] leading-[20px] text-[#a7c8ff]/70">
               Leading manufacturer of premium kitchenware, steel utensils, and
               household products. Three state-of-the-art facilities serving
               clients nationwide since 1998.
             </p>
            <div className="space-y-2.5">
              <a
                href="tel:+919427806585"
                className="flex items-center gap-2 text-[13px] text-[#a7c8ff]/70 hover:text-white transition-colors duration-200"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" />
                +91 94278 06585
              </a>
              <a
                href="mailto:info@bhaktiindustries.com"
                className="flex items-center gap-2 text-[13px] text-[#a7c8ff]/70 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                info@bhaktiindustries.com
              </a>
              <div className="flex items-start gap-2 text-[13px] text-[#a7c8ff]/70">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                Plot No. 12, Industrial Area, Rajkot, Gujarat 360003
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7696ca]">
              Products
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-[13px] text-[#a7c8ff]/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7696ca]">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#a7c8ff]/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7696ca]">
              Support
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-[13px] text-[#a7c8ff]/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-6 py-4 sm:flex-row">
          <p className="text-[12px] text-center text-[#a7c8ff]/50">
            &copy; {new Date().getFullYear()} Bhakti Industries. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-[12px] text-[#a7c8ff]/50 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] text-[#a7c8ff]/50 hover:text-white transition-colors duration-200"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
