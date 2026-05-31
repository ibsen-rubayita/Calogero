export interface BlogPost {
  id: string;
  title: string;
  category: string;
  summary: string;
  content?: string;
  image: string;
  date: string;
  author?: string;
}

export const blogCategories = ["Engineering", "News", "Tips", "Case Studies", "Markets"];

export const blogPosts: BlogPost[] = [
  {
    id: "bridge-inspection-digital-twins",
    title: "How digital twins are changing bridge inspection cycles",
    category: "Engineering",
    summary:
      "Digital twins help engineering teams understand degradation, schedule interventions, and make inspection records more useful across a bridge life cycle.",
    image:
      "https://images.unsplash.com/photo-1495556650867-99590cea3657?auto=format&fit=crop&q=82&w=1200",
    date: "2026-03-04",
    author: "Calogero Technical Desk"
  },
  {
    id: "calogero-expands-rental-network",
    title: "Calogero expands regional construction tool rental network",
    category: "News",
    summary:
      "The new equipment desk gives contractors faster access to survey gear, lifting accessories, formwork systems, and specialist site tools.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=82&w=1200",
    date: "2026-01-18",
    author: "Operations Team"
  },
  {
    id: "retaining-wall-early-decisions",
    title: "Five early decisions that protect retaining wall budgets",
    category: "Tips",
    summary:
      "Geotechnical clarity, drainage strategy, access sequencing, and material selection can prevent costly redesigns during residential and road works.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=82&w=1200",
    date: "2025-12-09",
    author: "Site Advisory Group"
  },
  {
    id: "hotel-structure-case-study",
    title: "Case study: quiet structure for a coastal hotel",
    category: "Case Studies",
    summary:
      "A hospitality project used coordinated structural, acoustic, and services planning to protect guest comfort without slowing the frame program.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=82&w=1200",
    date: "2025-10-27",
    author: "Design Review Team"
  },
  {
    id: "private-infrastructure-market",
    title: "What private infrastructure clients now expect from consultants",
    category: "Markets",
    summary:
      "Modern clients want buildable advice, transparent procurement support, and engineering partners who can move between design and site realities.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=82&w=1200",
    date: "2025-09-11",
    author: "Strategy Office"
  }
];
