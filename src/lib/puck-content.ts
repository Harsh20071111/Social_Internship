export const productCategories = [
  {
    slug: "precision-pump-systems",
    title: "Precision Pump Systems",
    summary: "Placeholder range of engineered transfer and circulation systems.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
    applications: ["Industry", "Utilities", "Infrastructure"],
    specs: ["Flow Range: placeholder", "Head Range: placeholder", "Rating: placeholder"],
  },
  {
    slug: "electric-motors",
    title: "Electric Motors",
    summary: "Placeholder motor portfolio for continuous-duty industrial operation.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85",
    applications: ["Industry", "Automation", "Processing"],
    specs: ["Power: placeholder", "Supply: placeholder", "Speed: placeholder"],
  },
  {
    slug: "industrial-valves",
    title: "Industrial Valves",
    summary: "Placeholder flow-control products for demanding process environments.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85",
    applications: ["Water", "Chemical", "Manufacturing"],
    specs: ["Size Range: placeholder", "Pressure: placeholder", "Material: placeholder"],
  },
  {
    slug: "filtration-units",
    title: "Filtration Units",
    summary: "Placeholder stainless-steel filtration and separation equipment.",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=85",
    applications: ["Process", "Food", "Water Treatment"],
    specs: ["Capacity: placeholder", "Micron Range: placeholder", "Finish: placeholder"],
  },
  {
    slug: "control-panels",
    title: "Control Panels",
    summary: "Placeholder monitoring, protection, and automation cabinets.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=85",
    applications: ["Automation", "Energy", "Infrastructure"],
    specs: ["Input: placeholder", "Protection: placeholder", "Interface: placeholder"],
  },
  {
    slug: "steel-fabrication",
    title: "Steel Fabrication",
    summary: "Placeholder custom vessels, housings, and precision-fabricated assemblies.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=85",
    applications: ["OEM", "Processing", "Institutional"],
    specs: ["Grade: placeholder", "Thickness: placeholder", "Finish: placeholder"],
  },
] as const;

export type ProductCategory = (typeof productCategories)[number];
