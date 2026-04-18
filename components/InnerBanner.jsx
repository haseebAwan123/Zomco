import Link from "next/link";

/**
 * Page header for all non-home routes — title, optional subtitle, optional breadcrumbs.
 */
export default function InnerBanner({
  title,
  subtitle,
  breadcrumbs = [],
}) {
  return (
    <section
      className="relative border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white"
      aria-labelledby="page-title"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        {breadcrumbs.length > 0 && (
          <nav className="mb-4 text-xs font-medium text-slate-300" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="text-slate-500" aria-hidden>
                      /
                    </span>
                  )}
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-slate-100">{crumb.label}</span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="transition hover:text-white hover:underline"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1
          id="page-title"
          className="font-[family-name:var(--font-oswald)] text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
