import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/sections/CTASection";
import {
  founder,
  guides,
  mission,
  vision,
  coreValues,
  timeline,
  designPhilosophy,
  site,
} from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, mission, vision and values behind AdiBab's Home Designs — an architecture and interior design practice founded in 2018 in Visakhapatnam.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AdiBab's"
        title="A multi-disciplinary practice, run like one accountable team."
        description="AdiBab's Home Designs is an architecture, interior design and turnkey execution company headquartered in Visakhapatnam, with active studios in Hyderabad and Bangalore. We work across residential, commercial, hospitality and institutional spaces — carrying a project from concept design through 3D visualization, BOQ, site execution and final handover, without passing it between disconnected vendors."
      />

      {/* Founder message */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[320px_1fr]">
            <AnimatedSection className="rounded-xl bg-primary p-8 text-white">
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-accent/60">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-center font-heading text-xl font-semibold">
                {founder.name}
              </h3>
              <p className="mt-1 text-center text-sm text-white/70">
                {founder.role}
              </p>
              <div className="mt-6 space-y-2 text-center text-sm text-white/70">
                <a href={`mailto:${founder.email}`} className="block hover:text-accent">
                  {founder.email}
                </a>
                <a href={`tel:${founder.phone}`} className="block hover:text-accent">
                  {founder.phone}
                </a>
              </div>
              <blockquote className="mt-8 border-t border-white/10 pt-6 text-center font-heading text-lg italic leading-relaxed text-white/90">
                &ldquo;{founder.quote}&rdquo;
              </blockquote>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <SectionHeading
                eyebrow="Founder's Message"
                title="Built on Quality. Delivered with Excellence."
              />
              <div className="mt-6 space-y-4 text-paragraph leading-relaxed">
                {founder.message.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <p className="mt-6 font-heading italic text-heading">
                — {founder.name}
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* What guides us */}
      <section className="py-20 md:py-24 bg-surface">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 items-center">
            <AnimatedSection>
              <SectionHeading
                eyebrow="What Guides Us"
                title="Principles we don't compromise on."
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <ul className="space-y-4">
                {guides.map((g) => (
                  <li
                    key={g}
                    className="flex items-start gap-3 rounded-xl border border-border bg-white p-5 text-heading"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    {g}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Company story timeline */}
      <section className="py-20 md:py-28 bg-primary">
        <Container>
          <SectionHeading
            eyebrow="Company Story"
            title="From a single drafting table to three cities."
            align="center"
            light
            className="mx-auto"
          />
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-5">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.08} className="relative">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-2xl font-bold text-accent">{item.year}</span>
                </div>
                <div className="mt-3 h-px w-full bg-white/20" />
                <p className="mt-4 text-sm leading-relaxed text-white/70">{item.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Mission · Vision · Values"
            title="What we build toward."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <AnimatedSection className="rounded-xl bg-surface p-8">
              <h3 className="font-heading text-lg font-semibold text-accent">Mission</h3>
              <p className="mt-4 text-paragraph leading-relaxed">{mission}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="rounded-xl bg-surface p-8">
              <h3 className="font-heading text-lg font-semibold text-accent">Vision</h3>
              <p className="mt-4 text-paragraph leading-relaxed">{vision}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="rounded-xl bg-primary p-8 text-white">
              <h3 className="font-heading text-lg font-semibold text-accent">Core Values</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {coreValues.map((v) => (
                  <li key={v} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {v}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Design philosophy */}
      <section className="py-20 md:py-28 bg-primary">
        <Container>
          <p className="mx-auto max-w-3xl text-center font-heading text-2xl italic leading-relaxed text-white md:text-3xl">
            &ldquo;A space should solve the way you live before it impresses
            the way you look.&rdquo;
          </p>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {designPhilosophy.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="h-px w-12 bg-accent" />
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
