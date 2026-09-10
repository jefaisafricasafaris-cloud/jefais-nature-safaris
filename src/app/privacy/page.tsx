import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Privacy Policy | JE FAIS Nature Safaris',
  description:
    'Privacy Policy for JE FAIS Nature Safaris LTD.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-900">
        <section className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-800">
          <div className="mx-auto max-w-5xl px-6 py-20 text-white sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              JE FAIS NATURE SAFARIS LTD
            </p>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-green-50">
              Your privacy matters to us. This page explains how information
              submitted through our website may be handled.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
          <div className="space-y-10 leading-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                1. Information We May Receive
              </h2>

              <p className="mt-3">
                When you contact JE FAIS Nature Safaris or submit a quotation
                request, you may provide information such as your name, email
                address, telephone number, travel dates, number of travellers,
                destinations, accommodation preferences and other trip
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                2. How We Use Information
              </h2>

              <p className="mt-3">
                Information you provide may be used to respond to enquiries,
                prepare personalized quotations, communicate about requested
                travel arrangements and provide customer support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                3. Communication
              </h2>

              <p className="mt-3">
                If you contact us through email, telephone, WhatsApp or a
                website form, we may use the contact details you provide to
                respond to your request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                4. Information Security
              </h2>

              <p className="mt-3">
                We take reasonable steps to protect information submitted to
                us. However, no method of transmitting or storing information
                online can be guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                5. Third-Party Services
              </h2>

              <p className="mt-3">
                Our website may use third-party services that support website
                hosting, communication, analytics or other functionality.
                Their handling of information may be governed by their own
                privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                6. Your Choices
              </h2>

              <p className="mt-3">
                If you have questions about information you have submitted to
                JE FAIS Nature Safaris, you can contact us using the details
                provided on our Contact page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                7. Policy Updates
              </h2>

              <p className="mt-3">
                This Privacy Policy may be updated when necessary to reflect
                changes to our website, services or information practices.
              </p>
            </section>
          </div>

          <div className="mt-12 rounded-2xl bg-gray-50 p-7">
            <h2 className="text-xl font-bold text-gray-900">
              Questions about privacy?
            </h2>

            <p className="mt-2 text-gray-600">
              Contact JE FAIS Nature Safaris for questions about information
              submitted through our website.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-block font-bold text-green-800"
            >
              Contact Us →
            </Link>
          </div>
        </section>
      </main>

      <WhatsAppFloat />
    </>
  );
}