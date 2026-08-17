/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E4212B',
          yellow: '#FBB33C',
          green: '#6FA84B',
          black: '#141414',
          dark: '#1D1A14',
          darker: '#232019',
          paper: '#FBF9F5',
          ink: '#232019',
          muted: '#6B6558',
          border: '#ECE7DA',
        }
      },
      fontFamily: {
        heading: ['"Baloo Da 2"', 'sans-serif'],
        body: ['"Hind Siliguri"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
