import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import TermsAcceptance from './TermsAcceptance';

export const metadata: Metadata = {
  title: 'Tour Booking Terms & Conditions | JE FAIS Nature Safaris',
  description:
    'Tour booking terms and conditions for JE FAIS NATURE SAFARIS LTD, Uganda.',
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-900">
        {/* HERO */}
        <section className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-800">
          <div className="mx-auto max-w-5xl px-6 py-20 text-white sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              JE FAIS NATURE SAFARIS LTD
            </p>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Tour Booking Terms & Conditions
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
              Please read these Terms & Conditions carefully before confirming
              your safari, tour, travel arrangement or other services with JE
              FAIS NATURE SAFARIS LTD.
            </p>
          </div>
        </section>

        {/* COMPANY INFORMATION */}
        <section className="mx-auto max-w-4xl px-6 pt-14 sm:px-8">
          <div className="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h2 className="text-xl font-bold text-gray-900">
              Company Information
            </h2>

            <div className="mt-4 space-y-2 text-gray-700">
              <p>
                <strong>Company:</strong> JE FAIS NATURE SAFARIS LTD
              </p>
              <p>
                <strong>Location:</strong> Kampala, Uganda
              </p>
            </div>
          </div>
        </section>

        {/* TERMS */}
        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-8">
          <div className="space-y-12 leading-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                1. BOOKING CONFIRMATION
              </h2>
              <p className="mt-3">
                A booking is considered confirmed only when the client has
                accepted the proposed itinerary or quotation, the required 30%
                deposit has been received, and the Company has confirmed the
                booking in writing.
              </p>
              <p className="mt-3">
                A provisional quotation or itinerary does not constitute a
                confirmed booking until the required deposit has been received.
                The Company reserves the right to release accommodation,
                permits, vehicles, flights, activities or other services that
                have not been secured by the required payment deadline.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                2. PAYMENT TERMS
              </h2>
              <p className="mt-3">
                Unless otherwise agreed in writing, our standard cumulative
                payment schedule is:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>30%</strong> deposit at the time of booking to confirm
                  and secure the booking.
                </li>
                <li>
                  <strong>60%</strong> of the total booking value paid by 90
                  days before arrival.
                </li>
                <li>
                  The remaining <strong>10%</strong> paid by 7 days before
                  arrival, unless otherwise agreed in writing.
                </li>
              </ul>
              <p className="mt-4">
                For bookings made less than 60 days before arrival, the Company
                may require a higher deposit or full payment depending on
                availability and supplier deadlines. For bookings made within
                seven days of arrival, 100% payment may be required before the
                tour commences.
              </p>
              <p className="mt-3">
                The Company may apply different payment schedules for
                gorilla/chimpanzee permits, flights, peak-season travel, group
                bookings and services where suppliers require earlier payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                3. FAILURE TO PAY ON TIME
              </h2>
              <p className="mt-3">
                If a payment deadline is missed, JE FAIS NATURE SAFARIS LTD may
                cancel or suspend the booking, release reserved services,
                cancel permits or tickets where permitted, recalculate the
                tour price, and/or require full payment before reinstatement.
                Resulting supplier charges, cancellation fees or price
                increases may be payable by the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                4. PRICES AND QUOTATIONS
              </h2>
              <p className="mt-3">
                Quotes are based on the itinerary, dates, number of travellers
                and services stated. Prices may change because of accommodation
                rates, park or government charges, permits, airline or
                transport charges, fuel, exchange rates, taxes, supplier
                changes or client-requested changes. Unavoidable government,
                park, airline, supplier or statutory increases may be passed to
                the client where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                5. ITINERARY CHANGES
              </h2>
              <p className="mt-3">
                The Company may reasonably alter an itinerary because of
                weather, road conditions, security, wildlife or park
                regulations, government directives, flight or transport
                disruption, accommodation availability, supplier changes,
                mechanical problems, safety concerns, force majeure or other
                circumstances beyond reasonable control. Suitable alternatives
                will be provided where reasonably possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                6. ACCOMMODATION
              </h2>
              <p className="mt-3">
                Accommodation is based on the category and properties stated in
                the confirmed itinerary. If specified accommodation becomes
                unavailable, the Company may provide accommodation of a similar
                standard or an appropriate alternative. Special requests are
                subject to availability unless expressly confirmed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                7. TRANSPORT AND VEHICLES
              </h2>
              <p className="mt-3">
                Vehicles are selected according to the safari, group size, road
                conditions and itinerary. Vehicles may be substituted when
                reasonably necessary for maintenance, safety, availability or
                operations. Clients must follow reasonable safety instructions
                and must not drive Company vehicles without authorization,
                overload vehicles, carry illegal or dangerous items, or
                interfere with vehicle controls.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                8. HEALTH AND MEDICAL DISCLOSURE
              </h2>
              <p className="mt-3">
                Every traveller must inform JE FAIS NATURE SAFARIS LTD before
                travel of any medical, physical or other condition that may
                reasonably affect safe participation. Relevant information may
                include allergies, mobility limitations, serious injuries,
                chronic conditions, dietary or food allergies, medication
                requirements, pregnancy, strenuous-activity limitations or
                other conditions requiring special planning.
              </p>
              <p className="mt-3">
                This information is requested solely to help the Company plan
                accommodation, transport, activities, meals, travel pace,
                emergency arrangements and appropriate support. Clients must
                provide accurate and relevant information. Failure to disclose a
                relevant condition may affect the Company's ability to provide
                appropriate arrangements and may affect participation in certain
                activities.
              </p>
              <p className="mt-3">
                The Company and its representatives are not medical
                professionals and do not provide medical diagnosis or
                treatment. Where appropriate, clients may be advised to obtain
                medical clearance before participating in physically demanding
                activities. The Company may restrict or discontinue
                participation where reasonably necessary for safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                9. TRAVEL INSURANCE
              </h2>
              <p className="mt-3">
                Travel insurance is strongly recommended and may be mandatory
                for particular trips or activities. Clients are responsible for
                obtaining suitable insurance covering their circumstances.
              </p>
              <p className="mt-3">
                Depending on the itinerary, cover should be considered for
                medical expenses, emergency evacuation, cancellation or
                interruption, missed or delayed flights, baggage, personal
                accident, repatriation, adventure or safari activities and
                other relevant risks.
              </p>
              <p className="mt-3">
                Clients must check exclusions, limits, deductibles and activity
                coverage. JE FAIS NATURE SAFARIS LTD is not the client's insurer
                and is not responsible for claims that should be made under the
                client's insurance policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                10. PASSPORTS, VISAS AND TRAVEL DOCUMENTS
              </h2>
              <p className="mt-3">
                Clients are responsible for valid passports, visas, permits,
                yellow fever certificates or other required health
                documentation, immigration documents, insurance and other
                required travel documents. The Company may provide reasonable
                guidance but cannot guarantee visa or entry approval. The
                Company is not responsible for losses resulting from a client's
                failure to obtain required documents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                11. GORILLA, CHIMPANZEE AND SPECIAL PERMITS
              </h2>
              <p className="mt-3">
                Permits are subject to availability and the rules of the
                relevant authorities. Once purchased, permits may be
                non-refundable or non-transferable according to authority
                rules. Cancellation or postponement will be handled according
                to the applicable authority's policy, and the Company cannot
                guarantee a refund where the authority does not permit one.
              </p>
              <p className="mt-3 font-semibold text-gray-900">
                Gorilla and Chimpanzee permits must be paid for in full (100%)
                in cash as required for the applicable permit arrangement and
                are non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                12. CANCELLATION BY THE CLIENT
              </h2>
              <p className="mt-3">
                Cancellations must be submitted in writing. Cancellation
                charges may depend on cancellation date, payments already made,
                accommodation policies, permits, airlines, transport,
                third-party suppliers and non-refundable expenses. Refunds,
                where applicable, will be calculated after deducting applicable
                non-refundable and cancellation charges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                13. CANCELLATION OR CHANGES BY THE COMPANY
              </h2>
              <p className="mt-3">
                The Company may cancel or substantially modify a tour where
                reasonably necessary due to safety, security, government
                restrictions, supplier failure, natural disasters, severe
                weather, civil unrest, health emergencies or other force
                majeure circumstances. The Company will make reasonable efforts
                to provide an alternative or applicable refund in accordance
                with the circumstances and supplier policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                14. FORCE MAJEURE
              </h2>
              <p className="mt-3">
                The Company is not liable for failure, delay, interruption or
                alteration caused by circumstances beyond reasonable control,
                including natural disasters, severe weather,
                epidemics/pandemics, government restrictions, war, terrorism,
                civil unrest, strikes, road closures, wildlife incidents,
                border closures, political disturbances, flight cancellations,
                supplier failure, mechanical breakdowns or similar
                unforeseeable events. Reasonable assistance and alternatives
                will be provided where possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                15. CLIENT CONDUCT
              </h2>
              <p className="mt-3">
                Clients must behave respectfully toward staff, guides,
                accommodation providers, communities, fellow travellers and
                wildlife. The Company may terminate participation for serious
                misconduct, unlawful behaviour, harassment, violence, abuse,
                excessive intoxication, deliberate property damage or conduct
                creating unreasonable risk. The client may be required to leave
                at their own expense and may not be entitled to a refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                16. WILDLIFE AND SAFARI SAFETY
              </h2>
              <p className="mt-3">
                Wildlife activities carry inherent risks. Sightings and
                encounters cannot be guaranteed. Clients must follow
                guide/ranger instructions, remain in designated areas and avoid
                approaching or feeding wildlife. The Company will take
                reasonable safety measures but cannot eliminate inherent
                wildlife and outdoor risks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                17. PERSONAL BELONGINGS
              </h2>
              <p className="mt-3">
                Clients are responsible for passports, money, electronics,
                luggage, jewellery and other belongings. The Company is not
                responsible for loss, theft or damage except where liability
                cannot lawfully be excluded.
              </p>
              <p className="mt-3">
                Clients are encouraged to use hotel safes and maintain travel
                insurance. JE FAIS NATURE SAFARIS LTD will nevertheless take
                reasonable care to help ensure that clients' belongings are
                kept safe during their stay and safari.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                18. PHOTOGRAPHS AND MEDIA
              </h2>
              <p className="mt-3">
                The Company may take photographs or videos during tours for
                operational or promotional purposes. Where identifiable images
                are intended for promotional use, appropriate consent will be
                sought where required. Clients who do not wish to appear in
                promotional material should inform the Company before or during
                the tour.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                19. CHILDREN AND MINORS
              </h2>
              <p className="mt-3">
                Parents or legal guardians are responsible for children
                travelling with them and must ensure compliance with safety
                instructions and appropriate supervision. Activities may have
                age, health, height or other restrictions imposed by
                authorities or suppliers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                20. SPECIAL REQUESTS AND DIETARY REQUIREMENTS
              </h2>
              <p className="mt-3">
                Clients should communicate special requirements as early as
                possible, including dietary, accessibility, room and
                celebration requests. Requests are subject to availability and
                supplier confirmation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                21. ENVIRONMENTAL AND COMMUNITY RESPONSIBILITY
              </h2>
              <p className="mt-3">
                Clients are expected to respect wildlife, avoid littering,
                respect local communities and cultures, follow conservation
                rules, avoid damaging habitats and use resources responsibly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                22. COMPLAINTS
              </h2>
              <p className="mt-3">
                Problems should be reported to the Company, guide or responsible
                representative as soon as reasonably possible so that an
                opportunity exists to investigate and correct the issue during
                the trip. Complaints after departure should be submitted in
                writing within a reasonable period with supporting information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                23. THIRD-PARTY SUPPLIERS
              </h2>
              <p className="mt-3">
                The Company may use independent hotels, lodges, airlines,
                vehicle providers, park authorities, activity providers,
                restaurants, guides and other suppliers. Their terms and
                cancellation policies may also apply. Where applicable, the
                client's booking is subject to those conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                24. LIMITATION OF LIABILITY
              </h2>
              <p className="mt-3">
                The Company will exercise reasonable care in arranging confirmed
                services. To the extent permitted by law, it is not liable for
                loss, damage, delay, injury or additional expenses arising from
                circumstances beyond reasonable control or independent
                acts/omissions of third-party suppliers. Nothing excludes or
                limits liability that cannot lawfully be excluded or limited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                25. CHANGES REQUESTED BY THE CLIENT
              </h2>
              <p className="mt-3">
                Changes after confirmation may incur additional charges,
                including changes to dates, accommodation, activities, traveller
                numbers, safari duration, transport or extra services. The
                Company will advise applicable additional costs before material
                changes where reasonably possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                26. SINGLE SUPPLEMENT AND ROOM SHARING
              </h2>
              <p className="mt-3">
                Single rooms may attract a single-room supplement. Where room
                sharing is agreed, the Company will make reasonable efforts to
                arrange appropriate sharing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                27. PAYMENT METHODS
              </h2>
              <p className="mt-3">
                Payments must be made through payment methods communicated or
                approved by JE FAIS NATURE SAFARIS LTD. The client is
                responsible for bank charges, transaction fees or other payment
                costs unless otherwise agreed. A booking is not considered paid
                until cleared funds are received.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                28. CLIENT INFORMATION
              </h2>
              <p className="mt-3">
                Clients must check names, passport details, dates, number of
                travellers, accommodation, activities and other booking
                information and promptly report errors. Additional costs arising
                from incorrect information supplied by the client may be charged
                to the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                29. ACCEPTANCE OF TERMS
              </h2>
              <p className="mt-3">
                By paying the deposit or otherwise confirming a booking, the
                client confirms that they have read and understood these Terms,
                accept the payment and cancellation conditions, understand
                inherent travel and safari risks, understand the importance of
                travel insurance, have provided accurate relevant information
                including health and mobility information where necessary, and
                agree to reasonable instructions from Company representatives,
                guides and authorities.
              </p>
            </section>

            {/* IMPORTANT NOTICE */}
            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                IMPORTANT NOTICE
              </h2>

              <p className="mt-4">
                These Terms and Conditions establish clear expectations between
                JE FAIS NATURE SAFARIS LTD and its clients and are intended to
                protect both parties.
              </p>

              <p className="mt-4">
                Where these Terms conflict with mandatory Ugandan law or binding
                terms of a government authority, airline, accommodation
                provider, park authority or other supplier, the applicable
                mandatory provision or supplier condition shall prevail to the
                extent required.
              </p>

              <p className="mt-4">
                JE FAIS NATURE SAFARIS LTD reserves the right to update these
                Terms and Conditions. The version applicable to a confirmed
                booking shall be the version communicated to the client at
                confirmation, subject to applicable law.
              </p>
            </section>

            {/* CLIENT BOOKING ACKNOWLEDGEMENT */}
            <section>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  CLIENT BOOKING ACKNOWLEDGEMENT
                </h2>

                <p className="mt-3">
                  Please confirm that you have read and agree to these Terms &
                  Conditions before continuing with your booking enquiry.
                </p>
              </div>

              <TermsAcceptance />
            </section>
          </div>

          {/* QUOTATION CTA */}
          <div className="mt-14 rounded-2xl bg-green-50 p-7">
            <h2 className="text-xl font-bold text-gray-900">
              Ready to plan your journey?
            </h2>

            <p className="mt-2 text-gray-600">
              Review the experience, understand the journey and request a
              personalized quotation from JE FAIS NATURE SAFARIS LTD.
            </p>

            <Link
              href="/request-a-quote"
              className="mt-5 inline-block rounded-full bg-green-900 px-6 py-3 font-bold text-white transition hover:bg-green-800"
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
