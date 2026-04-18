import Link from "next/link";

export default function ServiceCard({
  title,
  summary,
  href,
  badge,
}) {
  const body = (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-[family-name:var(--font-oswald)] text-xl font-semibold text-slate-900 group-hover:text-sky-800">
          {title}
        </h2>
        {badge && (
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-600">
            {badge}
          </span>
        )}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {summary}
      </p>
      {href && (
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sky-700 transition group-hover:gap-2">
          View service
          <span aria-hidden>→</span>
        </span>
      )}
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="group block h-full">
        {body}
      </Link>
    );
  }

  return <div className="group block h-full">{body}</div>;
}
