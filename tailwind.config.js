/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#1a1d2d',
          900: '#0f1119',
          950: '#0a0b10',
        },
        purple: {
          400: '#b388ff',
          500: '#9c6cff',
          600: '#7c54d0',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};