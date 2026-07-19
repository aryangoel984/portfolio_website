import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
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
            <div className="space-y-0 border-t border-border">
              {education.map((item) => (
                <article
                  key={`${item.institution}-${item.degree}`}
                  className="border-b border-border py-6"
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
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="mb-8 font-display text-2xl font-medium tracking-tight text-foreground">
              Contact
            </h2>

            <div className="space-y-0 border-t border-border">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex flex-col gap-1 border-b border-border py-5 transition-colors hover:bg-accent-soft/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  Email
                </span>
                <span className="text-sm font-medium text-foreground sm:text-right">
                  {siteConfig.email}
                </span>
              </a>

              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex flex-col gap-1 border-b border-border py-5 transition-colors hover:bg-accent-soft/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  Phone
                </span>
                <span className="text-sm font-medium text-foreground sm:text-right">
                  {siteConfig.phone}
                </span>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 border-b border-border py-5 transition-colors hover:bg-accent-soft/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  LinkedIn
                </span>
                <span className="text-sm font-medium text-foreground sm:text-right">
                  /in/aryan-goel-946a04264
                </span>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 border-b border-border py-5 transition-colors hover:bg-accent-soft/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  GitHub
                </span>
                <span className="text-sm font-medium text-foreground sm:text-right">
                  @aryangoel984
                </span>
              </a>

              <a
                href={siteConfig.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 border-b border-border py-5 transition-colors hover:bg-accent-soft/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  LeetCode
                </span>
                <span className="text-sm font-medium text-foreground sm:text-right">
                  {siteConfig.leetcodeStats}
                </span>
              </a>
            </div>

            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-accent px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:w-auto"
            >
              Download Resume
            </a>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
