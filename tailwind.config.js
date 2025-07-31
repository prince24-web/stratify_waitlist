/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    backdropBlur: {
      '10.2': '10.2px',
    },
    boxShadow: {
      glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
    },
     animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
}
