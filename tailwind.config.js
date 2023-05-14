/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#52C1B9",
          "secondary": "#8968FF",
          "ghost": "#1E1E2D",
        },
        fontFamily: {
          'Montserrat': ['Montserrat'],
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

