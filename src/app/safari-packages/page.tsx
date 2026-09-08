import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import PackagesHero from '@/app/safari-packages/components/PackagesHero';
import { tourPackages } from '@/data/tourPackages';
import type { Metadata } from 'next';

const PackagesGrid = dynamic(() => import('@/app/safari-packages/components/PackagesGrid'));
const PackagesEnquiry = dynamic(() => import('@/app/safari-packages/components/PackagesEnquiry'));
const WhatsAppFloat = dynamic(() => import('@/app/components/WhatsAppFloat'));

export const metadata: Metadata = {
  title: 'Uganda Safari Packages | Je Fais Nature Safaris — Request a Quote',
  description: 'Browse Uganda safari packages — 3-day to 7-day itineraries covering Murchison Falls, Kibale Forest, Queen Elizabeth and more. Every safari is custom quoted. Request your personalized quote.',
};

export default function SafariPackagesPage() {
  return (
    <>
      <Header />
      <main>
        <PackagesHero />
        <Suspense fallback={null}>
          <PackagesGrid packages={tourPackages} />
        </Suspense>
        <Suspense fallback={null}>
          <PackagesEnquiry />
        </Suspense>
      </main>
        <Suspense fallback={null}>
        <WhatsAppFloat />
      </Suspense>
    </>
  );
}
