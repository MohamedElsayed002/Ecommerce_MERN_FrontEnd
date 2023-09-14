/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "468px",
        md: "800px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography") , require("daisyui")],
  daisyui : {
    themes : ['winter','dracula']
  }
}

