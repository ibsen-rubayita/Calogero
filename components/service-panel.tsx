import type { IconType } from "react-icons";

type ServicePanelProps = {
  icon: IconType;
  title: string;
  body: string;
};

export function ServicePanel({ icon: Icon, title, body }: ServicePanelProps) {
  return (
    <article className="surface rounded-lg p-6 transition hover:-translate-y-1 hover:border-gold">
      <span className="grid size-12 place-items-center rounded-md bg-navy text-gold dark:bg-gold dark:text-ink">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-5 font-display text-2xl font-black text-navy dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{body}</p>
    </article>
  );
}
