/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        headline: ['"Noto Serif"', '"Playfair Display"', "Georgia", "serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#5b031e",
        "primary-container": "#7a1d33",
        surface: "#fff8fa",
        "surface-low": "#f9f2f4",
      },
    },
  },
  plugins: [],
};
