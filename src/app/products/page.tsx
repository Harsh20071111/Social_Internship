import React from "react";
import { getProducts, getCategories, getFactories } from "@/lib/db";
import ProductsClient from "./products-client";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Products Catalog | Bhakti Industries",
  description: "Browse our list of premium high-performance impellers and industrial stainless steel products.",
};

export default function ProductsPage() {
  const products = getProducts();
  const categories = getCategories();
  const factories = getFactories();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8 mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Industrial Product Catalog
        </h1>
        <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
          Providing high-grade components for pump systems, laboratories, and food-processing operations.
        </p>
      </div>

      {/* Interactive Products Grid & Search */}
      <ProductsClient
        products={products}
        categories={categories}
        factories={factories}
      />
    </div>
  );
}
