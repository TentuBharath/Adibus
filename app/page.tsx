import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import AboutIntro from "@/components/sections/AboutIntro";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUsGrid from "@/components/sections/WhyUsGrid";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Architecture, Interior Design & Turnkey Execution",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutIntro />
      <ServicesGrid />
      <WhyUsGrid />
      <FeaturedProjects />
      <ProcessTimeline />
      <TestimonialsGrid />
      <CTASection />
    </>
  );
}
