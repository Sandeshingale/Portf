/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#28627c',
        secondary:'#fba3c7',
      }
    },
  },
  plugins: [],
}

