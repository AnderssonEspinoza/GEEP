/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      colors: {
        geep: {
          50: '#e9f7ef',
          100: '#c8ecd8',
          200: '#9fddb9',
          300: '#6ecb95',
          400: '#35b86a',
          500: '#12a050',
          600: '#0f8a45',
          700: '#0c6f38',
          800: '#0a562c',
          900: '#074522',
        },
        ink: {
          900: '#0b1110',
          800: '#121a19',
        },
      },
      boxShadow: {
        glow: '0 24px 70px rgba(16, 160, 80, 0.25)',
        soft: '0 18px 50px rgba(11, 17, 16, 0.12)',
      },
      backgroundImage: {
        'mesh': 'radial-gradient(circle at top, rgba(18, 160, 80, 0.2), transparent 60%), radial-gradient(circle at 20% 20%, rgba(18, 160, 80, 0.2), transparent 45%)',
      },
    },
  },
  plugins: [],
};
