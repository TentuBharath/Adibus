"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Building2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Architecture · Interiors · Turnkey Execution
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-heading sm:text-5xl lg:text-[3.4rem]"
          >
            Designing Spaces With
            <br />
            <span className="italic text-accent">Uncompromising Precision</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paragraph md:text-lg lg:mx-0"
          >
            An architecture, interior design and turnkey execution practice
            taking every space from a blank floor plan to a fully lived-in
            reality, under one accountable roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Button href="/contact/" variant="primary">
              Book Consultation
            </Button>
            <Button href="/projects/" variant="outline-dark">
              View Projects
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
        >
          <div className="relative h-[340px] w-full overflow-hidden rounded-[2rem] shadow-2xl sm:h-[420px] md:h-[500px]">
            <Image
              src="/images/hero/hero-bedroom.jpg"
              alt="Luxury interior by AdiBab's Home Designs"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-xl sm:flex md:-bottom-8 md:-left-8 md:p-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Building2 className="h-5 w-5" />
            </span>
            <div>
              <p className="font-heading text-2xl font-bold leading-none text-heading">320+</p>
              <p className="mt-1 text-xs text-paragraph">Projects Delivered</p>
            </div>
          </div>

          <div className="absolute -right-4 -top-6 hidden h-28 w-28 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block md:-right-8 md:-top-8 md:h-36 md:w-36">
            <Image
              src="/images/gallery/living-room-marble-tv.jpg"
              alt="Living room interior by AdiBab's Home Designs"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
