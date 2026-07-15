/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pool: {
          deep: "#0F4C81",     // Deep water blue
          clear: "#E0F2FE",    // Crystal clear shallow water
          teal: "#0D9488",     // Tropical pool accent
          glassBg: "rgba(255, 255, 255, 0.45)",
          glassBorder: "rgba(255, 255, 255, 0.4)"
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}