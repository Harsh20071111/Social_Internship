import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Download } from "lucide-react";
import { notFound } from "next/navigation";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";
import { productCategories } from "@/lib/puck-content";

export function generateStaticParams() {
  return productCategories.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productCategories.find((item) => item.slug === slug);
  if (!product) notFound();

  const is40Foot = slug === "40-foot-k-type-102-od";

  const kSeriesData = is40Foot
    ? [
        {
          id: "k30",
          label: "K30",
          type: "40 Foot K Type Impeller (113 OD)",
          description:
            "The K30 is designed for efficient water circulation in light-duty agricultural and domestic pumping systems. Its optimized vane design ensures smooth water flow, dependable operation, and energy-efficient performance for everyday water delivery needs.",
        },
        {
          id: "k40",
          label: "K40",
          type: "40 Foot K Type Impeller (113 OD)",
          description:
            "The K40 offers improved hydraulic efficiency for medium-scale irrigation and water transfer applications. Engineered for consistent performance, it delivers stable pressure and reliable water discharge while maintaining durability in continuous operation.",
        },
        {
          id: "k50-a",
          label: "K50",
          type: "40 Foot K Type Impeller (113 OD)",
          description:
            "The K50 is a versatile impeller designed for balanced flow and pressure requirements. Its precision-engineered construction helps maximize pump efficiency, making it suitable for a wide range of agricultural and industrial water management systems.",
        },
        {
          id: "k70",
          label: "K70",
          type: "40 Foot K Type Impeller (113 OD)",
          description:
            "The K70 is built for demanding pumping environments where higher water lift and increased discharge are required. Its advanced hydraulic profile enhances water movement, providing efficient performance across larger irrigation networks.",
        },
        {
          id: "k80",
          label: "K80",
          type: "40 Foot K Type Impeller (113 OD)",
          description:
            "The K80 delivers high-capacity water transfer capabilities for intensive agricultural operations. Designed for long-term reliability, it provides strong pressure generation, efficient flow characteristics, and dependable performance under heavy workloads.",
        },
        {
          id: "k100",
          label: "K100",
          type: "40 Foot K Type Impeller (113 OD)",
          description:
            "The K100 is the highest-performance model in the 40 Foot K Type range. Engineered for maximum water lifting efficiency, it offers exceptional flow velocity and pressure output, making it ideal for deep borewell systems and large-scale irrigation projects.",
        },
      ]
    : [
        {
          id: "k30",
          label: "K30",
          type: "45 Foot K Type Impeller (113 OD)",
          description:
            "The K30 is designed for efficient water delivery in small agricultural fields and domestic water systems. Its optimized blade geometry ensures smooth flow characteristics, reliable performance, and reduced energy consumption for everyday pumping requirements.",
        },
        {
          id: "k40",
          label: "K40",
          type: "45 Foot K Type Impeller (113 OD)",
          description:
            "The K40 offers enhanced hydraulic performance for medium-duty irrigation and water transfer applications. Built for durability and consistent flow rates, it provides improved pressure generation while maintaining operational efficiency.",
        },
        {
          id: "k50-a",
          label: "K50",
          type: "45 Foot K Type Impeller (113 OD)",
          description:
            "The K50 is a versatile, high-performance impeller engineered for V6 submersible pumps. With its balanced design and 113 mm outer diameter, it delivers excellent water discharge, higher lift capability, and dependable operation in agricultural and industrial environments.",
        },
        {
          id: "k70",
          label: "K70",
          type: "45 Foot K Type Impeller (113 OD)",
          description:
            "The K70 is built for demanding water pumping applications where higher head and increased flow are required. Its precision-engineered construction maximizes centrifugal force, ensuring efficient water movement over greater distances and elevations.",
        },
        {
          id: "k80",
          label: "K80",
          type: "45 Foot K Type Impeller (113 OD)",
          description:
            "The K80 provides superior hydraulic efficiency for large-scale irrigation systems and heavy-duty pumping operations. Designed to handle higher workloads, it offers strong pressure output, reliable water delivery, and long service life under continuous operation.",
        },
        {
          id: "k100",
          label: "K100",
          type: "45 Foot K Type Impeller (113 OD)",
          description:
            "The K100 is the premium high-capacity model in the range, developed for maximum water lifting performance and intensive agricultural applications. Its advanced impeller profile generates exceptional flow velocity and pressure, making it ideal for deep borewell and large-scale water distribution systems.",
        },
      ];

  return (
    <PuckPage hero={product.title} subtitle={product.summary}>
      <section className="bg-[#f3f3f3] py-16 md:py-24">
        <div className="mx-auto max-w-[1160px] px-5">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-black text-[#001836]">
            <ArrowLeft className="h-4 w-4" /> Back to Categories
          </Link>
          <div className="mt-8 grid gap-10 bg-white p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[420px] bg-[#fafafa]">
              <Image
                src={slug === "precision-pump-systems" ? "/images/puck-product-collage.png" : product.image}
                alt={product.title}
                fill
                className={slug === "precision-pump-systems" ? "object-contain p-8" : "object-cover"}
              />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#001836]">Product Family</p>
              <h2 className="mt-3 text-4xl font-black">{product.title}</h2>
              <p className="mt-5 text-base leading-7 text-black/60">{product.summary}</p>
              <div className="mt-8 grid gap-3">
                {product.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-3 border-b border-black/10 py-3 text-sm font-bold">
                    <CheckCircle2 className="h-5 w-5 text-[#001836]" /> {spec}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/inquiry" className="inline-flex h-12 items-center gap-2 bg-[#001836] px-6 text-sm font-black text-white">
                  Request Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <button className="inline-flex h-12 items-center gap-2 border border-black/15 px-6 text-sm font-black">
                  Placeholder Catalogue <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5">
          <PuckSectionTitle>Product Range</PuckSectionTitle>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {kSeriesData.map(({ id, label, type, description }) => (
              <article key={id} className="border border-black/10 p-8">
                <div className="flex aspect-square items-center justify-center bg-[#f5f5f5] text-3xl font-black text-black/30">
                  {label}
                </div>
                <h3 className="mt-6 text-2xl font-black">{label}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.06em] text-[#001836]">
                  {type}
                </p>
                <p className="mt-4 text-sm leading-6 text-black/55">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PuckPage>
  );
}
