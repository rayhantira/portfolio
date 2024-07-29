/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#76ABAE",
        lprimary: "#677791",
        dark: "#0e1111",
        body: "#ffffff",
        nav: "#e1e1e1",
        subhead: "#8b8b8b",
        lsubhead: "#929292",
        cards: "#202022",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        hanken: ["hanken", "sans-serif"],
      },
      screens: {
        sm: "414px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
