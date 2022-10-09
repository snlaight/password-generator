/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#24232C',
        secondary: '#817D92',
        accent: '#E6E5EA',
        background: '#1817F',
        success: '#A4FFAF',
        error: '#F64A4A',
        'primary-warning': '#FB7C58',
        warning: '#F8CD65',
      },
    },
  },
  plugins: [],
};
