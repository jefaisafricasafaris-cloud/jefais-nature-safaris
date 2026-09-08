'use client';
import React, { Suspense } from 'react';
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
          className="relative min-h-[45vh] flex items-end bg-dark overflow-hidden"
          aria-label="Request a Quote hero"
        >
          <div
            className="absolute inset-0 z-0"
            style={{ background: 'linear-gradient(135deg, #0d1a0a 0%, #1a3a10 50%, #0d2a08 100%)' }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-36 w-full">
            <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-white/90">Request a Quote</span>
            </nav>
            <span className="section-label text-accent block mb-3">Personalized Safari Planning</span>
            <h1 className="font-display text-hero text-white font-bold leading-tight mb-4">
              Request a<br />Safari Quote
            </h1>
            <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
              Every safari we plan is tailored to your travel dates, group size, accommodation preferences and interests. Fill in the form below and our team will prepare a personalized quotation for you.
            </p>
          </div>
        </section>

        {/* Form section */}
        <section className="py-14 sm:py-16 bg-background" aria-labelledby="quote-form-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <h2 id="quote-form-heading" className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Tell Us About Your Ideal Uganda Safari
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The more detail you provide, the more accurate and tailored your quotation will be. Fields marked with <span className="text-red-500">*</span> are required.
              </p>
            </div>
            <QuoteRequestForm preselectedPackage={preselectedPackage} />
          </div>
        </section>

        {/* Why quote section */}
        <section className="py-12 bg-muted border-t border-border" aria-labelledby="why-quote-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 id="why-quote-heading" className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Why We Quote Rather Than List Prices
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              ]?.map((item) => (
                <div key={item?.title} className="bg-card border border-border rounded-lg p-5 text-center">
                  <span className="text-3xl block mb-3">{item?.icon}</span>
                  <h3 className="font-display text-base font-bold text-foreground mb-2">{item?.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item?.desc}</p>
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
    <Suspense fallback={
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-muted-foreground">Loading...</div>
        </main>
         </>
    }>
      <QuotePageContent />
    </Suspense>
  );
}

