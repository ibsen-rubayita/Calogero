"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FiSearch, FiX } from "react-icons/fi";
import { ProjectCard } from "@/components/project-card";
import type { Project, ProjectCategory } from "@/data/projects";
import { projectCategories } from "@/data/projects";

function normalize(value: string | null) {
  return (value || "").toLowerCase();
}

export function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const activeCategory = normalize(params.get("category"));

  function setCategory(category?: ProjectCategory) {
    const next = new URLSearchParams(params.toString());
    if (category) {
      next.set("category", category.toLowerCase());
    } else {
      next.delete("category");
    }
    const query = next.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  const filtered = useMemo(() => {
    return projects
      .filter((project) => !activeCategory || project.category.toLowerCase() === activeCategory)
      .filter((project) => project.name.toLowerCase().includes(search.toLowerCase().trim()))
      .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  }, [activeCategory, projects, search]);

  return (
    <div className="space-y-8">
      <div className="surface rounded-lg p-4">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Search projects</span>
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search project names"
              className="min-h-12 w-full rounded-md border border-black/10 bg-white pl-11 pr-4 text-ink dark:border-white/10 dark:bg-ink dark:text-white"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategory()}
              className={`min-h-11 rounded-full px-4 text-sm font-black transition ${
                !activeCategory ? "bg-navy text-white dark:bg-gold dark:text-ink" : "border border-black/10 dark:border-white/10"
              }`}
            >
              All
            </button>
            {projectCategories.map((category) => {
              const active = category.toLowerCase() === activeCategory;
              return (
                <button
                  type="button"
                  key={category}
                  onClick={() => setCategory(category)}
                  className={`min-h-11 rounded-full px-4 text-sm font-black transition ${
                    active ? "bg-navy text-white dark:bg-gold dark:text-ink" : "border border-black/10 hover:border-gold dark:border-white/10"
                  }`}
                >
                  {category}
                </button>
              );
            })}
            {activeCategory || search ? (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory();
                }}
                className="min-h-11 rounded-full border border-clay px-4 text-sm font-black text-clay dark:border-gold dark:text-gold"
              >
                <span className="inline-flex items-center gap-2">
                  <FiX /> Clear
                </span>
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {filtered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      {!filtered.length ? (
        <div className="rounded-lg border border-dashed border-black/20 p-10 text-center font-bold text-slate-600 dark:border-white/20 dark:text-slate-300">
          No projects match those filters.
        </div>
      ) : null}
    </div>
  );
}
