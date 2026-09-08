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

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    travelDates: '',
    travelers: '',
    safari: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend connection point: send form data to email/CRM here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">Safari Enquiry Received!</h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
          Thank you, {form.name || 'traveller'}. We&apos;ll review your enquiry and respond within 24 hours. For urgent queries, WhatsApp us at +256 774 729464.
        </p>
        <a
          href="https://wa.me/256774729464"
          className="btn-whatsapp mt-6 inline-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Us Now
        </a>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <span className="section-label block mb-2">Make an Enquiry</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
          Request a Safari Quote
        </h2>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          Fill in the form below and we&apos;ll create a personalised itinerary for your Uganda safari.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" aria-label="Safari enquiry form" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="form-label">Full Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="form-field"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">Email Address *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="form-field"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="form-label">Phone / WhatsApp</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="form-field"
              placeholder="+1 555 000 0000"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="country" className="form-label">Country of Residence</label>
            <input
              id="country"
              name="country"
              type="text"
              autoComplete="country-name"
              className="form-field"
              placeholder="e.g. United States"
              value={form.country}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="travelDates" className="form-label">Preferred Travel Dates</label>
            <input
              id="travelDates"
              name="travelDates"
              type="text"
              className="form-field"
              placeholder="e.g. March 2026, flexible"
              value={form.travelDates}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="travelers" className="form-label">Number of Travellers</label>
            <input
              id="travelers"
              name="travelers"
              type="number"
              min="1"
              max="50"
              className="form-field"
              placeholder="e.g. 2"
              value={form.travelers}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="safari" className="form-label">Safari / Package of Interest</label>
          <select
            id="safari"
            name="safari"
            className="form-field"
            value={form.safari}
            onChange={handleChange}
          >
            <option value="">Select a safari or destination…</option>
            {safariOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="form-field resize-y"
            placeholder="Tell us about your ideal safari — budget, interests, accommodation preferences, special requirements…"
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button type="submit" className="btn-primary flex-1 justify-center">
            Send My Safari Enquiry
          </button>
          <a
            href="https://wa.me/256774729464"
            className="btn-whatsapp flex-1 justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Plan on WhatsApp
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          Your information is used only to respond to your safari enquiry. We do not share your details with third parties.
        </p>
      </form>
    </div>
  );
}
