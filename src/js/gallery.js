import debounce from "lodash.debounce";
import { goitGlobalAPI } from "./axios_api";
import { markupGalleryCard, renderGalleryCard } from "./render-gallery";

const refs = {
  galleryFormFilterEl: document.querySelector('.gallery-form-filter'),
  galleryListEl: document.querySelector('.gallery-list'),
  inputtEl: document.querySelector('.search-igredien'),
  selectTimeEl: document.querySelector('.select-time'),
  selectAreaEl: document.querySelector('.select-area'),
  selectIgredientEl: document.querySelector('.select-ingredients'),
  resetFilterEl: document.querySelector('.gallery-reset-btn')
};

// =========================INPUT===========================

refs.galleryFormFilterEl.addEventListener('submit', onFormElSubmit);
const searchInputApi = new goitGlobalAPI();

function onFormElSubmit(event) {
  event.preventDefault()
  const inputValue = event.target.elements.query.value.trim().toLowerCase();
  console.log(inputValue);
  searchInputApi.getRecipes(1, 9, {
    title: inputValue,
  }).then(response => {



    const generatedMarkup = markupGalleryCard(response.results);
    refs.galleryListEl.innerHTML = generatedMarkup; // В

    console.log(response)


  }).catch(err => {
    console.log(err)
  })

}
// =========================selectTIME=======================


refs.selectTimeEl.addEventListener('click', eventTime => {
  refs.selectTimeEl.innerHTML = '';
  for (i = 1; i <= 160; i += 1) {
    const optionTime = document.createElement("option");
    optionTime.textContent = `${i} min`;
    refs.selectTimeEl.appendChild(optionTime);

  }
})
















// =========================selectAREA=======================

function markupArea(arr) {
  const markup = arr.map(areaEl => {
    return `
          <option>${areaEl.name}</option>        
    `
  }).join();
  return markup
}

function renderArea() {
  const selectArea = new goitGlobalAPI();
  selectArea.getAreas()
    .then(response => {
      refs.selectAreaEl.innerHTML = markupArea(response)
    })
    .catch(err => {
      console.log(err)
    })
}
renderArea();






// =========================selectINGREDIENTS=======================
function markupIngredients(arr) {
  const markup = arr.map(ingredientEl => {
    return `
          <option>${ingredientEl.name}</option>        
    `
  }).join();
  return markup
}

function renderIngredients() {
  const selectIngredient = new goitGlobalAPI();
  selectIngredient.getIngredients()
    .then(response => {
      refs.selectIgredientEl.innerHTML = markupIngredients(response)
    })
    .catch(err => {
      console.log(err)
    })
}
renderIngredients();


