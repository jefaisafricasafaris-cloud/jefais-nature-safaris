'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const experiences = [
  {
    id: 'gorilla',
    title: 'Gorilla Trekking',
    subtitle: 'Bwindi Impenetrable Forest',
    description: "Come face-to-face with mountain gorillas in their natural habitat. One of Africa's most profound wildlife encounters.",
    href: '/gorilla-trekking',
    badge: 'Most Popular',
    colSpan: 'md:col-span-2',
    imagePath: '/images/65161.webp',
    imageAlt: 'Mountain gorilla in Bwindi Impenetrable Forest during Uganda gorilla trekking',
    fallbackBg: 'from-green-900 to-green-700',
  },
  {
    id: 'wildlife',
    title: 'Wildlife Safaris',
    subtitle: 'Queen Elizabeth & Murchison Falls',
    description: "Big Five encounters, tree-climbing lions, and vast savannah landscapes across Uganda's top national parks.",
    href: '/wildlife-safaris',
    badge: null,
    colSpan: 'md:col-span-1',
    imagePath: '/images/AA26.webp',
    imageAlt: 'Tree-climbing lion in Queen Elizabeth National Park Uganda wildlife safari',
    fallbackBg: 'from-amber-900 to-amber-700',
  },
  {
    id: 'chimp',
    title: 'Chimpanzee Trekking',
    subtitle: 'Kibale National Park',
    description: 'Track our closest relatives through ancient rainforest. Kibale hosts the highest density of primates in Africa.',
href: '/chimpanzee-trekking',
    badge: null,
    colSpan: 'md:col-span-1',
   imagePath: '/images/chimpanzee-kibale-q80.webp',
    imageAlt: 'Chimpanzee trekking in Kibale National Park Uganda forest',
    fallbackBg: 'from-emerald-900 to-emerald-700',
  },
  {
    id: 'kampala',
    title: 'Kampala & Cultural Tours',
    subtitle: 'Kampala · Jinja · Lake Victoria',
    description: "Discover Uganda's vibrant capital, the source of the Nile in Jinja, and authentic cultural immersions.",
    href: '/kampala-tours',
    badge: null,
    colSpan: 'md:col-span-2',
imagePath: '/images/kampala.webp',
    imageAlt: 'Kampala city cultural tour Uganda vibrant street scene',
    fallbackBg: 'from-stone-800 to-stone-600',
  },
];


export default function CoreExperiences() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;
    const items = section?.querySelectorAll('.exp-card');
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
    <section ref={sectionRef} className="py-28 sm:py-36 bg-background" aria-labelledby="experiences-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="accent-line" />
            <span className="section-label block mb-4">What We Offer</span>
            <h2 id="experiences-heading" className="font-display text-section-title font-bold text-foreground">
              Core<br />Experiences
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-sm leading-relaxed sm:text-right">
            Every safari is tailored to your interests, travel dates, and budget. No two trips are the same.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {/* Card: Gorilla (col-span-2) */}
          <div className="exp-card reveal-hidden stagger-1 md:col-span-2 group relative overflow-hidden rounded-2xl cursor-pointer min-h-[400px] sm:min-h-[480px] flex flex-col justify-end p-8"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
            <img
              src={experiences[0].imagePath}
              alt={experiences[0].imageAlt}
              width={800}
              height={480}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const parent = (e.currentTarget as HTMLImageElement).parentElement;
                if (parent) parent.classList.add(`bg-gradient-to-br`, `from-green-900`, `to-green-700`);
              }}
            />
            <div className="absolute inset-0 img-overlay-dark z-10" />
            {/* Subtle top gradient */}
            <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(135deg, rgba(10,21,8,0.3) 0%, transparent 60%)' }} />
            <div className="absolute top-5 left-5 z-20">
              <span className="package-badge">{experiences[0].badge}</span>
            </div>
            <div className="relative z-20">
              <span className="block text-xs text-accent uppercase tracking-widest font-semibold mb-2">
                {experiences[0].subtitle}
              </span>
              <h3 className="font-display text-card-title text-white font-bold mb-3">
                {experiences[0].title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-sm">
                {experiences[0].description}
              </p>
              <Link href={experiences[0].href} className="btn-accent text-xs py-2.5 px-5 inline-flex">
                Explore →
              </Link>
            </div>
          </div>

          {/* Card: Wildlife (col-span-1) */}
          <div className="exp-card reveal-hidden stagger-2 md:col-span-1 group relative overflow-hidden rounded-2xl cursor-pointer min-h-[300px] sm:min-h-[480px] flex flex-col justify-end p-7"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
            <img
              src={experiences[1].imagePath}
              alt={experiences[1].imageAlt}
              width={400}
              height={480}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const parent = (e.currentTarget as HTMLImageElement).parentElement;
                if (parent) parent.classList.add(`bg-gradient-to-br`, `from-amber-900`, `to-amber-700`);
              }}
            />
            <div className="absolute inset-0 img-overlay-dark z-10" />
            <div className="relative z-20">
              <span className="block text-xs text-accent uppercase tracking-widest font-semibold mb-2">
                {experiences[1].subtitle}
              </span>
              <h3 className="font-display text-xl text-white font-bold mb-3">
                {experiences[1].title}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed mb-4 hidden sm:block">
                {experiences[1].description}
              </p>
              <Link href={experiences[1].href} className="text-xs text-white/65 hover:text-accent transition-colors uppercase tracking-wider font-semibold inline-flex items-center gap-1 group">
                Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Card: Chimp (col-span-1) */}
          <div className="exp-card reveal-hidden stagger-3 md:col-span-1 group relative overflow-hidden rounded-2xl cursor-pointer min-h-[300px] flex flex-col justify-end p-7"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
            <img
              src={experiences[2].imagePath}
              alt={experiences[2].imageAlt}
              width={400}
              height={300}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const parent = (e.currentTarget as HTMLImageElement).parentElement;
                if (parent) parent.classList.add(`bg-gradient-to-br`, `from-emerald-900`, `to-emerald-700`);
              }}
            />
            <div className="absolute inset-0 img-overlay-dark z-10" />
            <div className="relative z-20">
              <span className="block text-xs text-accent uppercase tracking-widest font-semibold mb-2">
                {experiences[2].subtitle}
              </span>
              <h3 className="font-display text-xl text-white font-bold mb-3">
                {experiences[2].title}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed mb-4 hidden sm:block">
                {experiences[2].description}
              </p>
              <Link href={experiences[2].href} className="text-xs text-white/65 hover:text-accent transition-colors uppercase tracking-wider font-semibold inline-flex items-center gap-1 group">
                Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Card: Kampala (col-span-2) */}
          <div className="exp-card reveal-hidden stagger-4 md:col-span-2 group relative overflow-hidden rounded-2xl cursor-pointer min-h-[300px] flex flex-col justify-end p-7"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
            <img
              src={experiences[3].imagePath}
              alt={experiences[3].imageAlt}
              width={800}
              height={300}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const parent = (e.currentTarget as HTMLImageElement).parentElement;
                if (parent) parent.classList.add(`bg-gradient-to-br`, `from-stone-800`, `to-stone-600`);
              }}
            />
            <div className="absolute inset-0 img-overlay-dark z-10" />
            <div className="relative z-20">
              <span className="block text-xs text-accent uppercase tracking-widest font-semibold mb-2">
                {experiences[3].subtitle}
              </span>
              <h3 className="font-display text-xl text-white font-bold mb-3">
                {experiences[3].title}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed mb-4 max-w-md hidden sm:block">
                {experiences[3].description}
              </p>
              <Link href={experiences[3].href} className="text-xs text-white/65 hover:text-accent transition-colors uppercase tracking-wider font-semibold inline-flex items-center gap-1 group">
                Plan your visit <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}
