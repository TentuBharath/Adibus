import type { Metadata } from "next";
import ProjectDetailTemplate from "@/components/sections/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";

const project = getProjectBySlug("luxury-villa-rushikonda")!;

export const metadata: Metadata = {
  title: "A Luxury Villa in Rushikonda",
  description: project.description,
  alternates: { canonical: "/projects/luxury-villa-rushikonda/" },
};

export default function Page() {
  return <ProjectDetailTemplate slug="luxury-villa-rushikonda" />;
}
