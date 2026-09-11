'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import QuoteRequestForm from '@/app/components/QuoteRequestForm';

function QuotePageContent() {
  const searchParams = useSearchParams();
  const preselectedPackage = searchParams?.get('package') || '';

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section
          className="relative min-h-[45vh] overflow-hidden bg-[#102014]"
          aria-label="Request a Quote hero"
        >
          {/* Safari planner image — right side */}
          <div className="absolute inset-y-0 right-0 z-0 w-full lg:w-[58%]">
            <Image
              src="/images/Safari-planner.webp"
              alt="Safari planner for Uganda safari adventures"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center"
            />

            {/* Dark fade toward the text */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#102014] via-[#102014]/65 to-transparent lg:from-[#102014] lg:via-[#102014]/25 lg:to-transparent" />
          </div>

          {/* Additional dark overlay on mobile */}
          <div className="absolute inset-0 z-[1] bg-[#102014]/35 lg:hidden" />

          {/* Hero content */}
          <div className="relative z-10 mx-auto flex min-h-[45vh] w-full max-w-7xl items-end px-4 pb-12 pt-36 sm:px-6 sm:pb-16">
            <div className="max-w-2xl">
              {/* Breadcrumb */}
              <nav
                className="mb-4 flex items-center gap-2 text-xs text-white/60"
                aria-label="Breadcrumb"
              >
                <a
                  href="/"
                  className="transition-colors hover:text-white"
                >
                  Home
                </a>

                <span>/</span>

                <span className="text-white/90">
                  Request a Quote
                </span>
              </nav>

              <span className="section-label mb-3 block text-accent">
                Personalized Safari Planning
              </span>

              <h1 className="font-display text-hero mb-4 font-bold leading-tight text-white">
                Request a
                <br />
                Safari Quote
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                Every safari we plan is tailored to your travel dates,
                group size, accommodation preferences and interests. Fill
                in the form below and our team will prepare a personalized
                quotation for you.
              </p>
            </div>
          </div>
        </section>

        {/* Form section */}
        <section
          className="bg-background py-14 sm:py-16"
          aria-labelledby="quote-form-heading"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="mb-8">
              <h2
                id="quote-form-heading"
                className="font-display mb-3 text-2xl font-bold text-foreground sm:text-3xl"
              >
                Tell Us About Your Ideal Uganda Safari
              </h2>

              <p className="text-sm leading-relaxed text-muted-foreground">
                The more detail you provide, the more accurate and tailored
                your quotation will be. Fields marked with{' '}
                <span className="text-red-500">*</span> are required.
              </p>
            </div>

            <QuoteRequestForm
              preselectedPackage={preselectedPackage}
            />
          </div>
        </section>

        {/* Why quote section */}
        <section
          className="border-t border-border bg-muted py-12"
          aria-labelledby="why-quote-heading"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2
              id="why-quote-heading"
              className="font-display mb-6 text-center text-2xl font-bold text-foreground"
            >
              Why We Quote Rather Than List Prices
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  icon: '🗓️',
                  title: 'Travel Dates Matter',
                  desc: 'Safari costs vary by season, park availability and accommodation occupancy. A quote ensures you get accurate pricing for your specific dates.',
                },
                {
                  icon: '👥',
                  title: 'Group Size Varies',
                  desc: 'Whether you are travelling solo, as a couple or in a group, your safari can be structured and priced to suit your party perfectly.',
                },
                {
                  icon: '🏕️',
                  title: 'Accommodation Choice',
                  desc: 'From budget camping to luxury lodges, your accommodation preference significantly shapes the experience and the cost.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-5 text-center"
                >
                  <span className="mb-3 block text-3xl">
                    {item.icon}
                  </span>

                  <h3 className="font-display mb-2 text-base font-bold text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <WhatsAppFloat />
    </>
  );
}

export default function RequestAQuotePage() {
  return (
    <Suspense
      fallback={
        <>
          <Header />

          <main className="flex min-h-screen items-center justify-center">
            <div className="text-muted-foreground">
              Loading...
            </div>
          </main>
        </>
      }
    >
      <QuotePageContent />
    </Suspense>
  );
}
