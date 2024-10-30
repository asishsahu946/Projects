/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'media1200': '1200px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

