export type GalleryImage = {
  src: string;
  category: "Living" | "Kitchen" | "Bedroom" | "Office" | "Exterior" | "Construction";
  caption: string;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/living-room-marble-tv.jpg",
    category: "Living",
    caption: "Marble-clad living room with backlit display cabinet",
  },
  {
    src: "/images/gallery/living-room-beige-tv.jpg",
    category: "Living",
    caption: "Fluted-panel living room with brass chandelier",
  },
  {
    src: "/images/gallery/kitchen-island-grey.jpg",
    category: "Kitchen",
    caption: "Curved fluted-timber kitchen island with marble waterfall top",
  },
  {
    src: "/images/gallery/kitchen-dramatic-ceiling.jpg",
    category: "Kitchen",
    caption: "Walnut recessed-light ceiling feature over a marble island",
  },
  {
    src: "/images/gallery/kitchen-arch-pass.jpg",
    category: "Kitchen",
    caption: "Arched pass-through breakfast counter with pendant lighting",
  },
  {
    src: "/images/gallery/bedroom-warm-wood.jpg",
    category: "Bedroom",
    caption: "Warm-wood panelled master suite with sculpted headboard wall",
  },
  {
    src: "/images/gallery/bedroom-modern-wardrobe.jpg",
    category: "Bedroom",
    caption: "Slatted-wardrobe bedroom with sculptural ring pendant",
  },
];

export const galleryCategories = [
  "All",
  "Living",
  "Kitchen",
  "Bedroom",
  "Office",
  "Exterior",
  "Construction",
] as const;
