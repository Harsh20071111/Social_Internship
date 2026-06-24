import React from "react";
import Link from "next/link";

export function MobileFooter() {
  return (
    <footer className="w-full bg-[#dfe2ec] border-t border-[#c4c6ce] px-5 py-12 flex flex-col gap-4 items-start">
      <span className="text-[12px] leading-[16px] font-semibold tracking-[0.05em] uppercase text-[#5c5f60]">
        BHAKTI INDUSTRIES
      </span>

      {/* Address */}
      <div className="flex flex-col gap-2 w-full">
        <h4 className="text-[12px] leading-[16px] font-semibold tracking-[0.05em] uppercase text-[#181c23]">
          ADDRESS
        </h4>
        <p className="text-[16px] leading-[24px] font-[400] text-[#5f5e5f]">
          7, Kumar Estate,<br />
          B/S Bank of Baroda, nr. Shayona Estate,<br />
          Naroda Road,<br />
          Ahmedabad - 380025.
        </p>
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-2 w-full mt-4">
        <h4 className="text-[12px] leading-[16px] font-semibold tracking-[0.05em] uppercase text-[#181c23]">
          CONTACT
        </h4>
        <a
          href="tel:+919427806585"
          className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#5f5e5f] hover:text-[#000000] transition-colors"
        >
          +91 94278 06585
        </a>
      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-4 w-full mt-4 border-t border-[#c4c6ce] pt-4">
        <Link href="/contact" className="text-[16px] leading-[24px] font-[400] text-[#5f5e5f] hover:text-[#000000] transition-colors">
          Contact
        </Link>
        <Link href="/products" className="text-[16px] leading-[24px] font-[400] text-[#5f5e5f] hover:text-[#000000] transition-colors">
          Products
        </Link>
        <Link href="/about" className="text-[16px] leading-[24px] font-[400] text-[#5f5e5f] hover:text-[#000000] transition-colors">
          About Us
        </Link>
        <Link href="/privacy" className="text-[16px] leading-[24px] font-[400] text-[#5f5e5f] hover:text-[#000000] transition-colors">
          Privacy Policy
        </Link>
      </div>

      {/* Copyright */}
      <div className="w-full border-t border-[#c4c6ce] pt-4 mt-4 flex flex-col gap-1">
        <p className="text-[16px] leading-[24px] font-[400] text-[#5f5e5f]">
          &copy; {new Date().getFullYear()} Bhakti Industries. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2">
          <Link href="/terms" className="text-[12px] leading-[16px] font-semibold tracking-[0.05em] uppercase text-[#5f5e5f] hover:text-[#000000] transition-colors">
            Terms of Use
          </Link>
          <Link href="/privacy" className="text-[12px] leading-[16px] font-semibold tracking-[0.05em] uppercase text-[#5f5e5f] hover:text-[#000000] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
