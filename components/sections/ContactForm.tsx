"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { site } from "@/data/company";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-heading">Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/15"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-heading">Phone</label>
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/15"
            placeholder="+91"
          />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-heading">Email</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/15"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-heading">
          Tell us about your project
        </label>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/15"
          placeholder="Site location, approximate size, budget range, timeline..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 font-body text-sm font-semibold tracking-wide text-white shadow-[0_16px_32px_-16px_rgba(255,107,74,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-[0_20px_40px_-16px_rgba(255,107,74,0.6)]"
      >
        Send Message
      </button>
      {submitted && (
        <p className="text-sm text-secondary">
          Your email client should have opened with this message pre-filled —
          just hit send. You can also reach us directly at {site.email}.
        </p>
      )}
    </form>
  );
}
