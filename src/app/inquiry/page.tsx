import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { PuckPage } from "@/components/layout/PuckPage";

export default function InquiryPage() {
  return (
    <PuckPage>
      <section className="py-16 md:py-24 bg-[#f5f5f5] dark:bg-[#12162e]">
        <div className="mx-auto max-w-[1160px] px-5">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-center">
            <div>
              <p className="text-sm font-bold text-black/45 dark:text-zinc-400">Industry</p>
              <h2 className="mt-2 text-3xl font-black text-[#001836] dark:text-white uppercase tracking-tight">BHAKTI INDUSTRIES</h2>
              <address className="mt-6 not-italic text-base leading-7 text-black/60 dark:text-zinc-350">
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
            <div className="relative aspect-[1.67] w-full shadow-md rounded-lg overflow-hidden bg-white">
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
      <Icon className="mt-1 h-6 w-6 text-black/35 dark:text-zinc-400" />
      <div>
        <p className="text-sm font-bold text-black/45 dark:text-zinc-450">{label}</p>
        <p className="mt-1 font-black text-[#001836] dark:text-[#318bc1]">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
