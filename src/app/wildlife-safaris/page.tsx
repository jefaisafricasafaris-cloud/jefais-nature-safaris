import React from 'react';
import Header from '@/components/Header';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uganda Wildlife Safaris — National Parks & Game Drives | Je Fais Nature Safaris',
  description: 'Experience Uganda wildlife safaris with Je Fais Nature Safaris. Game drives, boat safaris, tree-climbing lions, elephants, and more across Uganda\'s national parks.',
};

export default function WildlifeSafarisPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-end bg-dark overflow-hidden">
          {/* WILDLIFE SAFARI HERO IMAGE PLACEHOLDER — Replace /images/AA26.webp with your wildlife safari photograph */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/AA26.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            role="img"
            aria-label="Uganda wildlife safari game drive with lions and elephants"
          />
          {/* Dark overlay — separate from image */}
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.15) 100%)' }} />
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-36">
            <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/uganda-safaris" className="hover:text-white transition-colors">Uganda Safaris</Link>
              <span>/</span>
              <span className="text-white/90">Wildlife Safaris</span>
            </nav>
            <span className="section-label text-accent block mb-3">Game Drives & More</span>
            <h1 className="font-display text-hero text-white font-bold leading-tight">
              Uganda Wildlife<br />Safaris
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/75 max-w-lg leading-relaxed">
              Uganda's national parks offer extraordinary wildlife encounters — from the famous tree-climbing lions of Queen Elizabeth to the thundering Murchison Falls and the zebra-dotted plains of Lake Mburo.
            </p>
          </div>
        </section>

        {/* Wildlife experiences */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="section-label block mb-3">Wildlife Experiences</span>
            <h2 className="font-display text-section-title font-bold text-foreground mb-10">Uganda's Wildlife Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '🦁', title: 'Tree-Climbing Lions', desc: 'Queen Elizabeth National Park is famous for its unique tree-climbing lions — a rare behaviour found in very few places in Africa.' },
                { icon: '🐘', title: 'African Elephants', desc: 'Large elephant herds roam Queen Elizabeth and Murchison Falls National Parks. Boat safaris offer excellent elephant sightings.' },
                { icon: '🦛', title: 'Nile Hippos', desc: 'The Kazinga Channel and Nile River support huge hippo populations. Boat safaris bring you within metres of these impressive animals.' },
                { icon: '🦒', title: 'Rothschild\'s Giraffe', desc: 'Murchison Falls is home to one of the largest populations of Rothschild\'s giraffe — one of the most endangered giraffe subspecies.' },
                { icon: '🦓', title: 'Zebra & Impala', desc: 'Lake Mburo National Park offers excellent zebra, impala, and topi sightings, along with walking safaris and night game drives.' },
                { icon: '🐒', title: 'Chimpanzees', desc: 'Kibale National Park hosts the highest density of primates in Africa, including habituated chimpanzee communities for trekking.' },
              ].map((item) => (
                <div key={item.title} className="bg-muted rounded-lg p-6">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parks */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="section-label block mb-3">Top Destinations</span>
            <h2 className="font-display text-section-title font-bold text-foreground mb-10">Best Parks for Wildlife</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  name: 'Queen Elizabeth National Park',
                  highlights: ['Tree-climbing lions', 'Kazinga Channel boat safari', 'Elephant & buffalo herds', 'Chimpanzee trekking in Kyambura Gorge'],
                  slug: '5-day-uganda-safari',
                  // QUEEN ELIZABETH IMAGE PLACEHOLDER — /images/map_image_33.webp
                  image: '/images/map_image_33.webp',
                  imageAlt: 'Tree-climbing lion in Queen Elizabeth National Park Uganda safari',
                },
                {
                  name: 'Murchison Falls National Park',
                  highlights: ['Murchison Falls boat cruise', 'Nile game drives', 'Rothschild\'s giraffe', 'Shoebill stork birding'],
                  slug: '3-day-murchison-falls-safari',
                  // MURCHISON FALLS IMAGE PLACEHOLDER — /images/map_image_19.webp
                  image: '/images/map_image_19.webp',
                  imageAlt: 'Murchison Falls National Park boat cruise on the Nile River Uganda',
                },
                {
                  name: 'Lake Mburo National Park',
                  highlights: ['Zebra & impala', 'Walking safaris', 'Night game drives', 'Boat safari on Lake Mburo'],
                  slug: '4-day-uganda-holiday-safari',
                  // LAKE MBURO IMAGE PLACEHOLDER — /images/map_image_28.webp
                  image: '/images/map_image_28.webp',
                  imageAlt: 'Zebra and impala at Lake Mburo National Park Uganda safari',
                },
                {
                  name: 'Kibale National Park',
                  highlights: ['Chimpanzee trekking', 'Primate walks', 'Forest birding', 'Bigodi Wetland Sanctuary'],
                  slug: '6-day-uganda-safari',
                 // KIBALE FOREST IMAGE — /images/kibaleforest1.webp
           image: '/images/kibaleforest1.webp',
                  imageAlt: 'Kibale National Park chimpanzee trekking Uganda primate forest',
                },
              ].map((park) => (
                <div key={park.name} className="bg-card border border-border rounded-lg overflow-hidden">
                  {/* PARK IMAGE PLACEHOLDER */}
                  <div className="relative h-40 bg-dark">
                    <img
                      src={park.image}
                      alt={park.imageAlt}
                      width={600}
                      height={160}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-4">{park.name}</h3>
                    <ul className="space-y-1 mb-4">
                      {park.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="text-accent">✓</span> {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2 pt-4 border-t border-border">
                      <Link href={`/safari-packages/${park.slug}`} className="btn-primary text-xs py-2.5 px-4 flex-1 text-center">View Safari</Link>
                      <Link href={`/request-a-quote?package=${park.slug}`} className="btn-accent text-xs py-2.5 px-4 flex-1 text-center">Request a Quote</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 sm:py-20 bg-dark text-center overflow-hidden">
          {/* WILDLIFE CTA BACKGROUND IMAGE PLACEHOLDER — /images/AA26.webp */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/AA26.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            role="img"
            aria-label="Uganda wildlife safari landscape background"
          />
          <div className="absolute inset-0 z-10 bg-black/65" />
          <div className="relative z-20 max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-section-title text-white font-bold mb-4">Plan Your Uganda Wildlife Safari</h2>
            <p className="text-white/70 mb-8">Tell us your travel dates and interests — we'll craft the perfect wildlife safari itinerary.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/safari-packages" className="btn-primary">View Safari Packages</Link>
              <Link href="/contact" className="btn-outline-white" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
        <WhatsAppFloat />
    </>
  );
}

