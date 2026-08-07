import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("office-interiors")!;

export const metadata: Metadata = {
  title: "Office Interiors",
  description: service.shortDescription,
  alternates: { canonical: "/services/office-interiors/" },
};

export default function Page() {
  return <ServiceDetailTemplate slug="office-interiors" />;
}
