// ====
import { goitGlobalAPI } from "./axios_api";
export function markupGalleryCard(arr) {
  if (!Array.isArray(arr)) {

    return '';
  }
  const markup = arr.map(cardEl => {
    console.log(cardEl)
    return `
       <li class="gallery-item" data-category="${cardEl.category}" id=" ${cardEl._id}">
        <svg class="gallery-card-heart-svg">
          <use href="./images/icon.svg#icon-search"></use>
        </svg>
        <input type="checkbox" name="favorite">
        <picture class="gallery-picture">
          <!-- <source srcset="#" media="(min-width: 1200px)" type="image/webp" />
          <source srcset="#" media="(min-width: 1200px)" />

          <source srcset="#" media="(min-width: 768px)" type="image/webp" />
          <source srcset="#" media="(min-width: 768px)" />

          <source srcset="#" media="(min-width: 320px)" type="image/webp" />
          <source srcset="#" media="(min-width: 320px)" /> -->
          <img src="${cardEl.thumb}" width=alt="dish image"
            class="gallery-image" />
        </picture>
        <div class="gallery-wrap-descr-reciept-card">
          <h2 class="gallery-card-title">${cardEl.title}</h2>
          <h3 class="gallery-card-subtitle">${cardEl.description}</h3>
          <form class="gallery-form-rating">
            <div class="gallery-card-stars-rating">
              <label class="gallery-average-rating">4.5</label>
              <input type="radio" name="rating" value="5" id="gallery-star-rating" />
              <input type="radio" name="rating" value="4" id="gallery-star-rating" />
              <input type="radio" name="rating" value="3" id="gallery-star-rating" />
              <input type="radio" name="rating" value="2" id="gallery-star-rating" />
              <input type="radio" name="rating" value="1" id="gallery-star-rating" />
            </div>

            <button type="button" class="gallery-btn">See recipe</button>
          </form>
        </div>
      </li>
    `
  }).join();
  return markup
}

export function renderGalleryCard() {
  const galleryListEl = new goitGlobalAPI();
  galleryListEl.getRecipes()
    .then(response => {
      galleryListEl.innerHTML = markupGalleryCard(response)
    })
    .catch(err => {
      console.log(err)
    })
}
