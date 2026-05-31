import type { Metadata } from "next";
import Image from "next/image";
import { blurDataUrl } from "@/data/projects";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the Calogero LTD leadership, project managers, engineers, specialists, and support staff."
};

const hierarchyLabels: Record<number, string> = {
  1: "CEO / Founder",
  2: "Executives / Directors",
  3: "Project Managers",
  4: "Senior Engineers",
  5: "Engineers / Specialists",
  6: "Support Staff"
};

export default function TeamPage() {
  const groups = Object.entries(hierarchyLabels).map(([level, label]) => ({
    level: Number(level),
    label,
    members: team
      .filter((member) => member.hierarchy === Number(level))
      .sort((a, b) => a.name.localeCompare(b.name))
  }));

  return (
    <>
      <section className="subtle-grid py-20">
        <div className="section-shell">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-clay dark:text-gold">Team</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-black leading-tight text-navy md:text-6xl dark:text-white">
            A clear chain of expertise from founder to field support.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Calogero keeps roles visible, responsibility direct, and specialist input close to the decisions that
            shape the site.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell space-y-12">
          {groups.map((group) =>
            group.members.length ? (
              <section key={group.level} aria-labelledby={`level-${group.level}`}>
                <div className="mb-5 flex items-center gap-4">
                  <span className="grid size-11 place-items-center rounded-full bg-navy font-black text-gold dark:bg-gold dark:text-ink">
                    {group.level}
                  </span>
                  <h2 id={`level-${group.level}`} className="font-display text-3xl font-black text-navy dark:text-white">
                    {group.label}
                  </h2>
                </div>
                <div className="flex gap-5 overflow-x-auto pb-4 lg:flex-wrap lg:overflow-visible">
                  {group.members.map((member) => (
                    <article
                      key={member.id}
                      className="group min-w-[260px] overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-elevated dark:border-white/10 dark:bg-white/[0.06]"
                    >
                      <div className="relative aspect-[4/4] overflow-hidden">
                        <Image
                          src={member.image}
                          alt={`${member.name}, ${member.title}`}
                          fill
                          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                          placeholder="blur"
                          blurDataURL={blurDataUrl}
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-2xl font-black text-navy dark:text-white">{member.name}</h3>
                        <p className="mt-1 text-sm font-bold text-clay dark:text-gold">{member.title}</p>
                        {member.department ? (
                          <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                            {member.department}
                          </p>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ) : null
          )}
        </div>
      </section>
    </>
  );
}
