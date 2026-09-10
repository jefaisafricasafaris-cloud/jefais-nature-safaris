"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryItem {
  filename: string;
  src: string;
  category: string;
  title: string;
}

interface GalleryDisplayProps {
  items?: GalleryItem[];
}

export default function GalleryDisplay({
  items = [],
}: GalleryDisplayProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(items.map((item) => item.category))),
  ];

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#f8f6f1] pt-28 pb-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#a67c52]">
            JE FAIS NATURE SAFARIS
          </p>

          <h1 className="font-display text-4xl font-semibold text-[#1b2a16] sm:text-5xl">
            Uganda Safari Gallery
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Explore moments from Uganda&apos;s wildlife, landscapes, gorilla
            trekking, safari experiences, culture and journeys with Je Fais
            Nature Safaris.
          </p>

          <p className="mt-3 text-sm font-medium text-gray-500">
            {filteredItems.length}{" "}
            {filteredItems.length === 1 ? "image" : "images"}
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-[#1b2a16] text-white shadow-md"
                  : "bg-white text-[#1b2a16] shadow-sm ring-1 ring-black/5 hover:bg-[#1b2a16] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-[#1b2a16]">
              No gallery images found
            </h2>

            <p className="mt-2 text-gray-600">
              Check that your images are inside public/images/gallery/.
            </p>
          </div>
        )}

        {filteredItems.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <button
                key={item.filename}
                type="button"
                onClick={() => setSelectedImage(item)}
                className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#a67c52]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-medium uppercase tracking-wider text-white/80">
                      {item.category}
                    </p>

                    <p className="mt-1 font-semibold">
                      {item.title}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="relative max-h-[90vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 text-center text-white">
              <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                {selectedImage.category}
              </p>

              <h2 className="mt-1 text-lg font-semibold">
                {selectedImage.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}