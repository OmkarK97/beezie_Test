/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#121212',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        karla: ['Karla'],
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtitlites = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          '-ms-overflow-style': 'none',
          "scrollbar-width": 'none'
        }
      }
      addUtilities(newUtitlites);
    }
  ],
}