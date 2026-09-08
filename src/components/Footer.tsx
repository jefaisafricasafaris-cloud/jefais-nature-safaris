import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = [
  { label: 'Uganda Safaris', href: '/uganda-safaris' },
  { label: 'Gorilla Trekking', href: '/gorilla-trekking' },
  { label: 'Wildlife Safaris', href: '/wildlife-safaris' },
  { label: 'National Parks', href: '/national-parks' },
  { label: 'Kampala Tours', href: '/kampala-tours' },
  { label: 'Safari Packages', href: '/safari-packages' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1508 0%, #060E05 100%)' }}
    >
      {/* Decorative top border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,150,90,0.4), transparent)' }} />

      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8965a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Col 1: Logo + tagline — wider */}
          <div className="md:col-span-5 flex flex-col gap-6">
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
            <p className="text-sm text-white/55 leading-relaxed max-w-xs">
              Your trusted Uganda safari operator. Real guides, real wildlife, authentic experiences across the Pearl of Africa.
            </p>
            <address className="not-italic text-sm text-white/45 leading-relaxed">
              Plot 5 De Winton Street, Kampala<br />
              Opposite Total · Plus Code: 8H7Q+XP<br />
              <a href="tel:0774729464" className="hover:text-accent transition-colors font-medium text-white/70 mt-2 inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.01l-2.2 2.21z"/>
                </svg>
                0774 729464
              </a>
            </address>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/256774729464"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/jefaisnaturesafaris/"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40 mb-6">Explore</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks?.slice(0, 4)?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-sm text-white/55 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors flex-shrink-0" />
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40 mb-6">Company</h3>
            <ul className="flex flex-col gap-3 mb-8">
              {footerLinks?.slice(4)?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-sm text-white/55 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors flex-shrink-0" />
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA in footer */}
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent border border-accent/30 px-4 py-2.5 rounded-lg hover:bg-accent/10 transition-all"
            >
              Request a Quote →
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <span>© 2026 JE FAIS NATURE SAFARIS LTD. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-accent transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Terms</Link>
          </div>
        </div>

        {/* Designer credit */}
        <div className="mt-5 text-center text-xs text-white/20">
          Designed by{' '}
          <a href="mailto:sudhirkibirige@gmail.com" className="hover:text-accent transition-colors text-white/30">
            Sudhir Kibirige
          </a>
          {' '}·{' '}
          <a href="tel:0742585395" className="hover:text-accent transition-colors text-white/30">
            0742 585395
          </a>
        </div>
      </div>
    </footer>
  );
}
