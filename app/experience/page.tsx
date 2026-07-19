import type { Metadata } from "next";
import Link from "next/link";
import ExperienceItem from "@/components/ExperienceItem";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience: Software Engineering Intern at AiRo Digital Labs.",
};

export default function ExperiencePage() {
  return (
    <div className="container-site section-pad">
      <Reveal>
        <header className="page-header">
          <p className="page-eyebrow">Career</p>
          <h1 className="page-title">Experience</h1>
          <p className="page-lead">
            Production work on LLM systems, retrieval pipelines, and real-time
            backend architecture.
          </p>
        </header>
      </Reveal>

      <div className="max-w-4xl space-y-6">
        {experience.map((item) => (
          <Reveal key={`${item.company}-${item.role}`}>
            <ExperienceItem item={item} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 max-w-4xl border-t border-border pt-10">
        <p className="text-sm leading-relaxed text-muted">
          Previously: competitive hackathons and independent products spanning
          multi-agent systems, fraud detection, semantic search, and catalog
          infrastructure, documented on the{" "}
          <Link
            href="/projects"
            className="font-medium text-accent hover:text-accent-hover"
          >
            Projects
          </Link>{" "}
          and{" "}
          <Link
            href="/achievements"
            className="font-medium text-accent hover:text-accent-hover"
          >
            Achievements
          </Link>{" "}
          pages.
        </p>
      </Reveal>
    </div>
  );
}
