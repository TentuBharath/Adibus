import { processSteps } from "@/data/company";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ProcessTimeline() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="Five stages, no shortcuts."
          align="center"
          light
          className="mx-auto"
        />
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-5">
          {processSteps.map((step, i) => (
            <AnimatedSection key={step.step} delay={i * 0.1} className="relative">
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-0">
                <span className="font-heading text-3xl font-bold text-accent">{step.step}</span>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block h-px w-full bg-white/20 my-5" />
                )}
              </div>
              <h3 className="mt-3 font-heading text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
