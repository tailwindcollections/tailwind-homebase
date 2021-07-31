module.exports = {
  mode : 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing : {
        18 : '4.5rem',
        54 : '13.5rem'
      },
      lineHeight : {
        tighter : '1.12'
      },
      letterSpacing: {
        tight : '-0.0125rem'
      },
      fontFamily : {
        rubik : ['Rubik', 'sans-serif'],
        inter : ['Inter', 'sans-serif']
      },
      colors : {
        primary : {
          DEFAULT : '#000000'
        },
        secondary : {
          DEFAULT : '#d7e4e3'
        },
        tertiary : {
          DEFAULT : '#f5ff80'
        },
        green : {
          DEFAULT : '#31CB53'
        },
        yellow : {
          DEFAULT : '#F6FF81'
        },
        editor : {
          700 : '#252525',
          800 : '#171717',
          900 : '#0F0F0F',
        },
        gray : {
          200 : '#fcfcfc',
          300 : '#d3d3d3',
          400 : '#e8e8e8',
          500 : '#dddddd',
          600 : '#c4c4c4',
          700 : '#8c8c8c',
          800 : '#636363',
          900 : '#212020',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
