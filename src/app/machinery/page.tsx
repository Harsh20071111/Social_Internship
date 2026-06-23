import Image from "next/image";
import { Cog, Drill, Gauge, Wrench, Zap, Hammer, ScanLine } from "lucide-react";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";

const machines = [
  {
    name: "CNC Turning Center",
    description:
      "High-precision CNC lathe for machining impeller shafts, hubs, and critical components with tight dimensional tolerances.",
    icon: Cog,
    image:
      "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Vertical Machining Center",
    description:
      "Multi-axis milling and drilling center used for complex impeller vane profiling and precision bore operations.",
    icon: Drill,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Hydraulic Press",
    description:
      "Heavy-duty press for forming, stamping, and assembling impeller components with consistent force application.",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Dynamic Balancing Machine",
    description:
      "Precision balancing equipment that ensures each impeller rotates smoothly at operating speeds with minimal vibration.",
    icon: Gauge,
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Surface Grinding Machine",
    description:
      "Fine surface finishing equipment for achieving superior flatness and surface roughness on mating faces.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Welding & Fabrication Station",
    description:
      "Industrial welding setup for fabricating custom impeller assemblies and structural pump components.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Quality Inspection Lab",
    description:
      "Equipped with CMM, hardness testers, and dimensional gauges to verify every component meets specification.",
    icon: ScanLine,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function MachineryPage() {
  return (
    <PuckPage
      hero="Our Machinery"
      subtitle="Precision equipment powering every stage of impeller manufacturing"
    >
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5">
          <PuckSectionTitle>Manufacturing Equipment</PuckSectionTitle>
          <p className="mx-auto mt-5 max-w-[640px] text-center text-base leading-7 text-black/60">
            From CNC machining to dynamic balancing, our facility is equipped with
            advanced machinery to deliver precision-engineered impellers at every
            production stage.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-[#318bc1]" />
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
    </PuckPage>
  );
}
