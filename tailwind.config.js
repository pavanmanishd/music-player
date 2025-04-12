/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ephesis': ['Ephesis', 'cursive'],
      },
      colors: {
        primary: "#1a1a1a",
        secondary: "#2a2a2a",
        accent: "#ff5500",
        "accent-hover": "#ff7733",
        "text-primary": "#ffffff",
        "text-secondary": "#b3b3b3",
      },
    },
  },
  plugins: [],
}