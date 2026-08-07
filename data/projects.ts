export type Project = {
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Office" | "Villa" | "Restaurant" | "Hospitality";
  location: string;
  year: string;
  coverImage: string;
  images: string[];
  scope: string[];
  materials: string[];
  description: string;
};

export const projects: Project[] = [
  {
    slug: "luxury-villa-rushikonda",
    title: "A Luxury Villa in Rushikonda",
    category: "Villa",
    location: "Visakhapatnam",
    year: "2025",
    coverImage: "/images/gallery/bedroom-warm-wood.jpg",
    images: [
      "/images/gallery/bedroom-warm-wood.jpg",
      "/images/gallery/living-room-marble-tv.jpg",
      "/images/gallery/kitchen-island-grey.jpg",
    ],
    scope: ["Architecture", "Interior Design", "Landscape", "Turnkey Execution"],
    materials: ["Engineered wood veneer", "Marble cladding", "Mikasa door sets"],
    description:
      "A statement family villa where architecture, interiors and landscape were designed as one continuous brief — from the master suite's warm-wood headboard wall to the marble-clad living room centered on a fluted display cabinet.",
  },
  {
    slug: "skyline-corporate-office-hyderabad",
    title: "Skyline Corporate Office",
    category: "Office",
    location: "Hyderabad",
    year: "2024",
    coverImage: "/images/gallery/kitchen-arch-pass.jpg",
    images: [
      "/images/gallery/kitchen-arch-pass.jpg",
      "/images/gallery/living-room-beige-tv.jpg",
    ],
    scope: ["Interior Design", "MEP Coordination", "Turnkey Execution"],
    materials: ["Acoustic ceiling panels", "Modular workstations", "LED task lighting"],
    description:
      "A productivity-led workplace fit-out balancing focus zones, informal collaboration areas and brand identity for a growing technology team.",
  },
  {
    slug: "urban-loft-apartment-bangalore",
    title: "Urban Loft Apartment",
    category: "Residential",
    location: "Bangalore",
    year: "2025",
    coverImage: "/images/gallery/kitchen-dramatic-ceiling.jpg",
    images: [
      "/images/gallery/kitchen-dramatic-ceiling.jpg",
      "/images/gallery/bedroom-modern-wardrobe.jpg",
    ],
    scope: ["Interior Design", "3D Visualization", "Turnkey Execution"],
    materials: ["Book-matched marble island", "Walnut ceiling feature", "Concealed LED coves"],
    description:
      "A compact-footprint apartment made to feel generous through a sculptural kitchen island and a dramatic recessed-light ceiling feature that anchors the living space.",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const projectCategories = [
  "All",
  "Residential",
  "Commercial",
  "Office",
  "Villa",
  "Restaurant",
  "Hospitality",
] as const;
