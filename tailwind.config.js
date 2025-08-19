/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        albert: ["Albert Sans", "sans-serif"],
        neue: ['"Neue Haas Grotesk Display Pro"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
