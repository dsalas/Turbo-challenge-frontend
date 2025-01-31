import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        category1: "var(--category-1)",
        category2: "var(--category-2)",
        category3: "var(--category-3)",
        category4: "var(--category-4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
