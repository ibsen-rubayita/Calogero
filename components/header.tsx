"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-ink/80">
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <BrandLogo />

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  active
                    ? "bg-gold/[0.18] text-navy dark:text-gold"
                    : "text-slate-700 hover:bg-black/5 hover:text-navy dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            className="grid size-11 place-items-center rounded-full border border-black/10 bg-white/80 text-navy lg:hidden dark:border-white/[0.15] dark:bg-white/10 dark:text-white"
            onClick={() => setOpen(true)}
          >
            <FiMenu className="size-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 bg-navy/95 text-white backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="section-shell flex h-20 items-center justify-between">
              <BrandLogo inverse />
              <button
                type="button"
                aria-label="Close menu"
                className="grid size-11 place-items-center rounded-full border border-white/20 bg-white/10"
                onClick={() => setOpen(false)}
              >
                <FiX className="size-6" />
              </button>
            </div>
            <motion.div
              className="section-shell grid gap-3 py-10"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07 } }
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{ hidden: { x: 24, opacity: 0 }, show: { x: 0, opacity: 1 } }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center border-b border-white/[0.12] font-display text-4xl font-black"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
