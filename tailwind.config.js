const defaultConfig = require('tailwindcss/defaultConfig');
const { sans } = defaultConfig.theme.fontFamily;

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', ...sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
