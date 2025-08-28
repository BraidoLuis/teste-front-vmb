/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        'hedvig-serif': ['"Hedvig Letters Serif"', 'serif'],
        'hedvig-sans': ['"Hedvig Letters Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}