import InnerBanner from "@/components/InnerBanner";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/content";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <InnerBanner
        title="Contact us"
        subtitle="Reach the ZOMCO team for new opportunities, partnerships, or media inquiries."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-[family-name:var(--font-oswald)] text-2xl font-semibold text-slate-900">
              Company information
            </h2>
            <address className="mt-6 space-y-4 text-sm not-italic text-slate-700">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Legal name
                </p>
                <p className="mt-1">{company.legalName}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Headquarters
                </p>
                <p className="mt-1">{company.hq}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Phone
                </p>
                <p className="mt-1">
                  <a className="text-sky-800 hover:underline" href={`tel:${company.phone}`}>
                    {company.phone}
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </p>
                <p className="mt-1">
                  <a
                    className="text-sky-800 hover:underline"
                    href={`mailto:${company.email}`}
                  >
                    {company.email}
                  </a>
                </p>
              </div>
            </address>
            <p className="mt-8 text-xs leading-relaxed text-slate-500">
              Replace placeholder phone and email in <code className="rounded bg-slate-100 px-1">lib/content.js</code>{" "}
              before production launch.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
