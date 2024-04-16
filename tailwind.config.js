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
        primary: "#6dd1ff",
        lprimary: "#6c757d",
        dark: "#212529",
        body: "#f8f7f4",
        secondary: "#2b3035",
        txt: "#cfcfcf",
        nav: "#97999c",
        lsecondary: "#f8f7f4",
        ltxt: "#6c757d",
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
