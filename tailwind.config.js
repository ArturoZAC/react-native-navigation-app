/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./app/**/*.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'montserrat-black': ['Montserrat-Black', 'sans-serif'],
        'montserrat-medium': ['Montserrat-Medium', 'sans-serif'],
        'montserrat-light': ['Montserrat-Light', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
