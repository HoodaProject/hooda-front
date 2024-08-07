/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily:{
      "Docker-One":['Docker-One', 'sans-serif']
    },
    colors:{hoodaLaranja:'#fcae04'}
  },
  },
  plugins: [],
}