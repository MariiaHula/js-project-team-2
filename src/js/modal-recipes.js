import { goitGlobalAPI } from "./axios_api"


const refs = {
    gallery_btn: document.querySelector(".gallery-btn"),
    recipes_container: document.querySelector(".recipes-modal-container"),
    recipes_wrap: document.querySelector(".modal-recipes-wrap"),
    close_btn: document.querySelector(".close-recipes-btn"),
    card_markup_modal: document.querySelector(".card-markup-modal"),
    popular_recipes: document.querySelector(".popular-recipes-list"),
    skelet: document.querySelector(".cardSkelet"),
    extra_modal_button: document.querySelector(".extra-modal-button",)
    
}

// API
const modalRecipesApi = new goitGlobalAPI();


// refs.gallery_btn.addEventListener("click", openModalRecipes);
refs.popular_recipes.addEventListener("click", openModalPopularRecipes);

function openModalPopularRecipes(e) {
 if (!e.target.closest('.popular-recipes-link')) {
    return;
  }

  const clickedRecipe = e.target.closest('.popular-recipes-link');
  if (!clickedRecipe) return;
  const recipeId = clickedRecipe.id;
  openModalRecipes();
  catchRecipes(recipeId);
  setTimeout(() => {
    refs.skelet.classList.add("is-hidden");
    refs.card_markup_modal.classList.remove("is-hidden");
    refs.extra_modal_button.classList.remove("is-hidden");
    }, 1500);
  }



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
    
    refs.skelet.classList.remove("is-hidden");
    refs.card_markup_modal.classList.add("is-hidden");
    refs.extra_modal_button.classList.add("is-hidden");
}

function closeModalRecipesOnEsc(e) {
    if (e.key === "Escape") {
        closeModalRecipes(e);
    }
}




async function catchRecipes(recipeId) {
    
  try {
    const data = await modalRecipesApi.getRecipesById(`${recipeId}`);
    refs.card_markup_modal.innerHTML = markupRecipes(data);
    starRend(data);
  }
  catch (err) {
    console.log(`Error: ${err}`);
  }
}

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


// function markupStar(recipesArr) {
//   return ` <div class="modal-general-info">
       
//         <div class="card-star-modal">
//         <div class="recipe-star-modal">
//             <div class="modal-recipe-rating">${recipesArr.rating}</div>
//             <div class="modal-recipe-active"></div>
//             <div class="modal-recipe-time">${recipesArr.time} min</div>
//         </div>
//         </div>
//        `;
  
// }
function markupStar(recipesArr) {
  return ` <div class="modal-general-info">
       
        <div class="card-star-modal">
        <div class="recipe-star-modal">
            <div class="modal-recipe-rating">${recipesArr.rating}</div>
            <div class="modal-recipe-active">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="#EEA10C" class="star-1">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="#EEA10C" class="star-2">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="#EEA10C" class="star-3">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="#EEA10C" class="star-4">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="#EEA10C" class="star-5">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" />
</svg>
            </div>
            <div class="modal-recipe-time">${recipesArr.time} min</div>
        </div>
        </div>
       `;
  
}




function starRend(recipesArr) {
  const starInt = Math.round(recipesArr.rating); 

  for (let i = 1; i <= starInt; i++){
    const star = document.querySelector(`.star-${i}`);
    star.classList.add("activeStar");

  }

  // const starsRecipeModal = document.querySelector('.modal-recipe-active'); 
  // const ratingActiveWidth = recipesArr.rating / 0.05;  
  // starsRecipeModal.style.width = `${ratingActiveWidth}%`;
}





  // function initRatingVars(rating) {
  //       ratingActive = rating.querySelector('.modal-rating-active');
  //       ratingValue = rating.querySelector('.modal-rating-value');
  //   }

  //   function setRatingActiveWidth(index = ratingValue.innerHTML) {
  //       const ratingActiveWidth = index / 0.05;
  //       ratingActive.style.width = `${ratingActiveWidth}%`;
  //   }










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
                 