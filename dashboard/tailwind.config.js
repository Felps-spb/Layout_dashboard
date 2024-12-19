/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat':['Montserrat', 'serif'],
      },
      colors:{
        'fundo': '#f1f1fa',
        'cinza': '#aaacbb',
        'azul': '#273165',
        'azul-claro': '#5c5de7'
      }
    },
  },
  plugins: [],
  
}