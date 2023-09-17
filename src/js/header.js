import debounce from "lodash.debounce";

const refsHeader = {
    navigationMenuLink: document.querySelectorAll('.header-nav-menu-a'),
    burger: document.querySelector('.header-bth-burger'),
    currentURL: window.location.href,
}

window.addEventListener('resize', debounce(() => {
    let visualViewport = window.innerWidth;
        if (visualViewport < 767) {
            refsHeader.burger.classList.remove('is-hidden')
        } else {
            refsHeader.burger.classList.add('is-hidden')
    }
    // console.log(1)
    }, 250)
);

refsHeader.navigationMenuLink.forEach((link) => {
  if (link.href === refsHeader.currentURL) {
      link.classList.add('is-active');
        //   console.log(12);

  } else {
      link.classList.remove('is-active')
    //   console.log(refsHeader.currentURL);
    //   console.log(link.href);
  }
});

// console.log(21)