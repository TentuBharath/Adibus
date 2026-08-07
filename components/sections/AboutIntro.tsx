import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function AboutIntro() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Welcome"
              title="A studio built on one simple conviction."
              description="Good design is not decoration — it is the quiet engineering of how a family gathers, how a business performs, and how a guest feels the moment they walk through the door."
            />
            <p className="mt-6 text-paragraph leading-relaxed">
              We are an architecture, interior design and turnkey execution
              practice headquartered in Visakhapatnam, with studios in
              Hyderabad and Bangalore — built to take a space from a blank
              floor plan to a fully lived-in reality, under one accountable
              roof.
            </p>
            <div className="mt-8">
              <Button href="/about/" variant="secondary">
                Our Story
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="relative h-[420px] overflow-hidden rounded-xl md:h-[520px]">
            <Image
              src="/images/gallery/living-room-marble-tv.jpg"
              alt="AdiBab's Home Designs interior project"
              fill
              className="object-cover"
            />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
