import React from 'react';
import Header from '@/components/Header';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gorilla Trekking Uganda — Bwindi & Mgahinga | Je Fais Nature Safaris',
  description: 'Book gorilla trekking in Uganda with Je Fais Nature Safaris. Trek mountain gorillas in Bwindi Impenetrable Forest or Mgahinga. Expert guides, permits, accommodation.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/gorilla-trekking`,
  },
  openGraph: {
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/gorilla-trekking`,
    title: 'Gorilla Trekking Uganda — Bwindi & Mgahinga | Je Fais Nature Safaris',
    description: 'Book gorilla trekking in Uganda with Je Fais Nature Safaris. Trek mountain gorillas in Bwindi Impenetrable Forest or Mgahinga. Expert guides, permits, accommodation.',
    images: [{ url: '/assets/images/65194-1788420234672.webp', width: 1200, height: 630, alt: 'Gorilla trekking Uganda Bwindi mountain gorilla experience' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gorilla Trekking Uganda — Bwindi & Mgahinga | Je Fais Nature Safaris',
    description: 'Book gorilla trekking in Uganda with Je Fais Nature Safaris. Trek mountain gorillas in Bwindi Impenetrable Forest or Mgahinga.',
  },
};

export default function GorillaTrekkingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is gorilla trekking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gorilla trekking is a guided hike through dense mountain forest to locate and spend one hour with a habituated family of mountain gorillas. The trek can take anywhere from 30 minutes to several hours depending on where the gorillas are that day.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where can I trek gorillas in Uganda?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Uganda has two main gorilla trekking destinations: Bwindi Impenetrable National Park (home to over 400 mountain gorillas) and Mgahinga Gorilla National Park. Bwindi is the premier destination with more habituated gorilla families available for trekking.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a permit for gorilla trekking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, a gorilla trekking permit is required and must be booked in advance. Je Fais Nature Safaris handles all permit arrangements as part of your safari package.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best time to trek gorillas in Uganda?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gorilla trekking is possible year-round. Dry seasons (June–August and December–February) offer easier trekking conditions with better visibility and less muddy trails.',
        },
      },
      {
        '@type': 'Question',
        name: 'How physically demanding is gorilla trekking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Moderate fitness is required. Treks can be 2–8 hours through steep forest terrain. Sturdy hiking boots, long sleeves, and gloves are essential. Je Fais Nature Safaris guides adjust pace to your fitness level.',
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-end bg-dark overflow-hidden">
          {/* GORILLA TREKKING HERO IMAGE PLACEHOLDER — Replace /images/65161.webp with your gorilla trekking photograph */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/65161.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            role="img"
            aria-label="Mountain gorilla in Bwindi Impenetrable Forest Uganda gorilla trekking"
          />
          {/* Dark overlay — separate from image */}
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.15) 100%)' }} />
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-36">
            <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/uganda-safaris" className="hover:text-white transition-colors">Uganda Safaris</Link>
              <span>/</span>
              <span className="text-white/90">Gorilla Trekking</span>
            </nav>
            <span className="section-label text-accent block mb-3">Bwindi Impenetrable Forest</span>
            <h1 className="font-display text-hero text-white font-bold leading-tight">
              Gorilla Trekking<br />Uganda
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/75 max-w-lg leading-relaxed">
              Come face-to-face with mountain gorillas in their natural habitat. Uganda is home to over half the world's remaining mountain gorilla population — a truly life-changing wildlife encounter.
            </p>
          </div>
        </section>

        {/* What is gorilla trekking */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="section-label block mb-3">The Experience</span>
                <h2 className="font-display text-section-title font-bold text-foreground mb-6">
                  What is Gorilla Trekking?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Gorilla trekking is a guided hike through dense mountain forest to locate and spend one hour with a habituated family of mountain gorillas. The trek can take anywhere from 30 minutes to several hours depending on where the gorillas are that day.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Uganda's Bwindi Impenetrable National Park is the premier destination for gorilla trekking, home to over 400 mountain gorillas across multiple habituated families. Mgahinga Gorilla National Park in southwestern Uganda offers an alternative experience.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A gorilla trekking permit is required and must be booked in advance. Je Fais Nature Safaris handles all permit arrangements as part of your safari package.
                </p>
                <Link href="/contact" className="btn-primary">Book Gorilla Trekking</Link>
              </div>
              <div className="space-y-4">
                {/* GORILLA EXPERIENCE IMAGE PLACEHOLDER — Replace /images/65162.webp */}
                <div className="relative rounded-lg overflow-hidden h-56 bg-dark">
                  <img
                    src="/images/65162.webp"
                    alt="Gorilla trekking group in Bwindi Impenetrable Forest Uganda"
                    width={600}
                    height={224}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                {[
                  { icon: '🎫', title: 'Gorilla Permits', desc: 'Required for all trekkers. Je Fais handles all permit bookings on your behalf.' },
                  { icon: '🥾', title: 'Physical Preparation', desc: 'Moderate fitness required. Treks can be 2–8 hours through steep forest terrain.' },
                  { icon: '⏰', title: 'One Hour with Gorillas', desc: 'Once located, you spend exactly one hour with the gorilla family — a strict conservation rule.' },
                  { icon: '📅', title: 'Best Time to Visit', desc: 'Gorilla trekking is possible year-round. Dry seasons (June–August, Dec–Feb) offer easier trekking conditions.' },
                ].map((item) => (
                  <div key={item.title} className="bg-muted rounded-lg p-5 flex gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="section-label block mb-3">Gorilla Safari Packages</span>
            <h2 className="font-display text-section-title font-bold text-foreground mb-10">Choose Your Gorilla Safari</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: '3-Day Gorilla Trekking Safari',
                  duration: '3 Days',
                  slug: '3-day-murchison-falls-safari',
                  highlights: ['Gorilla permit included', 'Bwindi forest', 'Expert guide', 'Accommodation'],
                  // GORILLA PACKAGE IMAGE PLACEHOLDER — /images/65161.webp
                  image: '/images/65161.webp',
                  imageAlt: 'Mountain gorilla Bwindi Impenetrable Forest 3-day Uganda safari',
                },
                {
                  title: '7-Day Wildlife & Gorilla Safari',
                  duration: '7 Days',
                  slug: '7-day-uganda-safari',
                  highlights: ['Gorilla + chimp trekking', 'Queen Elizabeth NP', 'Multiple parks', 'All meals'],
                  // WILDLIFE & GORILLA PACKAGE IMAGE PLACEHOLDER — /images/map_image_13.webp
                  image: '/images/map_image_13.webp',
                  imageAlt: 'Uganda wildlife and gorilla safari 7-day multi-park adventure',
                },
              ].map((pkg) => (
                <div key={pkg.title} className="bg-card border border-border rounded-lg overflow-hidden">
                  {/* PACKAGE IMAGE PLACEHOLDER */}
                  <div className="relative h-40 bg-dark">
                    <img
                      src={pkg.image}
                      alt={pkg.imageAlt}
                      width={600}
                      height={160}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-dark/80 text-white text-xs font-semibold px-2 py-1 rounded-sm">{pkg.duration}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{pkg.title}</h3>
                    <ul className="space-y-1 mb-4">
                      {pkg.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="text-accent">✓</span> {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2 pt-4 border-t border-border">
                      <Link href={`/safari-packages/${pkg.slug}`} className="btn-primary text-xs py-2.5 px-4 flex-1 text-center">View Safari</Link>
                      <Link href={`/request-a-quote?package=${pkg.slug}`} className="btn-accent text-xs py-2.5 px-4 flex-1 text-center">Request a Quote</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to pack */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <span className="section-label block mb-3">Preparation</span>
            <h2 className="font-display text-section-title font-bold text-foreground mb-8">What to Pack for Gorilla Trekking</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Sturdy waterproof hiking boots', 'Long-sleeved shirts and long trousers', 'Rain jacket or poncho', 'Garden gloves for gripping vegetation',
                'Insect repellent', 'Sunscreen', 'Plenty of water and snacks', 'Camera (no flash photography)',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-muted rounded-lg p-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 sm:py-20 bg-dark text-center overflow-hidden">
          {/* GORILLA CTA BACKGROUND IMAGE PLACEHOLDER — /images/65161.webp */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/65161.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            role="img"
            aria-label="Gorilla trekking Uganda forest background"
          />
          <div className="absolute inset-0 z-10 bg-black/65" />
          <div className="relative z-20 max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-section-title text-white font-bold mb-4">Book Your Gorilla Trek</h2>
            <p className="text-white/70 mb-8">Contact Je Fais Nature Safaris to check permit availability and plan your Bwindi gorilla trekking experience.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Plan My Gorilla Trek</Link>
              <a href="https://wa.me/256774729464" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
          </div>
        </section>
      </main>
        <WhatsAppFloat />
    </>
  );
}

