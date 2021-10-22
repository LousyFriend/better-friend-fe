const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'roboMono': ['Roboto Mono', 'monospace']
    },

    colors: {
      betterFriendOrange: '#e79215',
      black: colors.black,
      yellow: colors.yellow,
      white: colors.white
    },


    screens: {
      'sm': '640px',
                // => @media (min-width: 640px) { ... }

      'md': '768px',
                // => @media (min-width: 768px) { ... }

      'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
                // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: { animation: ['hover', 'group-hover'] },
  },
  plugins: [],
};
