import { event } from "jquery";
import { goitGlobalAPI } from "./axios_api";

const refs = {
    allCategoriesBtnEl: document.querySelector('.btn-all-categories'),
    categoriesEl: document.querySelector('.categories-list'),
    btnCategoriesEl: setTimeout(document.querySelector('.btn-categories-item'),0),

}
console.log(refs.btnCategoriesEl);
const goitGlobalApi = new goitGlobalAPI();

const renderCategories = async event => {
    try {
        const response = await goitGlobalApi.getCategories();
        
        const markup = response.map(el => {
            return `
        <li>
        <button class="btn-categories-item" type="button" data-categories-id="${el._id}">${el.name}</button>
        </li>`
        }).join('');

        refs.categoriesEl.innerHTML = markup;
        
    } catch (err) {
        console.log(err);
    };
    
};
renderCategories();


// refs.allCategoriesBtnEl.addEventListener('click', onAllCategoriesBtnElClick);



