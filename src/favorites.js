import './js/axios_api';
import './js/categories';
import './js/gallery';
import './js/header';
import './js/localStorage';
import './js/modal-order';
import './js/modal-rating';
import './js/modal-recipes';
import './js/popular-recipes';


const clickHeart = document.querySelector('.gallery-list');
let arrGalleryItem = [];

if ('galleryItem' in window.localStorage) {
  arrGalleryItem = window.localStorage.getItem('galleryItem').split(',');
}

window.addEventListener('load', () => {
  let arrGalleryItemCart = document.querySelectorAll('.checkbox-favorite');

  arrGalleryItem.map(el => {
    for (let i of arrGalleryItemCart) {
      if (el === i.dataset.idName) {
        return (i.checked = true);
      }
    }
  });
});

clickHeart.addEventListener('click', ev => {
  let numberIndex = arrGalleryItem.indexOf(`${ev.target.dataset.idName}`);

  if (numberIndex == -1) {
    numberIndex = 0;
  }

  if (ev.target.nodeName === 'INPUT') {
    if (!ev.target.checked) {
      arrGalleryItem.splice(
        arrGalleryItem.indexOf(`${ev.target.dataset.idName}`),
        1
      );
    } else {
      arrGalleryItem.push(`${ev.target.dataset.idName}`);
    }

    return window.localStorage.setItem('galleryItem', arrGalleryItem);
  }
});

