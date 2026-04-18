import Link from "next/link";
import { company, missionVision, stats } from "@/lib/content";

export default function HomeAbout() {
  return (
    <section className="border-y border-slate-200 bg-white" aria-labelledby="home-about-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-800">
              About {company.shortName}
            </p>
            <h2
              id="home-about-heading"
              className="mt-2 font-[family-name:var(--font-oswald)] text-3xl font-semibold text-slate-900 sm:text-4xl"
            >
              Complex O&amp;M for demanding clients
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Since {company.founded}, we have executed complex operations and
              maintenance programs for commercial and government clients across the
              Kingdom — with safety, quality, and partnership at the center of how
              we work.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                <span>
                  <strong className="text-slate-900">Mission:</strong>{" "}
                  {missionVision.mission}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                <span>
                  <strong className="text-slate-900">Vision:</strong>{" "}
                  {missionVision.vision}
                </span>
              </li>
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Read more about us
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center transition hover:border-sky-200 hover:bg-white"
              >
                <p className="font-[family-name:var(--font-oswald)] text-3xl font-semibold text-slate-900 sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
