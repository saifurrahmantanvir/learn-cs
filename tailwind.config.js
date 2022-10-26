/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'kumbh-sans': '"Kumbh Sans", monospace'
      },
      colors: {
        'primary': '#6776FF',
        'purple': '#5E17EB'
      },
      borderWidth: {
        'br-1': '1.5px'
      }
    },
  },
  plugins: [],
}
