import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: 'Uganda Safaris & Gorilla Trekking | Je Fais Nature Safaris',
  description:
    'Explore Uganda with Je Fais Nature Safaris. Book gorilla trekking, wildlife safaris, chimpanzee trekking, cultural tours and tailor-made Uganda safari packages.',
  icons: {
    icon: [
      {
        url: '/assets/images/65194-1788422840167.webp',
        type: 'image/webp',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Je Fais Nature Safaris',
    title: 'Uganda Safaris & Gorilla Trekking | Je Fais Nature Safaris',
    description:
      'Explore Uganda with Je Fais Nature Safaris. Book gorilla trekking, wildlife safaris, chimpanzee trekking, cultural tours and tailor-made Uganda safari packages.',
    images: [
      {
        url: '/assets/images/65194-1788422840167.webp',
        width: 1200,
        height: 630,
        alt: 'Je Fais Nature Safaris Uganda safari company logo',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uganda Safaris & Gorilla Trekking | Je Fais Nature Safaris',
    description:
      'Explore Uganda with Je Fais Nature Safaris. Book gorilla trekking, wildlife safaris, chimpanzee trekking, cultural tours and tailor-made Uganda safari packages.',
    images: ['/assets/images/65194-1788422840167.webp'],
  },
  alternates: {
    canonical:
      process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/images/65194-1788422840167.webp"
        />
      </head>

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}