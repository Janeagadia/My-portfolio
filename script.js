"use strict";

const body = document.querySelector("body");
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

const sectionHeroEl = document.querySelector(".hero-content");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

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

// nav
const modalbtn = document.querySelector(".menu-icon");
const modal = document.querySelector(".modal");

modalbtn.addEventListener("click", function () {
  console.log("a button was clicked");

  modal.classList.toggle("hidden");
});

// body.addEventListener("click", function () {
//   modal.classList.remove("hidden");
// });
