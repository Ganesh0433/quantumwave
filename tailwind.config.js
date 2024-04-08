import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
   
  ],
  theme: {
    extend: {
        colors:{
            green:'#26D48C',
        }

    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
