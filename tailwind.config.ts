import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue' : '#3391e7',
        'dark-blue' : '#003951',
        'sheet' : '#dfebeb',
        'variant-blue' : '#025a88',
        'gradient-top' : '#60a3bc',
        'gradient-bot' : '#80c1cc'
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        qs: ["Quicksand", "serif"],
        merri: ['Merriweather', "serif"]
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config;
