import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#1e40af",
          500: "#2563eb",
          100: "#dbeafe",
        },
        success: {
          600: "#15803d",
          100: "#dcfce7",
          200: "#bbf7d0",
        },
        warning: {
          500: "#f59e0b",
          100: "#fef3c7",
          200: "#fde68a",
        },
        danger: {
          600: "#b91c1c",
          100: "#fee2e2",
          200: "#fecaca",
        },
        gray: {
          900: "#0f172a",
          700: "#334155",
          500: "#64748b",
          300: "#cbd5e1",
          100: "#f1f5f9",
        },
        white: "#ffffff",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
