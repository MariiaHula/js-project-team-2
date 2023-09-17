import { goitGlobalAPI } from "./axios_api"

const refs = {
    gallery_btn: document.querySelector(".gallery-btn"),
    recipes_container: document.querySelector(".recipes-modal-container"),
    recipes_wrap: document.querySelector(".modal-recipes-wrap"),
    close_btn: document.querySelector(".close-recipes-btn"),
    card_markup_modal: document.querySelector(".card-markup-modal"),
    
}
refs.gallery_btn.addEventListener("click", openModalRecipes);


// OPEN AND CLOSE MODAL
function openModalRecipes(e) {
    refs.recipes_container.classList.add("active");
    refs.recipes_wrap.classList.add("active");

    // Додаємо слухачі для закриття модального вікна
    refs.recipes_container.addEventListener("click", closeModalRecipesOnClick);
    refs.close_btn.addEventListener("click", closeModalRecipes);
    window.addEventListener("keydown", closeModalRecipesOnEsc);

}

function closeModalRecipesOnClick(e) {
    if (e.target === refs.recipes_container) {
        closeModalRecipes(e);
     }
}

function closeModalRecipes(e) {

    refs.recipes_container.classList.remove("active");
    refs.recipes_wrap.classList.remove("active");

    // Видаляємо слухачі
    refs.recipes_container.removeEventListener("click", closeModalRecipes);
    refs.close_btn.removeEventListener("click", closeModalRecipes);
    window.removeEventListener("keydown", closeModalRecipesOnEsc);
    
}

function closeModalRecipesOnEsc(e) {
    if (e.key === "Escape") {
        closeModalRecipes(e);
    }
}

// API
const modalRecipesApi = new goitGlobalAPI();


async function catchRecipes() {
    
    try {        
        const data = await modalRecipesApi.getRecipesById("6462a8f74c3d0ddd28897fbf");
        console.log("My ",data);
        
        refs.card_markup_modal.innerHTML = markupRecipes(data);
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
    
}
catchRecipes();

function markupRecipes(recipesArr) {
    let markup = ``;

    markup += createVideoAndTitle(recipesArr);
    markup += markupStar(recipesArr);
    markup += markupIngradientAndTeg(recipesArr);
    markup += markupInstructions(recipesArr);
    

    return markup;
}

function createVideoAndTitle(recipesArr) {
    return `      <!-- дів для обміну місцями відео й заголовка -->
      <div class="modal-reverse-title">
        <a
          class="youtube-link"
          target="_blank"
          rel="noopener noreferrer"
          href="${recipesArr.youtube}"
        >
          <img
            class="modal-iframe-video"
            src="${recipesArr.thumb}"
            alt="Recipe video"
            width="295"
            height="295"
          />
          <svg width="38" height="38" fill="none" class="icon-youtube">
            <path
              stroke="#F8F8F8"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M35.688 5.165a4.401 4.401 0 0 0-3.071-3.167C29.893 1.333 19 1.333 19 1.333s-10.893 0-13.617.729a4.402 4.402 0 0 0-3.071 3.166 45.918 45.918 0 0 0-.729 8.376c-.017 2.83.226 5.655.729 8.44a4.401 4.401 0 0 0 3.071 3.04c2.724.728 13.617.728 13.617.728s10.893 0 13.617-.729a4.402 4.402 0 0 0 3.071-3.166c.495-2.743.739-5.526.729-8.313a45.912 45.912 0 0 0-.729-8.439Z"
            ></path>
            <path
              stroke="#F8F8F8"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m15.438 18.782 9.104-5.178-9.105-5.177v10.355Z"
            ></path>
          </svg>
        </a>
        <h3 class="modal-recipe-name">${recipesArr.title}</h3>
      </div>`
}

function markupStar(recipesArr) {
    return ` <div class="modal-general-info">
        <!-- Matt start-->
        <div class="card-star-modal">
          <!-- <p class="modal-raiting cards-raiting">4.5</p>
          <div class="starts-modal rating-wrapper"></div>
          <p class="modal-card-time">40 min</p> -->
        </div>
        <!-- Matt end-->`;
}

function markupIngradientAndTeg(recipesArr) {
    const ingradient = recipesArr.ingredients
    .map(ingredient => `
      <li class="modal-name-ingradient"> ${ingredient.name} <span class="modal-measure">${ingredient.measure}</span> </li>
    `
    )
    .join('');
    const markupIngradient = `<div class="modal-reverse-list">
          <ul class="modal-ingradient-list">
            ${ingradient}
          </ul>`;
    
    // Tags
  const tags = recipesArr.tags
    .map(
      tag => `
      <li class="modal-hashtag-item">#${tag}</li>
    `
    )
    .join('');
    
    const markupTag = ` <!-- Teg -->
          <ul class="modal-hashtag-list">
            ${tags}
          </ul>
        </div>`
    
    return markupIngradient + markupTag;
}
function markupInstructions(recipesArr) {
    return `<p class="modal-recipe-instructions">
          ${recipesArr.instructions}
        </p>
      </div>`
}
                 