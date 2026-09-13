'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TermsAcceptance() {
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAccept = () => {
    if (!accepted) return;

    setSubmitted(true);

    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'jefais_terms_accepted',
        JSON.stringify({
          accepted: true,
          acceptedAt: new Date().toISOString(),
        })
      );
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
            ✓
          </div>

          <div>
            <h3 className="text-lg font-bold text-green-900">
              Terms & Conditions Accepted
            </h3>

            <p className="mt-2 text-green-800">
              Thank you. You have confirmed that you have read and agree to the
              JE FAIS NATURE SAFARIS LTD Terms & Conditions.
            </p>

            <Link
              href="/request-a-quote"
              className="mt-5 inline-block rounded-full bg-green-900 px-6 py-3 font-bold text-white transition hover:bg-green-800"
            >
              CONTINUE TO REQUEST A QUOTATION
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
      <label className="flex cursor-pointer items-start gap-4">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(event) => setAccepted(event.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-gray-300 text-green-800 focus:ring-2 focus:ring-green-700"
        />

        <span className="text-sm leading-7 text-gray-700 sm:text-base">
          I confirm that I have read, understood and agree to the{' '}
          <strong className="text-gray-900">
            JE FAIS NATURE SAFARIS LTD Tour Booking Terms & Conditions
          </strong>
          .
        </span>
      </label>

      <button
        type="button"
        onClick={handleAccept}
        disabled={!accepted}
        className={`mt-6 w-full rounded-full px-6 py-4 text-sm font-bold tracking-wide transition sm:w-auto ${
          accepted
            ? 'bg-green-900 text-white hover:bg-green-800'
            : 'cursor-not-allowed bg-gray-300 text-gray-500'
        }`}
      >
        ACCEPT TERMS & CONDITIONS
      </button>

      <p className="mt-4 text-xs leading-5 text-gray-500">
        You must tick the checkbox above before you can accept these Terms &
        Conditions.
      </p>
    </div>
  );
}
