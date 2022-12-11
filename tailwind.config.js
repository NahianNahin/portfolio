/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        portfolioTheme: {
          primary: '#ffcc00',
          secondary: "#ffe680",
          accent: "#ffffff",
          neutral: "#3A4256",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
   plugins: [require("daisyui")],
}