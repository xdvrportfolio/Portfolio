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


// Carosello recensioni (3 visibili, scorrimento a sinistra)
const sliderInner = document.querySelector('.review-slider-inner');
const cards = document.querySelectorAll('.review-card');
const cardCount = cards.length;
const cardStyle = getComputedStyle(cards[0]);
const cardMarginRight = parseInt(cardStyle.marginRight) || 20; // fallback 20px
const cardWidth = cards[0].offsetWidth + cardMarginRight;

let position = 0;

// Duplichiamo le card per loop infinito solo se sliderInner esiste
if (sliderInner) {
  sliderInner.innerHTML += sliderInner.innerHTML;

  function slideReviews() {
    position -= cardWidth;
    if (Math.abs(position) >= cardWidth * cardCount) {
      position = 0;
    }
    sliderInner.style.transform = `translateX(${position}px)`;
  }

  setInterval(slideReviews, 3000);
}

document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', (e) => {
    // Rimuovi active da tutti
    document.querySelectorAll('nav ul li a').forEach(el => el.classList.remove('active'));

    // Aggiungi active a quello cliccato
    e.target.classList.add('active');
  });
});

