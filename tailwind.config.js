module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    keyframes: {
      slideBottom : {
        '0%': { transform: ' translateY(-25%)' },
        '100%': { transform: ' translateY(0)' },
      }
    },

    animation:{
      slide: 'slideBottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
    },
  },
  plugins: [],
}
