/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        primary:{

          400: "#007F5F",
          300: "#2B9348",
          200: "#55A630",
          100: "#80B918",
        },

        secondary:{
          300: "#AACC00",
          200: "#BFD200",
          100: "#D4D700",
        },

        tertiary:{

          300: "#DDDF00",
          200: "#EEEF20",
          100: "#FFFF3F",
        } 

          
      },
      fontFamily: {
        body:['Josefin Sans']
      },
      fontWeight:{
        sm: "300",
        md: "400",
        lg: "600",
        xl: "700",
      }
    },
  },
  plugins: [],
}
