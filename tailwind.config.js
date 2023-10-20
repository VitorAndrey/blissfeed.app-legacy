/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "happy-monkey": "HappyMonkey_400Regular",
        "poppins-400": "Poppins_400Regular",
      },
      colors: {
        "font-black": "#888888",
        "font-white": "#eeeeee",

        "bg-black": "#888888",
        "bg-white": "#eeeeee",

        primary: "#FBE0C3",
      },
    },
  },
  plugins: [],
};
