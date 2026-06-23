export const productCategories = [
  {
    slug: "40-foot-k-type-102-od",
    title: "40 foot k type(102 od)",
    summary: "The 40 Foot K Type Impeller (102 OD) is a precision-engineered fluid dynamic component designed primarily for V6 submersible pumps, monoset fittings, and agricultural water supply systems. Manufactured through industrial investment casting or high-grade stainless steel fabrication, it offers an optimal balance of structural strength and hydraulic efficiency.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
  },
  {
    slug: "45-foot-k-type-113-od",
    title: "45 foot k type(113 od)",
    summary: "The 45 Foot K Type Impeller (113 OD) is a high-capacity fluid dynamics component designed for larger V6 submersible pumps and heavy-duty agricultural water delivery. With an expanded outer diameter, it provides the extra centrifugal velocity needed to push water higher and faster than standard 102 mm variants.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85",
  },
] as const;

export type ProductCategory = (typeof productCategories)[number];
