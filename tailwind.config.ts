import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1F3D",
        ink: "#0F1419",
        gold: "#D4A574",
        clay: "#A75D3A",
        sage: "#667C6E",
        mist: "#F5F7F3"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        elevated: "0 24px 70px rgba(10, 31, 61, 0.14)",
        gold: "0 18px 46px rgba(212, 165, 116, 0.28)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(212, 165, 116, 0)" },
          "50%": { boxShadow: "0 0 34px rgba(212, 165, 116, 0.32)" }
        }
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseGlow: "pulseGlow 3.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
