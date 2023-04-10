/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require('@exactpro/docs-web-toolkit/tailwind.config')],
    theme:{
        extend:{
            colors:{
                primary:{
                    DEFAULT: '#286455',
                    '50': '#D1EDE6',
                    '100': '#C3E7DE',
                    '200': '#A6DBCE',
                    '300': '#88D0BE',
                    '400': '#6BC4AE',
                    '500': '#4EB89E',
                    '600': '#3F9E87',
                    '700': '#34816E',
                    '800': '#286455',
                    '900': '#183C33'
                    
                }
            }
        }
    }
  }
  