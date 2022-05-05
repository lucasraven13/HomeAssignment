// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '100px': '100px',
      },
      minWidth: {
        '300px': '300px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
