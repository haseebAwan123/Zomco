import Link from "next/link";

export default function HomeContactCta() {
  return (
    <section className="bg-slate-900 py-16 text-white" aria-labelledby="home-cta-heading">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <h2
            id="home-cta-heading"
            className="font-[family-name:var(--font-oswald)] text-3xl font-semibold sm:text-4xl"
          >
            Ready to strengthen your operations?
          </h2>
          <p className="mt-3 max-w-xl text-base text-slate-300">
            Share your scope and location — our business development team will route
            your inquiry to the right technical leads.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-xl"
        >
          Contact ZOMCO
        </Link>
      </div>
    </section>
  );
}
