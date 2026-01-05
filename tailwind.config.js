/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './App.jsx',
    './*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        teeptrak: {
          red: '#eb352b',
          coral: '#ff674c',
          dark: '#232120',
        },
      },
    },
  },
  plugins: [],
};
