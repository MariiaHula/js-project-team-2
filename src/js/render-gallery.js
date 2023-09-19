export function markupGalleryCard(arr) {
  if (!Array.isArray(arr)) {

    return '';
  }
  const markup = arr.map(cardEl => {
    return `
       <li class="gallery-item" data-category="${cardEl.category}" id="${cardEl._id}">
        <svg class="gallery-card-heart-svg">
          <use href="./images/icon.svg#icon-search"></use>
        </svg>
        <input type="checkbox" name="favorite">
        <div class="gallery-picture">
          <img src="${cardEl.thumb}" alt="${cardEl.title}"
            class="gallery-image" />
        </div>
        <div class="gallery-wrap-descr-reciept-card">
          <h2 class="gallery-card-title">${cardEl.title}</h2>
          <h3 class="gallery-card-subtitle">${cardEl.description}</h3>
          <form class="gallery-form-rating">
            <div class="gallery-card-stars-rating">
              <label class="gallery-average-rating">${cardEl.rating}</label>
              <svg class="is-active"><use href="./images/icon.svg#icon-star"></use></svg>
              <svg class="is-active"><use href="./images/icon.svg#icon-star"></use></svg>
              <svg class="is-active"><use href="./images/icon.svg#icon-star"></use></svg>
              <svg class="is-active"><use href="./images/icon.svg#icon-star"></use></svg>
              <svg class="is-active"><use href="./images/icon.svg#icon-star"></use></svg>  
            </div>
            <button type="button" class="gallery-btn" data-id="${cardEl._id}">See recipe</button>
          </form>
        </div>
      </li>
    `
  }).join('');
  return markup;
}

