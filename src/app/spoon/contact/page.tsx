import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { PuckPage } from "@/components/layout/PuckPage";

export default function SpoonContactPage() {
  return (
    <PuckPage
      hero="Contact Us"
      eyebrow="Cutlery Division"
      subtitle="Get in touch with the Bhakti Cutlery sales team"
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
                <ContactRow icon={Phone} label="Sales & Bulk Orders" value="+91 94278 06585" href="tel:+919427806585" />
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
