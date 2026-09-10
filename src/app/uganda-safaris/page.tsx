import React from 'react';
import Header from '@/components/Header';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uganda Safaris — Wildlife, Gorilla & Cultural Tours | Je Fais Nature Safaris',
  description: 'Explore Uganda safaris with Je Fais Nature Safaris. Gorilla trekking, wildlife safaris, chimpanzee trekking, cultural tours and tailor-made Uganda safari packages.',
};

export default function UgandaSafarisPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-end bg-dark overflow-hidden">
          {/* UGANDA SAFARIS HERO IMAGE PLACEHOLDER — Replace /images/map_image_13.webp with your Uganda safari landscape photograph */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/map_image_13.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            role="img"
            aria-label="Uganda safari landscape Pearl of Africa wildlife adventure"
          />
          {/* Dark overlay — separate from image */}
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.15) 100%)' }} />
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-36">
            <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/90">Uganda Safaris</span>
            </nav>
            <span className="section-label text-accent block mb-3">Pearl of Africa</span>
            <h1 className="font-display text-hero text-white font-bold leading-tight">
              Uganda Safaris
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/75 max-w-lg leading-relaxed">
              Uganda is one of Africa's most biodiverse destinations — home to mountain gorillas, chimpanzees, tree-climbing lions, and over 1,000 bird species. Let Je Fais Nature Safaris guide you through the Pearl of Africa.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="section-label block mb-3">Why Uganda?</span>
                <h2 className="font-display text-section-title font-bold text-foreground mb-6">
                  The Pearl of Africa Awaits
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Uganda offers an extraordinary combination of wildlife, landscapes, and cultural experiences. From the misty forests of Bwindi to the vast savannahs of Queen Elizabeth National Park, every corner of Uganda holds a unique adventure.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As a Uganda-based operator, Je Fais Nature Safaris provides authentic, personalized safari experiences. Our knowledgeable guides, well-maintained vehicles, and direct support ensure your safari exceeds expectations.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/safari-packages" className="btn-primary">View Safari Packages</Link>
                  <Link href="/contact" className="btn-outline-white" style={{ color: 'var(--foreground)', borderColor: 'var(--border)' }}>Plan My Safari</Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🦍', title: 'Gorilla Trekking', desc: 'Bwindi & Mgahinga', href: '/gorilla-trekking' },
                  { icon: '🦁', title: 'Wildlife Safaris', desc: 'Queen Elizabeth & Murchison', href: '/wildlife-safaris' },
                  { icon: '🐒', title: 'Chimp Trekking', desc: 'Kibale National Park', href: '/wildlife-safaris' },
                  { icon: '🏙️', title: 'Kampala Tours', desc: 'City & Cultural', href: '/contact' },
                  { icon: '🌊', title: 'Boat Safaris', desc: 'Nile & Kazinga Channel', href: '/safari-packages' },
                  { icon: '🚙', title: 'Car Hire', desc: 'Self-drive & guided', href: '/contact' },
                ].map((item) => (
                  <Link key={item.title} href={item.href} className="bg-muted rounded-lg p-4 flex flex-col items-center text-center hover:bg-border transition-colors">
                    <span className="text-3xl mb-2">{item.icon}</span>
                    <span className="font-semibold text-sm text-foreground">{item.title}</span>
                    <span className="text-xs text-muted-foreground mt-1">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* National Parks — with image placeholders */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="section-label block mb-3">Destinations</span>
            <h2 className="font-display text-section-title font-bold text-foreground mb-10">Uganda's National Parks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Bwindi Impenetrable Forest',
                  highlight: 'Mountain gorilla trekking',
                  // BWINDI IMAGE PLACEHOLDER — /images/65162.webp
                  image: '/images/65162.webp',
                  imageAlt: 'Bwindi Impenetrable Forest Uganda mountain gorilla trekking',
                },
                {
                  name: 'Queen Elizabeth National Park',
                  highlight: 'Tree-climbing lions & boat safaris',
                  // QUEEN ELIZABETH IMAGE PLACEHOLDER — /images/map_image_33.webp
                  image: '/images/map_image_33.webp',
                  imageAlt: 'Queen Elizabeth National Park Uganda tree-climbing lion safari',
                },
                {
                  name: 'Murchison Falls National Park',
                  highlight: 'Nile boat cruise & game drives',
                  // MURCHISON FALLS IMAGE PLACEHOLDER — /images/map_image_19.webp
                  image: '/images/map_image_19.webp',
                  imageAlt: 'Murchison Falls National Park Uganda Nile boat cruise',
                },
                {
                  name: 'Kibale National Park',
                  highlight: 'Chimpanzee trekking',
                  // KIBALE IMAGE — /images/kibaleforest1.webp
            image: '/images/kibaleforest1.webp',
                  imageAlt: 'Kibale National Park Uganda chimpanzee trekking forest',
                },
                {
                  name: 'Lake Mburo National Park',
                  highlight: 'Zebra, impala & walking safaris',
                  // LAKE MBURO IMAGE PLACEHOLDER — /images/map_image_28.webp
                  image: '/images/map_image_28.webp',
                  imageAlt: 'Lake Mburo National Park Uganda zebra impala walking safari',
                },
                {
                  name: 'Kidepo Valley National Park',
                  highlight: 'Remote wilderness & lions',
                  // KIDEPO IMAGE PLACEHOLDER — /images/map_image_64.webp
                  image: '/images/map_image_64.webp',
                  imageAlt: 'Kidepo Valley National Park Uganda remote wilderness safari',
                },
              ].map((park) => (
                <div key={park.name} className="bg-card border border-border rounded-lg overflow-hidden">
                  {/* PARK IMAGE PLACEHOLDER */}
                  <div className="relative h-36 bg-dark">
                    <img
                      src={park.image}
                      alt={park.imageAlt}
                      width={600}
                      height={144}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/15" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{park.name}</h3>
                    <p className="text-sm text-muted-foreground">{park.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/national-parks" className="btn-primary">Explore All National Parks</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 sm:py-20 bg-dark text-center overflow-hidden">
          {/* UGANDA SAFARIS CTA IMAGE PLACEHOLDER — /images/map_image_42.webp */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/map_image_42.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            role="img"
            aria-label="Uganda safari vehicle ready for wildlife adventure"
          />
          <div className="absolute inset-0 z-10 bg-black/65" />
          <div className="relative z-20 max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-section-title text-white font-bold mb-4">Ready to Plan Your Uganda Safari?</h2>
            <p className="text-white/70 mb-8">Contact Je Fais Nature Safaris today for a personalized itinerary and quote.</p>
                       <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Plan My Safari</Link>
              <a
                href="https://wa.me/256774729464"
                className="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppFloat />
    </>
  );
}