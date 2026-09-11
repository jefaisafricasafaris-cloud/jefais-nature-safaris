
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
<main
  className="min-h-screen pt-28 pb-20"
  style={{
    background:
      "linear-gradient(180deg, #dfe9d8 0%, #edf2e8 45%, #f5f2e9 100%)",
  }}
>

      {/* =========================================================
          PREMIUM HERO
      ========================================================== */}
      <section className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="relative mb-20 h-[62vh] min-h-[480px] max-h-[760px] overflow-hidden rounded-[2rem] bg-[#1b2a16] shadow-2xl">

          <Image
            src="/images/Juvenile-Chimp-in-Kibale-National-Park-Uganda.webp"
            alt="Juvenile chimpanzee in Kibale National Park, Uganda"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10" />

          {/* Hero content */}
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div className="max-w-4xl text-white">

              <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-white/80 sm:text-sm">
                JE FAIS NATURE SAFARIS
              </p>

              <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
                Gallery
              </h1>

              <div className="mx-auto mt-6 h-px w-20 bg-white/60" />

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
                A visual journey through Uganda&apos;s wildlife, forests,
                landscapes, culture and unforgettable safari experiences.
              </p>

              <a
                href="#gallery"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#1b2a16] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#f3eee5]"
              >
                Explore the Gallery
                <span className="text-lg">↓</span>
              </a>
            </div>
          </div>

         

          {/* Hero image count */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8">
            <div className="rounded-full border border-white/20 bg-black/30 px-5 py-2.5 backdrop-blur-md">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 sm:text-xs">
                {items.length} Safari Moments
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section
        id="gallery"
        className="mx-auto max-w-[1500px] scroll-mt-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-12 text-center">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a67c52]">
            JE FAIS NATURE SAFARIS
          </p>

          <h2 className="font-display text-3xl font-semibold tracking-tight text-[#1b2a16] sm:text-4xl lg:text-5xl">
            Explore Our Safari Moments
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            Explore moments from Uganda&apos;s wildlife, landscapes, gorilla
            trekking, safari experiences, culture and journeys with Je Fais
            Nature Safaris.
          </p>

          <div className="mt-5">
            <span className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1b2a16] shadow-sm ring-1 ring-black/5">
              {filteredItems.length}{" "}
              {filteredItems.length === 1 ? "image" : "images"}
            </span>
          </div>
        </div>

        {/* =========================================================
            CATEGORY FILTERS
        ========================================================== */}
        <div className="mb-14 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`
                rounded-full
                px-5
                py-2.5
                text-sm
                font-semibold
                transition-all
                duration-300
                ${
                  activeCategory === category
                    ? "bg-[#1b2a16] text-white shadow-lg"
                    : "bg-white text-[#1b2a16] shadow-sm ring-1 ring-black/5 hover:-translate-y-0.5 hover:bg-[#1b2a16] hover:text-white"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* =========================================================
            EMPTY STATE
        ========================================================== */}
        {filteredItems.length === 0 && (
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-[#1b2a16]">
              No gallery images found
            </h2>

            <p className="mt-2 text-gray-600">
              Check that your images are inside public/images/gallery/.
            </p>
          </div>
        )}

        {/* =========================================================
            PREMIUM EDITORIAL GALLERY
        ========================================================== */}
        {filteredItems.length > 0 && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">

            {filteredItems.map((item, index) => {
              let layoutClass = "";

              switch (index % 9) {
                case 0:
                  layoutClass =
                    "md:col-span-2 lg:col-span-7 lg:row-span-2";
                  break;

                case 1:
                  layoutClass =
                    "md:col-span-1 lg:col-span-5";
                  break;

                case 2:
                  layoutClass =
                    "md:col-span-1 lg:col-span-5";
                  break;

                case 3:
                  layoutClass =
                    "md:col-span-2 lg:col-span-8";
                  break;

                case 4:
                  layoutClass =
                    "md:col-span-1 lg:col-span-4";
                  break;

                case 5:
                  layoutClass =
                    "md:col-span-1 lg:col-span-4";
                  break;

                case 6:
                  layoutClass =
                    "md:col-span-2 lg:col-span-8";
                  break;

                case 7:
                  layoutClass =
                    "md:col-span-1 lg:col-span-4";
                  break;

                case 8:
                  layoutClass =
                    "md:col-span-2 lg:col-span-8 lg:row-span-2";
                  break;
              }

              const imageHeight =
                index % 9 === 0 || index % 9 === 8
                  ? "h-[520px] md:h-full min-h-[420px]"
                  : index % 9 === 3 || index % 9 === 6
                    ? "h-[360px]"
                    : "h-[300px]";

              return (
                <button
                  key={item.filename}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className={`
                    ${layoutClass}
                    group
                    relative
                    overflow-hidden
                    rounded-[1.5rem]
                    bg-white
                    text-left
                    shadow-sm
                    ring-1
                    ring-black/5
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-2xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#a67c52]
                  `}
                >
                  <div
                    className={`relative w-full overflow-hidden bg-gray-100 ${imageHeight}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 70vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />

                    {/* Number */}
                    <div className="absolute right-4 top-4">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-[10px] font-bold text-white backdrop-blur-md">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
                        {item.category}
                      </p>

                      <h3 className="mt-2 max-w-xl text-lg font-semibold leading-6 text-white sm:text-xl">
                        {item.title}
                      </h3>

                      <div className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <span>View image</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* =========================================================
          LIGHTBOX
      ========================================================== */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20"
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="relative w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full sm:h-[80vh]">
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                {selectedImage.category}
              </p>

              <h2 className="mt-1 text-lg font-semibold sm:text-xl">
                {selectedImage.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
