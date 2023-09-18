import debounce from 'lodash.debounce';

const refsHeader = {
  navigationMenuLink: document.querySelectorAll('.header-nav-menu-a'),
  mobailModal: document.querySelector('.header-burger-modal-window'),
  closeMobailMenu: document.querySelector('.header-bth-modal-close'),
  burger: document.querySelector('.header-bth-burger'),
  currentURL: window.location.href,
  body: document.querySelector('body'),
  checkDark: document.querySelector('.check-dark'),
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
    console.log(12);
  } else {
    link.classList.remove('is-active');
    //   console.log(refsHeader.currentURL);
    //   console.log(link.href);
  }
});

refsHeader.checkDark.addEventListener('click', () => {
  console.log(refsHeader.checkDark.checked);
  if (refsHeader.checkDark.checked) {
    document.documentElement.style.setProperty('--body-color', `#050505`);
    document.documentElement.style.setProperty('--dark-text', `#fff`);
    document.documentElement.style.setProperty('--recipes-text', `#fff`);
    return console.log(333);
  } else {
    document.documentElement.style.setProperty('--body-color', `#fff`);
    document.documentElement.style.setProperty('--dark-text', `#050505`);
    document.documentElement.style.setProperty(
      '--recipes-text',
      `rgba(5, 5, 5, 0.8)`
    );
  }
});

console.log(44);
