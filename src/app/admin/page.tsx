import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | B2B Manufacturing Company",
  description: "Manage products, factories, and inquiries.",
};

export default function AdminPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold tracking-tight">Admin Dashboard</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon...</p>
    </div>
  );
}
