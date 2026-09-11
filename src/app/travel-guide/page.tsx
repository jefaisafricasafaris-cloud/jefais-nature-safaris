import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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

      <main className="bg-[#eef2e8] text-gray-900">

        {/* HERO */}
        <section className="relative min-h-[520px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/uganda-travel-guide.webp"
              alt="Uganda Travel Guide"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-950/45 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
            <div className="max-w-4xl text-white">

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
                JE FAIS NATURE SAFARIS LTD
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Uganda Travel Guide
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
                Helpful information to help you understand Uganda’s safari
                destinations and plan your travel experience.
              </p>

              <Link
                href="/request-a-quote"
                className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-bold text-green-950 shadow-lg transition hover:bg-green-50 hover:shadow-xl"
              >
                PLAN MY SAFARI
              </Link>

            </div>
          </div>
        </section>

        {/* START EXPLORING */}
        <section className="bg-gradient-to-b from-[#eef2e8] via-[#e5ecdf] to-[#d8e5d4]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-green-800">
                Start Exploring
              </p>

              <h2 className="mt-3 text-3xl font-bold text-green-950 sm:text-4xl">
                Explore Uganda with JE FAIS Nature Safaris
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-700">
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
                  className="group rounded-2xl border border-green-900/10 bg-white/75 p-7 shadow-md backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-4 h-1 w-12 rounded-full bg-emerald-700 transition-all duration-300 group-hover:w-20" />

                  <h3 className="text-2xl font-bold text-green-950 transition group-hover:text-green-800">
                    {guide.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-700">
                    {guide.text}
                  </p>

                  <span className="mt-5 inline-block font-bold text-green-800 transition group-hover:text-emerald-700">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* QUOTE CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-emerald-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.18),transparent_45%)]" />

          <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:px-8">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Plan Your Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Need help planning your trip?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-100">
              Read about the experiences, understand the journey and then send
              us your trip requirements for a personalized quotation.
            </p>

            <Link
              href="/request-a-quote"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-green-950 shadow-lg transition hover:bg-green-50 hover:shadow-xl"
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
