import Image from "next/image";
import { getProjectBySlug } from "@/data/projects";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DetailHero from "@/components/ui/DetailHero";
import CTASection from "@/components/sections/CTASection";

export default function ProjectDetailTemplate({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  return (
    <>
      <DetailHero
        image={project.coverImage}
        eyebrow={`${project.category} · ${project.location} · ${project.year}`}
        title={project.title}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_320px]">
            <AnimatedSection>
              <h2 className="font-heading text-2xl font-bold text-heading">Project Overview</h2>
              <p className="mt-5 text-paragraph leading-relaxed">{project.description}</p>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.images.map((img) => (
                  <div key={img} className="relative h-64 overflow-hidden rounded-xl">
                    <Image src={img} alt={project.title} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-8">
              <div className="rounded-xl bg-surface p-6">
                <h3 className="font-heading text-base font-semibold text-heading">Scope</h3>
                <ul className="mt-3 space-y-2 text-sm text-paragraph">
                  {project.scope.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-surface p-6">
                <h3 className="font-heading text-base font-semibold text-heading">Materials</h3>
                <ul className="mt-3 space-y-2 text-sm text-paragraph">
                  {project.materials.map((m) => (
                    <li key={m} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
