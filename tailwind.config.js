const plugin = require("tailwindcss");

module.exports = {
  content: [
    './index.html' , './src/**/*.{vue,js,ts,jsx,tsx}'],
    // darkMode: false, // or media or class
    theme: {
      extend: {
        colors: {
          'primary': '#0f172a',
        }
      }
    },
    variants: {
      extend:{}
    },
    plugins: [],
}