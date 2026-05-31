import type { Metadata } from "next";
import { FiClock, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { ContactForm } from "@/components/contact-form";
import { contactInfo, socials } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Calogero LTD for civil engineering consulting, construction tool rentals, property support, and collaboration."
};

const contactTiles = [
  { icon: FiPhone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
  { icon: FiMail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: FiMapPin, label: "Office", value: contactInfo.location, href: contactInfo.mapHref },
  { icon: FiClock, label: "Hours", value: contactInfo.hours }
];

export default function ContactPage() {
  return (
    <>
      <section className="subtle-grid py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-clay dark:text-gold">Contact</p>
            <h1 className="mt-4 font-display text-5xl font-black leading-tight text-navy md:text-6xl dark:text-white">
              Get in touch before the next decision hardens.
            </h1>
          </div>
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            Tell us what you are building, renting, buying, rescuing, or reviewing. We will help define the right
            technical next step and the specialists needed around it.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <aside className="space-y-5">
            <div className="rounded-lg bg-navy p-7 text-white shadow-elevated">
              <FiSend className="size-8 text-gold" />
              <h2 className="mt-5 font-display text-4xl font-black leading-tight">Start collaboration</h2>
              <p className="mt-4 leading-8 text-white/[0.78]">
                A structured intake helps us respond with a useful engineering, rental, or property pathway instead of
                a generic sales reply.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactTiles.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <span className="flex gap-4 rounded-lg border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:border-gold dark:border-white/10 dark:bg-white/[0.06]">
                    <span className="grid size-11 shrink-0 place-items-center rounded-md bg-gold text-ink">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        {label}
                      </span>
                      <span className="mt-1 block text-sm font-bold leading-6 text-navy dark:text-white">{value}</span>
                    </span>
                  </span>
                );

                return href ? (
                  <a key={label} href={href}>
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>

            <div className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.06]">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-clay dark:text-gold">Social channels</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="grid size-11 place-items-center rounded-full border border-black/10 text-navy hover:border-gold dark:border-white/10 dark:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <ContactForm />
            <div className="mt-5 overflow-hidden rounded-lg border border-black/10 bg-white dark:border-white/10 dark:bg-white/[0.06]">
              <div className="grid min-h-64 place-items-center p-8 text-center bg-white/6 dark:bg-white/6">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-clay dark:text-gold">Headquarters</p>
                  <a href={contactInfo.mapHref} target="_blank" rel="noreferrer" className="mt-3 block font-display text-3xl font-black text-navy dark:text-white hover:underline">
                    Norrsken House — 1 KN 78 St, Kigali
                  </a>
                  <p className="mt-3 text-sm font-bold text-slate-600 dark:text-slate-300">Global delivery desk with remote-first specialist coordination. Hours shown are in EST.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
