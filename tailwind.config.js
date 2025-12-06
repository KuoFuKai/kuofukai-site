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
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
        'marquee-vertical': 'marquee-vertical 40s linear infinite', // Faster than horizontal
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-vertical': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        }
      }
    },
  },
  plugins: [],
}