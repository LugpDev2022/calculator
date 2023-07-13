/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          50: 'rgba(255, 251, 250, 1)',
          400: 'rgb(115, 162, 191)',
          800: 'rgb(33, 49, 64)',
        },
        amber: {
          400: 'rgb(156, 143, 19)',
        },
        yellow: {
          200: 'rgb(219, 249, 145)',
        },
      },
    },
  },
  plugins: [],
};
