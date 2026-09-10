'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { TourPackage } from '@/data/tourPackages';

interface PackageDetailClientProps {
  pkg: TourPackage;
}

export default function PackageDetailClient({ pkg }: PackageDetailClientProps) {
  const [openDay, setOpenDay] = useState<number | null>(1);

  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end bg-dark overflow-hidden"
        aria-label={`${pkg.title} hero`}
      >
        {/* PACKAGE DETAIL HERO IMAGE PLACEHOLDER
            Each package uses a unique image path based on its slug.
            Replace the image file at the path below with your actual safari photograph.
            Slug-to-image mapping:
              7-day-uganda-safari        → /images/map_image_19.webp
              6-day-uganda-safari → /images/murchisonfalls23.webp
              5-day-uganda-safari        → /images/map_image_33.webp
              4-day-uganda-holiday-safari → /images/ziwa-rhino.webp
              3-day-murchison-falls-safari → /images/map_image_19.webp
        */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/placeholder-${pkg.slug}.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          role="img"
          aria-label={`${pkg.title} Uganda safari landscape`}
        />
        {/* Dark overlay — separate from image so photo can be replaced without redesigning */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.20) 100%)' }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-36 w-full">
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/safari-packages" className="hover:text-white transition-colors">Safari Packages</Link>
            <span>/</span>
            <span className="text-white/90">{pkg.title}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider">
              {pkg.duration}
            </span>
            {pkg.badge && (
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-sm uppercase tracking-wider backdrop-blur-sm">
                {pkg.badge}
              </span>
            )}
          </div>
          <h1 className="font-display text-hero text-white font-bold leading-tight mb-4">
            {pkg.title}
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed mb-8">
            {pkg.summary}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={`/request-a-quote?package=${pkg.id}`} className="btn-accent">
              Request a Quote
            </Link>
            <a
              href="https://wa.me/256774729464"
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-muted border-b border-border" aria-labelledby="highlights-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 id="highlights-heading" className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Safari Highlights
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {pkg.highlights.map((h) => (
              <div key={h} className="flex items-center gap-2.5 bg-card border border-border rounded p-3">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-foreground">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-10 bg-background border-b border-border" aria-labelledby="destinations-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 id="destinations-heading" className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Destinations Covered
          </h2>
          <div className="flex flex-wrap gap-3">
            {pkg.destinations.map((d) => (
              <span
                key={d}
                className="inline-flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 rounded px-4 py-2 text-sm font-semibold"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-14 sm:py-16 bg-background" aria-labelledby="itinerary-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="section-label block mb-3">Day by Day</span>
          <h2 id="itinerary-heading" className="font-display text-section-title font-bold text-foreground mb-10">
            Detailed Itinerary
          </h2>

          <div className="space-y-3">
            {pkg.itinerary.map((day) => (
              <div key={day.day} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
                  className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-muted transition-colors"
                  aria-expanded={openDay === day.day}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                      {day.day}
                    </span>
                    <div>
                      <span className="text-xs text-accent font-semibold uppercase tracking-wider block mb-0.5">
                        Day {day.day}
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-foreground leading-tight">
                        {day.title}
                      </h3>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openDay === day.day ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openDay === day.day && (
                  <div className="p-5 pt-0 bg-card border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 pt-4">
                      {day.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Activities</h4>
                        <ul className="space-y-1.5">
                          {day.activities.map((act) => (
                            <li key={act} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <svg className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {act}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Accommodation</h4>
                          <p className="text-sm text-muted-foreground">{day.accommodation}</p>
                        </div>
                        {day.meals && (
                          <div>
                            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Meals</h4>
                            <p className="text-sm text-muted-foreground">{day.meals}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* After itinerary CTA */}
          <div className="mt-12 bg-muted border border-border rounded-lg p-6 sm:p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Interested in This Safari?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-lg mx-auto">
              Request your personalized quotation. Tell us your preferred dates, number of travellers and accommodation preferences, and our safari team will prepare a detailed proposal.
            </p>
            <Link href={`/request-a-quote?package=${pkg.id}`} className="btn-accent">
              Request Your Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-14 sm:py-16 bg-muted border-t border-border" aria-labelledby="inclusions-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 id="inclusions-heading" className="font-display text-section-title font-bold text-foreground mb-10">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Inclusions
              </h3>
              <ul className="space-y-2.5">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-muted-foreground/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                Exclusions
              </h3>
              <ul className="space-y-2.5">
                {pkg.exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-muted-foreground/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 sm:py-16 bg-dark text-white" aria-labelledby="bottom-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label text-accent block mb-3">Ready to Explore Uganda?</span>
          <h2 id="bottom-cta-heading" className="font-display text-section-title font-bold text-white mb-4">
            Plan Your Safari
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-8 max-w-lg mx-auto">
            Tell us your preferred dates, number of travellers and interests, and our safari team will prepare a personalized quotation for your {pkg.title}.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href={`/request-a-quote?package=${pkg.id}`} className="btn-accent">
              Request a Quote
            </Link>
            <Link href="/safari-packages" className="btn-outline-white">
              View All Packages
            </Link>
            <a
              href="https://wa.me/256774729464"
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
