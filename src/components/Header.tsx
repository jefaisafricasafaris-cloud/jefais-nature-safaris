'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  { label: 'Gallery', href: '/gallery' },
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
  { label: 'Gallery', href: '/gallery' },
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
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
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

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          paddingTop: scrolled ? '0.65rem' : '0.9rem',
          paddingBottom: scrolled ? '0.65rem' : '0.9rem',
          background:
            'linear-gradient(180deg, rgba(7,18,8,0.98) 0%, rgba(10,25,10,0.97) 100%)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          boxShadow: scrolled
            ? '0 12px 35px rgba(0,0,0,0.35)'
            : '0 8px 25px rgba(0,0,0,0.20)',
          borderBottom: '1px solid rgba(200,150,90,0.18)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">

          {/* ================= LOGO ================= */}
          <Link
            href="/"
            className="flex items-center gap-3 z-50 relative group shrink-0"
            aria-label="Je Fais Nature Safaris Home"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#C8965A]/25 scale-0 group-hover:scale-125 transition-transform duration-300" />

              <AppLogo
                src="/assets/images/65194-1788422840167.webp"
                size={42}
              />
            </div>

            <div className="flex flex-col">
              <span className="font-display text-white font-bold text-base sm:text-lg leading-tight tracking-tight">
                Je Fais
              </span>

              <span className="text-[#D9A66A] text-[0.58rem] sm:text-xs font-sans font-bold tracking-[0.2em] uppercase">
                Nature Safaris
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-end">

            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative whitespace-nowrap
                  px-3 py-2.5
                  rounded-lg
                  text-[13px] xl:text-sm
                  font-semibold
                  tracking-wide
                  transition-all duration-200
                  group
                  ${
                    isActive(link.href)
                      ? 'text-[#F2C48D] bg-white/10'
                      : 'text-white hover:text-[#F2C48D] hover:bg-white/8'
                  }
                `}
              >
                {link.label}

                <span
                  className={`
                    absolute bottom-1 left-3 right-3 h-[2px]
                    bg-[#C8965A]
                    rounded-full
                    transition-transform duration-200 origin-center
                    ${
                      isActive(link.href)
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }
                  `}
                />
              </Link>
            ))}

            {/* ================= MORE ================= */}
            <div ref={moreRef} className="relative">

              <button
                type="button"
                onClick={() => setMoreOpen((open) => !open)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                className={`
                  flex items-center gap-1
                  px-3 py-2.5
                  rounded-lg
                  text-sm
                  font-semibold
                  tracking-wide
                  transition-all duration-200
                  ${
                    moreOpen
                      ? 'text-[#F2C48D] bg-white/10'
                      : 'text-white hover:text-[#F2C48D] hover:bg-white/8'
                  }
                `}
              >
                More

                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    moreOpen ? 'rotate-180' : ''
                  }`}
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

              {/* DROPDOWN */}
              <div
                className="absolute top-full right-0 mt-3 w-64 rounded-xl shadow-2xl overflow-hidden transition-all duration-200"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(7,18,8,0.99) 0%, rgba(15,31,13,0.99) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(200,150,90,0.25)',
                  opacity: moreOpen ? 1 : 0,
                  pointerEvents: moreOpen ? 'auto' : 'none',
                  transform: moreOpen
                    ? 'translateY(0)'
                    : 'translateY(-8px)',
                }}
              >
                <div className="p-2">

                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className={`
                        flex items-center gap-3
                        px-4 py-3
                        rounded-lg
                        text-sm
                        font-medium
                        transition-all duration-200
                        ${
                          isActive(link.href)
                            ? 'text-[#F2C48D] bg-white/10'
                            : 'text-white hover:text-[#F2C48D] hover:bg-white/8'
                        }
                      `}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isActive(link.href)
                            ? 'bg-[#C8965A]'
                            : 'bg-white/30'
                        }`}
                      />

                      {link.label}
                    </Link>
                  ))}

                </div>
              </div>
            </div>

            {/* ================= PHONE ================= */}
            <a
              href="tel:0774729464"
              className="
                flex items-center gap-2
                whitespace-nowrap
                px-3 py-2.5
                rounded-lg
                text-sm
                font-semibold
                text-white
                hover:text-[#F2C48D]
                hover:bg-white/8
                transition-all duration-200
              "
              aria-label="Call us"
            >
              <svg
                className="w-4 h-4 text-[#D9A66A]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.01l-2.2 2.21z" />
              </svg>

              <span>0774 729464</span>
            </a>

            {/* ================= QUOTE BUTTON ================= */}
            <Link
              href="/request-a-quote"
              className="
                ml-1
                inline-flex items-center justify-center
                whitespace-nowrap
                rounded-lg
                px-5 py-3
                text-xs
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#10170C]
                bg-[#D9A66A]
                hover:bg-[#E7BB87]
                hover:-translate-y-0.5
                shadow-lg
                shadow-black/20
                transition-all duration-200
              "
            >
              Request a Quote
            </Link>
          </nav>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            className="
              lg:hidden
              z-50 relative
              w-11 h-11
              rounded-lg
              border border-white/20
              bg-white/10
              flex flex-col items-center justify-center
              gap-1.5
              hover:bg-white/15
              transition-all
            "
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{
                transform: menuOpen
                  ? 'rotate(45deg) translateY(6px)'
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
                  ? 'rotate(-45deg) translateY(-6px)'
                  : 'none',
              }}
            />
          </button>

        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className="fixed inset-0 z-40 transition-all duration-300 lg:hidden"
        style={{
          background:
            'linear-gradient(160deg, rgba(7,18,8,0.99) 0%, rgba(15,31,13,0.99) 100%)',
          backdropFilter: 'blur(24px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        aria-hidden={!menuOpen}
      >

        {/* Decorative glow */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, #C8965A, transparent)',
          }}
        />

        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, #2D5016, transparent)',
          }}
        />

        {/* Scrollable content */}
        <div className="absolute inset-0 overflow-y-auto pt-28 pb-28">

          <nav className="relative z-10 w-full max-w-md mx-auto px-6">

            {allMobileLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  flex items-center justify-between
                  w-full
                  min-h-[52px]
                  px-4
                  my-1
                  rounded-xl
                  font-display
                  text-[17px]
                  sm:text-[19px]
                  font-semibold
                  transition-all duration-200
                  ${
                    isActive(link.href)
                      ? 'text-[#F2C48D] bg-white/10 border border-[#C8965A]/30'
                      : 'text-white hover:text-[#F2C48D] hover:bg-white/8'
                  }
                `}
                style={{
                  transitionDelay: `${i * 20}ms`,
                }}
              >
                <span>{link.label}</span>

                <span
                  className={`text-lg ${
                    isActive(link.href)
                      ? 'text-[#D9A66A]'
                      : 'text-white/30'
                  }`}
                >
                  →
                </span>
              </Link>
            ))}

            {/* MOBILE CTA BUTTONS */}
            <div className="flex flex-col gap-3 mt-7 px-1">

              <Link
                href="/request-a-quote"
                onClick={() => setMenuOpen(false)}
                className="
                  w-full
                  text-center
                  rounded-xl
                  py-4
                  font-bold
                  uppercase
                  tracking-wide
                  text-[#10170C]
                  bg-[#D9A66A]
                  hover:bg-[#E7BB87]
                  transition-all
                  shadow-lg
                "
              >
                Request a Quote
              </Link>

              <a
                href="https://wa.me/256774729464"
                onClick={() => setMenuOpen(false)}
                className="
                  w-full
                  text-center
                  rounded-xl
                  py-4
                  font-bold
                  uppercase
                  tracking-wide
                  text-white
                  border border-white/20
                  bg-white/10
                  hover:bg-white/15
                  transition-all
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>

            </div>

          </nav>
        </div>

        {/* MOBILE PHONE */}
        <div
          className="
            absolute bottom-4 left-0 right-0
            z-20
            text-center
            text-white/70
            text-sm
          "
        >
          <a
            href="tel:0774729464"
            className="hover:text-[#F2C48D] transition-colors"
          >
            0774 729464
          </a>
        </div>

      </div>
    </>
  );
}