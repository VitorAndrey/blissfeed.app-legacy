/** @type {import('tailwindcss').Config} */

const colors = require("./src/theme/colors");
const fonts = require("./src/theme/fonts");

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: fonts,
      colors: colors,
    },
  },
  plugins: [],
};
