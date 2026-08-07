import type { Metadata } from "next";
import ServiceDetailTemplate from "@/components/sections/ServiceDetailTemplate";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("interior-design")!;

export const metadata: Metadata = {
  title: "Interior Design",
  description: service.shortDescription,
  alternates: { canonical: "/services/interior-design/" },
};

export default function Page() {
  return <ServiceDetailTemplate slug="interior-design" />;
}
