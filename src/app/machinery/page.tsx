import Image from "next/image";
import { Cog, Drill, Gauge, Wrench, Zap, Hammer, ScanLine } from "lucide-react";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";
import { MachineryVideoSection } from "@/components/home/MachineryVideoSection";

const machines = [
  {
    name: "Raj Lathe Machine",
    description: "Heavy-duty belt-driven lathe machine used for precision turning, threading, and finishing of impeller shafts and components with high accuracy.",
    icon: Cog,
    image: "/images/machinery-lathe-machine.jpg",
  },
  {
    name: "Hydraulic Stamping Press",
    description: "High-force hydraulic stamping press with integrated motor for precision forming and shaping of impeller components with consistent quality and repeatability.",
    icon: Hammer,
    image: "/images/machinery-stamping-press.jpg",
  },
  {
    name: "Accurate Drilling Station",
    description: "Accurate brand industrial drilling and spot welding station for precise hole-making and component assembly in impeller manufacturing.",
    icon: Drill,
    image: "/images/machinery-drilling-station.jpg",
  },
  {
    name: "Hydraulic Forming Press",
    description: "Heavy-duty hydraulic forming press with pressure gauge control, used for high-precision molding and shaping of K-series impeller components.",
    icon: Gauge,
    image: "/images/machinery-hydraulic-forming-press.jpg",
  },
];

export default function MachineryPage() {
  return (
    <PuckPage
      hero="Our Machinery"
      subtitle="Precision equipment powering every stage of impeller manufacturing"
    >
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <PuckSectionTitle>Manufacturing Equipment</PuckSectionTitle>
          <p className="mx-auto mt-5 max-w-[640px] text-center text-base leading-7 text-black/60">
            From CNC machining to dynamic balancing, our facility is equipped with
            advanced machinery to deliver precision-engineered impellers at every
            production stage.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {machines.map((machine, index) => {
              const Icon = machine.icon;
              return (
                <article
                  key={machine.name}
                  className="group overflow-hidden rounded-lg border border-black/10 bg-white transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-[#001836]" />
                      <h3 className="text-base font-black">{machine.name}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-black/55">
                      {machine.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <MachineryVideoSection />
    </PuckPage>
  );
}
