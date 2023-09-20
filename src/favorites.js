import './js/axios_api';
import './js/categories';
import './js/gallery';
import './js/header';
import './js/localStorage';
import './js/modal-order';
import './js/modal-rating';
import './js/modal-recipes';
import './js/popular-recipes';
import { markupGalleryCard } from './js/render-gallery';
import { goitGlobalAPI } from './js/axios_api';
const refsFav = {
  cardList: document.querySelector('.favorites-list'),
};

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

let favoritRenderAPI;

if (window.innerWidth < 768) {
  favoritRenderAPI = new goitGlobalAPI(6);
} else if (window.innerWidth > 768 && window.innerWidth < 1280) {
  favoritRenderAPI = new goitGlobalAPI(8);
} else {
  favoritRenderAPI = new goitGlobalAPI(9);
}

async function cardFavoriteRender() {
    favoritRenderAPI.page = 1;
    try {
        const response = await favoritRenderAPI.getRecipes();
        console.log(response)
        const localArray = window.localStorage.getItem('galleryItem').split(',');
        const xz = localArray.map(id => {
            return response.results.map(el => {
                if (id === el.id) {
                    refsFav.cardList.innerHTML = markupGalleryCard(el);
                }
            })
        })
    } catch (err) {
        console.log(err);
    }
}

//     const options = {
//       totalItems: response.results.length * response.totalPages,
//       itemsPerPage: favoritRenderAPI.perPage,
//       visiblePages: 3,
//       page: favoritRenderAPI.page,
//     };

//     const pagination = new Pagination('pagination', options);

//     pagination.on('afterMove', async event => {
//       favoritRenderAPI.page = event.page;
//       try {
//         const response = await favoritRenderAPI.getRecipes();
//         refs.galleryListEl.innerHTML = markupGalleryCard(response.results);
//       } catch (err) {
//         console.log(err);
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }
cardFavoriteRender()

console.log(1223);
