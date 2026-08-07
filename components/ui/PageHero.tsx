import { ReactNode } from "react";
import Container from "@/components/ui/Container";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-primary pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      <Container className="relative">
        <p className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
