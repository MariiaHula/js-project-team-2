import './js/axios_api';
import './js/header';
import localStorage from './js/localStorage';
import { goitGlobalAPI } from './js/axios_api';
import { checkFavorites } from './js/render-gallery';
import Pagination from 'tui-pagination';
import '../node_modules/tui-pagination/dist/tui-pagination.css';  

    import { Notify } from 'notiflix/build/notiflix-notify-aio';

const closeIconOrderModal = document.querySelector('.modal-order-close');
const windowOrderModal = document.querySelector('.modal-order-backdrop');
const openOrderBusket = document.querySelector('.header-busket-order');
const formOreder = document.querySelector('.modal-order-form');
const orderName = document.querySelector('#input_name');
const formEmail = document.querySelector('#input_email');
const formPhone = document.querySelector('#input_phone');
const formComment = document.querySelector('.user-message');
const orderSpinner = document.querySelector('.modal-order-loader');
const modalOrdBtn = document.querySelector('.modal-order-btn');



openOrderBusket.addEventListener('click', openOrderModal);




function closeOrderModal(e) {
    windowOrderModal.classList.remove('modal-order-backdrop-active'); 

     closeIconOrderModal.removeEventListener("click", closeOrderModal);
    windowOrderModal.removeEventListener("click", closeOrderByBcg);
    window.removeEventListener("keydown", closeOrderByEsc);
}

function openOrderModal(e) {
    windowOrderModal.classList.add('modal-order-backdrop-active'); 
    closeIconOrderModal.addEventListener('click', closeOrderModal);
     windowOrderModal.addEventListener('click', closeOrderByBcg);
    window.addEventListener('keydown', closeOrderByEsc)
}

function closeOrderByBcg(e) {
    if (e.target === windowOrderModal) {
        closeOrderModal(e);
     }
}

function closeOrderByEsc(e) {
     if (e.key === "Escape") {
        closeOrderModal(e);
    }
}



formOreder.addEventListener('submit', sendOrderForm);

function sendOrderForm(e) {
     
    e.preventDefault();
 
        const addOrderApi = new goitGlobalAPI();
        const dataAPI = {
            "name": orderName.value,
  "phone": formPhone.value,
  "email": formEmail.value,
  "comment": formComment.value,
    }


     orderSpinner.style.display = 'block';
    modalOrdBtn.classList.add('non-active-btn');
     setTimeout(() => {
        addOrderFn(addOrderApi, dataAPI);

        // Після завершення відправки, приховати спіннер
         orderSpinner.style.display = 'none';
         modalOrdBtn.classList.remove('non-active-btn');
    }, 2000);
    
    }

    async function addOrderFn(addOrderApi, dataAPI) {
    
            try {
                const data = await addOrderApi.createOrder(dataAPI);
                // console.log("Order", data);
                Notify.success('We got your opinion!');
   windowOrderModal.classList.remove('modal-order-backdrop-active');
        
            }
            catch (err) {
                console.log(`Error`, err);
                Notify.failure('Oops, something wrong');
                formOreder.reset();
                windowOrderModal.classList.remove('modal-order-backdrop-active');
            }
    
} 
//===========RENDER from LOCALSTORAGE====================================

const favoriteList = document.querySelector('.favorites-list');
const favoritesWrapper = document.querySelector('.js-favorites-wrapper');
const blokedWrapper = document.querySelector('.js-bloked');

let favoritesGalleryAPI = new goitGlobalAPI(288);

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
          blokedWrapper.classList.remove('is-hidden');
        }

      const categories = faveritesCategory(arrResult);
      favoritesWrapper.innerHTML = categories;
      favoriteList.innerHTML = markupGalleryCard(arrResult);
      if (categories === '') {
        return;
      }
      blokedWrapper.classList.add('is-hidden');
      checkFavorites('.favorites-list');
       
      const buttons = favoritesWrapper.children;
      for (li of buttons) {
        let button = li.children[0];
        button.addEventListener('click', event => {
          let element = event.target;

          if (element.dataset['category'] !== 'All categories') {
            let recipesFiltered = arrResult.filter(el => {
              el.category === element.dataset['category']
            });
            favoriteList.innerHTML = markupGalleryCard(recipesFiltered);
          } else {
            favoriteList.innerHTML = markupGalleryCard(arrResult);
          }
          checkFavorites('.favorites-list');
        })
      }


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

           checkFavorites('.favorites-list');
      } catch (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
}
renderFavoritesCard();

function faveritesCategory(arr) {

  let categories = ['All categories'];

  if (Array.isArray(arr) && arr.length > 0) {
      categories = categories.concat(
      arr.map(element => element.category).filter((elem, ind, arr) => { return arr.indexOf(elem) === ind })
    );
  } else {
    return '';
  }
  const markup = categories.map(el => {
    return `
        <li>
        <button class="favorites-category-btn" type="button" data-category="${el}">${el}</button>
        </li>`;
  })
    .join('');
  return markup;
}


