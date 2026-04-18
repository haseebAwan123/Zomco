import InnerBanner from "@/components/InnerBanner";
import { stakeholders } from "@/lib/content";

export const metadata = {
  title: "Stakeholders",
};

export default function StakeholdersPage() {
  return (
    <>
      <InnerBanner
        title="Stakeholders"
        subtitle="Organizations we are proud to support — logos shown as stylized placeholders for this demo build."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/stakeholders", label: "Stakeholders" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {stakeholders.map((s) => (
            <li
              key={s.name}
              className="flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-slate-900 font-[family-name:var(--font-oswald)] text-xl font-semibold text-amber-300">
                {s.abbr}
              </span>
              <span className="text-sm font-medium text-slate-800">{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
