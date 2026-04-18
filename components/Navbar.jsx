"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, company } from "@/lib/content";

function linkClasses(active) {
  return [
    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
    active
      ? "bg-slate-900 text-white"
      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
  ].join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 font-[family-name:var(--font-oswald)] text-xl font-semibold tracking-wide text-slate-900 transition-colors hover:text-sky-800"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-slate-900 text-sm font-bold text-amber-400 transition-transform group-hover:scale-105">
            Z
          </span>
          <span>{company.shortName}</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.href} className="relative group">
                <button
                  type="button"
                  className={`${linkClasses(isActive("/services"))} inline-flex items-center gap-1`}
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg
                    className="h-4 w-4 opacity-70"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                  </svg>
                </button>
                <div className="invisible absolute left-0 top-full z-50 mt-1 min-w-[16rem] translate-y-1 rounded-lg border border-slate-200 bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  >
                    All services
                  </Link>
                  <div className="my-1 border-t border-slate-100" />
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={linkClasses(isActive(item.href))}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 hover:shadow-md"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-800 transition hover:bg-slate-50 lg:hidden"
          aria-controls="mobile-nav"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.href} className="flex flex-col gap-1">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((s) => !s)}
                  >
                    {item.label}
                    <span className="text-xs text-slate-500">
                      {servicesOpen ? "−" : "+"}
                    </span>
                  </button>
                  {servicesOpen && (
                    <div className="ml-2 flex flex-col border-l border-slate-200 pl-3">
                      <Link
                        href={item.href}
                        className="py-1.5 text-sm text-slate-700 hover:text-sky-800"
                        onClick={() => setOpen(false)}
                      >
                        All services
                      </Link>
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="py-1.5 text-sm text-slate-700 hover:text-sky-800"
                          onClick={() => setOpen(false)}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm ${
                    isActive(item.href)
                      ? "bg-slate-900 text-white"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-800"
              onClick={() => setOpen(false)}
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
