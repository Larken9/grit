// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},   // ← the new Tailwind v4+ PostCSS plugin
    autoprefixer: {},
  },
};
