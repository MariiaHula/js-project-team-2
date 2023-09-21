import './js/axios_api';
import './js/header';
import localStorage from './js/localStorage';
import { goitGlobalAPI } from './js/axios_api';
import { markupGalleryCard, checkFavorites } from './js/render-gallery';
import Pagination from 'tui-pagination';
import '../node_modules/tui-pagination/dist/tui-pagination.css';  

const favoriteList = document.querySelector('.gallery-list');

let favoritesGalleryAPI = new goitGlobalAPI(288);

// if (window.innerWidth < 768) {
//   favoritesGalleryAPI = new goitGlobalAPI(6);
// } else if (window.innerWidth > 768 && window.innerWidth < 1280) {
//   favoritesGalleryAPI = new goitGlobalAPI(8);
// } else {
//   favoritesGalleryAPI = new goitGlobalAPI(9);
// }
async function renderFavoritesCard() {
    
    try {
        const response = await favoritesGalleryAPI.getRecipes();

        let arrFav = localStorage.load('favorites-recipes');
        let arrResult = response.results;

        if (Array.isArray(arrFav)) {
            arrResult = arrResult.filter(element => {
                return arrFav.includes(String(element._id)); 
            })
        } else {
            arrResult = [];
        }


        favoriteList.innerHTML = markupGalleryCard(arrResult);
        
        checkFavorites()
        
    const options = {
        totalItems: response.results.length * response.totalPages,
        itemsPerPage: favoritesGalleryAPI.perPage,
        visiblePages: 3,
        page: favoritesGalleryAPI.page,
    }

    const pagination = new Pagination('pagination', options);
        
    pagination.on('afterMove', async event => {
       favoritesGalleryAPI.page = event.page;
      try {
          const response = await favoritesGalleryAPI.getRecipes();
        let arrFav = localStorage.load('favorites-recipes');
        let arrResult = response.results;
       
        if (Array.isArray(arrFav)) {
            arrResult = arrResult.filter(element => {
                return arrFav.includes(String(element._id)); 
            })
        }
        favoriteList.innerHTML = markupGalleryCard(arrResult);
        checkFavorites()
      } catch (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }

}

renderFavoritesCard();



