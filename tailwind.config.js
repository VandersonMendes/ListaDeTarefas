/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    boxShadow:{
      xl: '0 1px 10px -5px #ffff, 0 1px 4px -5px rgba(0, 0, 0, 0.04)',
    },
    extend: {
      opacity:['hover']
    },
  },
  plugins: [],
}

