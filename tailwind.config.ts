import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: {
          DEFAULT: "#FF9D23", // رنگ اصلی
          50: "#FFF4E5",
          100: "#FFE5C2",
          200: "#FFD399",
          300: "#FFBA66",
          400: "#FF9D23",
          500: "#E68C1F",
          600: "#CC7B1B",
          700: "#B36A16",
          800: "#995812",
          900: "#80470E",
        },
        secondary: {
          DEFAULT: "#E5D0AC",
          50: "#FEF9E1",
          100: "#FCEEC5",
          200: "#F9E1A3",
          300: "#F5D280",
          400: "#E5D0AC",
          500: "#CCB491",
          600: "#B39A78",
          700: "#80674A", // اضافه شده
          800: "#665037",
          900: "#4D3C27",
        },
        accent: "#FEF9E1",
      },
      fontFamily: {
        yekan: ["Yekan Bakh", "Arial", "sans-serif"], // اضافه کردن فونت
      },
    },
  },
  plugins: [],
} satisfies Config;
