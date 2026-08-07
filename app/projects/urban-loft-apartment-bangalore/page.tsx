import type { Metadata } from "next";
import ProjectDetailTemplate from "@/components/sections/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";

const project = getProjectBySlug("urban-loft-apartment-bangalore")!;

export const metadata: Metadata = {
  title: "Urban Loft Apartment",
  description: project.description,
  alternates: { canonical: "/projects/urban-loft-apartment-bangalore/" },
};

export default function Page() {
  return <ProjectDetailTemplate slug="urban-loft-apartment-bangalore" />;
}
