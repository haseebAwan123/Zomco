/** Site copy and structured data — single source for pages and components */

export const company = {
  shortName: "ZOMCO",
  legalName: "Zamil Operations & Maintenance Company Limited",
  tagline: "Premium operations & maintenance across the Kingdom",
  founded: "1977",
  hq: "Al-Khobar, Kingdom of Saudi Arabia",
  phone: "+966 13 000 0000",
  email: "info@zomco.com",
};

export const navLinks = [
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/industrial", label: "Industrial Services" },
      { href: "/services/utilities", label: "Utilities Services" },
      { href: "/services#catering", label: "Catering & Camp Management" },
      { href: "/services#facility", label: "Facility Management" },
    ],
  },
  { href: "/projects", label: "Projects" },
  { href: "/stakeholders", label: "Stakeholders" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "industrial",
    title: "Industrial Services",
    href: "/services/industrial",
    summary:
      "Specialized industrial contracting and maintenance for Saudi Arabia’s industrial sectors — executed safely, on schedule, and to exacting standards.",
    icon: "industrial",
  },
  {
    slug: "utilities",
    title: "Utilities Services",
    href: "/services/utilities",
    summary:
      "Operations and maintenance for utility infrastructure — reliable performance, disciplined workflows, and continuous improvement.",
    icon: "utilities",
  },
  {
    slug: "catering",
    title: "Catering & Camp Management",
    href: "/services#catering",
    summary:
      "High-quality catering and camp services backed by skilled culinary teams and rigorous service delivery standards.",
    icon: "catering",
  },
  {
    slug: "facility",
    title: "Facility Management",
    href: "/services#facility",
    summary:
      "Integrated facility management founded on decades of experience supporting complex commercial and government environments.",
    icon: "facility",
  },
];

export const stats = [
  { label: "Completed projects", value: "120+", suffix: "" },
  { label: "Clients", value: "85+", suffix: "" },
  { label: "Years of experience", value: "45+", suffix: "" },
  { label: "Employees", value: "3,000+", suffix: "" },
];

export const missionVision = {
  mission:
    "Develop long-term relationships with public and private sector clients by delivering premium operations and maintenance solutions that add measurable value.",
  vision:
    "Be the preferred partner for world-class operations and maintenance solutions across the region.",
  values: [
    {
      title: "Safety first",
      text: "Zero-compromise standards for people, assets, and communities.",
    },
    {
      title: "Operational excellence",
      text: "Disciplined processes, transparent reporting, and continuous improvement.",
    },
    {
      title: "Partnership mindset",
      text: "Aligned incentives, accountable teams, and long-term trust.",
    },
  ],
};

export const projects = [
  {
    id: "p1",
    title: "Industrial turnaround support",
    sector: "Industrial",
    location: "Eastern Province",
    year: "2024",
    summary:
      "Multi-discipline maintenance and scaffolding support for a major turnaround window.",
  },
  {
    id: "p2",
    title: "Utilities O&M program",
    sector: "Utilities",
    location: "Central Region",
    year: "2023",
    summary:
      "Preventive and corrective maintenance program for critical utility assets.",
  },
  {
    id: "p3",
    title: "Camp services expansion",
    sector: "Catering & Camps",
    location: "Western Province",
    year: "2023",
    summary:
      "Scaled camp catering, housekeeping, and lifecycle services for remote operations.",
  },
  {
    id: "p4",
    title: "Integrated facilities contract",
    sector: "Facility Management",
    location: "Riyadh",
    year: "2022",
    summary:
      "Hard and soft services for a large commercial campus with 24/7 coverage.",
  },
  {
    id: "p5",
    title: "Water treatment asset care",
    sector: "Utilities",
    location: "Eastern Province",
    year: "2022",
    summary:
      "Condition monitoring, chemical management, and outage planning for treatment assets.",
  },
  {
    id: "p6",
    title: "Manufacturing reliability partnership",
    sector: "Industrial",
    location: "Jubail",
    year: "2021",
    summary:
      "Predictive maintenance roadmap and technician competency uplift program.",
  },
];

export const stakeholders = [
  { name: "Aramco", abbr: "AR" },
  { name: "SABIC", abbr: "SB" },
  { name: "SEC", abbr: "SE" },
  { name: "Marafiq", abbr: "MR" },
  { name: "SWCC", abbr: "SW" },
  { name: "Municipality partner", abbr: "MU" },
  { name: "Industrial cluster", abbr: "IC" },
  { name: "Government entity", abbr: "GO" },
];

export const certifications = [
  {
    title: "ISO 45001",
    subtitle: "Occupational health & safety management",
    issuer: "Accredited certification body",
  },
  {
    title: "ISO 14001",
    subtitle: "Environmental management systems",
    issuer: "Accredited certification body",
  },
  {
    title: "ISO 9001",
    subtitle: "Quality management systems",
    issuer: "Accredited certification body",
  },
  {
    title: "Saudi Aramco vendor registration",
    subtitle: "Approved supplier for defined categories",
    issuer: "Saudi Aramco",
  },
];

export const serviceDetail = {
  industrial: {
    title: "Industrial Services",
    intro:
      "ZOMCO supports complex industrial environments with specialized contracting, maintenance, and turnaround services tailored to Saudi Arabia’s industrial base.",
    bullets: [
      "Mechanical, electrical, and instrumentation support",
      "Shutdown, turnaround, and outage execution",
      "Scaffolding, insulation, and industrial access solutions",
      "Fabric maintenance and corrosion management",
    ],
    sections: [
      {
        heading: "How we deliver",
        body: "We mobilize multidisciplinary crews with clear governance, permit-to-work discipline, and daily leadership routines that keep progress visible and risks controlled.",
      },
      {
        heading: "Quality & compliance",
        body: "Work packs, inspections, and handover documentation are standardized so every task is traceable and aligned with client specifications.",
      },
    ],
  },
  utilities: {
    title: "Utilities Services",
    intro:
      "Our Utilities division undertakes a wide range of operations and maintenance for critical infrastructure — focused on reliability, efficiency, and safe operations.",
    bullets: [
      "Water and wastewater treatment operations",
      "Pump stations, pipelines, and distribution networks",
      "Preventive maintenance planning and CMMS workflows",
      "Energy use monitoring and optimization support",
    ],
    sections: [
      {
        heading: "Reliability engineering",
        body: "We combine condition monitoring, spares strategy, and outage windows to reduce unplanned events and extend asset life.",
      },
      {
        heading: "People & competency",
        body: "Technicians are trained against structured competency frameworks so coverage is consistent across shifts and sites.",
      },
    ],
  },
};
