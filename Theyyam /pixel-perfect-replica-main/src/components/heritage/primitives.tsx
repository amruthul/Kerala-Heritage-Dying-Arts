import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "p" | "h2" | "span" }) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setIn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (setIn(true), io.disconnect()), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={cn("reveal", inView && "in", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

/** Progress (0..1) of an element passing through the viewport. */
export function useSectionProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const total = r.height + window.innerHeight;
        setP(Math.min(1, Math.max(0, (window.innerHeight - r.top) / total)));
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  return [ref, p] as const;
}

export function Img({ src, alt, className, eager, style }: { src: string; alt: string; className?: string; eager?: boolean; style?: React.CSSProperties }) {
  const [state, setState] = useState<"load" | "ok" | "err">("load");
  return (
    <div className={cn("relative overflow-hidden bg-card", className)}>
      {state === "load" && <div className="absolute inset-0 animate-pulse bg-muted" />}
      {state === "err" ? (
        <div className="absolute inset-0 flex items-center justify-center label-caps text-muted-foreground">Image unavailable</div>
      ) : (
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" onLoad={() => setState("ok")} onError={() => setState("err")}
          className="h-full w-full object-cover transition-[transform,filter] duration-700" style={style} />
      )}
    </div>
  );
}

export function ChapterLabel({ children }: { children: ReactNode }) {
  return <p className="label-caps text-accent">{children}</p>;
}
