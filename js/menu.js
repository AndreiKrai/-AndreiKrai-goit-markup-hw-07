(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-btn'),
    closeMenuBtn: document.querySelector('.button-close'),
      menu: document.querySelector('.menu-mobile'),
        body: document.querySelector('body'),

  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');

  }
})();
