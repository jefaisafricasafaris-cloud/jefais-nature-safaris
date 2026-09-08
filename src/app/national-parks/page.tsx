import React from 'react';
import Header from '@/components/Header';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uganda National Parks — Complete Guide | Je Fais Nature Safaris',
  description: 'Explore Uganda\'s national parks with Je Fais Nature Safaris. Bwindi, Queen Elizabeth, Murchison Falls, Kibale, Lake Mburo, Kidepo Valley and more.',
};

const parks = [
  {
    name: 'Bwindi Impenetrable National Park',
    region: 'Southwestern Uganda',
    highlight: 'Mountain gorilla trekking',
    description: 'UNESCO World Heritage Site and home to over 400 mountain gorillas. Bwindi is the premier destination for gorilla trekking in Uganda, with multiple habituated gorilla families available for trekking.',
    activities: ['Gorilla trekking', 'Forest walks', 'Birding', 'Community visits'],
    // BWINDI IMAGE PLACEHOLDER — /images/65162.webp
    image: '/images/65162.webp',
    imageAlt: 'Bwindi Impenetrable National Park Uganda mountain gorilla trekking forest',
  },
  {
    name: 'Queen Elizabeth National Park',
    region: 'Western Uganda',
    highlight: 'Tree-climbing lions & boat safaris',
    description: 'Uganda\'s most visited national park, famous for its tree-climbing lions, the Kazinga Channel boat safari, and diverse ecosystems ranging from savannah to forest.',
    activities: ['Game drives', 'Boat safari', 'Chimp trekking (Kyambura)', 'Birding'],
    // QUEEN ELIZABETH IMAGE PLACEHOLDER — /images/map_image_33.webp
    image: '/images/map_image_33.webp',
    imageAlt: 'Tree-climbing lion in Queen Elizabeth National Park Uganda wildlife safari',
  },
  {
    name: 'Murchison Falls National Park',
    region: 'Northwestern Uganda',
    highlight: 'Nile boat cruise & Murchison Falls',
    description: 'Uganda\'s largest national park, where the Nile forces itself through a narrow gorge to create the spectacular Murchison Falls. Excellent for game drives and boat safaris.',
    activities: ['Boat cruise to the falls', 'Game drives', 'Nile delta birding', 'Rhino tracking (Ziwa)'],
    // MURCHISON FALLS IMAGE PLACEHOLDER — /images/map_image_19.webp
    image: '/images/map_image_19.webp',
    imageAlt: 'Murchison Falls National Park Nile River boat cruise Uganda safari',
  },
  {
  name: 'Kibale National Park',
  region: 'Western Uganda',
  highlight: 'Chimpanzee trekking',
  description: 'The primate capital of the world, with the highest density of primates...',
  activities: ['Chimpanzee trekking', 'Primate walks', 'Bigodi Wetland Sanctuary'],
  // KIBALE CHIMPANZEE IMAGE
  image: '/images/chimpanzee-kibale-q80.webp',
  imageAlt: 'Kibale National Park chimpanzee trekking Uganda primate forest',
},
  {
    name: 'Lake Mburo National Park',
    region: 'Western Uganda',
    highlight: 'Zebra, impala & walking safaris',
    description: 'The closest national park to Kampala, Lake Mburo offers a more intimate safari experience with zebra, impala, topi, and the only place in Uganda to see eland.',
    activities: ['Game drives', 'Walking safaris', 'Boat safari', 'Night game drives', 'Horse riding'],
    // LAKE MBURO IMAGE PLACEHOLDER — /images/map_image_28.webp
    image: '/images/map_image_28.webp',
    imageAlt: 'Lake Mburo National Park Uganda zebra impala walking safari',
  },
  {
    name: 'Kidepo Valley National Park',
    region: 'Northeastern Uganda',
    highlight: 'Remote wilderness & diverse wildlife',
    description: 'One of Africa\'s most remote and spectacular national parks, Kidepo Valley offers an off-the-beaten-path safari experience with lions, cheetahs, and vast open landscapes.',
    activities: ['Game drives', 'Cultural visits (Karamojong)', 'Birding', 'Walking safaris'],
    // KIDEPO IMAGE PLACEHOLDER — /images/map_image_64.webp
    image: '/images/map_image_64.webp',
    imageAlt: 'Kidepo Valley National Park Uganda remote wilderness safari landscape',
  },
];

export default function NationalParksPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-end bg-dark overflow-hidden">
          {/* NATIONAL PARKS HERO IMAGE PLACEHOLDER — Replace /images/map_image_10.webp with your Uganda national parks photograph */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/map_image_10.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            role="img"
            aria-label="Uganda national parks wildlife safari landscape"
          />
          {/* Dark overlay — separate from image */}
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.15) 100%)' }} />
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-36">
            <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/uganda-safaris" className="hover:text-white transition-colors">Uganda Safaris</Link>
              <span>/</span>
              <span className="text-white/90">National Parks</span>
            </nav>
            <span className="section-label text-accent block mb-3">Uganda's Protected Areas</span>
            <h1 className="font-display text-hero text-white font-bold leading-tight">
              Uganda's<br />National Parks
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/75 max-w-lg leading-relaxed">
              Uganda has 10 national parks protecting an extraordinary range of habitats — from mountain forest to open savannah, wetlands to volcanic landscapes. Each park offers a unique wildlife experience.
            </p>
          </div>
        </section>

        {/* Parks grid */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="section-label block mb-3">Explore Uganda</span>
            <h2 className="font-display text-section-title font-bold text-foreground mb-10">Uganda's Major National Parks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {parks.map((park) => (
                <div key={park.name} className="bg-card border border-border rounded-lg overflow-hidden flex flex-col">
                  {/* PARK IMAGE PLACEHOLDER */}
                  <div className="relative h-44 bg-dark">
                    <img
                      src={park.image}
                      alt={park.imageAlt}
                      width={600}
                      height={176}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/15" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs text-accent font-medium uppercase tracking-wider mb-1">{park.region}</span>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">{park.name}</h3>
                    <p className="text-xs font-semibold text-muted-foreground mb-3">{park.highlight}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{park.description}</p>
                    <div className="mt-auto">
                      <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Activities:</p>
                      <div className="flex flex-wrap gap-1">
                        {park.activities.map((a) => (
                          <span key={a} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-sm">{a}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display text-section-title font-bold text-foreground mb-4">Plan Your National Park Safari</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Je Fais Nature Safaris offers tailored itineraries to all Uganda's national parks. Contact us to plan your perfect safari.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/safari-packages" className="btn-primary">View Safari Packages</Link>
              <Link href="/contact" className="btn-accent">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppFloat />
    </>
  );
}

