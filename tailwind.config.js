/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "happy-monkey": "HappyMonkey_400Regular",
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
