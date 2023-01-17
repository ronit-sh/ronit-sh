/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif", "cursive"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

