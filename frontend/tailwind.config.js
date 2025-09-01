/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Use class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: { '50': '#e6f4f1', 'DEFAULT': '#10b981', '700': '#047857' }
      },
      fontFamily: {
        heading: ['Mozilla Headline', 'system-ui', 'sans-serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
