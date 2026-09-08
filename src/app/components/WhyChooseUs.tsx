'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const trustPoints = [
{
  icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  title: 'Uganda-Based & Local',
  description: 'We operate from Kampala and know Uganda intimately. Our team lives here, guides here, and cares about sustainable tourism.'
},
{
  icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  title: 'Knowledgeable Guides',
  description: "Our guides bring deep knowledge of Uganda's wildlife, culture, and landscapes — turning every safari into a genuine learning experience."
},
{
  icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  title: 'Personalized Itineraries',
  description: 'No cookie-cutter tours. Every itinerary is crafted around your interests, travel dates, group size, and budget.'
},
{
  icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  title: 'Direct Support, 24 Hours',
  description: "Reach us by phone or WhatsApp any time. We're a direct operator — no intermediaries, no call centres."
}];

const stats = [
{ value: '50+', label: 'Google Reviews' },
{ value: '5.0', label: 'Average Rating' },
{ value: '6+', label: 'National Parks' },
{ value: '24h', label: 'Response Time' }];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;
    const items = section?.querySelectorAll('.why-reveal');
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
    items?.forEach((el) => obs?.observe(el));
    return () => obs?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 sm:py-36 bg-parchment overflow-hidden" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div>
            <div className="why-reveal reveal-hidden mb-14">
              <span className="accent-line" />
              <span className="section-label block mb-4">Why Je Fais Nature Safaris</span>
              <h2 id="why-heading" className="font-display text-section-title font-bold text-foreground">
                A Safari Company<br />
                <em className="not-italic" style={{ color: 'var(--primary)' }}>You Can Trust</em>
              </h2>
            </div>

            <div className="space-y-6 mb-14">
              {trustPoints?.map((point, i) => (
                <div
                  key={point?.title}
                  className="why-reveal reveal-hidden flex gap-5 group"
                  style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-primary transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, rgba(45,80,22,0.12) 0%, rgba(45,80,22,0.06) 100%)', border: '1px solid rgba(45,80,22,0.15)' }}>
                    {point?.icon}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-foreground text-sm mb-2">{point?.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="why-reveal reveal-hidden grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-border">
              {stats?.map((stat) => (
                <div key={stat?.label} className="text-center p-4 rounded-xl bg-white/60 border border-border/50">
                  <span className="trust-stat-number block">{stat?.value}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1.5 block leading-tight">
                    {stat?.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info cards */}
          <div className="why-reveal reveal-hidden flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <div
                className="rounded-2xl p-7 flex flex-col items-center justify-center text-center min-h-[180px] transition-transform duration-300 hover:-translate-y-1"
                style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f5f0e8 100%)', border: '1px solid rgba(200,150,90,0.2)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                <span className="text-5xl mb-4 animate-float">🦍</span>
                <p className="text-sm font-semibold text-foreground">Gorilla Trekking Specialists</p>
                <p className="text-xs text-muted-foreground mt-1.5">Bwindi & Mgahinga</p>
              </div>
              <div
                className="rounded-2xl p-7 flex flex-col items-center justify-center text-center min-h-[180px] mt-10 transition-transform duration-300 hover:-translate-y-1"
                style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f5f0e8 100%)', border: '1px solid rgba(200,150,90,0.2)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                <span className="text-5xl mb-4">🚙</span>
                <p className="text-sm font-semibold text-foreground">4WD Safari Vehicles</p>
                <p className="text-xs text-muted-foreground mt-1.5">Well-maintained fleet</p>
              </div>
            </div>

            {/* Testimonial highlight card */}
            <div
              className="rounded-2xl p-7"
              style={{
                background: 'linear-gradient(145deg, rgba(45,80,22,0.08) 0%, rgba(45,80,22,0.04) 100%)',
                border: '1px solid rgba(45,80,22,0.18)',
              }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3]?.map((n) => (
                    <div key={n} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: `linear-gradient(135deg, #2D5016 ${n * 20}%, #4A7A25)` }}>
                      {n}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">50+ happy travelers</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[1,2,3,4,5]?.map(s => (
                      <svg key={s} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">5.0 on Google</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <span className="quote-mark absolute -top-2 -left-1">&ldquo;</span>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6 italic">
                  From Entebbe Airport to Bwindi — every detail was handled with care. An unforgettable experience.
                </p>
                <p className="text-xs text-primary font-semibold mt-2 pl-6">— Asiimire Sonia</p>
              </div>
            </div>

            <div className="why-reveal reveal-hidden flex gap-3">
              <Link href="/contact" className="btn-primary flex-1 justify-center">
                Plan My Safari
              </Link>
              <a
                href="https://wa.me/256774729464"
                className="btn-whatsapp flex-1 justify-center"
                target="_blank"
                rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

