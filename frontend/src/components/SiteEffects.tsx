import { useEffect, useRef } from "react";
import "./SiteEffects.css";

export const SiteEffects = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onPointerMove = (event: PointerEvent) => {
      if (!finePointer) return;
      ringRef.current?.style.setProperty("--x", `${event.clientX}px`);
      ringRef.current?.style.setProperty("--y", `${event.clientY}px`);
      dotRef.current?.style.setProperty("--x", `${event.clientX}px`);
      dotRef.current?.style.setProperty("--y", `${event.clientY}px`);
    };

    const onPointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      const interactive = target.closest("a, button, input, textarea, select, [data-cursor]");
      ringRef.current?.classList.toggle("is-active", Boolean(interactive));
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const amount = max > 0 ? window.scrollY / max : 0;
      progressRef.current?.style.setProperty("--progress", `${amount}`);
    };

    if (!reduceMotion) window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerover", onPointerOver);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="iv-progress" ref={progressRef} aria-hidden="true" />
      <div className="iv-cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="iv-cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="iv-noise" aria-hidden="true" />
      <div className="iv-ambient iv-ambient--one" aria-hidden="true" />
      <div className="iv-ambient iv-ambient--two" aria-hidden="true" />
    </>
  );
};
