import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ProjectCard({
  project,
  delay = 0,
  priority = false,
}: {
  project: Project;
  delay?: number;
  priority?: boolean;
}) {
  return (
    <AnimatedSection delay={delay}>
      <Link
        href={`/projects/${project.slug}/`}
        className="group block overflow-hidden rounded-xl"
      >
        <div className="relative h-72 overflow-hidden rounded-xl md:h-80">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              {project.category} · {project.location}
            </p>
            <h3 className="mt-2 font-heading text-xl font-semibold">{project.title}</h3>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}
