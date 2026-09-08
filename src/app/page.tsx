import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroSection from '@/app/components/HeroSection';
import { tourPackages } from '@/data/tourPackages';
import type { Metadata } from 'next';
const CoreExperiences = dynamic(() => import('@/app/components/CoreExperiences'));
const SafariPackagesPreview = dynamic(() => import('@/app/components/SafariPackagesPreview'));
const WhyChooseUs = dynamic(() => import('@/app/components/WhyChooseUs'));
const Testimonials = dynamic(() => import('@/app/components/Testimonials'));
const FinalCTA = dynamic(() => import('@/app/components/FinalCTA'));
const WhatsAppFloat = dynamic(() => import('@/app/components/WhatsAppFloat'));

export const metadata: Metadata = {
  title: 'Uganda Safaris & Gorilla Trekking | Je Fais Nature Safaris',
  description: 'Explore Uganda with Je Fais Nature Safaris. Book gorilla trekking, wildlife safaris, chimpanzee trekking, cultural tours and tailor-made Uganda safari packages.',
};

export default function HomePage() {
  const featuredPackages = tourPackages.slice(0, 5);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={null}>
          <CoreExperiences />
        </Suspense>
        <Suspense fallback={null}>
          <SafariPackagesPreview packages={featuredPackages} />
        </Suspense>
        <Suspense fallback={null}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={null}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={null}>
          <FinalCTA />
        </Suspense>
      </main>
            <Suspense fallback={null}>
        <WhatsAppFloat />
      </Suspense>
    </>
  );
}
