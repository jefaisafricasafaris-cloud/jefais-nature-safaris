import React from 'react';
import Header from '@/components/Header';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import Link from 'next/link';

interface ParkPageProps {
  name: string;
  region: string;
  highlight: string;
  description: string;
  activities: string[];
  image: string;
  imageAlt: string;
}

export default function ParkPage({
  name,
  region,
  highlight,
  description,
  activities,
  image,
  imageAlt,
}: ParkPageProps) {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[55vh] flex items-end bg-dark overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            role="img"
            aria-label={imageAlt}
          />

          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.15) 100%)',
            }}
          />

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-36 w-full">
            <nav
              className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-4"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>

              <span>/</span>

              <Link
                href="/national-parks"
                className="hover:text-white transition-colors"
              >
                National Parks
              </Link>

              <span>/</span>

              <span className="text-white/90">{name}</span>
            </nav>

            <span className="section-label text-accent block mb-3">
              {region}
            </span>

            <h1 className="font-display text-hero text-white font-bold leading-tight max-w-4xl">
              {name}
            </h1>

            <p className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
              {highlight}
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              
              {/* DESCRIPTION */}
              <div className="lg:col-span-2">
                <span className="section-label block mb-3">
                  Explore {name}
                </span>

                <h2 className="font-display text-section-title font-bold text-foreground mb-6">
                  Discover {name}
                </h2>

                <p className="text-muted-foreground leading-relaxed text-base">
                  {description}
                </p>

                <div className="mt-10">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Safari Activities
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {activities.map((activity) => (
                      <span
                        key={activity}
                        className="text-sm bg-muted text-muted-foreground px-3 py-2 rounded-md"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* SIDEBAR */}
              <aside className="bg-card border border-border rounded-lg p-6 h-fit">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Plan Your Visit
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Interested in exploring {name}? Tell us about your travel
                  plans and our team can help you plan your Uganda safari.
                </p>

                <Link
                  href="/request-a-quote"
                  className="btn-primary w-full inline-flex justify-center"
                >
                  Request a Quotation
                </Link>

                <Link
                  href="/national-parks"
                  className="mt-3 w-full inline-flex justify-center text-sm font-medium text-accent hover:underline"
                >
                  ← View All National Parks
                </Link>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display text-section-title font-bold text-foreground mb-4">
              Plan Your {name} Safari
            </h2>

            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let Je Fais Nature Safaris help you plan a memorable experience
              in {name}.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/request-a-quote" className="btn-primary">
                Request a Quotation
              </Link>

              <Link href="/contact" className="btn-accent">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppFloat />
    </>
  );
}