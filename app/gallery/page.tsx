import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/sections/CTASection";
import GalleryGridClient from "@/components/sections/GalleryGridClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse living, kitchen, bedroom, office, exterior and construction photography from AdiBab's Home Designs projects.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Photographs from site." />

      <section className="py-20 md:py-28">
        <Container>
          <GalleryGridClient />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
