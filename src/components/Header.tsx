'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const primaryLinks = [
  { label: 'Uganda Safaris', href: '/uganda-safaris' },
  { label: 'Gorilla Trekking', href: '/gorilla-trekking' },
  { label: 'Wildlife Safaris', href: '/wildlife-safaris' },
  { label: 'Packages', href: '/safari-packages' },
];

const moreLinks = [
  { label: 'National Parks', href: '/national-parks' },
  { label: 'Kampala Tours', href: '/kampala-tours' },
  { label: 'About Us', href: '/about' },
  { label: 'Global Tourism Partnerships', href: '/global-tourism-partnerships' },
  { label: 'Tourism Internships', href: '/internships' },
  { label: 'Contact', href: '/contact' },
];

const allMobileLinks = [
  { label: 'Home', href: '/' },
  { label: 'Uganda Safaris', href: '/uganda-safaris' },
  { label: 'Gorilla Trekking', href: '/gorilla-trekking' },
  { label: 'Wildlife Safaris', href: '/wildlife-safaris' },
  { label: 'National Parks', href: '/national-parks' },
  { label: 'Kampala Tours', href: '/kampala-tours' },
  { label: 'Packages', href: '/safari-packages' },
  { label: 'About Us', href: '/about' },
  { label: 'Global Tourism Partnerships', href: '/global-tourism-partnerships' },
  { label: 'Tourism Internships', href: '/internships' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        moreRef.current &&
        !moreRef.current.contains(e.target as Node)
      ) {
        setMoreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={
          scrolled
            ? {
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
                background:
                  'linear-gradient(180deg, rgba(10,21,8,0.97) 0%, rgba(10,21,8,0.95) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }
            : {
                paddingTop: '1.25rem',
                paddingBottom: '1.25rem',
              }
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-3 z-50 relative group"
            aria-label="Je Fais Nature Safaris Home"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-accent/20 scale-0 group-hover:scale-110 transition-transform duration-300" />

              <AppLogo
                src="/assets/images/65194-1788422840167.webp"
                size={40}
              />
            </div>

            <div className="flex flex-col">
              <span className="font-display text-white font-semibold text-base sm:text-lg leading-tight tracking-tight">
                Je Fais
              </span>

              <span className="text-accent text-[0.6rem] sm:text-xs font-sans font-semibold tracking-[0.2em] uppercase">
                Nature Safaris
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">

            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link-item whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}

            <div ref={moreRef} className="relative">

              <button
                type="button"
                className="nav-link-item flex items-center gap-1 whitespace-nowrap"
                onClick={() => setMoreOpen((open) => !open)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                More

                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200"
                  style={{
                    transform: moreOpen
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                  }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className="absolute top-full right-0 mt-3 w-52 rounded-xl shadow-2xl overflow-hidden transition-all duration-200"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(10,21,8,0.98) 0%, rgba(15,30,12,0.98) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(200,150,90,0.2)',
                  opacity: moreOpen ? 1 : 0,
                  pointerEvents: moreOpen ? 'auto' : 'none',
                  transform: moreOpen
                    ? 'translateY(0)'
                    : 'translateY(-8px)',
                }}
              >
                <div className="p-1.5">

                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-white/80 hover:text-accent hover:bg-white/5 transition-all rounded-lg group"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />

                      {link.label}
                    </Link>
                  ))}

                </div>
              </div>
            </div>

            <a
              href="tel:0774729464"
              className="nav-link-item flex items-center gap-1.5 whitespace-nowrap"
              aria-label="Call us"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.01l-2.2 2.21z" />
              </svg>

              0774 729464
            </a>

            <Link
              href="/request-a-quote"
              className="btn-accent text-xs py-2.5 px-5 whitespace-nowrap animate-pulse-glow"
            >
              Request a Quote
            </Link>

          </nav>

          <button
            type="button"
            className="lg:hidden z-50 relative w-11 h-11 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{
                transform: menuOpen
                  ? 'rotate(45deg) translateY(8px)'
                  : 'none',
              }}
            />

            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{
                opacity: menuOpen ? 0 : 1,
              }}
            />

            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{
                transform: menuOpen
                  ? 'rotate(-45deg) translateY(-8px)'
                  : 'none',
              }}
            />
          </button>

        </div>
      </header>

      <div
        className="fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-500"
        style={{
          background:
            'linear-gradient(160deg, rgba(10,21,8,0.99) 0%, rgba(15,30,12,0.99) 100%)',
          backdropFilter: 'blur(24px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        aria-hidden={!menuOpen}
      >

        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #C8965A, transparent)',
          }}
        />

        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #2D5016, transparent)',
          }}
        />

        <nav className="flex flex-col items-center gap-6 relative z-10">

          {allMobileLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-white text-3xl sm:text-4xl font-semibold tracking-tight hover:text-accent transition-colors"
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col sm:flex-row gap-3 mt-4">

            <Link
              href="/request-a-quote"
              onClick={() => setMenuOpen(false)}
              className="btn-accent"
            >
              Request a Quote
            </Link>

            <a
              href="https://wa.me/256774729464"
              onClick={() => setMenuOpen(false)}
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>

          </div>
        </nav>

        <div className="absolute bottom-8 text-muted-foreground text-sm">
          <a
            href="tel:0774729464"
            className="hover:text-accent transition-colors"
          >
            0774 729464
          </a>
        </div>

      </div>
    </>
  );
}