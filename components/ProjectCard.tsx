import type { OtherProject } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: OtherProject;
  index: number;
}) {
  return (
    <article className="border-t border-border py-10 first:border-t-0 first:pt-0">
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

          <p className="mt-5 text-xs font-medium uppercase tracking-[0.1em] text-muted/80">
            {project.techStack.join("  ·  ")}
          </p>
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
    </article>
  );
}
