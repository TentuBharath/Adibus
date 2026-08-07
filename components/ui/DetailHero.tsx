import Image from "next/image";
import Container from "@/components/ui/Container";

export default function DetailHero({
  image,
  eyebrow,
  title,
}: {
  image: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <section className="relative flex min-h-[64vh] items-end overflow-hidden bg-primary pt-32">
      <Image src={image} alt={title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/55 to-primary/20" />
      <Container className="relative pb-16">
        <p className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
          {title}
        </h1>
      </Container>
    </section>
  );
}
