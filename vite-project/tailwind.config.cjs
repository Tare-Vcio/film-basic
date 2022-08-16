
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"']
      },
      colors: {
        'back-main': '#4ab4de',
        'btn-main': '#3b8ac3',
        'txt-main': '#345ea8',
        'back-sub': '#eedbcd',
      },
      margin: {
        'mr-auto': '0 auto',
      }
    },
  },
  plugins: [],
}