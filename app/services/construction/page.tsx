import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("construction")!;

export const metadata: Metadata = {
  title: "Construction",
  description: service.shortDescription,
  alternates: { canonical: "/services/construction/" },
};

export default function Page() {
  return <ServiceDetailTemplate slug="construction" />;
}
