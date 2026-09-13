"use client";

import { useState } from "react";
import { skills } from "@/data/skills";
import TiltCard from "@/components/TiltCard";

type CategoryKey = keyof typeof skills;

const categories: {
  key: CategoryKey;
  label: string;
  tagClass: string;
}[] = [
  {
    key: "languages",
    label: "Languages",
    tagClass:
      "border-sky-500/25 bg-sky-500/10 text-sky-300 hover:border-sky-400/50 hover:bg-sky-500/15",
  },
  {
    key: "frameworks",
    label: "Frameworks",
    tagClass:
      "border-violet-500/25 bg-violet-500/10 text-violet-300 hover:border-violet-400/50 hover:bg-violet-500/15",
  },
  {
    key: "databases",
    label: "Databases",
    tagClass:
      "border-emerald-500/25 bg-emerald-500/10 text-emerald-300 hover:border-emerald-400/50 hover:bg-emerald-500/15",
  },
  {
    key: "tools",
    label: "Tools and Cloud",
    tagClass:
      "border-orange-500/25 bg-orange-500/10 text-orange-300 hover:border-orange-400/50 hover:bg-orange-500/15",
  },
  {
    key: "coreSubjects",
    label: "Core CS",
    tagClass:
      "border-accent/25 bg-accent-soft text-accent hover:border-accent/50 hover:bg-accent-soft",
  },
];

export default function SkillsSection() {
  const [active, setActive] = useState<CategoryKey | "all">("all");

  const visible =
    active === "all"
      ? categories
      : categories.filter((c) => c.key === active);

  return (
    <div>
      {/* Filter pills */}
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter skills by category">
        <button
          onClick={() => setActive("all")}
          className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-150 ${
            active === "all"
              ? "border-accent bg-accent text-background shadow-sm shadow-accent/30"
              : "border-border bg-card text-muted hover:border-accent/40 hover:text-foreground"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(active === cat.key ? "all" : cat.key)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-150 ${
              active === cat.key
                ? "border-accent bg-accent text-background shadow-sm shadow-accent/30"
                : "border-border bg-card text-muted hover:border-accent/40 hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skill groups */}
      <div className="space-y-5">
        {visible.map((cat) => (
          <TiltCard
            key={cat.key}
            max={1.5}
            className="rounded-xl border border-border bg-card p-5 sm:p-6"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills[cat.key].map((skill) => (
                <span
                  key={skill}
                  className={`skill-tag inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium ${cat.tagClass}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Gamified note */}
      <p className="mt-6 text-xs text-muted/70">
        Click a category pill above to filter. Hover tags to highlight.
      </p>
    </div>
  );
}
