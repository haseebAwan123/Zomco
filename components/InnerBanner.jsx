"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * Inner pages: full-width banner with /public image (cover), dark overlay, no gradient fill.
 */
export default function InnerBanner({
  title,
  backgroundImage,
  subtitle,
  breadcrumbs = [],
}) {
  const [bgFailed, setBgFailed] = useState(false);

  return (
    <section
      className="relative isolate min-h-[12rem] overflow-hidden border-b border-slate-800/80 text-white sm:min-h-[14rem]"
      aria-labelledby="page-title"
    >
      <div className="absolute inset-0 z-0 bg-slate-900" aria-hidden="true" />

      {!bgFailed && backgroundImage ? (
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          onError={() => setBgFailed(true)}
        />
      ) : null}

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-black/55"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {breadcrumbs.length > 0 && (
          <nav
            className="mb-4 text-xs font-medium text-slate-200/90"
            aria-label="Breadcrumb"
          >
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, i) => (
                <li key={`${crumb.href}-${i}`} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="text-slate-400" aria-hidden>
                      /
                    </span>
                  )}
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-white">{crumb.label}</span>
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
          className="font-[family-name:var(--font-oswald)] text-3xl font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-4xl"
        >
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-100/95 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
