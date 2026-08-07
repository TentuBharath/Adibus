import { whyUs } from "@/data/company";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Gem, Handshake, Clock, HardHat, Box, Compass, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Gem,
  Handshake,
  Clock,
  HardHat,
  Box,
  Compass,
};

export default function WhyUsGrid() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why AdiBab's"
          title="Six reasons clients return for their second and third project."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Gem;
            return (
              <AnimatedSection
                key={item.title}
                delay={i * 0.08}
                className="rounded-xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(11,45,82,0.18)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paragraph">
                  {item.description}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
