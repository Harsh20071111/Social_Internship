import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Hammer, Cog, Sparkles, Scissors, ScanLine } from "lucide-react";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";
import { MachineryVideoSection } from "@/components/home/MachineryVideoSection";

const spoonMachines = [
  {
    name: "Blanking Press",
    description: "High-speed mechanical press used to punch out the initial spoon blanks from stainless steel sheets with minimal material waste.",
    icon: Scissors,
  },
  {
    name: "Cross Rolling Machine",
    description: "Precision rolling equipment that adjusts the thickness of the spoon handle and bowl area to ensure perfect balance and ergonomic feel.",
    icon: Cog,
  },
  {
    name: "Bowl Forming Press",
    description: "Heavy-duty hydraulic press with specialized dies to form the exact curvature and depth of the spoon bowl.",
    icon: Hammer,
  },
  {
    name: "Edge Grinding Station",
    description: "Automated grinding machinery that removes sharp edges and burrs, creating a smooth, food-safe perimeter around the entire spoon.",
    icon: ScanLine,
  },
  {
    name: "Mirror Polishing Line",
    description: "Multi-stage buffing and polishing equipment that delivers the final high-gloss, hygienic finish to the stainless steel cutlery.",
    icon: Sparkles,
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
          
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {spoonMachines.map((machine) => {
              const Icon = machine.icon;
              return (
                <article
                  key={machine.name}
                  className="group overflow-hidden rounded-lg border border-black/10 bg-white p-6 transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f3f3] text-[#001836] mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-zinc-900">{machine.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/60">
                    {machine.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <MachineryVideoSection
        videoSrc="/videos/spoon-category-hero.mp4"
        title="Spoon Manufacturing Excellence"
        description="Witness the precision machinery and advanced polishing techniques that define our world-class spoon production."
      />
    </PuckPage>
  );
}
