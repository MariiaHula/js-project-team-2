
import iconSvg from '../images/icon.svg'
import { goitGlobalAPI } from "./axios_api"

export function markupGalleryCard(arr) {
  if (!Array.isArray(arr)) {

    return '';
  }
  const markup = arr.map(cardEl => {
    return `
       <li class="gallery-item" data-category="${cardEl.category}" id=" ${cardEl._id}">
          <label class="label" > <input type="checkbox" name="favorite" class="checkbox-favorite" >
        
          <svg class='gallery-icon-checkbox'>
            <use href="${iconSvg}#icon-heart" > </use>
            
          </svg>
       
        </label>
       
        
          <img src="${cardEl.thumb}"class="gallery-image" width=alt="dish image" />
        <div class="gallery-wrap-descr-reciept-card">
          <h2 class="gallery-card-title">${cardEl.title}</h2>
          <h3 class="gallery-card-subtitle">${cardEl.description}</h3>
          <form class="gallery-form-rating">
            <div class="gallery-card-stars-rating">
              <label class="gallery-average-rating">${cardEl.rating}</label>
              <input type="radio" name="rating" value="5" id="gallery-star-rating" />
              <input type="radio" name="rating" value="4" id="gallery-star-rating" />
              <input type="radio" name="rating" value="3" id="gallery-star-rating" />
              <input type="radio" name="rating" value="2" id="gallery-star-rating" />
              <input type="radio" name="rating" value="1" id="gallery-star-rating" />
            </div>

            <button type="button" class="gallery-btn" data-id="${cardEl._id}">See recipe</button>
          </form>
        </div>
      </li>
    `
  }).join('');
  return markup
}

// export function renderGalleryCard() {
//   const galleryListEl = new goitGlobalAPI();
//   galleryListEl.getRecipes(6)
//     .then(response => {
//       galleryListEl.innerHTML = markupGalleryCard(response.results)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }


// const checkedHeart = document.querySelector('.gallery-icon-checkbox');

// checkedHeart.addEventListener('click', () => {
//   const useElement = document.createElement('use');
//   useElement.setAttribute('href', `${iconSvg}#icon-heart-checked`);


//   checkedHeart.appendChild(useElement);
// });



