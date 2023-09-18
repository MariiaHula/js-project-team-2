import './js/axios_api';
import { goitGlobalAPI } from './js/axios_api';
import './js/categories';
import './js/gallery';
import './js/header';
import './js/hero';
import './js/localStorage';
import './js/modal-order';
import './js/modal-rating';
import './js/modal-recipes';
import './js/popular-recipes';
import './js/render-gallery';


const test = new goitGlobalAPI();

test.getRecipes(9).then(res => console.log(res)).catch(err => console.log(err));


