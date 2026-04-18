import Link from "next/link";
import { company, navLinks } from "@/lib/content";

export default function Footer() {
  const flatServiceLinks =
    navLinks.find((l) => l.children)?.children ?? [];

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-[family-name:var(--font-oswald)] text-2xl font-semibold tracking-wide text-white">
              {company.shortName}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {company.legalName} — {company.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link className="transition hover:text-white" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-white"
                  href="/stakeholders"
                >
                  Stakeholders
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-white"
                  href="/certifications"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Services
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link className="transition hover:text-white" href="/services">
                  All services
                </Link>
              </li>
              {flatServiceLinks.map((l) => (
                <li key={l.href}>
                  <Link className="transition hover:text-white" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Contact
            </p>
            <address className="mt-4 space-y-2 text-sm not-italic text-slate-400">
              <p>{company.hq}</p>
              <p>
                <a className="hover:text-white" href={`tel:${company.phone}`}>
                  {company.phone}
                </a>
              </p>
              <p>
                <a
                  className="hover:text-white"
                  href={`mailto:${company.email}`}
                >
                  {company.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.shortName}. All rights
            reserved.
          </p>
          <p className="max-w-xl">
            This demo site structure mirrors public navigation patterns from{" "}
            <a
              className="underline-offset-2 hover:text-slate-300 hover:underline"
              href="https://zomco.com/"
              target="_blank"
              rel="noreferrer"
            >
              zomco.com
            </a>
            . Replace contact details with production values.
          </p>
        </div>
      </div>
    </footer>
  );
}
