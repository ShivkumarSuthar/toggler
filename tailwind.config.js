/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/assets/*.{html,js,jsx}"],

  theme: {
    extend: {
      fontFamily: {
        alegrega: ["Alegreya Sans", "sans-serif"],
        DMplay: ["DM Serif play", "serif"],
        Kalnia: ["Kalnia", "serif"],
        Raleway: ["Raleway", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
        century:['century gothic'],
        hertical:['hertical'],
        libre:['Libre Baskerville', 'serif'],
        mandala:['mandala'],
      },
    },
  },
  plugins: [],
}

