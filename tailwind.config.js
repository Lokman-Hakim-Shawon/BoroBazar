/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02B290",
        secondary: "#353535",
      },
    },
  },
  plugins: [require("daisyui")],
};
