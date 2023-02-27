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
      height: {
        screen: "100dvh",
      },
      colors: {
        yano: {
          900: "#684f0c",
          800: "#926e10",
          700: "#bc8e15",
          600: "#d19e18",
          500: "#d5a72f",
          400: "#debb5d",
          300: "#e8ce8b",
          200: "#f1e1b9",
          100: "#faf5e7",
        },
      },
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
