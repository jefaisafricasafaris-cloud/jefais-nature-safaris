import React from 'react';
import Header from '@/components/Header';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kampala City Tours — Uganda Capital Experiences | Je Fais Nature Safaris',
  description: 'Explore Kampala with Je Fais Nature Safaris. City tours, cultural sites, markets, historical landmarks, and day trips from Uganda\'s vibrant capital city. Request a quote today.',
};

const tourHighlights = [
  {
    icon: '🕌',
    title: 'Kasubi Royal Tombs',
    desc: 'A UNESCO World Heritage Site and the burial ground of Buganda kings. One of the most significant cultural and spiritual sites in Uganda.',
  },
  {
    icon: '🏛️',
    title: 'Uganda Museum',
    desc: 'Uganda\'s oldest museum, housing ethnographic and natural history collections that tell the story of the country\'s diverse cultures and heritage.',
  },
  {
    icon: '🛒',
    title: 'Owino & Nakasero Markets',
    desc: 'Immerse yourself in the colour and energy of Kampala\'s famous markets — fresh produce, crafts, fabrics, and the pulse of everyday city life.',
  },
  {
    icon: '⛪',
    title: 'Namirembe & Rubaga Cathedrals',
    desc: 'Twin hilltop cathedrals — Anglican and Catholic — that dominate Kampala\'s skyline and reflect the city\'s deep religious history.',
  },
  {
    icon: '🕍',
    title: 'Gaddafi National Mosque',
    desc: 'The largest mosque in sub-Saharan Africa, offering panoramic views of Kampala from its minaret and a fascinating glimpse into Islamic heritage.',
  },
  {
    icon: '🎨',
    title: 'Nommo Gallery & Craft Village',
    desc: 'Uganda\'s national art gallery showcasing contemporary Ugandan art, alongside the Crafts Village for authentic handmade souvenirs and textiles.',
  },
];

const tourPackages = [
  {
    title: 'Half-Day Kampala City Tour',
    duration: 'Half Day',
    slug: 'kampala-half-day',
    highlights: ['Kasubi Tombs', 'Uganda Museum', 'Nakasero Market', 'Expert city guide'],
    image: '/images/map_image_15.webp',
    imageAlt: 'Kampala city skyline Uganda capital half-day tour',
  },
  {
    title: 'Full-Day Kampala Cultural Tour',
    duration: 'Full Day',
    slug: 'kampala-full-day',
    highlights: ['All major landmarks', 'Gaddafi Mosque', 'Craft Village', 'Local lunch experience'],
    image: '/images/map_image_21.webp',
    imageAlt: 'Kampala cultural tour Uganda full day city experience',
  },
  {
    title: 'Kampala & Entebbe Day Trip',
    duration: '1 Day',
    slug: 'kampala-entebbe-day',
    highlights: ['Kampala highlights', 'Entebbe Botanical Gardens', 'Uganda Wildlife Education Centre', 'Lake Victoria views'],
    image: '/images/map_image_27.webp',
    imageAlt: 'Kampala and Entebbe day trip Uganda Lake Victoria botanical gardens',
  },
  {
    title: 'Kampala Evening & Nightlife Tour',
    duration: 'Evening',
    slug: 'kampala-evening',
    highlights: ['Sunset city views', 'Local restaurant dinner', 'Rooftop bar experience', 'Safe guided evening'],
    image: '/images/map_image_36.webp',
    imageAlt: 'Kampala evening tour Uganda city nightlife rooftop sunset',
  },
];

const dayTrips = [
  {
    name: 'Ssese Islands Day Trip',
    distance: '~3 hrs from Kampala',
    highlights: ['Lake Victoria islands', 'Beach relaxation', 'Boat transfer', 'Tropical forest walks'],
    image: '/images/map_image_54.webp',
    imageAlt: 'Ssese Islands Lake Victoria Uganda day trip from Kampala',
    slug: 'ssese-islands',
  },
  {
    name: 'Mabamba Wetland Birding',
    distance: '~1.5 hrs from Kampala',
    highlights: ['Shoebill stork sighting', 'Wetland boat ride', 'Over 300 bird species', 'Expert birding guide'],
    image: '/images/map_image_54.webp',
    imageAlt: 'Mabamba wetland shoebill stork birding day trip from Kampala Uganda',
    slug: 'mabamba-birding',
  },
];

export default function KampalaTours() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end bg-dark overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/map_image_45.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            role="img"
            aria-label="Kampala city skyline Uganda capital aerial view"
          />
          {/* Rich multi-layer overlay */}
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.15) 100%)' }} />
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 70%)' }} />

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 pt-36">
            <nav className="flex items-center gap-2 text-xs text-white/50 mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <Link href="/uganda-safaris" className="hover:text-accent transition-colors">Uganda Safaris</Link>
              <span className="text-white/30">/</span>
              <span className="text-white/80">Kampala Tours</span>
            </nav>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-accent" />
              <span className="section-label text-accent">Pearl of Africa&apos;s Capital</span>
            </div>
            <h1 className="font-display text-hero text-white font-bold leading-tight mb-5">
              Kampala City<br />Tours
            </h1>
            <p className="text-sm sm:text-base text-white/70 max-w-lg leading-relaxed mb-8">
              Discover Kampala — a city of seven hills, vibrant markets, royal tombs, and a culture that blends ancient Buganda heritage with modern East African energy. Let us show you the real Kampala.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/request-a-quote?tour=kampala" className="btn-accent">Request a Quote</Link>
              <a href="https://wa.me/256774729464" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
          </div>
        </section>

        {/* Why Kampala */}
        <section className="py-20 sm:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <span className="accent-line" />
                <span className="section-label block mb-3">About Kampala</span>
                <h2 className="font-display text-section-title font-bold text-foreground mb-7">
                  Uganda&apos;s Vibrant Capital
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kampala is one of Africa&apos;s most dynamic capitals — a city built across seven hills, each with its own character, history, and skyline. From the royal Kasubi Tombs to the bustling Owino Market, every corner of Kampala tells a story.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As Uganda&apos;s gateway city, Kampala is often the starting or ending point of a safari. But it deserves more than just a transit stop. A guided city tour reveals layers of Buganda kingdom history, colonial architecture, religious landmarks, and a food scene that surprises every visitor.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Je Fais Nature Safaris offers half-day, full-day, and evening Kampala tours, as well as day trips to nearby destinations like the Ssese Islands and Mabamba Wetland. All tours are tailored to your interests — request a quote and we&apos;ll build the perfect Kampala experience.
                </p>
                <Link href="/request-a-quote?tour=kampala" className="btn-primary">Request a Quote</Link>
              </div>
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden h-60 bg-dark shadow-xl">
                  <img
                    src="/images/map_image_63.webp"
                    alt="Kampala city overview Uganda seven hills capital aerial panorama"
                    width={600}
                    height={240}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)' }} />
                </div>
                {[
                  { icon: '🏙️', title: 'City of Seven Hills', desc: 'Each hill in Kampala has its own identity — from the royal Mengo Hill to the commercial Nakasero and the religious Namirembe.' },
                  { icon: '🌍', title: 'Buganda Kingdom Heritage', desc: 'Kampala sits at the heart of the ancient Buganda Kingdom. Royal palaces, tombs, and cultural sites are woven into the city fabric.' },
                  { icon: '🍽️', title: 'Food & Culture', desc: "From rolex (chapati + egg) street food to rooftop restaurants, Kampala's food scene is a journey in itself." },
                ].map((item) => (
                  <div key={item.title}
                    className="rounded-xl p-5 flex gap-4 transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f8f5ef 100%)', border: '1px solid rgba(200,150,90,0.15)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
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

        {/* Tour Highlights */}
        <section className="py-20 sm:py-28 bg-texture">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="accent-line" />
            <span className="section-label block mb-3">What to See</span>
            <h2 className="font-display text-section-title font-bold text-foreground mb-12">Kampala&apos;s Top Attractions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tourHighlights.map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(145deg, #ffffff 0%, #faf8f4 100%)',
                    border: '1px solid rgba(200,150,90,0.15)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    transitionDelay: `${i * 50}ms`,
                  }}
                >
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tour Packages — Quote Based */}
        <section className="py-20 sm:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="accent-line" />
            <span className="section-label block mb-3">Kampala Tour Options</span>
            <h2 className="font-display text-section-title font-bold text-foreground mb-3">Choose Your Kampala Tour</h2>
            <p className="text-muted-foreground mb-12 max-w-xl">
              All tours are custom-quoted based on your group size, dates, and interests. Contact us to get a personalised quote.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tourPackages.map((pkg, i) => (
                <div
                  key={pkg.title}
                  className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(145deg, #ffffff 0%, #faf8f4 100%)',
                    border: '1px solid rgba(200,150,90,0.15)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <div className="relative h-48 bg-dark overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.imageAlt}
                      width={600}
                      height={192}
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-xs font-semibold px-2.5 py-1.5 rounded-md text-white"
                        style={{ background: 'rgba(10,21,8,0.75)', backdropFilter: 'blur(8px)' }}>
                        {pkg.duration}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 z-10">
                      <span className="package-badge">Quote on Request</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{pkg.title}</h3>
                    <ul className="space-y-2 mb-5">
                      {pkg.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary text-xs">✓</span>
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <Link
                        href={`/request-a-quote?tour=${pkg.slug}`}
                        className="btn-accent text-xs py-2.5 px-4 w-full text-center block"
                      >
                        Request a Quote for This Tour
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Day Trips from Kampala */}
        <section className="py-20 sm:py-28 bg-texture">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="accent-line" />
            <span className="section-label block mb-3">Beyond the City</span>
            <h2 className="font-display text-section-title font-bold text-foreground mb-3">Day Trips from Kampala</h2>
            <p className="text-muted-foreground mb-12 max-w-xl">
              Kampala is perfectly positioned for day trips to some of Uganda&apos;s most rewarding destinations. All day trips are quoted on request.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {dayTrips.map((trip, i) => (
                <div
                  key={trip.name}
                  className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(145deg, #ffffff 0%, #faf8f4 100%)',
                    border: '1px solid rgba(200,150,90,0.15)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div className="relative h-48 bg-dark overflow-hidden">
                    <img
                      src={trip.image}
                      alt={trip.imageAlt}
                      width={600}
                      height={192}
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-xs font-semibold px-2.5 py-1.5 rounded-md text-white"
                        style={{ background: 'rgba(10,21,8,0.75)', backdropFilter: 'blur(8px)' }}>
                        {trip.distance}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{trip.name}</h3>
                    <ul className="space-y-2 mb-5">
                      {trip.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary text-xs">✓</span>
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <Link
                        href={`/request-a-quote?tour=${trip.slug}`}
                        className="btn-accent text-xs py-2.5 px-4 w-full text-center block"
                      >
                        Request a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What&apos;s Included */}
        <section className="py-20 sm:py-28 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <span className="accent-line" />
            <span className="section-label block mb-3">Tour Inclusions</span>
            <h2 className="font-display text-section-title font-bold text-foreground mb-10">What&apos;s Typically Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {[
                'Private transport in a 4WD vehicle',
                'Professional English-speaking guide',
                'All entrance fees to listed sites',
                'Bottled water throughout the tour',
                'Flexible itinerary based on your interests',
                'Hotel pick-up and drop-off in Kampala',
                'Local lunch (full-day tours)',
                'WhatsApp support before and during tour',
              ].map((item) => (
                <div key={item}
                  className="flex items-center gap-3 rounded-xl p-4"
                  style={{ background: 'linear-gradient(145deg, rgba(45,80,22,0.06) 0%, rgba(45,80,22,0.03) 100%)', border: '1px solid rgba(45,80,22,0.12)' }}>
                  <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xs font-bold">✓</span>
                  </span>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                background: 'linear-gradient(145deg, rgba(200,150,90,0.08) 0%, rgba(200,150,90,0.04) 100%)',
                border: '1px solid rgba(200,150,90,0.2)',
              }}
            >
              <div className="text-3xl mb-3">🗺️</div>
              <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                Every tour is custom-quoted. Tell us your group size, preferred dates, and which sites interest you most — we&apos;ll send a tailored quote within 24 hours.
              </p>
              <Link href="/request-a-quote?tour=kampala" className="btn-primary">
                Get Your Personalised Quote
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative py-24 sm:py-32 text-center overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #0A1508 0%, #0D1F0A 100%)' }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{
             backgroundImage: "url('/images/kampala.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            role="img"
            aria-label="Kampala city Uganda aerial view background"
          />
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(160deg, rgba(10,21,8,0.88) 0%, rgba(10,21,8,0.75) 100%)' }} />
          {/* Decorative glow */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-10"
              style={{ background: 'radial-gradient(ellipse, #C8965A, transparent)' }} />
          </div>
          <div className="relative z-20 max-w-2xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-10 h-px bg-accent/50" />
              <span className="section-label text-accent">Explore Kampala</span>
              <span className="w-10 h-px bg-accent/50" />
            </div>
            <h2 className="font-display text-section-title text-white font-bold mb-5">
              Explore Kampala<br />
              <em className="not-italic text-gradient-gold">with a Local Guide</em>
            </h2>
            <p className="text-white/65 mb-10 leading-relaxed">
              Our Kampala tours are fully customised — half-day, full-day, or multi-day. Contact Je Fais Nature Safaris to request a quote and start planning your city experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/request-a-quote?tour=kampala" className="btn-accent">Request a Quote</Link>
              <a href="https://wa.me/256774729464" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
          </div>
        </section>
      </main>
          <WhatsAppFloat />
    </>
  );
}

