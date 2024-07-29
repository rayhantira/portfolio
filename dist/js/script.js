// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidddden");
  navMenu.classList.toggle("max-h-screen");
});

// Mendapatkan elemen dengan id "blinking"
const blinkingElement = document.getElementById("blinking");

// Menambahkan kelas "blinking" untuk memulai animasi
blinkingElement.classList.add("blinking");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

document
  .getElementById("sendEmailBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "mailto:ryulistira@gmail.com";
  });

//Full Screen Image
const images = document.querySelectorAll(".fullscreen-toggle");

images.forEach((image) => {
  image.addEventListener("click", () => {
    const isFullScreen = image.classList.contains("fullscreen");
    if (!isFullScreen) {
      enterFullScreen(image);
    } else {
      exitFullScreen(image);
    }
  });
});

function enterFullScreen(image) {
  document.body.style.overflow = "hidden"; // Menghilangkan overflow pada body untuk mencegah scrolling
  image.classList.remove("cursor-zoom-in");
  image.classList.add("cursor-zoom-out");
  image.classList.add("fullscreen");
  const container = document.createElement("div");
  container.classList.add("fullscreen-container");
  const fullscreenImage = image.cloneNode(true);
  fullscreenImage.classList.add("fullscreen-image");
  container.appendChild(fullscreenImage);
  container.addEventListener("click", () => exitFullScreen(image)); // Menambahkan event listener untuk keluar dari mode layar penuh ketika container diklik
  document.body.appendChild(container);
}

function exitFullScreen(image) {
  document.body.style.overflow = ""; // Mengembalikan overflow pada body
  document.querySelectorAll(".fullscreen-container").forEach((container) => {
    container.remove();
  });
  image.classList.remove("cursor-zoom-out");
  image.classList.add("cursor-zoom-in"); // Mengembalikan kursor menjadi zoom-in saat keluar dari mode fullscreen
  image.classList.remove("fullscreen");
}

window.addEventListener("load", (event) => {
  // Setelah semua konten dimuat, hilangkan pesan loading dan tampilkan konten
  document.getElementById("loading").classList.add("hidden");
  document.querySelectorAll(".hidden").forEach((element) => {
    element.classList.remove("hidden");
  });
  // Hapus elemen ikon loading
  const loadingIcon = document.getElementById("loading");
  loadingIcon.parentNode.removeChild(loadingIcon);
});

// Mendapatkan semua tautan navbar untuk setiap tautan navbar
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Menghapus kelas "active" dari semua tautan navbar
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    // Menambahkan kelas "active" ke tautan yang diklik
    link.classList.add("active");
  });
});

// Darkmode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

document.addEventListener("DOMContentLoaded", function () {
  const accordionBtns = document.querySelectorAll(".accordion-button");

  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const targetId = this.dataset.accordion;
      const targetAccordion = document.getElementById(targetId);
      const arrowIcon = this.querySelector(".arrow svg");

      btn.classList.toggle("open");
      targetAccordion.classList.toggle("hide");

      if (targetAccordion.classList.contains("hide")) {
        targetAccordion.style.maxHeight = "0";
      } else {
        targetAccordion.style.maxHeight = targetAccordion.scrollHeight + "px";
      }

      // Toggle rotation of the arrow
      arrowIcon.classList.toggle("rotate-180");
    });
  });
});
