/** @type {import('tailwindcss').Config} */
export default {
  content: ["/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainPrimary: "#99a98f",
        mainPrimaryLight: "#c1d0b5",
        shadowPrimary: "#d6e8db",
        primaryText: "#fff8de",
      },
    },
  },
  plugins: [],
};
