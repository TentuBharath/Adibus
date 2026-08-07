import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("turnkey-solutions")!;

export const metadata: Metadata = {
  title: "Turnkey Solutions",
  description: service.shortDescription,
  alternates: { canonical: "/services/turnkey-solutions/" },
};

export default function Page() {
  return <ServiceDetailTemplate slug="turnkey-solutions" />;
}
