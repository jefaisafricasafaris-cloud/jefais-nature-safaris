'use client';
import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Asiimire Sonia',
    meta: '5 reviews · 4 photos · Google',
    rating: 5,
    review:
      'An unforgettable experience from start to finish. From the moment we landed at Entebbe Airport, the Je Fais team made everything seamless. The gorilla trek in Bwindi was the highlight of my life — our guide was incredibly knowledgeable and the whole experience felt personal and authentic. I cannot recommend Je Fais Nature Safaris highly enough.',
    context: 'Gorilla Trekking · Bwindi',
    initial: 'A',
  },
  {
    name: 'Truth256',
    meta: 'Local Guide · 9 reviews · 34 photos · Google',
    rating: 5,
    review:
      'What a journey! Queen Elizabeth National Park delivered something I had never seen before — tree-climbing lions, right there in front of us. Then we continued to Bwindi for mountain gorillas and nature walks within the forest. Uganda genuinely surprised me at every turn. The team at Je Fais made the whole trip memorable.',
    context: 'Queen Elizabeth NP · Bwindi · Mountain Gorillas',
    initial: 'T',
  },
  {
    name: 'Tumukwase Lawrence',
    meta: '1 review · 6 photos · Google',
    rating: 5,
    review:
      'Great selection of places for relaxation and leisure. The Lake Victoria shores are beautiful — peaceful, with a great vibe. A wonderful new experience close to Kampala. Perfect for a short getaway.',
    context: 'Lake Victoria · Kampala Region',
    initial: 'T',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="star-rating" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll('.test-card');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
            entry.target.classList.add('reveal-active');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 sm:py-36 relative overflow-hidden"
      aria-labelledby="reviews-heading"
      style={{ background: 'linear-gradient(160deg, #0A1508 0%, #0D1F0A 50%, #0A1508 100%)' }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #C8965A, transparent)' }} />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #2D5016, transparent)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-3" style={{ background: 'radial-gradient(circle, rgba(200,150,90,0.08), transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="mb-16 text-center">
          <span className="accent-line mx-auto" style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', width: '4rem' }} />
          <span className="section-label block mb-4">Real Experiences</span>
          <h2 id="reviews-heading" className="font-display text-section-title font-bold text-white">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <StarRating count={5} />
            <span className="font-semibold text-white">5.0</span>
            <span className="text-sm text-white/50">· Rated on Google · 50+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="test-card reveal-hidden flex flex-col gap-5 rounded-2xl p-8 relative overflow-hidden"
              style={{
                transitionDelay: `${i * 100}ms`,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Large quote mark */}
              <div className="absolute top-4 right-6 font-display text-7xl font-bold text-accent/15 leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              <StarRating count={t.rating} />
              <blockquote className="text-sm text-white/75 leading-relaxed flex-1 italic relative z-10">
                &ldquo;{t.review}&rdquo;
              </blockquote>
              <div className="border-t border-white/10 pt-5 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2D5016, #4A7A25)' }}
                >
                  {t.initial}
                </div>
                <div>
                  <span className="block font-semibold text-sm text-white">{t.name}</span>
                  <span className="block text-xs text-white/45 mt-0.5">{t.meta}</span>
                  <span className="block text-xs text-accent font-semibold mt-1 uppercase tracking-wider">
                    {t.context}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/JE+FAIS+NATURE+SAFARIS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors font-medium group"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Read all reviews on Google
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
