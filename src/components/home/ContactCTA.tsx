"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeUp";

export function ContactCTA() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <FadeIn startScale={0.97}>
          <div className="rounded-lg border border-[#e5e2e3] bg-[#001836] px-8 py-14 text-center md:px-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7696ca]">
              Let&apos;s Work Together
            </p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[36px] tracking-tight text-white md:text-[32px] md:leading-[40px]">
              Ready to Scale Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-[24px] text-white/70">
              Whether you need bulk orders, OEM products, or custom
              manufacturing solutions — our team is ready to discuss your
              requirements.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/inquiry">
                <Button className="h-11 rounded bg-white px-7 text-[14px] font-semibold text-[#001836] shadow-none hover:bg-[#f0edee] transition-colors duration-200">
                  Submit Bulk Inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button
                  variant="outline"
                  className="h-11 rounded border-white/20 bg-transparent px-7 text-[14px] font-medium text-white shadow-none hover:border-white/40 hover:bg-white/5 transition-colors duration-200"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
