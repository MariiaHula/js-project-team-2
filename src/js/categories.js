import { data, event } from "jquery";
import { goitGlobalAPI } from "./axios_api";
import { markupGalleryCard} from "./render-gallery";

const refs = {
    allCategoriesBtnEl: document.querySelector('.btn-all-categories'),
    categoryEl: document.querySelector('.categories-list'),
    btnCategoriesEl: document.querySelector('.btn-categories-item'),
    galleryListEl: document.querySelector('.gallery-list')

}


let recipes = [];
const goitGlobalApi = new goitGlobalAPI();


const renderCategories = async event => {
    
        const response = await goitGlobalApi.getCategories();
        
        const markup = response.map(el => {
            return `
        <li>
        <button class="btn-categories-item" type="button" data-categories-id="${el._id}">${el.name}</button>
        </li>`
        }).join('');

        refs.categoryEl.innerHTML = markup;
       
    
    
};
renderCategories();

const onAllCategoriesBtnElClick = async event => {
    goitGlobalApi.perPage = 9;
    let data = await dataArray();
    
    refs.galleryListEl.innerHTML = markupGalleryCard(data);
};

refs.allCategoriesBtnEl.addEventListener('click', onAllCategoriesBtnElClick);

const onCategoryElClick = event => {
    if (event.target.classList.contains('active')) {
        return;
    }
    goitGlobalApi.perPage = 9;
    const value = event.target.textContent;   
    let data = dataArray();
    const recipesCategory = data.filter(results => results.category === value);
    
    refs.galleryListEl.innerHTML = markupGalleryCard(recipesCategory);
};

refs.categoryEl.addEventListener('click', onCategoryElClick)


const dataArray = async event => {
    
    let data = [];
    if (recipes[0]) {
        data = [];
    } else {
        let response = await goitGlobalApi.getRecipes();
        data = response.results;
    }
    return data;
    
};


