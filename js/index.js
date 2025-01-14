import burger from './burger.js';

burger();
// Звезды
const container = document.getElementById('stars-container');

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  const size = Math.random() * 3 + 1; // Размер звезды
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.opacity = Math.random();
  container.appendChild(star);
}

for (let i = 0; i < 100; i++) {
  // Количество звёзд
  createStar();
}
