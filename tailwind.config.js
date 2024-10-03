/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        'extralight': '100', // Or any custom weight you want
      },
    },
  },
  plugins: [],
}

