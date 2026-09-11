'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TourPackage } from '@/data/tourPackages';

interface PackagesGridProps {
  packages: TourPackage[];
}

export default function PackagesGrid({ packages }: PackagesGridProps) {
  const packageImages: Record<string, { src: string; alt: string }> = {
    '7-day-uganda-safari': {
      src: '/images/Tree-climbing-lions-in-Uganda.webp',
      alt: 'Tree climbing lions in Uganda',
    },

    '6-day-uganda-safari': {
      src: '/images/Juvenile-Chimp-in-Kibale-National-Park-Uganda.webp',
      alt: 'Juvenile chimpanzee in Kibale National Park Uganda',
    },

    '5-day-uganda-safari': {
      src: '/images/murchison-falls2.webp',
      alt: 'Queen Elizabeth National Park Uganda safari',
    },

    '4-day-uganda-holiday-safari': {
      src: '/images/ziwa-rhino.webp',
      alt: 'Ziwa Rhino Sanctuary Uganda safari',
    },

    // ONLY THE 3-DAY PACKAGE USES BUFFALO
    '3-day-murchison-falls-safari': {
      src: '/images/buffalo.webp',
      alt: 'Buffalo in Murchison Falls National Park Uganda',
    },
  };

  const filtered = packages;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* PACKAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered?.map((pkg) => {

            /*
             * IMPORTANT:
             * packageImages is keyed by SLUG.
             * Therefore we MUST use pkg.slug here,
             * not pkg.id.
             */
            const imgData =
              packageImages[pkg.slug] ?? {
                src: '/images/map_image_13.webp',
                alt: 'Uganda safari landscape',
              };

            return (
              <article
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition"
              >

                {/* PACKAGE IMAGE */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={imgData.src}
                    alt={imgData.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {pkg.badge && (
                    <div className="absolute top-4 left-4 bg-white text-green-800 px-3 py-1 rounded-full text-sm font-bold shadow">
                      {pkg.badge}
                    </div>
                  )}
                </div>

                {/* PACKAGE CONTENT */}
                <div className="p-6">

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">
                      {pkg.icon}
                    </span>

                    <span className="text-sm font-semibold text-green-700">
                      {pkg.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {pkg.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {pkg.summary}
                  </p>

                  {/* DESTINATIONS */}
                  {pkg.destinations?.length > 0 && (
                    <div className="mb-5">
                      <p className="text-xs uppercase tracking-wide font-bold text-gray-500 mb-2">
                        Destinations
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {pkg.destinations.map((destination) => (
                          <span
                            key={destination}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {destination}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* BUTTONS */}
                  <div className="flex gap-3">

                    <Link
                      href={`/safari-packages/${pkg.slug}`}
                      className="btn-primary text-xs py-3 px-4 flex-1 text-center justify-center"
                    >
                      View Safari
                    </Link>

                    <Link
                      href="/contact"
                      className="btn-primary text-xs py-3 px-4 flex-1 text-center justify-center"
                    >
                      Request Quote
                    </Link>

                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* NO RESULTS */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600">
              No safari packages found.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}