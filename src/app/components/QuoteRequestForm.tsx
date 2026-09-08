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
  'Wildlife Game Drives',
  'Boat Safaris',
  'Birdwatching',
  'Nature Walks',
  'Cultural Experiences',
  'Photography',
  'Scenic Landscapes',
];

interface QuoteRequestFormProps {
  preselectedPackage?: string;
}

export default function QuoteRequestForm({ preselectedPackage }: QuoteRequestFormProps) {
  const [form, setForm] = useState<FormData>({
    ...initialForm,
    selectedPackage: preselectedPackage || '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleCheckbox(value: string) {
    setForm((prev) => {
      const current = prev.safariInterests;
      return {
        ...prev,
        safariInterests: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 sm:p-12 text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Thank You for Your Safari Inquiry
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Our team will review your requirements and get back to you with a personalized quotation. We typically respond within 24 hours.
        </p>
        <div className="bg-muted rounded p-4 text-sm text-muted-foreground mb-6">
          <strong className="text-foreground">What happens next?</strong>
          <ul className="mt-2 space-y-1 text-left">
            <li>✓ Our safari team reviews your requirements</li>
            <li>✓ We prepare a personalized itinerary and quotation</li>
            <li>✓ You receive a detailed proposal by email</li>
            <li>✓ We refine the plan together until it is perfect</li>
          </ul>
        </div>
        <a
          href="https://wa.me/256774729464"
          className="btn-whatsapp inline-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {/* Traveller Information */}
      <fieldset className="space-y-4">
        <legend className="font-display text-xl font-bold text-foreground mb-4 pb-2 border-b border-border w-full block">
          Traveller Information
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={form.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1.5">
              Phone / WhatsApp Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 234 567 8900"
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-semibold text-foreground mb-1.5">
              Country of Residence <span className="text-red-500">*</span>
            </label>
            <input
              id="country"
              name="country"
              type="text"
              required
              value={form.country}
              onChange={handleChange}
              placeholder="e.g. United Kingdom"
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            />
          </div>
        </div>
      </fieldset>

      {/* Safari Information */}
      <fieldset className="space-y-4">
        <legend className="font-display text-xl font-bold text-foreground mb-4 pb-2 border-b border-border w-full block">
          Safari Information
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label htmlFor="selectedPackage" className="block text-sm font-semibold text-foreground mb-1.5">
              Safari Package of Interest
            </label>
            <select
              id="selectedPackage"
              name="selectedPackage"
              value={form.selectedPackage}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            >
              <option value="">Select a package (or describe your own)</option>
              {tourPackages.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.title} — {pkg.duration}
                </option>
              ))}
              <option value="custom">Custom / Tailor-Made Safari</option>
            </select>
          </div>
          <div>
            <label htmlFor="travelDate" className="block text-sm font-semibold text-foreground mb-1.5">
              Preferred Travel Date
            </label>
            <input
              id="travelDate"
              name="travelDate"
              type="text"
              value={form.travelDate}
              onChange={handleChange}
              placeholder="e.g. March 2027 or flexible"
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="numTravellers" className="block text-sm font-semibold text-foreground mb-1.5">
              Total Number of Travellers
            </label>
            <input
              id="numTravellers"
              name="numTravellers"
              type="number"
              min="1"
              value={form.numTravellers}
              onChange={handleChange}
              placeholder="e.g. 2"
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="numAdults" className="block text-sm font-semibold text-foreground mb-1.5">
              Number of Adults
            </label>
            <input
              id="numAdults"
              name="numAdults"
              type="number"
              min="1"
              value={form.numAdults}
              onChange={handleChange}
              placeholder="e.g. 2"
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="numChildren" className="block text-sm font-semibold text-foreground mb-1.5">
              Number of Children
            </label>
            <input
              id="numChildren"
              name="numChildren"
              type="number"
              min="0"
              value={form.numChildren}
              onChange={handleChange}
              placeholder="e.g. 0"
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="accommodationLevel" className="block text-sm font-semibold text-foreground mb-1.5">
              Preferred Accommodation Level
            </label>
            <select
              id="accommodationLevel"
              name="accommodationLevel"
              value={form.accommodationLevel}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            >
              <option value="">Select accommodation level</option>
              <option value="budget">Budget / Camping</option>
              <option value="midrange">Mid-Range Lodge</option>
              <option value="upmarket">Upmarket Lodge</option>
              <option value="luxury">Luxury / Premium</option>
              <option value="flexible">Flexible / Open to suggestions</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* Trip Preferences */}
      <fieldset className="space-y-4">
        <legend className="font-display text-xl font-bold text-foreground mb-4 pb-2 border-b border-border w-full block">
          Trip Preferences
        </legend>

        <div>
          <p className="text-sm font-semibold text-foreground mb-2">Safari Interests (select all that apply)</p>
          <div className="flex flex-wrap gap-2">
            {safariInterestOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => handleCheckbox(opt)}
                className={`px-3 py-2 text-xs font-semibold rounded border transition-all min-h-[36px] ${
                  form.safariInterests.includes(opt)
                    ? 'bg-primary text-white border-primary' :'bg-background text-foreground border-border hover:border-primary'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="gorillaTrekking" className="block text-sm font-semibold text-foreground mb-1.5">
              Gorilla Trekking Interest
            </label>
            <select
              id="gorillaTrekking"
              name="gorillaTrekking"
              value={form.gorillaTrekking}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            >
              <option value="">Select an option</option>
              <option value="yes-essential">Yes — essential part of my trip</option>
              <option value="yes-if-possible">Yes — if possible</option>
              <option value="not-sure">Not sure yet</option>
              <option value="no">Not interested</option>
            </select>
          </div>
          <div>
            <label htmlFor="chimpanzeeTrekking" className="block text-sm font-semibold text-foreground mb-1.5">
              Chimpanzee Trekking Interest
            </label>
            <select
              id="chimpanzeeTrekking"
              name="chimpanzeeTrekking"
              value={form.chimpanzeeTrekking}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            >
              <option value="">Select an option</option>
              <option value="yes-essential">Yes — essential part of my trip</option>
              <option value="yes-if-possible">Yes — if possible</option>
              <option value="not-sure">Not sure yet</option>
              <option value="no">Not interested</option>
            </select>
          </div>
          <div>
            <label htmlFor="wildlifeInterests" className="block text-sm font-semibold text-foreground mb-1.5">
              Wildlife Interests
            </label>
            <input
              id="wildlifeInterests"
              name="wildlifeInterests"
              type="text"
              value={form.wildlifeInterests}
              onChange={handleChange}
              placeholder="e.g. Big Five, birds, primates"
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="culturalExperiences" className="block text-sm font-semibold text-foreground mb-1.5">
              Cultural Experiences
            </label>
            <input
              id="culturalExperiences"
              name="culturalExperiences"
              type="text"
              value={form.culturalExperiences}
              onChange={handleChange}
              placeholder="e.g. Kampala city tour, village visits"
              className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="specialRequests" className="block text-sm font-semibold text-foreground mb-1.5">
            Special Requests or Requirements
          </label>
          <input
            id="specialRequests"
            name="specialRequests"
            type="text"
            value={form.specialRequests}
            onChange={handleChange}
            placeholder="e.g. dietary requirements, accessibility needs, celebrations"
            className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
          />
        </div>
      </fieldset>

      {/* Message */}
      <fieldset>
        <legend className="font-display text-xl font-bold text-foreground mb-4 pb-2 border-b border-border w-full block">
          Your Message
        </legend>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1.5">
            Tell us about your ideal Uganda safari
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your dream Uganda safari — the experiences you are looking for, any specific parks or activities, your travel style, and anything else that will help us create the perfect itinerary for you."
            className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
          />
        </div>
      </fieldset>

      {/* Custom quote message */}
      <div className="bg-muted border border-border rounded p-4 text-sm text-muted-foreground leading-relaxed">
        <strong className="text-foreground block mb-1">Every Safari Is Tailored to You</strong>
        Your safari quotation depends on your travel dates, number of travellers, accommodation preferences, activities and other requirements. Our team will prepare a personalized quotation based on your information above.
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full sm:w-auto justify-center text-base py-4 px-10 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Request My Quote'
        )}
      </button>
    </form>
  );
}

