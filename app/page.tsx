import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import ExperienceItem from "@/components/ExperienceItem";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { featuredProjects } from "@/data/projects";
import { experience } from "@/data/experience";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.intro,
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── EXPERIENCE ───────────────────────────────────────── */}
      <section className="section-pad border-b border-border">
        <div className="container-site">
          <Reveal>
            <div className="mb-14 flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="page-eyebrow">Work Experience</p>
                <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground [text-wrap:balance] sm:text-5xl">
                  Where I have built
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-muted [text-wrap:pretty]">
                  Production work on LLM systems, retrieval pipelines, and real-time backend architecture.
                </p>
              </div>
              <Link
                href="/experience"
                className="shrink-0 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                Full experience
              </Link>
            </div>
          </Reveal>

          <div className="max-w-4xl space-y-6">
            {experience.map((item) => (
              <Reveal key={`${item.company}-${item.role}`}>
                <ExperienceItem item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <div className="mb-14 flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="page-eyebrow">Selected Work</p>
                <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground [text-wrap:balance] sm:text-5xl">
                  Projects that show how I build
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-muted [text-wrap:pretty]">
                  Full-stack and AI systems with live demos, from multi-agent simulators to real-time fraud detection.
                </p>
              </div>
              <Link
                href="/projects"
                className="shrink-0 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                All projects
              </Link>
            </div>
          </Reveal>

          <div className="space-y-20 lg:space-y-28">
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
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-border bg-background-alt">
        <div
          className="dot-grid pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
        />
        <div className="container-site section-pad relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="page-eyebrow justify-center">Let&apos;s build something</p>
              <h2 className="gradient-text mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Open to Software Engineer roles
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted [text-wrap:pretty]">
                SDE and Full-Stack positions, with interest in AI-ML adjacent work.
                Based in Delhi, open to remote and hybrid opportunities.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Magnetic>
                  <Link
                    href="/contact"
                    className="magnetic inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-background transition-all duration-200 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
                  >
                    Get in Touch
                    <span aria-hidden="true">→</span>
                  </Link>
                </Magnetic>
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  View Resume
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
