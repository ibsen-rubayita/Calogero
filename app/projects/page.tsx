import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectsFilter } from "@/components/projects-filter";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Calogero LTD projects across bridges, skyscrapers, roads, hotels, houses, dams, and specialist civil works."
};

export default function ProjectsPage() {
  return (
    <>
      <section className="subtle-grid py-20">
        <div className="section-shell">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-clay dark:text-gold">Project gallery</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-black leading-tight text-navy md:text-6xl dark:text-white">
            A full-screen view of infrastructure, buildings, and site systems.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Filter by category or search by project name. Results stay connected to the URL, so project views are easy
            to share and revisit.
          </p>
        </div>
      </section>

      <section className="min-h-screen py-12">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Latest first"
            title="Browse Calagero work"
            body="Each card summarizes the problem space, the delivery context, and the sector expertise involved."
          />
          <div className="mt-10">
            <Suspense fallback={<div className="surface rounded-lg p-8 font-bold">Loading filters...</div>}>
              <ProjectsFilter projects={projects} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
