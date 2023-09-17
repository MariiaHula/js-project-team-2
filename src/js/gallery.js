import debounce from "lodash.debounce";
// import { GalleryApi } from "./gallery_api";
import { goitGlobalAPI } from "./axios_api";

const refs = {
  galleryFormFilterEl: document.querySelector('.gallery-form-filter'),
  inputtEl: document.querySelector('.search-igredien'),
  selectTimeEl: document.querySelector('.select-time'),
  selectAreaEl: document.querySelector('.select-area'),
  selectIgredientEl: document.querySelector('.select-ingredients'),
  resetFilterEl: document.querySelector('.gallery-reset-btn')
};




refs.galleryFormFilterEl.addEventListener('submit', onFormElClick);
const galleryApi = new goitGlobalAPI();

function onFormElClick(event) {
  event.preventDefault()

  const inputValue = event.target.elements.query.value.trim().toLowerCase();
  console.log(inputValue);
  galleryApi.getRecipes(1, 9, {
    title: inputValue,
  }).then(response => {
    console.log(response)
  }).catch(err => {
    console.log(err)
  })
}
























































































// refs.selectTimeEl.addEventListener('click', event => {


//   return fetch(
//     `https://web.postman.co/workspace/My-Workspace~e8dc7445-1b08-4804-8037-66543b606fc5/history/29716901-13948a91-ecca-429d-9233-f96673d18cf5`
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderSelectOption(data.results);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// });

// function renderSelectOption(data) {
//   refs.selectTimeEl.innerHTML = '';

//   data.forEach(recipe => {
//     const optionTime = document.createElement('option');
//     optionTime.value = recipe.time;
//     optionTime.textContent = data.results;
//     refs.selectTimeEl.appendChild(optionTime);
//     console.log(optionTime)



//     const optionArea = document.createElement('option');
//     optionArea.value = recipe.area;
//     optionArea.textContent = recipe.area;
//     refs.selectAreaEl.appendChild(optionArea);
//     console.log(optionArea)

//     const optionIngredient = document.createElement('option');
//     optionIngredient.value = recipe.ingredients;
//     optionIngredient.textContent = recipe.ingredients;
//     refs.selectIgredientEl.appendChild(optionIngredient);
//     console.log(optionIngredient)


//   });

// }

// const test = new goitGlobalAPI();

// test.getRecipes(1, 6, {
//   title: '40',
// }).then(res => console.log(res)).catch(err => console.log(err));




// 1 прослушиватель действия
// 2 функция запроса на сервер
// 3 связываем прослушиватель и запрос на сервер
// 4 ответ который приходит начинает рендериться
























// const galleryFormElfilter = document.querySelector('.gallery-form-filter');
// const searchIngredient = document.querySelector('.search-igredient');




// const exemplyarClassa = new goitGlobalAPI();


// const onsearchIngredient = (event) => {

//   console.log(event.target.value);
// }
// const delayedFunction = debounce(onsearchIngredient, 300);
// searchIngredient.addEventListener('input', delayedFunction);










// "В базовій версії (MVP) блок
// з панеллю фільтрів містить лише пошукову строку для пошуку рецептів по вмісту
//  ключового слова у заголовку рецептів.Всі інші фільтри(пошук за часом, країною походження та інгредієнтом) є додатковим завданням.
// При реалізації пошуку за ключовим словом необхідно застосувати прийом Debounce
//  на обробнику події і робити запит через 300мс після того, як користувач перестав вводити текст(за допомогою пакету lodash.debounce).
//  Якщо користувач повністю очищує поле пошуку - запит виконується за рецептами попередньо обраної категорії або рецептами, що належать до усіх
// категорій(в залежності від поточного вибору користувача у блоці з переліком категорій).Також при реалізації пошуку слід виконувати санітизацію
//  введеного рядка методом trim(), що вирішить проблему, коли в полі введені тільки пробіли або якщо вони є на початку і в кінці введеного ключового слова"