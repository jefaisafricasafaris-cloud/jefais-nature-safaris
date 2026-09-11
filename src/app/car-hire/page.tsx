
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Car Hire in Uganda | JE FAIS Nature Safaris',
  description:
    'Explore Uganda with flexible vehicle hire and safari transportation options from JE FAIS Nature Safaris.',
};

const services = [
  {
    title: 'Safari Transportation',
    description:
      'Transportation support for wildlife safaris, national park visits and multi-day journeys.',
  },
  {
    title: 'Private Travel',
    description:
      'Plan a private journey around Uganda with transportation arranged around your itinerary.',
  },
  {
    title: 'Airport Transfers',
    description:
      'Transportation support for arrivals, departures and connecting your airport journey with your trip.',
  },
  {
    title: 'Custom Trips',
    description:
      'Tell us where you want to go and what your journey involves so we can discuss suitable transport arrangements.',
  },
];

export default function CarHirePage() {
  return (
    <>
      <Header />

      <main className="bg-[#eef2e8] text-gray-900">

        {/* HERO */}
        <section className="relative min-h-[520px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/fleet20.webp"
              alt="Safari vehicles and car hire transportation in Uganda"
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
                Car Hire & Safari Transportation in Uganda
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
                Arrange transportation for your Uganda journey, whether you are
                planning a safari, city experience, airport transfer or custom
                trip.
              </p>

              <Link
                href="/request-a-quote"
                className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-bold text-green-950 shadow-lg transition hover:bg-green-50"
              >
                ENQUIRE ABOUT CAR HIRE
              </Link>

            </div>
          </div>
        </section>

        {/* TRANSPORT SERVICES */}
        <section className="bg-gradient-to-b from-[#eef2e8] via-[#e5ecdf] to-[#d8e5d4]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-green-800">
                Transport Services
              </p>

              <h2 className="mt-3 text-3xl font-bold text-green-950 sm:text-4xl">
                Transportation for your Uganda journey
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-700">
                Your transportation requirements can vary depending on your
                itinerary, destinations, group size and activities. Contact our
                team with your trip details so we can discuss the appropriate
                arrangements.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-green-900/10 bg-white/75 p-7 shadow-md backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-4 h-1 w-12 rounded-full bg-emerald-700 transition-all duration-300 group-hover:w-20" />

                  <h3 className="text-2xl font-bold text-green-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-700">
                    {service.description}
                  </p>
                </article>
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
              Tell us about your journey
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-100">
              Share your dates, destinations, number of travellers and
              transportation requirements. Our team will respond with
              arrangements suited to your request.
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

