import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import Magnetic from "@/components/Magnetic";
import CopyButton from "@/components/CopyButton";
import { education } from "@/data/education";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: "Education background and contact details for Aryan Goel.",
};

export default function ContactPage() {
  return (
    <div className="container-site section-pad">
      <Reveal>
        <header className="page-header">
          <p className="page-eyebrow">Connect</p>
          <h1 className="page-title">Education & contact</h1>
          <p className="page-lead">
            Academic background and the fastest ways to reach me.
          </p>
        </header>
      </Reveal>

      <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <section>
            <h2 className="mb-8 font-display text-2xl font-medium tracking-tight text-foreground">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((item) => (
                <TiltCard
                  key={`${item.institution}-${item.degree}`}
                  max={1.5}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-semibold text-foreground">
                      {item.institution}
                    </h3>
                    {item.duration && (
                      <p className="font-mono text-xs tracking-wide text-muted">
                        {item.duration}
                      </p>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm text-accent">{item.degree}</p>
                  <p className="mt-1 text-sm text-muted">{item.score}</p>
                </TiltCard>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="mb-8 font-display text-2xl font-medium tracking-tight text-foreground">
              Contact
            </h2>

            <div className="space-y-3">
              <TiltCard
                max={1.5}
                className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4"
              >
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="min-w-0 flex-1"
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                    Email
                  </span>
                  <span className="mt-1 block truncate text-sm font-medium text-foreground">
                    {siteConfig.email}
                  </span>
                </a>
                <CopyButton value={siteConfig.email} />
              </TiltCard>

              <TiltCard
                max={1.5}
                className="rounded-xl border border-border bg-card"
              >
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex flex-col gap-1 px-5 py-4"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                    Phone
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {siteConfig.phone}
                  </span>
                </a>
              </TiltCard>

              <TiltCard
                max={1.5}
                className="rounded-xl border border-border bg-card"
              >
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1 px-5 py-4"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                    LinkedIn
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    /in/aryan-goel-946a04264
                  </span>
                </a>
              </TiltCard>

              <TiltCard
                max={1.5}
                className="rounded-xl border border-border bg-card"
              >
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1 px-5 py-4"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                    GitHub
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    @aryangoel984
                  </span>
                </a>
              </TiltCard>

              <TiltCard
                max={1.5}
                className="rounded-xl border border-border bg-card"
              >
                <a
                  href={siteConfig.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1 px-5 py-4"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                    LeetCode
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {siteConfig.leetcodeStats}
                  </span>
                </a>
              </TiltCard>
            </div>

            <Magnetic className="mt-8 flex w-full sm:w-auto">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent-hover sm:w-auto"
              >
                Download Resume
                <span aria-hidden="true">→</span>
              </a>
            </Magnetic>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
