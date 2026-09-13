"use client";

import { useEffect, useRef } from "react";

export default function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  /** @deprecated tilt motion was removed; kept so existing call sites don't need edits */
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;

    function handleMove(e: PointerEvent) {
      const rect = node!.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node!.style.setProperty("--mx", `${px * 100}%`);
        node!.style.setProperty("--my", `${py * 100}%`);
      });
    }

    node.addEventListener("pointermove", handleMove);

    return () => {
      node.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={`tilt-card relative ${className}`}>
      <div className="tilt-card-glow" />
      {children}
    </div>
  );
}
