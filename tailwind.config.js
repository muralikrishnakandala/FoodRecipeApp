/** @type {import('tailwindcss').Config} */
module.exports = {
  relative: true,
  content: ["./App.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}",
  "./screens/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {},
  },
  plugins: [],
}

