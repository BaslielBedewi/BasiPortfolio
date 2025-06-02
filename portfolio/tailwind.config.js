/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        disperse: 'disperse 0.5s forwards',
      },
      keyframes: {
        disperse: {
          '0%': { transform: 'translate(0, 0)', opacity: 1 },
          '100%': {
            transform: 'translate(calc(-50px + 100px * var(--x)), calc(-50px + 100px * var(--y)))',
            opacity: 0,
          },
        },
      },},
  },
  scrollBehavior: {
      smooth: 'smooth',
    },
  plugins: [],
}

