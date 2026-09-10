'use client';

import React, { useState } from 'react';
import { tourPackages } from '@/data/tourPackages';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  selectedPackage: string;
  travelDate: string;
  numTravellers: string;
  numAdults: string;
  numChildren: string;
  accommodationLevel: string;
  safariInterests: string[];
  gorillaTrekking: string;
  chimpanzeeTrekking: string;
  wildlifeInterests: string;
  culturalExperiences: string;
  specialRequests: string;
  message: string;
}

const initialForm: FormData = {
  fullName: '',
  email: '',
  phone: '',
  country: '',
  selectedPackage: '',
  travelDate: '',
  numTravellers: '',
  numAdults: '',
  numChildren: '',
  accommodationLevel: '',
  safariInterests: [],
  gorillaTrekking: '',
  chimpanzeeTrekking: '',
  wildlifeInterests: '',
  culturalExperiences: '',
  specialRequests: '',
  message: '',
};

const safariInterestOptions = [
  {
    name: 'Wildlife Game Drives',
    icon: '🦁',
    description: 'Big Five & wild encounters',
  },
  {
    name: 'Gorilla Trekking',
    icon: '🦍',
    description: 'Meet mountain gorillas',
  },
  {
    name: 'Chimpanzee Trekking',
    icon: '🐒',
    description: 'Discover our closest relatives',
  },
  {
    name: 'Boat Safaris',
    icon: '🛶',
    description: 'Wildlife from the water',
  },
  {
    name: 'Birdwatching',
    icon: '🦜',
    description: 'Uganda’s incredible birdlife',
  },
  {
    name: 'Nature Walks',
    icon: '🥾',
    description: 'Explore on foot',
  },
  {
    name: 'Cultural Experiences',
    icon: '🏘️',
    description: 'Meet local communities',
  },
  {
    name: 'Photography',
    icon: '📷',
    description: 'Capture unforgettable moments',
  },
  {
    name: 'Scenic Landscapes',
    icon: '🌄',
    description: 'Mountains, lakes & savannah',
  },
];

interface QuoteRequestFormProps {
  preselectedPackage?: string;
}

const inputClass = `
  w-full h-14 px-4
  rounded-xl
  border border-stone-200
  bg-white
  text-[15px] text-stone-900
  placeholder:text-stone-400
  shadow-[0_1px_3px_rgba(0,0,0,0.03)]
  transition-all duration-200
  hover:border-stone-300
  focus:border-[#2f5d27]
  focus:ring-4 focus:ring-[#2f5d27]/10
  focus:outline-none
`;

const selectClass = `
  w-full h-14 px-4
  rounded-xl
  border border-stone-200
  bg-white
  text-[15px] text-stone-900
  shadow-[0_1px_3px_rgba(0,0,0,0.03)]
  transition-all duration-200
  hover:border-stone-300
  focus:border-[#2f5d27]
  focus:ring-4 focus:ring-[#2f5d27]/10
  focus:outline-none
  cursor-pointer
`;

const textareaClass = `
  w-full min-h-[190px] px-4 py-4
  rounded-xl
  border border-stone-200
  bg-white
  text-[15px] text-stone-900
  placeholder:text-stone-400
  shadow-[0_1px_3px_rgba(0,0,0,0.03)]
  transition-all duration-200
  hover:border-stone-300
  focus:border-[#2f5d27]
  focus:ring-4 focus:ring-[#2f5d27]/10
  focus:outline-none
  resize-y
`;

function FieldLabel({
  htmlFor,
  children,
  required = false,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-[13px] font-semibold tracking-wide text-stone-700"
    >
      {children}

      {required && (
        <span className="ml-1 text-[#c47c35]">*</span>
      )}
    </label>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 12H5M11 18l-6-6 6-6"
      />
    </svg>
  );
}

function StepIcon({ number }: { number: number }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2f5d27] text-sm font-bold text-white shadow-md">
      {number}
    </div>
  );
}

export default function QuoteRequestForm({
  preselectedPackage,
}: QuoteRequestFormProps) {
  const [form, setForm] = useState<FormData>({
    ...initialForm,
    selectedPackage: preselectedPackage || '',
  });

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const totalSteps = 4;

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleInterest(value: string) {
    setForm((prev) => {
      const current = prev.safariInterests;

      return {
        ...prev,
        safariInterests: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });
  }

  function nextStep() {
    if (step < totalSteps) {
      setStep((current) => current + 1);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  function previousStep() {
    if (step > 1) {
      setStep((current) => current - 1);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (step < totalSteps) {
      nextStep();
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 1200);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-[0_20px_70px_rgba(30,60,25,0.10)]">
          {/* Success Header */}
          <div className="relative overflow-hidden bg-[#193b16] px-6 py-14 text-center sm:px-10 sm:py-20">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d6a35c]/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#5f914d]/20 blur-3xl" />

            <div className="relative">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d6a35c] text-[#193b16]">
                  <CheckIcon />
                </div>
              </div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d6a35c]">
                Inquiry Received
              </p>

              <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
                Your Safari Journey
                <span className="block text-[#d6a35c]">
                  Starts Here
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/70">
                Thank you for sharing your safari dreams with us. Our
                local team will carefully review your requirements and
                prepare a personalized itinerary.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['01', 'Review', 'Our safari team reviews your requirements'],
                ['02', 'Design', 'We create your personalized itinerary'],
                ['03', 'Connect', 'We send your proposal and refine it together'],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-stone-200 bg-[#faf9f5] p-5"
                >
                  <span className="text-xs font-bold text-[#c47c35]">
                    {number}
                  </span>

                  <h3 className="mt-2 font-display text-lg font-bold text-stone-900">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-stone-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/256774729464"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex min-h-[54px] flex-1 items-center
                  justify-center gap-2 rounded-xl
                  bg-[#25D366] px-6
                  text-sm font-bold text-white
                  shadow-lg shadow-green-500/20
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#20bd5a]
                "
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>

                Chat With Us on WhatsApp
              </a>
            </div>

            <p className="mt-5 text-center text-xs text-stone-400">
              We typically respond to safari enquiries within 24 hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      {/* =========================================================
          HERO
      ========================================================== */}
      <div className="relative mb-8 overflow-hidden rounded-[32px] bg-[#193b16] shadow-[0_20px_60px_rgba(25,59,22,0.18)]">
        {/* Decorative shapes */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#d6a35c]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#5b8d49]/20 blur-3xl" />

        <div className="relative grid lg:grid-cols-[1.25fr_0.75fr]">
          <div className="px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#d6a35c]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
                Tailor-Made Uganda Safaris
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Plan Your
              <span className="block text-[#d6a35c]">
                Uganda Safari
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Tell us what you dream of experiencing and our local
              safari specialists will create an unforgettable journey
              designed around you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'Local Experts',
                'Personalised Itineraries',
                'No Obligation',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-white/80"
                >
                  <span className="mr-1.5 text-[#d6a35c]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Decorative safari panel */}
          <div className="relative hidden min-h-[320px] lg:block">
            <div
              className="absolute inset-5 overflow-hidden rounded-[24px] border border-white/10"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(25,59,22,0.05), rgba(25,59,22,0.8)), url('/images/safari-hero.jpg')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d6a35c]">
                  Your Adventure
                </p>

                <p className="mt-2 max-w-xs font-display text-2xl font-bold leading-tight text-white">
                  From rainforest gorillas to open savannah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          PROGRESS
      ========================================================== */}
      <div className="mb-8 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex items-center justify-between">
          {[
            ['1', 'About You'],
            ['2', 'Your Safari'],
            ['3', 'Experiences'],
            ['4', 'Your Message'],
          ].map(([number, title], index) => {
            const current = Number(number);
            const active = current <= step;

            return (
              <React.Fragment key={number}>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div
                    className={`
                      flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-full text-xs font-bold transition-all
                      ${
                        active
                          ? 'bg-[#2f5d27] text-white shadow-md'
                          : 'bg-stone-100 text-stone-400'
                      }
                    `}
                  >
                    {current < step ? <CheckIcon /> : number}
                  </div>

                  <span
                    className={`
                      hidden text-xs font-semibold sm:block
                      ${
                        active
                          ? 'text-stone-800'
                          : 'text-stone-400'
                      }
                    `}
                  >
                    {title}
                  </span>
                </div>

                {index < 3 && (
                  <div
                    className={`
                      mx-2 h-px flex-1
                      ${
                        current < step
                          ? 'bg-[#2f5d27]'
                          : 'bg-stone-200'
                      }
                    `}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* =======================================================
            STEP 1
        ======================================================== */}
        {step === 1 && (
          <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-[0_12px_50px_rgba(34,55,30,0.07)]">
            <div className="border-b border-stone-100 px-6 py-7 sm:px-10 sm:py-8">
              <div className="flex gap-4">
                <StepIcon number={1} />

                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#c47c35]">
                    Step One
                  </p>

                  <h2 className="font-display text-2xl font-bold text-stone-900 sm:text-3xl">
                    Tell Us About You
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-stone-500">
                    Give us a few details so our safari team knows how
                    to get in touch with you.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-10">
              <div>
                <FieldLabel htmlFor="fullName" required>
                  Full Name
                </FieldLabel>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <FieldLabel htmlFor="email" required>
                  Email Address
                </FieldLabel>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <FieldLabel htmlFor="phone">
                  Phone / WhatsApp
                </FieldLabel>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 8900"
                  className={inputClass}
                />
              </div>

              <div>
                <FieldLabel htmlFor="country" required>
                  Country of Residence
                </FieldLabel>

                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  value={form.country}
                  onChange={handleChange}
                  placeholder="e.g. United Kingdom"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex justify-end border-t border-stone-100 bg-[#faf9f5] px-6 py-5 sm:px-10">
              <button
                type="submit"
                className="
                  inline-flex min-h-[52px] items-center justify-center
                  gap-2 rounded-xl bg-[#2f5d27] px-7
                  text-sm font-bold text-white
                  shadow-lg shadow-[#2f5d27]/20
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:bg-[#244a1e]
                "
              >
                Continue
                <ArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* =======================================================
            STEP 2
        ======================================================== */}
        {step === 2 && (
          <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-[0_12px_50px_rgba(34,55,30,0.07)]">
            <div className="border-b border-stone-100 px-6 py-7 sm:px-10 sm:py-8">
              <div className="flex gap-4">
                <StepIcon number={2} />

                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#c47c35]">
                    Step Two
                  </p>

                  <h2 className="font-display text-2xl font-bold text-stone-900 sm:text-3xl">
                    Design Your Safari
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-stone-500">
                    Tell us when you would like to travel and what
                    style of safari suits you.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-7 p-6 sm:p-10">
              <div>
                <FieldLabel htmlFor="selectedPackage">
                  Safari Package of Interest
                </FieldLabel>

                <select
                  id="selectedPackage"
                  name="selectedPackage"
                  value={form.selectedPackage}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="">
                    Select a package or choose tailor-made
                  </option>

                  {tourPackages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.title} — {pkg.duration}
                    </option>
                  ))}

                  <option value="custom">
                    Custom / Tailor-Made Safari
                  </option>
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <FieldLabel htmlFor="travelDate">
                    Preferred Travel Date
                  </FieldLabel>

                  <input
                    id="travelDate"
                    name="travelDate"
                    type="text"
                    value={form.travelDate}
                    onChange={handleChange}
                    placeholder="e.g. March 2027 or flexible"
                    className={inputClass}
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="numTravellers">
                    Total Travellers
                  </FieldLabel>

                  <input
                    id="numTravellers"
                    name="numTravellers"
                    type="number"
                    min="1"
                    value={form.numTravellers}
                    onChange={handleChange}
                    placeholder="e.g. 2"
                    className={inputClass}
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="numAdults">
                    Number of Adults
                  </FieldLabel>

                  <input
                    id="numAdults"
                    name="numAdults"
                    type="number"
                    min="1"
                    value={form.numAdults}
                    onChange={handleChange}
                    placeholder="e.g. 2"
                    className={inputClass}
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="numChildren">
                    Number of Children
                  </FieldLabel>

                  <input
                    id="numChildren"
                    name="numChildren"
                    type="number"
                    min="0"
                    value={form.numChildren}
                    onChange={handleChange}
                    placeholder="e.g. 0"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <FieldLabel htmlFor="accommodationLevel">
                  Preferred Accommodation
                </FieldLabel>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {[
                    ['budget', 'Budget', 'Camping & simple stays'],
                    ['midrange', 'Mid-Range', 'Comfortable lodges'],
                    ['upmarket', 'Upmarket', 'Premium lodges'],
                    ['luxury', 'Luxury', 'Luxury properties'],
                    ['flexible', 'Flexible', 'Open to suggestions'],
                  ].map(([value, title, description]) => {
                    const selected =
                      form.accommodationLevel === value;

                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            accommodationLevel: value,
                          }))
                        }
                        className={`
                          rounded-2xl border p-4 text-left
                          transition-all duration-200
                          ${
                            selected
                              ? 'border-[#2f5d27] bg-[#2f5d27]/5 ring-2 ring-[#2f5d27]/10'
                              : 'border-stone-200 bg-white hover:-translate-y-0.5 hover:border-[#2f5d27]/40 hover:shadow-md'
                          }
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-sm font-bold ${
                              selected
                                ? 'text-[#2f5d27]'
                                : 'text-stone-800'
                            }`}
                          >
                            {title}
                          </span>

                          {selected && (
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2f5d27] text-white">
                              <CheckIcon />
                            </span>
                          )}
                        </div>

                        <p className="mt-2 text-xs leading-5 text-stone-400">
                          {description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex justify-between border-t border-stone-100 bg-[#faf9f5] px-6 py-5 sm:px-10">
              <button
                type="button"
                onClick={previousStep}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-xl px-5 text-sm font-semibold text-stone-600 transition-colors hover:bg-white hover:text-stone-900"
              >
                <ArrowLeft />
                Back
              </button>

              <button
                type="submit"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#2f5d27] px-7 text-sm font-bold text-white shadow-lg shadow-[#2f5d27]/20 transition-all hover:-translate-y-0.5 hover:bg-[#244a1e]"
              >
                Continue
                <ArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* =======================================================
            STEP 3
        ======================================================== */}
        {step === 3 && (
          <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-[0_12px_50px_rgba(34,55,30,0.07)]">
            <div className="border-b border-stone-100 px-6 py-7 sm:px-10 sm:py-8">
              <div className="flex gap-4">
                <StepIcon number={3} />

                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#c47c35]">
                    Step Three
                  </p>

                  <h2 className="font-display text-2xl font-bold text-stone-900 sm:text-3xl">
                    Choose Your Experiences
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-stone-500">
                    Pick the experiences that excite you. There are no
                    wrong answers — select as many as you like.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 p-6 sm:p-10">
              <div>
                <p className="mb-4 text-sm font-bold text-stone-800">
                  What would you love to experience?
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {safariInterestOptions.map((option) => {
                    const selected =
                      form.safariInterests.includes(option.name);

                    return (
                      <button
                        key={option.name}
                        type="button"
                        onClick={() =>
                          handleInterest(option.name)
                        }
                        aria-pressed={selected}
                        className={`
                          group relative rounded-2xl border p-5
                          text-left transition-all duration-200
                          ${
                            selected
                              ? 'border-[#2f5d27] bg-[#2f5d27]/5 ring-2 ring-[#2f5d27]/10'
                              : 'border-stone-200 bg-white hover:-translate-y-0.5 hover:border-[#2f5d27]/40 hover:shadow-md'
                          }
                        `}
                      >
                        <div className="mb-4 flex items-start justify-between">
                          <span className="text-3xl">
                            {option.icon}
                          </span>

                          {selected && (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2f5d27] text-white">
                              <CheckIcon />
                            </span>
                          )}
                        </div>

                        <h3
                          className={`text-sm font-bold ${
                            selected
                              ? 'text-[#2f5d27]'
                              : 'text-stone-800'
                          }`}
                        >
                          {option.name}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-stone-400">
                          {option.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <FieldLabel htmlFor="gorillaTrekking">
                    Gorilla Trekking
                  </FieldLabel>

                  <select
                    id="gorillaTrekking"
                    name="gorillaTrekking"
                    value={form.gorillaTrekking}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">Select an option</option>
                    <option value="yes-essential">
                      Yes — essential part of my trip
                    </option>
                    <option value="yes-if-possible">
                      Yes — if possible
                    </option>
                    <option value="not-sure">Not sure yet</option>
                    <option value="no">Not interested</option>
                  </select>
                </div>

                <div>
                  <FieldLabel htmlFor="chimpanzeeTrekking">
                    Chimpanzee Trekking
                  </FieldLabel>

                  <select
                    id="chimpanzeeTrekking"
                    name="chimpanzeeTrekking"
                    value={form.chimpanzeeTrekking}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">Select an option</option>
                    <option value="yes-essential">
                      Yes — essential part of my trip
                    </option>
                    <option value="yes-if-possible">
                      Yes — if possible
                    </option>
                    <option value="not-sure">Not sure yet</option>
                    <option value="no">Not interested</option>
                  </select>
                </div>

                <div>
                  <FieldLabel htmlFor="wildlifeInterests">
                    Wildlife Interests
                  </FieldLabel>

                  <input
                    id="wildlifeInterests"
                    name="wildlifeInterests"
                    type="text"
                    value={form.wildlifeInterests}
                    onChange={handleChange}
                    placeholder="e.g. Big Five, birds, primates"
                    className={inputClass}
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="culturalExperiences">
                    Cultural Experiences
                  </FieldLabel>

                  <input
                    id="culturalExperiences"
                    name="culturalExperiences"
                    type="text"
                    value={form.culturalExperiences}
                    onChange={handleChange}
                    placeholder="e.g. village visits, Kampala"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <FieldLabel htmlFor="specialRequests">
                  Special Requests
                </FieldLabel>

                <input
                  id="specialRequests"
                  name="specialRequests"
                  type="text"
                  value={form.specialRequests}
                  onChange={handleChange}
                  placeholder="Dietary requirements, accessibility, celebrations, etc."
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex justify-between border-t border-stone-100 bg-[#faf9f5] px-6 py-5 sm:px-10">
              <button
                type="button"
                onClick={previousStep}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-xl px-5 text-sm font-semibold text-stone-600 transition-colors hover:bg-white hover:text-stone-900"
              >
                <ArrowLeft />
                Back
              </button>

              <button
                type="submit"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#2f5d27] px-7 text-sm font-bold text-white shadow-lg shadow-[#2f5d27]/20 transition-all hover:-translate-y-0.5 hover:bg-[#244a1e]"
              >
                Continue
                <ArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* =======================================================
            STEP 4
        ======================================================== */}
        {step === 4 && (
          <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-[0_12px_50px_rgba(34,55,30,0.07)]">
            <div className="border-b border-stone-100 px-6 py-7 sm:px-10 sm:py-8">
              <div className="flex gap-4">
                <StepIcon number={4} />

                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#c47c35]">
                    Final Step
                  </p>

                  <h2 className="font-display text-2xl font-bold text-stone-900 sm:text-3xl">
                    Tell Us About Your Dream Safari
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-stone-500">
                    This is your chance to tell us anything that will
                    help us make your Uganda adventure special.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-10">
              <FieldLabel htmlFor="message">
                Your Safari Story
              </FieldLabel>

              <textarea
                id="message"
                name="message"
                rows={8}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your dream Uganda safari. What would make this trip unforgettable? You can mention specific parks, animals you hope to see, activities, your travel style, special occasions, or anything else you'd like us to know..."
                className={textareaClass}
              />

              <div className="mt-7 rounded-2xl border border-[#2f5d27]/15 bg-[#2f5d27]/5 p-5 sm:p-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2f5d27]/10 text-[#2f5d27]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v18M3 12h18"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-stone-900">
                      Your safari will be made for you
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-stone-500">
                      We use your travel dates, group size,
                      accommodation preferences and interests to
                      create a personalised safari proposal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-stone-100 bg-[#faf9f5] px-6 py-5 sm:px-10">
              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={previousStep}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-stone-600 transition-colors hover:bg-white hover:text-stone-900"
                >
                  <ArrowLeft />
                  Back
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    inline-flex min-h-[56px]
                    items-center justify-center gap-2
                    rounded-xl bg-[#2f5d27]
                    px-8 text-sm font-bold text-white
                    shadow-xl shadow-[#2f5d27]/20
                    transition-all duration-200
                    hover:-translate-y-0.5 hover:bg-[#244a1e]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {loading ? (
                    <>
                      <svg
                        className="h-5 w-5 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
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

                      Preparing Your Enquiry...
                    </>
                  ) : (
                    <>
                      Request My Safari Quote
                      <ArrowRight />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </form>

      {/* =========================================================
          TRUST FOOTER
      ========================================================== */}
      <div className="mt-6 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6">
        <span className="text-xs text-stone-400">
          🔒 Your information is kept private
        </span>

        <span className="hidden h-1 w-1 rounded-full bg-stone-300 sm:block" />

        <span className="text-xs text-stone-400">
          No obligation
        </span>

        <span className="hidden h-1 w-1 rounded-full bg-stone-300 sm:block" />

        <span className="text-xs text-stone-400">
          Response within 24 hours
        </span>
      </div>
    </div>
  );
}
