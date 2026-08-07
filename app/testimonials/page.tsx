import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What clients say about working with AdiBab's Home Designs.",
  alternates: { canonical: "/testimonials/" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What clients say after we hand over the keys."
      />
      <TestimonialsGrid />
      <CTASection />
    </>
  );
}
