'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TourPackage } from '@/data/tourPackages';

interface PackageDetailClientProps {
  pkg: TourPackage;
}

export default function PackageDetailClient({
  pkg,
}: PackageDetailClientProps) {
  const [openDay, setOpenDay] = useState<number | null>(1);

  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end bg-dark overflow-hidden"
        aria-label={`${pkg.title} hero`}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${pkg.image || '/images/map_image_19.webp'}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          role="img"
          aria-label={`${pkg.title} Uganda safari landscape`}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32">
          <div className="max-w-4xl">
            {pkg.badge && (
              <span className="inline-block mb-4 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                {pkg.badge}
              </span>
            )}

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                {pkg.duration}
              </span>

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                {pkg.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {pkg.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
              {pkg.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-6 py-3"
              >
                Request a Quotation
              </Link>

              <a
                href="https://wa.me/256774729464"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-dark"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Highlights */}
              <div className="mb-12">
                <h2 className="mb-6 text-3xl font-bold text-dark">
                  Safari Highlights
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  {pkg.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg bg-gray-50 p-4"
                    >
                      <span className="mt-1 text-primary">✓</span>

                      <span className="text-gray-700">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destinations */}
              <div className="mb-12">
                <h2 className="mb-6 text-3xl font-bold text-dark">
                  Destinations
                </h2>

                <div className="flex flex-wrap gap-3">
                  {pkg.destinations.map((destination, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {destination}
                    </span>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-12">
                <h2 className="mb-6 text-3xl font-bold text-dark">
                  Safari Itinerary
                </h2>

                <div className="space-y-4">
                  {pkg.itinerary.map((day) => {
                    const isOpen = openDay === day.day;

                    return (
                      <div
                        key={day.day}
                        className="overflow-hidden rounded-lg border border-gray-200"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenDay(isOpen ? null : day.day)
                          }
                          className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-gray-50"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-center gap-4">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                              {day.day}
                            </span>

                            <h3 className="font-semibold text-dark">
                              {day.title}
                            </h3>
                          </div>

                          <span className="text-xl text-gray-500">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="border-t border-gray-200 px-5 pb-6 pt-5">
                            <p className="mb-5 leading-relaxed text-gray-600">
                              {day.description}
                            </p>

                            {day.activities?.length > 0 && (
                              <div className="mb-5">
                                <h4 className="mb-3 font-semibold text-dark">
                                  Activities
                                </h4>

                                <ul className="space-y-2">
                                  {day.activities.map(
                                    (activity, index) => (
                                      <li
                                        key={index}
                                        className="flex items-start gap-2 text-gray-600"
                                      >
                                        <span className="mt-1 text-primary">
                                          •
                                        </span>
                                        <span>{activity}</span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}

                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <h4 className="mb-1 font-semibold text-dark">
                                  Accommodation
                                </h4>

                                <p className="text-gray-600">
                                  {day.accommodation}
                                </p>
                              </div>

                              {day.meals && (
                                <div>
                                  <h4 className="mb-1 font-semibold text-dark">
                                    Meals
                                  </h4>

                                  <p className="text-gray-600">
                                    {day.meals}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-5 text-2xl font-bold text-dark">
                    What's Included
                  </h2>

                  <ul className="space-y-3">
                    {pkg.inclusions.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <span className="mt-1 text-green-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="mb-5 text-2xl font-bold text-dark">
                    What's Excluded
                  </h2>

                  <ul className="space-y-3">
                    {pkg.exclusions.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <span className="mt-1 text-red-500">×</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-xl bg-gray-50 p-6 shadow-sm">
                <div className="mb-6">
                  <span className="text-sm font-medium text-gray-500">
                    Safari Duration
                  </span>

                  <div className="mt-1 text-2xl font-bold text-dark">
                    {pkg.duration}
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-sm font-medium text-gray-500">
                    Destinations
                  </span>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {pkg.destinations.map((destination, index) => (
                      <span
                        key={index}
                        className="text-sm text-gray-700"
                      >
                        {destination}
                        {index < pkg.destinations.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="btn-primary flex w-full items-center justify-center px-6 py-3"
                >
                  Request a Quotation
                </Link>

                <a
                  href="https://wa.me/256774729464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex w-full items-center justify-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  WhatsApp Us
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-dark py-16">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Plan Your Safari?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Submit your trip details and our team will prepare a
            personalized quotation for you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center px-8 py-3"
            >
              Request a Quotation
            </Link>

            <a
              href="https://wa.me/256774729464"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-dark"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}