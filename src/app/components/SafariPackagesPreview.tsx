'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { TourPackage } from '@/data/tourPackages';

interface SafariPackagesPreviewProps {
  packages: TourPackage[];
}

export default function SafariPackagesPreview({
  packages,
}: SafariPackagesPreviewProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const items = section.querySelectorAll('.pkg-card');

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
            entry.target.classList.add('reveal-active');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    items.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 sm:py-36 bg-texture"
      aria-labelledby="packages-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="accent-line" />

            <span className="section-label block mb-4">
              Handcrafted Itineraries
            </span>

            <h2
              id="packages-heading"
              className="font-display text-section-title font-bold text-foreground"
            >
              Popular Safari
              <br />
              Packages
            </h2>
          </div>

          <Link
            href="/safari-packages"
            className="btn-primary self-start sm:self-auto"
          >
            View All Packages →
          </Link>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {packages?.map((pkg, i) => {

            /*
             * IMPORTANT:
             * The homepage now uses pkg.image directly from
             * tourPackages.ts.
             *
             * This guarantees that the homepage and package
             * detail page use the same image.
             */
            const imageSrc =
              pkg?.image || '/images/map_image_13.webp';

            const imageAlt =
              pkg?.title
                ? `${pkg.title} - Uganda safari`
                : 'Uganda safari experience';

            return (
              <div
                key={pkg?.id}
                className={`pkg-card reveal-hidden stagger-${i + 1} group flex flex-col rounded-2xl overflow-hidden`}
                style={{
                  background:
                    'linear-gradient(145deg, #ffffff 0%, #faf8f4 100%)',
                  border: '1px solid rgba(200,150,90,0.15)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                  transition:
                    'box-shadow 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 24px 56px rgba(0,0,0,0.14), 0 4px 16px rgba(200,150,90,0.12)';

                  e.currentTarget.style.transform =
                    'translateY(-6px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 4px 24px rgba(0,0,0,0.06)';

                  e.currentTarget.style.transform =
                    'translateY(0)';
                }}
              >

                {/* Package Image */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-dark">

                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    width={400}
                    height={224}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      transition:
                        'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                    }}
                    loading={i < 3 ? 'eager' : 'lazy'}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                    }}
                  />

                  {/* Badge */}
                  {pkg?.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="package-badge">
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  {/* Duration */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className="text-xs font-semibold px-2.5 py-1.5 rounded-md text-white"
                      style={{
                        background: 'rgba(10,21,8,0.75)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {pkg?.duration}
                    </span>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-6 flex flex-col flex-1">

                  {/* Destinations */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {pkg?.destinations?.slice(0, 2)?.map((destination) => (
                      <span
                        key={destination}
                        className="text-xs text-accent font-semibold uppercase tracking-wider"
                      >
                        {destination.replace(
                          ' National Park',
                          ''
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 leading-tight">
                    {pkg?.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
                    {pkg?.summary}
                  </p>

                  {/* Highlights */}
                  <ul className="flex flex-wrap gap-2 mb-6">
                    {pkg?.highlights?.slice(0, 3)?.map((highlight) => (
                      <li
                        key={highlight}
                        className="highlight-chip"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary/50" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="mt-auto flex flex-col sm:flex-row gap-3">

                    <Link
                      href={`/safari-packages/${pkg?.slug}`}
                      className="btn-primary text-xs py-3 px-4 flex-1 text-center justify-center"
                    >
                      View Safari
                    </Link>

                    <Link
                      href={`/request-a-quote?package=${pkg?.id}`}
                      className="btn-accent text-xs py-3 px-4 flex-1 text-center justify-center"
                    >
                      Request a Quote
                    </Link>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Quote Message */}
        <div
          className="mt-14 p-8 text-center max-w-2xl mx-auto rounded-2xl"
          style={{
            background:
              'linear-gradient(145deg, rgba(45,80,22,0.06) 0%, rgba(45,80,22,0.03) 100%)',
            border: '1px solid rgba(45,80,22,0.15)',
          }}
        >
          <div className="text-2xl mb-3">
            🌿
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">
              Every safari is custom quoted.
            </strong>{' '}
            Your quotation depends on your travel dates, group size,
            accommodation preferences and activities. No public prices —
            just a personalized proposal crafted for you.
          </p>
        </div>

      </div>
    </section>
  );
}