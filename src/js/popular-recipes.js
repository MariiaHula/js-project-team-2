
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
      return  data.title.substring(0, 18) + '...';
 }
    if (data.description.length > 75) {
     return  data.description.substring(0, 75) + '...';
 }
 

    // let truncatedTitle = title.substring(0, 18) + "...";
    // let truncatedText = text.substring(0, 75) + "...";
    // document.querySelector('.js-title').innerHTML = truncatedTitle;
    // document.querySelector('.js-text').innerHTML = truncatedText;
   
}

function truncateTablet() {
    let title = document.querySelector('.js-title').innerHTML;
    let text = document.querySelector('.js-text').innerHTML;
    let truncatedTitle = title.substring(0, 13) + "...";
    let truncatedText = text.substring(0, 70) + "...";
    document.querySelector('.js-title').innerHTML = truncatedTitle;
    document.querySelector('.js-text').innerHTML = truncatedText;
}
function truncateDesctop() {
    let title = document.querySelector('.js-title').innerHTML;
    let text = document.querySelector('.js-text').innerHTML;
    let truncatedTitle = title.substring(0, 13) + "...";
    let truncatedText = text.substring(0, 70) + "...";
    document.querySelector('.js-title').innerHTML = truncatedTitle;
    document.querySelector('.js-text').innerHTML = truncatedText;
}

 
async function addPopularRecipes() {
    
    try {        
        const data = await popularRecipes.getPopularRecipes();
        console.log(data);
                
        if (window.innerWidth < 768) {
            
            let string = '';

            for (let i = 0; i <= data.length/2; i++) {
                string = markupPopularRecipes([data[i]]);
                truncateTextMobile(data[i]); 
                console.log(1);
            }

            popularListEl.innerHTML = string;
            // popularListEl.innerHTML = markupPopularRecipes([data[0], data[1]]);
            // truncateTextMobile();   
            
        } else if (window.innerWidth > 768 && window.innerWidth < 1280) {
            popularListEl.innerHTML = markupPopularRecipes(data);
            truncateTablet();
        } else {
            popularListEl.innerHTML = markupPopularRecipes(data);
            truncateDesctop();
        }
            
    }
    catch (err) {
        console.log(`Error: ${err}`);
    }
    
}
addPopularRecipes();
