"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages, galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/utils";

export default function GalleryGridClient() {
  const [active, setActive] = useState<string>("All");
  const filtered =
    active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "border-primary bg-primary text-white"
                : "border-border text-paragraph hover:border-primary hover:text-primary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {filtered.map((img) => (
          <div
            key={img.src}
            className="group relative overflow-hidden rounded-xl break-inside-avoid"
          >
            <Image
              src={img.src}
              alt={img.caption}
              width={800}
              height={600}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="p-4 text-sm text-white">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
