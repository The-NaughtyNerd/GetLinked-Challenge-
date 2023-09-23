/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(212, 52, 254, 1)',
        pinkPrimary: '#ff26b9',
        purplePrimary: 'rgba(212, 52, 254, 0.12)',
        purpleSecondary: 'rgba(144, 58, 255, 0.12)',
        prizeBgCOlor: 'rgba(16, 11, 32, 1)',
        prizeBg: 'rgba(217, 217, 217, 0.03)',
        menuBg: '#150E28',
        borderGradient:
          'linear-gradient(#D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)',
      },
      fontFamily: {
        montserrat: [' "Montserrat" ', 'sans-serif'],
        clashDisplay: [' "Clash Display" ', 'sans-serif'],
        unicaOne: [' "Unica One" ', 'cursive'],
      },
    },
  },
  plugins: [],
};
