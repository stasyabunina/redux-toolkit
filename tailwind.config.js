/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [require('daisyui')],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'dracula',
    ],
  },
}

