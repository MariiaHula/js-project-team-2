const ratings = document.querySelectorAll('.modal-rating');
const closeIconRatingModal = document.querySelector('.modal-rating-close');
const openIconRatingModal = document.querySelector('.modal-give-rating');
const windowRatingModal = document.querySelector('.modal-rating-backdrop');
const recipes_container = document.querySelector(".recipes-modal-container");
const recipes_wrap = document.querySelector(".modal-recipes-wrap");
const input = document.querySelector('.modal-rating-email-input');
const spinner = document.querySelector('.modal-rating-loader');
const modalCard = document.querySelector('.modal-rating-card');
      const bodyEl = document.querySelector("body");
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { goitGlobalAPI } from "./axios_api";

let starsValue = 1;
if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;

    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);

    }

    function initRating(rating) {
        initRatingVars(rating);
        setRatingActiveWidth();

        if (rating.classList.contains('modal-rating-set')) {
            setRating(rating);
        }

    }


    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.modal-rating-active');
        ratingValue = rating.querySelector('.modal-rating-value');
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.modal-rating-item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener('mouseenter', function (e) {
                e.preventDefault();
                initRatingVars(rating);
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener('mouseleave', function (e) {
                e.preventDefault();
                setRatingActiveWidth();
            });
            ratingItem.addEventListener('click', function (e) {
                e.preventDefault();
                initRatingVars(rating);


                //  console.log(`starsValue`, starsValue);
                ratingValue.innerHTML = index + 1 + '.0';
                setRatingActiveWidth();
                starsValue = parseInt(ratingValue.textContent);

            });
        }
    }
}





const formEl = document.querySelector('.modal-rating-form');

formEl.addEventListener('submit', sendForm);

function sendForm(e) {
    e.preventDefault();

 
        const addRatingApi = new goitGlobalAPI();
        const dataAPI = {
            rate: starsValue,
            email: input.value,
  
    }
    
      modalCard.style.display = 'none';
    spinner.style.display = 'block';

     setTimeout(() => {
          spinner.style.display = 'none';
         addRatingFn(addRatingApi, dataAPI);
    }, 2000); 
    }

    async function addRatingFn(addRatingApi, dataAPI) {
    
            try {
                const data = await addRatingApi.addRating("6462a8f74c3d0ddd28897fbf", dataAPI);
                // console.log("My ", data);
                Notify.success('We got your rating!');
   windowRatingModal.classList.remove('modal-rating-backdrop-active');
        
            }
            catch (err) {
                Notify.failure(`Oops, something wrong, ${err.response.data.message}`);
                formEl.reset();
                windowRatingModal.classList.remove('modal-rating-backdrop-active');
            }
    
        } 

// CLOSE-OPEN MODAL



openIconRatingModal.addEventListener('click', openRatingModal);



function openRatingModal(e) {
      bodyEl.classList.add("modal-hidden-bcg");
    windowRatingModal.classList.add('modal-rating-backdrop-active');
    recipes_container.classList.remove('active');
    recipes_wrap.classList.remove('active');
  modalCard.style.display = 'block';

    closeIconRatingModal.addEventListener('click', closeRatingModal);
    windowRatingModal.addEventListener('click', closeModalByBcg);
    window.addEventListener('keydown', closeModalByEsc)
}


function closeRatingModal(e) {
   bodyEl.classList.remove("modal-hidden-bcg");
   bodyEl.classList.remove("modal");
    windowRatingModal.classList.remove('modal-rating-backdrop-active');
    closeIconRatingModal.removeEventListener("click", closeRatingModal);
    windowRatingModal.removeEventListener("click", closeModalByBcg);
    window.removeEventListener("keydown", closeModalByEsc);
}

function closeModalByBcg(e) {
    if (e.target === windowRatingModal) {
        closeRatingModal(e);
    }
}

function closeModalByEsc(e) {
    if (e.key === "Escape") {
        closeRatingModal(e);
    }
}














// GALAXU BTN




// BCG MODAL

function generateRandomPercent(min = 0, max = 100) {
    const randomInteger = Math.floor(Math.random() * (max + 1));
    return `${randomInteger}%`;
}
function generateRadomDelay(interval = 3) {
    const randomInteger = Math.random() * (interval + 1);
    return `${randomInteger}s`;
}

function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = generateRandomPercent();
    star.style.left = generateRandomPercent();
    star.style.animationDelay = generateRadomDelay();
    return star;
}

function renderStars(amount = 15) {
    const container = document.querySelector('.modal-bcg-wrap');
    const placeholdersArray = Array(amount).fill("star_placeholder");
    const starsArray = placeholdersArray.map((starPlacholder, index) =>
        createStar()
    );
    container.append(...starsArray);
}

renderStars();
