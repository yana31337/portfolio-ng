/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'thanks': "url('/assets/png/thanksgiving.png')",
    },
    height: {
      '1200': '75rem',
      '520': '32.5rem',
    },
    width: {
      '390': '24rem',
    },
  },
  plugins: [],
  }
}
