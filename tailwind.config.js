/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",],
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        
      }
    },
    extend: {},
    screens:{
      "xl":{'max':'1280px'},
      "lg":{'max':'1024px'},
      "md-lg":{'max':'991px'},
      "md":{'max':'768px'},
      "sm-md":{'max':'640px'},
      "sm":{'max':'480px'},
      "xm":{'max':'320px'},

    }
  },
  plugins: [],
}

