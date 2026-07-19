import type { Metadata } from "next";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { featuredProjects, otherProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured and additional projects by Aryan Goel: full-stack, AI, and machine learning.",
};

export default function ProjectsPage() {
  return (
    <div className="container-site section-pad">
      <Reveal>
        <header className="page-header">
          <p className="page-eyebrow">Portfolio</p>
          <h1 className="page-title">Projects</h1>
          <p className="page-lead">
            Deployed products with live previews, plus competition and research
            work across AI, fraud prevention, and commerce infrastructure.
          </p>
        </header>
      </Reveal>

      <section>
        <Reveal>
          <div className="mb-12 flex items-baseline justify-between border-b border-border pb-4">
            <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
              Featured
            </h2>
            <p className="font-mono text-xs tracking-wide text-muted">
              {featuredProjects.length} live systems
            </p>
          </div>
        </Reveal>

        <div className="space-y-24 lg:space-y-32">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.name}>
              <FeaturedProjectCard
                project={project}
                reverse={index % 2 === 1}
                index={index + 1}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24 border-t border-border pt-16 lg:mt-32 lg:pt-20">
        <Reveal>
          <div className="mb-12 flex items-baseline justify-between border-b border-border pb-4">
            <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
              Other work
            </h2>
            <p className="font-mono text-xs tracking-wide text-muted">
              {otherProjects.length} projects
            </p>
          </div>
        </Reveal>

        <div>
          {otherProjects.map((project, index) => (
            <Reveal key={project.name}>
              <ProjectCard
                project={project}
                index={index + 1}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
