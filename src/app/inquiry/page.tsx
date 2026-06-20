import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulk Inquiry | B2B Manufacturing Company",
  description: "Submit a bulk inquiry for our products.",
};

export default function InquiryPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold tracking-tight">Bulk Inquiry</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon...</p>
    </div>
  );
}
