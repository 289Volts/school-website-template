import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      width: {
        50: "50%",
        70: "70%",
        80: "80%",
        85: "85%",
        88: "88%",
        90: "90%",
      },
      colors: {
        primary: {
          65: "#FF8D4C",
          70: "#FF9E66",
          75: "#FFAE80",
          80: "#FFBE99",
          90: "#FFDECC",
          95: "#FFEFE5",
          97: "#FFF5F0",
          99: "#FFFCFA",
        },
        secondary: {
          10: "#191919",
          15: "#262626",
          20: "#333333",
          30: "#4C4C4D",
          35: "#59595A",
          40: "#656567",
          60: "#98989A",
          70: "#B3B3B3",
        },
      },
      boxShadow: {
        potrude: "4px 4px 0px 1px black",
        potrudePrimary: "4px 4px 0px 1px #FFBE99",
        dashes: "0px 3px 0px 1px #FFBE99, 0px -3px 0px 1px #FFBE99",
        verticalDashes: "3px 0px 0px 1px #FFBE99, -3px 0px 0px 1px #FFBE99",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
