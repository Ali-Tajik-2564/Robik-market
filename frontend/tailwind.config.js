/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainPrimary: "#276678",
        mainPrimaryLight: "#1687a7",
        shadowPrimary: "#d3e0ea",
        primaryText: "#f6f5f5",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      require("tw-elements/dist/plugin.cjs");
    },
  ],
};
