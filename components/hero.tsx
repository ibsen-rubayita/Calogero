"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { blurDataUrl } from "@/data/projects";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={ref} className="relative min-h-[86svh] overflow-hidden bg-navy text-white">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=84&w=1800"
          alt="Construction engineers reviewing a major infrastructure site"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,31,61,0.92),rgba(10,31,61,0.62),rgba(10,31,61,0.2))]" />
      <div className="absolute inset-0 subtle-grid opacity-40" />
      <div className="section-shell relative flex min-h-[86svh] items-center py-20">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-gold">
            Civil engineering for ambitious builds
          </p>
          <h1 className="mt-6 font-display text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
            Calogero LTD
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.82]">
            We help clients, contractors, and investors shape bridges, towers, roads, hotels, homes, dams, and
            site operations with polished engineering, practical delivery insight, and global freelance agility.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact#contact-form" className="btn-primary animate-pulseGlow">
              Start Your Project <FiArrowRight />
            </Link>
            <Link href="/projects" className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white/[0.15]">
              View Projects
            </Link>
          </div>
          <div className="mt-9 grid gap-3 text-sm font-bold text-white/[0.86] sm:grid-cols-3">
            {["Consulting", "Tool rentals", "Property advisory"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <FiCheckCircle className="text-gold" /> {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
