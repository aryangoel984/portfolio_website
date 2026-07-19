import type { ExperienceItem as ExperienceItemType } from "@/data/experience";

export default function ExperienceItem({
  item,
}: {
  item: ExperienceItemType;
}) {
  return (
    <article className="relative overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      {/* Left accent bar */}
      <div
        className="absolute bottom-0 left-0 top-0 w-1"
        style={{
          background:
            "linear-gradient(to bottom, var(--accent) 0%, rgba(22,58,95,0.15) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="px-6 py-6 pl-8 sm:px-8 sm:py-8 sm:pl-10">
        {/* Header row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            {item.type && (
              <span className="mb-2.5 inline-flex items-center rounded-full border border-accent/20 bg-accent-soft px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-widest text-accent">
                {item.type}
              </span>
            )}
            <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
              {item.role}
            </h3>
            <p className="mt-0.5 text-base font-semibold text-accent">
              {item.company}
            </p>
          </div>

          <div className="shrink-0 rounded-lg border border-border bg-surface px-3.5 py-1.5 text-center sm:text-right">
            <p className="font-mono text-xs font-medium tracking-wide text-muted">
              {item.duration}
            </p>
          </div>
        </div>

        {/* Bullet list with hover highlight */}
        <ul className="mt-6 space-y-1.5">
          {item.bullets.map((bullet, i) => (
            <li
              key={i}
              className="group flex cursor-default gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-accent-soft/60"
            >
              <span
                className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40 transition-colors duration-150 group-hover:bg-accent"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-muted transition-colors duration-150 group-hover:text-foreground">
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        {/* Tech stack chips */}
        {item.techStack && item.techStack.length > 0 && (
          <div className="mt-6 border-t border-border pt-5">
            <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
              Tech Used
            </p>
            <div className="flex flex-wrap gap-2">
              {item.techStack.map((tech) => (
                <span
                  key={tech}
                  className="skill-tag inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
