import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/3d/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ai-assistant/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        os: {
          bg: "#05060A",
          card: "#0B1020",
          primary: "var(--os-primary, #00F5FF)",
          secondary: "var(--os-secondary, #7C4DFF)",
          accent: "var(--os-accent, #4ADE80)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-orbitron)", "Orbitron", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
