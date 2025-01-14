/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-white': '#FFFFFFDD',
        'purp': '#4f46e5',
        'fun-teal': '#2dd4bf',
        'light-black': '#22222277',
        'light-blue': '#00BFFF',
        'gray': {
          'light': '#D3D3D3',
          'dark': '#121212',
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateX(100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)'},
        },
      },
      backgroundImage: {
        'duck-mountain': "url('/src/images/duck-mountain.JPG')"
      }
    },
  },
  plugins: [],
}