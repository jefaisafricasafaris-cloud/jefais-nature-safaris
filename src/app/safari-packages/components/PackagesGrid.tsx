'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { TourPackage } from '@/data/tourPackages';

const categories = ['All', 'Wildlife', 'Gorilla', 'Cultural'];
const durationFilters = ['All Durations', '3 Days', '4 Days', '5 Days', '6 Days', '7 Days'];

// IMAGE PLACEHOLDER mapping — replace each src with your actual safari photograph
const packageImages: Record<string, { src: string; alt: string }> = {
  '7-day-uganda-safari': {
    src: '/images/map_image_19.webp',
    alt: 'Murchison Falls National Park Uganda 7-day safari',
  },
  '6-day-uganda-safari': {
    src: '/images/map_image_7.webp',
    alt: 'Kibale Forest chimpanzee trekking Uganda 6-day safari',
  },
  '5-day-uganda-safari': {
    src: '/images/map_image_33.webp',
    alt: 'Queen Elizabeth National Park Uganda 5-day wildlife safari',
  },
  '4-day-uganda-holiday-safari': {
    src: '/images/ziwa-rhino.webp',
    alt: 'Ziwa Rhino Sanctuary Uganda 4-day holiday safari',
  },
  '3-day-murchison-falls-safari': {
    src: '/images/map_image_19.webp',
    alt: 'Murchison Falls boat cruise Nile River Uganda 3-day safari',
  },
};

interface PackagesGridProps {
  packages: TourPackage[];
}

export default function PackagesGrid({ packages }: PackagesGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeDuration, setActiveDuration] = useState('All Durations');
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = packages?.filter((p) => {
    const catMatch = activeCategory === 'All' || p?.category === activeCategory;
    const durMatch = activeDuration === 'All Durations' || p?.duration === activeDuration;
    return catMatch && durMatch;
  });

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;
    const items = section?.querySelectorAll('.pkg-item');
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
      { threshold: 0.06 }
    );
    items?.forEach((el) => obs?.observe(el));
    return () => obs?.disconnect();
  }, [filtered]);

  return (
    <section ref={sectionRef} className="py-14 sm:py-16 bg-background" aria-labelledby="packages-grid-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 id="packages-grid-heading" className="sr-only">All Uganda Safari Packages</h2>

        {/* Filter tabs */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
            {categories?.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-sm transition-all duration-200 min-h-[44px] ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by duration">
            {durationFilters?.map((dur) => (
              <button
                key={dur}
                role="tab"
                aria-selected={activeDuration === dur}
                onClick={() => setActiveDuration(dur)}
                className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all duration-200 min-h-[36px] ${
                  activeDuration === dur
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-border'
                }`}
              >
                {dur}
              </button>
            ))}
          </div>
        </div>

        {/* Package cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered?.map((pkg, i) => {
            const imgData = packageImages[pkg?.id] ?? {
              src: '/images/map_image_13.webp',
              alt: 'Uganda safari landscape',
            };
            return (
              <article
                key={pkg?.id}
                className="pkg-item reveal-hidden card-safari flex flex-col"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* PACKAGE CARD IMAGE PLACEHOLDER — see packageImages mapping above */}
                <div className="relative h-44 rounded-t-lg overflow-hidden bg-dark">
                  <img
                    src={imgData.src}
                    alt={imgData.alt}
                    width={600}
                    height={176}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  {/* Overlay — separate from image */}
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-3 left-3 flex gap-2 z-10">
                    {pkg?.badge && (
                      <span className="bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider">
                        {pkg?.badge}
                      </span>
                    )}
                    <span className="bg-dark/80 text-white text-xs font-semibold px-2 py-1 rounded-sm backdrop-blur-sm">
                      {pkg?.duration}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  {/* Destinations */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    {pkg?.destinations?.slice(0, 2)?.map((d) => (
                      <span key={d} className="text-xs text-accent font-medium uppercase tracking-wider">
                        {d?.replace(' National Park', '')}
                      </span>
                    ))}
                    {pkg?.destinations?.length > 2 && (
                      <span className="text-xs text-muted-foreground">+{pkg?.destinations?.length - 2} more</span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-3 leading-tight">
                    {pkg?.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {pkg?.summary}
                  </p>

                  {/* Key highlights */}
                  <ul className="space-y-1 mb-5">
                    {pkg?.highlights?.slice(0, 4)?.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="mt-auto pt-4 border-t border-border flex flex-col sm:flex-row gap-2">
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
              </article>
            );
          })}
        </div>

        {filtered?.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg mb-2">No packages match your current filters.</p>
            <button
              onClick={() => { setActiveCategory('All'); setActiveDuration('All Durations'); }}
              className="btn-primary text-sm mt-4"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Custom quote message */}
        <div className="mt-12 bg-muted border border-border rounded-lg p-6 sm:p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
            Every Safari Is Tailored to You
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
            Your safari quotation depends on your travel dates, number of travellers, accommodation preferences, activities and other requirements. Tell us what you are looking for and our team will prepare a personalized safari quotation.
          </p>
          <Link href="/request-a-quote" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

