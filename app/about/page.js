import InnerBanner from "@/components/InnerBanner";
import { company, missionVision } from "@/lib/content";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <InnerBanner
        title="About ZOMCO"
        backgroundImage="/images/banner3.jpg"
        subtitle={`${company.legalName} — ${company.tagline}`}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-800">
            Company introduction
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Headquartered in {company.hq}, ZOMCO has grown alongside the Kingdom’s
            industrial and infrastructure agenda. We combine field leadership,
            technical depth, and disciplined reporting so clients can focus on their
            core missions.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-[family-name:var(--font-oswald)] text-xl font-semibold text-slate-900">
              Mission
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {missionVision.mission}
            </p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-[family-name:var(--font-oswald)] text-xl font-semibold text-slate-900">
              Vision
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {missionVision.vision}
            </p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-[family-name:var(--font-oswald)] text-xl font-semibold text-slate-900">
              Values
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-slate-600">
              {missionVision.values.map((v) => (
                <li key={v.title}>
                  <p className="font-semibold text-slate-900">{v.title}</p>
                  <p className="mt-1">{v.text}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
