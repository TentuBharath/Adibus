import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("architectural-design")!;

export const metadata: Metadata = {
  title: "Architectural Design",
  description: service.shortDescription,
  alternates: { canonical: "/services/architectural-design/" },
};

export default function Page() {
  return <ServiceDetailTemplate slug="architectural-design" />;
}
