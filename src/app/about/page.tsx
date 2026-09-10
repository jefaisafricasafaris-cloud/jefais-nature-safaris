import React from 'react';
import Header from '@/components/Header';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Je Fais Nature Safaris — Uganda Safari Operator | Kampala',
  description: 'Learn about Je Fais Nature Safaris, a Uganda-based safari operator based in Kampala. Real guides, real wildlife, authentic Uganda safari experiences.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[45vh] flex items-end bg-dark overflow-hidden">
          {/* ABOUT HERO IMAGE PLACEHOLDER — Replace /images/map_image_9.webp with your company/team photograph */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/map_image_9.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            role="img"
            aria-label="Je Fais Nature Safaris team Uganda safari operator Kampala"
          />
          {/* Dark overlay — separate from image */}
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.15) 100%)' }} />
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-36">
            <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/90">About Us</span>
            </nav>
            <span className="section-label text-accent block mb-3">Our Story</span>
            <h1 className="font-display text-hero text-white font-bold leading-tight">
              About Je Fais<br />Nature Safaris
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/75 max-w-lg leading-relaxed">
              A Uganda-based safari operator dedicated to authentic, personalized wildlife experiences across the Pearl of Africa.
            </p>
          </div>
        </section>

        {/* About content */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="section-label block mb-3">Who We Are</span>
                <h2 className="font-display text-section-title font-bold text-foreground mb-6">
                  JE FAIS NATURE SAFARIS LTD
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Je Fais Nature Safaris Ltd is a Uganda-based safari operator headquartered in Kampala, Uganda. We specialize in authentic wildlife safaris, gorilla trekking, chimpanzee experiences, and cultural tours across Uganda's national parks and destinations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our team is based in Uganda and brings genuine local knowledge to every safari. We know Uganda's parks, roads, seasons, and wildlife intimately — and we care deeply about sustainable, responsible tourism that benefits local communities.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We operate as a direct safari operator — no intermediaries, no call centres. When you contact Je Fais Nature Safaris, you speak directly with our team in Kampala.
                </p>
                <div className="bg-muted rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-3">Contact Information</h3>
                  <address className="not-italic text-sm text-white/45 leading-relaxed">
  Kampala and Entebbe Airport opposite Total, Plot 5 De Winton Street, Kampala<br />

  <a
    href="https://maps.app.goo.gl/KSmcBcXR7RbfbNoz6"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 inline-flex items-center gap-1.5 text-accent hover:text-white transition-colors font-medium"
  >
    📍 Find Us on Google Maps
  </a>

  <br />

  <a
    href="tel:0774729464"
    className="hover:text-accent transition-colors font-medium text-white/70 mt-2 inline-flex items-center gap-1.5"
  >
    <svg
      className="w-3.5 h-3.5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.01l-2.2 2.21z" />
    </svg>
    0774 729464
  </a>
</address>
                </div>
              </div>
              <div className="space-y-4">
                {/* ABOUT TEAM IMAGE PLACEHOLDER — /images/map_image_119.webp */}
                <div className="relative rounded-lg overflow-hidden h-56 bg-dark">
                  <img
                    src="/images/map_image_119.webp"
                    alt="Je Fais Nature Safaris team guides Uganda safari operator"
                    width={600}
                    height={224}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Why Choose Je Fais Nature Safaris</h3>
                {[
                  { icon: '📍', title: 'Uganda-Based & Local', desc: 'We operate from Kampala and know Uganda intimately. Our team lives here, guides here, and cares about sustainable tourism.' },
                  { icon: '🎯', title: 'Personalized Itineraries', desc: 'No cookie-cutter tours. Every itinerary is crafted around your interests, travel dates, group size, and budget.' },
                  { icon: '👥', title: 'Knowledgeable Guides', desc: 'Our guides bring deep knowledge of Uganda\'s wildlife, culture, and landscapes — turning every safari into a genuine learning experience.' },
                  { icon: '📞', title: 'Direct Support, 24 Hours', desc: 'Reach us by phone or WhatsApp any time. We\'re a direct operator — no intermediaries, no call centres.' },
                  { icon: '⭐', title: '5.0 Rating on Google', desc: 'Over 50 verified Google reviews from real travelers who have experienced Uganda with Je Fais Nature Safaris.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 bg-muted rounded-lg p-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Safari vehicles section */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="section-label block mb-3">Our Fleet</span>
            <h2 className="font-display text-section-title font-bold text-foreground mb-8">Safari Vehicles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  // SAFARI VEHICLE IMAGE PLACEHOLDER — /images/map_image_42.webp
                  image: '/images/map_image_42.webp',
                  imageAlt: 'Je Fais Nature Safaris 4WD safari vehicle Uganda wildlife tour',
                  caption: '4WD Safari Vehicle',
                },
                {
                  // SAFARI VEHICLE 2 IMAGE PLACEHOLDER — /images/map_image_43.webp
                  image: '/images/map_image_43.webp',
                  imageAlt: 'Je Fais Nature Safaris safari vehicle interior Uganda tour',
                  caption: 'Comfortable Interior',
                },
                {
                  // SAFARI VEHICLE 3 IMAGE PLACEHOLDER — /images/map_image_60.webp
                  image: '/images/map_image_60.webp',
                  imageAlt: 'Je Fais Nature Safaris safari vehicle ready for Uganda national park',
                  caption: 'Ready for the Parks',
                },
              ].map((v, i) => (
                <div key={i} className="rounded-lg overflow-hidden bg-dark">
                  <div className="relative h-48">
                    <img
                      src={v.image}
                      alt={v.imageAlt}
                      width={600}
                      height={192}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <div className="p-4 bg-card border border-border border-t-0 rounded-b-lg">
                    <p className="text-sm font-semibold text-foreground">{v.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="section-label block mb-3">Real Experiences</span>
            <h2 className="font-display text-section-title font-bold text-foreground mb-10">What Our Guests Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Asiimire Sonia', meta: '5 reviews · Google', rating: 5, review: 'An unforgettable experience from start to finish. From the moment we landed at Entebbe Airport, the Je Fais team made everything seamless. The gorilla trek in Bwindi was the highlight of my life.', context: 'Gorilla Trekking · Bwindi' },
                { name: 'Truth256', meta: 'Local Guide · 9 reviews · Google', rating: 5, review: 'What a journey! Queen Elizabeth National Park delivered something I had never seen before — tree-climbing lions. Then we continued to Bwindi for mountain gorillas. Uganda genuinely surprised me at every turn.', context: 'Queen Elizabeth NP · Bwindi' },
                { name: 'Tumukwase Lawrence', meta: '1 review · Google', rating: 5, review: 'Great selection of places for relaxation and leisure. The Lake Victoria shores are beautiful — peaceful, with a great vibe. A wonderful new experience close to Kampala.', context: 'Lake Victoria · Kampala Region' },
              ].map((t) => (
                <div key={t.name} className="bg-card border border-border rounded-lg p-6 flex flex-col gap-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-sm text-foreground leading-relaxed flex-1 italic">&ldquo;{t.review}&rdquo;</blockquote>
                  <div className="border-t border-border pt-4">
                    <span className="block font-semibold text-sm text-foreground">{t.name}</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">{t.meta}</span>
                    <span className="block text-xs text-accent font-medium mt-1 uppercase tracking-wider">{t.context}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 sm:py-20 bg-dark text-center overflow-hidden">
          {/* ABOUT CTA BACKGROUND IMAGE PLACEHOLDER — /images/map_image_101.webp */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/map_image_101.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            role="img"
            aria-label="Uganda safari adventure Je Fais Nature Safaris"
          />
          <div className="absolute inset-0 z-10 bg-black/65" />
          <div className="relative z-20 max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-section-title text-white font-bold mb-4">Start Planning Your Safari</h2>
            <p className="text-white/70 mb-8">Contact the Je Fais Nature Safaris team in Kampala to plan your Uganda adventure.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <a href="https://wa.me/256774729464" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
          </div>
        </section>
      </main>
          <WhatsAppFloat />
    </>
  );
}

