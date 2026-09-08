import React from 'react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section
      className="relative py-32 sm:py-44 overflow-hidden"
      aria-label="Book your Uganda safari"
      style={{ background: 'linear-gradient(160deg, #0A1508 0%, #0D1F0A 100%)' }}
    >
      {/* CTA BACKGROUND IMAGE PLACEHOLDER */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/map_image_10.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        role="img"
        aria-label="Uganda safari landscape background"
      />

      {/* Rich multi-layer overlay */}
      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(160deg, rgba(10,21,8,0.88) 0%, rgba(10,21,8,0.72) 50%, rgba(10,21,8,0.85) 100%)' }} />

      {/* Decorative radial glows */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, #C8965A, transparent)' }} />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #2D5016, transparent)' }} />
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #2D5016, transparent)' }} />
      </div>

      <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-8 text-center">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-7">
          <span className="w-12 h-px bg-accent/50" />
          <span className="section-label text-accent">Start Planning Today</span>
          <span className="w-12 h-px bg-accent/50" />
        </div>

        <h2 className="font-display text-section-title text-white font-bold mb-7">
          Ready to Explore<br />
          <em className="not-italic text-gradient-gold">Uganda?</em>
        </h2>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-12 max-w-xl mx-auto">
          Plan your Uganda safari with Je Fais Nature Safaris. Tell us your travel dates, interests, and group size — we&apos;ll craft the perfect itinerary.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Link href="/request-a-quote" className="btn-accent">
            Request a Quote
          </Link>
          <Link href="/safari-packages" className="btn-outline-white">
            View Safaris
          </Link>
          <a
            href="https://wa.me/256774729464"
            className="btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <a href="tel:0774729464" className="btn-outline-white">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.01l-2.2 2.21z" />
            </svg>
            Call 0774 729464
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10">
          {[
            { icon: '⭐', text: '5.0 Google Rating' },
            { icon: '🦍', text: 'Gorilla Trekking Experts' },
            { icon: '🇺🇬', text: 'Uganda-Based Team' },
          ]?.map((item) => (
            <div key={item?.text} className="flex items-center gap-2 text-xs text-white/50">
              <span>{item?.icon}</span>
              <span>{item?.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

