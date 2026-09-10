
'use client';

import React, { useState } from 'react';

const safariOptions = [
  'Gorilla Trekking (Bwindi)',
  'Queen Elizabeth National Park',
  'Murchison Falls National Park',
  'Lake Mburo National Park',
  'Chimpanzee Trekking (Kibale)',
  'Kampala City Tour',
  'Jinja Holiday',
  '5-Day Uganda Wildlife Safari',
  '7-Day Uganda Wildlife & Gorilla Safari',
  'Custom / Tailor-Made Safari',
  'Car Hire',
  'Student Group Tour',
  'Other',
];

const countryCodes = [
  { country: 'Uganda', code: '+256' },
  { country: 'United States', code: '+1' },
  { country: 'Canada', code: '+1' },
  { country: 'United Kingdom', code: '+44' },
  { country: 'Australia', code: '+61' },
  { country: 'New Zealand', code: '+64' },
  { country: 'South Africa', code: '+27' },
  { country: 'Kenya', code: '+254' },
  { country: 'Tanzania', code: '+255' },
  { country: 'Rwanda', code: '+250' },
  { country: 'Burundi', code: '+257' },
  { country: 'Nigeria', code: '+234' },
  { country: 'Ghana', code: '+233' },
  { country: 'Egypt', code: '+20' },
  { country: 'United Arab Emirates', code: '+971' },
  { country: 'Saudi Arabia', code: '+966' },
  { country: 'India', code: '+91' },
  { country: 'China', code: '+86' },
  { country: 'Japan', code: '+81' },
  { country: 'Germany', code: '+49' },
  { country: 'France', code: '+33' },
  { country: 'Italy', code: '+39' },
  { country: 'Spain', code: '+34' },
  { country: 'Netherlands', code: '+31' },
  { country: 'Switzerland', code: '+41' },
  { country: 'Sweden', code: '+46' },
  { country: 'Norway', code: '+47' },
  { country: 'Denmark', code: '+45' },
  { country: 'Belgium', code: '+32' },
  { country: 'Portugal', code: '+351' },
  { country: 'Ireland', code: '+353' },
  { country: 'Turkey', code: '+90' },
  { country: 'Brazil', code: '+55' },
  { country: 'Mexico', code: '+52' },
];

interface FormState {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  country: string;
  travelDates: string;
  travelers: string;
  safari: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  countryCode: '+256',
  phone: '',
  country: '',
  travelDates: '',
  travelers: '',
  safari: '',
  message: '',
};

const inputClass =
  'h-14 w-full rounded-xl border border-stone-200 bg-white px-4 text-sm text-stone-900 outline-none transition-all duration-200 placeholder:text-stone-400 hover:border-stone-300 focus:border-[#2f5d27] focus:ring-4 focus:ring-[#2f5d27]/10';

const labelClass =
  'mb-2 block text-[13px] font-semibold text-stone-700';

const sectionDividerClass =
  'border-t border-stone-200 pt-8';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(() => ({
    ...initialForm,
  }));

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    // Replace this with your backend/email service later.
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setForm({
      ...initialForm,
    });

    setSubmitted(false);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="w-full overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl shadow-stone-900/5">
        <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16">
          <div
            className="absolute inset-x-0 top-0 h-1 bg-[#2f5d27]"
            aria-hidden="true"
          />

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#2f5d27]/10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2f5d27] text-white shadow-lg">
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#2f5d27]">
            Enquiry Received
          </span>

          <h2 className="font-display text-3xl font-bold text-stone-900 sm:text-4xl">
            Thank You, {form.name || 'Traveller'}!
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-stone-600">
            Your Uganda safari enquiry has been received. Our team will review
            your requirements and get back to you with a personalised response.
          </p>

          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-stone-50 p-5 text-left">
            <div className="flex gap-3">
              <div className="mt-0.5 text-[#2f5d27]">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <p className="font-semibold text-stone-900">
                  What happens next?
                </p>

                <p className="mt-1 text-sm leading-6 text-stone-600">
                  We normally respond within 24 hours with the next steps for
                  planning your safari.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/256774729464"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-900/10 transition hover:-translate-y-0.5 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/20"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.198.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.198-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>

              Chat on WhatsApp
            </a>

            <button
              type="button"
              onClick={resetForm}
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-stone-200 bg-white px-7 py-3.5 text-sm font-semibold text-stone-700 transition hover:border-[#2f5d27] hover:text-[#2f5d27] focus:outline-none focus:ring-4 focus:ring-[#2f5d27]/10"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl shadow-stone-900/5">
      {/* Header */}
      <div className="relative overflow-hidden bg-[#2f5d27] px-6 py-8 text-white sm:px-10 sm:py-10">
        <div
          className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/10"
          aria-hidden="true"
        />

        <div
          className="absolute bottom-0 left-1/2 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5"
          aria-hidden="true"
        />

        <div className="relative">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            Make an Enquiry
          </span>

          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Request a Safari Quote
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-white/75">
            Tell us what you have in mind and our Uganda safari specialists
            will help create the right experience for you.
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-8 p-6 sm:p-10 lg:p-12"
        aria-label="Safari enquiry form"
      >
        {/* Contact details */}
        <section aria-labelledby="contact-details-heading">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2f5d27]/10 text-sm font-bold text-[#2f5d27]">
              01
            </div>

            <div>
              <h3
                id="contact-details-heading"
                className="font-display text-lg font-bold text-stone-900"
              >
                Your Details
              </h3>

              <p className="text-xs text-stone-500">
                How can we reach you?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelClass}>
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address <span className="text-red-500">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone / WhatsApp
              </label>

              <div className="flex h-14 w-full overflow-hidden rounded-xl border border-stone-200 bg-white transition-all duration-200 hover:border-stone-300 focus-within:border-[#2f5d27] focus-within:ring-4 focus-within:ring-[#2f5d27]/10">
                <select
                  id="countryCode"
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  aria-label="Country calling code"
                  className="w-[112px] shrink-0 cursor-pointer border-0 border-r border-stone-200 bg-stone-50 px-3 text-sm font-semibold text-stone-800 outline-none focus:bg-stone-100"
                >
                  {countryCodes.map((item) => (
                    <option
                      key={`${item.country}-${item.code}`}
                      value={item.code}
                    >
                      {item.country} ({item.code})
                    </option>
                  ))}
                </select>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel-national"
                  inputMode="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="774 729 464"
                  className="min-w-0 flex-1 border-0 bg-white px-4 text-sm text-stone-900 outline-none placeholder:text-stone-400"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className={labelClass}>
                Country of Residence
              </label>

              <input
                id="country"
                name="country"
                type="text"
                autoComplete="country-name"
                value={form.country}
                onChange={handleChange}
                placeholder="e.g. United Kingdom"
                className={inputClass}
              />
            </div>
          </div>
        </section>

        {/* Trip details */}
        <section
          className={sectionDividerClass}
          aria-labelledby="trip-details-heading"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2f5d27]/10 text-sm font-bold text-[#2f5d27]">
              02
            </div>

            <div>
              <h3
                id="trip-details-heading"
                className="font-display text-lg font-bold text-stone-900"
              >
                Trip Details
              </h3>

              <p className="text-xs text-stone-500">
                Help us understand your plans.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Travel dates */}
            <div>
              <label htmlFor="travelDates" className={labelClass}>
                Preferred Travel Dates
              </label>

              <input
                id="travelDates"
                name="travelDates"
                type="text"
                value={form.travelDates}
                onChange={handleChange}
                placeholder="e.g. March 2027 or flexible"
                className={inputClass}
              />
            </div>

            {/* Travellers */}
            <div>
              <label htmlFor="travelers" className={labelClass}>
                Number of Travellers
              </label>

              <input
                id="travelers"
                name="travelers"
                type="number"
                min={1}
                max={50}
                inputMode="numeric"
                value={form.travelers}
                onChange={handleChange}
                placeholder="e.g. 2"
                className={inputClass}
              />
            </div>

            {/* Safari */}
            <div className="sm:col-span-2">
              <label htmlFor="safari" className={labelClass}>
                Safari / Package of Interest
              </label>

              <select
                id="safari"
                name="safari"
                value={form.safari}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Select a safari or destination...</option>

                {safariOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Message */}
        <section
          className={sectionDividerClass}
          aria-labelledby="message-heading"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2f5d27]/10 text-sm font-bold text-[#2f5d27]">
              03
            </div>

            <div>
              <h3
                id="message-heading"
                className="font-display text-lg font-bold text-stone-900"
              >
                Tell Us About Your Safari
              </h3>

              <p className="text-xs text-stone-500">
                The more you tell us, the better we can tailor your trip.
              </p>
            </div>
          </div>

          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your ideal Uganda safari — places you want to visit, wildlife you want to see, accommodation preferences, budget, special occasions or anything else..."
            className="min-h-[170px] w-full resize-y rounded-xl border border-stone-200 bg-white px-4 py-4 text-sm leading-6 text-stone-900 outline-none transition-all duration-200 placeholder:text-stone-400 hover:border-stone-300 focus:border-[#2f5d27] focus:ring-4 focus:ring-[#2f5d27]/10"
          />
        </section>

        {/* Privacy notice */}
        <div className="rounded-2xl border border-[#2f5d27]/10 bg-[#f5f7f1] p-5">
          <div className="flex gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2f5d27]/10 text-[#2f5d27]">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11v5m0-9h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <p className="text-sm font-semibold text-stone-900">
                Your information is safe with us
              </p>

              <p className="mt-1 text-xs leading-5 text-stone-500">
                We use your details only to respond to your safari enquiry.
                There is no obligation to book.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex min-h-[56px] flex-1 items-center justify-center gap-2 rounded-xl bg-[#2f5d27] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#2f5d27]/20 transition hover:-translate-y-0.5 hover:bg-[#244a1e] focus:outline-none focus:ring-4 focus:ring-[#2f5d27]/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <svg
                  className="h-5 w-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />

                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>

                Sending Enquiry...
              </>
            ) : (
              <>
                Send My Safari Enquiry

                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </>
            )}
          </button>

          <a
            href="https://wa.me/256774729464"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[56px] flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-green-900/10 transition hover:-translate-y-0.5 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/20"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.198-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>

            Plan on WhatsApp
          </a>
        </div>

        <p className="text-center text-[11px] text-stone-400">
          We usually respond within 24 hours.
        </p>
      </form>
    </div>
  );
}