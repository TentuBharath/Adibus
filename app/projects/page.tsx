import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/sections/CTASection";
import ProjectsGridClient from "@/components/sections/ProjectsGridClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A portfolio of residential, commercial, office, villa, restaurant and hospitality projects delivered by AdiBab's Home Designs.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Homes and workplaces designed around how you actually live."
      />

      <section className="py-20 md:py-28">
        <Container>
          <ProjectsGridClient />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
