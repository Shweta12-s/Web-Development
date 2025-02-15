/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./tailwind/src/**/*.html", // Pointing to HTML files inside tailwind/src folder
    "./tailwind/src/**/*.js", // Optional: if you're using JS files in the tailwind/src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
