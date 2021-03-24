const defaultConfig = require('tailwindcss/defaultConfig');
const { sans } = defaultConfig.theme.fontFamily;

module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/styles/tailwind.css',
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', ...sans],
      },
      minHeight: {
        '3/4': '75%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
