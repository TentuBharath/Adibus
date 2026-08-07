import { projects } from "@/data/projects";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";

export default function FeaturedProjects() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Featured Work"
            title="A small sample of spaces we've delivered."
          />
          <Button href="/projects/" variant="secondary" className="shrink-0">
            View All Projects
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 0.1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
