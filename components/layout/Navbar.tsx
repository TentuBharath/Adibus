"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/nav";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur transition-all duration-300",
        scrolled ? "border-b border-border py-4 shadow-sm" : "border-b border-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/brand/adibabs-logo.png"
            alt="AdiBab's Home Designs"
            width={160}
            height={104}
            className="h-10 w-auto md:h-11"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {mainNav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="relative text-sm font-medium tracking-wide text-heading transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-primary hover:after:w-full"
              >
                {item.label}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="w-64 rounded-xl border border-border bg-white py-2 shadow-[0_24px_60px_-24px_rgba(11,45,82,0.25)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-heading hover:bg-surface hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact/" variant="secondary">
            Book Consultation
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 p-2 text-heading lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={cn("block h-0.5 w-6 bg-current transition-transform", mobileOpen && "translate-y-2 rotate-45")} />
          <span className={cn("block h-0.5 w-6 bg-current transition-opacity", mobileOpen && "opacity-0")} />
          <span className={cn("block h-0.5 w-6 bg-current transition-transform", mobileOpen && "-translate-y-2 -rotate-45")} />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden mt-4 border-t border-border bg-white">
          <div className="flex flex-col gap-1 px-6 py-6">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2.5 font-medium text-heading"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="flex flex-col pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-2 text-sm text-paragraph"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button href="/contact/" variant="secondary" className="mt-4 w-full">
              Book Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
