module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      poppins: ['Poppins', 'Arial', 'sans-serif'],
    },
    extend: {   },
  },
  variants:{
    extend: {  
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus'],
   },
  },
  plugins: [],
}
