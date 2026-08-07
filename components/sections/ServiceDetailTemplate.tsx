import Image from "next/image";
import { getServiceBySlug } from "@/data/services";
import { galleryImages } from "@/data/gallery";
import { processSteps } from "@/data/company";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DetailHero from "@/components/ui/DetailHero";
import CTASection from "@/components/sections/CTASection";
import { CheckCircle } from "lucide-react";
import { serviceSchema } from "@/lib/schema";

export default function ServiceDetailTemplate({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) return null;

  const galleryPick = galleryImages.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(service.name, service.overview, service.slug)
          ),
        }}
      />
      <DetailHero image={service.heroImage} eyebrow="Our Services" title={service.name} />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <AnimatedSection>
              <SectionHeading eyebrow="Overview" title={service.shortDescription} />
              <p className="mt-6 text-paragraph leading-relaxed">{service.overview}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="rounded-xl bg-surface p-8">
              <h3 className="font-heading text-lg font-semibold text-heading">What We Deliver</h3>
              <ul className="mt-6 space-y-4">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed text-paragraph">{f}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-primary">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="How this service comes together."
            align="center"
            light
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.08}>
                <span className="font-heading text-2xl font-bold text-accent">{step.step}</span>
                <h4 className="mt-3 font-heading text-base font-semibold text-white">{step.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  {step.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <Container>
          <SectionHeading eyebrow="Gallery" title="A look at the finish quality." />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {galleryPick.map((img) => (
              <div key={img.src} className="relative h-72 overflow-hidden rounded-xl">
                <Image src={img.src} alt={img.caption} fill className="object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
