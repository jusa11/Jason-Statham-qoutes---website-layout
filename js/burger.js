function burger() {
  document.addEventListener('DOMContentLoaded', () => {
    const headerBurger = document.querySelector('.header__burger');
    const footerBurger = document.querySelector('.footer__burger');
    const menu = document.querySelector('.main-menu');
    const body = document.body;

    headerBurger.addEventListener('click', function () {
      headerBurger.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('lock');
    });
    footerBurger.addEventListener('click', function () {
      footerBurger.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('lock');
    });
  });
}

export default burger;
