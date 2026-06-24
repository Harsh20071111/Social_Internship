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
    title: "Tea Spoon",
    summary:
      "Compact stainless steel tea spoons with clean bowl shaping, comfortable grip, and a hygienic finish for household and hospitality use.",
    image: "/uploads/spoon.svg",
  },
  {
    slug: "serving-spoon",
    title: "Serving Spoon",
    summary:
      "Heavy-duty serving spoons built with food-grade stainless steel for buffets, catering, restaurants, and everyday kitchen service.",
    image: "/uploads/spoon.svg",
  },
  {
    slug: "soup-spoon",
    title: "Soup Spoon",
    summary:
      "Deep-bowl stainless steel soup spoons shaped for comfortable use, polished finishing, and dependable resistance to frequent washing.",
    image: "/uploads/spoon.svg",
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
