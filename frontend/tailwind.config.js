/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif'],
        heading: ['Montserrat', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}