export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  hierarchy: number;
  department?: string;
}

export const team: TeamMember[] = [
  {
    id: "caleb-gero",
    name: "Caleb Gero",
    title: "CEO / Founder",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=82&w=900",
    hierarchy: 1,
    department: "Leadership"
  },
  {
    id: "amina-diallo",
    name: "Amina Diallo",
    title: "Director of Global Projects",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=82&w=900",
    hierarchy: 2,
    department: "Delivery"
  },
  {
    id: "marcus-chen",
    name: "Marcus Chen",
    title: "Commercial Director",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=82&w=900",
    hierarchy: 2,
    department: "Commercial"
  },
  {
    id: "nadia-stone",
    name: "Nadia Stone",
    title: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=82&w=900",
    hierarchy: 3,
    department: "Infrastructure"
  },
  {
    id: "thabo-mokoena",
    name: "Thabo Mokoena",
    title: "Senior Structural Engineer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=82&w=900",
    hierarchy: 4,
    department: "Structures"
  },
  {
    id: "isabella-rossi",
    name: "Isabella Rossi",
    title: "Geotechnical Specialist",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=82&w=900",
    hierarchy: 5,
    department: "Ground Engineering"
  },
  {
    id: "owen-hart",
    name: "Owen Hart",
    title: "Equipment Desk Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=82&w=900",
    hierarchy: 6,
    department: "Support"
  }
];
