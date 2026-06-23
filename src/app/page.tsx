import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package, Factory, ShieldCheck, PhoneCall } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 py-24 text-white sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(120,119,198,0.15),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-800/80 px-3 py-1 text-xs font-semibold text-zinc-300 backdrop-blur-sm border border-zinc-700/50 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Leading B2B Manufacturing in India
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Precision Engineering & Industrial Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300 max-w-2xl">
              Bhakti Industries manufactures premium stainless steel impellers, industrial utensils, spoons, and custom fabrications across multiple state-of-the-art factories.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-sm hover:bg-zinc-100 transition-colors"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/inquiry"
                className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-5 py-3 text-sm font-semibold text-zinc-300 hover:bg-zinc-800 transition-colors"
              >
                Bulk Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features / Value Proposition */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Why Partner with Bhakti Industries?
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              We combine cutting-edge technology with high-grade materials to deliver industry-certified products.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex flex-col items-start p-6 bg-white dark:bg-zinc-950 rounded-xl shadow-sm border border-zinc-200/50 dark:border-zinc-800/50">
              <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-zinc-900 dark:text-white mb-4">
                <Package className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Precision Design</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
                Every component, from pump impellers to catering spoons, is machined to exact tolerances and finishes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start p-6 bg-white dark:bg-zinc-950 rounded-xl shadow-sm border border-zinc-200/50 dark:border-zinc-800/50">
              <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-zinc-900 dark:text-white mb-4">
                <Factory className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Multiple Production Units</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
                With specialized casting and sheet-metal fabrication units, we scale production to match bulk B2B demand.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start p-6 bg-white dark:bg-zinc-950 rounded-xl shadow-sm border border-zinc-200/50 dark:border-zinc-800/50">
              <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-zinc-900 dark:text-white mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Quality Assurance</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
                We use premium-grade SS304 and SS316 food-grade and chemical-grade stainless steel with fully traceable certs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Featured Product Catalog
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Engineered for maximum reliability in chemical, food, and fluid handling applications.
              </p>
            </div>
            <Link
              href="/products"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-200 hover:underline"
            >
              View all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Impeller */}
            <div className="group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 transition-all hover:shadow-md flex flex-col md:flex-row">
              <div className="relative w-full md:w-48 h-48 md:h-auto min-h-[192px] bg-zinc-900 flex items-center justify-center p-4">
                <Image
                  src="/uploads/impeller.svg"
                  alt="High-Performance Industrial Impeller"
                  fill
                  className="object-contain p-4 transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-zinc-500 tracking-wider uppercase">
                    Pump Components
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
                    High-Performance Impeller
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-3">
                    Premium-grade SS316 construction offering exceptional corrosion resistance and mechanical strength in pumps and fluid transfer.
                  </p>
                </div>
                <Link
                  href="/products/prod-impeller-001"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-700"
                >
                  View Specifications
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Spoon */}
            <div className="group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 transition-all hover:shadow-md flex flex-col md:flex-row">
              <div className="relative w-full md:w-48 h-48 md:h-auto min-h-[192px] bg-zinc-900 flex items-center justify-center p-4">
                <Image
                  src="/uploads/spoon.svg"
                  alt="Industrial Stainless Steel Spoon"
                  fill
                  className="object-contain p-4 transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-zinc-500 tracking-wider uppercase">
                    Industrial Kitchenware
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
                    Industrial Stainless Steel Spoon
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-3">
                    Food-grade SS304 electropolished utensils built for sterile laboratories, cleanrooms, and food processing lines.
                  </p>
                </div>
                <Link
                  href="/products/prod-spoon-001"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-700"
                >
                  View Specifications
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factories Quick Overview */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Manufacturing Capabilities
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              We own and operate modern machinery setups ensuring speed, consistency, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white dark:bg-zinc-950 p-8 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Gujarat Casting Unit</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Ahmedabad, Gujarat</p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Specialized in investment casting, CNC milling, and dynamic balancing of impellers, valves, and mechanical pump assemblies.
              </p>
              <Link
                href="/factories"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                Learn about Gujarat Factory
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white dark:bg-zinc-950 p-8 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Pune Fabrication Unit</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Pune, Maharashtra</p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Dedicated to sheet metal stamping, seamless welding, electro-polishing, and packaging of spoons, kitchenwares, and lab utensils.
              </p>
              <Link
                href="/factories"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                Learn about Pune Factory
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-zinc-950 text-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Need Custom Specifications?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">
            Submit your dimensions, quantity requirement, and material grades. Our engineering team will get back to you with a quotation.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/inquiry"
              className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-100 transition-colors"
            >
              <PhoneCall className="h-4 w-4" />
              Submit Bulk Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bhakti Industries. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package, Factory, ShieldCheck, PhoneCall } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 py-24 text-white sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(120,119,198,0.15),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-800/80 px-3 py-1 text-xs font-semibold text-zinc-300 backdrop-blur-sm border border-zinc-700/50 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Leading B2B Manufacturing in India
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Precision Engineering & Industrial Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300 max-w-2xl">
              Bhakti Industries manufactures premium stainless steel impellers, industrial utensils, spoons, and custom fabrications across multiple state-of-the-art factories.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-sm hover:bg-zinc-100 transition-colors"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/inquiry"
                className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-5 py-3 text-sm font-semibold text-zinc-300 hover:bg-zinc-800 transition-colors"
              >
                Bulk Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features / Value Proposition */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Why Partner with Bhakti Industries?
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              We combine cutting-edge technology with high-grade materials to deliver industry-certified products.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex flex-col items-start p-6 bg-white dark:bg-zinc-950 rounded-xl shadow-sm border border-zinc-200/50 dark:border-zinc-800/50">
              <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-zinc-900 dark:text-white mb-4">
                <Package className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Precision Design</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
                Every component, from pump impellers to catering spoons, is machined to exact tolerances and finishes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start p-6 bg-white dark:bg-zinc-950 rounded-xl shadow-sm border border-zinc-200/50 dark:border-zinc-800/50">
              <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-zinc-900 dark:text-white mb-4">
                <Factory className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Multiple Production Units</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
                With specialized casting and sheet-metal fabrication units, we scale production to match bulk B2B demand.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start p-6 bg-white dark:bg-zinc-950 rounded-xl shadow-sm border border-zinc-200/50 dark:border-zinc-800/50">
              <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-zinc-900 dark:text-white mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Quality Assurance</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
                We use premium-grade SS304 and SS316 food-grade and chemical-grade stainless steel with fully traceble certs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Featured Product Catalog
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Engineered for maximum reliability in chemical, food, and fluid handling applications.
              </p>
            </div>
            <Link
              href="/products"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-200 hover:underline"
            >
              View all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Impeller */}
            <div className="group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 transition-all hover:shadow-md flex flex-col md:flex-row">
              <div className="relative w-full md:w-48 h-48 md:h-auto min-h-[192px] bg-zinc-900 flex items-center justify-center p-4">
                <Image
                  src="/uploads/impeller.svg"
                  alt="High-Performance Industrial Impeller"
                  fill
                  className="object-contain p-4 transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-zinc-500 tracking-wider uppercase">
                    Pump Components
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
                    High-Performance Impeller
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-3">
                    Premium-grade SS316 construction offering exceptional corrosion resistance and mechanical strength in pumps and fluid transfer.
                  </p>
                </div>
                <Link
                  href="/products/prod-impeller-001"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-700"
                >
                  View Specifications
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Spoon */}
            <div className="group relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 transition-all hover:shadow-md flex flex-col md:flex-row">
              <div className="relative w-full md:w-48 h-48 md:h-auto min-h-[192px] bg-zinc-900 flex items-center justify-center p-4">
                <Image
                  src="/uploads/spoon.svg"
                  alt="Industrial Stainless Steel Spoon"
                  fill
                  className="object-contain p-4 transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-zinc-500 tracking-wider uppercase">
                    Industrial Kitchenware
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
                    Industrial Stainless Steel Spoon
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-3">
                    Food-grade SS304 electropolished utensils built for sterile laboratories, cleanrooms, and food processing lines.
                  </p>
                </div>
                <Link
                  href="/products/prod-spoon-001"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-700"
                >
                  View Specifications
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factories Quick Overview */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Manufacturing Capabilities
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              We own and operate modern machinery setups ensuring speed, consistency, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white dark:bg-zinc-950 p-8 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Gujarat Casting Unit</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Ahmedabad, Gujarat</p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Specialized in investment casting, CNC milling, and dynamic balancing of impellers, valves, and mechanical pump assemblies.
              </p>
              <Link
                href="/factories"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                Learn about Gujarat Factory
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white dark:bg-zinc-950 p-8 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Pune Fabrication Unit</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Pune, Maharashtra</p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Dedicated to sheet metal stamping, seamless welding, electro-polishing, and packaging of spoons, kitchenwares, and lab utensils.
              </p>
              <Link
                href="/factories"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                Learn about Pune Factory
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-zinc-950 text-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Need Custom Specifications?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">
            Submit your dimensions, quantity requirement, and material grades. Our engineering team will get back to you with a quotation.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/inquiry"
              className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-100 transition-colors"
            >
              <PhoneCall className="h-4 w-4" />
              Submit Bulk Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bhakti Industries. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
=======
import { HomePage } from "@/components/home/HomePage";

export default function Home() {
  return <HomePage />;
>>>>>>> 7dcb1afb9ea59db9efe9040ea870c608fa65c1eb
}
