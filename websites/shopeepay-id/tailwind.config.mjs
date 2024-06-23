/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

    // Add this line to include Koji components in TailwindCSS JIT
    "../../packages/koji/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        primary: "#ee4d2d",
      },
      keyframes: {
        "slide-in": {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "slide-out": {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(100%)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "slide-in": "slide-in .25s ease-in-out forwards 0s",
        "slide-out": "slide-out .25s ease-in-out forwards 0s",
      },
    },
  },
};
