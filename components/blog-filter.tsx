"use client";

import { useMemo, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { BlogCard } from "@/components/blog-card";
import type { BlogPost } from "@/data/blog";
import { blogCategories } from "@/data/blog";

export function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return posts
      .filter((post) => !category || post.category === category)
      .filter((post) => post.title.toLowerCase().includes(search.toLowerCase().trim()))
      .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  }, [category, posts, search]);

  return (
    <div className="space-y-8">
      <div className="surface rounded-lg p-4">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Search blog posts</span>
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search article titles"
              className="min-h-12 w-full rounded-md border border-black/10 bg-white pl-11 pr-4 text-ink dark:border-white/10 dark:bg-ink dark:text-white"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategory("")}
              className={`min-h-11 rounded-full px-4 text-sm font-black transition ${
                !category ? "bg-navy text-white dark:bg-gold dark:text-ink" : "border border-black/10 dark:border-white/10"
              }`}
            >
              All
            </button>
            {blogCategories.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setCategory(item)}
                className={`min-h-11 rounded-full px-4 text-sm font-black transition ${
                  category === item ? "bg-navy text-white dark:bg-gold dark:text-ink" : "border border-black/10 hover:border-gold dark:border-white/10"
                }`}
              >
                {item}
              </button>
            ))}
            {category || search ? (
              <button
                type="button"
                onClick={() => {
                  setCategory("");
                  setSearch("");
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

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>
      {!filtered.length ? (
        <div className="rounded-lg border border-dashed border-black/20 p-10 text-center font-bold text-slate-600 dark:border-white/20 dark:text-slate-300">
          No posts match those filters.
        </div>
      ) : null}
    </div>
  );
}
