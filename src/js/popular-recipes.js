
import { goitGlobalAPI } from "./axios_api"
function markupPopularRecipes(recipesArr) {
    const markup = recipesArr.map(recipe => {
        return `<li class="popular-recipes-item">
        <a class="popular-recipes-link link js-popular" href="#">
            <img class="popular-img-wrapper" src="${recipe.preview}" alt="${recipe.title}" />
            <div class="popular-wrapper">
            <h2 class="popular-recipes-title js-title">${recipe.title}</h2>
            <p class="popular-recipes-text js-text">${recipe.description}</p>
            </div>
          </a>
      </li>`
    }).join('');
    return markup;
}

const popularListEl = document.querySelector('.js-popular-list');

const popularRecipes = new goitGlobalAPI();

function truncateTextMobile(data) {
  if (data.title.length > 17) {
    data.title = data.title.substring(0, 18) + '...';
  }
  if (data.description.length > 75) {
    data.description = data.description.substring(0, 75) + '...';
  }
}
// function truncateTablet() {

// }
// function truncateDesctop() {

// }
async function addPopularRecipes() {
    try {
        const data = await popularRecipes.getPopularRecipes();
        console.log(data);
        if (window.innerWidth < 768) {
            let string = '';
            for (let i = 0; i < (data.length - 1) / 2; i++) {
                truncateTextMobile(data[i]);
                string += markupPopularRecipes([data[i]]);
                console.log(data[i]);
            }
            popularListEl.innerHTML = string;
            
        } else if (window.innerWidth > 768 && window.innerWidth < 1280) {
            let string = '';
            for (let i = 0; i < data.length; i++) {
              truncateTextMobile(data[i]);
              string += markupPopularRecipes([data[i]]);
              console.log(data[i]);
            }
            popularListEl.innerHTML = string;
        } else {
            let string = '';
            for (let i = 0; i < data.length; i++) {
              truncateTextMobile(data[i]);
              string += markupPopularRecipes([data[i]]);
              console.log(data[i]);
            }
            popularListEl.innerHTML = string;
        }
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
}
addPopularRecipes();
