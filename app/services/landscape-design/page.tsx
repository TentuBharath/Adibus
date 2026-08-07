import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("landscape-design")!;

export const metadata: Metadata = {
  title: "Landscape Design",
  description: service.shortDescription,
  alternates: { canonical: "/services/landscape-design/" },
};

export default function Page() {
  return <ServiceDetailTemplate slug="landscape-design" />;
}
