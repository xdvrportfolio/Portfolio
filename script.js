// Scroll reveal simple effect for sections
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < triggerBottom) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
window.addEventListener("DOMContentLoaded", () => {
  const projectContent = document.querySelector(".project-detail");
  if (projectContent) {
    projectContent.style.opacity = 0;
    projectContent.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      projectContent.style.opacity = 1;
    }, 100);
  }
});
