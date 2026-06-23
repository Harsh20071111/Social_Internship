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

  return (
    <PuckPage hero={product.title} subtitle={product.summary}>
      <section className="bg-[#f3f3f3] py-16 md:py-24">
        <div className="mx-auto max-w-[1160px] px-5">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-black text-[#318bc1]">
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
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#318bc1]">Product Family</p>
              <h2 className="mt-3 text-4xl font-black">{product.title}</h2>
              <p className="mt-5 text-base leading-7 text-black/60">{product.summary}</p>
              <div className="mt-8 grid gap-3">
                {product.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-3 border-b border-black/10 py-3 text-sm font-bold">
                    <CheckCircle2 className="h-5 w-5 text-[#318bc1]" /> {spec}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/inquiry" className="inline-flex h-12 items-center gap-2 bg-[#318bc1] px-6 text-sm font-black text-white">
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
        <div className="mx-auto max-w-[1160px] px-5">
          <PuckSectionTitle>Models & Variants</PuckSectionTitle>
          <p className="mt-6 max-w-4xl text-base leading-7 text-black/70">
            <strong>40 Foot K Type Impeller (113 OD)</strong><br/><br/>
            Our 40 Foot K Type Impeller range is manufactured using premium-quality engineering materials and advanced molding technology to ensure excellent durability, hydraulic efficiency, and long service life. Designed specifically for V6 submersible pumps, these impellers provide reliable water delivery for agricultural, industrial, and domestic applications. Available in K30, K40, K50, K60, K70, K80, and K100 variants, the range offers solutions for diverse pumping requirements while maintaining consistent performance and energy efficiency.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                model: "K30",
                subtitle: "40 Foot K Type Impeller (113 OD)",
                desc: "The K30 is designed for efficient water circulation in light-duty agricultural and domestic pumping systems. Its optimized vane design ensures smooth water flow, dependable operation, and energy-efficient performance for everyday water delivery needs."
              },
              {
                model: "K40",
                subtitle: "40 Foot K Type Impeller (113 OD)",
                desc: "The K40 offers improved hydraulic efficiency for medium-scale irrigation and water transfer applications. Engineered for consistent performance, it delivers stable pressure and reliable water discharge while maintaining durability in continuous operation."
              },
              {
                model: "K50",
                subtitle: "40 Foot K Type Impeller (113 OD)",
                desc: "The K50 is a versatile impeller designed for balanced flow and pressure requirements. Its precision-engineered construction helps maximize pump efficiency, making it suitable for a wide range of agricultural and industrial water management systems."
              },
              {
                model: "K60",
                subtitle: "40 Foot K Type Impeller (113 OD)",
                desc: "Replace with actual model description and technical range."
              },
              {
                model: "K70",
                subtitle: "40 Foot K Type Impeller (113 OD)",
                desc: "The K70 is built for demanding pumping environments where higher water lift and increased discharge are required. Its advanced hydraulic profile enhances water movement, providing efficient performance across larger irrigation networks."
              },
              {
                model: "K80",
                subtitle: "40 Foot K Type Impeller (113 OD)",
                desc: "The K80 delivers high-capacity water transfer capabilities for intensive agricultural operations. Designed for long-term reliability, it provides strong pressure generation, efficient flow characteristics, and dependable performance under heavy workloads."
              },
              {
                model: "K100",
                subtitle: "40 Foot K Type Impeller (113 OD)",
                desc: "The K100 is the highest-performance model in the 40 Foot K Type range. Engineered for maximum water lifting efficiency, it offers exceptional flow velocity and pressure output, making it ideal for deep borewell systems and large-scale irrigation projects."
              }
            ].map(({ model, subtitle, desc }) => (
              <article key={model} className="border border-black/10 p-6">
                <div className="flex aspect-square items-center justify-center bg-[#f5f5f5] text-center text-sm font-black text-black/25">
                  <span className="max-w-[70%]">Image Placeholder</span>
                </div>
                <h3 className="mt-6 text-xl font-black uppercase text-[#318bc1]">{model}</h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-[#888]">{subtitle}</p>
                <p className="mt-3 text-sm leading-6 text-black/60">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PuckPage>
  );
}
