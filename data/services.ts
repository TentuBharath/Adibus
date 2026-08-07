export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  heroImage: string;
  overview: string;
  features: string[];
  process?: string[];
};

export const services: Service[] = [
  {
    slug: "architectural-design",
    name: "Architectural Design",
    shortDescription:
      "From a blank plot to a buildable plan — orientation, structure and ventilation resolved before any interior decision is made.",
    heroImage: "/images/gallery/living-room-marble-tv.jpg",
    overview:
      "Before any interior decision is made, the architecture has to work — orientation, structure, ventilation, and how each level connects to the next. Our architectural team resolves the building first, so every design choice afterward has a sound foundation to build on.",
    features: [
      "Concept & Schematic Design",
      "Space Planning & Zoning",
      "Structural Coordination",
      "Elevation & Facade Design",
      "Working Drawings",
      "Statutory Drawing Support",
    ],
  },
  {
    slug: "interior-design",
    name: "Interior Design",
    shortDescription:
      "One design language, every typology — residential, hospitality, retail and institutional.",
    heroImage: "/images/gallery/bedroom-warm-wood.jpg",
    overview:
      "AdiBab's interior design practice spans residential, commercial, hospitality and institutional spaces, carrying each project from concept design through 3D visualization to final finishing — one design language applied consistently across every typology.",
    features: [
      "Residential Interiors",
      "Luxury Villas",
      "Apartments",
      "Office Interiors",
      "Retail Interiors",
      "Restaurants & Cafes",
      "Hotels & Hospitality",
      "Educational Institutions",
      "Hospitals",
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    shortDescription:
      "Built the way it was drawn — civil, MEP and finishing, supervised daily by the same people who designed it.",
    heroImage: "/images/gallery/kitchen-dramatic-ceiling.jpg",
    overview:
      "A beautiful drawing means nothing if the site can't execute it. Our construction team carries every project through civil work, MEP coordination and finishing — supervised daily by the same people who designed it.",
    features: [
      "Civil & Structural Work — foundation to finish, executed to drawing tolerances",
      "Quality Material Sourcing — branded, warrantied materials, never substituted without sign-off",
      "MEP Coordination — electrical, plumbing and HVAC sequenced to avoid rework",
      "Dedicated Site Supervision — an in-house supervisor on site for the life of the project",
    ],
  },
  {
    slug: "turnkey-solutions",
    name: "Turnkey Solutions",
    shortDescription:
      "One contract. One team. Zero handoffs — from the first sketch to the day you move in.",
    heroImage: "/images/gallery/kitchen-island-grey.jpg",
    overview:
      "A turnkey project with AdiBab's means a single point of accountability from the first sketch to the day you move in — no separate contractors to coordinate, no scope gaps to fall through.",
    features: [
      "Site study & client brief",
      "Concept design & space planning",
      "3D visualization & material selection",
      "BOQ preparation & approvals",
      "Vendor & material procurement",
      "Civil, MEP & finishing work",
      "Daily site supervision",
      "Snag-list closure & handover",
    ],
    process: ["Design Phase", "Execution Phase"],
  },
  {
    slug: "landscape-design",
    name: "Landscape Design",
    shortDescription:
      "Outdoor spaces designed with the same rigor as the interiors they surround.",
    heroImage: "/images/gallery/living-room-beige-tv.jpg",
    overview:
      "A building's edges matter as much as its interiors. We plan gardens, courtyards, terraces and pool decks as part of the same brief — not a separate vendor's afterthought. The view from the garden back into the house matters just as much as the view out.",
    features: [
      "Garden & Softscape Design",
      "Courtyards & Terraces",
      "Water Features & Pool Decks",
    ],
  },
  {
    slug: "office-interiors",
    name: "Office Interiors",
    shortDescription:
      "Workplaces designed to be used, not just photographed.",
    heroImage: "/images/gallery/kitchen-arch-pass.jpg",
    overview:
      "We design workplaces around how teams actually work — zoning for focus, collaboration and brand identity, with comfort and infrastructure built to scale as headcount changes.",
    features: [
      "Productivity-Led Layouts — zoning for focus work, meetings and informal collaboration",
      "Brand Integration — materials, colour and signage that reflect identity, not generic corporate style",
      "Comfort at Scale — acoustic, lighting and ergonomic comfort planned for full-day occupancy",
      "Scalable Infrastructure — modular furniture and cabling layouts that flex as headcount changes",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
