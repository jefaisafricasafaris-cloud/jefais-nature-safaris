import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default function ChimpanzeeTrekkingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden bg-emerald-950">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/chimpanzee-kibale-q80.webp')",
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 py-20 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Kibale National Park
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Chimpanzee Trekking
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Track chimpanzees through the ancient rainforest of Kibale
              National Park and experience one of Uganda&apos;s most memorable
              primate encounters.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-emerald-600 px-7 py-3.5 font-semibold text-white transition hover:bg-emerald-500"
              >
                Request a Quote
              </Link>

              <Link
                href="/wildlife-safaris"
                className="rounded-full border border-white/70 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-emerald-950"
              >
                Explore Wildlife Safaris
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              The Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Into the rainforest in search of chimpanzees
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Kibale National Park is one of Uganda&apos;s premier destinations
              for primate experiences. Walk beneath the rainforest canopy with
              experienced guides while listening for the calls and movement of
              chimpanzees in the forest.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Chimpanzee trekking combines wildlife, rainforest scenery and
              fascinating primate encounters, making it an excellent addition
              to a Uganda safari.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-50 p-7">
            <h3 className="text-xl font-bold text-emerald-950">
              Why choose this experience?
            </h3>

            <ul className="mt-5 space-y-4 text-slate-700">
              <li>✓ Chimpanzee tracking in Kibale Forest</li>
              <li>✓ Experienced local guides</li>
              <li>✓ Incredible rainforest scenery</li>
              <li>✓ Excellent primate-watching opportunities</li>
              <li>✓ Can be combined with other Uganda safari experiences</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Highlights
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              What to expect
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-3xl">🐒</div>
              <h3 className="mt-5 text-xl font-bold">
                Chimpanzee Tracking
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Follow forest trails in search of chimpanzees and other
                fascinating primates.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-3xl">🌿</div>
              <h3 className="mt-5 text-xl font-bold">
                Kibale Rainforest
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Experience the atmosphere and biodiversity of one of Uganda&apos;s
                most remarkable forests.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-3xl">📸</div>
              <h3 className="mt-5 text-xl font-bold">
                Wildlife & Photography
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Enjoy opportunities to observe and photograph wildlife during
                your rainforest adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="bg-emerald-950">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Plan Your Uganda Adventure
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to explore Kibale?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Tell us when you would like to travel and what you want to
            experience. JE FAIS NATURE SAFARIS will help you plan your
            chimpanzee trekking adventure and prepare a personalized quote.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-emerald-950 transition hover:bg-emerald-100"
            >
              Request Your Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}