import InnerBanner from "@/components/InnerBanner";
import { serviceDetail } from "@/lib/content";

export const metadata = {
  title: "Industrial Services",
};

export default function IndustrialServicesPage() {
  const d = serviceDetail.industrial;

  return (
    <>
      <InnerBanner
        title={d.title}
        subtitle={d.intro}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { href: "/services/industrial", label: d.title },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-[family-name:var(--font-oswald)] text-2xl font-semibold text-slate-900">
              Where we plug in
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              {d.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Field leadership</p>
            <p className="mt-3">
              Superintendents and package owners align daily priorities to permit
              windows, crane paths, and client inspection hold points.
            </p>
          </aside>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {d.sections.map((s) => (
            <section
              key={s.heading}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="font-[family-name:var(--font-oswald)] text-xl font-semibold text-slate-900">
                {s.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
