"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import headshot from "@/public/images/headshot.jpg";

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

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
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
        }
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

/* ── Stat card ───────────────────────────────────────────── */
const stats = [
  { value: 400, suffix: "+", label: "LeetCode Solved" },
  { value: 4, suffix: "×", label: "Hackathon Awards" },
  { value: 3, suffix: "", label: "Live Products" },
  { value: 8, suffix: ".74", label: "CGPA at DTU" },
] as const;

/* ── Component ───────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden border-b border-border">

      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="dot-grid absolute inset-0 opacity-40" />
        {/* Soft glow blobs */}
        <div className="animate-float absolute right-[6%] top-[10%] h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="animate-float-slow absolute left-[2%] bottom-[15%] h-60 w-60 rounded-full bg-accent/4 blur-2xl" />
        {/* Decorative rings */}
        <div className="animate-float absolute right-[10%] top-[18%] h-44 w-44 rounded-full border border-accent/10" />
        <div className="animate-float-slow absolute right-[16%] top-[24%] h-72 w-72 rounded-full border border-accent/6" />
      </div>

      <div className="container-site relative grid items-center gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:py-28">

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
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted sm:text-2xl [text-wrap:balance]">
            {siteConfig.tagline}
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted [text-wrap:pretty]">
            {siteConfig.intro}
          </p>

          {/* CTA row */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
            >
              View Projects
            </Link>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-b border-accent/40 pb-0.5 text-sm font-semibold tracking-wide text-accent transition-colors hover:border-accent hover:text-accent-hover"
            >
              Download Resume
            </a>
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
                className="stat-card rounded-xl border border-border bg-card/90 px-3 py-4 text-center backdrop-blur-sm"
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

        {/* ── Right: photo with floating badges ────────────── */}
        <div className="mx-auto w-full max-w-[340px] lg:max-w-[400px]">
          <div className="relative">
            {/* Gradient halo behind photo */}
            <div
              className="absolute -inset-4 rounded-[2rem] blur-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(22,58,95,0.16) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Photo card */}
            <div className="relative overflow-hidden rounded-[1.25rem] border border-border bg-surface shadow-2xl shadow-accent/10">
              <Image
                src={headshot}
                alt={`${siteConfig.name}, Software Engineer`}
                width={1122}
                height={1402}
                priority
                sizes="(max-width: 1024px) 340px, 400px"
                className="h-auto w-full object-cover object-top"
              />
            </div>

            {/* Floating badge: University */}
            <div className="float-badge absolute -bottom-5 -left-5 max-w-[180px] rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-xl shadow-foreground/8">
              <p className="text-[0.7rem] font-bold leading-snug text-foreground">
                Delhi Technological University
              </p>
              <p className="mt-0.5 text-[0.62rem] font-medium text-muted">
                B.Tech IT · 2023 to 2027
              </p>
            </div>

            {/* Floating badge: Internship */}
            <div className="float-badge-alt absolute -right-5 -top-5 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-xl shadow-foreground/8">
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
