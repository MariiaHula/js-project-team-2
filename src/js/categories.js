import { data, event } from "jquery";
import { goitGlobalAPI } from "./axios_api";
import { markupGalleryCard, checkFavorites} from "./render-gallery";
import Pagination from 'tui-pagination';
import '../../node_modules/tui-pagination/dist/tui-pagination.css';  

const refs = {
    allCategoriesBtnEl: document.querySelector('.btn-all-categories'),
    categoryEl: document.querySelector('.categories-list'),
    btnCategoriesEl: document.querySelector('.btn-categories-item'),
    galleryListEl: document.querySelector('.gallery-list')

}

let goitGlobalApi;

if (window.innerWidth < 768) {
  goitGlobalApi = new goitGlobalAPI(6);
} else if (window.innerWidth > 768 && window.innerWidth < 1280) {
  goitGlobalApi = new goitGlobalAPI(8);
} else {
  goitGlobalApi = new goitGlobalAPI(9);
}


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


export const renderAllRecipes = async event => {
    
    const response = await goitGlobalApi.getRecipes();

    refs.galleryListEl.innerHTML = markupGalleryCard(response.results); 
        checkFavorites()
        const options = {
        totalItems: response.results.length * response.totalPages,
        itemsPerPage: goitGlobalApi.perPage,
        visiblePages: 3,
        page: goitGlobalApi.page,
    }

    const pagination = new Pagination('pagination', options);
        
    pagination.on('afterMove', async event => {
       goitGlobalApi.page = event.page;
      try {
        const response = await goitGlobalApi.getRecipes();
        refs.galleryListEl.innerHTML = markupGalleryCard(response.results);
        checkFavorites()
      } catch (err) {
        console.log(err);
      }
    });
}
    
renderAllRecipes();


export const onAllCategoriesBtnElClick = async event => {
    goitGlobalApi.page = 1;
    goitGlobalApi.category = '';
    const response = await goitGlobalApi.getRecipes();
    
  refs.galleryListEl.innerHTML = markupGalleryCard(response.results);
  checkFavorites()
        const options = {
        totalItems: response.results.length * response.totalPages,
        itemsPerPage: goitGlobalApi.perPage,
        visiblePages: 3,
        page: goitGlobalApi.page,
    }

    const pagination = new Pagination('pagination', options);
        
    pagination.on('afterMove', async event => {
       goitGlobalApi.page = event.page;
      try {
        const response = await goitGlobalApi.getRecipes();
        refs.galleryListEl.innerHTML = markupGalleryCard(response.results);
        checkFavorites()
      } catch (err) {
        console.log(err);
      }
    });
 
};

refs.allCategoriesBtnEl.addEventListener('click', onAllCategoriesBtnElClick);

const onCategoryElClick = async event => {
    
    goitGlobalApi.category = event.target.textContent;
    if (event.target.classList.contains('active')) {
        return;
    }
    
    let value = event.target.textContent; 

    const response = await goitGlobalApi.getRecipes();
            
    const recipesCategory = response.results.filter(results => results.category === value);
        
    refs.galleryListEl.innerHTML = markupGalleryCard(recipesCategory);
checkFavorites()
    const options = {
        totalItems: response.results.length * response.totalPages,
        itemsPerPage: goitGlobalApi.perPage,
        visiblePages: 3,
        page: goitGlobalApi.page,
    }

    const pagination = new Pagination('pagination', options);
        
    pagination.on('afterMove', async event => {
       goitGlobalApi.page = event.page;
      try {
        const response = await goitGlobalApi.getRecipes();
        refs.galleryListEl.innerHTML = markupGalleryCard(response.results);
        checkFavorites()
      } catch (err) {
        console.log(err);
      }
    });

};
refs.categoryEl.addEventListener('click', onCategoryElClick)




