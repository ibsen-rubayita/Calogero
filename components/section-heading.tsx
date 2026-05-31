type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-black uppercase tracking-[0.22em] text-clay dark:text-gold">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-black leading-tight text-navy sm:text-5xl dark:text-white">
        {title}
      </h2>
      {body ? <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{body}</p> : null}
    </div>
  );
}
