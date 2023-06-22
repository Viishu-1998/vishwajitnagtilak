/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1400px',
    },
    extend: {
      backgroundImage:{
          "hero":"url(/src/hero.png)"
      }
    },
  },
  plugins: [],
}

