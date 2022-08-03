(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-btn'),
    closeMenuBtn: document.querySelector('.mobile-menu-btn-close'),
      menu: document.querySelector('.menu-mobile'),
        body: document.querySelector('body'),

  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
      refs.menu.classList.toggle('is-closed');
      refs.body.classList.toggle('no-scroll');

  }
})();
