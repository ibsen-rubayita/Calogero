"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiX } from "react-icons/fi";
import { useState } from "react";
import type { BlogPost } from "@/data/blog";
import { blurDataUrl } from "@/data/projects";

const formatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric"
});

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.article
      className="group overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition hover:shadow-elevated dark:border-white/10 dark:bg-white/[0.06]"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ rotateX: 1.5, rotateY: -1.5, y: -6 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={`${post.title} article image`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
        <div className="absolute left-4 top-4 rounded-full bg-navy px-3 py-1 text-xs font-black text-gold">
          {post.category}
        </div>
      </div>
      <div className="p-5">
        <p className="flex items-center gap-2 text-sm font-bold text-sage dark:text-slate-300">
          <FiCalendar /> {formatter.format(new Date(post.date))}
        </p>
        <h3 className="mt-3 font-display text-2xl font-black leading-tight text-navy dark:text-white">{post.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{post.summary.slice(0, 150)}</p>
        <button onClick={() => setOpen(true)} className="mt-5 inline-flex items-center gap-2 font-black text-navy hover:text-clay dark:text-gold">
          Read More <FiArrowRight />
        </button>
        {open ? (
          <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4">
            <motion.div
              className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-8 dark:bg-ink"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400">{post.category}</p>
                  <h2 className="mt-2 font-display text-3xl font-black text-navy dark:text-white">{post.title}</h2>
                  <p className="mt-2 flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300">
                    <FiCalendar /> {formatter.format(new Date(post.date))}
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-black/10 p-2 text-navy transition hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  <FiX className="size-5" />
                </button>
              </div>
              <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
                <p>{post.summary}</p>
                <p className="text-sm leading-8 opacity-90">
                  The full content and insights from this article would be displayed here, allowing readers to explore the topic in depth
                  with ample scrolling space for comprehensive information, detailed analysis, and supporting details.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <button onClick={() => setOpen(false)} className="btn-secondary">
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
