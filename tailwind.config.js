/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage : {
        "header" : "url('/src/assets/bg.jpg')"
      },
      animation: {
        blink: "blink 2s ease-in-out infinite"
      },
      keyframes: {
        blink: {
          "0%, 100%": {
            opacity: "1"
          },
          "50%": {
            opacity: "0.5"
          }
        }
      } 
    },
  },
  plugins: [],
}

