/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "index.html", "./src/**/*.jsx"],
  theme: {
    fontFamily:{
      unSans: ["Untitled Sans"]
    },
    transitionProperty: ['responsive', 'hover', 'focus', 'duration-500', 'ease-linear'],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}


