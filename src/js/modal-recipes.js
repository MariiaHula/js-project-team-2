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
            <svg class="icon-youtube" width="32" height="32" viewBox="0 0 32 32">
<title>youtube</title>
<path d="M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"></path>
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
            

