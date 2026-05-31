import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { BrandLogo } from "@/components/brand-logo";
import { contactInfo, socials } from "@/data/contact";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/70 py-12 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5">
          <BrandLogo />
          <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
            Global civil engineering consulting, construction support, equipment rentals, and property advisory
            for clients who need precise thinking on ambitious sites.
          </p>
        </div>
        <address className="not-italic">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-clay dark:text-gold">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
            <a className="flex items-center gap-3 hover:text-navy dark:hover:text-white" href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
              <FiPhone /> {contactInfo.phone}
            </a>
            <a className="flex items-center gap-3 hover:text-navy dark:hover:text-white" href={`mailto:${contactInfo.email}`}>
              <FiMail /> {contactInfo.email}
            </a>
            <a className="flex items-center gap-3 hover:text-navy dark:hover:text-white" href={contactInfo.mapHref} target="_blank" rel="noreferrer">
              <FiMapPin /> {contactInfo.location}
            </a>
          </div>
          <div className="mt-5 flex gap-2">
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="grid size-10 place-items-center rounded-full border border-black/10 text-navy transition hover:-translate-y-0.5 hover:border-gold dark:border-white/[0.15] dark:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </address>
      </div>
      <div className="section-shell mt-10 border-t border-black/10 pt-5 text-xs font-semibold text-slate-500 dark:border-white/10 dark:text-slate-400">
        (c) 2026 Calogero LTD. Built for precision, trust, and long service life.
      </div>
    </footer>
  );
}
