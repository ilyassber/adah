/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./ui/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
      montserrat: ["Montserrat"],
      sans: ["Montserrat"], //, "Roboto", "Helvetica", "Arial", "sans-serif"],
      serif: ["Montserrat"], //["Merriweather", "serif"],
      solitreo: ["Solitreo"],
    },
    extend: {},
  },
  plugins: [],
};
