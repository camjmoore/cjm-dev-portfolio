import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["iAWriterQuattroS-Regular", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        deep: "#181b21",
        base: "#1c2026",
        surface: "#222830",
        overlay: "#272f3a",
        muted: "#737982",
        subtle: "#959da7",
        mint: "#00FFBB",
        dust: "#9A9184",
        dawn: "#ffc494",
        foam: "#FFF3CA",
        pierce: "#FF8080",
        sleep: "#729FCF",
        aroma: "#FBADFF",
        hl_low: "#24292e",
        hl_med: "#4d535c",
        hl_high: "#616770",
      },
    },
  },
  plugins: [],
};
