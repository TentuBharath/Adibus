import Link from "next/link";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowUpRight } from "lucide-react";

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Six disciplines, one accountable team."
          description="From the first architectural sketch to the final finishing touch, every discipline is delivered in-house — so nothing gets lost between vendors."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.08}>
              <Link
                href={`/services/${service.slug}/`}
                className="group block h-full rounded-xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(11,45,82,0.18)]"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-heading text-xl font-semibold text-heading">
                    {service.name}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-accent opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-paragraph">
                  {service.shortDescription}
                </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
