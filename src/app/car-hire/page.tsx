import type { Metadata } from 'next';
import Link from 'next/link';
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

      <main className="bg-white text-gray-900">
        <section className="bg-gradient-to-br from-gray-950 via-green-950 to-green-900">
          <div className="mx-auto max-w-7xl px-6 py-24 text-white sm:px-8 lg:px-12">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              JE FAIS NATURE SAFARIS LTD
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl lg:text-6xl">
              Car Hire & Safari Transportation in Uganda
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
              Arrange transportation for your Uganda journey, whether you are
              planning a safari, city experience, airport transfer or custom
              trip.
            </p>

            <Link
              href="/request-a-quote"
              className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-bold text-green-950 shadow-lg"
            >
              ENQUIRE ABOUT CAR HIRE
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Transport Services
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Transportation for your Uganda journey
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
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
                className="rounded-2xl border border-gray-200 p-7 shadow-sm"
              >
                <h3 className="text-2xl font-bold">{service.title}</h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Tell us about your journey
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Share your dates, destinations, number of travellers and
              transportation requirements. Our team will respond with
              arrangements suited to your request.
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