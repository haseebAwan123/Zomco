export default function ProjectCard({
  title,
  sector,
  location,
  year,
  summary,
}) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-sky-800">
        <span className="rounded-full bg-sky-50 px-2 py-0.5">{sector}</span>
        <span className="text-slate-500">{year}</span>
      </div>
      <h2 className="mt-3 font-[family-name:var(--font-oswald)] text-lg font-semibold text-slate-900">
        {title}
      </h2>
      <p className="mt-1 text-sm text-slate-500">{location}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {summary}
      </p>
    </article>
  );
}
