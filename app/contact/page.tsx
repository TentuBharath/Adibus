import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import Button from "@/components/ui/Button";
import { site, founder } from "@/data/company";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AdiBab's Home Designs — Visakhapatnam, Hyderabad and Bangalore. Book a consultation for your architecture, interior design or turnkey project.",
  alternates: { canonical: "/contact/" },
};

const faqs = [
  {
    question: "Which cities does AdiBab's Home Designs work in?",
    answer:
      "We are headquartered in Visakhapatnam, with active studios in Hyderabad and Bangalore, and take on projects across all three cities.",
  },
  {
    question: "Do you handle both design and construction?",
    answer:
      "Yes. AdiBab's is a turnkey practice — architecture, interior design, BOQ, procurement and site execution are all managed in-house by one accountable team.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope, but every project follows the same five-stage process — brief, concept design, 3D visualization, drawings & BOQ, and execution & handover — with milestones tracked against a shared schedule.",
  },
  {
    question: "Can I see a 3D visualization before construction starts?",
    answer:
      "Yes. Every project includes photorealistic renders and walkthroughs so you can approve materials, lighting and layout before any construction begins.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your space."
        description="Reach out for a consultation, or send us your site details and we'll get back to you within one business day."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-heading">Send a Message</h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl bg-surface p-8">
                <h3 className="font-heading text-lg font-semibold text-heading">Get in Touch</h3>
                <ul className="mt-5 space-y-4 text-sm text-paragraph">
                  <li>
                    <span className="block text-xs uppercase tracking-wide text-accent">
                      Email
                    </span>
                    <a href={`mailto:${site.email}`} className="hover:text-secondary">
                      {site.email}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-wide text-accent">
                      Phone
                    </span>
                    <a href={`tel:${site.phone}`} className="hover:text-secondary">
                      {site.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-wide text-accent">
                      WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/${site.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-secondary"
                    >
                      Message us on WhatsApp
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-wide text-accent">
                      Studios
                    </span>
                    Visakhapatnam (HQ) · Hyderabad · Bangalore
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-wide text-accent">
                      Founder
                    </span>
                    {founder.name} — {founder.email}
                  </li>
                </ul>
                <div className="mt-6">
                  <Button href="/contact/" variant="secondary" className="w-full">
                    Book Consultation
                  </Button>
                </div>
              </div>

              <div className="h-72 overflow-hidden rounded-xl border border-border">
                <iframe
                  title="AdiBab's Home Designs — Visakhapatnam"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Visakhapatnam,Andhra%20Pradesh&output=embed"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <Container>
          <h2 className="font-heading text-2xl font-bold text-heading md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-border bg-white p-6">
                <h3 className="font-heading text-base font-semibold text-heading">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paragraph">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
