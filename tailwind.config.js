const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./index.html", "./src/**/*.js"],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
  plugins: [],
};
