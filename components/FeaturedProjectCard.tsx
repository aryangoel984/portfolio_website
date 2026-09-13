import Image from "next/image";
import type { FeaturedProject } from "@/data/projects";
import TiltCard from "@/components/TiltCard";

export default function FeaturedProjectCard({
  project,
  reverse = false,
  index = 1,
}: {
  project: FeaturedProject;
  reverse?: boolean;
  index?: number;
}) {
  const displayUrl = project.liveUrl
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  return (
    <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
      <div
        className={`lg:col-span-7 ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <TiltCard max={3} className="overflow-hidden rounded-lg border border-border bg-card">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
            aria-label={`Open live demo of ${project.name}`}
          >
            <div className="flex items-center gap-3 border-b border-border bg-surface/60 px-4 py-2.5">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="truncate font-mono text-[11px] tracking-wide text-muted">
                {displayUrl}
              </span>
            </div>
            <div className="relative aspect-16/10 w-full bg-surface">
              <Image
                src={project.screenshot}
                alt={`${project.name} preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
              />
              <div className="absolute inset-0 flex items-end justify-start bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="m-5 inline-flex items-center gap-1.5 rounded-sm bg-accent px-3.5 py-2 text-xs font-semibold tracking-wide text-background">
                  View Live <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          </a>
        </TiltCard>
      </div>

      <div
        className={`lg:col-span-5 ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-accent">
          {String(index).padStart(2, "0")}
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-[2.15rem]">
          {project.name}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-6 space-y-3 border-l border-border pl-4">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="text-[0.95rem] leading-relaxed text-foreground/80 sm:text-base"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="skill-tag inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            View Code →
          </a>
        </div>
      </div>
    </article>
  );
}
