import debounce from 'lodash.debounce';

const refsHeader = {
  navigationMenuLink: document.querySelectorAll('.header-nav-menu-a'),
  mobailModal: document.querySelector('.header-burger-modal-window'),
  closeMobailMenu: document.querySelector('.header-bth-modal-close'),
  burger: document.querySelector('.header-bth-burger'),
  currentURL: window.location.href,
  body: document.querySelector('body'),
  checkDark: document.querySelector('.check-dark'),
  mobailCheckDark: document.querySelector('.mobail-check-dark'),
};

refsHeader.burger.addEventListener('click', () => {
  refsHeader.mobailModal.classList.remove('is-hidden');
  document.querySelector('body').classList.add('off');
});
refsHeader.closeMobailMenu.addEventListener('click', () => {
  refsHeader.mobailModal.classList.add('is-hidden');
  document.querySelector('body').classList.remove('off');
});


refsHeader.navigationMenuLink.forEach(link => {
  if (link.href === refsHeader.currentURL) {
    link.classList.add('is-active');
  } else {
    link.classList.remove('is-active');
  }
});

if (localStorage.getItem('font-color') == 'dark') {
  refsHeader.checkDark.checked = true;
  refsHeader.mobailCheckDark.checked = true;
  
  dark(refsHeader.checkDark)
}

refsHeader.checkDark.addEventListener('click', () => dark(refsHeader.checkDark));
refsHeader.mobailCheckDark.addEventListener('click', () => dark(refsHeader.mobailCheckDark));

function dark(button) {
    if (button.checked) {
      document.documentElement.style.setProperty('--body-color', `#161616`);
      document.documentElement.style.setProperty('--dark-text', `#fff`);
      document.documentElement.style.setProperty('--recipes-text', `#fff`);
      document.documentElement.style.setProperty('--mobail-modal', `#050505`);
      document.documentElement.style.setProperty('--modal-rating-theme-light', `#050505`);
      document.documentElement.style.setProperty('--modal-measure-recipes', `rgba(255, 255, 255, 0.50)`);
      document.documentElement.style.setProperty('--modal-name-ingradient', `rgba(255, 255, 255, 0.10)`);
      document.documentElement.style.setProperty('--modal-hashtag-item', `rgba(255, 255, 255, 0.20)`);
      document.documentElement.style.setProperty('--modal-recipe-instruction', `rgba(255, 255, 255, 0.80)`);
      document.documentElement.style.setProperty('--gal-form-col', `rgba(5, 5, 5, 0.20)`);
      document.documentElement.style.setProperty('--gal-form-border-col', `rgba(255, 255, 255, 0.20)`);
      document.documentElement.style.setProperty('--btn-all-categories', `rgba(255, 255, 255, 0.20)`);
      document.documentElement.style.setProperty('--text-category', ` rgba(255, 255, 255, 0.30)`);
      




      return localStorage.setItem('font-color', 'dark')
    } else {
      document.documentElement.style.setProperty('--body-color', `#F8F8F8`);
      document.documentElement.style.setProperty('--dark-text', `#050505`);
      document.documentElement.style.setProperty('--recipes-text', `rgba(5, 5, 5, 0.8)`);
      document.documentElement.style.setProperty('--mobail-modal', `#9bb537`);
      document.documentElement.style.setProperty('--modal-rating-theme-light', `#47906a`);
      document.documentElement.style.setProperty('--modal-measure-recipes', `rgba(5, 5, 5, 0.5)`);
      document.documentElement.style.setProperty('--modal-name-ingradient', `rgba(5, 5, 5, 0.1)`);
      document.documentElement.style.setProperty('--modal-recipe-instruction', `rgba(5, 5, 5, 0.8)`);
      document.documentElement.style.setProperty('--gal-form-col', `rgba(5, 5, 5, 0.50)`);
      document.documentElement.style.setProperty('--gal-form-border-col', `rgba(5, 5, 5, 0.20)`);
      document.documentElement.style.setProperty('--btn-all-categories', `rgba(5, 5, 5, 0.5)`);
      document.documentElement.style.setProperty('--text-category', `rgba(5, 5, 5, 0.18)`);
      


      return localStorage.removeItem('font-color')
    }
}
