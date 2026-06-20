import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factories | B2B Manufacturing Company",
  description: "Explore our state-of-the-art manufacturing facilities.",
};

export default function FactoriesPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold tracking-tight">Our Factories</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon...</p>
    </div>
  );
}
