"use client";

import { useEffect, useRef } from "react";

export default function TiltCard({
  children,
  className = "",
  max = 6,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;

    function handleMove(e: PointerEvent) {
      const rect = node!.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rotateY = (px - 0.5) * max * 2;
        const rotateX = (0.5 - py) * max * 2;
        node!.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
        node!.style.setProperty("--mx", `${px * 100}%`);
        node!.style.setProperty("--my", `${py * 100}%`);
      });
    }

    function handleLeave() {
      cancelAnimationFrame(frame);
      node!.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    }

    node.addEventListener("pointermove", handleMove);
    node.addEventListener("pointerleave", handleLeave);

    return () => {
      node.removeEventListener("pointermove", handleMove);
      node.removeEventListener("pointerleave", handleLeave);
      cancelAnimationFrame(frame);
    };
  }, [max]);

  return (
    <div ref={ref} className={`tilt-card relative ${className}`}>
      <div className="tilt-card-glow" />
      {children}
    </div>
  );
}
