/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      dropShadow: {
        'blue-glow': '0 0 10px #1d4ed8',
      },
    },
  },
  plugins: [],
}

