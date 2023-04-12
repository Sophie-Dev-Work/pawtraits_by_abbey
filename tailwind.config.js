/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('../public/bg.png')",
        'bg-2': "url('../public/bg2.png')",
        'bg-3': "url('../public/bg3.png')",
        'bg-4': "url('../public/bg4.png')",
        'cloud-bn': "url('../public/cloudbn.png')",
        'bg-5': "url('../public/foolzsm.png')",
        'bg-6': "url('../public/bg-m.gif')",
        'bg-7': "url('../public/tree.gif')",
        'bg-8': "url('../public/train.gif')",
        'bg-9': "url('../public/city.gif')",


      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif']
      },
      
      colors: {
        primary: {"dark-green":"#ccd5ae", "light-green":"#e9edc9", "cream":"#fefae0", "light-brown":"#faedcd", "brown":"#d4a373"}
      }
    },
  },


  plugins:  [],
}
