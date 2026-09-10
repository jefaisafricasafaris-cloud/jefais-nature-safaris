import React from 'react';
import Header from '@/components/Header';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactForm from '@/app/contact/components/ContactForm';
import ContactInfo from '@/app/contact/components/ContactInfo';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Book a Safari | Je Fais Nature Safaris Uganda',
  description: 'Contact Je Fais Nature Safaris to plan your Uganda safari. Call 0774 729464, WhatsApp us, or send an enquiry. Kampala and Entebbe Airport opposite Total, Plot 5 De Winton Street, Kampala, Uganda.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <section className="py-14 sm:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
         <WhatsAppFloat />
    </>
  );
}
