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
        dark: "#212529",
        body: "#EEEEEE",
        secondary: "#2b3035",
        subhead: "#adadad",
        lsubhead: "#868686",
        lsecondary: "#F4F5F8",
      },
      backgroundImage: {
        blob: `url("src/bg.png")`,
      },
      fontFamily: {
        poppins: "Poppins",
      },
      screens: {
        "2xl": "1320px",
        laptop: "1020px", // Tambahkan definisi layar "laptop"
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
