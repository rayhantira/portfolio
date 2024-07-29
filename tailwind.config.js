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
<<<<<<< HEAD
        dark: "#0e1111",
=======
        dark: "#151515",
>>>>>>> origin/main
        body: "#ffffff",
        nav: "#e1e1e1",
        subhead: "#8b8b8b",
        lsubhead: "#929292",
        cards: "#202022",
      },
      fontFamily: {
<<<<<<< HEAD
        poppins: ["Poppins", "sans-serif"],
        hanken: ["hanken", "sans-serif"],
      },
      screens: {
        sm: "414px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
=======
        poppins: "Poppins",
      },
      screens: {
        "2xl": "1320px",
        laptop: "1020px", // Tambahkan definisi layar "laptop"
>>>>>>> origin/main
      },
      spacing: {
        8: "2rem", // Menambahkan nilai spacing untuk margin kiri di laptop
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
