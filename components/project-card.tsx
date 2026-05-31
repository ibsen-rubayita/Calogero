"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { blurDataUrl } from "@/data/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <motion.article
      className="group relative overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition hover:shadow-elevated dark:border-white/10 dark:bg-white/[0.06]"
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      whileHover={{ y: -6 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.name} construction project`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className={`object-cover transition duration-700 ${
            isFlipped ? "blur-sm opacity-20" : "group-hover:scale-105 opacity-100"
          }`}
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-navy">
          {project.category}
        </div>
      </div>
      <motion.div
        className="absolute inset-0 flex flex-col items-start justify-start p-5"
        animate={{ opacity: isFlipped ? 1 : 0, pointerEvents: isFlipped ? "auto" : "none" }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="font-display text-xl font-black text-white drop-shadow-lg">{project.name}</h3>
        <p className="mt-3 line-clamp-6 text-sm leading-6 text-white/90 drop-shadow-lg">{project.longDescription || project.description}</p>
      </motion.div>
      <motion.div
        className="p-5 relative"
        animate={{ opacity: isFlipped ? 0 : 1, pointerEvents: isFlipped ? "none" : "auto" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-black leading-tight text-navy dark:text-white">{project.name}</h3>
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-black/10 text-clay transition group-hover:border-gold group-hover:bg-gold group-hover:text-ink dark:border-white/10 dark:text-gold">
            <FiArrowUpRight />
          </span>
        </div>
        {project.location ? (
          <p className="mt-3 flex items-center gap-2 text-sm font-bold text-sage dark:text-slate-300">
            <FiMapPin /> {project.location}
          </p>
        ) : null}
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
      </motion.div>
    </motion.article>
  );
}
