import debounce from 'lodash.debounce';

const refsHeader = {
  navigationMenuLink: document.querySelectorAll('.header-nav-menu-a'),
  mobailModal: document.querySelector('.header-burger-modal-window'),
  closeMobailMenu: document.querySelector('.header-bth-modal-close'),
  burger: document.querySelector('.header-bth-burger'),
  currentURL: window.location.href,
};
console.log('xep')
// if (visualViewport < 767) {
//     refsHeader.burger.classList.remove('is-hidden');
//     console.log('aefad')
// }
// window.addEventListener('resize', debounce(() => {
//     let visualViewport = window.innerWidth;

//     if (visualViewport < 767) {
//         refsHeader.burger.classList.remove('is-hidden')
//     } else {
//         refsHeader.burger.classList.add('is-hidden')
//     }
//     // console.log(1)
// }, 250)
// );

refsHeader.burger.addEventListener('click', () =>
  refsHeader.mobailModal.classList.remove('is-hidden')
);
refsHeader.closeMobailMenu.addEventListener('click', () =>
  refsHeader.mobailModal.classList.add('is-hidden')
);

refsHeader.navigationMenuLink.forEach(link => {
  if (link.href === refsHeader.currentURL) {
    link.classList.add('is-active');
    //   console.log(12);
  } else {
    link.classList.remove('is-active');
    //   console.log(refsHeader.currentURL);
    //   console.log(link.href);
  }
});

// console.log(21)
