/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        notosans: "Noto Sans JP",
      },
      colors: {
        // Configure your color palette here
        'alice-blue': {
          '50': '#fefeff', 
          '100': '#fdfeff', 
          '200': '#fbfcfe', 
          '300': '#f8fbfd', 
          '400': '#f3f7fc', 
          '500': '#eef4fb', 
          '600': '#d6dce2', 
          '700': '#b3b7bc', 
          '800': '#8f9297', 
          '900': '#75787b'
      }
      }
    },
  },
  plugins: [],
};
