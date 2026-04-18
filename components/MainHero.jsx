"use client";

import Link from "next/link";
import { company } from "@/lib/content";
import { Fragment, useEffect, useState } from "react";

const highlights = [
  "Industrial services",
  "Utilities O&M",
  "Catering & camps",
  "Facility management",
];

/** Time between slide changes (ms) */
const AUTO_SLIDE_MS = 4000;
/** Crossfade duration — keep comfortably below AUTO_SLIDE_MS */
const FADE_MS = 900;

export default function MainHero() {
  const [slides, setSlides] = useState([]);
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    const id = requestAnimationFrame(sync);
    mq.addEventListener("change", sync);
    return () => {
      cancelAnimationFrame(id);
      mq.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/banners", { cache: "no-store" });
        if (!res.ok) throw new Error("banners");
        const data = await res.json();
        const list = Array.isArray(data.images) ? data.images : [];
        if (!cancelled) setSlides(list);
      } catch {
        if (!cancelled) setSlides([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (slides.length <= 1 || reduceMotion) return undefined;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, AUTO_SLIDE_MS);
    return () => window.clearInterval(id);
  }, [slides.length, reduceMotion]);

  // Warm the next frame to reduce decode pop-in
  useEffect(() => {
    if (slides.length === 0) return;
    const next = slides[(active + 1) % slides.length];
    const img = new window.Image();
    img.decoding = "async";
    img.src = next;
  }, [active, slides]);

  return (
    <section
      className="relative isolate flex min-h-[min(88vh,56rem)] flex-col overflow-hidden bg-slate-900"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed image slider — fixed stacking; opacity crossfade avoids layout shift */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-slate-900"
        aria-hidden="true"
      >
        {slides.length === 0 ? null : (
          <div className="absolute inset-0">
            {slides.map((src, i) => (
              <Fragment key={src}>
                {/* eslint-disable-next-line @next/next/no-img-element -- opacity-stack slider */}
                <img
                  src={src}
                  alt=""
                  decoding="async"
                  fetchPriority={i === 0 ? "high" : "low"}
                  className={[
                    "absolute inset-0 h-full w-full object-cover",
                    "ease-in-out will-change-[opacity]",
                    i === active ? "z-[1] opacity-100" : "z-0 opacity-0",
                  ].join(" ")}
                  style={{
                    transitionProperty: "opacity",
                    transitionDuration: `${FADE_MS}ms`,
                  }}
                />
              </Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Dark overlay for headline contrast (~55%) */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-black/55"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300/90">
            {company.legalName}
          </p>
          <h1
            id="hero-heading"
            className="mt-3 font-[family-name:var(--font-oswald)] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Facilities, utilities & industrial{" "}
            <span className="text-sky-300">operations</span> you can trust.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            Complex O&amp;M for commercial and government clients — disciplined
            crews, transparent governance, and measurable outcomes across the
            Kingdom.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:-translate-y-0.5 hover:bg-sky-500 hover:shadow-xl"
            >
              View services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-400 hover:bg-white/5"
            >
              Talk to our team
            </Link>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-3 sm:gap-4">
          {highlights.map((label) => (
            <div
              key={label}
              className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-100 backdrop-blur transition hover:border-amber-300/40 hover:bg-white/10"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
