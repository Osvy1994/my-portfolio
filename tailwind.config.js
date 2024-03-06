/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        agustina: ['Agustina', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      colors: {
        graytr: 'rgb(229, 231, 235, 0.5)',
      },
    },
  },
  plugins: [],
}
