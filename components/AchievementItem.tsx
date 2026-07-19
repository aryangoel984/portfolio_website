import type { Achievement } from "@/data/achievements";

export default function AchievementItem({ item }: { item: Achievement }) {
  return (
    <article className="border-b border-border py-8 last:border-b-0">
      <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:gap-10">
        <div>
          {/* Result badge + date row */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-sm bg-accent-soft px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-accent">
              {item.result}
            </span>
            <p className="font-mono text-xs tracking-wide text-muted">
              {item.date}
            </p>
          </div>

          {/* Name */}
          <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-foreground sm:text-[1.3rem]">
            {item.name}
          </h3>

          {/* Context */}
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {item.context}
          </p>
        </div>

        {/* Link */}
        {item.projectUrl ? (
          <a
            href={item.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 shrink-0 self-start text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            View Project →
          </a>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
}
