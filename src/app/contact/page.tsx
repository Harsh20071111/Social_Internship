"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";

const inputClass =
  "h-12 w-full border border-black/15 bg-white px-4 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-[#318bc1]";

export default function ContactPage() {
  return (
    <PuckPage
      hero="Contact Us"
      subtitle="We're here to help!"
      heroImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=88"
    >
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1160px] px-5">
          <div className="grid gap-10 border-b border-black/10 pb-16 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
            <div>
              <p className="text-sm font-bold text-black/45">Corporate Office</p>
              <h2 className="mt-2 text-3xl font-black text-[#318bc1]">BHAKTI INDUSTRIES</h2>
              <address className="mt-6 not-italic text-base leading-7 text-black/60">
                Placeholder Corporate Campus
                <br />
                Industrial Road, Placeholder District
                <br />
                City 000000, Country
              </address>
            </div>
            <div className="space-y-6">
              <ContactRow icon={Phone} label="Telephone" value="+00 00000 00000" />
              <ContactRow icon={Mail} label="Customer Care Email" value="service@placeholder.com" />
            </div>
            <div className="space-y-6">
              <ContactRow icon={Phone} label="Customer Care No." value="+00 00000 00001" />
              <ContactRow icon={MapPin} label="Working Hours" value="Mon–Sat, 00:00–00:00" />
            </div>
          </div>

          <div className="mt-16 grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <PuckSectionTitle>Drop a Message</PuckSectionTitle>
              <p className="mt-7 text-base leading-7 text-black/60">
                Replace this text with your customer-support promise, response time,
                and preferred inquiry guidance.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {["Domestic Sales", "Export Sales", "Service Support"].map((department) => (
                  <div key={department} className="border-l-4 border-[#318bc1] bg-[#f5f9fc] p-5">
                    <p className="font-black">{department}</p>
                    <p className="mt-1 text-sm text-black/55">department@placeholder.com</p>
                  </div>
                ))}
              </div>
            </div>
            <form className="grid gap-5 bg-[#f5f9fc] p-6 md:grid-cols-2 md:p-9">
              <Field label="Name"><input className={inputClass} placeholder="Your name" /></Field>
              <Field label="Company"><input className={inputClass} placeholder="Company name" /></Field>
              <Field label="Email"><input type="email" className={inputClass} placeholder="name@company.com" /></Field>
              <Field label="Phone"><input type="tel" className={inputClass} placeholder="+00 00000 00000" /></Field>
              <Field label="Subject" wide><input className={inputClass} placeholder="How can we help?" /></Field>
              <Field label="Message" wide>
                <textarea className={`${inputClass} h-36 resize-none py-3`} placeholder="Write your message..." />
              </Field>
              <button type="button" className="inline-flex h-12 items-center justify-center gap-2 bg-[#318bc1] px-7 text-sm font-black uppercase tracking-[0.08em] text-white md:col-span-2 md:justify-self-start">
                Submit <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </PuckPage>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <Icon className="mt-1 h-6 w-6 text-black/35" />
      <div>
        <p className="text-sm font-bold text-black/45">{label}</p>
        <p className="mt-1 font-black text-[#318bc1]">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, children, wide = false }: { label: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <label className={wide ? "md:col-span-2" : ""}>
      <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-black/55">{label}</span>
      {children}
    </label>
  );
}
