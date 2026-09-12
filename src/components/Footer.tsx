import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const exploreLinks = [
  { label: 'Uganda Safaris', href: '/uganda-safaris' },
  { label: 'Gorilla Trekking', href: '/gorilla-trekking' },
  { label: 'Wildlife Safaris', href: '/wildlife-safaris' },
  { label: 'Chimpanzee Trekking', href: '/chimpanzee-trekking' },
  { label: 'Safari Packages', href: '/safari-packages' },
  { label: 'National Parks', href: '/national-parks' },
];

const destinationLinks = [
  { label: 'Bwindi', href: '/national-parks/bwindi' },
  { label: 'Queen Elizabeth', href: '/national-parks/queen-elizabeth' },
  { label: 'Murchison Falls', href: '/national-parks/murchison-falls' },
  { label: 'Kibale Forest', href: '/national-parks/kibale' },
  { label: 'Kidepo Valley', href: '/national-parks/kidepo' },
  { label: 'Lake Mburo', href: '/national-parks/lake-mburo' },
  { label: 'Kampala Tours', href: '/kampala-tours' },
  { label: 'Jinja Tours', href: '/jinja-tours' },
];

const serviceLinks = [
  { label: 'Student Tours', href: '/student-tours' },
  { label: 'Car Hire', href: '/car-hire' },
  { label: 'Tourism Internships', href: '/internships' },
  { label: 'Global Partnership', href: '/global-tourism-partnerships' },
  { label: 'Travel Guide', href: '/travel-guide' },
  { label: 'Blog', href: '/blog' },
  { label: 'Request a Quotation', href: '/request-a-quote' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

const partnerLogos = [
  {
    src: '/images/partners/utb.webp',
    alt: 'Uganda Tourism Board',
    name: 'Uganda Tourism Board',
  },
  {
    src: '/images/yuto.webp',
    alt: 'Youth Uganda Tour Operators',
    name: 'Youth Uganda Tour Operators',
  },
  {
    src: '/images/partners/uwa.webp',
    alt: 'Uganda Wildlife Authority',
    name: 'Uganda Wildlife Authority',
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A1508 0%, #060E05 100%)',
      }}
    >
      {/* Decorative top border */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(200,150,90,0.4), transparent)',
        }}
      />

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8965a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* =========================================================
          PARTNERS
          ========================================================= */}
      <div className="relative z-10 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-12">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-7">
              Our Partners
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-10">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.src}
                  className="group flex h-28 w-44 sm:h-32 sm:w-52 items-center justify-center rounded-2xl bg-white px-5 sm:px-7 py-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={220}
                    height={120}
                    className="h-20 sm:h-24 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          FOOTER CONTENT
          ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-14">

          {/* =====================================================
              BRAND + CONTACT
              ===================================================== */}
          <div className="md:col-span-4 flex flex-col gap-6">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <AppLogo size={44} />

              <div className="flex flex-col">
                <span className="font-display font-semibold text-white text-base leading-tight">
                  Je Fais
                </span>

                <span className="text-accent text-[0.6rem] font-sans font-semibold tracking-[0.2em] uppercase">
                  Nature Safaris
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-white/55 leading-relaxed max-w-sm">
              Your trusted Uganda safari operator. Real guides, real wildlife,
              authentic experiences across the Pearl of Africa.
            </p>

            {/* Address */}
            <address className="not-italic text-sm text-white/45 leading-relaxed">
              Kampala and Entebbe Airport opposite Total, Plot 5 De Winton
              Street, Kampala

              <br />

              <a
                href="https://maps.app.goo.gl/KSmcBcXR7RbfbNoz6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-accent hover:text-white transition-colors font-medium"
              >
                📍 Find Us on Google Maps
              </a>
            </address>

            {/* =================================================
                CONTACT US
                ================================================= */}
            <div
              className="pt-6"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40 mb-5">
                Contact Us
              </h3>

              <div className="flex flex-col gap-3">

                {/* Phone */}
                <a
                  href="tel:0774729464"
                  className="text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span aria-hidden="true">📞</span>
                  <span>0774 729464</span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/256774729464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span aria-hidden="true">💬</span>
                  <span>WhatsApp Us</span>
                </a>

                {/* Email 1 */}
                <a
                  href="mailto:info@jefaisnaturesafari.com"
                  className="text-sm text-white/60 hover:text-accent transition-colors flex items-start gap-2 break-all"
                >
                  <span aria-hidden="true">✉️</span>
                  <span>info@jefaisnaturesafari.com</span>
                </a>

                {/* Email 2 */}
                <a
                  href="mailto:jefaisafricasafaris@gmail.com"
                  className="text-sm text-white/60 hover:text-accent transition-colors flex items-start gap-2 break-all"
                >
                  <span aria-hidden="true">✉️</span>
                  <span>jefaisafricasafaris@gmail.com</span>
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-6">

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1Hsn81Z3en/"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* =====================================================
              EXPLORE
              ===================================================== */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40 mb-6">
              Explore
            </h3>

            <ul className="flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

const partnerLogos = [
  {
    src: '/images/partners/utb.webp',
    alt: 'Uganda Tourism Board',
    name: 'Uganda Tourism Board',
  },
{
  src: '/images/yuto.webp',
  alt: 'Youth Uganda Tour Operators',
  name: 'Youth Uganda Tour Operators',
},
  {
    src: '/images/partners/uwa.webp',
    alt: 'Uganda Wildlife Authority',
    name: 'Uganda Wildlife Authority',
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A1508 0%, #060E05 100%)',
      }}
    >
      {/* Decorative top border */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(200,150,90,0.4), transparent)',
        }}
      />

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8965a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* =========================================================
          PARTNERS
          ========================================================= */}
      <div className="relative z-10 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-12">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-7">
              Our Partners
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-10">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.src}
                  className="group flex h-28 w-44 sm:h-32 sm:w-52 items-center justify-center rounded-2xl bg-white px-5 sm:px-7 py-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={220}
                    height={120}
                    className="h-20 sm:h-24 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ORIGINAL FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-14">

          {/* BRAND / CONTACT */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <AppLogo size={44} />

              <div className="flex flex-col">
                <span className="font-display font-semibold text-white text-base leading-tight">
                  Je Fais
                </span>

                <span className="text-accent text-[0.6rem] font-sans font-semibold tracking-[0.2em] uppercase">
                  Nature Safaris
                </span>
              </div>
            </div>

            <p className="text-sm text-white/55 leading-relaxed max-w-sm">
              Your trusted Uganda safari operator. Real guides, real wildlife,
              authentic experiences across the Pearl of Africa.
            </p>

            <address className="not-italic text-sm text-white/45 leading-relaxed">
              Kampala and Entebbe Airport opposite Total, Plot 5 De Winton
              Street, Kampala

              <br />

              <a
                href="https://maps.app.goo.gl/KSmcBcXR7RbfbNoz6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-accent hover:text-white transition-colors font-medium"
              >
                📍 Find Us on Google Maps
              </a>

              <br />

              <a
                href="tel:0774729464"
                className="hover:text-accent transition-colors font-medium text-white/70 mt-2 inline-flex items-center gap-1.5"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.01l-2.2 2.21z" />
                </svg>
                0774 729464
              </a>
            </address>

            {/* CONTACT US */}
<div className="mt-6">
  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40 mb-5">
    Contact Us
  </h3>

  <div className="flex flex-col gap-3">

    {/* Phone */}
    <a
      href="tel:0774729464"
      className="text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-2"
    >
      <span>📞</span>
      <span>0774 729464</span>
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/256774729464"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-2"
    >
      <span>💬</span>
      <span>WhatsApp Us</span>
    </a>

    {/* Email 1 */}
    <a
      href="mailto:info@jefaisnaturesafari.com"
      className="text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-2 break-all"
    >
      <span>✉️</span>
      <span>info@jefaisnaturesafari.com</span>
    </a>

    {/* Email 2 */}
    <a
      href="mailto:jefaisafricasafaris@gmail.com"
      className="text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-2 break-all"
    >
      <span>✉️</span>
      <span>jefaisafricasafaris@gmail.com</span>
    </a>

  </div>
l

          {/* EXPLORE */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40 mb-6">
              Explore
            </h3>

            <ul className="flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DESTINATIONS */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40 mb-6">
              Destinations
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
              {destinationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES + COMPANY */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40 mb-6">
              Services & Opportunities
            </h3>

            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className="my-7"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            />

            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40 mb-5">
              Company
            </h3>

            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/request-a-quote"
              className="mt-7 inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent border border-accent/30 px-4 py-2.5 rounded-lg hover:bg-accent/10 transition-all"
            >
              Request a Quote →
            </Link>
          </div>
        </div>
        {/* CONTACT US */}
        <div
          className="mt-12 pt-10 border-t border-white/[0.08]"
        >
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40 mb-5">
            Contact Us
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
            <a
              href="mailto:info@jefaisnaturesafari.com"
              className="text-sm text-white/55 hover:text-accent transition-colors"
            >
              info@jefaisnaturesafari.com
            </a>

            <a
              href="mailto:jefaisafricasafaris@gmail.com"
              className="text-sm text-white/55 hover:text-accent transition-colors"
            >
              jefaisafricasafaris@gmail.com
            </a>
          </div>
        </div>
        {/* BOTTOM ROW */}
        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <span>
            © 2026 JE FAIS NATURE SAFARIS LTD. All rights reserved.
          </span>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-accent transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* DESIGNER CREDIT */}
        <div className="mt-5 text-center text-xs text-white/20">
          Designed by{' '}
          <a
            href="mailto:sudhirkibirige@gmail.com"
            className="hover:text-accent transition-colors text-white/30"
          >
            Sudhir Kibirige
          </a>
          {' '}·{' '}
          <a
            href="tel:0742585395"
            className="hover:text-accent transition-colors text-white/30"
          >
            0742 585395
          </a>
        </div>
      </div>
    </footer>
  );
}
