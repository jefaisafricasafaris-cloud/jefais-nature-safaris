import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Terms & Conditions | JE FAIS Nature Safaris',
  description:
    'Terms and Conditions for JE FAIS Nature Safaris LTD.',
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-900">
        <section className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-800">
          <div className="mx-auto max-w-5xl px-6 py-20 text-white sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              JE FAIS NATURE SAFARIS LTD
            </p>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Terms & Conditions
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-green-50">
              General terms relating to enquiries, quotations and travel
              arrangements made through JE FAIS Nature Safaris.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
          <div className="space-y-10 leading-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                1. Enquiries and Quotations
              </h2>

              <p className="mt-3">
                Information submitted through our website is used to understand
                your requested trip and prepare a personalized quotation.
                Submitting an enquiry does not by itself constitute a confirmed
                booking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                2. Quotation Details
              </h2>

              <p className="mt-3">
                Quotations are prepared according to the requirements provided
                by the traveller. The final arrangements may depend on
                accommodation availability, permits, park and government
                charges, transportation, fuel, taxes, supplier charges,
                exchange rates and requested changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                3. Availability
              </h2>

              <p className="mt-3">
                Travel arrangements are subject to availability. A quotation
                or enquiry does not guarantee that accommodation, permits,
                transportation or activities will remain available until a
                booking has been confirmed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                4. Changes to Travel Plans
              </h2>

              <p className="mt-3">
                Changes requested after arrangements have been made may affect
                availability and the final cost of the trip. Any applicable
                changes will be communicated before arrangements are confirmed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                5. Third-Party Services
              </h2>

              <p className="mt-3">
                Safari arrangements may involve accommodation providers,
                transport providers, activity operators, parks and other
                suppliers. Their individual terms, conditions and cancellation
                policies may also apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                6. Traveller Responsibilities
              </h2>

              <p className="mt-3">
                Travellers are responsible for providing accurate information
                relevant to their trip and for ensuring that they have the
                travel documents, permissions and other requirements applicable
                to their journey.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                7. Website Information
              </h2>

              <p className="mt-3">
                We make reasonable efforts to keep website information useful
                and current. Travel conditions, availability, regulations,
                routes, activities and supplier arrangements can change.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                8. Contact
              </h2>

              <p className="mt-3">
                If you have questions about a quotation or proposed travel
                arrangement, please contact JE FAIS Nature Safaris before
                confirming your plans.
              </p>
            </section>
          </div>

          <div className="mt-12 rounded-2xl bg-green-50 p-7">
            <h2 className="text-xl font-bold text-gray-900">
              Ready to plan your journey?
            </h2>

            <p className="mt-2 text-gray-600">
              Review the experience, understand the journey and request a
              personalized quotation.
            </p>

            <Link
              href="/request-a-quote"
              className="mt-5 inline-block rounded-full bg-green-900 px-6 py-3 font-bold text-white"
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