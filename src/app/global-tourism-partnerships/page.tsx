import Link from "next/link";
const partnerTypes = [
  {
    title: "International Tour Operators",
    text: "Become a trusted sales and distribution partner while we provide destination planning and local operational support in Uganda.",
    icon: "🌍",
  },
  {
    title: "Travel Agencies & Consultants",
    text: "Build customized Uganda journeys around your clients' dates, interests, accommodation preferences and travel style.",
    icon: "✈️",
  },
  {
    title: "Destination Management Companies",
    text: "Work with a dependable Uganda-based partner for destination products, booking coordination and local operations.",
    icon: "🤝",
  },
  {
    title: "Educational & Student Tourism",
    text: "Create meaningful educational journeys including field visits, conservation learning, research and community experiences.",
    icon: "🎓",
  },
  {
    title: "Hotels & Lodges",
    text: "Develop referral relationships and combine accommodation with memorable safari and cultural experiences.",
    icon: "🏨",
  },
  {
    title: "Corporate Travel",
    text: "Coordinate retreats, incentive travel, team experiences, airport transfers and business travel support.",
    icon: "💼",
  },
  {
    title: "NGOs & Conservation",
    text: "Collaborate on conservation, community development, environmental awareness and responsible tourism initiatives.",
    icon: "🌿",
  },
  {
    title: "Marketing & Referral Partners",
    text: "Travel marketers, consultants, bloggers and creators can help introduce more travellers to Uganda.",
    icon: "📣",
  },
];

const reasons = [
  "Local destination expertise",
  "Reliable local operations",
  "Flexible travel solutions",
  "Professional communication",
  "Responsible tourism",
  "Customer-focused service",
  "Long-term relationships",
];

const services = [
  "Customized Uganda safari planning",
  "Gorilla trekking experiences",
  "Chimpanzee trekking experiences",
  "Wildlife safaris",
  "Kampala city & cultural tours",
  "Community tourism experiences",
  "Nature & adventure activities",
  "Airport transfers & travel logistics",
  "Car hire & safari transportation",
  "Accommodation coordination",
  "Student & educational tours",
  "Group & corporate travel",
  "Customized Uganda itineraries",
  "East African travel arrangements",
];

const experiences = [
  "Gorilla trekking in Bwindi",
  "Chimpanzee trekking",
  "Savannah wildlife safaris",
  "Mountains, forests & lakes",
  "The Source of the Nile",
  "Ugandan culture & communities",
  "Adventure & nature experiences",
  "Kampala city experiences",
];

const products = [
  "Luxury safaris",
  "Mid-range safaris",
  "Budget safaris",
  "Gorilla & chimpanzee journeys",
  "Wildlife & nature safaris",
  "Family holidays",
  "Honeymoon journeys",
  "Adventure trips",
  "Student & educational tours",
  "Group tours",
  "Corporate & incentive travel",
  "Private customized journeys",
];

export default function GlobalTourismPartnershipsPage() {
  return (
    <main className="bg-white text-stone-900">
      {/* HERO */}
      <section className="relative min-h-[720px] overflow-hidden bg-stone-950">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
       "url('/images/handshake-world-map-business-partnership-global-cooperation-concept_963414-20044.avif')"
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-4xl text-white">
            <Link
  href="/"
  className="mb-8 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-stone-900"
>
  ← Back to JE FAIS Nature Safaris
</Link>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Global Tourism Partnerships
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Discover the Potential of Uganda.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-stone-200 sm:text-2xl">
              Partner with JE FAIS NATURE SAFARIS and connect your clients
              with authentic, professionally organized experiences across
              Uganda and East Africa.
            </p>

            <div className="mt-10 border-l-2 border-amber-400 pl-6">
              <p className="text-2xl font-medium italic text-white sm:text-3xl">
                “Let&apos;s Take African Travel Further — Together.”
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#partnership-enquiry"
                className="rounded-full bg-amber-400 px-8 py-4 text-center font-bold text-stone-950 transition hover:bg-amber-300"
              >
                Become a Partner
              </a>

              <a
                href="#partnership-opportunities"
                className="rounded-full border border-white/50 bg-white/10 px-8 py-4 text-center font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Explore Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Our Partnership Vision
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Build a Strong Global Tourism Partnership
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-stone-600">
              <p>
                JE FAIS NATURE SAFARIS LTD is a Uganda-based tourism company
                committed to delivering authentic, well-organized and
                responsible travel experiences.
              </p>

              <p>
                We are looking to build long-term partnerships with tourism
                businesses and organizations around the world that want to
                offer Uganda and East Africa to their clients.
              </p>

              <p>
                Our goal is simple: connect international markets with Uganda
                through reliable local expertise, professional service,
                flexible travel solutions and memorable experiences.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-stone-950 p-8 text-white shadow-2xl sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Our Approach
            </p>

            <p className="mt-6 text-3xl font-semibold leading-tight">
              You bring the market.
              <br />
              We bring the destination.
              <br />
              Together, we create the experience.
            </p>

            <div className="mt-8 h-px bg-white/20" />

            <p className="mt-7 leading-7 text-stone-300">
              We aim to become an extension of your team on the ground in
              Uganda — helping your clients travel with confidence from
              arrival to departure.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE PARTNER WITH */}
      <section className="bg-stone-100 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Who We Work With
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Built for ambitious tourism partners
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              Whether you already sell Africa or are looking to introduce
              Uganda to your clients for the first time, we can explore a
              partnership that fits your business.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerTypes.map((partner) => (
              <div
                key={partner.title}
                className="group rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-4xl">{partner.icon}</div>
                <h3 className="mt-6 text-xl font-bold">{partner.title}</h3>
                <p className="mt-3 leading-7 text-stone-600">
                  {partner.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="bg-stone-950 px-6 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
              Why JE FAIS
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              A local partner you can rely on.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-300">
              Strong international partnerships begin with dependable local
              expertise, communication and execution.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <div
                key={reason}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 font-bold text-stone-950">
                  {index + 1}
                </span>
                <span className="font-semibold">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Our Capabilities
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              What We Can Provide
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 text-amber-500">✦</div>
                <p className="font-semibold leading-6">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP OPPORTUNITIES */}
      <section
        id="partnership-opportunities"
        className="bg-stone-100 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Collaboration
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Partnership Opportunities
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-600">
              Different markets need different solutions. Let&apos;s create a
              partnership model that works for your organization.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {partnerTypes.map((partner, index) => (
              <div
                key={partner.title}
                className="rounded-3xl bg-white p-8 shadow-sm sm:p-10"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-stone-950 font-bold text-amber-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-2xl font-bold">{partner.title}</h3>
                    <p className="mt-4 leading-7 text-stone-600">
                      {partner.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGANDA EXPERIENCES */}
      <section className="bg-stone-950 px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
              The Destination
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              What Your Clients Can Experience in Uganda
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((experience) => (
              <div
                key={experience}
                className="group relative min-h-44 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7"
              >
                <div className="absolute right-5 top-5 text-amber-300 transition group-hover:scale-125">
                  ↗
                </div>
                <div className="flex h-full items-end">
                  <h3 className="text-xl font-bold">{experience}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
                Product Development
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Travel Products We Can Develop Together
              </h2>

              <p className="mt-6 text-lg leading-8 text-stone-600">
                From premium private journeys to student and corporate travel,
                we can shape experiences around your market and your clients.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {products.map((product) => (
                <div
                  key={product}
                  className="flex items-center gap-3 rounded-xl bg-stone-100 px-5 py-4"
                >
                  <span className="text-amber-600">✓</span>
                  <span className="font-semibold">{product}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER BENEFITS */}
      <section className="bg-amber-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
              Partner Benefits
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Designed for sustainable B2B relationships
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Competitive partner rates, where agreed",
              "Customized travel packages",
              "Local operational support",
              "Dedicated partner communication",
              "Flexible itinerary development",
              "Destination & logistics knowledge",
              "Reliable transportation coordination",
              "Accommodation coordination",
              "Client support during travel",
              "Co-marketing opportunities where appropriate",
              "Long-term collaboration opportunities",
              "Referral or commission arrangements where mutually agreed",
            ].map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-amber-200 bg-white p-6"
              >
                <span className="text-xl text-amber-600">✓</span>
                <p className="mt-3 font-semibold leading-6">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-white p-7 text-stone-600 shadow-sm sm:p-9">
            <p className="leading-8">
              Commercial terms, including net rates, commissions, payment
              schedules, cancellation terms and other B2B conditions, will be
              agreed with each partner according to the nature and volume of
              the partnership.
            </p>
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
            Our Partnership Promise
          </p>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            An extension of your team on the ground in Uganda.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-600">
            We believe successful partnerships are built on trust,
            communication, accountability, quality service and shared growth.
            Our aim is to give you confidence that your clients are being
            handled professionally from arrival until the end of their journey.
          </p>
        </div>
      </section>

      {/* GLOBAL VISION */}
      <section className="bg-stone-100 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-stone-950 p-8 text-white sm:p-12 lg:p-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
            Our Global Vision
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            Connecting global travellers with authentic Uganda.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-stone-300">
            Our vision is to build a respected international network of
            tourism partners connecting travellers from Africa, Europe, North
            America, South America, Asia, Australia and the Middle East with
            authentic experiences in Uganda and East Africa.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-stone-300">
            We want to grow globally while preserving the local identity,
            communities, wildlife and natural environment that make Uganda
            special.
          </p>
        </div>
      </section>

      {/* BIG STATEMENT */}
      <section className="bg-amber-400 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-4xl font-black uppercase leading-tight tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
            You Bring the Market.
            <br />
            We Bring the Destination.
            <br />
            Together, We Create the Experience.
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-8 text-stone-800">
            Let&apos;s work together to introduce more travellers to Uganda
            and create tourism experiences that benefit our clients, our
            partners and local communities.
          </p>
        </div>
      </section>

      {/* ENQUIRY */}
      <section
        id="partnership-enquiry"
        className="px-6 py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              Start a Conversation
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Become a JE FAIS NATURE SAFARIS Partner
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              Tell us about your organization, your market and the kind of
              partnership you are looking for.
            </p>

            <div className="mt-10 rounded-3xl bg-stone-950 p-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Partnership Contact
              </p>

              <p className="mt-5 leading-7 text-stone-300">
                Our partnership team can discuss your market, preferred
                products, client profile and potential collaboration model.
              </p>

              <p className="mt-5 font-semibold text-white">
                Kampala, Uganda
              </p>
            </div>
          </div>

          <form className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-xl sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold">
                  Organization / Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-500"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Country</label>
                <input
                  type="text"
                  name="country"
                  className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-500"
                  placeholder="Country"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Website</label>
                <input
                  type="url"
                  name="website"
                  className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-500"
                  placeholder="https://"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Contact Person
                </label>
                <input
                  type="text"
                  name="contact"
                  className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-500"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-500"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-500"
                  placeholder="+256..."
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Type of Business
                </label>
                <select
                  name="businessType"
                  className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-amber-500"
                >
                  <option value="">Select</option>
                  <option>Tour Operator</option>
                  <option>Travel Agency</option>
                  <option>DMC</option>
                  <option>Hotel / Lodge</option>
                  <option>Educational Institution</option>
                  <option>Corporate Travel</option>
                  <option>NGO / Conservation</option>
                  <option>Marketing / Content</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Target Market
                </label>
                <input
                  type="text"
                  name="market"
                  className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-500"
                  placeholder="e.g. Europe, USA, Asia"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold">
                  Proposed Partnership
                </label>
                <textarea
                  name="partnership"
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-500"
                  placeholder="Tell us what you have in mind..."
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold">
                  Destinations or Products You Currently Sell
                </label>
                <textarea
                  name="products"
                  rows={3}
                  className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-500"
                  placeholder="Tell us about your current travel products..."
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold">
                  Estimated Client / Group Volume
                  <span className="ml-2 font-normal text-stone-400">
                    Optional
                  </span>
                </label>
                <input
                  type="text"
                  name="volume"
                  className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-500"
                  placeholder="Optional"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-stone-950 px-8 py-4 font-bold text-white transition hover:bg-stone-800"
            >
              Submit Partnership Enquiry →
            </button>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-stone-950 px-6 py-24 text-center text-white lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
            JE FAIS NATURE SAFARIS LTD
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-6xl">
            Local Expertise.
            <br />
            Global Partnerships.
            <br />
            Unforgettable Experiences.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-300">
            Let&apos;s take African travel further together and introduce more
            travellers to the extraordinary experiences of Uganda.
          </p>

          <a
            href="#partnership-enquiry"
            className="mt-9 inline-flex rounded-full bg-amber-400 px-9 py-4 font-bold text-stone-950 transition hover:bg-amber-300"
          >
            Start a Partnership Conversation
          </a>
        </div>
      </section>
    </main>
  );
}
