import Link from "next/link";
import { company } from "@/lib/content";

const highlights = [
  "Industrial services",
  "Utilities O&M",
  "Catering & camps",
  "Facility management",
];

export default function MainHero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-slate-900"
      aria-labelledby="hero-heading"
    >
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-sky-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24">
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
