import React from "react";
import { getProducts, getCategories, getFactories } from "@/lib/db";
import AdminClient from "./admin-client";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Dashboard | Bhakti Industries",
  description: "Configure product lists, upload photos, add/remove specifications dynamically.",
};

export default function AdminPage() {
  const products = getProducts();
  const categories = getCategories();
  const factories = getFactories();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Dashboard Header */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8 mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Admin Dashboard
        </h1>
        <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
          Add or edit products, upload photos, configure technical specifications, and manage your inventory.
        </p>
      </div>

      <AdminClient
        products={products}
        categories={categories}
        factories={factories}
      />
    </div>
  );
}
