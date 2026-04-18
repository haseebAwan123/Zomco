import InnerBanner from "@/components/InnerBanner";
import { certifications } from "@/lib/content";

export const metadata = {
  title: "Certifications",
};

export default function CertificationsPage() {
  return (
    <>
      <InnerBanner
        title="Certifications"
        backgroundImage="/images/banner2.jpg"
        subtitle="Management systems and client approvals that underpin how we mobilize teams and manage risk."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/certifications", label: "Certifications" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2">
          {certifications.map((c) => (
            <li
              key={c.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sky-200 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-800">
                {c.issuer}
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-oswald)] text-xl font-semibold text-slate-900">
                {c.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{c.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
