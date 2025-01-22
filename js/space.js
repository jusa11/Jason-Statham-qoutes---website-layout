/* Реализация на GSAP*/
gsap.registerPlugin(MotionPathPlugin);

const space = [
  { id: '#planet__quote-1', path: '#orbit__path-1' },
  { id: '#planet__quote-2', path: '#orbit__path-2' },
  { id: '#planet__quote-3', path: '#orbit__path-3' },
  { id: '#planet__quote-4', path: '#orbit__path-4' },
  { id: '#planet__quote-5', path: '#orbit__path-5' },
];

const randomSpeed = () => Math.floor(Math.random() * (10 - 5) + 5);
const randomPosition = () => Math.random() * (0.9 - 0.1) + 0.1;

const spaceAnimate = () => {
  space.forEach((planet) => {
    const tl = gsap.timeline();

    tl.to(planet.id, {
      duration: randomSpeed(),
      repeat: -1,
      ease: 'linear',
      rotation: 360,
      motionPath: {
        path: planet.path,
        align: planet.path,
        alignOrigin: [0.5, 0.5],
      },
    });
		
    tl.progress(randomPosition());
  });
};

export default spaceAnimate;
