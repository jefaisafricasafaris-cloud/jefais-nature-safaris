import React from 'react';

export default function PackagesHero() {
  return (
    <section className="relative min-h-[55vh] flex items-end bg-dark overflow-hidden" aria-label="Safari Packages hero">
      {/* PACKAGES HERO IMAGE PLACEHOLDER — Replace /images/map_image_1.webp with your Uganda safari packages hero photograph */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/map_image_1.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        role="img"
        aria-label="Uganda safari packages landscape"
      />

      {/* Dark overlay — separate from image for easy photo replacement */}
      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.20) 100%)' }} />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-36">
        <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span className="text-white/90">Safari Packages</span>
        </nav>
        <span className="section-label text-accent block mb-3">Handcrafted for Uganda</span>
        <h1 className="font-display text-hero text-white font-bold leading-tight">
          Uganda Safari<br />Packages
        </h1>
        <p className="mt-4 text-sm sm:text-base text-white/75 max-w-xl leading-relaxed">
          Five carefully crafted Uganda safari packages — from 3-day Murchison Falls escapes to 7-day multi-park adventures. Every safari is custom quoted to your travel dates, group size and preferences.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded px-4 py-2.5 text-sm text-white/90 backdrop-blur-sm">
          <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          No public prices — every safari is personally quoted for you
        </div>
      </div>
    </section>
  );
}
