const planets = Array.from(document.querySelectorAll('.planet__quote'));
const orbits = Array.from(document.querySelectorAll('.orbit-img'));


let currentAngle = 0;

function spaceAnimate() {
  planets.forEach((quote, index) => {
    const orbit = orbits[index];
    const radius = orbit.clientWidth / 2;

    // Центр орбиты
    const centerX = orbit.offsetLeft + radius;
    const centerY = orbit.offsetTop + radius;

    // Новые координаты цитаты
    const vx = Math.cos(currentAngle) * radius;
    const vy = Math.sin(currentAngle) * radius;

    // Устанавка цитаты на орбиту
    quote.style.left = `${centerX + vx - quote.offsetWidth / 2}px`;
    quote.style.top = `${centerY + vy - quote.offsetHeight / 2}px`;

    // Обновляем угол для следующего кадра
    currentAngle += 0.005;
  });
  requestAnimationFrame(spaceAnimate);
}

export default spaceAnimate;
