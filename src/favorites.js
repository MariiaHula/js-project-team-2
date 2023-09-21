import './js/axios_api';
// import './js/categories';
// import './js/gallery';
import './js/header';
import './js/localStorage';
// import './js/modal-order';
// import './js/modal-rating';
// import './js/modal-recipes';
// import './js/popular-recipes';
import locale from './js/localStorage';
import { markupGalleryCard } from './js/render-gallery';
import { goitGlobalAPI } from './js/axios_api';
const refsFav = {
  cardList: document.querySelector('.favorites-list'),
};

const clickHeart = document.querySelector('.gallery-list');
let arrGalleryItem = [];

if ('galleryItem' in window.localStorage) {
    arrGalleryItem = locale.load('galleryItem');
}

window.addEventListener('load', () => {
    let arrGalleryItemCart = document.querySelectorAll('.checkbox-favorite');

    for (let i of arrGalleryItem) {
        for (let j of arrGalleryItemCart) {
            if (i === j.dataset.idName) {
                (j.checked = true);
            }
        }
    }
});

// if (clickHeart !== undefined) {
//     clickHeart.addEventListener('click', ev => {
//         let numberIndex = arrGalleryItem.indexOf(`${ev.target.dataset.idName}`);

//         if (numberIndex == -1) {
//             numberIndex = 0;
//         }

//         if (ev.target.nodeName === 'INPUT') {
//             if (!ev.target.checked) {
        
//                 arrGalleryItem.splice(
//                     arrGalleryItem.indexOf(`${ev.target.dataset.idName}`), 1);
//             } else {
//                 arrGalleryItem.push(`${ev.target.dataset.idName}`);
//             }

//             return locale.save('galleryItem', arrGalleryItem);
//         }
//     });
// }

console.log(123);

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
        const localArray = locale.load('galleryItem');
        let arrayBuf = [];
        console.log(typeof localArray);
        localArray.map(id => {
            response.results.map(el => {
                if (id === el._id) {
                    arrayBuf.push(el);
                    console.log(el);   
                }
            })
        })
        // return console.log(strBuf)
        refsFav.cardList.innerHTML = markupGalleryCard(arrayBuf);
    } catch (err) {
        console.log(err);
    }
}

cardFavoriteRender()
    // const options = {
    //   totalItems: response.results.length * response.totalPages,
    //   itemsPerPage: favoritRenderAPI.perPage,
    //   visiblePages: 3,
    //   page: favoritRenderAPI.page,
    // };

    // const pagination = new Pagination('pagination', options);

    // pagination.on('afterMove', async event => {
    //   favoritRenderAPI.page = event.page;
    //   try {
    //     const response = await favoritRenderAPI.getRecipes();
    //     refs.galleryListEl.innerHTML = markupGalleryCard(response.results);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // });


