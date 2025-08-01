function toggleMenu() {
      document.querySelector('.nav-links').classList.toggle('active');
    }

    // section 8 slider
    const track = document.querySelector('.slider-track');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let index = 0;
const slideWidth = document.querySelector('.teacher-card').offsetWidth + 30; // card + gap
const totalSlides = 2; // total views (each view = 2 cards)

function updateSlider() {
  track.style.transform = `translateX(-${index * (slideWidth * 2)}px)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

next.addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateSlider();
});

prev.addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
});