import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif", "cursive"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
} satisfies Config



