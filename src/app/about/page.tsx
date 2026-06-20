import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | B2B Manufacturing Company",
  description: "Learn more about our manufacturing capabilities and history.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon...</p>
    </div>
  );
}
