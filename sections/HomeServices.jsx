import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/content";

export default function HomeServices() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="home-services-heading">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-800">
          What we do
        </p>
        <h2
          id="home-services-heading"
          className="mt-2 font-[family-name:var(--font-oswald)] text-3xl font-semibold text-slate-900 sm:text-4xl"
        >
          Integrated operations &amp; maintenance
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          From industrial sites to utilities and campuses, ZOMCO mobilizes the
          right teams, systems, and governance to keep critical environments
          running.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <ServiceCard
            key={s.slug}
            title={s.title}
            summary={s.summary}
            href={s.href}
          />
        ))}
      </div>
    </section>
  );
}
