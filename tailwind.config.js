/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "A":"#fff",
      "B":"#3c4043",
      "C":"#0061fe",
      "D":"#a69e9299",
      "E":"#dbd1c299"
    },
    fontWeight: {
      "thin": '100',
      "extralight": '200',
      "light": '300',
      "normal": '400',
      "medium": '500',
      "semibold": '600',
      "bold": '700',
      "extrabold": '800',
      "black": '900',

    },
    extend: {

    },
  },
  plugins: [
      // TODO: research this shit
  ],
}

