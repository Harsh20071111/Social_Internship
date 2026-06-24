import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Hammer, Cog, Sparkles, Scissors, ScanLine } from "lucide-react";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";

const spoonMachines = [
  {
    name: "Manual Polishing Station",
    description: "Heavy-duty double-ended bench motor setup utilized for precise, manual polishing and edge-buffing of stainless steel spoons.",
    image: "/images/manual-polishing.png",
  },
  {
    name: "Rotary Tumbling Machine",
    description: "Industrial rotating barrel equipment designed for bulk deburring, smoothing, and mass finishing of metal cutlery components.",
    image: "/images/rotary-tumbling.png",
  },
];

export default function SpoonMachineryPage() {
  return (
    <PuckPage
      hero="Spoon Machinery"
      subtitle="State-of-the-art manufacturing equipment for precision cutlery production"
    >
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-black text-[#001836]"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          
          <div className="mt-6">
            <PuckSectionTitle>Cutlery Manufacturing Equipment</PuckSectionTitle>
          </div>
          <p className="mt-5 max-w-[720px] text-base leading-7 text-black/60">
            Our spoon production line is equipped with specialized machinery designed exclusively for high-volume, high-quality stainless steel cutlery manufacturing. From initial sheet blanking to final mirror polishing, every stage is optimized for precision.
          </p>
          
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {spoonMachines.map((machine) => {
              return (
                <article
                  key={machine.name}
                  className="group overflow-hidden rounded-lg border border-black/10 bg-white transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f3f3f3]">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-black text-zinc-900">{machine.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/60">
                      {machine.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </PuckPage>
  );
}
