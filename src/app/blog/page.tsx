
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Remembering King Oyo: Tooro Culture, Tourism & Conservation",
  description:
    "Remembering King Oyo Nyimba and exploring Tooro culture, Uganda tourism, environmental conservation, climate change and responsible travel.",
  keywords: [
    "King Oyo",
    "King Oyo Nyimba",
    "Tooro Kingdom",
    "Tooro tourism",
    "Fort Portal tourism",
    "Uganda cultural tourism",
    "sustainable tourism Uganda",
    "Uganda conservation",
    "climate change Uganda",
  ],
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#10261c] text-[#243128]">

      {/* =========================================================
          ARTICLE HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#10261c] text-white">

        <div className="absolute inset-0">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-700/20 blur-3xl" />

          <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#c7a75b]/10 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,167,91,0.12),transparent_35%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8 lg:py-28">

          <div className="max-w-5xl">

            <div className="mb-7 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]">

              <span className="rounded-full border border-[#c7a75b]/50 bg-[#c7a75b]/10 px-4 py-2 text-[#e2c77d]">
                Culture & Conservation
              </span>

              <span className="text-white/30">•</span>

              <span className="text-emerald-200/80">
                Uganda
              </span>

            </div>

            <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#fffdf7] sm:text-5xl lg:text-6xl xl:text-7xl">
              Remembering King Oyo: A Legacy of Tooro Culture, Tourism and
              Environmental Conservation
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#d9e3dc] sm:text-xl">
              A respectful tribute to a remarkable Ugandan cultural leader,
              and a reflection on culture, tourism, conservation and the future
              of western Uganda.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-6 text-sm text-white/60">

              <span className="font-medium text-white/85">
                By Je Fais Nature Safaris Ltd
              </span>

              <span className="text-white/20">•</span>

              <span>Uganda</span>

              <span className="text-white/20">•</span>

              <span>Culture & Conservation</span>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          HERO IMAGE
      ========================================================= */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="-mt-10 overflow-hidden rounded-[1.5rem] border border-[#365344] bg-[#173326] shadow-[0_25px_70px_rgba(0,0,0,0.30)] sm:-mt-14">

          <div className="relative aspect-[16/8] w-full bg-[#173326]">

            <Image
              src="/images/oyo.webp"
              alt="King Oyo Nyimba and the Tooro Kingdom legacy in Uganda tourism and conservation"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          </div>

        </div>

      </section>

      {/* =========================================================
          ARTICLE AREA
      ========================================================= */}
      <section className="mt-0 bg-[#f4efe3]">

        <article className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_220px]">

            {/* ===================================================
                ARTICLE CONTENT
            =================================================== */}
            <div className="min-w-0">

              <div
                className="
                  prose
                  prose-lg
                  max-w-none

                  prose-headings:font-serif
                  prose-headings:font-semibold
                  prose-headings:tracking-tight
                  prose-headings:text-[#18382a]

                  prose-h2:mb-5
                  prose-h2:mt-14
                  prose-h2:text-3xl
                  prose-h2:leading-tight

                  prose-p:mb-7
                  prose-p:text-[17px]
                  prose-p:leading-[1.95]
                  prose-p:text-[#4d574f]

                  prose-strong:text-[#18382a]

                  prose-a:text-[#176b4a]
                  prose-a:no-underline
                  hover:prose-a:underline
                "
              >

                <h2>
                  A respectful tribute to a remarkable Ugandan cultural leader
                </h2>

                <p>
                  The passing of His Majesty King Oyo Nyimba Kabamba Iguru Rukidi
                  IV is a deeply painful moment for the people of Tooro, Uganda
                  and many people around the world who followed his extraordinary
                  journey from a three-year-old king to a respected cultural
                  leader.
                </p>

                <p>
                  King Oyo died on 27 August 2026 at the age of 34 while receiving
                  treatment in the United States. His return to Uganda and the
                  preparations for his burial have brought national attention to
                  the history, culture and identity of the Tooro Kingdom. He is
                  scheduled to be laid to rest at the Karambi Royal Tombs in Fort
                  Portal on 12 September 2026.
                </p>

                <p>
                  At Je Fais Nature Safaris, we believe that remembering King Oyo
                  should go beyond mourning. It should also be an opportunity to
                  reflect on the importance of preserving Uganda&apos;s cultural
                  heritage, protecting our natural environment and developing
                  tourism that benefits local communities.
                </p>

                <h2>King Oyo and the story of Tooro</h2>

                <p>
                  King Oyo became the Omukama of Tooro in 1995 at only three years
                  old, making him internationally known as one of the world&apos;s
                  youngest reigning monarchs. Over the years, his journey became
                  closely connected with the identity and public image of Tooro.
                </p>

                <p>
                  Although Uganda&apos;s traditional kingdoms do not exercise
                  constitutional political power, they remain important cultural
                  institutions. For visitors, Tooro offers an opportunity to
                  experience a part of Uganda&apos;s history through its
                  traditions, landscapes, communities and cultural heritage.
                </p>

                <h2>A legacy that connects culture and tourism</h2>

                <p>
                  Tooro is much more than a royal institution. It is part of a
                  remarkable tourism landscape in western Uganda.
                </p>

                <p>
                  Fort Portal and the surrounding region provide access to crater
                  lakes, tea-growing landscapes, cultural experiences and some of
                  Uganda&apos;s most important protected areas. Kibale National
                  Park is internationally known for chimpanzee tracking and
                  primate experiences, while Queen Elizabeth National Park,
                  Semuliki National Park and the Rwenzori Mountains add
                  exceptional wildlife, landscape and adventure opportunities.
                </p>

                <p>
                  For tourism to remain meaningful, however, visitors must be
                  encouraged to understand and respect the people, history and
                  cultures of the destinations they visit. Cultural tourism can
                  create opportunities for local guides, accommodation providers,
                  craftspeople, farmers, drivers, artists and community groups.
                </p>

                <h2>King Oyo&apos;s environmental and climate message</h2>

                <p>
                  One of the most important parts of King Oyo&apos;s public legacy
                  was his interest in environmental conservation and climate
                  change. His 2022 Rwenzori expedition drew attention to climate
                  change, global warming and environmental protection.
                </p>

                <p>
                  That message remains especially relevant today. Uganda&apos;s
                  forests, wetlands, mountains, lakes and wildlife are not only
                  beautiful attractions; they support communities and livelihoods.
                </p>

                <p>
                  As tourism professionals, we believe that protecting nature
                  must be part of the tourism experience. A successful safari
                  should not simply take visitors to see wildlife. It should also
                  encourage responsible behaviour, support conservation and
                  create value for communities living around tourism destinations.
                </p>

                {/* =================================================
                    HIGHLIGHT QUOTE
                ================================================= */}
                <div className="my-12 rounded-2xl border border-[#d8ccb0] bg-[#ebe3d1] px-7 py-8 shadow-sm sm:px-9">

                  <div className="mb-4 h-1 w-12 rounded-full bg-[#a9853f]" />

                  <p className="mb-0 font-serif text-xl font-medium leading-9 text-[#244333] sm:text-2xl">
                    “The best way to honour a cultural legacy is to ensure that
                    future generations can experience it.”
                  </p>

                </div>

                <h2>
                  From mourning to action: protecting Uganda&apos;s heritage
                </h2>

                <p>
                  The best way to honour a cultural legacy is to ensure that
                  future generations can experience it.
                </p>

                <p>
                  This means protecting historical and cultural sites, supporting
                  local communities, encouraging responsible tourism, planting and
                  protecting trees, reducing unnecessary waste, respecting
                  wildlife and promoting tourism businesses that create positive
                  local impact.
                </p>

                <p>
                  At Je Fais Nature Safaris, we believe tourism should connect
                  people with Uganda while contributing to conservation and
                  community development. We are particularly passionate about
                  experiences that combine adventure, culture, nature and
                  learning.
                </p>

                <h2>Why responsible tourism matters in western Uganda</h2>

                <p>
                  Western Uganda has extraordinary potential to become an even
                  stronger destination for cultural and nature-based tourism. The
                  region brings together the Rwenzori Mountains, crater lakes,
                  forests, primates, wildlife, agriculture and living cultural
                  traditions.
                </p>

                <p>
                  Travellers can contribute positively by choosing locally
                  operated tourism services, hiring local guides, buying genuine
                  local products, respecting cultural practices, following park
                  regulations and supporting community conservation initiatives.
                </p>

                <p>
                  Tourism is strongest when the people who live in a destination
                  are not simply spectators but active participants and
                  beneficiaries.
                </p>

                <h2>A personal reflection from Je Fais Nature Safaris</h2>

                <p>
                  As a Ugandan tourism company, Je Fais Nature Safaris joins the
                  people of Tooro in mourning the passing of King Oyo.
                </p>

                <p>
                  Our connection to tourism is not only about taking visitors from
                  one attraction to another. We believe tourism is a bridge
                  between people, culture, nature and opportunity.
                </p>

                <p>
                  As someone passionate about Uganda&apos;s tourism, environmental
                  sustainability and climate action—and also as a football and
                  Arsenal supporter who believes in leadership, teamwork and
                  legacy—I see King Oyo&apos;s story as a reminder that influence
                  is not measured only by the length of a person&apos;s life. It is
                  also measured by the ideas, people and causes they inspire.
                </p>

                <p>
                  May his legacy encourage young Ugandans to protect our culture,
                  conserve our environment and build a tourism industry that
                  benefits both visitors and communities.
                </p>

                <h2>Looking ahead</h2>

                <p>
                  King Oyo&apos;s passing is a moment of sadness, but it can also
                  become a moment of reflection.
                </p>

                <p>
                  Tooro&apos;s cultural heritage deserves to be preserved.
                  Uganda&apos;s natural resources deserve protection. Communities
                  deserve meaningful opportunities from tourism. And future
                  generations deserve to inherit a country whose culture, forests,
                  mountains, wildlife and traditions have been valued.
                </p>

                <p>
                  At Je Fais Nature Safaris, we remain committed to responsible
                  travel and to showcasing Uganda as a destination where
                  adventure, culture, conservation and community can come together.
                </p>

              </div>

              {/* =================================================
                  FINAL TRIBUTE
              ================================================= */}
              <div className="mt-14 overflow-hidden rounded-3xl border border-[#d8ccb0] bg-[#ebe3d1] shadow-sm">

                <div className="h-1.5 bg-gradient-to-r from-[#18382a] via-[#a9853f] to-[#18382a]" />

                <div className="px-7 py-9 sm:px-10 sm:py-11">

                  <p className="font-serif text-2xl font-semibold leading-9 text-[#18382a] sm:text-3xl">
                    Rest in peace, His Majesty King Oyo Nyimba Kabamba Iguru
                    Rukidi IV.
                  </p>

                  <p className="mt-5 max-w-3xl text-base leading-8 text-[#59635b] sm:text-lg">
                    May his legacy continue to inspire the protection of
                    Tooro&apos;s culture, Uganda&apos;s environment and the future
                    of responsible tourism.
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                ARTICLE SIDEBAR
            ================================================= */}
            <aside className="hidden lg:block">

              <div className="sticky top-28">

                <div className="border-l border-[#d5cbb7] pl-6">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a9853f]">
                    In this article
                  </p>

                  <div className="mt-5 space-y-4 text-sm leading-6 text-[#687168]">

                    <p className="font-medium text-[#234332]">
                      King Oyo and Tooro
                    </p>

                    <p>Culture and tourism</p>

                    <p>Environmental conservation</p>

                    <p>Responsible tourism</p>

                    <p>Western Uganda</p>

                    <p>Looking ahead</p>

                  </div>

                </div>

              </div>

            </aside>

          </div>

        </article>

      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden border-t border-[#294638] bg-[#10261c] text-white">

        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-700/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#c7a75b]/10 blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-20 text-center lg:px-8 lg:py-24">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b96a]">
            Explore Uganda Responsibly
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Experience Uganda through culture, nature and adventure
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#cbd8d0] sm:text-lg">
            Discover Uganda with a tourism experience that connects wildlife,
            culture, conservation and local communities.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/request-a-quote"
              className="rounded-full bg-[#f4efe3] px-8 py-4 text-sm font-bold tracking-wide text-[#18382a] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              REQUEST A QUOTATION
            </Link>

            <Link
              href="/uganda-safaris"
              className="rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-bold tracking-wide text-white transition duration-300 hover:bg-white/10"
            >
              EXPLORE UGANDA SAFARIS
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

