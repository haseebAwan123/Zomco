import InnerBanner from "@/components/InnerBanner";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/content";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <InnerBanner
        title="Services"
        subtitle="Industrial, utilities, catering & camps, and integrated facility management — delivered with consistent governance and measurable KPIs."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              summary={s.summary}
              href={s.href}
            />
          ))}
        </div>

        <section
          id="catering"
          className="mt-20 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          aria-labelledby="catering-heading"
        >
          <h2
            id="catering-heading"
            className="font-[family-name:var(--font-oswald)] text-2xl font-semibold text-slate-900"
          >
            Catering &amp; camp management
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            We invest in culinary talent, nutrition planning, and camp lifecycle
            services so remote sites maintain morale, compliance, and predictable
            cost profiles. Programs include multi-shift dining, retail outlets,
            housekeeping, and soft services orchestrated under one accountable lead.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <li className="rounded-lg bg-slate-50 px-4 py-3">
              Menu engineering &amp; HACCP-aligned kitchens
            </li>
            <li className="rounded-lg bg-slate-50 px-4 py-3">
              Camp accommodation &amp; facilities operations
            </li>
            <li className="rounded-lg bg-slate-50 px-4 py-3">
              Workforce logistics &amp; service level dashboards
            </li>
            <li className="rounded-lg bg-slate-50 px-4 py-3">
              Subcontractor governance &amp; audits
            </li>
          </ul>
        </section>

        <section
          id="facility"
          className="mt-10 scroll-mt-24 rounded-2xl border border-slate-200 bg-slate-900 p-8 text-slate-100 shadow-sm"
          aria-labelledby="facility-heading"
        >
          <h2
            id="facility-heading"
            className="font-[family-name:var(--font-oswald)] text-2xl font-semibold text-white"
          >
            Facility management
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Zamil Operations &amp; Maintenance was founded in 1977 to support
            demanding built environments. Today we deliver integrated hard and soft
            services — from MEP care to cleaning, security coordination, and
            workplace experience — underpinned by digital work orders and clear
            escalation paths.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-300">
                Hard services
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Planned preventive maintenance, minor projects, vendor coordination,
                and asset register hygiene for commercial and government campuses.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-300">
                Soft services
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Janitorial, landscaping support, reception, and mailroom programs
                aligned to SLAs and inspection cadences.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
