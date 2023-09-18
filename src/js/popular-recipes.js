
import { goitGlobalAPI } from "./axios_api"
function markupPopularRecipes(recipesArr) {
    const markup = recipesArr.map(recipe => {
        return `<li class="popular-recipes-item">
        <a class="popular-recipes-link link js-popular" href="#">
            <img class="popular-img-wrapper" src="${recipe.preview}" alt="${recipe.title}" />
            <div class="popular-wrapper">
            <h2 class="popular-recipes-head js-title">${recipe.title}</h2>
            <p class="popular-recipes-text js-text">${recipe.description}</p>
            </div>
          </a>
      </li>`
    }).join('');
    return markup;
}

const popularListEl = document.querySelector('.js-popular-list');

const popularRecipes = new goitGlobalAPI();

async function addPopularRecipes() {
    try {
        const data = await popularRecipes.getPopularRecipes();

        if (window.innerWidth < 768) {
            popularListEl.innerHTML = markupPopularRecipes([data[0], data[1]]);            
        } else {
            popularListEl.innerHTML = markupPopularRecipes(data);     
        }
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
}
addPopularRecipes();
