/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  // src/index.html 
  
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      backgroundImage: {
        'flag': "url('../src/img/NG-light.png')",
        'eye': "url('../src/img/eye.svg')",
        'dots': "url('../src/img/dots.png')",
        'arrow-down': "url('../src/img/arrow-down.svg')",
      },
      fontSize: {
        '64': '64px',
      },
      boxShadow: {
        'input': '0 2px 2px 2px rgba(204, 204, 204, 0.1)',
        'inp-focus': '0 2px 2px 2px rgba(39, 72, 93, 0.1)'
      },
      colors: {
        //text colors
        'white': '#FFFFFF',
        'gray-light': '#CCCCCC',
        'gray': '#E4E4E4',
        'login-link-color': '#476D73',
        'black': '#000000',
        'dark-blue': '#24445B',
  
        //body-color
        'prussian-blue': '#003757',
        'downy': '#6BBFC8',
  
        //light mode
        'light-form-bg': '#FFFFFF',
        'button-light': '#27485D',
        'input-focus': '#27485D',
          //right block gradient colors
        'cutty-sark': '#517879',
        'cello': '#1E3E57',
          //logo gradient colors
        'blue-bayoux': '#496F74',
        'juniper': '#6E9195',
        'san-juan': '#2D4F61',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        //dark mode
        'dark-form-bg': '#1F2937',
          //right block gradient colors
        'jacksons-purple': '#1E3A8A',
        'watercourse': '#047857',

        'button-dark': '#6B7280',
        'button-border-dark': '#284A5E',
          //logo gradient colorc
        'sinbad': '#ABD3D9',
        'ziggurat': '#C0DFE3',
        'san-juan': '#2D4F61',
      },
    },
  },
  plugins: [],
}
