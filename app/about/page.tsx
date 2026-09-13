import type { Metadata } from "next";
import SkillsSection from "@/components/SkillsSection";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, interests, and technical skills of Aryan Goel.",
};

export default function AboutPage() {
  const paragraphs = siteConfig.about.split("\n\n");

  return (
    <div className="container-site section-pad">
      <Reveal>
        <header className="page-header">
          <p className="page-eyebrow">About</p>
          <h1 className="page-title">Background & skills</h1>
          <p className="page-lead">
            A concise look at how I work: systems, AI, and shipping reliable products.
          </p>
        </header>
      </Reveal>

      <Reveal>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="max-w-2xl space-y-5">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-[1.8] text-muted sm:text-[1.05rem]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <TiltCard
            max={2}
            className="h-fit rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Currently
            </p>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">
                  Role
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  Software Engineering Intern · AiRo Digital Labs
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">
                  Education
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  B.Tech IT · Delhi Technological University
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">
                  Focus
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  Backend systems, LLMs, full-stack products
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">
                  Practice
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  <a
                    href={siteConfig.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover"
                  >
                    {siteConfig.leetcodeStats}
                  </a>
                </dd>
              </div>
            </dl>
          </TiltCard>
        </div>
      </Reveal>

      <Reveal className="mt-20">
        <h2 className="mb-2 font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          Technical skills
        </h2>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted">
          Tools and foundations I use across internships, hackathons, and
          personal products.
        </p>
        <SkillsSection />
      </Reveal>
    </div>
  );
}
