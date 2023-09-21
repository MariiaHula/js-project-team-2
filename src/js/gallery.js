import debounce from 'lodash.debounce';
import locale from './localStorage';
import { goitGlobalAPI } from './axios_api';
import { markupGalleryCard } from './render-gallery';
import Notiflix from 'notiflix';
import { renderAllRecipes } from './categories';
import Pagination from 'tui-pagination';
import '../../node_modules/tui-pagination/dist/tui-pagination.css';

const refs = {
  galleryFormFilterEl: document.querySelector('.gallery-form-filter'),
  galleryListEl: document.querySelector('.gallery-list'),
  selectTimeEl: document.querySelector('.select-time'),
  selectAreaEl: document.querySelector('.select-area'),
  selectIgredientEl: document.querySelector('.select-ingredients'),
  resetFilterEl: document.querySelector('.gallery-reset-btn'),
  gallerySelectEl: document.querySelector('.gallery-div-select'),
  galleryInputEl: document.querySelector('.search-igredient'),
  galleryCheckboxFavorite: document.querySelector('.checkbox-favorite'),
};

let searchInputApi;

if (window.innerWidth < 768) {
  searchInputApi = new goitGlobalAPI(6);
} else if (window.innerWidth > 768 && window.innerWidth < 1280) {
  searchInputApi = new goitGlobalAPI(8);
} else {
  searchInputApi = new goitGlobalAPI(9);
}

//================INPUT=====================================

async function onGalleryInputElInput(event) {
  searchInputApi.page = 1;
  searchInputApi.title = event.target.value.trim().toLowerCase();
  try {
    const response = await searchInputApi.getRecipes();
    if (response.totalPages === 0) {
      Notiflix.Notify.failure('Incorrect search value, please change the name');
      event.target.reset();
      refs.galleryListEl.innerHTML = '';
      return;
    }

    refs.galleryListEl.innerHTML = markupGalleryCard(response.results);

    const options = {
      totalItems: response.results.length * response.totalPages,
      itemsPerPage: searchInputApi.perPage,
      visiblePages: 3,
      page: searchInputApi.page,
    };

    const pagination = new Pagination('pagination', options);

    pagination.on('afterMove', async event => {
      searchInputApi.page = event.page;
      try {
        const response = await searchInputApi.getRecipes();
        refs.galleryListEl.innerHTML = markupGalleryCard(response.results);
      } catch (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
}

async function onGalleryDivSelectOptions(event) {
  searchInputApi.page = 1;

  const { name, value } = event.target;
  if (name === 'time') {
    searchInputApi.time = value;
  } else if (name === 'area') {
    searchInputApi.area = value;
  } else if (name === 'ingredients') {
    const ingId = event.target.selectedOptions[0].getAttribute('data-id');
    if (ingId === null || ingId === '') {
      searchInputApi.ingredient = '';
    } else {
      searchInputApi.ingredient = ingId;
    }
  }

  try {
    const response = await searchInputApi.getRecipes();
    if (response.totalPages === 0) {
      Notiflix.Notify.failure(
        'Sorry, no recipe was found with these parameters'
      );
      return;
    } else {
      refs.galleryListEl.innerHTML = markupGalleryCard(response.results);

      const options = {
        totalItems: response.results.length * response.totalPages,
        itemsPerPage: searchInputApi.perPage,
        visiblePages: 3,
        page: searchInputApi.page,
      };

      const pagination = new Pagination('pagination', options);

      pagination.on('afterMove', async event => {
        searchInputApi.page = event.page;
        try {
          const response = await searchInputApi.getRecipes();
          refs.galleryListEl.innerHTML = markupGalleryCard(response.results);
        } catch (err) {
          console.log(err);
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
}

function onResetFilterElClick(event) {
  if (event.target !== event.currentTarget) {
    return;
  } else {
    refs.galleryFormFilterEl.reset();
    searchInputApi.title = '';
    searchInputApi.area = '';
    searchInputApi.time = '';
    searchInputApi.ingredient = '';
    refs.galleryListEl.innerHTML = '';
    renderAllRecipes();
  }
}

function ongalleryFormFilterElSubmit(event) {
  event.preventDefault();
}

refs.galleryInputEl.addEventListener(
  'input',
  debounce(onGalleryInputElInput, 300)
);
refs.selectTimeEl.addEventListener('change', onGalleryDivSelectOptions);
refs.selectAreaEl.addEventListener('change', onGalleryDivSelectOptions);
refs.selectIgredientEl.addEventListener('change', onGalleryDivSelectOptions);
refs.resetFilterEl.addEventListener('click', onResetFilterElClick);
refs.galleryFormFilterEl.addEventListener(
  'submit',
  ongalleryFormFilterElSubmit
);

// =========================selectTIME=======================
function markupTime() {
  const time = [];

  for (let i = 1; i < 160; i++) {
    time.push(i);
  }

  const markup = time
    .map(elem => {
      return `
      <option class="options" value="${elem}">${elem} min</option>
    `;
    })
    .join('');

  refs.selectTimeEl.insertAdjacentHTML('beforeend', markup);
}
markupTime();

// =========================selectAREA=======================

function markupArea(arr) {
  const markup = arr
    .map(areaEl => {
      return `
      <option value="${areaEl.name}">${areaEl.name}</option>        
    `;
    })
    .join('');
  return markup;
}

async function renderArea() {
  const selectArea = new goitGlobalAPI();
  try {
    const response = await selectArea.getAreas();
    refs.selectAreaEl.insertAdjacentHTML('beforeend', markupArea(response));
  } catch (err) {
    console.log(err);
  }
}
renderArea();

// =========================selectINGREDIENTS=======================
function markupIngredients(arr) {
  const markup = arr
    .map(ingredientEl => {
      return `
      <option value="${ingredientEl.name}" data-id="${ingredientEl._id}">${ingredientEl.name}</option>        
    `;
    })
    .join('');
  return markup;
}

async function renderIngredients() {
  const selectIngredient = new goitGlobalAPI();

  try {
    const response = await selectIngredient.getIngredients();
    refs.selectIgredientEl.insertAdjacentHTML(
      'beforeend',
      markupIngredients(response)
    );
  } catch (err) {
    console.log(err);
  }
}
renderIngredients();
