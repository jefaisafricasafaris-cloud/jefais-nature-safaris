import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';
import Footer from '@/components/Footer';


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Uganda Safaris & Gorilla Trekking | Je Fais Nature Safaris',
  description: 'Explore Uganda with Je Fais Nature Safaris. Book gorilla trekking, wildlife safaris, chimpanzee trekking, cultural tours and tailor-made Uganda safari packages.',
  icons: {
    icon: [{ url: '/assets/images/65194-1788422840167.webp', type: 'image/webp' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Je Fais Nature Safaris',
    title: 'Uganda Safaris & Gorilla Trekking | Je Fais Nature Safaris',
    description: 'Explore Uganda with Je Fais Nature Safaris. Book gorilla trekking, wildlife safaris, chimpanzee trekking, cultural tours and tailor-made Uganda safari packages.',
    images: [{
      url: '/assets/images/65194-1788422840167.webp',
      width: 1200,
      height: 630,
      alt: 'Je Fais Nature Safaris Uganda safari company logo',
      type: 'image/webp',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uganda Safaris & Gorilla Trekking | Je Fais Nature Safaris',
    description: 'Explore Uganda with Je Fais Nature Safaris. Book gorilla trekking, wildlife safaris, chimpanzee trekking, cultural tours and tailor-made Uganda safari packages.',
    images: ['/assets/images/65194-1788422840167.webp'],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
  <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/images/65194-1788422840167.webp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Je Fais Nature Safaris',
            alternateName: ['Je Fais Nature Safaris Ltd', 'Je Fais Safaris', 'Je Fais Nature'],
            url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
            logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/assets/images/65194-1788422840167.webp`,
            description: 'Uganda-based safari operator offering gorilla trekking, wildlife safaris, chimpanzee tracking, and cultural tours across Uganda national parks.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Plot 5 De Winton Street',
              addressLocality: 'Kampala',
              addressCountry: 'UG',
            },
            telephone: '+256774729464',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              telephone: '+256774729464',
              availableLanguage: ['en'],
            },
            sameAs: ['https://www.facebook.com/jefaisnaturesafaris/', 'https://wa.me/256774729464'],
            areaServed: { '@type': 'Country', name: 'Uganda' },
            knowsAbout: ['Safari Tourism', 'Gorilla Trekking', 'Wildlife Tours', 'Chimpanzee Tracking', 'Uganda National Parks', 'Nature Tourism'],
          }),
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
            name: 'Je Fais Nature Safaris',
            description: 'Uganda safari operator offering gorilla trekking, wildlife safaris, and nature tours.',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}?q={search_term_string}`,
              },
              'query-input': 'required name=search_term_string',
            },
          }),
         }} />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}