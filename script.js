"use strict";

const allSections = document.querySelectorAll(".section");
const footer = document.querySelector("#contact");
const heroSection = document.querySelector("#hero");
const heroNav = document.querySelector(".hero-scroll");
const contactbtnNav = document.querySelector(".contact-btn");
const aboutNav = document.querySelector(".about-scroll");
const aboutSection = document.querySelector("#about");
const projectsNav = document.querySelector(".projects-scroll");
const projectSection = document.querySelector("#projects");

// const revealSection = function (entries, observer) {
//   const [entry] = entries;
//   // console.log(entry);
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove("section-hidden");
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section-hidden");
// });

const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// implementing scroll
heroNav.addEventListener("click", function () {
  heroSection.scrollIntoView({ behavior: "smooth" });
});

contactbtnNav.addEventListener("click", function () {
  footer.scrollIntoView({ behavior: "smooth" });
});

aboutNav.addEventListener("click", function () {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

projectsNav.addEventListener("click", function () {
  projectSection.scrollIntoView({ behavior: "smooth" });
});

const modalbtn = document.querySelector(".menu-icon");
const modal = document.querySelector(".modal");

modalbtn.addEventListener("click", function () {
  console.log("a button was clicked");

  modal.classList.toggle("hidden");
});
