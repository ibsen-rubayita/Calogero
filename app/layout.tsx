import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://calogeroltd.com"),
  title: {
    default: "Calogero LTD | Global Civil Engineering and Construction Support",
    template: "%s | Calogero LTD"
  },
  description:
    "Calogero LTD provides civil engineering consulting, construction tool rentals, property advisory, and project delivery support for infrastructure and building clients.",
  openGraph: {
    title: "Calogero LTD",
    description: "Global civil engineering consulting and construction support for ambitious builds.",
    url: "https://calogeroltd.com",
    siteName: "Calogero LTD",
    images: [
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=84&w=1200",
        width: 1200,
        height: 630,
        alt: "Construction site and engineering team"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Calogero LTD",
  url: "https://calogeroltd.com",
  email: "ibsenrubayita@gmail.com",
  telephone: "+250 79106514",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Norrsken House, 1 KN 78 St",
    addressLocality: "Kigali",
    addressCountry: "RW"
  },
  sameAs: ["https://www.linkedin.com", "https://twitter.com", "https://www.facebook.com"]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path d='M8 33c7.5-14 24.5-14 32 0' fill='none' stroke='%23D4A574' stroke-width='3' stroke-linecap='round'/><path d='M13 34h22M18 28v8M24 24v12M30 28v8' stroke='%23D4A574' stroke-width='2.5'/><path d='M10 38h28' stroke='%23D4A574' stroke-width='3' stroke-linecap='round'/><path d='M18 12h12l5 6H13l5-6Z' fill='%23D4A574'/></svg>" />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
