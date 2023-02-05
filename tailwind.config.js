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
    extend: {
      minHeight: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        8: "2rem",
        16: "4rem",
        24: "6rem",
        32: "8rem",
        64: "16rem",
        128: "32rem",
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
