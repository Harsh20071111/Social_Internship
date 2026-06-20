import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | B2B Manufacturing Company",
  description: "Browse our extensive catalog of manufactured products.",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold tracking-tight">Our Products</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon...</p>
    </div>
  );
}
