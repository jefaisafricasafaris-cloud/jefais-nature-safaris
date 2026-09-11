
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Jinja Tours in Uganda | JE FAIS Nature Safaris',
  description:
    'Discover Jinja, the adventure capital of Uganda, with cultural experiences, Nile activities, sightseeing and memorable day tours.',
};

const experiences = [
  {
    title: 'Source of the Nile',
    description:
      'Explore one of Uganda’s most famous attractions and enjoy the scenery around the Nile.',
  },
  {
    title: 'Jinja City Experience',
    description:
      'Discover the history, culture, streets and character of Jinja with a guided city experience.',
  },
  {
    title: 'Nile Experiences',
    description:
      'Enjoy the natural beauty and adventure opportunities around the River Nile.',
  },
  {
    title: 'Cultural Experiences',
    description:
      'Connect with local communities, traditions, stories and everyday life around Jinja.',
  },
];

export default function JinjaToursPage() {
  return (
    <>
      <Header />

      <main className="bg-[#eef2e8] text-gray-900">

        {/* HERO */}
        <section className="relative min-h-[520px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Wildwaters-Lodge-14-1-1.webp"
              alt="Wildwaters Lodge and the River Nile in Jinja, Uganda"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 bg-gradient-to-r from-green-950/80 via-green-950/35 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
            <div className="max-w-3xl text-white">

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
                JE FAIS NATURE SAFARIS LTD
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Jinja Tours & Experiences
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-green-50">
                Discover Jinja, the adventure capital of Uganda, through
                cultural experiences, Nile attractions, sightseeing and
                memorable day tours.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/request-a-quote"
                  className="rounded-full bg-white px-7 py-3.5 font-bold text-green-900 shadow-lg transition hover:bg-green-50"
                >
                  REQUEST A QUOTATION
                </Link>

                <Link
                  href="/uganda-safaris"
                  className="rounded-full border border-white/60 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  VIEW UGANDA SAFARIS
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* EXPERIENCES */}
        <section className="bg-gradient-to-b from-[#eef2e8] via-[#e5ecdf] to-[#dce7d7]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-green-800">
                Explore Jinja
              </p>

              <h2 className="mt-3 text-3xl font-bold text-green-950 sm:text-4xl">
                Experience the beauty of the Nile
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-700">
                Jinja offers a combination of history, culture, nature and
                adventure. Let our team help you plan an experience that matches
                your interests and available time.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {experiences.map((experience) => (
                <article
                  key={experience.title}
                  className="rounded-2xl border border-green-900/10 bg-white/80 p-6 shadow-md backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-4 h-1 w-12 rounded-full bg-emerald-700" />

                  <h3 className="text-xl font-bold text-green-950">
                    {experience.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-700">
                    {experience.description}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* QUOTE CTA */}
        <section className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-900">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Plan Your Experience
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Tell us what you would like to experience in Jinja
                </h2>

                <p className="mt-5 leading-8 text-green-100">
                  Share your preferred dates, number of travellers and the
                  experiences you are interested in. Our team will prepare a
                  personalized quotation based on your trip requirements.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-8 text-white shadow-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold">
                  Ready to plan your Jinja experience?
                </h3>

                <p className="mt-3 leading-7 text-green-100">
                  Submit your trip details and let JE FAIS Nature Safaris help
                  you plan your journey.
                </p>

                <Link
                  href="/request-a-quote"
                  className="mt-6 inline-block rounded-full bg-white px-7 py-3.5 font-bold text-green-950 shadow-lg transition hover:bg-green-50 hover:shadow-xl"
                >
                  GET MY SAFARI QUOTE
                </Link>
              </div>

            </div>

          </div>
        </section>

      </main>

      <WhatsAppFloat />
    </>
  );
}

