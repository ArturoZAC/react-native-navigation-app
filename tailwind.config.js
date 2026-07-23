/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./app/**/*.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
