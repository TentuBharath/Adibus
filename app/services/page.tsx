import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/sections/CTASection";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architectural design, interior design, construction, turnkey solutions, landscape design and office interiors — all delivered by one in-house team.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Six disciplines, one accountable team."
        description="From the first architectural sketch to the final finishing touch, every discipline is delivered in-house — so nothing gets lost between vendors."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${service.slug}/`}
                  className="group grid grid-cols-1 gap-8 rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(11,45,82,0.18)] md:grid-cols-[280px_1fr] md:items-center md:p-8"
                >
                  <div className="relative h-56 overflow-hidden rounded-xl md:h-48">
                    <Image
                      src={service.heroImage}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h2 className="font-heading text-2xl font-bold text-heading">
                        {service.name}
                      </h2>
                      <ArrowUpRight className="h-6 w-6 shrink-0 text-accent opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </div>
                    <p className="mt-3 text-paragraph leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
