import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
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
          image: "/images/k30.jpg",
        },
        {
          id: "k40",
          label: "K40",
          type: "40 Foot K Type Impeller (113 OD)",
          description:
            "The K40 offers improved hydraulic efficiency for medium-scale irrigation and water transfer applications. Engineered for consistent performance, it delivers stable pressure and reliable water discharge while maintaining durability in continuous operation.",
          image: "/images/k40.jpg",
        },
        {
          id: "k50-a",
          label: "K50",
          type: "40 Foot K Type Impeller (113 OD)",
          description:
            "The K50 is a versatile impeller designed for balanced flow and pressure requirements. Its precision-engineered construction helps maximize pump efficiency, making it suitable for a wide range of agricultural and industrial water management systems.",
          image: "/images/k50.jpg",
        },
        {
          id: "k60",
          label: "K60",
          type: "40 Foot K Type Impeller (113 OD)",
          description:
            "The K60 is engineered for mid-to-high range pumping performance, offering an ideal balance between flow rate and pressure head. Its robust construction ensures reliable operation in demanding agricultural water supply systems.",
          image: "/images/k60.jpg",
        },
        {
          id: "k70",
          label: "K70",
          type: "40 Foot K Type Impeller (113 OD)",
          description:
            "The K70 is built for demanding pumping environments where higher water lift and increased discharge are required. Its advanced hydraulic profile enhances water movement, providing efficient performance across larger irrigation networks.",
          image: "/images/k70.jpg",
        },
        {
          id: "k80",
          label: "K80",
          type: "40 Foot K Type Impeller (113 OD)",
          description:
            "The K80 delivers high-capacity water transfer capabilities for intensive agricultural operations. Designed for long-term reliability, it provides strong pressure generation, efficient flow characteristics, and dependable performance under heavy workloads.",
          image: "/images/k80.jpg",
        },
        {
          id: "k100",
          label: "K100",
          type: "40 Foot K Type Impeller (113 OD)",
          description:
            "The K100 is the highest-performance model in the 40 Foot K Type range. Engineered for maximum water lifting efficiency, it offers exceptional flow velocity and pressure output, making it ideal for deep borewell systems and large-scale irrigation projects.",
          image: "/images/k100.jpg",
        },
      ]
    : [
        {
          id: "k30",
          label: "K30",
          type: "45 Foot K Type Impeller (113 OD)",
          description:
            "The K30 is designed for efficient water delivery in small agricultural fields and domestic water systems. Its optimized blade geometry ensures smooth flow characteristics, reliable performance, and reduced energy consumption for everyday pumping requirements.",
          image: "/images/k30.jpg",
        },
        {
          id: "k40",
          label: "K40",
          type: "45 Foot K Type Impeller (113 OD)",
          description:
            "The K40 offers enhanced hydraulic performance for medium-duty irrigation and water transfer applications. Built for durability and consistent flow rates, it provides improved pressure generation while maintaining operational efficiency.",
          image: "/images/k40.jpg",
        },
        {
          id: "k50-a",
          label: "K50",
          type: "45 Foot K Type Impeller (113 OD)",
          description:
            "The K50 is a versatile, high-performance impeller engineered for V6 submersible pumps. With its balanced design and 113 mm outer diameter, it delivers excellent water discharge, higher lift capability, and dependable operation in agricultural and industrial environments.",
          image: "/images/k50.jpg",
        },
        {
          id: "k60",
          label: "K60",
          type: "45 Foot K Type Impeller (113 OD)",
          description:
            "The K60 provides a powerful step-up in hydraulic performance for large-scale agricultural and water distribution systems. Designed for consistent high-head delivery, it offers reliable efficiency and durability under extended operational conditions.",
          image: "/images/k60.jpg",
        },
        {
          id: "k70",
          label: "K70",
          type: "45 Foot K Type Impeller (113 OD)",
          description:
            "The K70 is built for demanding water pumping applications where higher head and increased flow are required. Its precision-engineered construction maximizes centrifugal force, ensuring efficient water movement over greater distances and elevations.",
          image: "/images/k70.jpg",
        },
        {
          id: "k80",
          label: "K80",
          type: "45 Foot K Type Impeller (113 OD)",
          description:
            "The K80 provides superior hydraulic efficiency for large-scale irrigation systems and heavy-duty pumping operations. Designed to handle higher workloads, it offers strong pressure output, reliable water delivery, and long service life under continuous operation.",
          image: "/images/k80.jpg",
        },
        {
          id: "k100",
          label: "K100",
          type: "45 Foot K Type Impeller (113 OD)",
          description:
            "The K100 is the premium high-capacity model in the range, developed for maximum water lifting performance and intensive agricultural applications. Its advanced impeller profile generates exceptional flow velocity and pressure, making it ideal for deep borewell and large-scale water distribution systems.",
          image: "/images/k100.jpg",
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
              <div className="mt-8">
                <a
                  href="https://wa.me/919427806585"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2.5 bg-[#25D366] px-6 text-sm font-bold text-white transition-colors hover:bg-[#1da851]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Inquiry on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5">
          <PuckSectionTitle>Models & Variants</PuckSectionTitle>
          <p className="mt-6 max-w-4xl text-base leading-7 text-black/70">
            <strong>{is40Foot ? "40 Foot K Type Impeller (102 OD)" : "45 Foot K Type Impeller (113 OD)"}</strong><br/><br/>
            Our {is40Foot ? "40" : "45"} Foot K Type Impeller range is manufactured using premium-quality engineering materials and advanced molding technology to ensure excellent durability, hydraulic efficiency, and long service life. Designed specifically for V6 submersible pumps, these impellers provide reliable water delivery for agricultural, industrial, and domestic applications. Available in K30, K40, K50, K70, K80, and K100 variants, the range offers solutions for diverse pumping requirements while maintaining consistent performance and energy efficiency.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {kSeriesData.map(({ id, label, type, description, image }) => (
              <article key={id} className="border border-black/10 p-6">
                {image ? (
                  <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                    <Image src={image} alt={label} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="flex aspect-square items-center justify-center bg-[#f5f5f5] text-center text-sm font-black text-black/25">
                    <span className="max-w-[70%]">Image Placeholder</span>
                  </div>
                )}
                <h3 className="mt-6 text-xl font-black uppercase text-[#318bc1]">{label}</h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-[#888]">{type}</p>
                <p className="mt-3 text-sm leading-6 text-black/60">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PuckPage>
  );
}
