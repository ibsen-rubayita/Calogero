import Link from "next/link";

export function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Calogero LTD home">
      <svg viewBox="0 0 48 48" className="size-8 text-gold" role="img" aria-label="Calogero LTD logo">
        <path
          d="M8 33c7.5-14 24.5-14 32 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M13 34h22M18 28v8M24 24v12M30 28v8" stroke="#D4A574" strokeWidth="2.5" />
        <path d="M10 38h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M18 12h12l5 6H13l5-6Z" fill="#D4A574" />
      </svg>
      <span className="sr-only">Calogero LTD</span>
    </Link>
  );
}
