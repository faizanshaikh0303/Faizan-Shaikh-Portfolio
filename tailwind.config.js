/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
      },
      colors: {
        cream: '#F0EBE0',
        manga: {
          orange: '#D4623B',
          black: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
}
