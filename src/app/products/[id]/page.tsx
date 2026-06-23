import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById, getCategories, getFactories } from "@/lib/db";
import { productCategories } from "@/lib/puck-content";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";
import ProductGallery from "./product-gallery";
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

  // 2. Try Category Slug
  const categoryItem = productCategories.find((item) => item.slug === id);
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
              <Link
                href={`/inquiry?product=${product.id}&sku=${product.sku}`}
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 px-6 py-3.5 text-sm font-bold shadow-md hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
              >
                <PhoneCall className="h-4.5 w-4.5" />
                Request Bulk Quote
              </Link>
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

  // 2. Try to load Product Family Category from static puck-content
  const categoryItem = productCategories.find((item) => item.slug === id);

  if (categoryItem) {
    return (
      <PuckPage hero={categoryItem.title} subtitle={categoryItem.summary}>
        <section className="bg-zinc-100 dark:bg-zinc-900 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-black text-[#318bc1] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Products Catalog
            </Link>
            <div className="mt-8 grid gap-10 bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr] rounded-2xl shadow-sm">
              <div className="relative min-h-[420px] bg-zinc-950 rounded-xl overflow-hidden flex items-center justify-center p-8">
                <Image
                  src={
                    id === "precision-pump-systems"
                      ? "/images/puck-product-collage.png"
                      : categoryItem.image
                  }
                  alt={categoryItem.title}
                  fill
                  className={
                    id === "precision-pump-systems"
                      ? "object-contain p-8"
                      : "object-cover opacity-90"
                  }
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#318bc1]">
                    Product Family
                  </p>
                  <h2 className="mt-3 text-4xl font-extrabold text-zinc-900 dark:text-white">
                    {categoryItem.title}
                  </h2>
                  <p className="mt-5 text-base leading-7 text-zinc-650 dark:text-zinc-400">
                    {categoryItem.summary}
                  </p>
                  <div className="mt-8 grid gap-3">
                    {categoryItem.specs.map((spec) => (
                      <div
                        key={spec}
                        className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 py-3 text-sm font-bold text-zinc-800 dark:text-zinc-300"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#318bc1]" /> {spec}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/inquiry"
                    className="inline-flex h-12 items-center gap-2 bg-[#318bc1] px-6 text-sm font-black text-white rounded-lg hover:bg-[#2573a1] transition-colors"
                  >
                    Request Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button className="inline-flex h-12 items-center gap-2 border border-zinc-200 dark:border-zinc-800 px-6 text-sm font-black rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                    Catalogue PDF <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <PuckSectionTitle>Models & Variants</PuckSectionTitle>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <article
                  key={item}
                  className="border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl bg-white dark:bg-zinc-950 shadow-sm"
                >
                  <div className="flex aspect-square items-center justify-center bg-zinc-100 dark:bg-zinc-900 rounded-lg text-sm font-bold text-zinc-400">
                    Product Image {item}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white">
                    Placeholder Model 0{item}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-450">
                    Replace with actual model description and technical range.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </PuckPage>
    );
  }

  // 3. Fallback
  notFound();
}
