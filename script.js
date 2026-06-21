// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Links
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document.querySelector(`header nav a[href*="${id}"]`)?.classList.add("active");
    }
  });

  // Sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", top > 100);

  // Remove mobile menu on scroll
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// ScrollReveal animations
if (typeof ScrollReveal !== "undefined") {
  ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
  ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
  ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
  ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
}

// Typed JS effect
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Python Programmer", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Portfolio section toggle
function showSection(section) {
  const sections = {
    projects: document.getElementById("projects-section"),
    certificates: document.getElementById("certificates-section"),
  };

  for (let key in sections) {
    sections[key].style.display = key === section ? "grid" : "none";
  }

  document.querySelectorAll(".toggle-btn").forEach((btn) =>
    btn.classList.remove("active")
  );
  document
    .querySelector(`.toggle-btn[onclick*="${section}"]`)
    ?.classList.add("active");
}
