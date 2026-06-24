import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { spoonCategories } from "@/lib/puck-content";
import { PuckPage, PuckSectionTitle } from "@/components/layout/PuckPage";
import { ArrowLeft, MessageCircle } from "lucide-react";

export const dynamic = "force-dynamic";

interface SpoonProductDetailPageProps {
  params: Promise<{ id: string }> | { id: string };
}

export async function generateMetadata({ params }: SpoonProductDetailPageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const categoryItem = spoonCategories.find((item) => item.slug === id);
  if (categoryItem) {
    return {
      title: `${categoryItem.title} | Spoon Collection | Bhakti Industries`,
      description: categoryItem.summary,
    };
  }

  return {
    title: "Product Not Found",
  };
}

export default async function SpoonProductDetailPage({ params }: SpoonProductDetailPageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const categoryItem = spoonCategories.find((item) => item.slug === id);

  if (!categoryItem) {
    notFound();
  }

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

  return (
    <PuckPage
      hero={categoryItem.title}
      subtitle={categoryItem.summary}
      heroImage={categoryItem.image}
      overlayOpacity={0.25}
      overlayColor="bg-black"
    >
      <section className="bg-[#f3f3f3] py-16 md:py-24">
        <div className="mx-auto max-w-[1160px] px-5">
          <Link
            href="/spoon/products"
            className="inline-flex items-center gap-2 text-sm font-black text-[#001836]"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Spoon Categories
          </Link>
          <div className="mt-8 grid gap-10 bg-white p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr] rounded-2xl shadow-sm border border-zinc-200/50">
            <div className="relative min-h-[420px] bg-[#fafafa] rounded-xl overflow-hidden">
              <Image
                src={categoryItem.image}
                alt={categoryItem.title}
                fill
                className="object-contain p-6"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#001836]">
                  Spoon Collection
                </p>
                <h2 className="mt-3 text-4xl font-black text-zinc-900">
                  {categoryItem.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-black/60">
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
          <p className="mt-6 max-w-4xl text-base leading-7 text-black/70">
            <strong>{categoryItem.title}</strong>
            <br />
            <br />
            Our {categoryItem.title.toLowerCase()} range is manufactured using food-grade stainless steel with controlled shaping, edge finishing, and polishing for clean everyday use. These spoon variants are made for domestic, hospitality, catering, and bulk supply requirements while keeping the spoon section separate from impeller products.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {spoonSeriesData.map(({ id, label, type, description, image }) => (
              <article
                key={id}
                className="border border-black/10 p-6 rounded-xl bg-white shadow-sm"
              >
                {image ? (
                  <div className="relative aspect-square overflow-hidden bg-[#f5f5f5] rounded-lg">
                    <Image
                      src={image}
                      alt={label}
                      fill
                      className="object-contain p-6"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-square items-center justify-center bg-[#f5f5f5] text-center text-sm font-black text-black/25 rounded-lg">
                    <span className="max-w-[70%]">Image Placeholder</span>
                  </div>
                )}
                <h3 className="mt-6 text-xl font-black uppercase text-[#318bc1]">
                  {label}
                </h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-[#888]">
                  {type}
                </p>
                <p className="mt-3 text-sm leading-6 text-black/60">
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
