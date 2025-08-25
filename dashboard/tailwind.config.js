/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#d9f4f2',
        ink: '#1a0d0a',
        muted: '#3a3736',
        card: '#e8f7ff',
        card2: '#ffedf8',
        card3: '#cfefff',
        accent: '#184d11',
        chip: '#c9fde0',
        surface: '#e5e5e5',
        shadow: 'rgba(30,0,0,0.85)'
      },
      boxShadow: {
        deep: '12px 12px 0 rgba(30,0,0,0.85)',
        panel: '16px 16px 0 #1a0d0a',
      },
      borderRadius: {
        xl2: '24px',
      }
    },
  },
  plugins: [],
};

