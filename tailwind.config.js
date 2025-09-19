/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hero: { start: "#4C1D95", end: "#1E40AF" },
        button: { primary: "#6208FA" },
        benefits: { bg: "#F8F7FF" },
        availability: { bg: "#FDE68A", accent: "#F59E0B" },
      },
    },
  },
  plugins: [],
}
