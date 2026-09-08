import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HERO_IMAGE = '/images/65161.webp';

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-end justify-start overflow-hidden bg-dark"
      aria-label="Uganda Safaris Hero">

      {/* HERO IMAGE — LCP element: priority prop triggers browser preload */}
      <Image
        src={HERO_IMAGE}
        alt="Uganda safari adventure landscape with lush green forests and wildlife"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center z-0"
        aria-hidden="true"
      />

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 z-10" style={{
        background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0.1) 100%)'
      }} />
      {/* Side vignette */}
      <div className="absolute inset-0 z-10" style={{
        background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.15) 100%)'
      }} />
      {/* Warm color tint at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 z-10" style={{
        background: 'linear-gradient(to top, rgba(10,21,8,0.6) 0%, transparent 100%)'
      }} />

      {/* Decorative ghost text */}
      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden pointer-events-none select-none">
        <span className="text-ghost font-display text-white block text-right pr-4 pb-0">
          UGANDA
        </span>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28 pt-36 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        
        {/* Left: Main content */}
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-6 h-px bg-accent" />
            <span className="section-label text-accent border border-accent/30 px-3 py-1 rounded-sm backdrop-blur-sm bg-black/20">
              Pearl of Africa · Est. Kampala, Uganda
            </span>
          </div>

          <h1 className="font-display text-hero text-white font-bold mb-7">
            Uganda Safaris,<br />
            <em className="not-italic text-gradient-gold">Gorilla Trekking</em><br />
            &amp; Wildlife Adventures
          </h1>
          <p className="text-sm sm:text-base text-white/75 max-w-md leading-relaxed mb-10 font-normal">
            Explore Uganda with Je Fais Nature Safaris — unforgettable wildlife safaris, gorilla trekking, chimpanzee experiences and cultural adventures across the Pearl of Africa.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Plan My Safari
            </Link>
            <Link href="/safari-packages" className="btn-outline-white">
              View Safaris
            </Link>
            <a
              href="https://wa.me/256774729464"
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Je Fais Nature Safaris">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right: Quick stats — glass cards */}
        <div className="flex gap-4 md:flex-col md:items-end">
          {[
            { value: '50+', label: 'Verified Reviews', icon: '⭐' },
            { value: '5.0', label: 'Google Rating', icon: '🏆' },
            { value: '24hrs', label: 'Response Time', icon: '⚡' },
          ]?.map((stat) => (
            <div
              key={stat?.label}
              className="glass-card-dark px-4 py-3 md:px-5 md:py-4 text-center md:text-right min-w-[80px]"
            >
              <span className="block text-base mb-1">{stat?.icon}</span>
              <span className="block font-display text-2xl sm:text-3xl font-bold text-accent leading-none">
                {stat?.value}
              </span>
              <span className="block text-xs text-white/55 uppercase tracking-wider mt-1">
                {stat?.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-30 flex flex-col items-center gap-2 animate-bounce-soft">
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border border-white/25 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full" style={{ animation: 'float 1.5s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}
