import type { OtherProject } from "@/data/projects";
import TiltCard from "@/components/TiltCard";

export default function ProjectCard({
  project,
  index,
}: {
  project: OtherProject;
  index: number;
}) {
  return (
    <TiltCard
      max={1.5}
      className="mt-5 rounded-xl border border-border bg-card px-6 py-8 first:mt-0 sm:px-8"
    >
      <div className="grid sm:grid-cols-[4rem_1fr_auto] sm:gap-8">
        <p className="mb-4 font-mono text-xs tracking-[0.16em] text-accent sm:mb-0 sm:pt-1">
          {String(index).padStart(2, "0")}
        </p>

        <div className="min-w-0">
          <h3 className="font-display text-xl font-medium tracking-tight text-foreground sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-muted sm:text-[0.95rem]">
            {project.description}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <ul className="mt-5 space-y-2.5 border-l-2 border-border pl-4">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-foreground/75 sm:text-[0.9rem]"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="skill-tag inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex shrink-0 items-start text-sm font-semibold text-accent transition-colors hover:text-accent-hover sm:mt-0.5"
        >
          View Code →
        </a>
      </div>
    </TiltCard>
  );
}
