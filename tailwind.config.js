/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-bg' : '#2c3e50',
        'main-bg': '#ecf0f1',
        'card-bg': '#34495e',
        'white': '#ffffff',
        'primary': '#2c3e50',
        'secondary': '#7f8c8d',
        'btn-bg': '#1abc9c',
        'btn-bg-hover': '#16a085',
        'btn-text': '#ffffff',
        'link-color': '#1abc9c',
      },
    },
  },
  plugins: [],
}