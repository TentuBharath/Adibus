import { stats } from "@/data/company";
import Container from "@/components/ui/Container";
import StatCounter from "@/components/ui/StatCounter";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function StatsSection() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection
              key={stat.label}
              delay={i * 0.1}
              className="rounded-xl border border-border bg-white px-6 py-8 text-center"
            >
              <StatCounter value={stat.value} suffix={stat.suffix} isYear={stat.isYear} />
              <p className="mt-2 text-sm leading-snug text-paragraph md:text-base">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
