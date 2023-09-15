import './js/axios_api';
import './js/categories';
import './js/gallery';
import './js/header';
import './js/hero';
import './js/localStorage';
import './js/modal-order';
import './js/modal-rating';
import './js/modal-recipes';
import './js/popular-recipes';

import { goitGlobalAPI } from './js/axios_api';
import axiosInstance from "axios";

// if (window.screen > такийто розмір екрану)
// {
//     const test = new goitGlobalAPI(6);
//     }
    const test = new goitGlobalAPI(6);

test.getEvents().then(response => console.log(response)).catch(err => console.log(err));
test.getCategories().then(response => console.log(response)).catch(err => console.log(err));
test.getAreas().then(response => console.log(response)).catch(err => console.log(err));
test.getPopularRecipes().then(response => console.log(response)).catch(err => console.log(err));
test.getIgridients().then(response => console.log(response)).catch(err => console.log(err));
test.getAllRecipesCategories().then(response => console.log(response)).catch(err => console.log(err));