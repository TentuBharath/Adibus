import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/sections/CTASection";
import {
  processSteps,
  workflow,
  visualization,
  qualityAssurance,
  technology,
  projectManagement,
  materialsNetwork,
} from "@/data/company";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Five stages, no shortcuts — from brief and site study through 3D visualization, drawings and BOQ, to supervised execution and handover.",
  alternates: { canonical: "/process/" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero eyebrow="How We Work" title="Five stages, no shortcuts." />

      {/* Design process timeline */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.08}>
                <span className="font-heading text-3xl font-bold text-accent">{step.step}</span>
                <div className="mt-3 h-px w-full bg-border" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-heading">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paragraph">
                  {step.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Workflow */}
      <section className="py-20 md:py-28 bg-primary">
        <Container>
          <SectionHeading
            eyebrow="Project Workflow"
            title="Who does what, and when."
            align="center"
            light
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-5">
            {workflow.map((w, i) => (
              <AnimatedSection key={w.stage} delay={i * 0.08} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white font-heading font-bold">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-white">{w.stage}</h3>
                <p className="mt-2 text-xs text-white/70">{w.detail}</p>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* 3D Visualization */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 items-center">
            <AnimatedSection>
              <SectionHeading
                eyebrow="3D Visualization"
                title="See it before it's built."
                description="Every project is fully visualized before construction begins — photorealistic renders and walkthroughs that let you approve materials, lighting and layout with confidence, not guesswork."
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="rounded-xl bg-surface p-8">
              <ul className="space-y-4">
                {visualization.map((v) => (
                  <li key={v} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-heading">{v}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Quality assurance */}
      <section className="py-20 md:py-28 bg-primary">
        <Container>
          <SectionHeading
            eyebrow="Quality Assurance"
            title="Quality isn't inspected at the end. It's checked at every stage."
            align="center"
            light
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {qualityAssurance.map((q, i) => (
              <AnimatedSection key={q.title} delay={i * 0.08} className="text-center">
                <h3 className="font-heading text-base font-semibold text-white">{q.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  {q.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Materials network */}
      <section className="py-20 md:py-28 bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Materials & Vendor Network"
            title="Every category, sourced from a named, vetted manufacturer."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {materialsNetwork.map((m) => (
              <div key={m.category} className="rounded-xl border border-border bg-white p-6">
                <h3 className="font-heading text-base font-semibold text-heading">{m.category}</h3>
                <p className="mt-1 text-sm text-accent">{m.brand}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Technology & Software"
            title="Industry-standard tools, used by people who know them well."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technology.map((t) => (
              <div key={t.name} className="rounded-xl border border-border p-6">
                <h3 className="font-heading text-base font-semibold text-heading">{t.name}</h3>
                <p className="mt-2 text-sm text-paragraph">{t.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project management */}
      <section className="py-20 md:py-28 bg-primary">
        <Container>
          <SectionHeading
            eyebrow="Project Management"
            title="You always know exactly where your project stands."
            align="center"
            light
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {projectManagement.map((p) => (
              <div key={p.title} className="text-center">
                <h3 className="font-heading text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
