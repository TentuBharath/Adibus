import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/[0.07] blur-3xl" />
      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-secondary/[0.08] blur-3xl" />
      <Container className="relative text-center">
        <AnimatedSection>
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
            Let&rsquo;s Build Your Dream Space
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Tell us about your site, your budget and how you want to live or
            work — we&rsquo;ll take it from there.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/contact/" variant="primary">
              Book a Consultation
            </Button>
            <Button href="/projects/" variant="outline-light">
              View Projects
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
