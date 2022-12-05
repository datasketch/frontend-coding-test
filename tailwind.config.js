/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "robin-s-egg-blue": {
          DEFAULT: "#00E0DB",
          50: "#C1FFFE",
          100: "#ADFFFD",
          200: "#84FFFC",
          300: "#5BFFFB",
          400: "#33FFFA",
          500: "#0AFFFA",
          600: "#00E0DB",
          700: "#00A8A4",
          800: "#00706D",
          900: "#003836",
        },
        "red-violet": {
          DEFAULT: "#DA1C95",
          50: "#F6B8DF",
          100: "#F4A6D7",
          200: "#EF82C7",
          300: "#EA5DB7",
          400: "#E639A7",
          500: "#DA1C95",
          600: "#A81673",
          700: "#770F51",
          800: "#45092F",
          900: "#13020D",
        },
        'pickled-bluewood': {
          DEFAULT: '#293845',
          '50': '#7795AE',
          '100': '#6A8BA7',
          '200': '#577692',
          '300': '#476278',
          '400': '#384D5F',
          '500': '#293845',
          '600': '#141B22',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
      },
    },
  },
  plugins: [],
};
