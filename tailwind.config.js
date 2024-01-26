

/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '770px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      brown: '#6F5B3E',
      cream: '#F9F6F0',
      beige: '#C4AE78',
      black: '#171515',
      shadow: '#E8E4D9',
      darkblue: '#2E2714',
    },
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
     },
     extend: {
      boxShadow: {
        's': '0px 1px 2px 0px rgba(111, 91, 62, 1), 0px 0px 0px 1px rgba(111, 91, 62, 1)',
      }
    }
  },
  plugins: [],
}

