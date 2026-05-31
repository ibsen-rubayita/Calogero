export type ProjectCategory =
  | "Bridges"
  | "Skyscrapers"
  | "Roads"
  | "Hotels"
  | "Houses"
  | "Dams"
  | "Other";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  image: string;
  description: string;
  longDescription?: string;
  date: string;
  location?: string;
  tags?: string[];
}

export const projectCategories: ProjectCategory[] = [
  "Bridges",
  "Skyscrapers",
  "Roads",
  "Hotels",
  "Houses",
  "Dams",
  "Other"
];

export const blurDataUrl =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDEyIDgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3QgZmlsbD0nIzBBMUYzRCcgd2lkdGg9JzEyJyBoZWlnaHQ9JzgnLz48cGF0aCBkPSdNMSA2TDUgMmw2IDQnIHN0cm9rZT0nI0Q0QTU3NCcgc3Ryb2tlLXdpZHRoPScuNicgZmlsbD0nbm9uZScvPjwvc3ZnPg==";

export const projects: Project[] = [
  {
    id: "harbor-arc-bridge",
    name: "Harbor Arc Bridge",
    category: "Bridges",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=82&w=1400",
    description:
      "A cable-supported crossing designed for heavy coastal wind and dense commuter loads. Calogero coordinated structural review, staged construction planning, and durability detailing.",
    longDescription:
      "The bridge program balanced aggressive delivery windows with marine corrosion controls, access constraints, and long-span vibration performance.",
    date: "2026-02-12",
    location: "Lisbon, Portugal",
    tags: ["marine works", "steel", "transport"]
  },
  {
    id: "aurora-tower",
    name: "Aurora Tower",
    category: "Skyscrapers",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=82&w=1400",
    description:
      "A mixed-use high-rise with wind-aware facade geometry and a compact services core. The team delivered constructability studies and floor-cycle optimization.",
    date: "2025-11-18",
    location: "Dubai, UAE",
    tags: ["high-rise", "facade", "mixed-use"]
  },
  {
    id: "northline-expressway",
    name: "Northline Expressway",
    category: "Roads",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=82&w=1400",
    description:
      "A regional road upgrade with drainage redesign, stabilized shoulders, and safer interchange geometry for freight corridors.",
    date: "2025-08-04",
    location: "Gauteng, South Africa",
    tags: ["transport", "drainage", "civil works"]
  },
  {
    id: "solenne-hotel",
    name: "Solenne Hotel",
    category: "Hotels",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=82&w=1400",
    description:
      "A coastal hospitality project using post-tensioned slabs, quiet plant routing, and resilient envelope detailing for a premium guest experience.",
    date: "2025-05-22",
    location: "Mombasa, Kenya",
    tags: ["hospitality", "post-tensioning", "coastal"]
  },
  {
    id: "ridge-house-collection",
    name: "Ridge House Collection",
    category: "Houses",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=82&w=1400",
    description:
      "A set of hillside residences with stepped retaining structures, low-impact drainage, and refined structural coordination.",
    date: "2024-12-16",
    location: "Cape Town, South Africa",
    tags: ["residential", "retaining", "drainage"]
  },
  {
    id: "meridian-dam",
    name: "Meridian Dam Safety Works",
    category: "Dams",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=82&w=1400",
    description:
      "Spillway strengthening, monitoring upgrades, and phased access planning for a critical regional water asset.",
    date: "2024-09-02",
    location: "Rwanda",
    tags: ["water", "safety", "inspection"]
  },
  {
    id: "yardlink-equipment-hub",
    name: "YardLink Equipment Hub",
    category: "Other",
    image:
      "https://images.unsplash.com/photo-1581091870622-7c879b4ac449?auto=format&fit=crop&q=82&w=1400",
    description:
      "A rental and logistics hub for cranes, formwork, survey kits, and temporary works packages serving multiple active sites.",
    date: "2024-07-21",
    location: "Accra, Ghana",
    tags: ["tool rentals", "logistics", "operations"]
  }
];
