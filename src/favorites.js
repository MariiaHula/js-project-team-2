import './js/axios_api';
// import './js/categories';
// import './js/gallery';
import './js/header';
import './js/localStorage';
// import './js/modal-order';
// import './js/modal-rating';
// import './js/modal-recipes';
// import './js/popular-recipes';
import './js/render-gallery'
import locale from './js/localStorage';
import { markupGalleryCard } from './js/render-gallery';
import { goitGlobalAPI } from './js/axios_api';
const refsFav = {
  cardList: document.querySelector('.favorites-list'),
};

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

const clickHeart = document.querySelector('.favorites-list');
console.log(clickHeart);

let arrGalleryItem = [];

if ('galleryItem' in window.localStorage) {
  arrGalleryItem = locale.load('galleryItem');
}

window.addEventListener('load', () => {
  let arrGalleryItemCart = document.querySelectorAll('.checkbox-favorite');

  for (let i of arrGalleryItem) {
    for (let j of arrGalleryItemCart) {
      if (i === j.dataset.id) {
        j.checked = true;
      }
    }
  }
});

if (clickHeart !== undefined) {
  clickHeart.addEventListener('click', ev => {
    let numberIndex = arrGalleryItem.indexOf(`${ev.target.dataset.id}`);
    if (numberIndex == -1) {
      numberIndex = 0;
    }

    if (ev.target.nodeName === 'INPUT') {
      console.log(ev.target.dataset.id);
      if (!ev.target.checked) {
        arrGalleryItem.splice(
          arrGalleryItem.indexOf(`${ev.target.dataset.id}`),
          1
        );
      } else {
        arrGalleryItem.push(`${ev.target.dataset.id}`);
      }

      return locale.save('galleryItem', arrGalleryItem);
    }
  });
}

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