/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: '#0f172a', // Slate 900
        accent: '#3b82f6', // Blue 500
        muted: '#64748b', // Slate 500
        neon: '#84cc16', // Lime 500
      }
    },
  },
  plugins: [],
}