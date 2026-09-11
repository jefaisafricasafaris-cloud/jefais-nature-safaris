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
  { label: 'Blog', href: '/blog' },
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
  { label: 'Blog', href: '/blog' },
  { label: 'National Parks', href: '/national-parks' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const moreRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isBlogPage = pathname === '/blog';

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
      {/* =========================
          DESKTOP / MAIN HEADER
      ========================== */}
      <header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          paddingTop: scrolled ? '0.55rem' : '0.8rem',
          paddingBottom: scrolled ? '0.55rem' : '0.8rem',
          background: '#ffffff',
          boxShadow: scrolled
            ? '0 10px 30px rgba(0,0,0,0.12)'
            : '0 5px 20px rgba(0,0,0,0.08)',
          borderBottom: '1px solid rgba(45,80,22,0.12)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* =========================
              LOGO + BRAND
          ========================== */}
          <Link
            href="/"
            className="flex items-center gap-3 z-50 relative group shrink-0"
            aria-label="Je Fais Nature Safaris Home"
            onClick={() => {
              setMenuOpen(false);
              setMoreOpen(false);
            }}
          >
            <div className="relative">
              {/* Soft green hover glow */}
              <div className="absolute inset-0 rounded-full bg-[#2D5016]/10 scale-0 group-hover:scale-125 transition-transform duration-300" />

              <AppLogo
                src="/assets/images/65194-1788422840167.webp"
                size={52}
              />
            </div>

            {/* Brand name */}
            <div className="flex flex-col justify-center">
              <span className="font-display text-[#1F3D16] font-extrabold text-lg sm:text-xl leading-none tracking-tight">
                Je Fais
              </span>

              <span className="text-[#6B7F62] text-[0.62rem] sm:text-[0.68rem] font-semibold tracking-[0.18em] uppercase mt-1">
                Nature Safaris
              </span>
            </div>
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-1 justify-end">

            {/* Primary Links */}
           {primaryLinks
  .filter((link) => !(isBlogPage && link.href === '/wildlife-safaris'))
  .map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-3 py-2.5 rounded-lg
                    text-[0.82rem] xl:text-sm
                    font-semibold
                    whitespace-nowrap
                    transition-all duration-200
                    ${
                      active
                        ? 'text-[#2D5016] bg-[#F0F6EC]'
                        : 'text-[#24351F] hover:text-[#2D5016] hover:bg-[#F5F8F3]'
                    }
                  `}
                >
                  {link.label}

                  {active && (
                    <span className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-[#2D5016]" />
                  )}
                </Link>
              );
            })}

            {/* =========================
                MORE DROPDOWN
            ========================== */}
            <div
              ref={moreRef}
              className="relative"
            >
              <button
                type="button"
                onClick={() => setMoreOpen((value) => !value)}
                className={`
                  flex items-center gap-1
                  px-3 py-2.5
                  rounded-lg
                  text-[0.82rem] xl:text-sm
                  font-semibold
                  whitespace-nowrap
                  transition-all duration-200
                  ${
                    moreOpen
                      ? 'text-[#2D5016] bg-[#F0F6EC]'
                      : 'text-[#24351F] hover:text-[#2D5016] hover:bg-[#F5F8F3]'
                  }
                `}
                aria-expanded={moreOpen}
                aria-haspopup="menu"
              >
                More

                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    moreOpen ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {moreOpen && (
                <div
                  className="
                    absolute right-0 top-full mt-2
                    w-64
                    bg-white
                    rounded-xl
                    shadow-xl
                    border border-[#E5EDE1]
                    py-2
                    overflow-hidden
                    z-50
                  "
                  role="menu"
                >
              {moreLinks
  .filter((link) => !(isBlogPage && link.href === '/about'))
  .map((link) => {
                    const active = isActive(link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMoreOpen(false)}
                        className={`
                          block px-4 py-2.5
                          text-sm
                          font-medium
                          transition-colors duration-200
                          ${
                            active
                              ? 'bg-[#F0F6EC] text-[#2D5016] font-semibold'
                              : 'text-[#34432F] hover:bg-[#F5F8F3] hover:text-[#2D5016]'
                          }
                        `}
                        role="menuitem"
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* =========================
                PHONE
            ========================== */}
            <a
              href="tel:0774729464"
              className="
                hidden xl:flex
                items-center gap-2
                ml-2
                px-3 py-2
                text-[#24351F]
                hover:text-[#2D5016]
                font-semibold
                text-sm
                transition-colors
                whitespace-nowrap
              "
            >
              <svg
                className="w-4 h-4 text-[#2D5016]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5.5A2.5 2.5 0 015.5 3h2A1.5 1.5 0 019 4.2l1 3a1.5 1.5 0 01-.4 1.55l-1.3 1.3a16 16 0 006.65 6.65l1.3-1.3a1.5 1.5 0 011.55-.4l3 1a1.5 1.5 0 011.2 1.5v2A2.5 2.5 0 0121.5 21C11.28 21 3 12.72 3 2.5v3z"
                />
              </svg>

              0774 729464
            </a>

            {/* =========================
                REQUEST QUOTE BUTTON
            ========================== */}
            <Link
              href="/request-a-quote"
              className="
                ml-1
                inline-flex items-center justify-center
                px-4 xl:px-5
                py-2.5
                rounded-lg
                text-white
                bg-[#2D5016]
                hover:bg-[#3C6B20]
                font-bold
                text-[0.8rem] xl:text-sm
                shadow-md
                hover:shadow-lg
                transition-all duration-200
                whitespace-nowrap
              "
            >
              Request a Quote
            </Link>
          </nav>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            type="button"
            className="
              lg:hidden
              relative z-50
              flex items-center justify-center
              w-11 h-11
              rounded-lg
              bg-[#F0F6EC]
              text-[#2D5016]
              border border-[#DDE9D7]
              hover:bg-[#E5F0E0]
              transition-colors
            "
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* =========================
          MOBILE MENU
      ========================== */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">

          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-[#17320E]/95 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Mobile navigation */}
          <div
            className="
              relative
              h-full
              overflow-y-auto
              pt-24
              px-5
              pb-8
            "
          >
            <div className="max-w-md mx-auto">

              {/* Mobile brand */}
              <div className="flex items-center gap-3 pb-6 mb-4 border-b border-white/15">
                <AppLogo
                  src="/assets/images/65194-1788422840167.webp"
                  size={50}
                />

                <div>
                  <div className="text-white font-extrabold text-xl">
                    Je Fais
                  </div>

                  <div className="text-[#D8C36A] text-xs font-semibold tracking-[0.18em] uppercase">
                    Nature Safaris
                  </div>
                </div>
              </div>

              {/* Mobile links */}
              <nav className="space-y-1">
                {allMobileLinks
  .filter(
    (link) =>
      !(
        isBlogPage &&
        (link.href === '/wildlife-safaris' || link.href === '/about')
      )
  )
  .map((link) => {
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`
                        flex items-center justify-between
                        px-4 py-3.5
                        rounded-xl
                        text-base
                        font-semibold
                        transition-all duration-200
                        ${
                          active
                            ? 'bg-white text-[#2D5016]'
                            : 'text-white hover:bg-white/10 hover:text-[#D8C36A]'
                        }
                      `}
                    >
                      <span>{link.label}</span>

                      <svg
                        className="w-4 h-4 opacity-60"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L10.94 10 7.23 6.29a.75.75 0 111.06-1.06l4.24 4.24a.75.75 0 010 1.06l-4.24 4.24a.75.75 0 01-1.08 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile contact */}
              <div className="mt-6 pt-6 border-t border-white/15 space-y-3">

                <a
                  href="tel:0774729464"
                  className="
                    flex items-center justify-center gap-2
                    w-full
                    px-4 py-3.5
                    rounded-xl
                    bg-white/10
                    text-white
                    font-semibold
                    hover:bg-white/15
                    transition-colors
                  "
                >
                  <svg
                    className="w-5 h-5 text-[#D8C36A]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5.5A2.5 2.5 0 015.5 3h2A1.5 1.5 0 019 4.2l1 3a1.5 1.5 0 01-.4 1.55l-1.3 1.3a16 16 0 006.65 6.65l1.3-1.3a1.5 1.5 0 011.55-.4l3 1a1.5 1.5 0 011.2 1.5v2A2.5 2.5 0 0121.5 21C11.28 21 3 12.72 3 2.5v3z"
                    />
                  </svg>

                  0774 729464
                </a>

                <a
                  href="https://wa.me/256774729464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center gap-2
                    w-full
                    px-4 py-3.5
                    rounded-xl
                    bg-[#25D366]
                    text-white
                    font-bold
                    hover:bg-[#20BD5A]
                    transition-colors
                  "
                >
                  <span className="text-lg">WhatsApp</span>
                </a>

                <Link
                  href="/request-a-quote"
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex items-center justify-center
                    w-full
                    px-4 py-3.5
                    rounded-xl
                    bg-[#D8C36A]
                    text-[#17320E]
                    font-extrabold
                    hover:bg-[#E3D17D]
                    transition-colors
                  "
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}