import React from 'react';

export default function ContactHero() {
  return (
    <section className="relative min-h-[45vh] flex items-end bg-dark overflow-hidden" aria-label="Contact page hero">
      {/* CONTACT HERO IMAGE PLACEHOLDER — Replace /images/map_image_15.webp with your Uganda safari contact photograph */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/map_image_15.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        role="img"
        aria-label="Uganda safari adventure contact Je Fais Nature Safaris"
      />

      {/* Dark overlay — separate from image for easy photo replacement */}
      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.20) 100%)' }} />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-36">
        <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span className="text-white/90">Contact</span>
        </nav>
        <span className="section-label text-accent block mb-3">Get in Touch</span>
        <h1 className="font-display text-hero text-white font-bold leading-tight">
          Plan Your<br />Uganda Safari
        </h1>
        <p className="mt-4 text-sm sm:text-base text-white/75 max-w-lg leading-relaxed">
          Tell us about your dream safari. We&apos;ll respond within 24 hours with a tailored itinerary and confirmed pricing.
        </p>
      </div>
    </section>);

}
