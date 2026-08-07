import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline-light" | "outline-dark";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-body font-semibold text-sm tracking-wide transition-all duration-300";

  const variants: Record<string, string> = {
    primary:
      "bg-accent text-white shadow-[0_16px_32px_-16px_rgba(255,107,74,0.55)] hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-16px_rgba(255,107,74,0.6)]",
    secondary:
      "bg-primary text-white shadow-[0_16px_32px_-16px_rgba(11,45,82,0.45)] hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-16px_rgba(11,45,82,0.5)]",
    "outline-light":
      "border border-white/40 text-white hover:border-white hover:bg-white hover:text-primary",
    "outline-dark":
      "border border-border text-heading hover:border-primary hover:bg-primary hover:text-white",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
