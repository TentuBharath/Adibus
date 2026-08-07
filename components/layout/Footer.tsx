import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/company";
import { mainNav } from "@/data/nav";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container className="py-20 md:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-4 md:gap-10">
          <div className="md:col-span-1">
            <Image
              src="/images/brand/adibabs-logo.png"
              alt="AdiBab's Home Designs"
              width={160}
              height={104}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-white/50 mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {mainNav.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-white/50 mb-5">
              Cities We Serve
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {site.cities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-white/50 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone}`} className="transition-colors hover:text-accent">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="text-white/60">Headquartered in Visakhapatnam</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Architecture · Interior Design · Turnkey Execution</p>
        </div>
      </Container>
    </footer>
  );
}
