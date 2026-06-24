import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById, getCategories, getFactories } from "@/lib/db";
import {
  allProductCategories,
  impellerCategories,
  productCategoriesByLine,
  productLines,
  spoonCategories,
} from "@/lib/puck-content";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";
import ProductGallery from "./product-gallery";
import { MachineryVideoSection } from "@/components/home/MachineryVideoSection";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Download,
  HelpCircle,
  PhoneCall,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

export const dynamic = "force-dynamic";

interface ProductDetailPageProps {
  params: Promise<{ id: string }> | { id: string };
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  // 1. Try DB Product
  const product = getProductById(id);
  if (product) {
    return {
      title: `${product.name} | Bhakti Industries`,
      description: product.shortDescription,
    };
  }

  // 2. Try Product Line Slug
  const productLine = productLines.find((item) => item.slug === id);
  if (productLine) {
    return {
      title: `${productLine.title} | Bhakti Industries`,
      description: productLine.summary,
    };
  }

  // 3. Try Category Slug
  const categoryItem = allProductCategories.find((item) => item.slug === id);
  if (categoryItem) {
    return {
      title: `${categoryItem.title} | Bhakti Industries`,
      description: categoryItem.summary,
    };
  }

  return {
    title: "Product Not Found",
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 1. Try to load DB Product
  const product = getProductById(id);

  if (product) {
    const categories = getCategories();
    const factories = getFactories();

    const category = categories.find((c) => c.id === product.categoryId);
    const factory = factories.find((f) => f.id === product.factoryId);

    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-6">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/products" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Products
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-zinc-900 dark:text-zinc-100 truncate">{product.name}</span>
        </nav>

        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products Catalog
        </Link>

        {/* Main product display */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-16">
          {/* Left Column: Image Zoom Gallery */}
          <div className="lg:col-span-5">
            <ProductGallery images={product.images} name={product.name} />
          </div>

          {/* Right Column: Key Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="inline-flex rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 px-3 py-1 text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                {category?.name || "Industrial Component"}
              </span>
              <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500">
                <span>SKU: <strong className="text-zinc-900 dark:text-zinc-300">{product.sku}</strong></span>
                {factory && (
                  <>
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                    <span>Manufactured at: <strong className="text-zinc-900 dark:text-zinc-300">{factory.name}</strong></span>
                  </>
                )}
              </div>
            </div>

            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
              <h2 className="sr-only">Description</h2>
              <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Features List */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <ShieldCheck className="h-4.5 w-4.5 text-zinc-900 dark:text-zinc-100" />
                Key Features
              </h3>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inquiry Action Buttons */}
            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919427806585"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 px-6 py-3.5 text-sm font-bold shadow-md hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
              >
                <PhoneCall className="h-4.5 w-4.5" />
                Enquiry
              </a>
              {product.price && (
                <div className="flex flex-col justify-center px-4">
                  <span className="text-xs text-zinc-400 font-semibold uppercase">Estimated Price</span>
                  <span className="text-xl font-extrabold text-zinc-900 dark:text-white">
                    ${product.price.toFixed(2)} <span className="text-xs text-zinc-400 font-medium">/ unit</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Specifications, Applications & Benefits Tabs Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 border-t border-zinc-200 dark:border-zinc-800 pt-12">
          {/* Technical Specifications */}
          <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-900 pb-3 flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-zinc-500" />
              Technical Specifications
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <tbody>
                  {Object.entries(product.specifications).length > 0 ? (
                    Object.entries(product.specifications).map(([key, val]) => (
                      <tr key={key} className="border-b border-zinc-100 dark:border-zinc-900/50">
                        <td className="py-2.5 font-semibold text-zinc-500 dark:text-zinc-400 pr-4">
                          {key}
                        </td>
                        <td className="py-2.5 text-zinc-950 dark:text-zinc-200">
                          {val}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="py-2 text-zinc-400 italic">No specifications provided.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Applications */}
          <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-900 pb-3 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-zinc-500" />
              Industrial Applications
            </h3>
            <ul className="space-y-3">
              {product.applications.map((app, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900 text-xs font-bold text-zinc-500 shrink-0">
                    {i + 1}
                  </span>
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-900 pb-3 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-zinc-500" />
              Key Benefits
            </h3>
            <ul className="space-y-3.5">
              {product.benefits.map((benefit, i) => (
                <li key={i} className="flex gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-emerald-500 shrink-0 font-bold">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // 2. Product line overview pages: /products/impellers and /products/spoons
  const productLine = productLines.find((item) => item.slug === id);

  if (productLine) {
    const lineCategories =
      productCategoriesByLine[productLine.slug as keyof typeof productCategoriesByLine];
    const isImpellerLine = productLine.slug === "impellers";

    return (
      <PuckPage
        hero={productLine.title}
        subtitle={productLine.summary}
        heroImage={productLine.image}
        overlayOpacity={isImpellerLine ? 0.55 : 0.25}
        overlayColor={isImpellerLine ? "bg-[#001836]" : "bg-black"}
      >
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1160px] space-y-6 px-5">
            <Link
              href="/products"
              className="mb-6 inline-flex items-center gap-2 text-sm font-black text-[#001836] dark:text-zinc-200"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Product Lines
            </Link>

            {lineCategories.map((category) => (
              <article key={category.slug}>
                <Link
                  href={`/products/${category.slug}`}
                  className="group grid min-h-[220px] overflow-hidden rounded-[14px] border border-black/10 bg-[#fcfcfc] transition-shadow hover:shadow-[0_14px_45px_rgba(0,0,0,0.08)] md:grid-cols-[230px_1fr_210px]"
                >
                  <div className="relative min-h-[220px] bg-white">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className={isImpellerLine ? "object-cover" : "object-contain p-6"}
                      sizes="(max-width: 768px) 100vw, 230px"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center px-7 py-8 md:px-10">
                    <h2 className="text-2xl font-black tracking-tight md:text-[28px]">
                      {category.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                      {category.summary}
                    </p>
                  </div>
                  <div className="flex items-center justify-end border-t border-black/5 px-7 py-7 md:border-l md:border-t-0">
                    <span className="text-sm font-bold text-[#001836]">View Range</span>
                    <ArrowRight className="ml-2 h-5 w-5 shrink-0 text-[#001836] transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
        {!isImpellerLine && (
          <MachineryVideoSection 
            videoSrc="/videos/spoon-category-hero.mp4" 
            title="Spoon Manufacturing Excellence"
            description="Witness the precision machinery and advanced polishing techniques that define our world-class spoon production."
          />
        )}
      </PuckPage>
    );
  }

  // 3. Try to load Product Family Category from static puck-content
  const categoryItem = allProductCategories.find((item) => item.slug === id);

  if (categoryItem) {
    const is40Foot = id === "40-foot-k-type-102-od";
    const isKType = impellerCategories.some((item) => item.slug === id);
    const isSpoon = spoonCategories.some((item) => item.slug === id);

    const kSeriesData = is40Foot
      ? [
          {
            id: "k30",
            label: "K30",
            type: "40 Foot K Type Impeller (102 OD)",
            description:
              "The K30 is designed for efficient water circulation in light-duty agricultural and domestic pumping systems. Its optimized vane design ensures smooth water flow, dependable operation, and energy-efficient performance for everyday water delivery needs.",
            image: "/images/k30.jpg",
          },
          {
            id: "k40",
            label: "K40",
            type: "40 Foot K Type Impeller (102 OD)",
            description:
              "The K40 offers improved hydraulic efficiency for medium-scale irrigation and water transfer applications. Engineered for consistent performance, it delivers stable pressure and reliable water discharge while maintaining durability in continuous operation.",
            image: "/images/k40.jpg",
          },
          {
            id: "k50-a",
            label: "K50",
            type: "40 Foot K Type Impeller (102 OD)",
            description:
              "The K50 is a versatile impeller designed for balanced flow and pressure requirements. Its precision-engineered construction helps maximize pump efficiency, making it suitable for a wide range of agricultural and industrial water management systems.",
            image: "/images/k50.jpg",
          },
          {
            id: "k60",
            label: "K60",
            type: "40 Foot K Type Impeller (102 OD)",
            description:
              "The K60 is engineered for mid-to-high range pumping performance, offering an ideal balance between flow rate and pressure head. Its robust construction ensures reliable operation in demanding agricultural water supply systems.",
            image: "/images/k60.jpg",
          },
          {
            id: "k70",
            label: "K70",
            type: "40 Foot K Type Impeller (102 OD)",
            description:
              "The K70 is built for demanding pumping environments where higher water lift and increased discharge are required. Its advanced hydraulic profile enhances water movement, providing efficient performance across larger irrigation networks.",
            image: "/images/k70.jpg",
          },
          {
            id: "k80",
            label: "K80",
            type: "40 Foot K Type Impeller (102 OD)",
            description:
              "The K80 delivers high-capacity water transfer capabilities for intensive agricultural operations. Designed for long-term reliability, it provides strong pressure generation, efficient flow characteristics, and dependable performance under heavy workloads.",
            image: "/images/k80.jpg",
          },
          {
            id: "k100",
            label: "K100",
            type: "40 Foot K Type Impeller (102 OD)",
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

    const spoonSeriesData = [
      {
        id: "standard",
        label: "Standard",
        type: categoryItem.title,
        description:
          "A dependable everyday stainless steel spoon with smooth edge finishing, balanced weight, and food-safe polishing for regular use.",
        image: categoryItem.image,
      },
      {
        id: "premium",
        label: "Premium",
        type: categoryItem.title,
        description:
          "A heavier-gauge premium version with improved grip comfort, brighter surface finish, and added durability for hospitality and bulk supply.",
        image: categoryItem.image,
      },
      {
        id: "mirror-finish",
        label: "Mirror Finish",
        type: categoryItem.title,
        description:
          "A high-polish variant made for presentation-focused dining, retail sets, and customers who need a cleaner reflective finish.",
        image: categoryItem.image,
      },
      {
        id: "matte-finish",
        label: "Matte Finish",
        type: categoryItem.title,
        description:
          "A satin-finished option with a softer visual texture, practical handling, and resistance to visible fingerprints during daily use.",
        image: categoryItem.image,
      },
    ];

    const variantData = isSpoon ? spoonSeriesData : kSeriesData;

    return (
      <PuckPage
        hero={categoryItem.title}
        subtitle={categoryItem.summary}
        heroImage={isKType ? "/images/impeller-hero.jpg" : categoryItem.image}
        overlayOpacity={isKType ? 0.45 : 0.25}
        overlayColor={isKType ? "bg-black" : "bg-black"}
      >
        <section className="bg-[#f3f3f3] dark:bg-[#12162e] py-16 md:py-24">
          <div className="mx-auto max-w-[1160px] px-5">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-black text-[#001836] dark:text-zinc-200"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Categories
            </Link>
            <div className="mt-8 grid gap-10 bg-white dark:bg-[#0b0f24] p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr] rounded-2xl shadow-sm border border-zinc-200/50 dark:border-zinc-800/50">
              <div className="relative min-h-[420px] bg-[#fafafa] dark:bg-zinc-950 rounded-xl overflow-hidden">
                <Image
                  src={categoryItem.image}
                  alt={categoryItem.title}
                  fill
                  className={is40Foot ? "object-cover" : "object-contain p-6"}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#001836] dark:text-[#318bc1]">
                    Product Family
                  </p>
                  <h2 className="mt-3 text-4xl font-black text-zinc-900 dark:text-white">
                    {categoryItem.title}
                  </h2>
                  <p className="mt-5 text-base leading-7 text-black/60 dark:text-zinc-300">
                    {categoryItem.summary}
                  </p>
                </div>
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
            <p className="mt-6 max-w-4xl text-base leading-7 text-black/70 dark:text-zinc-300">
              <strong>
                {isSpoon
                  ? categoryItem.title
                  : is40Foot
                    ? "40 Foot K Type Impeller (102 OD)"
                    : "45 Foot K Type Impeller (113 OD)"}
              </strong>
              <br />
              <br />
              {isSpoon
                ? `Our ${categoryItem.title.toLowerCase()} range is manufactured using food-grade stainless steel with controlled shaping, edge finishing, and polishing for clean everyday use. These spoon variants are made for domestic, hospitality, catering, and bulk supply requirements while keeping the spoon section separate from impeller products.`
                : `Our ${is40Foot ? "40" : "45"} Foot K Type Impeller range is manufactured using premium-quality engineering materials and advanced molding technology to ensure excellent durability, hydraulic efficiency, and long service life. Designed specifically for V6 submersible pumps, these impellers provide reliable water delivery for agricultural, industrial, and domestic applications. Available in K30, K40, K50, K70, K80, and K100 variants, the range offers solutions for diverse pumping requirements while maintaining consistent performance and energy efficiency.`}
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {variantData.map(({ id, label, type, description, image }) => (
                <article
                  key={id}
                  className="border border-black/10 dark:border-zinc-800 p-6 rounded-xl bg-white dark:bg-zinc-950 shadow-sm"
                >
                  {image ? (
                    <div className="relative aspect-square overflow-hidden bg-[#f5f5f5] dark:bg-zinc-900 rounded-lg">
                      <Image
                        src={image}
                        alt={label}
                        fill
                        className={is40Foot ? "object-cover" : "object-contain p-6"}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-square items-center justify-center bg-[#f5f5f5] dark:bg-zinc-900 text-center text-sm font-black text-black/25 rounded-lg">
                      <span className="max-w-[70%]">Image Placeholder</span>
                    </div>
                  )}
                  <h3 className="mt-6 text-xl font-black uppercase text-[#318bc1]">
                    {label}
                  </h3>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-[#888]">
                    {type}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-black/60 dark:text-zinc-400">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        {isSpoon && (
          <MachineryVideoSection 
            videoSrc="/videos/spoon-category-hero.mp4" 
            title="Spoon Manufacturing Excellence"
            description="Witness the precision machinery and advanced polishing techniques that define our world-class spoon production."
          />
        )}
      </PuckPage>
    );
  }

  // 3. Fallback
  notFound();
}
