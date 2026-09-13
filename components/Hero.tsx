"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import TiltCard from "@/components/TiltCard";
import Magnetic from "@/components/Magnetic";

/* ── Animated counter ────────────────────────────────────── */
function AnimatedCounter({
  end,
  suffix = "",
  duration = 1600,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        if (reduceMotion) {
          setCount(end);
          return;
        }

        const step = 16;
        const increment = end / (duration / step);
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, step);
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} aria-label={`${end}${suffix}`}>
      {count}
      {suffix}
    </span>
  );
}

/* ── Stat data ───────────────────────────────────────────── */
const stats = [
  { value: 400, suffix: "+", label: "LeetCode Solved" },
  { value: 4, suffix: "×", label: "Hackathon Awards" },
  { value: 3, suffix: "", label: "Live Products" },
  { value: 8, suffix: ".74", label: "CGPA at DTU" },
] as const;

/* ── Terminal lines (same identity info, presented as output) */
const terminalLines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: siteConfig.name },
  { prompt: true, text: "cat role.txt" },
  { prompt: false, text: siteConfig.targetRole },
  { prompt: true, text: "status --current" },
  { prompt: false, text: "Open to SDE & Full-Stack roles", accent: true },
];

/* ── Component ───────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden border-b border-border">
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="dot-grid absolute inset-0 opacity-30" />
        <div className="animate-float absolute right-[6%] top-[10%] h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="animate-float-slow absolute left-[2%] bottom-[15%] h-60 w-60 rounded-full bg-accent/5 blur-2xl" />
        <div className="animate-float absolute right-[10%] top-[18%] h-44 w-44 rounded-full border border-accent/10" />
        <div className="animate-float-slow absolute right-[16%] top-[24%] h-72 w-72 rounded-full border border-accent/5" />
      </div>

      <div className="container-site relative grid items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
        {/* ── Left: text ───────────────────────────────────── */}
        <div className="max-w-2xl">
          {/* Open-to-work badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent-soft px-4 py-1.5">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping-beacon absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-accent">
              Open to SDE and Full-Stack roles
            </span>
          </div>

          <p className="page-eyebrow">{siteConfig.targetRole}</p>
          <h1 className="gradient-text mt-4 font-display text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.5rem]">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted sm:text-2xl [text-wrap:balance]">
            {siteConfig.tagline}
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted/90 [text-wrap:pretty]">
            {siteConfig.intro}
          </p>

          {/* CTA row */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link
                href="/projects"
                className="magnetic inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-background transition-all duration-200 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
              >
                View Projects
                <span aria-hidden="true">→</span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic inline-flex items-center justify-center border-b border-accent/40 pb-0.5 text-sm font-semibold tracking-wide text-accent transition-colors hover:border-accent hover:text-accent-hover"
              >
                Download Resume
              </a>
            </Magnetic>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-b border-transparent pb-0.5 text-sm font-medium tracking-wide text-muted transition-colors hover:border-muted hover:text-foreground"
            >
              Contact
            </Link>
          </div>

          {/* Animated stat cards */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-card rounded-xl border border-border bg-card/80 px-3 py-4 text-center backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-bold tabular-nums text-accent">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: interactive terminal card ──────────────── */}
        <div className="mx-auto w-full max-w-[440px]">
          <TiltCard max={4}>
            <div className="terminal-window">
              <div className="flex items-center gap-2 border-b border-border bg-surface/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 truncate font-mono text-[11px] tracking-wide text-muted">
                  aryan@dtu — zsh
                </span>
              </div>

              <div className="grid-pattern space-y-3 p-6 font-mono text-[0.83rem] leading-relaxed">
                {terminalLines.map((line, i) => (
                  <p
                    key={i}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${i * 140}ms` }}
                  >
                    {line.prompt ? (
                      <>
                        <span className="text-emerald-400">➜</span>{" "}
                        <span className="text-accent">~</span>{" "}
                        <span className="text-foreground">{line.text}</span>
                      </>
                    ) : (
                      <span
                        className={
                          line.accent
                            ? "font-semibold text-accent"
                            : "text-muted"
                        }
                      >
                        {line.text}
                      </span>
                    )}
                  </p>
                ))}
                <p className="text-emerald-400">
                  ➜ <span className="text-accent">~</span>{" "}
                  <span className="animate-caret text-foreground">▍</span>
                </p>
              </div>
            </div>
          </TiltCard>

          {/* Floating badges */}
          <div className="float-badge relative mt-4 flex flex-wrap gap-3">
            <div className="rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-xl shadow-black/20">
              <p className="text-[0.7rem] font-bold leading-snug text-foreground">
                Delhi Technological University
              </p>
              <p className="mt-0.5 text-[0.62rem] font-medium text-muted">
                B.Tech IT · 2023 to 2027
              </p>
            </div>
            <div className="float-badge-alt rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-xl shadow-black/20">
              <p className="text-[0.7rem] font-bold leading-snug text-foreground">
                AiRo Digital Labs
              </p>
              <p className="mt-0.5 text-[0.62rem] font-medium text-muted">
                SWE Intern · 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
