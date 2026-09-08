
import Link from "next/link";

const internshipAreas = [
  {
    title: "Safari Operations",
    description:
      "Gain practical experience in the planning, coordination and delivery of memorable safari experiences across Uganda.",
    icon: "🦁",
  },
  {
    title: "Tourism & Hospitality",
    description:
      "Understand guest relations, itinerary coordination, hospitality standards and the professional side of tourism.",
    icon: "🏨",
  },
  {
    title: "Wildlife & Conservation",
    description:
      "Learn about Uganda's wildlife destinations, conservation efforts and responsible tourism practices.",
    icon: "🌿",
  },
  {
    title: "Marketing & Digital Tourism",
    description:
      "Develop practical knowledge of tourism marketing, digital communication, destination promotion and customer engagement.",
    icon: "🌍",
  },
  {
    title: "Tour Guiding",
    description:
      "Discover how professional guides create safe, informative and memorable experiences for international travellers.",
    icon: "🧭",
  },
  {
    title: "Travel Planning",
    description:
      "Learn how safari itineraries are researched, designed and coordinated around guest interests and destinations.",
    icon: "🗺️",
  },
];

const benefits = [
  "Practical exposure to Uganda's tourism industry",
  "Experience working around real safari operations",
  "Understanding of wildlife, conservation and responsible tourism",
  "Professional tourism and hospitality skills",
  "Guidance from experienced tourism professionals",
  "Opportunity to build confidence and workplace experience",
];

export const metadata = {
  title: "Tourism Internships in Uganda | JE FAIS Nature Safaris",
  description:
    "Explore tourism and safari internship opportunities with JE FAIS Nature Safaris in Uganda. Gain practical experience in safari operations, wildlife, conservation, hospitality, guiding and tourism marketing.",
  keywords: [
    "tourism internship Uganda",
    "safari internship Uganda",
    "tourism internships",
    "wildlife internship Uganda",
    "hospitality internship Uganda",
    "travel internship Uganda",
    "safari company internship",
    "JE FAIS Nature Safaris internship",
  ],
};

export default function InternshipsPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      {/* HERO */}
      <section
        className="relative min-h-[720px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(12, 18, 12, 0.92) 0%, rgba(12, 18, 12, 0.72) 42%, rgba(12, 18, 12, 0.30) 100%), url('/images/tourism-internship-uganda.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <Link
              href="/"
              className="mb-10 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-stone-900"
            >
              ← Back to JE FAIS Nature Safaris
            </Link>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Tourism Internship Opportunities
            </p>

            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-8xl">
              Learn. Explore.
              <br />
              <span className="text-amber-300">Experience Uganda.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">
              Build practical experience in Uganda's tourism industry while
              discovering the world of safaris, wildlife, conservation,
              hospitality and responsible travel with JE FAIS Nature Safaris.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-4 font-bold text-stone-950 transition hover:bg-amber-300"
              >
                Enquire About an Internship →
              </Link>

              <Link
                href="#opportunities"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-stone-950"
              >
                Explore Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24 text-stone-900">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
                Learn Through Experience
              </p>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Turn your passion for tourism into practical experience.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-stone-600">
              <p>
                JE FAIS Nature Safaris provides an opportunity for students
                and aspiring tourism professionals to gain practical exposure
                to Uganda's exciting travel and safari industry.
              </p>

              <p>
                Our internship environment connects learning with real-world
                tourism operations, helping interns understand how memorable,
                responsible and professionally delivered safari experiences
                are created.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section id="opportunities" className="bg-stone-100 py-24 text-stone-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Internship Areas
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Explore the world behind every safari.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              Depending on your academic background and internship objectives,
              you can gain exposure to different areas of tourism and safari
              operations.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {internshipAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 text-4xl">{area.icon}</div>

                <h3 className="text-2xl font-bold">{area.title}</h3>

                <p className="mt-4 leading-7 text-stone-600">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIELD EXPERIENCE */}
      <section className="relative overflow-hidden bg-stone-900 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
                Beyond the Classroom
              </p>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Experience Uganda through the eyes of a tourism professional.
              </h2>

              <p className="mt-7 text-lg leading-8 text-stone-300">
                Tourism is more than reading about destinations. It is about
                understanding people, places, wildlife, hospitality and the
                details that turn a journey into an unforgettable experience.
              </p>

              <p className="mt-5 text-lg leading-8 text-stone-300">
                Our internship approach is designed to expose learners to the
                practical side of the tourism industry while encouraging
                professionalism, curiosity and responsible travel.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold">What you can gain</h3>

              <div className="mt-8 space-y-5">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-black text-stone-950">
                      ✓
                    </span>

                    <p className="leading-7 text-stone-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO CAN APPLY */}
      <section className="bg-white py-24 text-stone-900">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
                Who Can Apply
              </p>

              <h2 className="text-4xl font-bold sm:text-5xl">
                For learners ready to discover tourism in the real world.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-stone-600">
              <p>
                Internship opportunities may be suitable for students and
                learners studying tourism, travel, hospitality, wildlife,
                conservation, business, marketing, communications and related
                fields.
              </p>

              <p>
                Tell us about your course, internship requirements, preferred
                dates and areas of interest so we can understand how your
                placement can best fit within our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section id="apply" className="bg-amber-50 py-24 text-stone-900">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="rounded-[2rem] border border-amber-200 bg-white p-8 shadow-xl sm:p-12">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
                Internship Enquiry
              </p>

              <h2 className="text-4xl font-bold sm:text-5xl">
                Start your tourism journey with JE FAIS.
              </h2>

              <p className="mt-6 text-lg leading-8 text-stone-600">
                Interested in an internship? Contact our team with your
                academic background, internship requirements and preferred
                dates. We will review your enquiry and guide you through the
                next steps.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-7 py-4 font-bold text-white transition hover:bg-stone-700"
              >
                Contact JE FAIS →
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 px-7 py-4 font-bold text-stone-900 transition hover:bg-stone-100"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-stone-950 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
            JE FAIS Nature Safaris
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-6xl">
            Your journey into tourism starts here.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-400">
            Learn from experience. Discover Uganda. Build skills that can take
            you further.
          </p>

          <Link
            href="#apply"
            className="mt-10 inline-flex rounded-full bg-amber-400 px-8 py-4 font-bold text-stone-950 transition hover:bg-amber-300"
          >
            Enquire About an Internship →
          </Link>
        </div>
      </section>
    </main>
  );
}
