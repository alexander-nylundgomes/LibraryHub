/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': "rgb(29 78 216)",
        'secondary': "gray",
        'danger': "rgb(239 68 68)",
        'warning': "rgb(202 138 4)"
      }
    },
  },
  plugins: [],
}

