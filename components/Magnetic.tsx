"use client";

import { useEffect, useRef } from "react";

export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
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
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node!.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
      });
    }

    function handleLeave() {
      cancelAnimationFrame(frame);
      node!.style.transform = "translate(0, 0)";
    }

    node.addEventListener("pointermove", handleMove);
    node.addEventListener("pointerleave", handleLeave);

    return () => {
      node.removeEventListener("pointermove", handleMove);
      node.removeEventListener("pointerleave", handleLeave);
      cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`magnetic inline-flex ${className}`}>
      {children}
    </div>
  );
}
