import { partners } from "@/data/partners";

export function PartnerMarquee() {
  const items = [...partners, ...partners];

  return (
    <section className="overflow-hidden border-y border-black/10 bg-white/[0.64] py-8 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="marquee">
        <div className="marquee-track flex w-max animate-marquee gap-4 px-4">
          {items.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex min-w-52 items-center gap-4 rounded-lg border border-black/10 bg-white px-5 py-4 shadow-sm dark:border-white/10 dark:bg-white/[0.08]"
            >
              <span className="grid size-12 place-items-center rounded-md bg-navy font-black text-gold dark:bg-gold dark:text-ink">
                {partner.logo}
              </span>
              <span className="font-bold text-slate-700 dark:text-slate-200">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
