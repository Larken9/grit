/** @type {import('tailwindcss').Config} */
module.exports = {
  // <-- add this line
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
      },
      colors: {
        brand: { light: "#fff", dark: "#000" },
      },
    },
  },
  plugins: [],
};
