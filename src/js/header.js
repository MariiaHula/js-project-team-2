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
      document.documentElement.style.setProperty('--body-color', `#050505`);
      document.documentElement.style.setProperty('--dark-text', `#fff`);
      document.documentElement.style.setProperty('--recipes-text', `#fff`);
      document.documentElement.style.setProperty('--mobail-modal', `#050505`);
      document.documentElement.style.setProperty('--modal-rating-theme-light', `#050505`);


      return localStorage.setItem('font-color', 'dark')
    } else {
      document.documentElement.style.setProperty('--body-color', `#fff`);
      document.documentElement.style.setProperty('--dark-text', `#050505`);
      document.documentElement.style.setProperty('--recipes-text', `rgba(5, 5, 5, 0.8)`);
      document.documentElement.style.setProperty('--mobail-modal', `#9bb537`);
      document.documentElement.style.setProperty('--modal-rating-theme-light', `#47906a`);

      return localStorage.removeItem('font-color')
    }
}
