/* Реализация на чистом js */

// Случайная позицая планеты на орбите + случайная скорость их вращения
const randomPositionAndSpeed = (arr, min, max) => {
  return arr.map(() => Math.random() * (max - min) + min);
};

class Space {
  constructor() {
    this.orbits = Array.from(document.querySelectorAll('.orbit-img'));
    this.planetsQuote = Array.from(document.querySelectorAll('.planet__quote'));
    this.currentAngle = randomPositionAndSpeed(
      // начальная позиция на орбите
      this.planetsQuote,
      1,
      2 * Math.PI
    );
    this.PlanetSpeed = randomPositionAndSpeed(this.planetsQuote, 0.002, 0.009); // скорость вращения по орбите
    this.axis = Array(this.planetsQuote.length).fill(0); // ось
    this.axisSpeed = randomPositionAndSpeed(this.planetsQuote, 0.5, 2); // скорось вращения вокруг оси
  }

  spaceAnimate = () => {
    this.planetsQuote.forEach((quote, index) => {
      const orbit = this.orbits[index];
      if (!orbit) return;

      const radius = orbit.clientWidth / 2;

      // Центр орбиты
      const centerX = orbit.offsetLeft + radius;
      const centerY = orbit.offsetTop + radius;

      // Новые координаты цитаты
      const angle = this.currentAngle[index];
      const vx = Math.cos(angle) * radius;
      const vy = Math.sin(angle) * radius;

      this.currentAngle[index] += this.PlanetSpeed[index];

      // Устанавка цитаты на орбиту
      quote.style.left = `${centerX + vx - quote.offsetWidth / 2}px`;
      quote.style.top = `${centerY + vy - quote.offsetHeight / 2}px`;
      quote.style.transform = `rotate(${this.axis[index]}deg)`;
      this.axis[index] += this.axisSpeed[index];
    });

    requestAnimationFrame(this.spaceAnimate);
  };
}

export default Space;
