const colors = require('tailwindcss/colors');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');

module.exports = {
  // mode: 'jit',
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  important: '#tailwind-root',
  theme: {
    screens: {
      // xs: 0,
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    // screens: {
    //   xs: 0,
    //   sm: '577px',
    //   md: '769px',
    //   lg: '993px',
    //   xl: '1201px',
    //   '2xl': '1601px',
    // },
    extend: {
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        rose: colors.rose,
      },
    },
  },
  plugins: [],
};
