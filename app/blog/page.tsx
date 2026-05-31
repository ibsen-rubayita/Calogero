import type { Metadata } from "next";
import { BlogFilter } from "@/components/blog-filter";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog and News",
  description: "Read Calagero LTD engineering insights, company news, construction tips, and project case studies."
};

export default function BlogPage() {
  return (
    <>
      <section className="subtle-grid py-20">
        <div className="section-shell">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-clay dark:text-gold">Blog and news</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-black leading-tight text-navy md:text-6xl dark:text-white">
            Engineering notes for people who build, finance, and manage projects.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Browse field lessons, company updates, technical tips, market notes, and concise case studies.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="section-shell">
          <SectionHeading eyebrow="Latest first" title="Articles and updates" />
          <div className="mt-10">
            <BlogFilter posts={blogPosts} />
          </div>
        </div>
      </section>
    </>
  );
}
