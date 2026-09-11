'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HERO_IMAGES = [
  '/images/transitions/WhatsApp Image 2026-09-11 at 10.50.41 AM (1).webp',
  '/images/transitions/WhatsApp Image 2026-09-11 at 10.50.41 AM.webp',
  '/images/transitions/WhatsApp Image 2026-09-11 at 10.50.43 AM (1).webp',
  '/images/transitions/WhatsApp Image 2026-09-11 at 10.50.43 AM (2).webp',
  '/images/transitions/WhatsApp Image 2026-09-11 at 10.50.43 AM.webp',
  '/images/transitions/WhatsApp Image 2026-09-11 at 10.50.44 AM (1).webp',
  '/images/transitions/WhatsApp Image 2026-09-11 at 10.50.44 AM.webp',
  '/images/transitions/WhatsApp Image 2026-09-11 at 10.50.45 AM (1).webp',
  '/images/transitions/WhatsApp Image 2026-09-11 at 10.50.45 AM.webp',
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  const totalImages = HERO_IMAGES.length;

  /*
   * Move to next image.
   * Loops from image 9 back to image 1.
   */
  const nextImage = () => {
    setCurrentImage((previous) => (previous + 1) % totalImages);
  };

  /*
   * Move backwards.
   * If we are on image 1, go back to image 9.
   */
  const previousImage = () => {
    setCurrentImage(
      (previous) => (previous - 1 + totalImages) % totalImages
    );
  };

  /*
   * Jump directly to a selected image.
   */
  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  /*
   * Preload the next image so transitions feel smoother.
   */
  useEffect(() => {
    const nextIndex = (currentImage + 1) % totalImages;

    const img = new window.Image();
    img.src = HERO_IMAGES[nextIndex];
  }, [currentImage, totalImages]);

  /*
   * AUTOMATIC SLIDESHOW
   *
   * Changes image every 3 seconds.
   * Continues even when the mouse is over the hero.
   */
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % totalImages);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [totalImages]);

  return (
    <section
      className="relative w-full min-h-screen flex items-end justify-start overflow-hidden bg-dark"
      aria-label="Uganda Safaris Hero"
    >
      {/* =========================================================
          HERO SLIDESHOW
          ========================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">

        {HERO_IMAGES.map((image, index) => {
          const isActive = index === currentImage;

          return (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={image}
                alt={
                  isActive
                    ? 'Uganda safari adventure with Je Fais Nature Safaris'
                    : ''
                }
                fill
                priority={index === 0}
                quality={85}
                sizes="100vw"
                className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-[1.035]' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* Dark cinematic overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.62) 34%, rgba(0,0,0,0.22) 66%, rgba(0,0,0,0.12) 100%)',
          }}
        />

        {/* Left/right cinematic depth */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.10) 52%, rgba(0,0,0,0.22) 100%)',
          }}
        />

        {/* Bottom warm safari tint */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3 z-10"
          style={{
            background:
              'linear-gradient(to top, rgba(10,21,8,0.68) 0%, transparent 100%)',
          }}
        />

        {/* Subtle vignette */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.22) 100%)',
          }}
        />
      </div>

      {/* =========================================================
          LARGE UGANDA BACKGROUND TEXT
          ========================================================= */}
      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden pointer-events-none select-none">
        <span className="text-ghost font-display text-white block text-right pr-4 pb-0">
          UGANDA
        </span>
      </div>

      {/* =========================================================
          MAIN HERO CONTENT
          ========================================================= */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28 pt-36 flex flex-col md:flex-row md:items-end md:justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-6 h-px bg-accent" />

            <span className="section-label text-accent border border-accent/30 px-3 py-1 rounded-sm backdrop-blur-sm bg-black/20">
              Welcome to the Best Tour Operator in Uganda
            </span>
          </div>

          <h1 className="font-display text-hero text-white font-bold mb-7">
            Uganda Safaris,
            <br />

            <em className="not-italic text-gradient-gold">
              Gorilla Trekking
            </em>

            <br />

            &amp; Wildlife Adventures
          </h1>

          <p className="text-sm sm:text-base text-white/75 max-w-md leading-relaxed mb-10 font-normal">
            Explore Uganda with Je Fais Nature Safaris — unforgettable
            wildlife safaris, gorilla trekking, chimpanzee experiences and
            cultural adventures across the Pearl of Africa.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-3">

            <Link
              href="/contact"
              className="btn-primary"
            >
              Plan My Safari
            </Link>

            <Link
              href="/safari-packages"
              className="btn-outline-white"
            >
              View Safaris
            </Link>

            <a
              href="https://wa.me/256774729464"
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Je Fais Nature Safaris"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>

              WhatsApp Us
            </a>
          </div>
        </div>

        {/* =========================================================
            TRUST / STATS CARDS
            ========================================================= */}
        <div className="flex gap-4 md:flex-col md:items-end">

          {[
            {
              value: '50+',
              label: 'Verified Reviews',
              icon: '⭐',
            },
            {
              value: '5.0',
              label: 'Google Rating',
              icon: '🏆',
            },
            {
              value: '24hrs',
              label: 'Response Time',
              icon: '⚡',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card-dark px-4 py-3 md:px-5 md:py-4 text-center md:text-right min-w-[80px]"
            >
              <span className="block text-base mb-1">
                {stat.icon}
              </span>

              <span className="block font-display text-2xl sm:text-3xl font-bold text-accent leading-none">
                {stat.value}
              </span>

              <span className="block text-xs text-white/55 uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* =========================================================
          SLIDESHOW CONTROLS
          ========================================================= */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">

        {/* PREVIOUS */}
        <button
          type="button"
          onClick={previousImage}
          className="w-9 h-9 rounded-full border border-white/25 bg-black/25 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/45 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
          aria-label="Previous hero image"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* DOTS */}
        <div className="flex items-center gap-1.5 px-2">
          {HERO_IMAGES.map((_, index) => {
            const isActive = index === currentImage;

            return (
              <button
                key={index}
                type="button"
                onClick={() => goToImage(index)}
                aria-label={`Go to hero image ${index + 1}`}
                aria-current={isActive ? 'true' : undefined}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  isActive
                    ? 'w-7 bg-accent'
                    : 'w-1.5 bg-white/45 hover:bg-white/75'
                }`}
              />
            );
          })}
        </div>

        {/* NEXT */}
        <button
          type="button"
          onClick={nextImage}
          className="w-9 h-9 rounded-full border border-white/25 bg-black/25 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/45 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
          aria-label="Next hero image"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

      </div>

      {/* =========================================================
          SLIDE NUMBER
          ========================================================= */}
      <div className="absolute bottom-9 right-5 sm:right-8 z-40 hidden sm:flex items-center gap-2 text-white/60">
        <span className="text-accent font-display text-sm font-bold">
          {String(currentImage + 1).padStart(2, '0')}
        </span>

        <span className="w-8 h-px bg-white/20" />

        <span className="text-xs tracking-widest">
          {String(totalImages).padStart(2, '0')}
        </span>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
          ========================================================= */}
      <div className="absolute bottom-6 left-1/2 z-30 flex flex-col items-center gap-2 animate-bounce-soft">
        <span className="text-white/40 text-xs uppercase tracking-widest">
          Scroll
        </span>

        <div className="w-5 h-8 border border-white/25 rounded-full flex items-start justify-center pt-1.5">
          <div
            className="w-1 h-2 bg-white/50 rounded-full"
            style={{
              animation: 'float 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>

    </section>
  );
}