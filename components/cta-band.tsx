import Link from "next/link";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";

export function CtaBand() {
  return (
    <section className="py-16">
      <div className="section-shell overflow-hidden rounded-lg bg-navy p-8 text-white shadow-elevated md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Begin collaboration</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight md:text-5xl">
              Bring Calogero into the room before the site gets expensive.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/[0.76]">
              From early feasibility to delivery recovery, we pair engineering judgment with practical site
              coordination, procurement support, equipment access, and investor-ready reporting.
            </p>
          </div>
            <div className="flex flex-wrap gap-3">
            <Link href="/contact#contact-form" className="btn-primary animate-pulseGlow">
              Start Your Project <FiArrowRight />
            </Link>
            <a href="tel:+25079106514" className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white/[0.16]">
              <FiPhoneCall /> Call Office
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
