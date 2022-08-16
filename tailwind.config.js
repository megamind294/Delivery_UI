/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { screens: {
    's': '320px',
    // => @media (min-width: 640px) { ... }

    'm': '768px',
    // => @media (min-width: 1024px) { ... }

    'l': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
    extend: {},
  },
  plugins: [],
}