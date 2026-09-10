import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Uganda Travel Guide | JE FAIS Nature Safaris',
  description:
    'Plan your Uganda safari with useful travel information about destinations, wildlife, gorilla trekking, chimpanzees and travel planning.',
};

const guides = [
  {
    title: 'Uganda Safaris',
    text: 'Learn about Uganda’s wildlife destinations and safari experiences.',
    href: '/uganda-safaris',
  },
  {
    title: 'Gorilla Trekking',
    text: 'Explore information about gorilla trekking and Uganda’s Bwindi experience.',
    href: '/gorilla-trekking',
  },
  {
    title: 'Chimpanzee Trekking',
    text: 'Discover Kibale and Uganda’s chimpanzee trekking experience.',
    href: '/chimpanzee-trekking',
  },
  {
    title: 'Wildlife Safaris',
    text: 'Explore Uganda’s national parks and wildlife experiences.',
    href: '/wildlife-safaris',
  },
  {
    title: 'National Parks',
    text: 'Discover Uganda’s major wildlife and conservation destinations.',
    href: '/national-parks',
  },
  {
    title: 'Kampala Tours',
    text: 'Explore Kampala and its cultural and city experiences.',
    href: '/kampala-tours',
  },
];

export default function TravelGuidePage() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-900">
        <section className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-800">
          <div className="mx-auto max-w-7xl px-6 py-24 text-white sm:px-8 lg:px-12">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              JE FAIS NATURE SAFARIS LTD
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl lg:text-6xl">
              Uganda Travel Guide
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
              Helpful information to help you understand Uganda’s safari
              destinations and plan your travel experience.
            </p>

            <Link
              href="/request-a-quote"
              className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-bold text-green-950"
            >
              PLAN MY SAFARI
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Start Exploring
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Explore Uganda with JE FAIS Nature Safaris
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Browse our destination and experience pages to learn more about
              the places you can visit and the experiences you can include in
              your Uganda journey.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="group rounded-2xl border border-gray-200 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold group-hover:text-green-800">
                  {guide.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {guide.text}
                </p>

                <span className="mt-5 inline-block font-bold text-green-800">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Need help planning your trip?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Read about the experiences, understand the journey and then send
              us your trip requirements for a personalized quotation.
            </p>

            <Link
              href="/request-a-quote"
              className="mt-8 inline-block rounded-full bg-green-900 px-8 py-4 font-bold text-white"
            >
              REQUEST A QUOTATION
            </Link>
          </div>
        </section>
      </main>

      <WhatsAppFloat />
    </>
  );
}