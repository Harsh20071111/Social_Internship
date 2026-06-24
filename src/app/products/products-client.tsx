"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, SlidersHorizontal, ArrowRight, Layers } from "lucide-react";
import { Product, Category, Factory } from "@/lib/db";

interface ProductsClientProps {
  products: Product[];
  categories: Category[];
  factories: Factory[];
}

export default function ProductsClient({
  products: initialProducts,
  categories,
  factories,
}: ProductsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const factoryMap = useMemo(() => {
    return new Map(factories.map((f) => [f.id, f.name]));
  }, [factories]);

  const categoryMap = useMemo(() => {
    return new Map(categories.map((c) => [c.id, c.name]));
  }, [categories]);

  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categoryId === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [initialProducts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search products by name, SKU, or features..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
          />
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <div className="flex items-center gap-1 text-xs font-semibold text-zinc-400 mr-2 uppercase tracking-wider">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>Filter:</span>
          </div>
          <button
            onClick={() => setSelectedCategory("all")}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
              selectedCategory === "all"
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700/80"
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700/80"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            const factoryName = factoryMap.get(product.factoryId) || "Bhakti Industries";
            const categoryName = categoryMap.get(product.categoryId) || "Industrial";
            const mainMaterial = product.specifications["Material"] || "";

            return (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between overflow-hidden bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm transition-all hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <div>
                  {/* Product Image Panel */}
                  <div className="relative aspect-video w-full bg-zinc-900 flex items-center justify-center p-4">
                    <Image
                      src={product.imageUrl || "/uploads/impeller.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-zinc-900/85 backdrop-blur-sm border border-zinc-700/50 px-2.5 py-0.5 text-[10px] font-bold text-zinc-200 uppercase tracking-wider">
                      {categoryName}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span>SKU: {product.sku}</span>
                      {mainMaterial && (
                        <span className="flex items-center gap-1">
                          <Layers className="h-3 w-3" />
                          {mainMaterial}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white line-clamp-1 group-hover:text-zinc-700 dark:group-hover:text-zinc-200">
                      {product.name}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    
                    {/* Specifications badges preview */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {product.features.slice(0, 2).map((feat, i) => (
                        <span
                          key={i}
                          className="inline-block rounded-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 px-2 py-0.5 text-xs text-zinc-600 dark:text-zinc-400"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-5 pb-5 pt-3 border-t border-zinc-100 dark:border-zinc-900/50 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 line-clamp-1 italic">
                    Made at: {factoryName}
                  </span>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:underline hover:gap-1.5 transition-all"
                  >
                    Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50">
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            No products found matching your search.
          </p>
        </div>
      )}
    </div>
  );
}
