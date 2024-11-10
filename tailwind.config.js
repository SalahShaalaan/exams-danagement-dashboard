/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  lightMode: 'class',
  theme: {
    extend: {
      colors: {
        mainDarkBg: "#1b2431",
        secDarkBg: "#273142",
        mainLightBg: "#E9EAEC",
        darkText: "#0C2D48",

      },
      gridTemplateColumns: {
        'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fit-350': 'repeat(auto-fit, minmax(350px, 1fr))',
      },
    },
  },
  plugins: [],
}

