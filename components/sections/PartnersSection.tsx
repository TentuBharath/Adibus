import { partners } from "@/data/company";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function PartnersSection() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Trusted Partners"
          title="Premium materials, matched with precision execution."
          description="We don't leave fenestration and door hardware to chance. Every project specifies named, warrantied manufacturer systems for windows, glass and doors — so the finish performs as well years from now as it does on handover day."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <AnimatedSection
              key={partner.name}
              className="rounded-xl border border-border bg-white p-8"
            >
              <h3 className="font-heading text-xl font-semibold text-heading">{partner.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
                {partner.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-paragraph">
                {partner.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {partner.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-paragraph"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs text-paragraph">{partner.contact}</p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
