const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;

function nextSlide() {
  if (counter >= images.length - 1) return;
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-counter * 100) + '%)';
}

function prevSlide() {
  if (counter <= 0) return;
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-counter * 100) + '%)';
}
