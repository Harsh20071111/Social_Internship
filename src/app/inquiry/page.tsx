"use client";

import { FileCheck2, PackageCheck, Send, Users } from "lucide-react";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";

const steps = [
  { icon: FileCheck2, number: "01", title: "Share Requirements" },
  { icon: Users, number: "02", title: "Technical Review" },
  { icon: PackageCheck, number: "03", title: "Sample & Production" },
];

const control =
  "h-12 w-full border border-black/15 bg-white px-4 text-sm outline-none focus:border-[#001836]";

export default function InquiryPage() {
  return (
    <PuckPage
      hero="Request a Quote"
      subtitle="Share placeholder project details and replace them later with your real inquiry workflow."
    >
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1160px] px-5">
          <PuckSectionTitle center>How It Works</PuckSectionTitle>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative border border-black/10 p-7">
                <span className="absolute right-5 top-3 text-6xl font-black text-[#eef7fc]">{step.number}</span>
                <step.icon className="relative h-8 w-8 text-[#001836]" />
                <h2 className="relative mt-8 text-xl font-black">{step.title}</h2>
                <p className="relative mt-3 text-sm leading-6 text-black/55">
                  Placeholder description for this inquiry stage.
                </p>
              </div>
            ))}
          </div>

          <form className="mt-20 bg-[#f3f8fb] p-6 md:p-12">
            <div className="grid gap-6 md:grid-cols-2">
              <InputBlock label="Company Name"><input className={control} placeholder="Your company" /></InputBlock>
              <InputBlock label="Contact Person"><input className={control} placeholder="Full name" /></InputBlock>
              <InputBlock label="Email Address"><input type="email" className={control} placeholder="work@company.com" /></InputBlock>
              <InputBlock label="Phone Number"><input type="tel" className={control} placeholder="+00 00000 00000" /></InputBlock>
              <InputBlock label="Product Category">
                <select className={control} defaultValue="">
                  <option value="" disabled>Select category</option>
                  <option>Precision Pump Systems</option>
                  <option>Electric Motors</option>
                  <option>Industrial Valves</option>
                  <option>Filtration Units</option>
                  <option>Custom / OEM</option>
                </select>
              </InputBlock>
              <InputBlock label="Estimated Quantity">
                <select className={control} defaultValue="">
                  <option value="" disabled>Select quantity</option>
                  <option>Placeholder range 01</option>
                  <option>Placeholder range 02</option>
                  <option>Placeholder range 03</option>
                </select>
              </InputBlock>
              <InputBlock label="Detailed Requirements" wide>
                <textarea className={`${control} h-40 resize-none py-3`} placeholder="Specifications, materials, quantities, and timeline..." />
              </InputBlock>
            </div>
            <button type="button" className="mt-7 inline-flex h-12 items-center gap-2 bg-[#001836] px-8 text-sm font-black uppercase tracking-[0.08em] text-white">
              Submit Inquiry <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </PuckPage>
  );
}

function InputBlock({ label, children, wide = false }: { label: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <label className={wide ? "md:col-span-2" : ""}>
      <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-black/55">{label}</span>
      {children}
    </label>
  );
}
