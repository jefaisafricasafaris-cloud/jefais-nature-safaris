
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Student Tours in Uganda | JE FAIS Nature Safaris',
  description:
    'Educational student tours in Uganda combining wildlife, culture, conservation, geography and memorable learning experiences.',
};

const tourAreas = [
  'Wildlife & National Parks',
  'Conservation Experiences',
  'Culture & Heritage',
  'Geography & Environment',
  'Kampala & Urban Experiences',
  'Community & Local Experiences',
];

export default function StudentToursPage() {
  return (
    <>
      <Header />

      <main className="text-gray-900 bg-[#eef2e8]">

        {/* HERO */}
        <section className="relative min-h-[520px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/elephant2.webp"
              alt="Elephant in Uganda"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 bg-gradient-to-r from-green-950/85 via-green-950/40 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
            <div className="max-w-4xl text-white">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
                JE FAIS NATURE SAFARIS LTD
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Student Tours in Uganda
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
                Educational journeys designed to connect students with Uganda’s
                wildlife, culture, conservation, geography and communities.
              </p>

              <Link
                href="/request-a-quote"
                className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-bold text-green-900 shadow-lg transition hover:bg-green-50"
              >
                PLAN A STUDENT TOUR
              </Link>
            </div>
          </div>
        </section>

        {/* LEARNING THROUGH TRAVEL */}
        <section className="bg-gradient-to-b from-[#eef2e8] via-[#e5ecdf] to-[#dce7d7]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-green-800">
                Learning Through Travel
              </p>

              <h2 className="mt-3 text-3xl font-bold text-green-950 sm:text-4xl">
                Turn a journey into a learning experience
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-700">
                Student travel can provide valuable opportunities to learn
                outside the classroom. We can help schools and student groups
                plan experiences around their educational interests.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tourAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-green-900/10 bg-white/80 p-6 shadow-md backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-4 h-1 w-12 rounded-full bg-emerald-700" />

                  <h3 className="text-xl font-bold text-green-950">
                    {area}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-700">
                    Build this area into your group's itinerary according to
                    your educational objectives and available time.
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* QUOTE CTA */}
        <section className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-900">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Plan Your Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Planning a student trip?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-100">
              Send us your preferred dates, group size, interests and
              educational objectives. We will prepare a personalized
              quotation.
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

