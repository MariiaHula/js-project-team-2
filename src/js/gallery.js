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
  resetFilterEl: document.querySelector('.gallery-reset-btn'),


};

// 1  Если посетитель начал выбирать сперва select,
// тогда ему уведомление, что сначала надо ввести инпут или моргает сам инпут

// 2 Если посетитель ввел ключевое слово и нажал энтер, тогда ему рендер всех карточек

// 3 Посетитель ввел ключевое слово и выбирает одну опцию, после чего нажимает энтер и
//  ему рендерятся карточку по его слову + выбранной опции

// 4 Посетитель ввел ключевое слово и выбирает две опцию, после чего нажимает энтер и
//  ему рендерятся карточку по его слову + две опции

// 5 Посетитель ввел ключевое слово и выбирает все опцию, после чего нажимает энтер и
//  ему рендерятся карточку по его слову + все опции

// =========================INPUT===========================
// const queryOption = document.querySelector('.query-option');
// console.log(queryOption)
// refs.galleryFormFilterEl.addEventListener('submit', onFormElSubmit);
// const searchInputApi = new goitGlobalAPI();

// function onFormElSubmit(event) {
//   event.preventDefault()
//   searchInputApi.title = event.target.elements.query.value.trim().toLowerCase();
//   searchInputApi.area = refs.selectAreaEl.value;
//   console.log(refs.selectAreaEl.value)

//   searchInputApi.getRecipes(6).then(response => {

//     const generatedMarkup = markupGalleryCard(response.results);

//     refs.galleryListEl.innerHTML = generatedMarkup;
//     // console.log(response.results)
//   }).catch(err => {
//     console.log(err)
//   })

// }


// ============================*******************
refs.galleryFormFilterEl.addEventListener('submit', onFormElSubmit);
const searchInputApi = new goitGlobalAPI();
searchInputApi.page = 1;
function yakasTam() {
  if (window.innerWidth < 768) {
    searchInputApi.getRecipes(6).then(data => {
      const generatedMarkup = markupGalleryCard(data.results);
      refs.galleryListEl.innerHTML = generatedMarkup;
    }).catch(err => {
      console.log(err)
    })
  } else if (window.innerWidth < 768 && window.innerWidth < 1280) {
    searchInputApi.getRecipes(8).then(data => {
      const generatedMarkup = markupGalleryCard(data.results);
      refs.galleryListEl.innerHTML = generatedMarkup;
    }).catch(err => {
      console.log(err)
    })
  } else {
    searchInputApi.getRecipes(9).then(data => {
      const generatedMarkup = markupGalleryCard(data.results);
      refs.galleryListEl.innerHTML = generatedMarkup;
    }).catch(err => {
      console.log(err)
    })
  }
}

yakasTam();
function onFormElSubmit(event) {
  event.preventDefault()
  searchInputApi.title = event.target.elements.query.value.trim().toLowerCase();
  searchInputApi.area = refs.selectAreaEl.value;
  searchInputApi.ingredient = refs.selectIgredientEl.value;
  searchInputApi.time = refs.selectTimeEl.value;
  searchInputApi.getRecipes(9).then(data => {
    if (data.totalPages === 0) {
      alert('Invalid search term');
      event.target.reset();
      galleryEl.innerHTML = '';
      return;
    }
    if (data.totalPages === 1) {
      const generatedMarkup = markupGalleryCard(data.results);
      refs.galleryListEl.innerHTML = generatedMarkup;
    } event.target.reset();
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
          <option class="query-option" >${areaEl.name}</option>        
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

// refs.selectAreaEl.addEventListener('click', elArea => {
//   const valueArea = elArea.target.value;
//   console.log(valueArea);
//   renderArea();
// })






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




