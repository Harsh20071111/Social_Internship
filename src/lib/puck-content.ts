export const productLines = [
  {
    slug: "spoons",
    title: "Spoon Collection",
    summary:
      "Food-grade stainless steel spoons manufactured for clean finishing, daily durability, and consistent quality across table, tea, serving, and soup spoon ranges.",
    image: "/images/spoon-hero.png",
  },
  {
    slug: "impellers",
    title: "Impeller Series",
    summary:
      "Precision-engineered K type impellers for V6 submersible pumps, agricultural water delivery, and high-performance fluid movement applications.",
    image: "/images/home-hero.png",
  },
] as const;

export const impellerCategories = [
  {
    slug: "40-foot-k-type-102-od",
    title: "40 foot k type(102 od)",
    summary: "The 40 Foot K Type Impeller (102 OD) is a precision-engineered fluid dynamic component designed primarily for V6 submersible pumps, monoset fittings, and agricultural water supply systems. Manufactured through industrial investment casting or high-grade stainless steel fabrication, it offers an optimal balance of structural strength and hydraulic efficiency.",
    image: "/images/impeller-stack-40.png",
  },
  {
    slug: "45-foot-k-type-113-od",
    title: "45 foot k type(113 od)",
    summary: "The 45 Foot K Type Impeller (113 OD) is a high-capacity fluid dynamics component designed for larger V6 submersible pumps and heavy-duty agricultural water delivery. With an expanded outer diameter, it provides the extra centrifugal velocity needed to push water higher and faster than standard 102 mm variants.",
    image: "/images/impeller-stack.jpg",
  },
] as const;

export const spoonCategories = [
  {
    slug: "table-spoon",
    title: "Hiramoti Table Spoon",
    summary:
      "Elegant stainless steel table spoon with a polished finish, decorative handle design, and durable construction. Perfect for daily dining, serving, and hospitality use.",
    image: "/images/hiramoti-table-spoon.png",
  },
  {
    slug: "tea-spoon",
    title: "S Kumar",
    summary:
      "Premium S Kumar stainless steel table spoon featuring a polished finish, decorative handle pattern, and sturdy construction. Perfect for home, restaurant, hotel, and catering use.",
    image: "/uploads/spoon.svg",
  },
  {
    slug: "serving-spoon",
    title: "Award Stainless Steel Spoon",
    summary:
      "Award stainless steel table spoon with a sleek mirror-polished finish and modern ergonomic handle design. Built for strength, durability, and everyday convenience, it offers a comfortable grip and long-lasting shine. Ideal for dining, serving, and hospitality applications, this spoon combines functionality with a clean, elegant look.",
    image: "/uploads/spoon.svg",
  },
  {
    slug: "soup-spoon",
    title: "Monalisa Stainless Steel Table Spoon",
    summary:
      "Stylish stainless steel table spoon with a smooth mirror-polished finish and sleek contemporary design. Crafted for durability, corrosion resistance, and comfortable handling, it is perfect for everyday dining and serving needs. Its elegant, minimalist look complements both casual and formal table settings.",
    image: "/uploads/spoon.svg",
  },
  {
    slug: "dessert-spoon",
    title: "Casino Stainless Steel Table Spoon",
    summary:
      "Elegant stainless steel table spoon featuring a premium mirror-polished finish and a stylish fluted handle design. Crafted for durability, corrosion resistance, and comfortable everyday use, this spoon offers a perfect balance of functionality and elegance. Ideal for daily dining, food serving, restaurants, hotels, catering services, and hospitality applications. Its sleek design and long-lasting shine make it a sophisticated addition to any table setting.",
    image: "/uploads/spoon.svg",
  },
  {
    slug: "baby-spoon",
    title: "Baby Spoon",
    summary:
      "Soft-edged, food-safe stainless steel baby spoon with a compact bowl size and comfortable grip for safe infant feeding.",
    image: "/uploads/spoon.svg",
  },
  {
    slug: "s-kumar",
    title: "S Kumar",
    summary:
      "Premium S Kumar series stainless steel spoons designed for exceptional quality, perfect balance, and elegant dining experiences.",
    image: "/images/s-kumar.png",
  },
] as const;

export const productCategories = impellerCategories;

export const productCategoriesByLine = {
  impellers: impellerCategories,
  spoons: spoonCategories,
} as const;

export const allProductCategories = [
  ...impellerCategories,
  ...spoonCategories,
] as const;

export type ProductCategory = (typeof productCategories)[number];
