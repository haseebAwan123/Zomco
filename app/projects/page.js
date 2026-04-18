import InnerBanner from "@/components/InnerBanner";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <InnerBanner
        title="Projects"
        subtitle="A sample of representative engagements across industrial, utilities, catering, and facility programs."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projects" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.id}>
              <ProjectCard
                title={p.title}
                sector={p.sector}
                location={p.location}
                year={p.year}
                summary={p.summary}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
