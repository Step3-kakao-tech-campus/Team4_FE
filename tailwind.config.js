/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'noto': ['Noto Sans', 'Noto Sans KR', 'sans-serif'],
      'roboto': ['Roboto', "sans-serif"],
    },
    extend: {
      colors: {
        'matgpt': {
          lightblue: '#C9D2FF',
          blue: '#5b76ff',
          gray: '#808080',
          red: '#ff5d5d',
        }
      },
    },
  },
  plugins: [],
}

