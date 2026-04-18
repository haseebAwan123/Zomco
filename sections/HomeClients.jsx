import Link from "next/link";
import { stakeholders } from "@/lib/content";

export default function HomeClients() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="home-clients-heading">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-800">
            Our clients
          </p>
          <h2
            id="home-clients-heading"
            className="mt-2 font-[family-name:var(--font-oswald)] text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Trusted by leading organizations
          </h2>
          <p className="mt-3 max-w-xl text-base text-slate-600">
            Representative stakeholders we support across industrial, utility, and
            institutional programs.
          </p>
        </div>
        <Link
          href="/stakeholders"
          className="inline-flex shrink-0 items-center text-sm font-semibold text-sky-800 transition hover:gap-1"
        >
          View stakeholders →
        </Link>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stakeholders.map((c) => (
          <li
            key={c.name}
            className="flex aspect-[5/3] flex-col items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:border-sky-200"
          >
            <span className="rounded-md bg-slate-900 px-3 py-2 font-[family-name:var(--font-oswald)] text-lg font-semibold tracking-wide text-amber-300">
              {c.abbr}
            </span>
            <span className="text-xs font-medium text-slate-600">{c.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
