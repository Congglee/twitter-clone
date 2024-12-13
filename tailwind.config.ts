/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },

        "tw-primary": {
          DEFAULT: "hsl(var(--tw-primary))",
        },
        "tw-border": {
          DEFAULT: "hsl(var(--tw-border))",
        },
        "tw-secondary": {
          DEFAULT: "hsl(var(--tw-secondary))",
        },
        "tw-line-reply": {
          DEFAULT: "hsl(var(--tw-line-reply))",
        },
        "tw-search-background": {
          DEFAULT: "hsl(var(--tw-search-background))",
        },
        "tw-sidebar-background": {
          DEFAULT: "hsl(var(--tw-sidebar-background))",
        },

        "twitter-icon": "#D6D9DB",
        "image-preview-hover": "#272C30",
        "accent-red": "#F4212E",
        "accent-yellow": "#FFD500",
        "accent-blue": "#009BF0",
        "accent-pink": "#F91A82",
        "accent-purple": "#7857FF",
        "accent-orange": "#FF7A00",
        "accent-green": "#00B87A",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-2xs": { fontSize: "10px", lineHeight: "1" },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
