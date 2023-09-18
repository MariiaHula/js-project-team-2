const ratings = document.querySelectorAll('.modal-rating');
const closeIconRatingModal = document.querySelector('.modal-rating-close');
const openIconRatingModal = document.querySelector('.modal-give-rating');
const windowRatingModal = document.querySelector('.modal-rating-backdrop');
const recipes_container = document.querySelector(".recipes-modal-container");
const recipes_wrap = document.querySelector(".modal-recipes-wrap");
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { goitGlobalAPI } from "./axios_api";


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
                 
                 
                     ratingValue.innerHTML = index + 1 + '.0';
                     setRatingActiveWidth();
                 
                
            });
        }
    }
}


// Функция для проверки заполнения обязательных полей
function validateForm() {
  // Проверяем, все ли обязательные поля заполнены
  const requiredFields = document.querySelectorAll('.email-required-field');
  let isValid = true;

  requiredFields.forEach((field) => {
    if (field.value.trim() === '') {
      isValid = false;
    }
  });

  return isValid;
}


const formEl = document.querySelector('.modal-rating-form');
// Обработчик события отправки формы
formEl.addEventListener('submit', sendForm);

function sendForm(e) {
    e.preventDefault();

    if (validateForm()) {
        const addRatingApi = new goitGlobalAPI();
        const dataAPI = {
            rate: 4,
            email: "test@gmail.com",
  
        }

        async function addRatingFn() {
    
            try {
                const data = await addRatingApi.addRating("6462a8f74c3d0ddd28897fbf", dataAPI);
                console.log("My ", data);
                Notify.success('We got your rating!');

        
            }
            catch (err) {
                console.log(`Error: ${err}`);
                Notify.failure('Oops, something wrong');
                formEl.reset();
                windowRatingModal.classList.remove('modal-rating-backdrop-active');
            }
    
        }
    }
}

     

addRatingFn();
// CLOSE-OPEN MODAL



openIconRatingModal.addEventListener('click', openRatingModal);



function openRatingModal(e) {
    windowRatingModal.classList.add('modal-rating-backdrop-active'); 
    recipes_container.classList.remove('active');
    recipes_wrap.classList.remove('active');


    closeIconRatingModal.addEventListener('click', closeRatingModal);
    windowRatingModal.addEventListener('click', closeModalByBcg);
    window.addEventListener('keydown', closeModalByEsc)
}


function closeRatingModal(e) {
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
  const container = document.getElementById("modal-bcg-wrap");
  const placeholdersArray = Array(amount).fill("star_placeholder");
  const starsArray = placeholdersArray.map((starPlacholder, index) =>
    createStar()
  );
  container.append(...starsArray);
}

renderStars();
