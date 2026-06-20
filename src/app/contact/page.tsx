import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | B2B Manufacturing Company",
  description: "Get in touch with our team for any queries.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon...</p>
    </div>
  );
}
