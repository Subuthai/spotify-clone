/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          gray: "#101010",
          lg: "#151515",
          lgHover: "#282828",
          green: "#1DB954",
        },
        side: {
          whitege: "#D1D5DB",
          bub: "#0e0e0e",
        },
      },
    },
  },
  plugins: [],
};
