import Link from "next/link";
import { FiArrowRight, FiBox, FiHome, FiLayers, FiPenTool } from "react-icons/fi";
import { BlogCard } from "@/components/blog-card";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { PartnerMarquee } from "@/components/partner-marquee";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { ServicePanel } from "@/components/service-panel";
import { blogPosts } from "@/data/blog";
import { contactInfo, socials } from "@/data/contact";
import { projects } from "@/data/projects";

const services = [
  {
    icon: FiPenTool,
    title: "Consulting",
    body: "Structural review, feasibility, design coordination, tender support, inspection planning, and project rescue advice."
  },
  {
    icon: FiBox,
    title: "Tool Rentals",
    body: "Cranes, survey kits, formwork, safety systems, and temporary works packages sourced for active construction teams."
  },
  {
    icon: FiHome,
    title: "Property Sales and Rentals",
    body: "Technical property due diligence, developer support, and curated commercial or residential opportunities."
  }
];

const stats = [
  ["7", "core sectors"],
  ["18", "countries supported"],
  ["42+", "specialist partners"]
];

export default function HomePage() {
  const featuredProjects = [...projects].sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))).slice(0, 4);
  const latestPosts = [...blogPosts].sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))).slice(0, 3);

  return (
    <>
      <Hero />

      <section className="py-20">
        <div className="section-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Featured work"
              title="Built thinking for complex ground, tall frames, and critical crossings."
              body="A selected view of Calogero assignments across infrastructure, building, hospitality, residential, and site logistics."
            />
            <Link href="/projects" className="btn-secondary">
              All Projects <FiArrowRight />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.64] py-20 dark:bg-white/[0.03]">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Company overview"
              title="Freelance agility with boardroom-grade engineering discipline."
              body="Calogero LTD supports clients who need more than drawings. We help clarify technical risk, coordinate specialist input, source site tools, review delivery strategy, and present infrastructure opportunities with confidence."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-ink">
                  <p className="font-display text-4xl font-black text-navy dark:text-gold">{value}</p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Bridges", "Skyscrapers", "Roads", "Hotels", "Houses", "Dams"].map((sector, index) => (
              <div key={sector} className="surface rounded-lg p-6">
                <FiLayers className="size-7 text-clay dark:text-gold" />
                <h3 className="mt-5 font-display text-2xl font-black text-navy dark:text-white">{sector}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Specialist review, site planning, and delivery support tuned to project constraints.
                </p>
                <span className="mt-5 block h-1 rounded-full bg-gold" style={{ width: `${48 + index * 8}%` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Services"
            title="One partner for advisory, site resources, and asset opportunity."
            body="The service model is designed for clients who need practical help across the full construction decision chain."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <ServicePanel key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Insights" title="Latest thinking from the field." />
            <Link href="/blog" className="btn-secondary">
              Visit Blog <FiArrowRight />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {latestPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      <PartnerMarquee />
      <CtaBand />

      <section className="pb-20">
        <div className="section-shell grid gap-8 rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.05] lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-clay dark:text-gold">Contact desk</p>
            <h2 className="mt-3 font-display text-3xl font-black text-navy dark:text-white">Ready when the project asks harder questions.</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{contactInfo.email} | {contactInfo.phone} | {contactInfo.location}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {socials.map(({ name, href, icon: Icon }) => (
              <a key={name} href={href} aria-label={name} className="grid size-11 place-items-center rounded-full border border-black/10 text-navy hover:border-gold dark:border-white/10 dark:text-white">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
