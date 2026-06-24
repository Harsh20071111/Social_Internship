import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { PuckPage } from "@/components/layout/PuckPage";
import { MobileLayout } from "@/components/mobile/MobileLayout";
import { MobileFooter } from "@/components/mobile/MobileFooter";

export default function ContactPage() {
  return (
    <>
      {/* ── Mobile Version ── */}
      <div className="md:hidden bg-[#f9f9ff] text-[#181c23] antialiased">
        <MobileLayout>
          {/* Header text */}
          <section className="px-[20px] py-[16px] flex flex-col gap-[8px]">
            <h1 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold text-[#000000]">Direct Enquiry</h1>
            <p className="text-[18px] leading-[28px] font-normal text-[#5f5e5f]">Submit your technical requirements and our engineering team will get back to you within 24 hours.</p>
          </section>

          {/* Form */}
          <section className="mx-[20px] bg-[#ffffff] border border-[#c4c6ce] rounded-[0.125rem] p-[16px] flex flex-col gap-[16px]">
            <div>
              <label className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#5c5f60] uppercase mb-[4px] block" htmlFor="name">Full Name</label>
              <input className="border border-[#5c5f60] rounded-[0.125rem] p-[12px] w-full text-[16px] leading-[24px] font-normal bg-transparent focus:outline-none focus:border-[#000000] focus:shadow-[inset_0_0_0_1px_#000000]" id="name" placeholder="John Doe" type="text" />
            </div>
            <div>
              <label className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#5c5f60] uppercase mb-[4px] block" htmlFor="company">Company Name</label>
              <input className="border border-[#5c5f60] rounded-[0.125rem] p-[12px] w-full text-[16px] leading-[24px] font-normal bg-transparent focus:outline-none focus:border-[#000000] focus:shadow-[inset_0_0_0_1px_#000000]" id="company" placeholder="Acme Corp" type="text" />
            </div>
            <div>
              <label className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#5c5f60] uppercase mb-[4px] block" htmlFor="email">Business Email</label>
              <input className="border border-[#5c5f60] rounded-[0.125rem] p-[12px] w-full text-[16px] leading-[24px] font-normal bg-transparent focus:outline-none focus:border-[#000000] focus:shadow-[inset_0_0_0_1px_#000000]" id="email" placeholder="john.doe@acmecorp.com" type="email" />
            </div>
            <div>
              <label className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#5c5f60] uppercase mb-[4px] block" htmlFor="requirements">Technical Requirements</label>
              <textarea className="border border-[#5c5f60] rounded-[0.125rem] p-[12px] w-full text-[16px] leading-[24px] font-normal bg-transparent focus:outline-none focus:border-[#000000] focus:shadow-[inset_0_0_0_1px_#000000] h-32 resize-none" id="requirements" placeholder="Please specify material, tolerances, and volume..."></textarea>
            </div>
            <button className="w-full bg-[#b30000] text-[#ffffff] text-[16px] leading-[24px] font-normal font-medium py-[12px] rounded-[0.125rem] uppercase tracking-wider hover:brightness-90 active:scale-95 transition-all mt-[4px]">
              Submit Enquiry
            </button>
          </section>

          {/* Operational Hub */}
          <section className="px-[20px] py-[48px] flex flex-col gap-[16px]">
            <h2 className="text-[24px] leading-[32px] font-semibold text-[#000000] border-b border-[#c4c6ce] pb-[8px]">Operational Hub</h2>
            <div className="flex gap-[16px] items-start">
              <span className="material-symbols-outlined text-[#5f5e5f] mt-[4px] mat-symbols" data-icon="location_on">location_on</span>
              <div>
                <h3 className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#000000] uppercase mb-[4px]">Address</h3>
                <p className="text-[16px] leading-[24px] font-normal text-[#5f5e5f]">
                  7, Kumar Estate,<br/>
                  B/S Bank of Baroda, nr. Shayona Estate,<br/>
                  Naroda Road,<br/>
                  Ahmedabad - 380025.
                </p>
              </div>
            </div>
            <div className="flex gap-[16px] items-start">
              <span className="material-symbols-outlined text-[#5f5e5f] mt-[4px] mat-symbols" data-icon="call">call</span>
              <div>
                <h3 className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#000000] uppercase mb-[4px]">Direct Line</h3>
                <p className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#000000]">+91 94278 06585</p>
              </div>
            </div>
            <div className="flex gap-[16px] items-start">
              <span className="material-symbols-outlined text-[#5f5e5f] mt-[4px] mat-symbols" data-icon="mail">mail</span>
              <div>
                <h3 className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#000000] uppercase mb-[4px]">Support Desk</h3>
                <p className="text-[16px] leading-[24px] font-normal text-[#000000]">enquiry@bhaktiindustries.com</p>
              </div>
            </div>
          </section>

          <MobileFooter />
        </MobileLayout>
      </div>
      {/* ── Desktop Version ── */}
      <div className="hidden md:block">
        <PuckPage
          hero="Contact Us"
          subtitle="Get in touch with us"
        >
          <section className="py-16 md:py-24">
            <div className="mx-auto max-w-[1160px] px-5">
              <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
                <div>
                  <p className="text-sm font-bold text-black/45">Industry</p>
                  <h2 className="mt-2 text-3xl font-black text-[#001836]">BHAKTI INDUSTRIES</h2>
                  <address className="mt-6 not-italic text-base leading-7 text-black/60">
                    7, Kumar Estate
                    <br />
                    B/S Bank of Baroda, nr. Shayona Estate
                    <br />
                    Naroda Road, Ahmedabad - 380025
                  </address>
                  <div className="mt-8 space-y-5">
                    <ContactRow icon={Phone} label="Phone" value="+91 94278 06585" href="tel:+919427806585" />
                    <ContactRow icon={MapPin} label="Working Hours" value="Tue–Sun, 9:00 AM – 6:00 PM" />
                  </div>
                </div>
                <div className="relative aspect-[1.67] w-full shadow-md">
                  <Image
                    src="/bhakti-card-new.jpg"
                    alt="Bhakti Industries Business Card"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        </PuckPage>
      </div>
    </>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex gap-4">
      <Icon className="mt-1 h-6 w-6 text-black/35" />
      <div>
        <p className="text-sm font-bold text-black/45">{label}</p>
        <p className="mt-1 font-black text-[#001836]">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
