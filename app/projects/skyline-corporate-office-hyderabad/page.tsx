import type { Metadata } from "next";
import ProjectDetailTemplate from "@/components/sections/ProjectDetailTemplate";
import { getProjectBySlug } from "@/data/projects";

const project = getProjectBySlug("skyline-corporate-office-hyderabad")!;

export const metadata: Metadata = {
  title: "Skyline Corporate Office",
  description: project.description,
  alternates: { canonical: "/projects/skyline-corporate-office-hyderabad/" },
};

export default function Page() {
  return <ProjectDetailTemplate slug="skyline-corporate-office-hyderabad" />;
}
