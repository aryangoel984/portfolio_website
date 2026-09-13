"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/achievements", label: "Achievements" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <nav className="container-site flex h-16 items-center justify-between lg:h-[4.25rem]">
        <Link
          href="/"
          className="group flex items-center gap-2 font-display text-2xl font-semibold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          <span className="font-mono text-accent transition-colors group-hover:text-accent-hover">
            &lt;/&gt;
          </span>
          <span>{siteConfig.name}</span>
        </Link>

        <button
          type="button"
          className="relative inline-flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative pb-0.5 text-sm font-medium tracking-wide transition-colors ${
                  active
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-accent transition-transform duration-300 ${
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100 group-hover:bg-border-hover"
                  }`}
                />
              </Link>
            );
          })}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center rounded-sm border border-accent bg-accent px-3.5 py-1.5 text-sm font-semibold tracking-wide text-background transition-colors hover:bg-accent-hover"
          >
            Resume
          </a>
        </div>
      </nav>

      <div
        className={`grid overflow-hidden border-border bg-card/95 backdrop-blur-md transition-[grid-template-rows,border-color] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <div className="min-h-0">
          <div className="container-site flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 px-1 py-2.5 text-base font-medium transition-colors ${
                    active ? "text-accent" : "text-muted hover:text-foreground"
                  }`}
                >
                  <span
                    className={`h-1 w-1 rounded-full bg-accent transition-opacity ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {link.label}
                </Link>
              );
            })}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center rounded-sm bg-accent px-4 py-2.5 text-sm font-semibold text-background"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
