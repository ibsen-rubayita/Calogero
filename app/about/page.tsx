import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiAward, FiCheckCircle, FiCompass, FiShield } from "react-icons/fi";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { ServicePanel } from "@/components/service-panel";
import { team } from "@/data/team";
import { blurDataUrl } from "@/data/projects";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Calogero LTD, its mission, services, values, achievements, and delivery philosophy."
};

const values = [
  {
    icon: FiShield,
    title: "Risk made visible",
    body: "We turn unknowns into clear technical, commercial, and delivery decisions before they become site pressure."
  },
  {
    icon: FiCompass,
    title: "Practical elegance",
    body: "Every recommendation must survive the real world: access, weather, procurement, labor, sequencing, and cost."
  },
  {
    icon: FiAward,
    title: "Durable trust",
    body: "We communicate plainly, document carefully, and keep client confidence at the center of each engagement."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="subtle-grid py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-clay dark:text-gold">About Calogero LTD</p>
            <h1 className="mt-4 font-display text-5xl font-black leading-tight text-navy md:text-6xl dark:text-white">
              Independent engineering judgment for serious construction ambitions.
            </h1>
          </div>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                Calogero LTD is a global freelance civil engineering company serving developers, contractors, asset
                owners, and investors across bridges, skyscrapers, roads, hotels, houses, dams, and specialist
                infrastructure programs.
              </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-8 md:grid-cols-3">
          {[
            ["Mission", "To help clients build with technical clarity, disciplined coordination, and resilient delivery choices."],
            ["Vision", "To become the most trusted independent engineering partner for complex global construction work."],
            ["Values", "Precision, transparency, buildability, stewardship, and long-term client confidence."]
          ].map(([title, body]) => (
            <article key={title} className="surface rounded-lg p-7">
              <h2 className="font-display text-3xl font-black text-navy dark:text-white">{title}</h2>
              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.64] py-20 dark:bg-white/[0.03]">
        <div className="section-shell">
          <SectionHeading
            eyebrow="History"
            title="Built as a bridge between specialist expertise and urgent delivery needs."
            body="The company began as a compact civil engineering advisory desk and grew into a distributed partner network. Today, Calogero combines design review, delivery planning, procurement awareness, equipment access, and property-side insight for clients who need a sharper operating model."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ["2018", "Independent advisory desk formed."],
              ["2021", "Infrastructure and building partner network expanded."],
              ["2024", "Tool rental and site logistics support added."],
              ["2026", "Global client desk formalized for cross-border work."]
            ].map(([year, text]) => (
              <div key={year} className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-ink">
                <p className="font-display text-3xl font-black text-clay dark:text-gold">{year}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Why choose us" title="A calm technical partner when the project is moving fast." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <ServicePanel key={value.title} {...value} />
            ))}
          </div>
          <div className="mt-10 grid gap-3 rounded-lg bg-navy p-6 text-white md:grid-cols-2">
            {["Constructability-first reviews", "Responsive freelance model", "Engineering and commercial fluency", "Support from concept through closeout"].map((item) => (
              <span key={item} className="flex items-center gap-3 font-bold">
                <FiCheckCircle className="text-gold" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Team" title="Expert talent arranged by responsibility and delivery role." />
          <div className="mt-10 flex gap-4 flex-nowrap overflow-x-auto pb-4">
            {team.map((member) => (
              <article
                key={member.id}
                className="flex-none w-[150px] rounded-lg border border-black/8 bg-white p-2 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div className="relative mb-3 h-[110px] w-full overflow-hidden rounded-md">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.title}`}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                  />
                </div>
                <div>
                  <h3 className="font-display text-sm font-black leading-tight text-navy dark:text-white">{member.name}</h3>
                  <p className="mt-1 text-xs text-clay dark:text-gold">{member.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
